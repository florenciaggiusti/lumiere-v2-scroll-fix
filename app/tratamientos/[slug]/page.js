import { notFound } from "next/navigation";
import Link from "next/link";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import PrimaryCTA from "../../../components/PrimaryCTA";
import { treatments } from "../../../data/treatments";

export function generateStaticParams() {
  return treatments.map(({ slug }) => ({ slug }));
}

export default async function Treatment({ params }) {
  const { slug } = await params;
  const treatment = treatments.find((item) => item.slug === slug);

  if (!treatment) notFound();

  return (
    <>
      <Header />
      <main>
        <section className="treatmentHero">
          <div>
            <p className="micro">{treatment.category} / {treatment.number}</p>
            <h1>{treatment.name}</h1>
          </div>

          <div className="treatmentSummary">
            <p>{treatment.description}</p>
            <span>{treatment.time}</span>
          </div>
        </section>

        <section className="treatmentDetail">
          <div className="detailArt" aria-hidden="true">{treatment.number}</div>
          <div className="detailText">
            <p className="micro">ANTES DE EMPEZAR</p>
            <h2>No damos por hecho que este tratamiento es para vos.</h2>
            <p>
              Primero revisamos cómo está tu piel y qué querés trabajar. Si hay una opción
              más adecuada, te la vamos a decir.
            </p>
            <PrimaryCTA>Consultar por este tratamiento</PrimaryCTA>
          </div>
        </section>

        <section className="lastCall">
          <span>→</span>
          <h2>¿Querés mirar otra opción?</h2>
          <Link href="/#tratamientos">Volver a tratamientos</Link>
        </section>
      </main>
      <Footer />
    </>
  );
}
