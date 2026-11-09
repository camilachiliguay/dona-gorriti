"use client";
import { buildOrderMessage } from "@/lib/order";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { useCart } from "./CartProvider";
import { formatPrice, site, whatsappLink } from "@/data/site";
import { BagIcon, CloseIcon, MinusIcon, PlusIcon, WhatsAppIcon } from "./Icons";

export function CartDrawer() {
  const { detailed, count, subtotal, isOpen, closeCart, setQty, remove, toast } =
    useCart();
  const [name, setName] = useState("");
  const [notes, setNotes] = useState("");
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!isOpen) return;
    closeRef.current?.focus();

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeCart();
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [isOpen, closeCart]);

  function buildMessage() {
    return buildOrderMessage({ lines: detailed, subtotal, name, notes });
  }
  function handleSubmit() {
    if (!detailed.length) return;
    window.open(whatsappLink(buildMessage()), "_blank", "noopener,noreferrer");
  }

  return (
    <>
      <div
        className={`cart-overlay ${isOpen ? "open" : ""}`}
        onClick={closeCart}
        aria-hidden="true"
      />

      <aside
        className={`cart ${isOpen ? "open" : ""}`}
        role="dialog"
        aria-modal="true"
        aria-label="Tu pedido"
        aria-hidden={!isOpen}
      >
        <div className="cart-head">
          <h2>
            Tu pedido
            {count > 0 && <span>{count}</span>}
          </h2>
          <button
            type="button"
            className="cart-close"
            onClick={closeCart}
            aria-label="Cerrar pedido"
            ref={closeRef}
          >
            <CloseIcon />
          </button>
        </div>

        <div className="cart-body">
          {detailed.length === 0 ? (
            <div className="cart-empty">
              <BagIcon />
              <strong>El pedido está vacío</strong>
              <p>Sumá empanadas, tartas o una humita de la carta y volvé acá.</p>
              <a className="btn btn-ghost" href="#menu" onClick={closeCart}>
                Ver la carta
              </a>
            </div>
          ) : (
            <>
              {detailed.map(({ item, qty }) => (
                <div className="cart-line" key={item.id}>
                  <div className="cart-line-img">
                    <Image src={item.image} alt={item.name} width={64} height={64} />
                  </div>
                  <div className="cart-line-copy">
                    <strong>{item.name}</strong>
                    <span>
                      {formatPrice(item.price)} c/u · {qty}{" "}
                      {qty === 1 ? "unidad" : "unidades"}
                    </span>
                  </div>
                  <div className="cart-line-side">
                    <span className="cart-line-price">
                      {formatPrice(item.price * qty)}
                    </span>
                    <div className="qty">
                      <button
                        type="button"
                        onClick={() => setQty(item.id, qty - 1)}
                        aria-label={`Quitar uno de ${item.name}`}
                      >
                        <MinusIcon />
                      </button>
                      <span>{qty}</span>
                      <button
                        type="button"
                        onClick={() => setQty(item.id, qty + 1)}
                        aria-label={`Agregar uno de ${item.name}`}
                      >
                        <PlusIcon />
                      </button>
                    </div>
                    <button
                      type="button"
                      className="cart-line-remove"
                      onClick={() => remove(item.id)}
                    >
                      Quitar
                    </button>
                  </div>
                </div>
              ))}

              <div className="cart-form">
                <h3>Datos del pedido</h3>

                <div className="field">
                  <label htmlFor="cart-name">Tu nombre</label>
                  <input
                    id="cart-name"
                    type="text"
                    placeholder="Nombre y apellido"
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                    autoComplete="name"
                  />
                </div>

                <div className="field">
                  <label>Entrega</label>
                  <p className="cart-pickup">
                    Solo retiro en el local · {site.address}, {site.city}
                  </p>
                </div>

                <div className="field">
                  <label htmlFor="cart-notes">Notas (opcional)</label>
                  <textarea
                    id="cart-notes"
                    placeholder="Sin cebolla, horario, timbre..."
                    value={notes}
                    onChange={(event) => setNotes(event.target.value)}
                  />
                </div>
              </div>
            </>
          )}
        </div>

        <div className="cart-foot">
          <div className="cart-total">
            <span>Total del pedido</span>
            <strong>{formatPrice(subtotal)}</strong>
          </div>
          <button
            type="button"
            className="btn btn-primary btn-block"
            onClick={handleSubmit}
            disabled={!detailed.length}
          >
            <WhatsAppIcon />
            Pedir por WhatsApp
          </button>
          <p className="cart-foot-note">
            Se abre WhatsApp con el pedido armado. Solo retiro en el local. El total se
            confirma con Doña Gorriti.
          </p>
        </div>
      </aside>

      <div className={`toast ${toast && !isOpen ? "visible" : ""}`} aria-live="polite">
        <PlusIcon />
        {toast}
      </div>
    </>
  );
}
