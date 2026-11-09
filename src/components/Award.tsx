import Image from "next/image";
import { Reveal } from "./Reveal";
import { site } from "@/data/site";

export function Award() {
  return (
    <section className="section award" id="premio">
      <div className="shell award-grid">
        <Reveal className="award-media">
          <Image
            src="/images/premio.jpg"
            alt="Doña Gorriti premiada en el Campeonato Mundial de la Pizza y la Empanada 2026"
            fill
            sizes="(max-width: 960px) 90vw, 38vw"
          />
          <div className="award-seal" aria-hidden="true">
            <span>
              <strong>HOTELGA</strong>
              2026
              <br />
              Salta
            </span>
          </div>
        </Reveal>

        <Reveal className="award-copy" delay={100}>
          <p className="eyebrow">Reconocimiento</p>
          <div className="award-place">
            <span className="award-number">{site.award.place}</span>
            <span className="award-place-copy">
              <strong>Puesto mundial</strong>
              <span>{site.award.title}</span>
            </span>
          </div>
          <p className="lead">
            En el Campeonato Mundial de la Pizza y la Empanada, edición HOTELGA 2026,
            nuestra empanada salteña se llevó el segundo puesto en la categoría Empanadas.
            Un premio que también es de la gente que nos elige todos los días.
          </p>

          <div className="award-meta">
            <div>
              <span>Certamen</span>
              <p>{site.award.contest}</p>
            </div>
            <div>
              <span>Reconocimiento</span>
              <p>{site.award.recognition}</p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
