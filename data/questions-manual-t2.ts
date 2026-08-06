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
  {
    id: "manual-t2-09",
    section: "admin",
    correctIndex: 1,
    source: SOURCE,
    translations: {
      es: {
        text: "¿Con cuántos puntos empieza un conductor con más de 3 años de permiso?",
        options: ["8 puntos", "12 puntos", "14 puntos", "15 puntos"],
        explanation:
          "El saldo inicial es de 12 puntos para conductores con más de 3 años de permiso. Un conductor novel empieza con 8 puntos y llega a 12 tras 3 años sin perder ninguno.",
        optionRationales: [
          "8 puntos es el saldo inicial del conductor novel, no del veterano.",
          "",
          "14 puntos es el máximo al que se puede llegar si no se pierden puntos durante 3 años (bonus).",
          "15 puntos es el máximo posible tras 6 años sin infracciones (bonus adicional).",
        ],
      },
      en: {
        text: "How many points does a driver with more than 3 years of licence start with?",
        options: ["8 points", "12 points", "14 points", "15 points"],
        explanation:
          "The starting balance is 12 points for drivers with more than 3 years of licence. Novice drivers start with 8 and reach 12 after 3 years without losing any.",
        optionRationales: [
          "8 points is the novice starting balance, not the experienced one.",
          "",
          "14 points is the maximum after 3 years without losing points (bonus).",
          "15 points is the absolute maximum after 6 years without offences (extra bonus).",
        ],
      },
      ru: {
        text: "Со сколькими баллами начинает водитель со стажем более 3 лет?",
        options: ["8 баллов", "12 баллов", "14 баллов", "15 баллов"],
        explanation:
          "Начальный баланс — 12 баллов для водителей со стажем более 3 лет. Начинающий стартует с 8 и доходит до 12 за 3 года без нарушений.",
        optionRationales: [
          "8 баллов — стартовый баланс новичка, а не опытного водителя.",
          "",
          "14 баллов — максимум после 3 лет без потерь (бонус).",
          "15 баллов — абсолютный максимум после 6 лет без нарушений (дополнительный бонус).",
        ],
      },
    },
  },
  {
    id: "manual-t2-10",
    section: "admin",
    correctIndex: 2,
    source: SOURCE,
    translations: {
      es: {
        text: "¿Cómo puedes recuperar parte de los puntos perdidos sin haber agotado el saldo?",
        options: [
          "Solicitándolo por internet",
          "Pagando una tasa a la DGT",
          "Realizando un curso de sensibilización y reeducación vial (recuperación parcial)",
          "Los puntos perdidos no se recuperan nunca",
        ],
        explanation:
          "Se pueden recuperar hasta 6 puntos haciendo un curso de sensibilización y reeducación vial. Solo puede hacerse una vez cada 2 años (o una vez al año si es conductor profesional).",
        optionRationales: [
          "No basta con una solicitud online; hay que hacer un curso presencial acreditado.",
          "Los puntos no se compran; pagar solo una tasa no los devuelve.",
          "",
          "Sí se recuperan: parcialmente por curso, o totalmente tras 2 años sin infracciones graves.",
        ],
      },
      en: {
        text: "How can you recover some lost points before running out?",
        options: [
          "By requesting it online",
          "By paying a fee to the DGT",
          "By taking an awareness and re-education course (partial recovery)",
          "Lost points can never be recovered",
        ],
        explanation:
          "You can recover up to 6 points by taking an awareness and re-education course. Only once every 2 years (or yearly for professional drivers).",
        optionRationales: [
          "An online request isn't enough; the course is in-person and accredited.",
          "Points can't be bought; paying a fee alone doesn't restore them.",
          "",
          "They can be recovered — partially by course, or fully after 2 years without serious offences.",
        ],
      },
      ru: {
        text: "Как можно вернуть часть потерянных баллов, не исчерпав их?",
        options: [
          "Онлайн-заявкой",
          "Оплатив сбор в DGT",
          "Пройдя курс безопасности и переобучения (частичное восстановление)",
          "Потерянные баллы не возвращаются никогда",
        ],
        explanation:
          "Можно вернуть до 6 баллов, пройдя курс безопасности и переобучения. Только раз в 2 года (или раз в год для профессиональных водителей).",
        optionRationales: [
          "Онлайн-заявки недостаточно; нужен очный аккредитованный курс.",
          "Баллы не покупаются; уплата сбора одна не возвращает их.",
          "",
          "Возвращаются — частично курсом или полностью через 2 года без грубых нарушений.",
        ],
      },
    },
  },
  {
    id: "manual-t2-11",
    section: "admin",
    correctIndex: 3,
    source: SOURCE,
    translations: {
      es: {
        text: "Si pierdes todos los puntos, ¿qué ocurre?",
        options: [
          "Solo te ponen una multa económica",
          "Tienes 6 meses para no cometer más infracciones y ya",
          "Te suspenden el permiso 15 días",
          "Pierdes la vigencia del permiso; para recuperarlo debes hacer un curso de recuperación y superar una prueba teórica",
        ],
        explanation:
          "Al llegar a 0 puntos se declara la pérdida de vigencia del permiso. Para recuperarlo hay que hacer un curso de recuperación (unas 24 horas) y superar una prueba de control de conocimientos.",
        optionRationales: [
          "La multa económica ya se ha aplicado con cada infracción anterior; no basta con ella.",
          "El paso del tiempo sin más infracciones no restablece un permiso agotado.",
          "15 días es una sanción concreta por otras causas, no por saldo cero.",
          "",
        ],
      },
      en: {
        text: "If you lose all your points, what happens?",
        options: [
          "You just get a financial fine",
          "You have 6 months without further offences and that's it",
          "Your licence is suspended for 15 days",
          "You lose the validity of your licence; to get it back you must take a recovery course and pass a theory test",
        ],
        explanation:
          "At 0 points, the licence loses validity. To recover it you must take a recovery course (~24 hours) and pass a knowledge test.",
        optionRationales: [
          "The fine has already been applied at each previous offence; that alone isn't enough.",
          "Simply not offending doesn't restore an exhausted licence.",
          "15 days is a specific sanction for other reasons, not for reaching zero.",
          "",
        ],
      },
      ru: {
        text: "Если вы потеряли все баллы, что происходит?",
        options: [
          "Только денежный штраф",
          "6 месяцев без новых нарушений — и всё",
          "Права приостановлены на 15 дней",
          "Права теряют силу; чтобы вернуть, нужно пройти курс восстановления и сдать теорию",
        ],
        explanation:
          "При 0 баллов права утрачивают силу. Для восстановления — курс (около 24 часов) и сдача теоретического экзамена.",
        optionRationales: [
          "Штраф уже был наложен по каждому нарушению; одного его недостаточно.",
          "Просто отсутствие нарушений не восстанавливает исчерпанный баланс.",
          "15 дней — санкция за другие поводы, а не за нулевой баланс.",
          "",
        ],
      },
    },
  },
  {
    id: "manual-t2-12",
    section: "admin",
    correctIndex: 0,
    source: SOURCE,
    termIds: ["seguro_obligatorio"],
    translations: {
      es: {
        text: "El seguro obligatorio de un vehículo cubre…",
        options: [
          "Los daños a terceros (responsabilidad civil) causados por el vehículo",
          "Todos los daños del vehículo asegurado en cualquier accidente",
          "Solo los daños del conductor",
          "Únicamente robos e incendios",
        ],
        explanation:
          "El seguro obligatorio (SOA) cubre los daños causados a terceros (personas y cosas). Para cubrir los daños del propio vehículo es necesario contratar un seguro voluntario (a terceros ampliado o a todo riesgo).",
        optionRationales: [
          "",
          "Los daños del propio vehículo NO están cubiertos por el obligatorio; requieren pólizas voluntarias.",
          "Los daños del conductor tampoco están garantizados por el obligatorio; se cubren con pólizas voluntarias u ocupantes.",
          "Robos e incendios son coberturas voluntarias, no forman parte del seguro obligatorio.",
        ],
      },
      en: {
        text: "The mandatory vehicle insurance covers…",
        options: [
          "Damage to third parties (civil liability) caused by the vehicle",
          "All damage to the insured vehicle in any accident",
          "Only the driver's injuries",
          "Only theft and fire",
        ],
        explanation:
          "Mandatory insurance (SOA) covers damage caused to third parties (people and property). To cover damage to your own vehicle you need voluntary cover (extended third-party or fully comp).",
        optionRationales: [
          "",
          "Damage to your own vehicle is NOT covered by mandatory insurance; you need voluntary policies.",
          "The driver's injuries aren't guaranteed by the mandatory policy either; they need voluntary or occupant cover.",
          "Theft and fire are voluntary covers, not part of the mandatory insurance.",
        ],
      },
      ru: {
        text: "Обязательная страховка ТС покрывает…",
        options: [
          "Ущерб третьим лицам (гражданская ответственность), причинённый ТС",
          "Любой ущерб застрахованному ТС в любой аварии",
          "Только вред водителю",
          "Только угон и пожар",
        ],
        explanation:
          "Обязательная страховка (SOA) покрывает ущерб третьим лицам (людям и имуществу). Чтобы покрыть ущерб собственному авто, нужна добровольная страховка (расширенная или каско).",
        optionRationales: [
          "",
          "Ущерб собственному ТС НЕ покрывается обязательной страховкой; нужны добровольные полисы.",
          "Вред водителю обязательная тоже не гарантирует; нужна добровольная или страховка водителя/пассажиров.",
          "Угон и пожар — это добровольные покрытия, не часть обязательной страховки.",
        ],
      },
    },
  },
  {
    id: "manual-t2-13",
    section: "admin",
    correctIndex: 2,
    source: SOURCE,
    translations: {
      es: {
        text: "Para dar de baja definitivamente un vehículo (achatarrarlo), debes llevarlo a…",
        options: [
          "Cualquier taller mecánico",
          "Una gasolinera autorizada",
          "Un Centro Autorizado de Tratamiento de Vehículos (CATV, «desguace»)",
          "La Jefatura de Tráfico directamente",
        ],
        explanation:
          "La baja definitiva de un vehículo se tramita a través de un Centro Autorizado de Tratamiento de Vehículos (CATV). Ellos gestionan el desguace y comunican la baja a la DGT.",
        optionRationales: [
          "Un taller no puede tramitar la baja definitiva; solo hace reparaciones.",
          "Las gasolineras no tienen competencia para dar de baja vehículos.",
          "",
          "Tráfico registra la baja, pero el trámite físico se hace en el CATV, no en la Jefatura.",
        ],
      },
      en: {
        text: "To permanently deregister a vehicle (scrap it), you must take it to…",
        options: [
          "Any mechanic's workshop",
          "An authorised petrol station",
          "An authorised vehicle treatment centre (CATV, 'desguace')",
          "The Jefatura de Tráfico directly",
        ],
        explanation:
          "Permanent deregistration is handled through an authorised vehicle treatment centre (CATV). They scrap the vehicle and notify the DGT.",
        optionRationales: [
          "A workshop can't process a permanent deregistration; it only repairs.",
          "Petrol stations have no authority to deregister vehicles.",
          "",
          "Tráfico records the deregistration, but the physical process happens at the CATV, not the Jefatura.",
        ],
      },
      ru: {
        text: "Чтобы окончательно снять авто с учёта (утилизация), его надо отвезти в…",
        options: [
          "Любую автомастерскую",
          "Уполномоченную заправку",
          "Уполномоченный центр обработки ТС (CATV, «desguace»)",
          "Прямо в Jefatura de Tráfico",
        ],
        explanation:
          "Окончательное снятие с учёта оформляется через уполномоченный центр обработки ТС (CATV). Он утилизирует авто и сообщает в DGT.",
        optionRationales: [
          "Мастерская не оформляет окончательное снятие; она только ремонтирует.",
          "У заправок нет полномочий на снятие с учёта.",
          "",
          "Tráfico фиксирует снятие, но физически процесс проходит в CATV, а не в Jefatura.",
        ],
      },
    },
  },
  {
    id: "manual-t2-14",
    section: "admin",
    correctIndex: 1,
    source: SOURCE,
    translations: {
      es: {
        text: "Has perdido tu permiso de conducir. ¿Qué debes hacer?",
        options: [
          "Nada; con una denuncia en comisaría es suficiente para conducir",
          "Solicitar un duplicado en la Jefatura de Tráfico presentando DNI y foto",
          "Renovar el permiso desde cero, incluyendo examen",
          "Esperar 6 meses y solicitar uno nuevo",
        ],
        explanation:
          "En caso de pérdida, robo o deterioro se solicita un duplicado del permiso en la Jefatura de Tráfico presentando DNI y foto reciente. Sin el permiso físico o el duplicado, conducir es infracción.",
        optionRationales: [
          "La denuncia acredita la pérdida, pero no sustituye al permiso para poder conducir.",
          "",
          "No hay que examinarse de nuevo; el permiso sigue vigente, solo se sustituye el documento.",
          "No hay que esperar; el duplicado se puede solicitar de inmediato.",
        ],
      },
      en: {
        text: "You've lost your driving licence. What must you do?",
        options: [
          "Nothing — a police report is enough to keep driving",
          "Request a duplicate at the Jefatura de Tráfico with ID and a photo",
          "Renew the licence from scratch, including the exam",
          "Wait 6 months and apply for a new one",
        ],
        explanation:
          "For loss, theft or damage, request a duplicate at the Jefatura de Tráfico with ID and a recent photo. Without the physical licence or duplicate, driving is an offence.",
        optionRationales: [
          "A police report proves the loss but doesn't replace the licence for driving.",
          "",
          "No re-exam is needed; the licence is still valid — only the document is replaced.",
          "No wait — you can request the duplicate immediately.",
        ],
      },
      ru: {
        text: "Вы потеряли водительское удостоверение. Что делать?",
        options: [
          "Ничего — заявления в полицию достаточно, чтобы ездить",
          "Заказать дубликат в Jefatura de Tráfico с паспортом и фото",
          "Заново получать права, включая экзамен",
          "Подождать 6 месяцев и оформить новые",
        ],
        explanation:
          "При потере, краже или порче нужно оформить дубликат в Jefatura de Tráfico с удостоверением личности и свежим фото. Без документа/дубликата вождение — нарушение.",
        optionRationales: [
          "Заявление в полицию подтверждает потерю, но не заменяет права для вождения.",
          "",
          "Пересдавать не нужно — права действительны, меняется только документ.",
          "Ждать не нужно — дубликат оформляется сразу.",
        ],
      },
    },
  },
  {
    id: "manual-t2-15",
    section: "admin",
    correctIndex: 2,
    source: SOURCE,
    translations: {
      es: {
        text: "Conducir con el permiso caducado es…",
        options: [
          "Legal si lo llevas encima",
          "Legal si hace menos de 1 mes",
          "Infracción grave (equiparable a no llevar permiso), sancionable con multa",
          "Legal si el vehículo tiene la ITV en regla",
        ],
        explanation:
          "Un permiso caducado no habilita para conducir. Es infracción grave, con multa, aunque el titular sí tenga el derecho (solo tiene que renovarlo). Conducir sin haberlo obtenido nunca es infracción muy grave.",
        optionRationales: [
          "Llevar encima un permiso caducado equivale a no llevar permiso válido.",
          "No hay periodo de gracia: el día siguiente a la caducidad ya no habilita.",
          "",
          "La ITV se refiere al vehículo; no legaliza al conductor sin permiso vigente.",
        ],
      },
      en: {
        text: "Driving with an expired licence is…",
        options: [
          "Legal if you carry it with you",
          "Legal if it expired less than 1 month ago",
          "A serious offence (treated as not holding a licence), punishable with a fine",
          "Legal if the vehicle's ITV is up to date",
        ],
        explanation:
          "An expired licence doesn't authorise driving. It's a serious offence with a fine, even though the holder is still entitled to renew it. Driving with no licence ever obtained is a very serious offence.",
        optionRationales: [
          "Carrying an expired licence is the same as carrying no valid licence.",
          "There's no grace period — the day after expiry it no longer authorises.",
          "",
          "ITV refers to the vehicle; it doesn't cover an unlicensed driver.",
        ],
      },
      ru: {
        text: "Ездить с просроченными правами — это…",
        options: [
          "Легально, если они при вас",
          "Легально, если просрочены меньше 1 месяца",
          "Серьёзное нарушение (равно отсутствию прав), со штрафом",
          "Легально, если у машины действующий ITV",
        ],
        explanation:
          "Просроченные права не дают права управления. Это серьёзное нарушение со штрафом, хотя владелец имеет право на продление. Езда без когда-либо полученных прав — очень грубое нарушение.",
        optionRationales: [
          "Наличие просроченных прав при себе равнозначно отсутствию действующих.",
          "Льготного периода нет — на следующий день после истечения права уже недействительны.",
          "",
          "ITV — про автомобиль; водителя без действующих прав он не легализует.",
        ],
      },
    },
  },
];
