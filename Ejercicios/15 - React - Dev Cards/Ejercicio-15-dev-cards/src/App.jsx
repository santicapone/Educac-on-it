import React from "react";
import devs from "./data/devs";
import Header from "./components/Header";
import CardList from "./components/CardList";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Header />
      <CardList devs={devs} />
      <Footer />
    </div>
  );
}
