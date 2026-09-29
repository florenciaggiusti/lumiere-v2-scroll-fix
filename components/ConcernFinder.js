"use client";

import { useState } from "react";
import { concerns } from "../data/treatments";

export default function ConcernFinder() {
  const [selected, setSelected] = useState(concerns[0]);
  const [transitioning, setTransitioning] = useState(false);

  function choose(concern) {
    if (concern.id === selected.id) return;
    setTransitioning(true);
    window.setTimeout(() => {
      setSelected(concern);
      setTransitioning(false);
    }, 170);
  }

  return (
    <section className="finder">
      <div className="finderTitle">
        <p className="micro">ANTES DEL TRATAMIENTO</p>
        <h2>¿Qué querés trabajar?</h2>
      </div>

      <div className="finderBody">
        <div className="concerns">
          {concerns.map((concern) => (
            <button
              type="button"
              key={concern.id}
              className={selected.id === concern.id ? "concern active" : "concern"}
              onClick={() => choose(concern)}
            >
              <span>{concern.label}</span><span>↗</span>
            </button>
          ))}
        </div>

        <div className={`answer ${transitioning ? "answerChanging" : ""}`} aria-live="polite">
          <span className="answerNumber">{String(concerns.indexOf(selected) + 1).padStart(2, "0")}</span>
          <p>{selected.text}</p>
          <div className="pills">{selected.options.map((option) => <span key={option}>{option}</span>)}</div>
          <small>La indicación final se define después de una evaluación.</small>
        </div>
      </div>
    </section>
  );
}
