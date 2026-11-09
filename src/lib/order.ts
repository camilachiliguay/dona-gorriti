import type { MenuItem } from "@/data/menu";
import { formatPrice, site } from "@/data/site";

export type OrderLine = { item: MenuItem; qty: number };

export function buildOrderMessage({
  lines,
  subtotal,
  name,
  notes,
}: {
  lines: OrderLine[];
  subtotal: number;
  name: string;
  notes: string;
}) {
  const items = lines
    .map(({ item, qty }) => `• ${qty}× ${item.name} — ${formatPrice(item.price * qty)}`)
    .join("\n");

  const message = [
    "¡Hola, Doña Gorriti! Quiero hacer este pedido:",
    "",
    items,
    "",
    `Total: ${formatPrice(subtotal)}`,
    "",
    `Nombre: ${name.trim() || "—"}`,
    `Retiro en el local: ${site.address}, ${site.city}`,
  ];

  if (notes.trim()) {
    message.push(`Notas: ${notes.trim()}`);
  }

  message.push("", "¡Gracias!");
  return message.join("\n");
}
