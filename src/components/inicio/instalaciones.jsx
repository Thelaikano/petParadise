import Hotel from "./hotel";
import "./instalaciones.css";
import Sucursal from "./sucursal";
export default function Instalaciones({ handleWhatsapp }) {
  return (
    <section id="instalaciones" className="instalaciones">
      <h2>Instalaciones</h2>
      <Sucursal handleWhatsapp={handleWhatsapp} />
      <Hotel handleWhatsapp={handleWhatsapp} />
    </section>
  );
}
