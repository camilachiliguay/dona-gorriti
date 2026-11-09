"use client";

export default function Error({ reset }: { error: Error; reset: () => void }) {
  return (
    <main className="shell" style={{ padding: "160px 0", textAlign: "center" }}>
      <p className="eyebrow">Algo salió mal</p>
      <h1 className="display section-title">Se nos quemó una tanda.</h1>
      <p className="lead" style={{ margin: "24px auto 32px" }}>
        Probá de nuevo. Si sigue fallando, pedinos por WhatsApp.
      </p>
      <button type="button" className="btn btn-primary" onClick={reset}>
        Reintentar
      </button>
    </main>
  );
}
