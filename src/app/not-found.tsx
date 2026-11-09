import Link from "next/link";

export default function NotFound() {
  return (
    <main className="shell" style={{ padding: "160px 0", textAlign: "center" }}>
      <p className="eyebrow">Error 404</p>
      <h1 className="display section-title">Esta página no existe.</h1>
      <p className="lead" style={{ margin: "24px auto 32px" }}>
        Pero las empanadas sí. Volvé al inicio y armá tu pedido.
      </p>
      <Link className="btn btn-primary" href="/">
        Volver al inicio
      </Link>
    </main>
  );
}
