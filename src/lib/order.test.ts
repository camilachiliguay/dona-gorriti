import { describe, expect, it } from "vitest";
import { menu } from "@/data/menu";
import { formatPrice, site } from "@/data/site";
import { buildOrderMessage } from "./order";

const a = menu[0];
const b = menu[menu.length - 1];
const lines = [
  { item: a, qty: 2 },
  { item: b, qty: 1 },
];
const subtotal = a.price * 2 + b.price;

describe("buildOrderMessage", () => {
  it("incluye cada producto con cantidad y precio", () => {
    const text = buildOrderMessage({ lines, subtotal, name: "", notes: "" });
    expect(text).toContain(`• 2× ${a.name} — ${formatPrice(a.price * 2)}`);
    expect(text).toContain(`• 1× ${b.name} — ${formatPrice(b.price)}`);
  });

  it("incluye el total y el lugar de retiro", () => {
    const text = buildOrderMessage({ lines, subtotal, name: "", notes: "" });
    expect(text).toContain(`Total: ${formatPrice(subtotal)}`);
    expect(text).toContain(`Retiro en el local: ${site.address}, ${site.city}`);
  });

  it("usa el nombre sin espacios sobrantes, o un guion si está vacío", () => {
    const named = buildOrderMessage({ lines, subtotal, name: "  Camila ", notes: "" });
    const anonymous = buildOrderMessage({ lines, subtotal, name: "   ", notes: "" });
    expect(named).toContain("Nombre: Camila");
    expect(anonymous).toContain("Nombre: —");
  });

  it("agrega las notas solo si existen", () => {
    const withNotes = buildOrderMessage({
      lines,
      subtotal,
      name: "",
      notes: " sin cebolla ",
    });
    const without = buildOrderMessage({ lines, subtotal, name: "", notes: "  " });
    expect(withNotes).toContain("Notas: sin cebolla");
    expect(without).not.toContain("Notas:");
  });

  it("termina con el agradecimiento", () => {
    const text = buildOrderMessage({ lines, subtotal, name: "", notes: "" });
    expect(text.endsWith("¡Gracias!")).toBe(true);
  });
});
