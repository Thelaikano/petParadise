import "./conocenos.css";
import conocenosImg from "./conocenos.png";
export default function Conocenos() {
  return (
    <section id="conocenos" className="conocenos">
      <article className="info-conocenos">
        <h2>Quienes somos?</h2>
        <h3>Pet Paradise</h3>
        <p>
          <b>C</b>on más de 20 años de experiencia cuidando la salud y el
          bienestar de tus mascotas, somos tu aliado de confianza en todo lo que
          tu fiel compañero necesita.
        </p>
        <p>
          <b>E</b>n Pet Paradise ofrecemos un enfoque integral para el cuidado
          de tu mascota, combinando atención veterinaria de excelencia con
          servicios especializados que van más allá de la consulta médica.
        </p>

        <p>
          <b>N</b>os apasiona lo que hacemos, y cada decisión que tomamos está
          guiada por un solo objetivo: el bienestar de tu mascota. Porque para
          nosotros, no son solo pacientes… ¡son parte de la familia!
        </p>
      </article>
      <div
        className="img-conocenos"
        style={{ backgroundImage: `url(${conocenosImg})` }}
      ></div>
    </section>
  );
}
