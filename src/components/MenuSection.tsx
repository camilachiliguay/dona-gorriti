"use client";

import Image from "next/image";
import { useState } from "react";
import { categories, menu, type CategoryId } from "@/data/menu";
import { formatPrice } from "@/data/site";
import { useCart } from "./CartProvider";
import { ArrowIcon, PlusIcon } from "./Icons";

export function MenuSection() {
  const [active, setActive] = useState<CategoryId>("empanadas");
  const { add, openCart, count } = useCart();

  return (
    <section className="section menu-section" id="menu">
      <div className="shell">
        <div className="menu-head">
          <div>
            <p className="eyebrow">La carta</p>
            <h2 className="display section-title" style={{ marginTop: 18 }}>
              Elegí tu
              <br />
              <span className="accent">pedido.</span>
            </h2>
          </div>
          <p className="lead">
            Todo se hace el mismo día. Sumá lo que quieras al pedido y cerralo por
            WhatsApp: te confirmamos disponibilidad y total en el momento.
          </p>
        </div>

        <div className="menu-tabs" role="tablist" aria-label="Categorías de la carta">
          {categories.map((entry) => {
            const amount = menu.filter((item) => item.category === entry.id).length;
            const isActive = entry.id === active;
            return (
              <button
                key={entry.id}
                type="button"
                role="tab"
                id={`tab-${entry.id}`}
                aria-controls={`panel-${entry.id}`}
                aria-selected={isActive}
                className={`menu-tab ${isActive ? "active" : ""}`}
                onClick={() => setActive(entry.id)}
              >
                {entry.short}
                <small>{String(amount).padStart(2, "0")}</small>
              </button>
            );
          })}
        </div>

        <div className="pay-strip">
          <span className="pay-strip-tag">Beneficio</span>
          <p>
            Pagando <strong>en efectivo o por transferencia</strong> tenés descuento.
            Consultanos el beneficio vigente al cerrar el pedido.
          </p>
        </div>

        {/* Todas las categorías están en el HTML (indexables); solo se muestra la activa */}
        {categories.map((category, index) => (
          <div
            key={category.id}
            id={`panel-${category.id}`}
            role="tabpanel"
            aria-labelledby={`tab-${category.id}`}
            hidden={category.id !== active}
          >
            <div className="category-head">
              <h3 className="display">
                <span>Sección {String(index + 1).padStart(2, "0")}</span>
                {category.name}
              </h3>
              <p>{category.blurb}</p>
            </div>

            <div className="menu-list">
              {menu
                .filter((item) => item.category === category.id)
                .map((item) => (
                  <article className="menu-row" key={item.id}>
                    <div className="menu-thumb">
                      <Image
                        src={item.image}
                        alt={`${item.name} — ${category.name}`}
                        fill
                        sizes="104px"
                      />
                    </div>

                    <div className="menu-item-copy">
                      <div className="menu-item-top">
                        <h4 className="menu-item-name">{item.name}</h4>
                        {item.tag && <span className="menu-tag">{item.tag}</span>}
                      </div>
                      <p className="menu-desc">{item.description}</p>
                    </div>

                    <span className="menu-price">{formatPrice(item.price)}</span>

                    <button
                      type="button"
                      className="menu-add"
                      onClick={() => add(item.id)}
                      aria-label={`Agregar ${item.name} al pedido`}
                    >
                      <PlusIcon />
                    </button>
                  </article>
                ))}
            </div>
          </div>
        ))}

        <p className="menu-note">
          <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <circle cx="12" cy="12" r="8.5" stroke="currentColor" strokeWidth="1.6" />
            <path
              d="M12 8v5M12 16.2v.2"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
            />
          </svg>
          Precios de referencia. Confirmamos el total y la disponibilidad por WhatsApp
          antes de preparar el pedido.
        </p>

        <div className="menu-cta">
          <p>
            ¿Ya sabés qué querés? <span>Armamos el pedido.</span>
          </p>
          <button type="button" className="btn btn-primary" onClick={openCart}>
            Ver mi pedido
            {count > 0 ? ` (${count})` : ""}
            <ArrowIcon />
          </button>
        </div>
      </div>
    </section>
  );
}
