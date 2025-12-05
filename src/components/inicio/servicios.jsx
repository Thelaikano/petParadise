import "./servicios.css";
import serviciosImg from "./servicios.png";
export default function Servicios() {
  return (
    <section id="servicios" className="servicios">
      <h2>Servicios</h2>
      <article className="info-servicios">
        <div className="tarjeta-servicios">
          <p>Atención Medica General</p>
          <ul>
            <h4>Información</h4>
            <li>Consultas veterinarias de rutina y de emergencia</li>
            <li>Vacunación y planes de prevención</li>
            <li>Desparasitación interna y externa</li>
            <li>Control de peso y nutrición personalizada</li>
            <li>Chequeos geriátricos para mascotas senior</li>
          </ul>
        </div>
        <div className="tarjeta-servicios">
          <p>Cirugía</p>
          <ul>
            <h4>Información</h4>
            <li>
              Cirugías generales (esterilización, castración, tumores, etc.)
            </li>
            <li>Cirugías de emergencia (traumatismos, obstrucciones, etc.)</li>
            <li>Cirugía ortopédica básica</li>
            <li>
              Protocolos pre y postoperatorios con seguimiento personalizado
            </li>
          </ul>
        </div>
        <div className="tarjeta-servicios">
          <p>Hospitalización</p>
          <ul>
            <h4>Información</h4>
            <li>Sala de hospitalización con monitoreo 24/7</li>
            <li>Terapias de recuperación y cuidados intensivos</li>
          </ul>
        </div>
        <div className="tarjeta-servicios">
          <p>Diagnóstico y Laboratorio</p>
          <ul>
            <h4>Información</h4>
            <li>Rayos X y ultrasonido</li>
            <li>Análisis clínicos (sangre, orina, heces)</li>
            <li>Pruebas rápidas para enfermedades infecciosas</li>
            <li>Electrocardiogramas (ECG)</li>
          </ul>
        </div>
        <div className="tarjeta-servicios">
          <p>Tienda especializada</p>
          <ul>
            <h4>Información</h4>
            <li>Croquetas y alimentos húmedos de marcas confiables.</li>
            <li>Suplementos y vitaminas</li>
            <li>Accesorios collares, correas, arneses, camas,etc.</li>
            <li>
              Productos de higiene champús, acondicionadores, toallitas,
              cepillos.
            </li>
          </ul>
        </div>
        <div className="tarjeta-servicios">
          <p>Pensión / Hotel Canino</p>
          <ul>
            <h4>Información</h4>
            <li>Alojamiento seguro y cómodo</li>
            <li>Áreas de recreo supervisadas</li>
            <li>
              Atención personalizada según necesidades (medicación, dieta
              especial, etc.)
            </li>
            <li>Reportes diarios (opcional)</li>
          </ul>
        </div>
        <div className="tarjeta-servicios">
          <p>Estética y Peluquería</p>
          <ul>
            <h4>Información</h4>
            <li>Baño y secado con productos dermatológicos</li>
            <li>Corte de pelo según raza o estilo</li>
            <li>Corte y limpieza de uñas</li>
            <li>Limpieza de oídos y glándulas anales</li>
            <li>Tratamientos antipulgas y antiparasitarios tópicos</li>
          </ul>
        </div>
        <div className="tarjeta-servicios">
          <p>Crianza Responsable</p>
          <ul>
            <h4>Información</h4>
            <li>Asesoría en reproducción canina</li>
            <li>Control prenatal y partos asistidos</li>
            <li>Cuidado neonatal y destete</li>
            <li>Certificación y registro de camadas (si aplica)</li>
          </ul>
        </div>
        <div className="tarjeta-servicios">
          <p>Servicios Adicionales</p>
          <ul>
            <h4>Información</h4>
            <li>Microchip y registro de identificación</li>
            <li>Farmacia veterinaria con productos de calidad</li>
            <li>Asesoría en adopción y bienestar animal</li>
            <li>Programas de educación para dueños</li>
          </ul>
        </div>
      </article>
      <div
        className="img-servicios"
        style={{ backgroundImage: `url(${serviciosImg})` }}
      ></div>
    </section>
  );
}
