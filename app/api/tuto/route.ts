import { NextResponse } from 'next/server';
import { createTuto, getAllTutos } from '@/utils/tuto/tutoService';

export async function GET() {
  const tutos = await getAllTutos();
  return NextResponse.json(tutos);
}

export async function POST(request: Request) {
  const data = await request.json();
  const newTuto = await createTuto(data);
  return NextResponse.json(newTuto, { status: 201 });
}