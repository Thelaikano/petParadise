import "./inicio.css";
import Carrusel from "./carrusel";
import Conocenos from "./conocenos";
import Servicios from "./servicios";
import Contacto from "./contacto";
import Instalaciones from "./instalaciones";

export default function Inicio() {
  return (
    <main className="inicio">
      <Carrusel />
      <Conocenos />
      <Servicios />
      <Instalaciones />
      <Contacto />
    </main>
  );
}
