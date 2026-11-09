import { InstagramIcon, WhatsAppIcon } from "./Icons";
import { site, whatsappLink } from "@/data/site";

export function Footer() {
  return (
    <footer className="footer">
      <div className="shell">
        <p className="footer-word" aria-hidden="true">
          Doña Gorriti
        </p>

        <div className="footer-grid">
          <div className="footer-brand">
            <span className="brand-sub">La empanada salteña</span>
            <p>
              Empanadas, tartas y comida casera hecha como en casa. De Salta a Córdoba,
              todos los días.
            </p>
          </div>

          <div className="footer-col">
            <h5>Carta</h5>
            <a href="#menu">Empanadas</a>
            <a href="#menu">Tartas</a>
            <a href="#menu">Comida a la olla</a>
          </div>

          <div className="footer-col">
            <h5>La casa</h5>
            <a href="#casa">Nuestra historia</a>
            <a href="#premio">Premio mundial</a>
            <a href="#visitanos">Dónde estamos</a>
          </div>

          <div className="footer-col">
            <h5>Contacto</h5>
            <a
              href={whatsappLink("Hola, Doña Gorriti. Quería hacer un pedido.")}
              target="_blank"
              rel="noreferrer"
            >
              <WhatsAppIcon className="" />
              {site.phoneDisplay}
            </a>
            <a href={site.instagram} target="_blank" rel="noreferrer">
              <InstagramIcon className="" />
              @donagorritiempanadas
            </a>
            <p>
              {site.address}
              <br />
              {site.city}
            </p>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} Doña Gorriti</span>
          <span>Hecho a mano · Córdoba, Argentina</span>
        </div>
      </div>
    </footer>
  );
}
