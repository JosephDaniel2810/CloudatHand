import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const body = await request.json();
  const { name, email, message } = body;

  console.log("New message from contact form:", { name, email, message });

  // You can add email sending or DB saving here later
  return NextResponse.json({ success: true });
}
