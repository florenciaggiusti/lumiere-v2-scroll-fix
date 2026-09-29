import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer">
      <p className="micro">LUMIÈRE / ESTUDIO DE PIEL</p>
      <h2>La piel cambia.<br />La forma de mirarla también.</h2>

      <div className="footerGrid">
        <div>
          <span>Estudio</span>
          <p>Buenos Aires<br />Atención con turno</p>
        </div>
        <div>
          <span>Contacto</span>
          <p>hola@lumiere-estudio.com<br />@lumiere.estudio</p>
        </div>
        <Link href="/reservar">Reservar una sesión ↗</Link>
      </div>

      <div className="footerBottom">
        <span>© 2026 Lumière</span>
        <span>Proyecto conceptual</span>
      </div>
    </footer>
  );
}
