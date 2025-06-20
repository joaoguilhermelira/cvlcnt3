// Este é o código para o arquivo: app/map/[name]/page.tsx

export default function MapPage({ params }: { params: { name: string } }) {
  // Esta linha pega o nome da URL (ex: 'hipertense-intracraniana')
  // e monta o caminho para o arquivo HTML na pasta public.
  const src = `/maps/${params.name}.html`;

  return (
    <iframe
      src={src}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        border: 'none',
      }}
      title="Visualizador de Conteúdo"
    />
  );
}