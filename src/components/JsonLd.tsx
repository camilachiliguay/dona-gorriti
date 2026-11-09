import { categories, menu } from "@/data/menu";
import { site } from "@/data/site";

export function JsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    "@id": `${site.url}/#restaurant`,
    name: site.name,
    alternateName: site.tagline,
    url: site.url,
    description:
      "Empanadas salteñas, tartas y comida a la olla horneadas en el momento en Córdoba, Argentina. Segundo puesto en el Mundial de la Empanada 2026.",
    image: [
      `${site.url}/og.jpg`,
      `${site.url}/images/local.jpg`,
      `${site.url}/images/premio.jpg`,
    ],
    telephone: `+${site.phoneRaw}`,
    priceRange: "$$",
    servesCuisine: ["Salteña", "Argentina", "Empanadas", "Comida casera"],
    address: {
      "@type": "PostalAddress",
      streetAddress: site.address,
      addressLocality: "Córdoba",
      addressRegion: "Córdoba",
      addressCountry: "AR",
      // TODO: agregar postalCode
    },
    // TODO: agregar geo con la latitud/longitud reales del local:
    // geo: { "@type": "GeoCoordinates", latitude: 0, longitude: 0 },
    hasMap: site.maps,
    sameAs: [site.instagram],
    award: `${site.award.place} puesto — ${site.award.title}, ${site.award.contest} (${site.award.edition})`,
    openingHoursSpecification: site.openingHours.map((slot) => ({
      "@type": "OpeningHoursSpecification",
      dayOfWeek: slot.days,
      opens: slot.opens,
      closes: slot.closes,
    })),
    hasMenu: {
      "@type": "Menu",
      name: `Carta de ${site.name}`,
      url: `${site.url}/#menu`,
      inLanguage: "es-AR",
      hasMenuSection: categories.map((category) => ({
        "@type": "MenuSection",
        name: category.name,
        description: category.blurb,
        hasMenuItem: menu
          .filter((item) => item.category === category.id)
          .map((item) => ({
            "@type": "MenuItem",
            name: item.name,
            description: item.description,
            image: `${site.url}${item.image}`,
            offers: {
              "@type": "Offer",
              price: item.price,
              priceCurrency: "ARS",
            },
          })),
      })),
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, "\\u003c"),
      }}
    />
  );
}
