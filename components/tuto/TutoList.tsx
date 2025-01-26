import Link from 'next/link';

export default function TutoList({ tutos }: { tutos: any[] }) {
  return (
    <div className="space-y-4">
      {tutos.map((tuto) => (
        <div key={tuto.id} className="card bg-base-100 shadow-md">
          <div className="card-body">
            <h2 className="card-title">{tuto.title}</h2>
            <p>{tuto.description}</p>
            <div className="card-actions justify-end">
              <Link href={`/author/tuto/${tuto.id}`} className="btn btn-sm btn-primary">
                Éditer
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}