export interface Artigo {
  id: number;
  titulo: string;
  conteudo: string;
}

export const artigos: Artigo[] = [
  {
    id: 1,
    titulo: "Primeiro Artigo",
    conteudo: "<p>Conteúdo do primeiro artigo</p>"
  },
  {
    id: 2,
    titulo: "Segundo Artigo",
    conteudo: "<p>Conteúdo do segundo artigo</p>"
  }
];

export async function getArtigoById(id: string): Promise<Artigo> {
  const artigo = artigos.find(a => a.id.toString() === id);
  if (!artigo) {
    throw new Error('Artigo não encontrado');
  }
  return artigo;
}