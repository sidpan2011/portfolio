import { NextResponse } from "next/server";

export async function GET() {
  const projectId = process.env.VERCEL_PROJECT_ID;
  const token = process.env.VERCEL_ACCESS_TOKEN;

  if (!projectId || !token) {
    return NextResponse.json(
      { error: "Missing VERCEL_PROJECT_ID or VERCEL_ACCESS_TOKEN" },
      { status: 500 }
    );
  }

  const url = `https://api.vercel.com/v6/deployments?projectId=${encodeURIComponent(projectId)}&limit=25`;
  const res = await fetch(url, {
    headers: { Authorization: `Bearer ${token}` },
    // Optional: SSG-ish caching; tweak as you like
    next: { revalidate: 300 },
  });

  if (!res.ok) {
    const text = await res.text();
    return NextResponse.json({ error: `Vercel API error: ${text}` }, { status: res.status });
    }

  const data = await res.json();
  const deployments = data?.deployments ?? [];

  // Sort newest first by createdAt (fallback to created)
  deployments.sort((a, b) => (b.createdAt ?? b.created ?? 0) - (a.createdAt ?? a.created ?? 0));

  const latest = deployments[0];

  if (!latest) {
    return NextResponse.json({ lastUpdated: null, latestUrl: null });
  }

  return NextResponse.json({
    lastUpdated: latest.createdAt ?? latest.created ?? null,
    latestUrl: latest.url ?? null,
    state: latest.state ?? null,
  });
}