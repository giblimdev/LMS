import { useState } from 'react';

export default function TutoForm({
  tuto,
  onSubmit,
}: {
  tuto?: any;
  onSubmit: (data: { title: string; description?: string; authorId: number }) => void;
}) {
  const [title, setTitle] = useState(tuto?.title || '');
  const [description, setDescription] = useState(tuto?.description || '');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({ title, description, authorId: 1 }); // Remplacez 1 par l'ID de l'utilisateur connecté
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-sm font-medium mb-1">Titre</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="input input-bordered w-full"
          required
        />
      </div>
      <div>
        <label className="block text-sm font-medium mb-1">Description</label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="textarea textarea-bordered w-full"
        />
      </div>
      <button type="submit" className="btn btn-primary">
        {tuto ? 'Mettre à jour' : 'Créer'}
      </button>
    </form>
  );
}