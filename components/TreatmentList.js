import Link from "next/link";
import { treatments } from "../data/treatments";

export default function TreatmentList() {
  return (
    <section className="treatments" id="tratamientos">
      <div className="treatmentsIntro">
        <p className="micro">TRATAMIENTOS / 01—04</p>
        <p>
          La lista orienta. No hace falta que llegues sabiendo qué pedir.
        </p>
      </div>

      <div className="treatmentRows">
        {treatments.map((treatment) => (
          <Link
            className="treatmentRow"
            href={`/tratamientos/${treatment.slug}`}
            key={treatment.slug}
          >
            <span>{treatment.number}</span>
            <strong>{treatment.name}</strong>
            <span className="category">{treatment.category}</span>
            <span>↗</span>
          </Link>
        ))}
      </div>
    </section>
  );
}
