// ...existing code...


import { getArtigoById, artigos } from '../../../../../data';
import ArtigoClientControls from './ArtigoClientControls';

export function generateStaticParams() {
  return artigos.map((artigo) => ({
    id: artigo.id.toString(),
  }));
}

export const dynamicParams = false;

export default async function Page({ params }: { params: { id: string } }) {
  const artigo = await getArtigoById(params.id);

  return (
    <main>
      <h1>{artigo.titulo}</h1>
      <article dangerouslySetInnerHTML={{ __html: artigo.conteudo }} />
      <ArtigoClientControls artigoId={artigo.id} />
    </main>
  );
}
// ...existing code...