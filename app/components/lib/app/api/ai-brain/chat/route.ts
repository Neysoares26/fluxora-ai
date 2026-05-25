import { NextResponse } from 'next/server';
import { askAI } from '@/lib/aiClient';

export async function POST(req: Request) {
  const body = await req.json();

  const reply = await askAI(body.message);

  return NextResponse.json({
    reply,
  });
}
