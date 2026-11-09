import Image from "next/image";
import { ArrowIcon, WhatsAppIcon } from "./Icons";
import { site, whatsappLink } from "@/data/site";

export function Hero() {
  return (
    <section className="hero" id="inicio">
      <div className="hero-media">
        <Image
          src="/images/hero-empanada.webp"
          alt="Empanada salteña recién horneada abierta al medio"
          fill
          priority
          sizes="100vw"
        />
      </div>
      <div className="hero-shade" />

      <div className="shell">
        <div className="hero-content">
          <p className="eyebrow hero-kicker">De Salta a Córdoba</p>
          <h1 className="display">
            <span className="line">La empanada</span>
            <span className="line gold">salteña</span>
            <span className="line outline">de verdad.</span>
          </h1>
          <p className="hero-sub">
            Masa finita, relleno generoso y repulgue hecho a mano. Horneadas en el
            momento, todos los días, en el corazón de Córdoba.
          </p>
          <div className="hero-actions">
            <a className="btn btn-primary" href="#menu">
              Ver menú
              <ArrowIcon />
            </a>
            <a className="btn btn-ghost" href="#menu">
              Hacer pedido
            </a>
            <a
              className="btn btn-ghost"
              href={whatsappLink(
                "Hola, Doña Gorriti. Quería consultar por las empanadas de hoy.",
              )}
              target="_blank"
              rel="noreferrer"
            >
              <WhatsAppIcon />
              WhatsApp
            </a>
          </div>
        </div>

        <a className="hero-award" href="#premio">
          <span className="hero-award-badge">2°</span>
          <span className="hero-award-copy">
            <strong>Mundial de la Empanada 2026</strong>
            <span>Categoría Empanadas · HOTELGA</span>
            <ArrowIcon />
          </span>
        </a>

        <div className="hero-foot">
          <p>
            <span className="dot" />
            Horneadas en el momento
          </p>
          <p>
            <span className="dot" />
            {site.hours}
          </p>
          <a className="scroll-cue" href="#casa">
            Conocé la casa
            <span />
          </a>
        </div>
      </div>
    </section>
  );
}
