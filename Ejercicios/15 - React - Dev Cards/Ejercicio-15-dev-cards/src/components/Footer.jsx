import React from "react";
import Title from "./Title";

export default function Footer() {
  return (
    <footer className="bg-dark text-white py-3 mt-auto text-center border-top border-secondary">
      <Title
        title="Dev Cards App"
        subtitle="© 2026 Todos los derechos reservados"
      />
    </footer>
  );
}
