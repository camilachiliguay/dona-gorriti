"use client";

import { useEffect, useState } from "react";
import { useCart } from "./CartProvider";
import { BagIcon, CloseIcon, MenuIcon, WhatsAppIcon } from "./Icons";
import { site } from "@/data/site";

const links = [
  { href: "#menu", label: "Menú", number: "01" },
  { href: "#casa", label: "La casa", number: "02" },
  { href: "#premio", label: "Premio", number: "03" },
  { href: "#visitanos", label: "Visitanos", number: "04" },
];

export function Nav() {
  const { count, openCart } = useCart();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header className={`site-nav ${scrolled || open ? "scrolled" : ""}`}>
        <div className="shell nav-inner">
          <a className="brand" href="#inicio" aria-label={`${site.name}, inicio`}>
            <span className="brand-word">
              DOÑA <span>GORRITI</span>
            </span>
            <span className="brand-sub">La empanada salteña</span>
          </a>

          <nav className="nav-links" aria-label="Principal">
            {links.map((link) => (
              <a key={link.href} href={link.href}>
                {link.label}
              </a>
            ))}
          </nav>

          <div className="nav-actions">
            <button
              type="button"
              className="cart-btn"
              onClick={openCart}
              aria-label={`Abrir pedido, ${count} productos`}
            >
              <BagIcon />
              <span>Pedido</span>
              {count > 0 && <span className="cart-count">{count}</span>}
            </button>
            <a
              className="btn btn-primary nav-order"
              href={`https://wa.me/${site.phoneRaw}`}
              target="_blank"
              rel="noreferrer"
            >
              <WhatsAppIcon />
              WhatsApp
            </a>
            <button
              type="button"
              className="mobile-toggle"
              onClick={() => setOpen((value) => !value)}
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label={open ? "Cerrar menú" : "Abrir menú"}
            >
              {open ? <CloseIcon /> : <MenuIcon />}
            </button>
          </div>
        </div>
      </header>

      <div
        className={`mobile-panel ${open ? "open" : ""}`}
        id="mobile-menu"
        aria-hidden={!open}
      >
        <nav aria-label="Menú móvil">
          {links.map((link) => (
            <a key={link.href} href={link.href} onClick={() => setOpen(false)}>
              {link.label}
              <span>{link.number}</span>
            </a>
          ))}
        </nav>
        <div className="mobile-panel-foot">
          <p>{site.hours}</p>
          <p>
            {site.address} · {site.city}
          </p>
          <a
            className="btn btn-primary btn-block"
            href={`https://wa.me/${site.phoneRaw}`}
            target="_blank"
            rel="noreferrer"
          >
            <WhatsAppIcon />
            Pedir por WhatsApp
          </a>
        </div>
      </div>
    </>
  );
}
