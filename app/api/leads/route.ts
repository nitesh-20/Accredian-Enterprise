import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    
    // In a real application, you would validate the body again using Zod
    // and store it in a database like PostgreSQL or MongoDB.
    // For this mockup, we'll try to save it to a local JSON file.
    
    const newLead = {
      id: Date.now().toString(),
      ...body,
      createdAt: new Date().toISOString(),
    };

    try {
      const dataFilePath = path.join(process.cwd(), 'data', 'leads.json');
      
      let leads = [];
      if (fs.existsSync(dataFilePath)) {
        const fileData = fs.readFileSync(dataFilePath, 'utf-8');
        leads = JSON.parse(fileData);
      }
      
      leads.push(newLead);
      fs.writeFileSync(dataFilePath, JSON.stringify(leads, null, 2));
    } catch (fsError) {
      // Ignore file system errors in serverless environments like Vercel
      console.log('Could not write to local file system, but mocking success.', fsError);
    }

    return NextResponse.json(
      { message: 'Lead captured successfully', leadId: newLead.id },
      { status: 201 }
    );
  } catch (error) {
    console.error('Error capturing lead:', error);
    return NextResponse.json(
      { error: 'Failed to capture lead' },
      { status: 500 }
    );
  }
}
