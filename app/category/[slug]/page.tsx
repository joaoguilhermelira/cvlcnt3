"use client"

import Link from "next/link"

// A lista de categorias
const categories = [
  "cirurgia geral",
  "cirurgia do trauma",
  "cirurgia oncológica",
  "urologia",
  "coloproctologia",
  "cirurgia vascular",
  "cirurgia plástica",
  "cirurgia pediátrica",
]

export default function HomePage() {
  return (
    <main style={{ fontFamily: "system-ui, sans-serif", padding: "2rem 4rem" }}>
      <header style={{ borderBottom: "1px solid #eaeaea", paddingBottom: "1rem", marginBottom: "2rem" }}>
        <h1 style={{ fontSize: "2.5rem" }}>Catálogo de Mapas Cirúrgicos</h1>
        <p style={{ fontSize: "1.2rem", color: "#666" }}>Navegue pelas especialidades ou utilize a busca.</p>
      </header>

      <section>
        <h2 style={{ fontSize: "1.75rem", marginBottom: "1.5rem" }}>Especialidades</h2>
        <ul
          style={{
            listStyle: "none",
            padding: 0,
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
            gap: "1rem",
          }}
        >
          {categories.map((category) => {
            const categorySlug = category
              .toLowerCase()
              .replace(/ /g, "-")
              .replace(/[áàâã]/g, "a")
              .replace(/[éèê]/g, "e")
              .replace(/[íìî]/g, "i")
              .replace(/[óòôõ]/g, "o")
              .replace(/[úùû]/g, "u")
              .replace(/ç/g, "c")

            return (
              <li key={categorySlug}>
                <Link
                  href={`/category/${categorySlug}`}
                  style={{
                    display: "block",
                    padding: "1.5rem",
                    border: "1px solid #eaeaea",
                    borderRadius: "8px",
                    textDecoration: "none",
                    color: "#0070f3",
                    fontSize: "1.25rem",
                    textTransform: "capitalize",
                    transition: "border-color 0.2s ease, box-shadow 0.2s ease",
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.borderColor = "#0070f3"
                    e.currentTarget.style.boxShadow = "0 4px 14px 0 rgba(0, 118, 255, 0.1)"
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.borderColor = "#eaeaea"
                    e.currentTarget.style.boxShadow = "none"
                  }}
                >
                  {category}
                </Link>
              </li>
            )
          })}
        </ul>
      </section>
    </main>
  )
}
