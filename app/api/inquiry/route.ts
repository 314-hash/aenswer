import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';

import { inquirySchema } from '@/lib/schemas';

// Simple in-memory rate limiter for dev/edge
const rateLimitMap = new Map<string, { count: number; expiresAt: number }>();

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const record = rateLimitMap.get(ip);
  if (!record || now > record.expiresAt) {
    rateLimitMap.set(ip, { count: 1, expiresAt: now + 60 * 1000 }); // 1 minute window
    return true;
  }
  if (record.count >= 5) {
    return false; // Exceeded 5 inquiries per minute per IP
  }
  record.count += 1;
  return true;
}

export async function POST(request: NextRequest) {
  try {
    const ip = request.headers.get('x-forwarded-for') || '127.0.0.1';
    if (!checkRateLimit(ip)) {
      return NextResponse.json(
        {
          success: false,
          error: 'Rate limit exceeded. Please wait a minute before submitting another inquiry.',
        },
        { status: 429 }
      );
    }

    const body = await request.json();

    // Validate request body
    const parseResult = inquirySchema.safeParse(body);
    if (!parseResult.success) {
      return NextResponse.json(
        {
          success: false,
          errors: parseResult.error.flatten().fieldErrors,
          error: 'Validation failed. Please review the highlighted fields.',
        },
        { status: 400 }
      );
    }

    const data = parseResult.data;

    // Check honeypot (bots fill hidden field)
    if (data.websiteUrl && data.websiteUrl.length > 0) {
      return NextResponse.json(
        { success: false, error: 'Spam submission rejected.' },
        { status: 400 }
      );
    }

    // Check submission timing: if submitted under 2.5 seconds, likely a bot
    if (data.formLoadedAt && Date.now() - data.formLoadedAt < 2500) {
      return NextResponse.json(
        { success: false, error: 'Suspiciously fast submission detected.' },
        { status: 400 }
      );
    }

    // Generate unique inquiry reference code
    const inquiryRef = `AEN-${Date.now().toString(36).toUpperCase()}-${Math.floor(
      1000 + Math.random() * 9000
    )}`;

    // Optional webhook notification (e.g. n8n or Discord webhook)
    const webhookUrl = process.env.INQUIRY_WEBHOOK_URL;
    let webhookDelivered = false;

    if (webhookUrl) {
      try {
        await fetch(webhookUrl, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            event: 'new_inquiry',
            ref: inquiryRef,
            timestamp: new Date().toISOString(),
            data: {
              fullName: data.fullName,
              businessName: data.businessName,
              email: data.email,
              country: data.country,
              contactMethod: data.contactMethod,
              service: data.serviceRequested,
              budget: data.budgetRange,
              timeline: data.desiredTimeline,
              description: data.projectDescription,
              referenceUrl: data.referenceUrl,
            },
          }),
        });
        webhookDelivered = true;
      } catch (webhookErr) {
        console.error('Webhook notification failed:', webhookErr);
      }
    }

    return NextResponse.json(
      {
        success: true,
        referenceId: inquiryRef,
        message: 'Your project inquiry has been received and logged.',
        webhookDelivered,
        timestamp: new Date().toISOString(),
      },
      { status: 201 }
    );
  } catch (error: any) {
    console.error('Inquiry API Error:', error);
    return NextResponse.json(
      {
        success: false,
        error: 'An internal error occurred while processing your inquiry.',
      },
      { status: 500 }
    );
  }
}
