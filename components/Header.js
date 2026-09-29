"use client";

import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="header">
      <Link className="logo" href="/">LUMIÈRE</Link>

      <button
        className="menu"
        type="button"
        aria-expanded={open}
        onClick={() => setOpen(!open)}
      >
        {open ? "Cerrar" : "Menú"}
      </button>

      <nav className={open ? "nav navOpen" : "nav"}>
        <Link href="/#tratamientos" onClick={() => setOpen(false)}>Tratamientos</Link>
        <Link href="/estudio" onClick={() => setOpen(false)}>Estudio</Link>
        <Link href="/#criterio" onClick={() => setOpen(false)}>Cómo trabajamos</Link>
        <Link className="reserve" href="/reservar" onClick={() => setOpen(false)}>
          Reservar ↗
        </Link>
      </nav>
    </header>
  );
}
