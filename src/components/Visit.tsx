import Image from "next/image";
import { Reveal } from "./Reveal";
import { ArrowIcon, ClockIcon, InstagramIcon, PinIcon, WhatsAppIcon } from "./Icons";
import { site, whatsappLink } from "@/data/site";

export function Visit() {
  return (
    <section className="section visit" id="visitanos">
      <div className="shell">
        <div className="visit-grid">
          <Reveal className="visit-copy">
            <p className="eyebrow">Visitanos</p>
            <h2 className="display section-title">
              Te esperamos
              <br />
              <span className="accent">en la esquina.</span>
            </h2>
            <p className="lead">
              Pasá a buscar tus empanadas recién salidas del horno. Estamos en el barrio,
              todos los días.
            </p>

            <div className="visit-rows">
              <div className="visit-row">
                <PinIcon />
                <div>
                  <span>Dónde</span>
                  <a href={site.maps} target="_blank" rel="noreferrer">
                    {site.address} · {site.city}
                  </a>
                </div>
              </div>
              <div className="visit-row">
                <ClockIcon />
                <div>
                  <span>Horarios</span>
                  <p>
                    Lunes a sábados · 11:30 a 15:00 y 19:30 a 23:00
                    <br />
                    Domingo · 11:30 a 14:30
                  </p>
                </div>
              </div>
              <div className="visit-row">
                <WhatsAppIcon />
                <div>
                  <span>Pedidos</span>
                  <a
                    href={whatsappLink(
                      "Hola, Doña Gorriti. Quería consultar por las empanadas de hoy.",
                    )}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {site.phoneDisplay}
                  </a>
                </div>
              </div>
            </div>

            <div className="visit-actions">
              <a
                className="btn btn-primary"
                href={site.maps}
                target="_blank"
                rel="noreferrer"
              >
                Cómo llegar
                <ArrowIcon />
              </a>
              <a
                className="btn btn-ghost"
                href={site.instagram}
                target="_blank"
                rel="noreferrer"
              >
                <InstagramIcon />
                Instagram
              </a>
            </div>
          </Reveal>

          <Reveal className="visit-media" delay={120}>
            <Image
              src="/images/local.jpg"
              alt="Frente del local de Doña Gorriti en Córdoba"
              fill
              sizes="(max-width: 960px) 90vw, 55vw"
            />
            <span className="visit-caption">
              <span className="dot" />
              José Pacífico Otero 1383 · Córdoba
            </span>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
