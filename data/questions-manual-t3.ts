import type { Question } from "@/lib/types";

// Questions derived from the DGT free manual:
// "Manual del Permiso B en Lectura Fácil" (2024), Tema 3 — El estado del conductor.
// Facts are grounded in the manual's own text; translations are AI-drafted.
// Personal-use edition. Not sourced from the DGT active exam bank.

const SOURCE = "DGT Manual Permiso B (Lectura Fácil, 2024), Tema 3";

export const QUESTIONS_MANUAL_T3: Question[] = [
  {
    id: "manual-t3-01",
    section: "alcohol_drugs",
    correctIndex: 2,
    source: SOURCE,
    translations: {
      es: {
        text: "En condiciones normales, ¿cuál es el tiempo de reacción de un conductor?",
        options: [
          "Entre 1 y 2 segundos",
          "Entre 2 y 3 segundos",
          "Entre medio segundo y un segundo",
          "Menos de 0,1 segundos",
        ],
        explanation:
          "En condiciones normales el tiempo de reacción de un conductor está entre 0,5 y 1 segundo. Aumenta con la fatiga, el alcohol, algunos medicamentos y la edad avanzada.",
        optionRationales: [
          "1-2 segundos es un tiempo de reacción ya alterado por fatiga o alcohol.",
          "2-3 segundos indica una reacción muy deteriorada; a esa velocidad se recorren decenas de metros.",
          "",
          "Menos de 0,1 s es imposible fisiológicamente para un humano; ni un piloto profesional reacciona tan rápido.",
        ],
      },
      en: {
        text: "Under normal conditions, what is a driver's reaction time?",
        options: [
          "Between 1 and 2 seconds",
          "Between 2 and 3 seconds",
          "Between half a second and one second",
          "Less than 0.1 seconds",
        ],
        explanation:
          "Under normal conditions a driver's reaction time is between 0.5 and 1 second. It increases with fatigue, alcohol, some medications and advanced age.",
        optionRationales: [
          "1-2 seconds is a reaction already impaired by fatigue or alcohol.",
          "2-3 seconds means seriously impaired; at speed you cover tens of metres.",
          "",
          "Under 0.1 s is physiologically impossible for humans; even pro drivers can't react that fast.",
        ],
      },
      ru: {
        text: "В нормальных условиях время реакции водителя составляет…",
        options: [
          "От 1 до 2 секунд",
          "От 2 до 3 секунд",
          "От 0,5 до 1 секунды",
          "Менее 0,1 секунды",
        ],
        explanation:
          "В нормальных условиях время реакции водителя — от 0,5 до 1 секунды. Оно возрастает при усталости, алкоголе, некоторых лекарствах и в пожилом возрасте.",
        optionRationales: [
          "1-2 секунды — уже нарушенная реакция при усталости или алкоголе.",
          "2-3 секунды — сильно нарушенная; на скорости это десятки метров пути.",
          "",
          "Меньше 0,1 с физиологически невозможно даже для профессиональных пилотов.",
        ],
      },
    },
  },
  {
    id: "manual-t3-02",
    section: "alcohol_drugs",
    correctIndex: 2,
    source: SOURCE,
    termIds: ["alcoholemia"],
    translations: {
      es: {
        text: "¿Cuál es la única tasa de alcoholemia segura para conducir?",
        options: [
          "0,25 mg/l de aire",
          "0,15 mg/l de aire",
          "0,0 (no beber alcohol)",
          "0,5 g/l de sangre",
        ],
        explanation:
          "Según el manual de la DGT, la única tasa de alcoholemia segura para conducir es 0,0. Cualquier cantidad de alcohol reduce la capacidad de conducción.",
      },
      en: {
        text: "What is the only safe blood alcohol level for driving?",
        options: [
          "0.25 mg/l in exhaled air",
          "0.15 mg/l in exhaled air",
          "0.0 (no alcohol at all)",
          "0.5 g/l in blood",
        ],
        explanation:
          "According to the DGT manual, the only safe BAC for driving is 0.0. Any amount of alcohol reduces driving ability.",
      },
      ru: {
        text: "Какой единственный безопасный уровень алкоголя в крови для вождения?",
        options: [
          "0,25 мг/л в выдыхаемом воздухе",
          "0,15 мг/л в выдыхаемом воздухе",
          "0,0 (не употреблять алкоголь)",
          "0,5 г/л в крови",
        ],
        explanation:
          "Согласно руководству DGT, единственный безопасный уровень — 0,0. Любое количество алкоголя снижает способность к вождению.",
      },
    },
  },
  {
    id: "manual-t3-03",
    section: "alcohol_drugs",
    correctIndex: 2,
    source: SOURCE,
    translations: {
      es: {
        text: "¿Cuánto tiempo después de beber alcohol se alcanza la tasa de alcoholemia más alta?",
        options: [
          "Inmediatamente",
          "Aproximadamente 30 minutos después",
          "Aproximadamente 1 hora después",
          "Aproximadamente 3 horas después",
        ],
        explanation:
          "El pico de alcoholemia se alcanza aproximadamente 1 hora después de beber. A partir de ahí los efectos van disminuyendo muy poco a poco.",
        optionRationales: [
          "El alcohol no llega a la sangre en el instante; necesita tiempo para absorberse.",
          "30 minutos es demasiado pronto; el pico llega alrededor de la hora.",
          "",
          "3 horas es demasiado tarde; a esa altura la tasa ya está bajando.",
        ],
      },
      en: {
        text: "How long after drinking is the peak blood alcohol concentration reached?",
        options: [
          "Immediately",
          "About 30 minutes later",
          "About 1 hour later",
          "About 3 hours later",
        ],
        explanation:
          "Peak BAC is reached about 1 hour after drinking. After that the effects slowly decrease.",
        optionRationales: [
          "Alcohol doesn't reach the blood instantly; it needs time to absorb.",
          "30 minutes is too early; the peak arrives around the one-hour mark.",
          "",
          "3 hours is too late; by then the level is already falling.",
        ],
      },
      ru: {
        text: "Через сколько времени после употребления алкоголя достигается его максимальная концентрация в крови?",
        options: [
          "Сразу",
          "Примерно через 30 минут",
          "Примерно через 1 час",
          "Примерно через 3 часа",
        ],
        explanation:
          "Пик концентрации алкоголя достигается примерно через 1 час после употребления. Затем действие медленно снижается.",
        optionRationales: [
          "Алкоголь не попадает в кровь мгновенно; нужно время на всасывание.",
          "30 минут — слишком рано; пик приходится примерно на час.",
          "",
          "3 часа — слишком поздно; концентрация к этому моменту уже снижается.",
        ],
      },
    },
  },
  {
    id: "manual-t3-04",
    section: "alcohol_drugs",
    correctIndex: 1,
    source: SOURCE,
    termIds: ["fatiga", "somnolencia"],
    translations: {
      es: {
        text: "Para prevenir la fatiga, se recomienda descansar…",
        options: [
          "Cada hora, 10 minutos",
          "Cada 2 horas o cada 200 km, unos 20 a 30 minutos",
          "Solo cuando notes mucho cansancio",
          "Cada 5 horas, durante 1 hora",
        ],
        explanation:
          "El manual recomienda descansar 20-30 minutos cada 2 horas o cada 200 km, aunque no sientas fatiga ni somnolencia.",
      },
      en: {
        text: "To prevent fatigue, the recommendation is to rest…",
        options: [
          "Every hour for 10 minutes",
          "Every 2 hours or every 200 km, for 20-30 minutes",
          "Only when you feel very tired",
          "Every 5 hours, for 1 hour",
        ],
        explanation:
          "The manual recommends resting 20-30 minutes every 2 hours or every 200 km, even if you don't feel tired or drowsy.",
      },
      ru: {
        text: "Чтобы предотвратить усталость за рулём, рекомендуется отдыхать…",
        options: [
          "Каждый час по 10 минут",
          "Каждые 2 часа или каждые 200 км, по 20-30 минут",
          "Только когда почувствуешь сильную усталость",
          "Каждые 5 часов по 1 часу",
        ],
        explanation:
          "Руководство рекомендует отдыхать 20-30 минут каждые 2 часа или каждые 200 км, даже если усталость не ощущается.",
      },
    },
  },
  {
    id: "manual-t3-05",
    section: "alcohol_drugs",
    correctIndex: 2,
    source: SOURCE,
    translations: {
      es: {
        text: "Si notas los primeros síntomas de fatiga o somnolencia, debes…",
        options: [
          "Abrir la ventanilla y seguir conduciendo",
          "Poner la música más alta",
          "Parar en un lugar seguro y dormir 20 o 30 minutos",
          "Beber café y continuar sin parar",
        ],
        explanation:
          "Ante los primeros síntomas hay que parar el vehículo en un lugar seguro y dormir 20-30 minutos. El café o la música son soluciones temporales que no resuelven la fatiga.",
        optionRationales: [
          "Abrir la ventanilla despierta unos segundos, pero no elimina la fatiga; sigue habiendo microsueños.",
          "La música alta es un estímulo pasajero; el cerebro se adapta y la somnolencia vuelve.",
          "",
          "El café tarda 20-30 minutos en hacer efecto y solo enmascara la fatiga; lo mejor es dormir esos mismos 20-30 minutos.",
        ],
      },
      en: {
        text: "If you notice the first symptoms of fatigue or drowsiness, you must…",
        options: [
          "Open the window and keep driving",
          "Turn the music up louder",
          "Stop in a safe place and sleep for 20-30 minutes",
          "Drink coffee and keep going without stopping",
        ],
        explanation:
          "At the first symptoms, stop in a safe place and sleep 20-30 minutes. Coffee or loud music are only temporary fixes; they don't resolve fatigue.",
        optionRationales: [
          "Opening the window wakes you briefly, but doesn't remove fatigue; microsleeps still happen.",
          "Loud music is a fleeting stimulus; the brain adapts and drowsiness returns.",
          "",
          "Coffee takes 20-30 minutes to kick in and only masks fatigue; better to sleep for those same 20-30 minutes.",
        ],
      },
      ru: {
        text: "При первых признаках усталости или сонливости за рулём нужно…",
        options: [
          "Открыть окно и продолжать движение",
          "Сделать музыку громче",
          "Остановиться в безопасном месте и поспать 20-30 минут",
          "Выпить кофе и не останавливаться",
        ],
        explanation:
          "При первых симптомах — остановиться в безопасном месте и поспать 20-30 минут. Кофе или музыка — временные меры и усталость не устраняют.",
        optionRationales: [
          "Открытое окно бодрит несколько секунд, но не убирает усталость; микросны продолжатся.",
          "Громкая музыка — короткий стимул; мозг адаптируется и сонливость возвращается.",
          "",
          "Кофе начинает действовать через 20-30 минут и лишь маскирует усталость; лучше поспать эти же 20-30 минут.",
        ],
      },
    },
  },
  {
    id: "manual-t3-06",
    section: "alcohol_drugs",
    correctIndex: 1,
    source: SOURCE,
    translations: {
      es: {
        text: "¿Cuál de los siguientes factores NO influye en la tasa de alcoholemia?",
        options: [
          "El sexo de la persona",
          "El color de los ojos",
          "Haber comido antes de beber",
          "La velocidad a la que se bebe",
        ],
        explanation:
          "El color de los ojos no afecta al metabolismo del alcohol. Sí influyen: cantidad, peso, sexo, tiempo transcurrido, tipo de bebida, velocidad, comida, sueño, edad y circunstancias personales.",
        optionRationales: [
          "El sexo sí influye: según el manual, el alcohol suele afectar más a las mujeres.",
          "",
          "Comer antes de beber ralentiza la absorción del alcohol, por eso sí influye.",
          "Beber rápido eleva la tasa más que beber despacio, por eso sí influye.",
        ],
      },
      en: {
        text: "Which of the following factors does NOT influence blood alcohol concentration?",
        options: [
          "The person's sex",
          "Eye colour",
          "Having eaten before drinking",
          "The rate at which the person drinks",
        ],
        explanation:
          "Eye colour has no effect on alcohol metabolism. Amount, weight, sex, time elapsed, type of drink, drinking rate, food, sleep, age and personal circumstances do influence it.",
        optionRationales: [
          "Sex does influence: the manual notes alcohol tends to affect women more.",
          "",
          "Eating before drinking slows absorption, so it does influence BAC.",
          "Drinking fast raises BAC more than drinking slowly, so it does influence it.",
        ],
      },
      ru: {
        text: "Какой из следующих факторов НЕ влияет на уровень алкоголя в крови?",
        options: [
          "Пол человека",
          "Цвет глаз",
          "Приём пищи перед употреблением алкоголя",
          "Скорость употребления алкоголя",
        ],
        explanation:
          "Цвет глаз не влияет на метаболизм алкоголя. Влияют: количество, вес, пол, прошедшее время, тип напитка, скорость, приём пищи, сон, возраст и личные обстоятельства.",
        optionRationales: [
          "Пол влияет: по руководству, алкоголь сильнее действует на женщин.",
          "",
          "Приём пищи замедляет всасывание алкоголя, поэтому влияет.",
          "Быстрое питьё повышает концентрацию сильнее, чем медленное — поэтому влияет.",
        ],
      },
    },
  },
  {
    id: "manual-t3-07",
    section: "alcohol_drugs",
    correctIndex: 1,
    source: SOURCE,
    translations: {
      es: {
        text: "La somnolencia se define como…",
        options: [
          "Solo cansancio muscular",
          "Estado en el que se tiene sensación de cansancio, pesadez en el cuerpo y sueño",
          "Una enfermedad mental grave",
          "Los efectos de haber bebido demasiado alcohol",
        ],
        explanation:
          "La somnolencia es un estado en el que se tiene sensación de cansancio, pesadez en el cuerpo y sueño. Es distinta de la fatiga, que puede ser física o psicológica.",
        optionRationales: [
          "El cansancio muscular es solo una parte; la somnolencia incluye sueño y pesadez general.",
          "",
          "La somnolencia es un estado normal ante falta de sueño, no una enfermedad mental.",
          "El alcohol puede provocar somnolencia, pero la somnolencia también aparece sin haber bebido.",
        ],
      },
      en: {
        text: "Drowsiness (somnolence) is defined as…",
        options: [
          "Only muscle tiredness",
          "A state of tiredness, body heaviness and sleepiness",
          "A serious mental illness",
          "The effects of drinking too much alcohol",
        ],
        explanation:
          "Drowsiness is a state of tiredness, body heaviness and sleepiness. It is distinct from fatigue, which can be physical or psychological.",
        optionRationales: [
          "Muscle tiredness is only part of it; drowsiness also includes sleepiness and heaviness.",
          "",
          "Drowsiness is a normal state after poor sleep, not a mental illness.",
          "Alcohol can cause drowsiness, but drowsiness also appears without any alcohol.",
        ],
      },
      ru: {
        text: "Сонливость определяется как…",
        options: [
          "Только мышечная усталость",
          "Состояние усталости, тяжести в теле и желания спать",
          "Тяжёлое психическое заболевание",
          "Последствия чрезмерного употребления алкоголя",
        ],
        explanation:
          "Сонливость — это состояние усталости, тяжести в теле и желания спать. Отличается от «фатиги», которая может быть физической или психологической.",
        optionRationales: [
          "Мышечная усталость — лишь часть; сонливость включает ещё и сон, и тяжесть в теле.",
          "",
          "Сонливость — обычное состояние при недосыпе, а не психическое заболевание.",
          "Алкоголь может вызвать сонливость, но сонливость возникает и без алкоголя.",
        ],
      },
    },
  },
  {
    id: "manual-t3-08",
    section: "alcohol_drugs",
    correctIndex: 2,
    source: SOURCE,
    translations: {
      es: {
        text: "El alcohol, al circular por la sangre, afecta sobre todo a…",
        options: [
          "Los músculos y los huesos",
          "El estómago y el hígado",
          "El cerebro y la vista",
          "Solo al equilibrio",
        ],
        explanation:
          "El alcohol se extiende por el cuerpo a través de la sangre y afecta sobre todo al cerebro y a la vista, reduciendo reflejos, atención y percepción.",
        optionRationales: [
          "Los músculos y huesos no son los principales órganos afectados; el impacto es en el sistema nervioso.",
          "El estómago y el hígado sufren daño a largo plazo, pero al conducir lo crítico es el efecto sobre cerebro y visión.",
          "",
          "El equilibrio se resiente, pero es solo un síntoma; lo principal es el deterioro cerebral y visual.",
        ],
      },
      en: {
        text: "Circulating through the bloodstream, alcohol mainly affects…",
        options: [
          "Muscles and bones",
          "Stomach and liver",
          "The brain and vision",
          "Only balance",
        ],
        explanation:
          "Alcohol spreads through the body via the blood and mainly affects the brain and vision, reducing reflexes, attention and perception.",
        optionRationales: [
          "Muscles and bones aren't the main affected organs; the impact is on the nervous system.",
          "Stomach and liver suffer long-term damage, but for driving what matters is the effect on brain and vision.",
          "",
          "Balance is affected, but it's just one symptom; the main impact is on brain and vision.",
        ],
      },
      ru: {
        text: "Циркулируя по крови, алкоголь в первую очередь воздействует на…",
        options: [
          "Мышцы и кости",
          "Желудок и печень",
          "Мозг и зрение",
          "Только на равновесие",
        ],
        explanation:
          "Алкоголь распространяется по телу через кровь и в первую очередь влияет на мозг и зрение, снижая рефлексы, внимание и восприятие.",
        optionRationales: [
          "Мышцы и кости — не главные затронутые органы; удар по нервной системе.",
          "Желудок и печень страдают в долгосрочной перспективе, а за рулём критично воздействие на мозг и зрение.",
          "",
          "Равновесие страдает, но это только симптом; главное — воздействие на мозг и зрение.",
        ],
      },
    },
  },
  {
    id: "manual-t3-09",
    section: "alcohol_drugs",
    correctIndex: 3,
    source: SOURCE,
    translations: {
      es: {
        text: "En el interior del vehículo, la temperatura adecuada para reducir la fatiga es aproximadamente…",
        options: ["15 °C", "18 °C", "28 °C", "23 °C"],
        explanation:
          "El manual señala 23 °C como temperatura adecuada dentro del vehículo. Mucho calor dentro del coche contribuye a la fatiga.",
        optionRationales: [
          "15 °C es demasiado frío; incomoda y no es la temperatura óptima según el manual.",
          "18 °C está por debajo del valor de referencia; no es la cifra que da el manual.",
          "28 °C es demasiado calor y precisamente causa fatiga.",
          "",
        ],
      },
      en: {
        text: "Inside the vehicle, the appropriate temperature to help avoid fatigue is roughly…",
        options: ["15 °C", "18 °C", "28 °C", "23 °C"],
        explanation:
          "The manual gives 23 °C as an appropriate cabin temperature. Excessive heat inside the car contributes to fatigue.",
        optionRationales: [
          "15 °C is too cold; uncomfortable and not the manual's reference.",
          "18 °C is below the reference figure the manual gives.",
          "28 °C is too hot — that's exactly what causes fatigue.",
          "",
        ],
      },
      ru: {
        text: "Комфортная температура в салоне для снижения усталости — примерно…",
        options: ["15 °C", "18 °C", "28 °C", "23 °C"],
        explanation:
          "Руководство указывает температуру около 23 °C как комфортную. Слишком жарко в салоне — фактор, усиливающий усталость.",
        optionRationales: [
          "15 °C — слишком холодно; некомфортно и не является ориентиром в руководстве.",
          "18 °C ниже указанной в руководстве величины.",
          "28 °C — слишком жарко и именно это вызывает усталость.",
          "",
        ],
      },
    },
  },
  {
    id: "manual-t3-10",
    section: "alcohol_drugs",
    correctIndex: 0,
    source: SOURCE,
    translations: {
      es: {
        text: "El alcohol suele afectar más intensamente a…",
        options: [
          "Personas de menos peso y a las mujeres",
          "Personas con más peso",
          "Personas mayores de 30 años exclusivamente",
          "Solo a personas que no comen",
        ],
        explanation:
          "Según el manual, el alcohol afecta más a personas delgadas y suele afectar más a las mujeres. También influyen la edad y las circunstancias personales.",
        optionRationales: [
          "",
          "Es al revés: el alcohol afecta MENOS a personas de más peso (más volumen sanguíneo diluye el alcohol).",
          "El efecto depende de muchos factores, no solo de la edad; y afecta a todas las edades.",
          "Comer sí influye, pero el efecto se produce también en quienes han comido, con menor intensidad.",
        ],
      },
      en: {
        text: "Alcohol tends to affect more intensely…",
        options: [
          "Thinner people and women",
          "Heavier people",
          "Only people over 30 years old",
          "Only people who haven't eaten",
        ],
        explanation:
          "According to the manual, alcohol affects thinner people more, and tends to affect women more. Age and personal circumstances also matter.",
        optionRationales: [
          "",
          "The opposite is true: alcohol affects heavier people LESS (larger blood volume dilutes it).",
          "Age is one factor among many; alcohol affects all ages.",
          "Eating matters, but people who've eaten are also affected, just less intensely.",
        ],
      },
      ru: {
        text: "Сильнее всего алкоголь обычно воздействует на…",
        options: [
          "Людей с меньшим весом и на женщин",
          "Людей с большим весом",
          "Только на людей старше 30 лет",
          "Только на тех, кто не ел",
        ],
        explanation:
          "Согласно руководству, алкоголь сильнее влияет на людей с меньшим весом и, как правило, на женщин. Возраст и личные обстоятельства также имеют значение.",
        optionRationales: [
          "",
          "Наоборот: людей с большим весом алкоголь затрагивает СЛАБЕЕ (больший объём крови разбавляет).",
          "Возраст — лишь один из факторов; алкоголь действует на всех возрастах.",
          "Приём пищи влияет, но и на поевших алкоголь действует, только слабее.",
        ],
      },
    },
  },
];
