import PageHero from "../components/common/PageHero.jsx";
import {
  IconLeaf,
  IconEye,
  IconSprout,
  IconShield,
} from "../components/common/Icons.jsx";
import "../styles/pages.css";

const STEPS = [
  {
    title: "Escuchamos primero",
    text: "Antes de recomendarte nada, platicamos contigo sobre lo que estás viviendo. No hay dos procesos iguales.",
  },
  {
    title: "Armamos tu combinación",
    text: "Con esa información, seleccionamos las esencias que mejor responden a tu situación particular.",
  },
  {
    title: "Te acompañamos en el proceso",
    text: "Seguimos en contacto para ajustar la combinación si es necesario, conforme vas avanzando.",
  },
];

const VALUES = [
  { icon: IconSprout, label: "100% natural" },
  { icon: IconShield, label: "Elaboración artesanal" },
  { icon: IconLeaf, label: "Sabiduría floral" },
  { icon: IconEye, label: "Acompañamiento cercano" },
];

export default function Nosotros() {
  return (
    <>
      <PageHero
        eyebrow="Quiénes somos"
        title="Nosotros"
        lead="Un espacio dedicado al bienestar emocional a través de la naturaleza."
      />

      <section className="page-section container about-intro">
        <div className="about-intro__gallery" aria-label="Fotos de la consulta y ubicación">
          <img
            src="https://esencias-naturales.s3.us-east-2.amazonaws.com/Consultorio.jpg"
            alt="Consultorio de Esencias Naturales"
            className="about-intro__photo about-intro__photo--large"
          />
          <img
            src="https://esencias-naturales.s3.us-east-2.amazonaws.com/map.png"
            alt="Mapa de ubicación"
            className="about-intro__photo"
          />
        </div>

        <div className="about-intro__content">
          <p className="prose">
            Esencias Naturales nace del deseo de acercar terapias florales de
            calidad a quienes buscan recuperar su equilibrio emocional.
            Trabajamos con dos sistemas complementarios: las Flores de Bach, de
            tradición británica, y los Elíxires Aztecas, inspirados en la
            sabiduría herbolaria de México.
          </p>
          <p className="prose">
            Cada esencia se elabora con cuidado y pureza, respetando los
            procesos naturales de extracción para conservar todas sus
            propiedades.
          </p>
          <p className="prose">
            Creemos que el bienestar emocional no se resuelve con fórmulas
            genéricas. Por eso, detrás de cada combinación hay tiempo, escucha y
            una intención clara: acompañarte de forma cercana en tu propio
            proceso.
          </p>

          <ul className="value-row mt-lg">
            {VALUES.map(({ icon: Icon, label }) => (
              <li key={label}>
                <Icon size={20} />
                <span>{label}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="page-section container">
        <h2 className="section-title">Nuestra misión y visión</h2>
        <ul className="card-grid mt-lg">
          <li className="simple-card">
            <IconLeaf size={26} />
            <h3 className="icon-heading">Nuestra Misión</h3>
            <p>
              Brindar herramientas naturales para el equilibrio emocional y el
              bienestar integral.
            </p>
          </li>
          <li className="simple-card">
            <IconEye size={26} />
            <h3 className="icon-heading">Nuestra Visión</h3>
            <p>
              Ser un referente en terapias florales en México y contribuir a
              una vida más consciente.
            </p>
          </li>
        </ul>
      </section>

      <section className="page-section container">
        <h2 className="section-title">Cómo trabajamos</h2>
        <p className="prose">
          Así es el proceso detrás de cada combinación, de principio a fin.
        </p>

        <ol className="steps-list mt-lg">
          {STEPS.map((step, i) => (
            <li key={step.title}>
              <span className="steps-list__num">{i + 1}</span>
              <div>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>
    </>
  );
}