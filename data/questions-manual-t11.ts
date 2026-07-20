import type { Question } from "@/lib/types";

// DGT Manual Permiso B (Lectura Fácil, 2024), Tema 11 — Maniobras.

const SOURCE = "DGT Manual Permiso B (Lectura Fácil, 2024), Tema 11";

export const QUESTIONS_MANUAL_T11: Question[] = [
  {
    id: "manual-t11-01",
    section: "others",
    correctIndex: 2,
    source: SOURCE,
    translations: {
      es: {
        text: "¿Cuáles son los tres pasos de la regla de seguridad R.S.M. antes de hacer cualquier maniobra?",
        options: [
          "Reducir, Situar, Mover",
          "Revisar, Señalizar, Mirar",
          "Retrovisor, Señal, Maniobra",
          "Rápido, Seguro, Meta",
        ],
        explanation:
          "R.S.M.: Retrovisor (observar la vía y espejos), Señal (avisar de la maniobra), Maniobra (ejecutarla a la velocidad adecuada sin poner en peligro a nadie).",
      },
      en: {
        text: "What are the three steps of the R.S.M. safety rule before any maneuver?",
        options: [
          "Reduce, Situate, Move",
          "Review, Signal, Mirror",
          "Mirror, Signal, Maneuver (Retrovisor, Señal, Maniobra)",
          "Rapid, Safe, Meta",
        ],
        explanation:
          "R.S.M.: Mirror (observe the road and mirrors), Signal (indicate the maneuver), Maneuver (perform at proper speed without endangering others).",
      },
      ru: {
        text: "Три шага правила R.S.M. перед любым манёвром — это…",
        options: [
          "Reducir, Situar, Mover",
          "Revisar, Señalizar, Mirar",
          "Retrovisor, Señal, Maniobra (Зеркало, Сигнал, Манёвр)",
          "Rápido, Seguro, Meta",
        ],
        explanation:
          "R.S.M.: Зеркало (осмотреть дорогу и зеркала), Сигнал (обозначить намерение), Манёвр (выполнить на нужной скорости, никому не создавая опасности).",
      },
    },
  },
  {
    id: "manual-t11-02",
    section: "others",
    correctIndex: 0,
    source: SOURCE,
    termIds: ["adelantamiento"],
    translations: {
      es: {
        text: "¿Por qué lado se realiza el adelantamiento como norma general?",
        options: [
          "Por la izquierda del vehículo al que se adelanta",
          "Por la derecha del vehículo al que se adelanta",
          "Por el arcén",
          "Por el carril bici",
        ],
        explanation:
          "Como norma general, se adelanta por la izquierda. Excepciones: tranvías por la zona central, vehículos que señalan claramente giro a la izquierda, y en calles urbanas con 2+ carriles del mismo sentido separados por línea blanca.",
      },
      en: {
        text: "As a general rule, on which side do you overtake?",
        options: [
          "On the left of the vehicle you're overtaking",
          "On the right of the vehicle you're overtaking",
          "On the hard shoulder",
          "On the bike lane",
        ],
        explanation:
          "Overtaking is on the left as a rule. Exceptions: trams in the middle of the road, drivers clearly indicating a left turn, and urban streets with 2+ lanes in the same direction separated by a white line.",
      },
      ru: {
        text: "По какой стороне выполняется обгон по общему правилу?",
        options: [
          "Слева от обгоняемого ТС",
          "Справа от обгоняемого ТС",
          "По обочине",
          "По велодорожке",
        ],
        explanation:
          "По общему правилу — слева. Исключения: трамвай посередине дороги, водитель явно сигналит поворот налево, город с 2+ полосами одного направления, разделёнными белой линией.",
      },
    },
  },
  {
    id: "manual-t11-03",
    section: "others",
    correctIndex: 3,
    source: SOURCE,
    termIds: ["adelantamiento", "ciclomotor", "ciclo"],
    translations: {
      es: {
        text: "Al adelantar a un ciclista o ciclomotor, ¿qué separación lateral mínima debes dejar?",
        options: ["50 cm", "1 metro", "2 metros", "1,5 metros y cambiar al carril de la izquierda"],
        explanation:
          "Al adelantar a ciclo o ciclomotor hay que dejar como mínimo 1,5 m de separación y cambiar al carril de la izquierda (no adelantar por el mismo carril).",
      },
      en: {
        text: "When overtaking a cyclist or moped, what is the minimum lateral clearance?",
        options: ["50 cm", "1 metre", "2 metres", "1.5 metres, and change to the left lane"],
        explanation:
          "When overtaking a cycle or moped you must leave at least 1.5 m and change to the left lane — never overtake in the same lane.",
      },
      ru: {
        text: "Какой минимальный боковой интервал нужен при обгоне велосипедиста или мопеда?",
        options: ["50 см", "1 метр", "2 метра", "1,5 метра и переход на левую полосу"],
        explanation:
          "При обгоне велосипеда или мопеда — минимум 1,5 м и переход на левую полосу (не обгонять по той же полосе).",
      },
    },
  },
  {
    id: "manual-t11-04",
    section: "others",
    correctIndex: 1,
    source: SOURCE,
    termIds: ["adelantamiento"],
    translations: {
      es: {
        text: "¿En cuál de estas situaciones ESTÁ PROHIBIDO adelantar?",
        options: [
          "En una recta con buena visibilidad",
          "En una curva o cambio de rasante sin buena visibilidad",
          "Con luz de largo alcance encendida",
          "Con más de dos años de carnet",
        ],
        explanation:
          "Está prohibido adelantar cuando no se ve bien la carretera por delante: curvas cerradas, cambios de rasante, niebla, lluvia intensa o cuando el sol deslumbra.",
      },
      en: {
        text: "In which of these situations is overtaking PROHIBITED?",
        options: [
          "On a straight with good visibility",
          "On a curve or crest with poor visibility",
          "With high beams on",
          "With more than two years of licence",
        ],
        explanation:
          "Overtaking is prohibited when you can't see the road clearly ahead: blind curves, crests, fog, heavy rain or sun glare.",
      },
      ru: {
        text: "В какой из ситуаций обгон ЗАПРЕЩЁН?",
        options: [
          "На прямой с хорошей видимостью",
          "На повороте или подъёме с плохой видимостью",
          "С включённым дальним светом",
          "Со стажем более 2 лет",
        ],
        explanation:
          "Обгон запрещён при недостаточной видимости впереди: закрытые повороты, подъёмы/спуски, туман, ливень, ослепление солнцем.",
      },
    },
  },
  {
    id: "manual-t11-05",
    section: "others",
    correctIndex: 2,
    source: SOURCE,
    translations: {
      es: {
        text: "Si otro vehículo te está adelantando, ¿qué debes hacer?",
        options: [
          "Aumentar la velocidad para que no te adelante",
          "Encender las luces largas para deslumbrarle",
          "Colocarte al borde derecho del carril y no acelerar; reducir la velocidad si hay peligro",
          "Frenar bruscamente",
        ],
        explanation:
          "El conductor al que le adelantan debe facilitar la maniobra: mantenerse a la derecha del carril, no acelerar, reducir velocidad si aparece peligro, y permitir volver al carril tras el adelantamiento.",
      },
      en: {
        text: "If another vehicle is overtaking you, what should you do?",
        options: [
          "Speed up so they can't overtake",
          "Flash high beams to dazzle them",
          "Move to the right of the lane, don't accelerate; slow down if a danger appears",
          "Brake sharply",
        ],
        explanation:
          "The driver being overtaken must facilitate the maneuver: stay right in the lane, don't accelerate, slow down if a danger appears, and allow the overtaker back into the lane.",
      },
      ru: {
        text: "Если вас обгоняют, что нужно делать?",
        options: [
          "Ускориться, чтобы не дать обогнать",
          "Включить дальний свет, чтобы ослепить",
          "Прижаться к правой стороне полосы, не ускоряться; при опасности снизить скорость",
          "Резко тормозить",
        ],
        explanation:
          "Обгоняемый обязан помочь манёвру: держаться правее в полосе, не ускоряться, при опасности снизить скорость и дать вернуться в полосу.",
      },
    },
  },
  {
    id: "manual-t11-06",
    section: "others",
    correctIndex: 1,
    source: SOURCE,
    translations: {
      es: {
        text: "Con el brazo, ¿cómo se indica un cambio de dirección o de carril hacia la izquierda?",
        options: [
          "Brazo doblado hacia arriba con la palma extendida",
          "Brazo en horizontal, mano extendida, palma hacia abajo",
          "Brazo con movimientos cortos arriba y abajo",
          "Brazo hacia atrás con la palma hacia atrás",
        ],
        explanation:
          "Para desplazar el vehículo a la izquierda: brazo en horizontal con la mano extendida hacia abajo. A la derecha: brazo doblado hacia arriba con la mano extendida hacia arriba.",
      },
      en: {
        text: "How do you signal a change of direction or lane to the left using your arm?",
        options: [
          "Arm bent upwards with palm extended",
          "Arm horizontal, hand extended, palm down",
          "Arm making short up-and-down movements",
          "Arm back with palm facing backwards",
        ],
        explanation:
          "To move left: arm horizontal, hand extended, palm down. To move right: arm bent upwards, hand also extended upwards.",
      },
      ru: {
        text: "Как рукой обозначается смена направления или полосы налево?",
        options: [
          "Рука согнута вверх, ладонь вытянута",
          "Рука горизонтально, ладонь вытянута вниз",
          "Короткие движения рукой вверх-вниз",
          "Рука назад ладонью назад",
        ],
        explanation:
          "Налево: рука горизонтально, ладонь вниз. Направо: рука согнута вверх, ладонь тоже вверх.",
      },
    },
  },
  {
    id: "manual-t11-07",
    section: "others",
    correctIndex: 2,
    source: SOURCE,
    termIds: ["cambio_sentido"],
    translations: {
      es: {
        text: "El cambio de sentido (media vuelta) en carretera debe hacerse…",
        options: [
          "En dos o tres maniobras cuando la vía es estrecha",
          "En cualquier lugar si no viene nadie",
          "En una sola maniobra y donde no esté prohibido; en autopista/autovía, solo por un enlace habilitado",
          "Sin señalizar si es de noche",
        ],
        explanation:
          "El cambio de sentido debe hacerse en una única maniobra, sin obstruir la circulación y solo donde no esté prohibido. En autopista y autovía únicamente por enlaces habilitados.",
      },
      en: {
        text: "A U-turn (change of direction) on the road must be done…",
        options: [
          "In two or three moves if the road is narrow",
          "Anywhere if no one is coming",
          "In a single move, only where not prohibited; on motorways, only at designated interchanges",
          "Without signaling at night",
        ],
        explanation:
          "The U-turn must be done in a single move, without obstructing traffic, and only where not prohibited. On motorways/dual carriageways only at designated interchanges.",
      },
      ru: {
        text: "Разворот на дороге должен выполняться…",
        options: [
          "В 2-3 приёма, если дорога узкая",
          "Где угодно, если никого нет",
          "За один приём, только там, где не запрещён; на автомагистрали — только через специальные развязки",
          "Без сигнала, если ночью",
        ],
        explanation:
          "Разворот — за один приём, без помех и только там, где не запрещён. На автомагистрали и скоростной автодороге — только через специальные развязки.",
      },
    },
  },
  {
    id: "manual-t11-08",
    section: "others",
    correctIndex: 0,
    source: SOURCE,
    translations: {
      es: {
        text: "Al incorporarte a la circulación desde un carril de aceleración, si tienes que ceder el paso, ¿dónde debes detenerte si es necesario?",
        options: [
          "Al principio del carril de aceleración",
          "En medio del carril de aceleración",
          "Directamente en el carril de circulación",
          "En el arcén hasta que se vacíe la carretera",
        ],
        explanation:
          "Si tienes que ceder el paso desde el carril de aceleración, detente al principio de dicho carril hasta que el vehículo pase, y después entra adaptándote a la velocidad.",
      },
      en: {
        text: "Joining traffic from an acceleration lane, if you must give way, where do you stop if needed?",
        options: [
          "At the start of the acceleration lane",
          "In the middle of the acceleration lane",
          "Directly in the main lane",
          "On the hard shoulder until the road empties",
        ],
        explanation:
          "If you must yield from an acceleration lane, stop at the start of that lane until the vehicle passes, then merge matching speed.",
      },
      ru: {
        text: "При въезде в поток с полосы разгона, если нужно уступить, где следует остановиться при необходимости?",
        options: [
          "В начале полосы разгона",
          "В середине полосы разгона",
          "Сразу на основной полосе",
          "На обочине, пока дорога не освободится",
        ],
        explanation:
          "Если нужно уступить с полосы разгона — остановиться в её начале, дождаться и включиться в поток, подстроив скорость.",
      },
    },
  },
  {
    id: "manual-t11-09",
    section: "others",
    correctIndex: 3,
    source: SOURCE,
    termIds: ["parada", "estacionamiento"],
    translations: {
      es: {
        text: "¿Cuál es la diferencia principal entre 'parada' y 'estacionamiento'?",
        options: [
          "Es la misma maniobra con nombres distintos",
          "La parada es en el arcén y el estacionamiento en el carril",
          "La parada es voluntaria y el estacionamiento involuntario",
          "La parada dura menos de 2 minutos con el conductor cerca; el estacionamiento más de 2 minutos y el conductor puede alejarse",
        ],
        explanation:
          "Parada: inmovilización voluntaria de menos de 2 minutos con el conductor junto al vehículo. Estacionamiento: más de 2 minutos, el conductor puede alejarse.",
      },
      en: {
        text: "What is the main difference between 'parada' (stop) and 'estacionamiento' (parking)?",
        options: [
          "They are the same maneuver with different names",
          "Parada is on the shoulder, estacionamiento in the lane",
          "Parada is voluntary and estacionamiento is involuntary",
          "Parada is under 2 min with the driver nearby; estacionamiento is over 2 min and the driver may leave",
        ],
        explanation:
          "Parada: voluntary stop under 2 minutes with the driver by the vehicle. Estacionamiento: more than 2 minutes, driver may leave.",
      },
      ru: {
        text: "В чём главное отличие parada (кратковременной остановки) от estacionamiento (парковки)?",
        options: [
          "Это одно и то же под разными названиями",
          "Parada — на обочине, estacionamiento — на полосе",
          "Parada добровольна, estacionamiento — нет",
          "Parada — до 2 мин с водителем рядом; estacionamiento — свыше 2 мин, водитель может уйти",
        ],
        explanation:
          "Parada — добровольная остановка менее 2 минут, водитель рядом. Estacionamiento — свыше 2 минут, водитель может уйти.",
      },
    },
  },
  {
    id: "manual-t11-10",
    section: "others",
    correctIndex: 2,
    source: SOURCE,
    translations: {
      es: {
        text: "¿Cuál de estas situaciones NO se considera adelantamiento?",
        options: [
          "Cambiar de carril para pasar a un turismo",
          "Salir de un carril de aceleración",
          "En un atasco, avanzar más rápido por un carril que otro",
          "Pasar a un ciclomotor por la izquierda",
        ],
        explanation:
          "En atascos, cuando los carriles se mueven a distintas velocidades, no se considera adelantamiento (y está prohibido cambiar de carril para adelantar). Tampoco lo son los carriles reservados, ni los ciclistas en grupo, ni pasar a un vehículo averiado.",
      },
      en: {
        text: "Which of these is NOT considered overtaking?",
        options: [
          "Changing lanes to pass a car",
          "Leaving an acceleration lane",
          "In a traffic jam, moving faster in one lane than another",
          "Passing a moped on the left",
        ],
        explanation:
          "In jams where lanes move at different speeds, that's not overtaking (and lane-changing to overtake is forbidden). Also not: reserved lanes, groups of cyclists, or passing a broken-down vehicle.",
      },
      ru: {
        text: "Что из перечисленного НЕ считается обгоном?",
        options: [
          "Смена полосы для опережения легковой машины",
          "Съезд с полосы разгона",
          "В пробке движение по одной полосе быстрее, чем по другой",
          "Опережение мопеда слева",
        ],
        explanation:
          "В пробке, когда полосы движутся с разной скоростью, это не обгон (и менять полосу для обгона запрещено). Также не обгон: выделенные полосы, группа велосипедистов, объезд сломавшегося ТС.",
      },
    },
  },
];
