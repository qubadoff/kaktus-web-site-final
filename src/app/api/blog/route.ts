import { NextRequest, NextResponse } from "next/server";

const API_URL = process.env.NEXT_PUBLIC_API_URL || "https://p.kaktusbooking.app/website";

export async function GET(request: NextRequest) {
  try {
    const lang = request.nextUrl.searchParams.get("lang") || "en";
    const page = request.nextUrl.searchParams.get("page") || "1";

    const res = await fetch(`${API_URL}/blog?page=${page}&lang=${lang}`, {
      headers: { Accept: "application/json" },
    });

    const data = await res.json();
    return NextResponse.json(data, { status: res.status });
  } catch {
    return NextResponse.json({ data: [] }, { status: 500 });
  }
}
