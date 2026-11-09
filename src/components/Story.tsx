import Image from "next/image";
import { Reveal } from "./Reveal";

const principles = [
  {
    number: "01",
    title: "La masa",
    text: "Harina, grasa y agua. Finita, elástica, con el punto justo para que el relleno sea el protagonista.",
  },
  {
    number: "02",
    title: "El relleno",
    text: "Carne cortada a cuchillo, papa en cubos, cebolla de verdeo y huevo. Cocido despacio, sin atajos.",
  },
  {
    number: "03",
    title: "El repulgue",
    text: "Uno por uno, a mano. Es el sello de la casa y la razón por la que no se abre en el horno.",
  },
];

export function Story() {
  return (
    <section className="section" id="casa">
      <div className="shell story-grid">
        <Reveal className="story-copy">
          <p className="eyebrow">La casa</p>
          <h2 className="display section-title">
            Una receta
            <br />
            que cruza
            <br />
            <span className="accent">el país.</span>
          </h2>
          <p className="lead">
            Doña Gorriti nació en Salta y llegó a Córdoba con una idea simple: hacer la
            empanada como se hace en casa. Sin apuro, sin conservantes y con la mano de
            siempre.
          </p>

          <div className="principles">
            {principles.map((principle) => (
              <div className="principle" key={principle.number}>
                <span className="principle-num">{principle.number}</span>
                <div>
                  <strong>{principle.title}</strong>
                  <p>{principle.text}</p>
                </div>
              </div>
            ))}
          </div>

          <blockquote className="story-quote">
            “La receta de siempre, el sabor de nuestra tierra.”
            <span>La cocina de Doña Gorriti</span>
          </blockquote>
        </Reveal>

        <Reveal className="story-media" delay={120}>
          <span className="story-vertical">Salta · Córdoba · desde siempre</span>
          <div className="story-media-frame">
            <Image
              src="/images/manos.jpg"
              alt="Manos armando empanadas salteñas a mano"
              fill
              sizes="(max-width: 960px) 90vw, 45vw"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
