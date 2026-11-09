import { Repulgue } from "./Icons";

const items = [
  "Carne cortada a cuchillo",
  "Masa finita",
  "Horneadas en el momento",
  "Repulgue a mano",
  "De Salta a Córdoba",
  "Comida como en casa",
];

export function Ticker() {
  const sequence = [...items, ...items];

  return (
    <div className="ticker" aria-hidden="true">
      <div className="ticker-track">
        {sequence.map((item, index) => (
          <span className="ticker-item" key={`${item}-${index}`}>
            {item}
            <Repulgue />
          </span>
        ))}
      </div>
    </div>
  );
}
