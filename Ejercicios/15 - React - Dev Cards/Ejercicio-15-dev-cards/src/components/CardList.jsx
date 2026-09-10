import React from "react";
import Title from "./Title";
import Card from "./Card";

export default function CardList({ devs = [] }) {
  return (
    <main className="container py-4">
      {/* Reutilización del componente Title */}
      <Title
        title="Nuestro Equipo de Desarrolladores"
        subtitle="Conocé a los talentos disponibles para tus proyectos"
      />

      {/* Rejilla de tarjetas */}
      <div className="row g-4 mt-2">
        {devs.map((dev) => (
          <div key={dev.id} className="col-12 col-md-6 col-lg-4">
            <Card dev={dev} />
          </div>
        ))}
      </div>
    </main>
  );
}
