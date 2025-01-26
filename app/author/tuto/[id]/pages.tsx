//app/author/tuto/[id]/page.tsx
'use client';
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { getTutoById, updateTuto } from '@/utils/tuto/tutoService';
import TutoForm from '@/componnents/tuto/TutoForm';

export default function TutoDetailPage() {
  const { id } = useParams();
  const [tuto, setTuto] = useState(null);

  useEffect(() => {
    const fetchTuto = async () => {
      const data = await getTutoById(Number(id));
      setTuto(data);
    };
    fetchTuto();
  }, [id]);

  const handleUpdateTuto = async (data: {
    title?: string;
    description?: string;
    slug?: string;
  }) => {
    const updatedTuto = await updateTuto(Number(id), data);
    setTuto(updatedTuto);
  };

  if (!tuto) return <div>Loading...</div>;

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Éditer le Tutoriel</h1>
      <TutoForm tuto={tuto} onSubmit={handleUpdateTuto} />
    </div>
  );
}