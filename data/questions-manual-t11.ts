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
        optionRationales: [
          "«Reducir/Situar/Mover» suena parecido pero no es la regla oficial; la primera R es Retrovisor.",
          "Cerca, pero el orden y los términos oficiales son Retrovisor-Señal-Maniobra.",
          "",
          "«Rápido, Seguro, Meta» no tiene nada que ver con maniobras; es un distractor absurdo.",
        ],
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
        optionRationales: [
          "'Reduce/Situate/Move' sounds similar but isn't the official rule; the first R is Mirror.",
          "Close, but the official order and terms are Mirror-Signal-Maneuver.",
          "",
          "'Rapid, Safe, Meta' has nothing to do with maneuvers; an obvious distractor.",
        ],
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
        optionRationales: [
          "Reducir/Situar/Mover звучит похоже, но это не правило; первая R — зеркало (Retrovisor).",
          "Близко, но официальный порядок и термины — Retrovisor-Señal-Maniobra.",
          "",
          "«Rápido, Seguro, Meta» не имеет отношения к манёврам — очевидный ложный вариант.",
        ],
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
        optionRationales: [
          "",
          "Por la derecha solo se permite en casos concretos (tranvías, vehículos que giran a la izquierda, urbano con línea blanca).",
          "El arcén no es carril de circulación; adelantar por él es infracción y peligroso.",
          "El carril bici está reservado a bicicletas; usarlo para adelantar es infracción muy grave.",
        ],
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
        optionRationales: [
          "",
          "Right-side overtaking is only allowed in specific cases (trams, left-turning drivers, urban lanes marked with white).",
          "The shoulder isn't a driving lane; overtaking there is an offence and dangerous.",
          "The bike lane is reserved for bicycles; using it to overtake is a serious offence.",
        ],
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
        optionRationales: [
          "",
          "Справа — только в конкретных случаях (трамваи, поворачивающие налево, город с белой разметкой).",
          "Обочина — не полоса движения; обгон по обочине — нарушение и опасно.",
          "Велодорожка предназначена только для велосипедов; обгон по ней — серьёзное нарушение.",
        ],
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
        optionRationales: [
          "50 cm es la mitad de lo permitido; una ráfaga o movimiento del ciclista provocaría choque.",
          "1 metro está por debajo del mínimo legal; un ciclista puede desviarse un poco por baches.",
          "2 metros es más de lo exigido; no es la cifra oficial (aunque no está mal en la práctica).",
          "",
        ],
      },
      en: {
        text: "When overtaking a cyclist or moped, what is the minimum lateral clearance?",
        options: ["50 cm", "1 metre", "2 metres", "1.5 metres, and change to the left lane"],
        explanation:
          "When overtaking a cycle or moped you must leave at least 1.5 m and change to the left lane — never overtake in the same lane.",
        optionRationales: [
          "50 cm is half of what's allowed; a gust or slight wobble from the cyclist would cause a crash.",
          "1 metre is below the legal minimum; a cyclist can weave slightly for potholes.",
          "2 metres exceeds the requirement; not the official figure (though good practice).",
          "",
        ],
      },
      ru: {
        text: "Какой минимальный боковой интервал нужен при обгоне велосипедиста или мопеда?",
        options: ["50 см", "1 метр", "2 метра", "1,5 метра и переход на левую полосу"],
        explanation:
          "При обгоне велосипеда или мопеда — минимум 1,5 м и переход на левую полосу (не обгонять по той же полосе).",
        optionRationales: [
          "50 см — вдвое меньше разрешённого; порыв ветра или манёвр велосипедиста — и авария.",
          "1 метр меньше законного минимума; велосипедист может немного вильнуть на ямах.",
          "2 метра — больше, чем требуется; не официальная цифра (хотя на практике хорошо).",
          "",
        ],
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
        optionRationales: [
          "En recta con buena visibilidad es exactamente donde SE PUEDE adelantar sin peligro.",
          "",
          "La luz de largo alcance no prohíbe adelantar; incluso ayuda a ver mejor en la operación.",
          "Los años de carnet no limitan el adelantamiento (los noveles adelantan como cualquiera).",
        ],
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
        optionRationales: [
          "A straight with good visibility is exactly where overtaking IS allowed safely.",
          "",
          "High beams don't ban overtaking; they can help you see during the operation.",
          "Years of licence don't restrict overtaking (novices overtake like anyone else).",
        ],
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
        optionRationales: [
          "На прямой с хорошей видимостью обгон как раз РАЗРЕШЁН.",
          "",
          "Дальний свет не запрещает обгон; наоборот, может помогать видеть.",
          "Стаж прав не ограничивает обгон (начинающие обгоняют как все).",
        ],
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
        optionRationales: [
          "Acelerar mientras te adelantan es infracción y prolonga la maniobra en el carril contrario.",
          "Deslumbrar es peligrosísimo y también es infracción.",
          "",
          "Frenar bruscamente confunde al vehículo de detrás y puede provocar un alcance.",
        ],
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
        optionRationales: [
          "Speeding up while being overtaken is an offence and prolongs time in the oncoming lane.",
          "Dazzling is extremely dangerous and also an offence.",
          "",
          "Sharp braking confuses the vehicle behind and can trigger a rear-end crash.",
        ],
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
        optionRationales: [
          "Ускоряться при обгоне — нарушение и удлиняет время нахождения на встречке.",
          "Слепить дальним крайне опасно и запрещено.",
          "",
          "Резкое торможение сбивает с толку заднего и может вызвать наезд сзади.",
        ],
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
        optionRationales: [
          "El brazo doblado hacia arriba indica giro a la DERECHA, no a la izquierda.",
          "",
          "Movimientos cortos arriba/abajo indican FRENADO, no giro.",
          "El brazo hacia atrás con palma hacia atrás indica MARCHA ATRÁS, no izquierda.",
        ],
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
        optionRationales: [
          "Arm bent upwards means turning RIGHT, not left.",
          "",
          "Short up-and-down movements signal BRAKING, not turning.",
          "Arm back with palm back signals REVERSING, not left turn.",
        ],
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
        optionRationales: [
          "Рука вверх — это поворот НАПРАВО, а не налево.",
          "",
          "Короткие движения вверх-вниз — сигнал ТОРМОЖЕНИЯ, а не поворота.",
          "Рука назад ладонью назад — сигнал ДВИЖЕНИЯ ЗАДНИМ ХОДОМ, не поворот налево.",
        ],
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
        optionRationales: [
          "En dos o tres maniobras se ocupa la vía demasiado tiempo; sólo se permite si es una única.",
          "«Si no viene nadie» no es criterio legal; hay lugares prohibidos (rasantes, curvas, señales).",
          "",
          "De noche hay que señalizar más, no menos; nunca se maniobra sin avisar.",
        ],
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
        optionRationales: [
          "Two or three moves blocks the road too long; only a single-move U-turn is allowed.",
          "'If no one's coming' isn't the legal criterion; some places are outright forbidden.",
          "",
          "At night you signal more, not less; you never maneuver without indicating.",
        ],
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
        optionRationales: [
          "В 2-3 приёма — блокирует дорогу слишком долго; разрешён только за один приём.",
          "«Если никого нет» — не правовой критерий; есть места, где разворот запрещён.",
          "",
          "Ночью сигнализировать нужно больше, не меньше; манёвр без сигнала — никогда.",
        ],
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
        optionRationales: [
          "",
          "Detenerse en medio del carril te deja sin espacio para acelerar cuando el otro pase.",
          "Detenerse en el carril de circulación es peligrosísimo: crea obstáculo en el flujo principal.",
          "El arcén es solo para averías o emergencias; no para esperar hueco.",
        ],
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
        optionRationales: [
          "",
          "Stopping in the middle leaves you no room to accelerate once the other passes.",
          "Stopping in the main lane is extremely dangerous — you become an obstacle in the flow.",
          "The shoulder is only for breakdowns/emergencies, not for waiting for a gap.",
        ],
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
        optionRationales: [
          "",
          "Остановка в середине не оставит места для разгона, когда другой проедет.",
          "Остановка сразу на основной полосе крайне опасна — становишься помехой в потоке.",
          "Обочина — только для поломок/аварий, не для ожидания «окна».",
        ],
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
        optionRationales: [
          "Son maniobras distintas con reglas distintas (duración, presencia del conductor).",
          "El lugar no es el criterio; ambos pueden hacerse en el arcén o en la calzada según señales.",
          "Ambos son voluntarios; la involuntaria es la «detención» (por semáforo, atasco, etc.).",
          "",
        ],
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
        optionRationales: [
          "They are distinct maneuvers with different rules (duration, driver presence).",
          "Location isn't the criterion; both can be on the shoulder or roadway depending on signs.",
          "Both are voluntary; involuntary stopping is 'detención' (red light, jam, etc.).",
          "",
        ],
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
        optionRationales: [
          "Это разные манёвры с разными правилами (длительность, присутствие водителя).",
          "Место не критерий; оба возможны на обочине или проезжей части в зависимости от знаков.",
          "Оба добровольные; недобровольная — это detención (красный, пробка и т.п.).",
          "",
        ],
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
        optionRationales: [
          "Cambiar de carril para pasar a otro vehículo es la definición típica de adelantamiento.",
          "Salir de un carril de aceleración es incorporarse, y sí puede considerarse adelantamiento si sobrepasas a alguien.",
          "",
          "Pasar a un ciclomotor por la izquierda es un adelantamiento típico y obliga a los 1,5 m.",
        ],
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
        optionRationales: [
          "Changing lanes to pass another vehicle is the textbook definition of overtaking.",
          "Leaving an acceleration lane is a merge, and can count as overtaking if you pass someone.",
          "",
          "Passing a moped on the left is a standard overtake and requires the 1.5 m clearance.",
        ],
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
        optionRationales: [
          "Смена полосы для опережения другого ТС — типичное определение обгона.",
          "Съезд с полосы разгона — это включение в поток, и может считаться обгоном, если кого-то опередил.",
          "",
          "Опережение мопеда слева — типичный обгон, требует бокового интервала 1,5 м.",
        ],
      },
    },
  },
  {
    id: "manual-t11-11",
    section: "others",
    correctIndex: 3,
    source: SOURCE,
    translations: {
      es: {
        text: "La marcha atrás como maniobra…",
        options: [
          "Puede recorrer cualquier distancia si no molesta",
          "Está permitida siempre que enciendas los intermitentes",
          "Se puede hacer en autopista para no perder una salida",
          "Solo se hace en distancias cortas, como complemento de otra maniobra, y donde no esté prohibido",
        ],
        explanation:
          "La marcha atrás se usa como complemento de otra maniobra (por ejemplo, aparcar) y en distancias cortas. Está totalmente prohibida en autopista y autovía. Nunca se hace como forma normal de circular.",
        optionRationales: [
          "«Cualquier distancia» sin límite es una infracción; la marcha atrás es una excepción, no la norma.",
          "Los intermitentes no autorizan por sí solos; la maniobra requiere condiciones estrictas.",
          "En autopista y autovía la marcha atrás está expresamente prohibida, aunque pierdas una salida.",
          "",
        ],
      },
      en: {
        text: "Reversing as a maneuver…",
        options: [
          "May cover any distance as long as it doesn't disturb others",
          "Is allowed whenever you switch on the indicators",
          "Can be done on a motorway to avoid missing an exit",
          "Only for short distances, as a complement to another maneuver, and where not prohibited",
        ],
        explanation:
          "Reversing is used as a complement to another maneuver (e.g. parking) and only over short distances. It's completely forbidden on motorways/dual carriageways. Never a normal way to drive.",
        optionRationales: [
          "'Any distance' without limits is an offence; reversing is an exception, not the norm.",
          "Indicators alone don't authorise it; the maneuver has strict conditions.",
          "Reversing is explicitly forbidden on motorways/dual carriageways, even if you miss an exit.",
          "",
        ],
      },
      ru: {
        text: "Движение задним ходом как манёвр…",
        options: [
          "Может быть на любое расстояние, если никому не мешает",
          "Разрешено всегда при включённых поворотниках",
          "Можно на автомагистрали, чтобы не пропустить съезд",
          "Только на короткие расстояния, как дополнение к другому манёвру, и где это не запрещено",
        ],
        explanation:
          "Движение задним ходом используется как дополнение к другому манёвру (например, парковке) и на коротких дистанциях. На автомагистрали и скоростной автодороге полностью запрещено. Как штатный способ движения — никогда.",
        optionRationales: [
          "«Любое расстояние» без ограничений — нарушение; задним ходом — исключение, а не норма.",
          "Одни поворотники не разрешают; манёвр имеет строгие условия.",
          "На автомагистрали и скоростной автодороге задний ход прямо запрещён, даже если проехали съезд.",
          "",
        ],
      },
    },
  },
  {
    id: "manual-t11-12",
    section: "others",
    correctIndex: 1,
    source: SOURCE,
    translations: {
      es: {
        text: "¿En cuál de los siguientes lugares está PROHIBIDO estacionar (parking)?",
        options: [
          "En un solar sin señalizar dentro de una urbanización privada",
          "Sobre un paso de peatones o en una curva sin visibilidad",
          "En una zona azul pagando el ticket",
          "En un aparcamiento subterráneo público",
        ],
        explanation:
          "Está prohibido estacionar en pasos de peatones, curvas o cambios de rasante sin visibilidad, delante de vados, en carril bici, en zonas reservadas y en cualquier lugar donde se obstaculice la circulación o se ponga en peligro a otros.",
        optionRationales: [
          "Un solar privado sin señalización no es vía pública; se rige por las normas de la urbanización, no la DGT.",
          "",
          "En zona azul pagando el ticket es exactamente el uso previsto de esa zona.",
          "Un aparcamiento subterráneo público es un lugar habilitado; nada lo prohíbe.",
        ],
      },
      en: {
        text: "Which of these places is PARKING prohibited?",
        options: [
          "On a private-estate plot with no signs",
          "On a pedestrian crossing or on a blind curve",
          "In a blue zone with a paid ticket",
          "In a public underground car park",
        ],
        explanation:
          "Parking is forbidden on pedestrian crossings, blind curves or crests, in front of driveways, in bike lanes, in reserved zones and anywhere it obstructs traffic or endangers others.",
        optionRationales: [
          "A private-estate plot with no signs isn't a public road; the estate's own rules apply, not the DGT's.",
          "",
          "Blue zone with a paid ticket is exactly the intended use.",
          "A public underground car park is a designated place; nothing forbids it.",
        ],
      },
      ru: {
        text: "В каком из мест ЗАПРЕЩЕНО стоять на парковке?",
        options: [
          "На пустыре без разметки внутри частного посёлка",
          "На пешеходном переходе или на закрытом повороте",
          "В синей зоне с оплаченным талоном",
          "На общественной подземной парковке",
        ],
        explanation:
          "Запрещена парковка на пешеходных переходах, на закрытых поворотах и подъёмах, перед выездами (vados), на велополосах, в резервированных зонах и там, где мешает движению или создаёт опасность.",
        optionRationales: [
          "Пустырь в частном посёлке — не публичная дорога; действуют правила посёлка, не DGT.",
          "",
          "Синяя зона с оплаченным талоном — это её штатное использование.",
          "Общественная подземная парковка — специально для этого; нет запрета.",
        ],
      },
    },
  },
  {
    id: "manual-t11-13",
    section: "others",
    correctIndex: 2,
    source: SOURCE,
    translations: {
      es: {
        text: "Al girar a la derecha en un cruce debes…",
        options: [
          "Situarte lo más a la izquierda posible antes de girar",
          "Girar rápido para no molestar",
          "Situarte cerca del borde derecho, señalizar con antelación y ceder el paso a peatones y ciclistas que crucen",
          "No usar el intermitente para evitar confundir",
        ],
        explanation:
          "Antes de girar a la derecha, sitúate cerca del borde derecho, señaliza con antelación, reduce la velocidad y cede el paso a peatones y ciclistas que crucen la vía a la que entras.",
        optionRationales: [
          "Situarte a la izquierda antes de girar a la derecha es exactamente lo contrario y peligroso para los ciclistas por la derecha.",
          "«Girar rápido» impide observar peatones y ciclistas y aumenta el riesgo de vuelco.",
          "",
          "No señalizar es infracción y confunde más que señalizar bien con antelación.",
        ],
      },
      en: {
        text: "When turning right at a junction you must…",
        options: [
          "Position yourself as far left as possible before turning",
          "Turn fast so you don't get in the way",
          "Move close to the right edge, signal early and give way to pedestrians and cyclists crossing",
          "Skip the indicator to avoid confusion",
        ],
        explanation:
          "Before turning right, move close to the right edge, signal early, slow down and give way to pedestrians and cyclists crossing the road you're entering.",
        optionRationales: [
          "Positioning left before a right turn is the opposite and dangerous for cyclists on your right.",
          "'Turning fast' prevents you noticing pedestrians and cyclists and increases roll-over risk.",
          "",
          "Not signalling is an offence and confuses more than signalling early.",
        ],
      },
      ru: {
        text: "При повороте направо на перекрёстке нужно…",
        options: [
          "Занять крайнее левое положение перед поворотом",
          "Свернуть быстро, чтобы не мешать",
          "Держаться правого края, заранее сигнализировать и уступить пешеходам и велосипедистам",
          "Не включать поворотник, чтобы не путать",
        ],
        explanation:
          "Перед поворотом направо — занять крайнее правое положение, заранее сигнализировать, снизить скорость и уступить пешеходам и велосипедистам, пересекающим дорогу, на которую поворачиваете.",
        optionRationales: [
          "Заезжать налево перед поворотом направо — противоположность и опасно для велосипедистов справа.",
          "«Быстро свернуть» не даёт заметить пешеходов и велосипедистов и увеличивает риск опрокидывания.",
          "",
          "Без сигнала — нарушение и путаницы больше, чем при заранее включённом поворотнике.",
        ],
      },
    },
  },
  {
    id: "manual-t11-14",
    section: "others",
    correctIndex: 0,
    source: SOURCE,
    translations: {
      es: {
        text: "Si tu vehículo se avería en la calzada, ¿qué debes hacer?",
        options: [
          "Encender los intermitentes de emergencia, colocar la señal V-16 (o triángulos si no dispones de V-16) y usar chaleco reflectante al salir",
          "Salir corriendo del vehículo sin señalizar",
          "Dejar el coche en la calzada y volver a por él al día siguiente",
          "Empujarlo hasta el arcén y quedarte dentro sin luces",
        ],
        explanation:
          "Averiado: intermitentes de emergencia, señal V-16 (obligatoria desde 2026) o triángulos si aún la usas, chaleco reflectante al salir, y desplaza el vehículo al arcén si es posible. Si no, sal por la puerta más segura y ponte fuera de la calzada tras la barrera.",
        optionRationales: [
          "",
          "Salir sin señalizar te expone a un atropello; primero se avisa a los demás.",
          "Dejar el coche en la calzada crea un obstáculo peligroso; hay que retirarlo y señalizar.",
          "En el arcén sin luces por la noche es peligrosísimo; los intermitentes deben quedar encendidos.",
        ],
      },
      en: {
        text: "If your vehicle breaks down on the roadway, you should…",
        options: [
          "Turn on hazards, place the V-16 (or triangles if no V-16) and put on the reflective vest before getting out",
          "Get out fast without any warning",
          "Leave the car in the roadway and come back for it tomorrow",
          "Push it to the shoulder and sit inside with no lights",
        ],
        explanation:
          "Breakdown: hazards on, V-16 signal (mandatory from 2026) or triangles if still using them, reflective vest before exiting, and move the vehicle to the shoulder if possible. Otherwise, exit through the safest door and go behind the barrier, off the roadway.",
        optionRationales: [
          "",
          "Getting out unwarned exposes you to a hit; first warn others.",
          "Leaving the car in the roadway creates a dangerous obstacle; you must move it and signal.",
          "On the shoulder with no lights at night is extremely dangerous; hazards must stay on.",
        ],
      },
      ru: {
        text: "Если машина сломалась на проезжей части, нужно…",
        options: [
          "Включить аварийку, установить сигнал V-16 (или треугольники, если V-16 нет) и надеть светоотражающий жилет перед выходом",
          "Быстро выскочить без предупреждения",
          "Оставить машину на проезжей части и вернуться завтра",
          "Толкнуть на обочину и сидеть внутри без света",
        ],
        explanation:
          "Поломка: аварийка, сигнал V-16 (обязателен с 2026) или треугольники, если ещё используются, жилет перед выходом, по возможности откатить на обочину. Если нет — выйти в самую безопасную сторону и уйти за отбойник, с проезжей части.",
        optionRationales: [
          "",
          "Выйти без предупреждения — попасть под наезд; сначала предупреждают.",
          "Оставлять машину на проезжей — опасная помеха; нужно откатить и обозначить.",
          "На обочине без света ночью крайне опасно; аварийка должна работать.",
        ],
      },
    },
  },
  {
    id: "manual-t11-15",
    section: "others",
    correctIndex: 1,
    source: SOURCE,
    translations: {
      es: {
        text: "En autopista o autovía, para salir por una vía de deceleración debes…",
        options: [
          "Frenar bruscamente en el carril principal antes de la salida",
          "Señalizar con antelación, incorporarte al carril de deceleración y frenar dentro de él",
          "Cambiar de carril en el último momento sin señalizar",
          "Detenerte en el arcén antes de la salida",
        ],
        explanation:
          "Para salir de autopista/autovía: señaliza con antelación, incorpórate al carril de deceleración y solo entonces reduce la velocidad dentro de él, sin frenar en el carril principal.",
        optionRationales: [
          "Frenar en el carril principal provoca alcances por detrás; hay que reducir dentro del carril de deceleración.",
          "",
          "Cambiar de carril sin señalizar en el último momento es infracción y muy peligroso.",
          "Detenerse en el arcén no es la salida; puede provocar accidente y multa.",
        ],
      },
      en: {
        text: "On a motorway/dual carriageway, to leave via a deceleration lane you must…",
        options: [
          "Brake hard in the main lane before the exit",
          "Signal early, join the deceleration lane and brake inside it",
          "Change lanes at the last moment without signalling",
          "Stop on the hard shoulder before the exit",
        ],
        explanation:
          "To leave a motorway: signal early, join the deceleration lane and only then slow down inside it — never brake in the main lane.",
        optionRationales: [
          "Braking in the main lane causes rear-end crashes; slow down inside the deceleration lane.",
          "",
          "Last-moment lane changes without signalling are an offence and very dangerous.",
          "Stopping on the shoulder isn't the exit; risks a crash and a fine.",
        ],
      },
      ru: {
        text: "Чтобы съехать с автомагистрали/скоростной по полосе замедления, нужно…",
        options: [
          "Резко тормозить на основной полосе перед съездом",
          "Заранее сигнализировать, перейти на полосу замедления и тормозить уже на ней",
          "Перестроиться в последний момент без сигнала",
          "Остановиться на обочине перед съездом",
        ],
        explanation:
          "Для съезда: заранее сигнализировать, перестроиться на полосу замедления и только там снижать скорость — не тормозить на основной полосе.",
        optionRationales: [
          "Торможение на основной полосе — риск удара сзади; сбрасывать скорость нужно на полосе замедления.",
          "",
          "Перестроение в последний момент без сигнала — нарушение и опасно.",
          "Остановка на обочине — не съезд; чревато ДТП и штрафом.",
        ],
      },
    },
  },
];
