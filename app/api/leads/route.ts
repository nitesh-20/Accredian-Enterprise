import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import * as z from 'zod';

const leadSchema = z.object({
  fullName: z.string().min(2, { message: 'Name must be at least 2 characters.' }),
  email: z.string().email({ message: 'Please enter a valid email address.' }),
  phone: z.string().min(10, { message: 'Please enter a valid phone number.' }),
  company: z.string().min(2, { message: 'Company name must be at least 2 characters.' }),
  message: z.string().min(10, { message: 'Message must be at least 10 characters.' }),
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    
    // Validate request body
    const validatedData = leadSchema.parse(body);
    
    // Insert into PostgreSQL using Prisma
    const newLead = await prisma.lead.create({
      data: validatedData,
    });

    return NextResponse.json(
      { message: 'Lead captured successfully', leadId: newLead.id },
      { status: 201 }
    );
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: 'Validation failed', details: error.errors },
        { status: 400 }
      );
    }
    
    console.error('Error capturing lead:', error);
    return NextResponse.json(
      { error: 'Failed to capture lead due to an internal server error' },
      { status: 500 }
    );
  }
}
