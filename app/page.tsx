"use client"
import { useState } from "react"
import Link from "next/link"

// Dados temporários
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
    <div
      style={{
        fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
        background: "#4A5D23",
        minHeight: "100vh",
        color: "#ffffff",
        margin: 0,
        padding: 0,
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "2rem",
        }}
      >
        {/* Header */}
        <header
          style={{
            background: "#ffffff",
            borderRadius: "8px",
            padding: "3rem",
            marginBottom: "2rem",
            textAlign: "center",
            boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
          }}
        >
          <h1
            style={{
              fontSize: "2.8rem",
              fontWeight: "800",
              color: "#2D5016",
              marginBottom: "1.5rem",
              letterSpacing: "-0.02em",
              margin: "0 0 1.5rem 0",
            }}
          >
            SurgiMaps
          </h1>

          <div style={{ marginBottom: "2rem", lineHeight: "1.6" }}>
            <p
              style={{
                fontSize: "1.2rem",
                color: "#1a1a1a",
                fontWeight: "700",
                marginBottom: "0.5rem",
                margin: "0 0 0.5rem 0",
              }}
            >
              Decisão ágil à beira leito.
            </p>
            <p
              style={{
                fontSize: "1.2rem",
                color: "#1a1a1a",
                fontWeight: "700",
                marginBottom: "0.8rem",
                margin: "0 0 0.8rem 0",
              }}
            >
              100% baseado em evidência científica.
            </p>
            <p
              style={{
                fontSize: "1.1rem",
                color: "#333333",
                fontWeight: "600",
                maxWidth: "600px",
                margin: "0 auto",
              }}
            >
              Reforce seus diagnósticos e condutas com auxílio da nossa biblioteca digital de mapas interativos.
            </p>
          </div>

          <div style={{ maxWidth: "500px", margin: "0 auto" }}>
            <input
              type="text"
              placeholder="Buscar procedimento..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              style={{
                width: "100%",
                padding: "1rem",
                fontSize: "1rem",
                borderRadius: "4px",
                border: "2px solid #ffffff",
                background: "#ffffff",
                color: "#333333",
                outline: "none",
                fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
                boxSizing: "border-box",
              }}
            />
          </div>
        </header>

        {/* Conteúdo Principal */}
        <main>
          {searchTerm.length > 0 ? (
            // Resultados da Busca
            <div
              style={{
                background: "#ffffff",
                borderRadius: "8px",
                padding: "2rem",
                boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
              }}
            >
              <h2
                style={{
                  fontSize: "1.5rem",
                  fontWeight: "600",
                  marginBottom: "1.5rem",
                  color: "#333333",
                  margin: "0 0 1.5rem 0",
                }}
              >
                Resultados para "{searchTerm}"
              </h2>
              {filteredMaps.length > 0 ? (
                <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                  {filteredMaps.map((map) => (
                    <Link
                      key={map.id}
                      href={`/map/${map.id}`}
                      style={{
                        background: "#ffffff",
                        borderRadius: "8px",
                        padding: "1.5rem",
                        border: "1px solid #e5e5e5",
                        textDecoration: "none",
                        color: "#333333",
                        boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
                        display: "block",
                        transition: "transform 0.2s ease",
                      }}
                    >
                      <h3
                        style={{
                          fontSize: "1.3rem",
                          fontWeight: "600",
                          color: "#2D5016",
                          marginBottom: "0.5rem",
                          margin: "0 0 0.5rem 0",
                        }}
                      >
                        {map.title}
                      </h3>
                      <p
                        style={{
                          color: "#666666",
                          marginBottom: "0.75rem",
                          fontWeight: "500",
                          margin: "0 0 0.75rem 0",
                        }}
                      >
                        {map.description}
                      </p>
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
                    </Link>
                  ))}
                </div>
              ) : (
                <div style={{ textAlign: "center", padding: "3rem", color: "#666666" }}>
                  <h3
                    style={{
                      fontSize: "1.2rem",
                      marginBottom: "0.5rem",
                      fontWeight: "600",
                      margin: "0 0 0.5rem 0",
                    }}
                  >
                    Sem resultados
                  </h3>
                  <p style={{ fontWeight: "500", margin: "0" }}>Tente outros termos</p>
                </div>
              )}
            </div>
          ) : (
            // Grid de Categorias
            <div
              style={{
                background: "#ffffff",
                borderRadius: "8px",
                padding: "2rem",
                boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
              }}
            >
              <h2
                style={{
                  fontSize: "1.5rem",
                  fontWeight: "600",
                  marginBottom: "2rem",
                  color: "#333333",
                  textAlign: "center",
                  margin: "0 0 2rem 0",
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
                      style={{
                        background: "#ffffff",
                        borderRadius: "8px",
                        padding: "1.5rem",
                        textDecoration: "none",
                        color: "#333333",
                        transition: "transform 0.2s ease",
                        border: "none",
                        boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
                        borderLeft: `4px solid ${category.color}`,
                        display: "block",
                      }}
                    >
                      <h3
                        style={{
                          fontSize: "1.1rem",
                          fontWeight: "600",
                          color: "#333333",
                          textTransform: "capitalize",
                          margin: "0",
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

        {/* Footer */}
        <footer style={{ textAlign: "center", marginTop: "3rem", padding: "1rem" }}>
          <p style={{ opacity: 0.7, fontSize: "0.9rem", fontWeight: "500", margin: "0" }}>
            <strong>SurgiMaps</strong> © 2024
          </p>
        </footer>
      </div>
    </div>
  )
}
