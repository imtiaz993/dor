import { NextResponse } from "next/server";
import axios from "axios";

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const question = searchParams.get("question");

    const response = await axios.get(
      `https://erp-dev.streamboxmedia.com/api/resource/Wiki Page?fields=["content"]&filters=[["custom_ticket_item","=","${question}"]]`,
      {
        headers: {
          Authorization: `Token ${process.env.STREAMBOX_AUTH_TOKEN}`,
          "Content-Type": "application/json",
        },
      }
    );


    if (response.status === 404) {
      return NextResponse.json({ error: "FAQ not found" }, { status: 404 });
    }

    const content = response.data.data[0]?.content; 

    if (!content) {
      return NextResponse.json(
        { error: "Content not found in response" },
        { status: 404 }
      );
    }

    return NextResponse.json(content, { status: 200 });
  } catch (error) {
    console.error("Error fetching FAQ", error);
    return NextResponse.json(
      { error: "An error occurred while fetching the FAQ" },
      { status: 500 }
    );
  }
}
