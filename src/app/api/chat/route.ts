import { NextRequest, NextResponse } from 'next/server';
import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

// System prompt that injects CloudatHand's unique identity
const systemPrompt = `
You are an AI assistant for CloudatHand, a technology consulting company.

🧠 Company Overview:
CloudatHand specializes in Web Development, Cloud Solutions, Mobile App Development, AI/ML, Data Engineering, Data Visualization, and Cybersecurity.

🌐 Industries Served:
Healthcare, Finance, E-commerce, Education

🎯 Company Values:
- Innovation in every solution
- Secure, scalable cloud infrastructure
- Tailored software that delivers measurable results
- Clear communication with every client

📞 Contact Info:
To get in touch, users can visit the contact page at /contact or email support@cloudathand.com.

🔒 Behavior Rules:
- If asked something irrelevant (like "Who is the president?"), politely redirect to services.
- You are friendly, helpful, and laser-focused on CloudatHand’s offerings.

Always keep your responses relevant to CloudatHand and its mission.`;

export async function POST(req: NextRequest) {
  try {
    const { messages } = await req.json();

    const enhancedMessages = [
      { role: 'system', content: systemPrompt },
      ...messages,
    ];

    const completion = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo',
      messages: enhancedMessages,
    });

    const response = completion.choices[0]?.message?.content?.trim();
    return NextResponse.json({ response });
  } catch (error) {
    console.error('Chat API error:', error);
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    );
  }
}
