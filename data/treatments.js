export const treatments = [
  {
    slug: "limpieza-profunda",
    number: "01",
    name: "Limpieza profunda",
    category: "Facial",
    time: "75 min",
    description:
      "Limpieza, extracción e hidratación adaptadas a cómo llega tu piel ese día."
  },
  {
    slug: "dermaplaning",
    number: "02",
    name: "Dermaplaning",
    category: "Facial",
    time: "60 min",
    description:
      "Renovación superficial para trabajar textura y luminosidad sin sumar pasos porque sí."
  },
  {
    slug: "radiofrecuencia",
    number: "03",
    name: "Radiofrecuencia",
    category: "Facial + corporal",
    time: "50 min",
    description:
      "Una opción no invasiva para acompañar firmeza y calidad de la piel."
  },
  {
    slug: "drenaje",
    number: "04",
    name: "Drenaje linfático",
    category: "Corporal",
    time: "60 min",
    description:
      "Una sesión de maniobras suaves, pensada según la zona y lo que necesites trabajar."
  }
];

export const concerns = [
  {
    id: "textura",
    label: "Textura",
    text: "Si sentís la piel irregular, opaca o congestionada, empezamos por observar qué la está alterando.",
    options: ["Limpieza profunda", "Dermaplaning", "Peeling suave"]
  },
  {
    id: "manchas",
    label: "Manchas",
    text: "No todas las manchas se trabajan igual. Primero vemos origen, sensibilidad y rutina actual.",
    options: ["Evaluación", "Peeling suave", "Protocolo iluminador"]
  },
  {
    id: "hidratacion",
    label: "Hidratación",
    text: "Para piel tirante, apagada o incómoda, priorizamos recuperar confort antes de exigirle más.",
    options: ["Hidratación intensiva", "Máscara calmante", "Masaje facial"]
  },
  {
    id: "firmeza",
    label: "Firmeza",
    text: "Armamos una frecuencia posible y un tratamiento acorde a la zona, sin prometer resultados instantáneos.",
    options: ["Radiofrecuencia", "Masaje facial", "Plan de sesiones"]
  },
  {
    id: "corporal",
    label: "Corporal",
    text: "Elegimos la técnica después de hablar de tu objetivo y evaluar la zona.",
    options: ["Drenaje", "Radiofrecuencia", "Masaje modelador"]
  }
];
