import { notFound } from 'next/navigation';
import { artigos } from '@/lib/artigos';

// This is a server component
export default function ArtigoPage({ params }: { params: { id: string } }) {
  const { id } = params;
  const artigo = artigos.find(a => a.id.toString() === id);
  
  if (!artigo) {
    notFound();
  }

  return (
    <div>
      <h1>{artigo.title}</h1>
      <p>{artigo.description}</p>
    </div>
  );
}

// Generate static paths at build time
export function generateStaticParams() {
  return artigos.map((artigo) => ({
    id: artigo.id.toString(),
  }));
}
