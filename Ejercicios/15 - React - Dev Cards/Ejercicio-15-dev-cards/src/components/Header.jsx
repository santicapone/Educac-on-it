import Title from "./Title";
export default function Header() {
  return (
    <header className="bg-dark text-white py-4 shadow-sm">
      <div className="container text-center">
        <Title title="Ejercicio 15" subtitle="Bienvenido al panel principal" />
      </div>
    </header>
  );
}
