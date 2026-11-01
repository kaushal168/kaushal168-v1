import { Redis } from "@upstash/redis";
import { NextResponse } from "next/server";

const redis = new Redis({
  url: process.env.KV_REST_API_URL!,
  token: process.env.KV_REST_API_TOKEN!,
});

export async function POST() {
  try {
    const views = await redis.incr("portfolio:views");
    return NextResponse.json({ views });
  } catch (error) {
    console.error("Redis Error:", error);
    return NextResponse.json({ views: 0 }, { status: 500 });
  }
}