import "./sucursal.css";
export default function Sucursal({ handleWhatsapp }) {
  return (
    <article className="sucursal">
      <div className="info-sucursal">
        <h3>Sucursal Pet Paradise – Cuidado integral en un solo lugar</h3>
        <p>
          <b>E</b>n nuestra sucursal <span>Pet Paradise</span>, combinamos la
          atención veterinaria de calidad con la comodidad de una tienda
          especializada, todo pensado para brindarte una experiencia completa y
          sin complicaciones.
        </p>
        <h4>Consultorio Veterinario</h4>
        <p>
          <b>C</b>ontamos con un consultorio moderno y equipado, donde tu
          mascota recibe atención profesional en un{" "}
          <span>ambiente tranquilo y seguro</span>. Ofrecemos:
        </p>
        <ul>
          <li>Consultas de rutina y emergencias</li>
          <li>Vacunación y planes de prevención</li>
          <li>Diagnóstico y tratamiento de enfermedades</li>
          <li>Asesoría en nutrición, comportamiento y bienestar</li>
        </ul>
        <p>
          <b>N</b>uestros veterinarios están comprometidos con un enfoque
          cercano, ético y centrado en las necesidades reales de tu perro o
          gato.
        </p>
        <div className="galeria-sucursal">
          <img src="sucursal1.png" alt="sucursal1" />
          <img src="sucursal2.png" alt="sucursal2" />
          <img src="sucursal3.png" alt="sucursal3" />
          <img src="sucursal4.png" alt="sucursal4" />
          <img src="sucursal5.png" alt="sucursal5" />
        </div>
        <div onClick={handleWhatsapp} className="boton-cita">
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
        <h4>Tienda Pet Paradise</h4>
        <p>
          <b>A</b>l salir de la consulta —o simplemente de paso—, podrás
          encontrar en nuestra tienda{" "}
          <span>todo lo que tu mascota necesita</span>:
        </p>
        <ul>
          <li>
            Alimentos premium para todas las edades y condiciones de salud
          </li>
          <li>
            Accesorios: collares, correas, camas, juguetes y transportadoras
          </li>
          <li>
            Productos de higiene y estética: champús, cepillos, toallitas y más
          </li>
          <li>Suplementos, vitaminas y premios saludables</li>
        </ul>

        <p>
          <b>T</b>odo nuestro surtido ha sido seleccionado con criterio
          veterinario, para que siempre elijas lo mejor.
        </p>
        <div className="galeria-sucursal">
          <img src="sucursal1.png" alt="sucursal1" />
          <img src="sucursal2.png" alt="sucursal2" />
          <img src="sucursal3.png" alt="sucursal3" />
          <img src="sucursal4.png" alt="sucursal4" />
          <img src="sucursal5.png" alt="sucursal5" />
        </div>
      </div>
      <div onClick={handleWhatsapp} className="boton-cita">
        <p>Haz tu pedido</p>
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
    </article>
  );
}
