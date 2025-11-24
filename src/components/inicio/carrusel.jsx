import "./carrusel.css";
import principioImg from "./principio.png";
import medioImg from "./medio.png";
import finalImg from "./final.png";
import mapaImg from "./mapasucursal.png";
export default function Carrusel({
  handleMapasucursal,
  handleWhatsapp,
  handleLlamada,
}) {
  return (
    <section id="inicio" className="carrusel">
      <div className="carrusel-contenedor">
        <article className="carrusel-p1">
          <div className="contenedor-pantalla">
            <span
              className="img-carruselp1"
              style={{ backgroundImage: `url(${principioImg})` }}
            ></span>
            <div className="info-carruselp1">
              <img src="nombre.png" alt="nombre" className="titulo-carrusel" />
              <div className="text-p1">
                <h2>El Mejor Centro Veterinario</h2>
                <h3>Horario Sucursal</h3>
                <p>Lunes a Viernes:</p>
                <p>10am - 8pm</p>
                <p>Sábado: 10am - 5pm</p>
                <p>Domingo: Cerrado</p>
              </div>
              <div className="boton-carrusel" onClick={handleWhatsapp}>
                <p>Agenda tu cita</p>
                <div className="icono-watsapp">
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
            </div>
          </div>
        </article>
        <article className="carrusel-p2">
          <div className="contenedor-pantalla">
            <span
              className="img-carruselp2"
              style={{ backgroundImage: `url(${medioImg})` }}
            ></span>
            <div className="info-carruselp2">
              <img src="nombre.png" alt="nombre" className="titulo-carrusel" />
              <div className="text-p2">
                <h2>Servicio las</h2>
                <h2>24 Hrs</h2>

                <p>Por que ellos no</p>
                <p> conocen de horarios</p>

                <h3>Los siete días de la semana</h3>
              </div>
              <div className="boton-carrusel" onClick={handleWhatsapp}>
                <p>Agenda tu cita</p>
                <div className="icono-watsapp">
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
            </div>
          </div>
        </article>
        <article className="carrusel-p3">
          <div className="contenedor-pantalla">
            <span
              className="img-carruselp3"
              style={{ backgroundImage: `url(${finalImg})` }}
            ></span>
            <div className="info-carruselp3">
              <img src="nombre.png" alt="nombre" className="titulo-carrusel" />
              <div className="text-p3">
                <h2>Visítanos:</h2>
                <img src={mapaImg} alt="mapa" onClick={handleMapasucursal} />
                <p>Calle Mira 213-local 15</p>
                <p>Colonia Emiliano Zapata</p>
                <p>San Andrés Cholula, Pueble, C.P.72824</p>

                <p
                  style={{ color: "yellow", cursor: "pointer" }}
                  onClick={handleLlamada}
                >
                  Tel:52-222-225-0554
                </p>
              </div>
              <div className="boton-carrusel" onClick={handleWhatsapp}>
                <p>Agenda tu cita</p>
                <div className="icono-watsapp">
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
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}
