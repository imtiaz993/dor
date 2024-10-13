import { NextRequest, NextResponse } from "next/server";
import { connectRedis, redisClient } from "@/app/lib/redis";
import { getCustomerBasedOnContactNumber } from "@/app/lib/streamBoxApi";
import { z } from "zod";

const phoneSchema = z.object({
  phone: z.string().min(10).max(15),
});

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { phone } = phoneSchema.parse(body);

    const customer = await getCustomerBasedOnContactNumber(phone);
    console.log("CUSTOMER", customer);

    await connectRedis();

    const otp = generateOTP();
    await storeOTP(phone, otp);
    await getOTP(phone);

    await sendOTP(phone, otp);

    return NextResponse.json(
      { message: "OTP sent successfully", customer_details: customer },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error processing OTP request:", error);
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: "Invalid phone number" },
        { status: 400 }
      );
    }
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

function generateOTP(): string {
  return Math.floor(100000 + Math.random() * 900000).toString();
}

async function storeOTP(phone: string, otp: string): Promise<void> {
  await redisClient.setEx(`otp:${phone}`, 300, otp);
}

async function getOTP(phone: string): Promise<void> {
  const retrievedValue = await redisClient.get(`otp:${phone}`);
  console.log("Retrieved value:", retrievedValue);
}

async function sendOTP(phone: string, otp: string): Promise<void> {
  const url = `https://api.smartping.ai/fe/api/v1/send?username=strbotmpg.trans&password=B5daU&unicode=false&from=dortv&to=${phone}&dltPrincipalEntityId=1701171991904309835&dltContentId=1707172234130473583&text=${otp}%20is%20your%20one%20time%20password%20(OTP)%20for%20login%20into%20your%20DOR%20Account.%20DOR`;

  await fetch(url);
  console.log(`OTP for ${phone}: ${otp}`);
}
