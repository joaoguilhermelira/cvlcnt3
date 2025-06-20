"use client"
import { useState } from "react"
import Link from "next/link"

// Dados temporários (você já tem no JSON)
const mapsData = [
  {
    id: "apendicectomia",
    title: "Apendicectomia",
    description: "Remoção do apêndice vermiforme",
    category: "cirurgia geral",
    subcategory: "cirurgia abdominal",
    tags: ["apêndice", "laparoscopia", "emergência"],
  },
  {
    id: "colecistectomia",
    title: "Colecistectomia",
    description: "Remoção da vesícula biliar",
    category: "cirurgia geral",
    subcategory: "cirurgia hepatobiliar",
    tags: ["vesícula", "laparoscopia", "cálculos"],
  },
  {
    id: "hernia-inguinal",
    title: "Hérnia Inguinal",
    description: "Reparo de hérnia inguinal",
    category: "cirurgia geral",
    subcategory: "cirurgia da parede abdominal",
    tags: ["hérnia", "inguinal", "tela"],
  },
  {
    id: "trauma-abdominal",
    title: "Trauma Abdominal",
    description: "Abordagem do trauma abdominal",
    category: "cirurgia do trauma",
    subcategory: "trauma penetrante",
    tags: ["trauma", "emergência", "abdome"],
  },
]

// Categorias minimalistas
const categories = [
  { name: "cirurgia geral", color: "#2D5016" },
  { name: "cirurgia do trauma", color: "#8B0000" },
  { name: "cirurgia oncológica", color: "#4B0082" },
  { name: "cirurgia do aparelho digestivo", color: "#006400" },
  { name: "endoscopia digestiva", color: "#B8860B" },
  { name: "cirurgia ginecológica", color: "#8B008B" },
  { name: "urologia", color: "#008B8B" },
  { name: "coloproctologia", color: "#556B2F" },
  { name: "cirurgia vascular", color: "#B22222" },
  { name: "cirurgia plástica", color: "#9932CC" },
  { name: "cirurgia pediátrica", color: "#FF8C00" },
]

