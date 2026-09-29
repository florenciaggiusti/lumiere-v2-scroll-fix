import Link from "next/link";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import PrimaryCTA from "../../components/PrimaryCTA";

export default function Estudio() {
  return (
    <>
      <Header />
      <main>
        <section className="innerHero">
          <p className="micro">EL ESTUDIO</p>
          <h1>Un gabinete.<br />Una persona por vez.</h1>
          <p className="innerLead">
            Lumière nació para trabajar con tiempo. Sin una sala de espera llena y sin
            sumar pasos solamente para hacer más larga una sesión.
          </p>
        </section>

        <section className="story">
          <div className="storyText">
            <span>01</span>
            <h2>La consulta también es parte del tratamiento.</h2>
            <p>
              Antes de empezar hablamos de sensibilidad, hábitos, productos que usás y
              qué esperás de la sesión. A veces la mejor decisión es hacer menos.
            </p>
          </div>
          <div className="storyArt" aria-hidden="true">
            <div className="orbit" />
            <span>calma / criterio / continuidad</span>
          </div>
        </section>

        <div className="facts">
          <p>Turnos espaciados</p>
          <p>Protocolos adaptados</p>
          <p>Seguimiento simple</p>
          <p>Sin venta forzada</p>
        </div>

        <section className="lastCall">
          <span>02</span>
          <h2>Venís con tu piel como está.</h2>
          <PrimaryCTA>Reservar una evaluación</PrimaryCTA>
        </section>
      </main>
      <Footer />
    </>
  );
}
