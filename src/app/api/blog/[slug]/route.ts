import { NextRequest, NextResponse } from "next/server";

const API_URL = process.env.NEXT_PUBLIC_API_URL || "https://p.kaktusbooking.app/website";

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) {
  try {
    const { slug } = await params;
    const lang = request.nextUrl.searchParams.get("lang") || "en";

    const res = await fetch(`${API_URL}/blog/${slug}?lang=${lang}`, {
      headers: { Accept: "application/json" },
    });

    if (!res.ok) return NextResponse.json(null, { status: res.status });

    const data = await res.json();
    return NextResponse.json(data, { status: res.status });
  } catch {
    return NextResponse.json(null, { status: 500 });
  }
}
