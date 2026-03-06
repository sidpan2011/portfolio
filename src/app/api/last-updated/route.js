import { NextResponse } from "next/server";

export async function GET() {
  const buildTime = process.env.BUILD_TIME ?? null;

  return NextResponse.json({
    lastUpdated: buildTime,
  });
}
