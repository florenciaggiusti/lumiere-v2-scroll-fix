"use client";

import { useState } from "react";

const initial = {
  name: "",
  contact: "",
  goal: "",
  time: "",
  firstVisit: "si"
};

export default function BookingForm() {
  const [values, setValues] = useState(initial);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle");

  function update(event) {
    const { name, value } = event.target;
    setValues((current) => ({ ...current, [name]: value }));
    if (errors[name]) {
      setErrors((current) => ({ ...current, [name]: "" }));
    }
  }

  function validate() {
    const next = {};
    if (values.name.trim().length < 2) next.name = "Decinos cómo te llamás.";

    const contact = values.contact.trim();
    const looksLikeEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(contact);
    const digits = contact.replace(/\D/g, "");
    if (!contact) next.contact = "Necesitamos un medio para contactarte.";
    else if (!looksLikeEmail && digits.length < 8) next.contact = "Ingresá un email o teléfono válido.";

    if (values.goal.trim().length < 10) next.goal = "Contanos un poquito más para poder orientarte.";
    if (!values.time) next.time = "Elegí una preferencia horaria.";
    return next;
  }

  function submit(event) {
    event.preventDefault();
    const nextErrors = validate();
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length) return;

    setStatus("sending");
    window.setTimeout(() => setStatus("sent"), 850);
  }

  if (status === "sent") {
    return (
      <div className="bookingSuccess" role="status">
        <span className="successMark">✓</span>
        <p className="micro">CONSULTA COMPLETADA</p>
        <h2>Listo, {values.name.split(" ")[0]}.</h2>
        <p>
          En un sitio real, Lumière recibiría estos datos para contactarte y coordinar el turno.
        </p>
        <div className="demoNotice">
          Esta es una demostración conceptual. No se envió información ni se generó una reserva real.
        </div>
        <button type="button" onClick={() => { setValues(initial); setStatus("idle"); }}>
          Probar de nuevo
        </button>
      </div>
    );
  }

  return (
    <form className="bookingForm" onSubmit={submit} noValidate>
      <label className={errors.name ? "hasError" : ""}>
        <span>Nombre</span>
        <input name="name" value={values.name} onChange={update} placeholder="Tu nombre" />
        {errors.name && <small className="fieldError">{errors.name}</small>}
      </label>

      <label className={errors.contact ? "hasError" : ""}>
        <span>Contacto</span>
        <input name="contact" value={values.contact} onChange={update} placeholder="WhatsApp o email" />
        {errors.contact && <small className="fieldError">{errors.contact}</small>}
      </label>

      <label className={`wide ${errors.goal ? "hasError" : ""}`}>
        <span>¿Qué te gustaría mejorar o consultar?</span>
        <textarea name="goal" value={values.goal} onChange={update} rows="4" placeholder="Contanos con tus palabras" />
        {errors.goal && <small className="fieldError">{errors.goal}</small>}
      </label>

      <label className={errors.time ? "hasError" : ""}>
        <span>Preferencia horaria</span>
        <select name="time" value={values.time} onChange={update}>
          <option value="" disabled>Elegí una opción</option>
          <option value="manana">Mañana</option>
          <option value="tarde">Tarde</option>
          <option value="indistinto">Me da igual</option>
        </select>
        {errors.time && <small className="fieldError">{errors.time}</small>}
      </label>

      <label>
        <span>¿Primera visita?</span>
        <select name="firstVisit" value={values.firstVisit} onChange={update}>
          <option value="si">Sí</option>
          <option value="no">No</option>
        </select>
      </label>

      <button className="formSubmit" disabled={status === "sending"}>
        <span>{status === "sending" ? "Enviando…" : "Enviar consulta"}</span>
        <span>↗</span>
      </button>
      <small className="formDemo">Demo conceptual · no se enviarán datos reales.</small>
    </form>
  );
}
