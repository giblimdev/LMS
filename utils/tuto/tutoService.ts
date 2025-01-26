import prisma from '@/lib/prisma';

// Créer un nouveau tutoriel
export const createTuto = async (data: {
  title: string;
  description?: string;
  slug?: string;
  authorId: number;
}) => {
  return await prisma.tuto.create({
    data,
  });
};

// Récupérer tous les tutoriels
export const getAllTutos = async () => {
  return await prisma.tuto.findMany({
    include: {
      author: true,
      chapters: true,
    },
  });
};

// Récupérer un tutoriel par son ID
export const getTutoById = async (id: number) => {
  return await prisma.tuto.findUnique({
    where: { id },
    include: {
      author: true,
      chapters: {
        include: {
          sections: {
            include: {
              paragraphs: true,
            },
          },
        },
      },
    },
  });
};

// Mettre à jour un tutoriel
export const updateTuto = async (
  id: number,
  data: {
    title?: string;
    description?: string;
    slug?: string;
  }
) => {
  return await prisma.tuto.update({
    where: { id },
    data,
  });
};

// Supprimer un tutoriel
export const deleteTuto = async (id: number) => {
  return await prisma.tuto.delete({
    where: { id },
  });
};