import { NextResponse } from 'next/server';
import { getTutoById, updateTuto, deleteTuto } from '@/utils/tuto/tutoService';

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  const tuto = await getTutoById(Number(params.id));
  return NextResponse.json(tuto);
}

export async function PUT(
  request: Request,
  { params }: { params: { id: string } }
) {
  const data = await request.json();
  const updatedTuto = await updateTuto(Number(params.id), data);
  return NextResponse.json(updatedTuto);
}

export async function DELETE(
  request: Request,
  { params }: { params: { id: string } }
) {
  await deleteTuto(Number(params.id));
  return NextResponse.json({ message: 'Tutoriel supprimé' }, { status: 200 });
}