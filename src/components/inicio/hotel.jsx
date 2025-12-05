import "./hotel.css";
export default function Hotel({ handleWhatsapp }) {
  return (
    <article id="hotel" className="hotel">
      <div className="info-hotel">
        <h3>Hotel Pet Paradise – Donde tu mascota se siente como en casa</h3>
        <p>
          ¿<span>Vas de viaje</span>, tienes una jornada intensa o simplemente
          necesitas que alguien cuide a tu mejor amigo con amor y
          profesionalismo? En <span>Hotel Pet Paradise</span>, tu mascota no
          solo está alojada… <span>¡está de vacaciones!</span>
        </p>
        <p>
          <b>C</b>on más de 20 años de experiencia en el cuidado canino, hemos
          diseñado un <span>espacio seguro, limpio</span> y lleno de cariño,
          pensado especialmente para el bienestar físico y emocional de tu
          mascota.
        </p>
        <div className="galeria-hotel">
          <img src="hotel1.png" alt="hotel1" />
          <img src="hotel2.png" alt="hotel2" />

          <img src="hotel4.png" alt="hotel4" />
          <img src="hotel1.png" alt="hotel1" />
          <img src="hotel2.png" alt="hotel2" />
        </div>

        <h4>¿Qué ofrecemos?</h4>
        <ul>
          <li>
            Habitaciones cómodas y ventiladas, con camas suaves, agua fresca y
            control de temperatura.
          </li>
          <li>
            Áreas de recreo seguras y amplias, donde pueden correr, jugar y
            socializar (siempre bajo supervisión).
          </li>
          <li>
            Alimentación personalizada: respetamos su dieta habitual o seguimos
            las indicaciones veterinarias.
          </li>
          <li>
            Atención las 24 horas: nuestro equipo está siempre presente para
            brindar cuidados y compañía.
          </li>
          <li>
            Servicios adicionales: baño, cepillado, paseos diarios y reportes
            con fotos o videos (¡para que estés tranquilo mientras no estás!).
          </li>
          <li>
            Aceptamos pautas médicas: si tu perro necesita medicación,
            suplementos o cuidados especiales, lo atendemos sin problema.
          </li>
        </ul>
        <div className="galeria-hotel">
          <img src="hotel1.png" alt="hotel1" />
          <img src="hotel2.png" alt="hotel2" />

          <img src="hotel4.png" alt="hotel4" />
          <img src="hotel1.png" alt="hotel1" />
          <img src="hotel2.png" alt="hotel2" />
        </div>

        <p>
          <b>E</b>n <span>Hotel Pet Paradise</span>, cada huésped es tratado
          como un miembro más de la familia. Porque sabemos que confiar en quién
          cuida a tu perro es una decisión importante…{" "}
          <span>¡y queremos que te vayas con la mente tranquila!</span>
        </p>
        <p>
          <b>R</b>eserva su estadía hoy y dale a tu fiel compañero unas
          vacaciones inolvidables.
        </p>
        <div onClick={handleWhatsapp} className="boton-cita">
          <p>Reserva ahora</p>
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
        <h4>
          Pet Paradise – Donde la salud y el cuidado diario de tu mascota van de
          la mano.
        </h4>
        <p>
          <span>¡Ven a conocernos!</span> Estamos listos para atenderte con
          profesionalismo, calidez y el cariño que tu fiel compañero merece.
        </p>
      </div>
    </article>
  );
}
