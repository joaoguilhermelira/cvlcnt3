// ✅ Código corrigido para Next.js 15
export default async function MapPage({
  params,
}: {
  params: Promise<{ name: string }>
  //      ↑ Mudança 1: Agora é Promise
}) {
  // ✅ Mudança 2: Aguarda os parâmetros chegarem
  const { name } = await params

  // ✅ Mudança 3: Usa 'name' em vez de 'params.name'
  const src = `/maps/${name}.html`

  return (
    <iframe
      src={src}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        border: "none",
      }}
      title="Visualizador de Conteúdo"
    />
  )
}
