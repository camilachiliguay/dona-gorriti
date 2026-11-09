import { act, renderHook } from "@testing-library/react";
import type { ReactNode } from "react";
import { beforeEach, describe, expect, it } from "vitest";
import { menu } from "@/data/menu";
import { CartProvider, useCart } from "./CartProvider";

const STORAGE_KEY = "dona-gorriti-cart-v1";
const a = menu[0];
const b = menu[menu.length - 1];

function wrapper({ children }: { children: ReactNode }) {
  return <CartProvider>{children}</CartProvider>;
}

// El carrito se restaura de localStorage después de montar: se espera a que termine.
async function renderCart() {
  const hook = renderHook(() => useCart(), { wrapper });
  await act(async () => {});
  return hook;
}

describe("CartProvider", () => {
  beforeEach(() => {
    window.localStorage.clear();
  });

  it("arranca vacío", async () => {
    const { result } = await renderCart();
    expect(result.current.lines).toEqual([]);
    expect(result.current.count).toBe(0);
    expect(result.current.subtotal).toBe(0);
  });

  it("agrega un producto y suma cantidad si se repite", async () => {
    const { result } = await renderCart();
    act(() => result.current.add(a.id));
    expect(result.current.lines).toEqual([{ id: a.id, qty: 1 }]);
    act(() => result.current.add(a.id));
    expect(result.current.lines).toEqual([{ id: a.id, qty: 2 }]);
  });

  it("ignora ids que no están en la carta", async () => {
    const { result } = await renderCart();
    act(() => result.current.add("no-existe"));
    expect(result.current.lines).toEqual([]);
  });

  it("calcula cantidad total y subtotal", async () => {
    const { result } = await renderCart();
    act(() => {
      result.current.add(a.id);
      result.current.add(a.id);
      result.current.add(b.id);
    });
    expect(result.current.count).toBe(3);
    expect(result.current.subtotal).toBe(a.price * 2 + b.price);
  });

  it("cambia la cantidad y elimina la línea si llega a 0", async () => {
    const { result } = await renderCart();
    act(() => result.current.add(a.id));
    act(() => result.current.setQty(a.id, 5));
    expect(result.current.lines).toEqual([{ id: a.id, qty: 5 }]);
    act(() => result.current.setQty(a.id, 0));
    expect(result.current.lines).toEqual([]);
  });

  it("quita un producto y vacía el carrito", async () => {
    const { result } = await renderCart();
    act(() => {
      result.current.add(a.id);
      result.current.add(b.id);
    });
    act(() => result.current.remove(a.id));
    expect(result.current.lines).toEqual([{ id: b.id, qty: 1 }]);
    act(() => result.current.clear());
    expect(result.current.lines).toEqual([]);
  });

  it("guarda el carrito en localStorage", async () => {
    const { result } = await renderCart();
    act(() => result.current.add(a.id));
    const saved = JSON.parse(window.localStorage.getItem(STORAGE_KEY) ?? "[]");
    expect(saved).toEqual([{ id: a.id, qty: 1 }]);
  });

  it("restaura el carrito guardado y descarta líneas inválidas", async () => {
    window.localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify([
        { id: a.id, qty: 3 },
        { id: "producto-borrado", qty: 1 },
        { id: b.id, qty: 0 },
        { id: b.id, qty: "dos" },
        null,
      ]),
    );
    const { result } = await renderCart();
    expect(result.current.lines).toEqual([{ id: a.id, qty: 3 }]);
  });

  it("tolera JSON corrupto en localStorage", async () => {
    window.localStorage.setItem(STORAGE_KEY, "{esto no es json");
    const { result } = await renderCart();
    expect(result.current.lines).toEqual([]);
  });
});
