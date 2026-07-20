import type { Question } from "@/lib/types";

// DGT Manual Permiso B (Lectura Fácil, 2024), Tema 2 — Documentación.

const SOURCE = "DGT Manual Permiso B (Lectura Fácil, 2024), Tema 2";

export const QUESTIONS_MANUAL_T2: Question[] = [
  {
    id: "manual-t2-01",
    section: "admin",
    correctIndex: 3,
    source: SOURCE,
    termIds: ["permiso_conducir", "permiso_circulacion", "itv", "seguro_obligatorio"],
    translations: {
      es: {
        text: "¿Cuáles son los cuatro documentos que debes llevar siempre en el vehículo cuando conduces?",
        options: [
          "DNI, permiso de conducir, ITV y libro de reclamaciones",
          "Solo el permiso de conducir y el seguro",
          "Pasaporte, permiso de conducir, ITV y seguro",
          "Permiso de conducir, permiso de circulación, tarjeta ITV y seguro obligatorio",
        ],
        explanation:
          "Los cuatro documentos son: permiso de conducir, permiso de circulación, tarjeta de inspección técnica (ITV) y seguro obligatorio de responsabilidad civil. Deben ser originales o copia compulsada.",
      },
      en: {
        text: "Which four documents must you always carry in the vehicle while driving?",
        options: [
          "ID card, driving licence, ITV and complaints book",
          "Only the licence and insurance",
          "Passport, driving licence, ITV and insurance",
          "Driving licence, vehicle registration (permiso de circulación), ITV card and mandatory insurance",
        ],
        explanation:
          "The four documents are: driving licence, vehicle registration, technical inspection (ITV) card and mandatory civil liability insurance. Originals or notarised copies.",
      },
      ru: {
        text: "Какие четыре документа всегда должны быть в автомобиле при вождении?",
        options: [
          "Удостоверение личности, права, ITV и книга жалоб",
          "Только права и страховка",
          "Паспорт, права, ITV и страховка",
          "Права, свидетельство о регистрации ТС, карта техосмотра (ITV) и обязательная страховка",
        ],
        explanation:
          "Четыре документа: водительские права, свидетельство о регистрации ТС, карта техосмотра (ITV) и обязательная страховка гражданской ответственности. Оригиналы или заверенные копии.",
      },
    },
  },
  {
    id: "manual-t2-02",
    section: "admin",
    correctIndex: 1,
    source: SOURCE,
    translations: {
      es: {
        text: "¿A qué edad mínima se puede obtener el permiso de conducir tipo B?",
        options: ["16 años", "18 años", "20 años", "21 años"],
        explanation:
          "El permiso B se obtiene a los 18 años. Otros: AM (ciclomotor) 15, A1 16, A2 18, A 20.",
      },
      en: {
        text: "What is the minimum age to obtain a category B driving licence?",
        options: ["16", "18", "20", "21"],
        explanation:
          "The B licence is available at 18. Others: AM (moped) 15, A1 16, A2 18, A 20.",
      },
      ru: {
        text: "С какого возраста можно получить водительское удостоверение категории B?",
        options: ["16 лет", "18 лет", "20 лет", "21 год"],
        explanation:
          "Права категории B — с 18 лет. Другие: AM (мопед) с 15, A1 с 16, A2 с 18, A с 20.",
      },
    },
  },
  {
    id: "manual-t2-03",
    section: "admin",
    correctIndex: 2,
    source: SOURCE,
    termIds: ["conductor_novel"],
    translations: {
      es: {
        text: "Un conductor novel debe llevar en el vehículo…",
        options: [
          "Una placa amarilla con la letra N",
          "Una pegatina roja en el parabrisas",
          "Una placa verde rectangular con una letra L blanca en el cristal trasero",
          "No debe llevar nada especial",
        ],
        explanation:
          "El conductor novel debe llevar una placa verde rectangular con una L blanca colocada en el cristal trasero, bien visible.",
      },
      en: {
        text: "A novice (novel) driver must display in the vehicle…",
        options: [
          "A yellow plate with the letter N",
          "A red sticker on the windscreen",
          "A green rectangular plate with a white L on the rear window",
          "Nothing special",
        ],
        explanation:
          "A novice driver must display a green rectangular plate with a white L on the rear window, clearly visible.",
      },
      ru: {
        text: "Начинающий водитель обязан иметь в автомобиле…",
        options: [
          "Жёлтую табличку с буквой N",
          "Красную наклейку на лобовом стекле",
          "Зелёную прямоугольную табличку с белой буквой L на заднем стекле",
          "Ничего особенного",
        ],
        explanation:
          "Начинающий водитель обязан размещать зелёную прямоугольную табличку с белой L на заднем стекле, чтобы было хорошо видно.",
      },
    },
  },
  {
    id: "manual-t2-04",
    section: "admin",
    correctIndex: 1,
    source: SOURCE,
    translations: {
      es: {
        text: "El permiso de conducir tipo B debe renovarse…",
        options: [
          "Cada 5 años siempre",
          "Cada 10 años si tienes menos de 65; cada 5 años si tienes más de 65",
          "No se renueva, solo se saca una vez",
          "Cada 15 años sin límite de edad",
        ],
        explanation:
          "El permiso B se renueva cada 10 años hasta los 65 años; a partir de los 65, cada 5 años. Hay que renovarlo antes de que caduque.",
      },
      en: {
        text: "The B driving licence must be renewed…",
        options: [
          "Every 5 years, always",
          "Every 10 years under 65; every 5 years over 65",
          "Never — issued only once",
          "Every 15 years, no age limit",
        ],
        explanation:
          "The B licence renews every 10 years up to age 65; from 65 onwards, every 5 years. Renew before it expires.",
      },
      ru: {
        text: "Права категории B продлеваются…",
        options: [
          "Каждые 5 лет всегда",
          "Каждые 10 лет до 65 лет; после 65 — каждые 5 лет",
          "Не продлеваются, выдаются один раз",
          "Каждые 15 лет, без учёта возраста",
        ],
        explanation:
          "Права категории B продлеваются каждые 10 лет до 65 лет; после 65 — каждые 5 лет. Продлить нужно до истечения срока.",
      },
    },
  },
  {
    id: "manual-t2-05",
    section: "admin",
    correctIndex: 0,
    source: SOURCE,
    translations: {
      es: {
        text: "¿En cuánto tiempo debes comunicar a Tráfico un cambio de tus datos personales (por ejemplo, domicilio)?",
        options: ["Como muy tarde, 15 días después del cambio", "1 año", "6 meses", "No es obligatorio comunicarlo"],
        explanation:
          "El titular del vehículo debe comunicar cualquier cambio en sus datos a la Jefatura de Tráfico como muy tarde 15 días después del cambio.",
      },
      en: {
        text: "How soon must you notify Tráfico of a change in your personal details (e.g. address)?",
        options: ["No later than 15 days after the change", "1 year", "6 months", "It's not required"],
        explanation:
          "The vehicle holder must report any change of details to Jefatura de Tráfico no later than 15 days after the change.",
      },
      ru: {
        text: "В какой срок нужно сообщить в Tráfico о смене персональных данных (например, адреса)?",
        options: ["Не позднее 15 дней после изменения", "1 год", "6 месяцев", "Это не обязательно"],
        explanation:
          "Владелец транспортного средства обязан сообщить об изменении данных в Jefatura de Tráfico не позднее 15 дней с момента изменения.",
      },
    },
  },
  {
    id: "manual-t2-06",
    section: "admin",
    correctIndex: 2,
    source: SOURCE,
    translations: {
      es: {
        text: "Si vendes o entregas tu vehículo a otra persona, ¿en cuánto tiempo debes comunicarlo?",
        options: ["30 días", "6 meses", "10 días", "No es obligatorio comunicarlo"],
        explanation:
          "Cuando se vende o entrega un vehículo, el vendedor tiene 10 días para comunicarlo a Tráfico. El comprador debe renovar el permiso de circulación a su nombre.",
      },
      en: {
        text: "If you sell or transfer your vehicle to another person, how soon must you report it?",
        options: ["30 days", "6 months", "10 days", "It's not required"],
        explanation:
          "When a vehicle is sold or transferred, the seller has 10 days to notify Tráfico. The buyer must re-issue the registration in their own name.",
      },
      ru: {
        text: "Если вы продаёте или передаёте автомобиль другому лицу, в какой срок нужно сообщить об этом?",
        options: ["30 дней", "6 месяцев", "10 дней", "Это не обязательно"],
        explanation:
          "При продаже или передаче автомобиля продавец обязан сообщить в Tráfico в течение 10 дней. Покупатель должен переоформить регистрацию на своё имя.",
      },
    },
  },
  {
    id: "manual-t2-07",
    section: "admin",
    correctIndex: 3,
    source: SOURCE,
    translations: {
      es: {
        text: "Un turismo (para transportar hasta 9 pasajeros) debe pasar su primera ITV…",
        options: [
          "Al año",
          "A los 2 años",
          "A los 5 años",
          "A los 4 años",
        ],
        explanation:
          "Los vehículos de motor que pueden transportar hasta 9 pasajeros pasan la primera ITV a los 4 años; después cada 2 años, y anualmente a partir de los 10 años.",
      },
      en: {
        text: "A car (carrying up to 9 passengers) must pass its first ITV inspection at…",
        options: ["1 year", "2 years", "5 years", "4 years"],
        explanation:
          "Motor vehicles carrying up to 9 passengers have the first ITV at 4 years, then every 2 years, then annually after 10 years.",
      },
      ru: {
        text: "Легковой автомобиль (до 9 пассажиров) проходит первый техосмотр (ITV)…",
        options: ["Через 1 год", "Через 2 года", "Через 5 лет", "Через 4 года"],
        explanation:
          "Легковые автомобили до 9 пассажиров проходят первый ITV через 4 года, затем каждые 2 года, а после 10 лет — ежегодно.",
      },
    },
  },
  {
    id: "manual-t2-08",
    section: "admin",
    correctIndex: 1,
    source: SOURCE,
    translations: {
      es: {
        text: "Si la ITV detecta un fallo grave en el vehículo…",
        options: [
          "Puedes seguir conduciendo hasta la próxima revisión",
          "No puedes seguir circulando; hay que llevarlo al taller y pasar una nueva ITV cuando esté arreglado",
          "Debes cambiar de coche inmediatamente",
          "Pagar una multa y continuar circulando",
        ],
        explanation:
          "Con un fallo grave detectado en la ITV no se puede seguir circulando. Hay que llevar el vehículo al taller y, tras la reparación, hacer una nueva inspección.",
      },
      en: {
        text: "If the ITV detects a serious fault in the vehicle…",
        options: [
          "You may keep driving until the next inspection",
          "You may not continue driving; take it to a garage and re-pass the ITV once fixed",
          "You must change the car immediately",
          "Pay a fine and keep driving",
        ],
        explanation:
          "With a serious ITV fault you may not continue driving. Take the vehicle to a garage and, once repaired, pass a new inspection.",
      },
      ru: {
        text: "Если техосмотр (ITV) выявил серьёзную неисправность…",
        options: [
          "Можно продолжать ездить до следующего осмотра",
          "Дальше ездить нельзя; отвезти в мастерскую и пройти новый ITV после ремонта",
          "Немедленно менять автомобиль",
          "Заплатить штраф и продолжать ездить",
        ],
        explanation:
          "При серьёзной неисправности по ITV дальнейшая эксплуатация запрещена. Нужно отремонтировать автомобиль и пройти повторный осмотр.",
      },
    },
  },
];
