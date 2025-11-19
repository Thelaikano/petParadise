import "./inicio.css";
import Carrusel from "./carrusel";
import Conocenos from "./conocenos";
import Servicios from "./servicios";
import Contacto from "./contacto";
import Instalaciones from "./instalaciones";

export default function Inicio() {
  const correo = `petParadise@gmail.com`;
  const telefono = "524424533028";

  const handleMapasucursal = () =>
    window.open(
      `https://www.google.com/maps/place/Pet+Paradise/data=!4m2!3m1!1s0x0:0x33484d1d407eb97b?sa=X&ved=1t:2428&ictx=111`
    );
  const handleMapahotel = () =>
    window.open(
      `https://www.google.com/maps/place/Pet+Paradise+hotel/@19.0224894,-98.3060603,18z/data=!4m6!3m5!1s0x85cfc7936d75c1bd:0x2cd743f9033bc8cc!8m2!3d19.0223449!4d-98.3053254!16s%2Fg%2F11vsv4bmgj?entry=ttu&g_ep=EgoyMDI1MTAyOC4wIKXMDSoASAFQAw%3D%3D`
    );
  const handleInstagram = () =>
    window.open(`https://www.instagram.com/petparadisepuebla/`);
  const handleFacebook = () =>
    window.open(`https://www.facebook.com/petparadisepuebla/`);
  const handleMail = () => window.open(`mailto:${correo}`);
  const handleLlamada = () =>
    (window.location.href = `tel:${telefono.replace(/\s+/g, "")}`);
  const handleWhatsapp = () => {
    const phoneNumber = "524424533028";
    const message = "hola, prueba";
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(url, "_blank");
  };
  return (
    <main className="inicio">
      <Carrusel
        handleWhatsapp={handleWhatsapp}
        handleMapasucursal={handleMapasucursal}
        handleLlamada={handleLlamada}
      />
      <Conocenos />
      <Servicios />
      <Instalaciones handleWhatsapp={handleWhatsapp} />
      <Contacto
        handleMapasucursal={handleMapasucursal}
        handleMapahotel={handleMapahotel}
        handleInstagram={handleInstagram}
        handleFacebook={handleFacebook}
        handleMail={handleMail}
        handleLlamada={handleLlamada}
        handleWhatsapp={handleWhatsapp}
      />
    </main>
  );
}
