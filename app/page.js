import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ConcernFinder from "../components/ConcernFinder";
import TreatmentList from "../components/TreatmentList";
import PrimaryCTA from "../components/PrimaryCTA";
import Reveal from "../components/Reveal";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <section className="hero">
          <div className="heroText">
            <p className="micro heroKicker">ESTUDIO DE PIEL · BUENOS AIRES</p>
            <div className="heroTitleMask"><h1>Tu piel no necesita doce pasos.</h1></div>
            <div className="heroFoot">
              <p>Primero necesitamos verla.</p>
              <PrimaryCTA>Reservar una evaluación</PrimaryCTA>
            </div>
          </div>
          <div className="heroArt" aria-hidden="true">
            <div className="shape shapeA" />
            <div className="shape shapeB" />
            <span className="verticalWord">LUMIÈRE</span>
            <span className="artNote">piel / luz / textura</span>
          </div>
        </section>

        <Reveal>
          <section className="statement" id="criterio">
            <p className="micro">CÓMO TRABAJAMOS</p>
            <p className="statementMain">
              No elegimos un protocolo antes de conocerte. Miramos cómo está tu piel hoy,
              escuchamos qué te preocupa y empezamos desde ahí.
            </p>
            <p className="statementSide">Menos promesas.<br />Más criterio.</p>
          </section>
        </Reveal>

        <ConcernFinder />

        <Reveal><TreatmentList /></Reveal>

        <Reveal>
          <section className="studioPreview">
            <div className="studioArt" aria-hidden="true">
              <span>LUZ NATURAL</span>
              <div className="disc" />
            </div>
            <div className="studioText">
              <p className="micro">EL ESTUDIO</p>
              <h2>Un lugar para bajar un cambio.</h2>
              <p>
                Turnos espaciados, luz suave y una persona por vez. El espacio no intenta
                distraerte del tratamiento.
              </p>
              <Link className="secondaryLink" href="/estudio">Conocer el estudio <span>↗</span></Link>
            </div>
          </section>
        </Reveal>

        <section className="lastCall">
          <span>05</span>
          <h2>Si no sabés qué reservar, está bien.</h2>
          <PrimaryCTA>Empezar por una evaluación</PrimaryCTA>
        </section>
      </main>

      <div className="mobileBooking"><PrimaryCTA>Reservar</PrimaryCTA></div>
      <Footer />
    </>
  );
}
