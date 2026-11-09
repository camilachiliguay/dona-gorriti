const WEEK_DAYS = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
] as const;

export const site = {
  // Definí NEXT_PUBLIC_SITE_URL en producción (ej: https://tudominio.com.ar)
  url: (process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000").replace(/\/$/, ""),
  // La demo no se indexa. Para activar el SEO: NEXT_PUBLIC_ALLOW_INDEXING=true
  indexable: process.env.NEXT_PUBLIC_ALLOW_INDEXING === "true",
  name: "Doña Gorriti",
  tagline: "La empanada salteña",
  phoneDisplay: "+54 351 653-7736",
  phoneRaw: "543516537736",
  address: "José Pacífico Otero 1383",
  city: "Córdoba, Argentina",
  hours: "Lunes a sábados · 11:30 a 15:00 y 19:30 a 23:00 · Domingos 11:30 a 14:30",
  instagram: "https://www.instagram.com/donagorritiempanadas/",
  // Horarios estructurados para Google (deben coincidir con `hours`)
  openingHours: [
    { days: WEEK_DAYS, opens: "11:30", closes: "15:00" },
    { days: WEEK_DAYS, opens: "19:30", closes: "23:00" },
    { days: ["Sunday"], opens: "11:30", closes: "14:30" },
  ],
  maps: "https://www.google.com/maps/search/?api=1&query=Jos%C3%A9+Pac%C3%ADfico+Otero+1383%2C+C%C3%B3rdoba%2C+Argentina",
  award: {
    place: "2°",
    title: "Categoría Empanadas",
    contest: "Campeonato Mundial de la Pizza y la Empanada",
    edition: "HOTELGA 2026",
    recognition: "Reconocimiento oficial del Gobierno de la Provincia de Salta",
  },
} as const;

export function whatsappLink(message: string) {
  return `https://wa.me/${site.phoneRaw}?text=${encodeURIComponent(message)}`;
}

export function formatPrice(value: number) {
  return `$ ${value.toLocaleString("es-AR")}`;
}
