import { useState } from "react";
import "./navMini.css";
export default function NavMini() {
  const [cerrar, setCerrar] = useState(false);

  return (
    <nav
      onClick={() => setCerrar("15rem")}
      className="nav-mini"
      style={{ width: cerrar }}
    >
      <div className="iconos-navmini">
        <div className="icono-logo">
          <img src="logo.png" alt="" />
        </div>
        <div className="icono-inicio">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            fill="currentColor"
            viewBox="0 0 256 256"
          >
            <path d="M240,108a28,28,0,1,1-28-28A28,28,0,0,1,240,108ZM72,108a28,28,0,1,0-28,28A28,28,0,0,0,72,108ZM92,88A28,28,0,1,0,64,60,28,28,0,0,0,92,88Zm72,0a28,28,0,1,0-28-28A28,28,0,0,0,164,88Zm23.12,60.86a35.3,35.3,0,0,1-16.87-21.14,44,44,0,0,0-84.5,0A35.25,35.25,0,0,1,69,148.82,40,40,0,0,0,88,224a39.48,39.48,0,0,0,15.52-3.13,64.09,64.09,0,0,1,48.87,0,40,40,0,0,0,34.73-72Z"></path>
          </svg>
        </div>

        <div className="icono-quienes">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            fill="currentColor"
            viewBox="0 0 256 256"
          >
            <path d="M222.83,33.54a16,16,0,0,0-18.14,3.15c-.14.14-.26.27-.38.41L187.05,57A111.28,111.28,0,0,0,69,57L51.69,37.1c-.12-.14-.24-.27-.38-.41a16,16,0,0,0-18.14-3.15A16.4,16.4,0,0,0,24,48.46V136c0,49,40.06,89.63,91.56,95.32a4,4,0,0,0,4.44-4v-32l-13.42-13.43a8.22,8.22,0,0,1-.41-11.37,8,8,0,0,1,11.49-.18L128,180.68l10.34-10.35a8,8,0,0,1,11.49.18,8.22,8.22,0,0,1-.41,11.37L136,195.31v32a4,4,0,0,0,4.44,4C191.94,225.62,232,185,232,136V48.46A16.4,16.4,0,0,0,222.83,33.54ZM84,152a12,12,0,1,1,12-12A12,12,0,0,1,84,152Zm20-64a8,8,0,1,1-16,0V69a8,8,0,0,1,16,0Zm32,0a8,8,0,1,1-16,0V64a8,8,0,0,1,16,0Zm16,0V69a8,8,0,0,1,16,0V88a8,8,0,1,1-16,0Zm20,64a12,12,0,1,1,12-12A12,12,0,0,1,172,152Z"></path>
          </svg>
        </div>

        <div className="icono-servicios">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            fill="currentColor"
            viewBox="0 0 256 256"
          >
            <path d="M239.71,125l-16.42-88a16,16,0,0,0-19.61-12.58l-.31.09L150.85,40h-45.7L52.63,24.56l-.31-.09A16,16,0,0,0,32.71,37.05L16.29,125a15.77,15.77,0,0,0,9.12,17.52A16.26,16.26,0,0,0,32.12,144,15.48,15.48,0,0,0,40,141.84V184a40,40,0,0,0,40,40h96a40,40,0,0,0,40-40V141.85a15.5,15.5,0,0,0,7.87,2.16,16.31,16.31,0,0,0,6.72-1.47A15.77,15.77,0,0,0,239.71,125ZM176,208H136V195.31l13.66-13.65a8,8,0,0,0-11.32-11.32L128,180.69l-10.34-10.35a8,8,0,0,0-11.32,11.32L120,195.31V208H80a24,24,0,0,1-24-24V123.11L107.93,56h40.14L200,123.11V184A24,24,0,0,1,176,208Zm-72-68a12,12,0,1,1-12-12A12,12,0,0,1,104,140Zm72,0a12,12,0,1,1-12-12A12,12,0,0,1,176,140Z"></path>
          </svg>
        </div>

        <div className="icono-contacto">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            fill="currentColor"
            viewBox="0 0 256 256"
          >
            <path d="M231.12,107.72a35.91,35.91,0,0,1-46.19,6.8.14.14,0,0,0-.1,0l-70.35,70.36s0,0,0,.08a36,36,0,1,1-66.37,22.92,36,36,0,1,1,22.92-66.37.14.14,0,0,0,.1,0l70.35-70.36s0,0,0-.08a36,36,0,1,1,66.37-22.92,36,36,0,0,1,23.27,59.57Z"></path>
          </svg>
        </div>
        <div
          className="icono-cerrar"
          onClick={(e) => {
            e.stopPropagation();
            setCerrar("3rem");
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24px"
            height="24px"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M19 2h-14a3 3 0 0 0 -3 3v14a3 3 0 0 0 3 3h14a3 3 0 0 0 3 -3v-14a3 3 0 0 0 -3 -3zm-9.387 6.21l.094 .083l2.293 2.292l2.293 -2.292a1 1 0 0 1 1.497 1.32l-.083 .094l-2.292 2.293l2.292 2.293a1 1 0 0 1 -1.32 1.497l-.094 -.083l-2.293 -2.292l-2.293 2.292a1 1 0 0 1 -1.497 -1.32l.083 -.094l2.292 -2.293l-2.292 -2.293a1 1 0 0 1 1.32 -1.497z" />
          </svg>
        </div>
      </div>
      <ul className="enlaces-navmini">
        <li
          onClick={(e) => {
            e.stopPropagation();
            setCerrar("3rem");
          }}
        >
          <a href="#inicio">Inicio</a>
        </li>
        <li>
          <a
            onClick={(e) => {
              e.stopPropagation();
              setCerrar("3rem");
            }}
            href="#conocenos"
          >
            Conócenos
          </a>
        </li>
        <li>
          <a
            onClick={(e) => {
              e.stopPropagation();
              setCerrar("3rem");
            }}
            href="#servicios"
          >
            Servicios
          </a>
        </li>
        <li>
          <a
            onClick={(e) => {
              e.stopPropagation();
              setCerrar("3rem");
            }}
            href="#instalaciones"
          >
            Instalaciones
          </a>
        </li>

        <li>
          <a
            onClick={(e) => {
              e.stopPropagation();
              setCerrar("3rem");
            }}
            href="#contacto"
          >
            Contacto
          </a>
        </li>
        <li
          onClick={(e) => {
            e.stopPropagation();
            setCerrar("3rem");
          }}
        >
          Cerrar
        </li>
      </ul>
      <div className="marca-nav">
        <span>
          2026{" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="icon icon-tabler icons-tabler-outline icon-tabler-copyright"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
            <path d="M14 9.75a3.016 3.016 0 0 0 -4.163 .173a2.993 2.993 0 0 0 0 4.154a3.016 3.016 0 0 0 4.163 .173" />
          </svg>{" "}
          P31U24
        </span>
      </div>
    </nav>
  );
}
