"use client";

import { useCart } from "./CartProvider";
import { ArrowIcon } from "./Icons";
import { formatPrice } from "@/data/site";

export function MobileCartBar() {
  const { count, subtotal, isOpen, openCart } = useCart();
  const visible = count > 0 && !isOpen;

  return (
    <button
      type="button"
      className={`mobile-cart-bar ${visible ? "visible" : ""}`}
      onClick={openCart}
      aria-label={`Ver pedido, ${count} productos, total ${formatPrice(subtotal)}`}
    >
      <span className="mobile-cart-bar-copy">
        {count} {count === 1 ? "producto" : "productos"}
        <b>{formatPrice(subtotal)}</b>
      </span>
      <span className="mobile-cart-bar-action">
        <ArrowIcon />
      </span>
    </button>
  );
}