export default function HomePage() {
  const [searchTerm, setSearchTerm] = useState("")
  const filteredMaps = searchTerm
    ? mapsData.filter((map) => {
        const textToSearch = searchTerm.toLowerCase()
        return (
          map.title.toLowerCase().includes(textToSearch) ||
          map.description.toLowerCase().includes(textToSearch) ||
          map.category.toLowerCase().includes(textToSearch) ||
          map.subcategory.toLowerCase().includes(textToSearch) ||
          map.tags.join(" ").toLowerCase().includes(textToSearch)
        )
      })
    : []

  return (
    <>
      {/* CSS Minimalista */}
      <style jsx global>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
        
        body {
          font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
          background: #4A5D23;
          min-height: 100vh;
          color: #ffffff;
        }
        
        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 2rem;
        }
        
        .card {
          background: #ffffff;
          border-radius: 8px;
          border: none;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
        }
        
        .category-card {
          background: #ffffff;
          border-radius: 8px;
          padding: 1.5rem;
          text-decoration: none;
          color: #333333;
          transition: transform 0.2s ease;
          border: none;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
          border-left: 4px solid var(--category-color);
        }
        
        .category-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 4px 16px rgba(0, 0, 0, 0.15);
        }
        
        .search-input {
          width: 100%;
          padding: 1rem;
          font-size: 1rem;
          border-radius: 4px;
          border: 2px solid #ffffff;
          background: #ffffff;
          color: #333333;
          outline: none;
          font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
        }
        
        .search-input:focus {
          border-color: #2D5016;
        }
        
        .result-card {
          background: #ffffff;
          border-radius: 8px;
          padding: 1.5rem;
          border: none;
          transition: transform 0.2s ease;
          text-decoration: none;
          color: #333333;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
        }
        
        .result-card:hover {
          transform: translateY(-2px);
          box-shadow: 0 4px 16px rgba(0, 0, 0, 0.15);
        }
      `}</style>

      <div className="container">
        {/* Header com SurgiMaps - LETRAS MAIS GROSSAS */}
        <header className="card" style={{ padding: "3rem", marginBottom: "2rem", textAlign: "center" }}>
          <h1
            style={{
              fontSize: "2.8rem",
              fontWeight: "800",
              color: "#2D5016",
              marginBottom: "1.5rem",
              letterSpacing: "-0.02em",
            }}
          >
            SurgiMaps
          </h1>

          <div style={{ marginBottom: "2rem", lineHeight: "1.6" }}>
            <p style={{ fontSize: "1.2rem", color: "#1a1a1a", fontWeight: "700", marginBottom: "0.5rem" }}>
              Decisão ágil à beira leito.
            </p>
            <p style={{ fontSize: "1.2rem", color: "#1a1a1a", fontWeight: "700", marginBottom: "0.8rem" }}>
              100% baseado em evidência científica.
            </p>
            <p style={{ fontSize: "1.1rem", color: "#333333", fontWeight: "600", maxWidth: "600px", margin: "0 auto" }}>
              Reforce seus diagnósticos e condutas com auxílio da nossa biblioteca digital de mapas interativos.
            </p>
          </div>

          <div style={{ maxWidth: "500px", margin: "0 auto" }}>
            <input
              type="text"
              placeholder="Buscar procedimento..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="search-input"
            />
          </div>
        </header>

        {/* Conteúdo Principal */}
        <main>
          {searchTerm.length > 0 ? (
            // Resultados da Busca
            <div className="card" style={{ padding: "2rem" }}>
              <h2 style={{ fontSize: "1.5rem", fontWeight: "600", marginBottom: "1.5rem", color: "#333333" }}>
                Resultados para "{searchTerm}"
              </h2>
              {filteredMaps.length > 0 ? (
                <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                  {filteredMaps.map((map) => (
                    <Link key={map.id} href={`/map/${map.id}`} className="result-card">
                      <h3 style={{ fontSize: "1.3rem", fontWeight: "600", color: "#2D5016", marginBottom: "0.5rem" }}>
                        {map.title}
                      </h3>
                      <p style={{ color: "#666666", marginBottom: "0.75rem", fontWeight: "500" }}>{map.description}</p>
                      <div style={{ display: "flex", gap: "0.5rem" }}>
                        <span
                          style={{
                            background: "#f5f5f5",
                            color: "#666666",
                            padding: "0.25rem 0.75rem",
                            borderRadius: "4px",
                            fontSize: "0.85rem",
                            fontWeight: "500",
                          }}
                        >
                          {map.category}
                        </span>
                      </div>
                    </Link>
                  ))}
                </div>
              ) : (
                <div style={{ textAlign: "center", padding: "3rem", color: "#666666" }}>
                  <h3 style={{ fontSize: "1.2rem", marginBottom: "0.5rem", fontWeight: "600" }}>Sem resultados</h3>
                  <p style={{ fontWeight: "500" }}>Tente outros termos</p>
                </div>
              )}
            </div>
          ) : (
            // Grid de Categorias
            <div className="card" style={{ padding: "2rem" }}>
              <h2
                style={{
                  fontSize: "1.5rem",
                  fontWeight: "600",
                  marginBottom: "2rem",
                  color: "#333333",
                  textAlign: "center",
                }}
              >
                Especialidades
              </h2>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                  gap: "1rem",
                }}
              >
                {categories.map((category) => {
                  const categorySlug = category.name
                    .toLowerCase()
                    .replace(/ /g, "-")
                    .replace(/ç/g, "c")
                    .replace(/[áàâã]/g, "a")
                  return (
                    <Link
                      key={categorySlug}
                      href={`/category/${categorySlug}`}
                      className="category-card"
                      style={{ "--category-color": category.color } as any}
                    >
                      <h3
                        style={{
                          fontSize: "1.1rem",
                          fontWeight: "600",
                          color: "#333333",
                          textTransform: "capitalize",
                        }}
                      >
                        {category.name}
                      </h3>
                    </Link>
                  )
                })}
              </div>
            </div>
          )}
        </main>

        {/* Footer com SurgiMaps */}
        <footer style={{ textAlign: "center", marginTop: "3rem", padding: "1rem" }}>
          <p style={{ opacity: 0.7, fontSize: "0.9rem", fontWeight: "500" }}>
            <strong>SurgiMaps</strong> © 2024
          </p>
        </footer>
      </div>
    </>
  )
}
