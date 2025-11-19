import "./contacto.css";
import gatoImg from "./gato.png";
import mapaSucursal from "./mapasucursal.png";
import mapaHotel from "./mapahotel.png";
export default function Contacto({
  handleMapasucursal,
  handleMapahotel,
  handleInstagram,
  handleFacebook,
  handleMail,
  handleLlamada,
  handleWhatsapp,
}) {
  return (
    <section id="contacto" className="contacto">
      <h2>Contacto</h2>
      <article className="info-contacto">
        <div className="direccion-sucursal">
          <h3>Direccion sucursal</h3>
          <p>
            C. Mira 213-local 15, Emiliano Zapata, 72824 San Andrés Cholula,
            Pue.
          </p>
          <p
            style={{ color: "yellow", cursor: "pointer", margin: ".5rem" }}
            onClick={handleMail}
          >
            Correo:petParadise@correo.com
          </p>
          <p
            style={{
              color: "yellow",
              cursor: "pointer",
              marginLeft: ".5rem",
            }}
            onClick={handleLlamada}
          >
            Tel:52-222-225-0554
          </p>
          <div className="horario-contacto">
            <h3>Horario Sucursal</h3>
            <p>Lunes a Viernes:</p>
            <p>10am - 8pm</p>
            <p>Sabado: 10am - 5pm</p>
            <p>Domingo: Cerrado</p>
          </div>
          <div
            onClick={handleMapasucursal}
            className="map-sucursal"
            style={{ backgroundImage: `url(${mapaSucursal})` }}
          ></div>
        </div>
        <div className="direccion-hotel">
          <h3>Direccion Hotel</h3>
          <p>
            Carretera federal Puebla atlixco #10001, San Francisco Acatepec,
            72845 San Andrés Cholula, Pue.
          </p>
          <p
            style={{ color: "yellow", cursor: "pointer", margin: ".4rem" }}
            onClick={handleMail}
          >
            Correo:petParadise@correo.com
          </p>
          <p
            style={{ color: "yellow", cursor: "pointer", marginLeft: ".5rem" }}
            onClick={handleLlamada}
          >
            Tel:52-222-966-4816
          </p>
          <div
            onClick={handleMapahotel}
            className="map-hotel"
            style={{ backgroundImage: `url(${mapaHotel})` }}
          ></div>
        </div>

        <div className="iconos-contacto">
          <div onClick={handleFacebook} className="icono-facebook">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="white"
              class="icon icon-tabler icons-tabler-filled icon-tabler-brand-facebook"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M18 2a1 1 0 0 1 .993 .883l.007 .117v4a1 1 0 0 1 -.883 .993l-.117 .007h-3v1h3a1 1 0 0 1 .991 1.131l-.02 .112l-1 4a1 1 0 0 1 -.858 .75l-.113 .007h-2v6a1 1 0 0 1 -.883 .993l-.117 .007h-4a1 1 0 0 1 -.993 -.883l-.007 -.117v-6h-2a1 1 0 0 1 -.993 -.883l-.007 -.117v-4a1 1 0 0 1 .883 -.993l.117 -.007h2v-1a6 6 0 0 1 5.775 -5.996l.225 -.004h3z" />
            </svg>
          </div>
          <div onClick={handleInstagram} className="icono-instagram">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="white"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="icon icon-tabler icons-tabler-outline icon-tabler-brand-instagram"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M4 8a4 4 0 0 1 4 -4h8a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-8a4 4 0 0 1 -4 -4z" />
              <path d="M9 12a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" />
              <path d="M16.5 7.5v.01" />
            </svg>
          </div>
          <div onClick={handleWhatsapp} className="icono-watsapp">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="green"
              stroke="white"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="icon icon-tabler icons-tabler-outline icon-tabler-brand-whatsapp"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M3 21l1.65 -3.8a9 9 0 1 1 3.4 2.9l-5.05 .9" />
              <path d="M9 10a.5 .5 0 0 0 1 0v-1a.5 .5 0 0 0 -1 0v1a5 5 0 0 0 5 5h1a.5 .5 0 0 0 0 -1h-1a.5 .5 0 0 0 0 1" />
            </svg>
          </div>
        </div>
      </article>
      <div
        className="img-contacto"
        style={{ backgroundImage: `url(${gatoImg})` }}
      ></div>
    </section>
  );
}
