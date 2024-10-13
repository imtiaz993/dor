import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';
import { connectRedis, redisClient } from "@/app/lib/redis";

const otpSchema = z.object({
  phone: z.string().nonempty(),
  otp: z.string().length(6)
});

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { phone, otp } = otpSchema.parse(body);

    await connectRedis();

    const storedOtp = await getOTP(phone);

    if (storedOtp === otp) {
      return NextResponse.json(
        { message: 'OTP verified successfully' },
        { status: 200 }
      );
    } else {
      return NextResponse.json(
        { error: 'Invalid OTP' },
        { status: 400 }
      );
    }
  } catch (error) {
    console.error('Error verifying OTP:', error);
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: 'Invalid input' },
        { status: 400 }
      );
    }
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

async function getOTP(phone: string): Promise<string | null> {
  const retrievedValue = await redisClient.get(`otp:${phone}`);
  console.log("Retrieved value:", retrievedValue);
  return retrievedValue;
}