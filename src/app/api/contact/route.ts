import { NextRequest, NextResponse } from "next/server";

const API_URL = process.env.NEXT_PUBLIC_API_URL || "https://p.kaktusbooking.app/website";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const clientIp = request.headers.get("x-forwarded-for")?.split(",")[0] ?? "unknown";

    const res = await fetch(`${API_URL}/contact-message`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "X-Forwarded-For": clientIp,
      },
      body: JSON.stringify(body),
    });

    const data = await res.json();

    if (res.status === 429) {
      return NextResponse.json({ error: "rate_limit", message: "Too many requests" }, { status: 429 });
    }

    return NextResponse.json(data, { status: res.status });
  } catch {
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
