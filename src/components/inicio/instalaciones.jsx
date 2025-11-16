import Hotel from "./hotel";
import "./instalaciones.css";
import Sucursal from "./sucursal";
export default function Instalaciones() {
  return (
    <section id="instalaciones" className="instalaciones">
      <h2>Instalaciones</h2>
      <Sucursal />
      <Hotel />
    </section>
  );
}
