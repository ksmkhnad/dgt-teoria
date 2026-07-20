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
        optionRationales: [
          "16 años es la edad mínima para el permiso A1 (motos hasta 125 cc), no para el B.",
          "",
          "20 años es la edad para el permiso A (motos sin límite).",
          "21 no corresponde a ningún permiso B; es edad para categorías profesionales (D).",
        ],
      },
      en: {
        text: "What is the minimum age to obtain a category B driving licence?",
        options: ["16", "18", "20", "21"],
        explanation:
          "The B licence is available at 18. Others: AM (moped) 15, A1 16, A2 18, A 20.",
        optionRationales: [
          "16 is the minimum for the A1 licence (motorcycles up to 125 cc), not B.",
          "",
          "20 is the age for the A licence (motorcycles with no power limit).",
          "21 doesn't apply to B; it's the age for professional categories (D).",
        ],
      },
      ru: {
        text: "С какого возраста можно получить водительское удостоверение категории B?",
        options: ["16 лет", "18 лет", "20 лет", "21 год"],
        explanation:
          "Права категории B — с 18 лет. Другие: AM (мопед) с 15, A1 с 16, A2 с 18, A с 20.",
        optionRationales: [
          "16 лет — минимум для A1 (мотоциклы до 125 см³), а не для B.",
          "",
          "20 лет — возраст для категории A (мотоциклы без ограничений).",
          "21 год не относится к B; это возраст для профессиональных категорий (D).",
        ],
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
        optionRationales: [
          "Cada 5 años solo aplica a partir de los 65; antes es cada 10.",
          "",
          "El permiso caduca y hay que renovarlo antes de la fecha; conducir con permiso caducado es infracción.",
          "15 años no es un plazo oficial; los plazos son 10 y 5 según la edad.",
        ],
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
        optionRationales: [
          "Every 5 years only applies from age 65; before that it's every 10.",
          "",
          "The licence expires and must be renewed before that date; driving with an expired licence is an offence.",
          "15 years isn't an official period; the intervals are 10 and 5 by age.",
        ],
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
        optionRationales: [
          "Каждые 5 лет — только с 65 лет; до этого каждые 10.",
          "",
          "Права истекают, и продлить нужно до этой даты; ездить с просроченными — нарушение.",
          "15 лет — не официальный срок; официальные интервалы 10 и 5 по возрасту.",
        ],
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
        optionRationales: [
          "",
          "1 año es demasiado; se pierden avisos, multas y notificaciones importantes.",
          "6 meses tampoco; el plazo oficial es corto (15 días) para que Tráfico tenga siempre datos actuales.",
          "Sí es obligatorio; no hacerlo puede acarrear sanciones y problemas con multas/notificaciones.",
        ],
      },
      en: {
        text: "How soon must you notify Tráfico of a change in your personal details (e.g. address)?",
        options: ["No later than 15 days after the change", "1 year", "6 months", "It's not required"],
        explanation:
          "The vehicle holder must report any change of details to Jefatura de Tráfico no later than 15 days after the change.",
        optionRationales: [
          "",
          "1 year is far too long; notices, fines and official notifications get lost.",
          "6 months is also wrong; the deadline is short (15 days) so Tráfico always has current data.",
          "It IS required; failing to report can lead to sanctions and lost notifications.",
        ],
      },
      ru: {
        text: "В какой срок нужно сообщить в Tráfico о смене персональных данных (например, адреса)?",
        options: ["Не позднее 15 дней после изменения", "1 год", "6 месяцев", "Это не обязательно"],
        explanation:
          "Владелец транспортного средства обязан сообщить об изменении данных в Jefatura de Tráfico не позднее 15 дней с момента изменения.",
        optionRationales: [
          "",
          "1 год — слишком долго; теряются уведомления и штрафы.",
          "6 месяцев тоже не подходит; официальный срок короткий (15 дней), чтобы данные всегда были актуальны.",
          "Сообщать обязательно; иначе — санкции и потерянные уведомления.",
        ],
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
        optionRationales: [
          "30 días es más largo que el plazo oficial; las sanciones o multas del comprador podrían seguir llegando al vendedor.",
          "6 meses es demasiado; se pueden acumular sanciones a nombre del antiguo titular.",
          "",
          "Sí es obligatorio; si no se comunica, sanciones y multas del nuevo dueño llegarán al vendedor.",
        ],
      },
      en: {
        text: "If you sell or transfer your vehicle to another person, how soon must you report it?",
        options: ["30 days", "6 months", "10 days", "It's not required"],
        explanation:
          "When a vehicle is sold or transferred, the seller has 10 days to notify Tráfico. The buyer must re-issue the registration in their own name.",
        optionRationales: [
          "30 days is longer than the official deadline; the buyer's fines could keep arriving at the seller.",
          "6 months is far too long; fines can pile up under the previous owner's name.",
          "",
          "Reporting IS mandatory; otherwise the buyer's fines and sanctions will reach the seller.",
        ],
      },
      ru: {
        text: "Если вы продаёте или передаёте автомобиль другому лицу, в какой срок нужно сообщить об этом?",
        options: ["30 дней", "6 месяцев", "10 дней", "Это не обязательно"],
        explanation:
          "При продаже или передаче автомобиля продавец обязан сообщить в Tráfico в течение 10 дней. Покупатель должен переоформить регистрацию на своё имя.",
        optionRationales: [
          "30 дней — дольше официального срока; штрафы покупателя могут продолжать приходить продавцу.",
          "6 месяцев — слишком долго; штрафы будут накапливаться на прежнего владельца.",
          "",
          "Сообщать обязательно; иначе штрафы нового владельца получит прежний.",
        ],
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
        optionRationales: [
          "Al año pasan la primera ITV los camiones > 3.500 kg, no los turismos.",
          "A los 2 años pasan la primera ITV las furgonetas ≤ 3.500 kg.",
          "5 años no es un plazo oficial de primera ITV en ninguna categoría.",
          "",
        ],
      },
      en: {
        text: "A car (carrying up to 9 passengers) must pass its first ITV inspection at…",
        options: ["1 year", "2 years", "5 years", "4 years"],
        explanation:
          "Motor vehicles carrying up to 9 passengers have the first ITV at 4 years, then every 2 years, then annually after 10 years.",
        optionRationales: [
          "1 year is the first ITV for lorries over 3,500 kg, not cars.",
          "2 years is the first ITV for vans up to 3,500 kg.",
          "5 years isn't an official first-ITV interval for any category.",
          "",
        ],
      },
      ru: {
        text: "Легковой автомобиль (до 9 пассажиров) проходит первый техосмотр (ITV)…",
        options: ["Через 1 год", "Через 2 года", "Через 5 лет", "Через 4 года"],
        explanation:
          "Легковые автомобили до 9 пассажиров проходят первый ITV через 4 года, затем каждые 2 года, а после 10 лет — ежегодно.",
        optionRationales: [
          "Через 1 год первый ITV — у грузовиков > 3500 кг, а не у легковых.",
          "Через 2 года первый ITV — у фургонов до 3500 кг.",
          "5 лет — не официальный срок первого ITV ни для одной категории.",
          "",
        ],
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
        optionRationales: [
          "Seguir conduciendo con fallo grave pone en peligro a todos y puede acarrear sanciones y responsabilidad civil.",
          "",
          "No hay que cambiar de coche; se puede reparar y pasar nueva ITV.",
          "Pagar una multa no soluciona el fallo grave; el vehículo sigue siendo peligroso.",
        ],
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
        optionRationales: [
          "Driving with a serious fault endangers everyone and can lead to sanctions and civil liability.",
          "",
          "You don't have to buy a new car; you can repair it and re-take the ITV.",
          "Paying a fine doesn't fix the serious fault; the vehicle is still dangerous.",
        ],
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
        optionRationales: [
          "Ехать с серьёзной неисправностью — опасно для всех и приведёт к санкциям и гражданской ответственности.",
          "",
          "Не нужно менять машину; можно отремонтировать и пройти повторный ITV.",
          "Штраф не устраняет серьёзную неисправность; авто остаётся опасным.",
        ],
      },
    },
  },
];
