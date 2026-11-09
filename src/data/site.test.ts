import { describe, expect, it } from "vitest";
import { formatPrice, site, whatsappLink } from "./site";

describe("formatPrice", () => {
  it("formatea en pesos argentinos", () => {
    expect(formatPrice(2400)).toMatch(/^\$ 2\.?400$/);
    expect(formatPrice(15000)).toBe("$ 15.000");
  });
});

describe("whatsappLink", () => {
  it("apunta al número del local", () => {
    expect(whatsappLink("hola")).toMatch(
      new RegExp(`^https://wa\\.me/${site.phoneRaw}\\?text=`),
    );
  });

  it("codifica tildes y saltos de línea sin perder el texto", () => {
    const message = "¡Hola! Pedido:\n• 2× Humita";
    const url = new URL(whatsappLink(message));
    expect(url.searchParams.get("text")).toBe(message);
  });
});
