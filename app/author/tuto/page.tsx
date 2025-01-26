'use client';
import { useState, useEffect } from 'react';
import { getAllTutos, createTuto } from '@/utils/tuto/tutoService';
import TutoList from '@/components/tuto/TutoList';
import TutoForm from '@/components/tuto/TutoForm';
import { Prisma } from '@prisma/client'; // Importez Prisma pour utiliser les types générés

// Définir un type personnalisé pour Tuto avec les relations
type TutoWithRelations = Prisma.TutoGetPayload<{
  include: {
    author: true;
    chapters: true;
  };
}>;

export default function AuthorTutoPage() {
  // Définir explicitement le type de `tutos`
  const [tutos, setTutos] = useState<TutoWithRelations[]>([]);

  useEffect(() => {
    const fetchTutos = async () => {
      const data = await getAllTutos();
      setTutos(data);
    };
    fetchTutos();
  }, []);

  const handleCreateTuto = async (data: {
    title: string;
    description?: string;
    authorId: number;
  }) => {
    const newTuto = await createTuto(data);
    setTutos([...tutos, newTuto]);
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Mes Tutoriels</h1>
      <TutoForm onSubmit={handleCreateTuto} />
      <TutoList tutos={tutos} />
    </div>
  );
}
