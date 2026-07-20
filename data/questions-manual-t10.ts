import type { Question } from "@/lib/types";

// DGT Manual Permiso B (Lectura Fácil, 2024), Tema 10 — Velocidad y distancias.

const SOURCE = "DGT Manual Permiso B (Lectura Fácil, 2024), Tema 10";

export const QUESTIONS_MANUAL_T10: Question[] = [
  {
    id: "manual-t10-01",
    section: "driving_conditions",
    correctIndex: 2,
    source: SOURCE,
    translations: {
      es: {
        text: "El manual distingue cuatro tipos de velocidad. ¿Cuáles son?",
        options: [
          "Baja, media, alta y crucero",
          "Legal, real, medida y calculada",
          "Máxima, mínima, inadecuada y adecuada",
          "Urbana, interurbana, autopista y crucero",
        ],
        explanation:
          "Los cuatro tipos son: velocidad máxima, velocidad mínima, velocidad inadecuada y velocidad adecuada.",
        optionRationales: [
          "Es una descripción cualitativa; no es la clasificación oficial de la DGT.",
          "Son categorías de medida, no tipos de velocidad relevantes para conducir.",
          "",
          "Estos son tipos de VÍA, no tipos de velocidad.",
        ],
      },
      en: {
        text: "The manual distinguishes four types of speed. Which are they?",
        options: [
          "Low, medium, high and cruise",
          "Legal, actual, measured and calculated",
          "Maximum, minimum, unsuitable and suitable",
          "Urban, interurban, motorway and cruise",
        ],
        explanation:
          "The four types are: maximum speed, minimum speed, unsuitable speed and suitable speed.",
        optionRationales: [
          "Qualitative description; not DGT's official classification.",
          "These are measurement categories, not driving-relevant speed types.",
          "",
          "These are ROAD types, not speed types.",
        ],
      },
      ru: {
        text: "В руководстве выделяются четыре типа скорости. Какие?",
        options: [
          "Низкая, средняя, высокая и крейсерская",
          "Законная, фактическая, измеренная и расчётная",
          "Максимальная, минимальная, ненадлежащая и надлежащая",
          "Городская, загородная, автомагистральная и крейсерская",
        ],
        explanation:
          "Четыре типа: максимальная, минимальная, ненадлежащая (inadecuada) и надлежащая (adecuada).",
        optionRationales: [
          "Качественное описание; не официальная классификация DGT.",
          "Это категории измерения, а не типы скорости для вождения.",
          "",
          "Это типы ДОРОГ, а не типы скорости.",
        ],
      },
    },
  },
  {
    id: "manual-t10-02",
    section: "driving_conditions",
    correctIndex: 1,
    source: SOURCE,
    translations: {
      es: {
        text: "Circular a 70 km/h por una carretera con placas de hielo (donde 70 km/h estaría dentro del límite) es un ejemplo de…",
        options: [
          "Velocidad adecuada",
          "Velocidad inadecuada (o excesiva por circunstancias)",
          "Velocidad mínima",
          "Velocidad anormalmente reducida",
        ],
        explanation:
          "Velocidad inadecuada: la velocidad está dentro de los límites pero no es adecuada por las condiciones (hielo, lluvia, niebla, mal estado de la vía, etc.).",
        optionRationales: [
          "70 km/h con hielo NO es adecuada, aunque respete el límite legal.",
          "",
          "Velocidad mínima se refiere al límite inferior de la vía, no al caso del enunciado.",
          "«Anormalmente reducida» es ir por DEBAJO del mínimo; aquí el problema es lo opuesto.",
        ],
      },
      en: {
        text: "Driving at 70 km/h on a road with ice patches (when 70 km/h is within the limit) is an example of…",
        options: [
          "Suitable speed",
          "Unsuitable / excessive-for-conditions speed",
          "Minimum speed",
          "Abnormally low speed",
        ],
        explanation:
          "Unsuitable speed: within the legal limit but not right for the conditions (ice, rain, fog, road state, etc.).",
        optionRationales: [
          "70 km/h on ice is NOT suitable, even if the legal limit permits it.",
          "",
          "Minimum speed is about the road's lower bound, not this situation.",
          "'Abnormally low' means going BELOW the minimum; here the issue is the opposite.",
        ],
      },
      ru: {
        text: "Езда 70 км/ч по дороге с гололёдом (при разрешённых 70 км/ч) — это пример…",
        options: [
          "Надлежащей скорости",
          "Ненадлежащей / чрезмерной по условиям",
          "Минимальной скорости",
          "Аномально низкой скорости",
        ],
        explanation:
          "Ненадлежащая скорость — в пределах лимита, но не соответствует условиям (гололёд, дождь, туман, состояние дороги и т. п.).",
        optionRationales: [
          "70 км/ч на льду — НЕ надлежащая, даже если это в рамках лимита.",
          "",
          "Минимальная скорость — это нижний предел дороги, не эта ситуация.",
          "«Аномально низкая» — это НИЖЕ минимума; тут проблема обратная.",
        ],
      },
    },
  },
  {
    id: "manual-t10-03",
    section: "driving_conditions",
    correctIndex: 0,
    source: SOURCE,
    termIds: ["paso_a_nivel", "glorieta"],
    translations: {
      es: {
        text: "Al acercarse a un paso a nivel, una rotonda o un cruce en el que no tienes prioridad, ¿cuál es la velocidad máxima?",
        options: ["50 km/h", "70 km/h", "30 km/h", "20 km/h"],
        explanation:
          "Al acercarse a pasos a nivel, rotondas o cruces sin prioridad, la velocidad máxima es 50 km/h.",
        optionRationales: [
          "",
          "70 km/h es demasiado: el límite específico de aproximación es 50.",
          "30 km/h corresponde a vías urbanas de un carril por sentido, no a esta regla.",
          "20 km/h corresponde a vías con calzada y acera al mismo nivel.",
        ],
      },
      en: {
        text: "When approaching a level crossing, a roundabout or a junction where you don't have priority, what is the maximum speed?",
        options: ["50 km/h", "70 km/h", "30 km/h", "20 km/h"],
        explanation:
          "Approaching level crossings, roundabouts or unpriority junctions the maximum speed is 50 km/h.",
        optionRationales: [
          "",
          "70 km/h is too high; the specific approach limit is 50.",
          "30 km/h is the urban single-lane-per-direction limit, not this rule.",
          "20 km/h is the shared-platform (road-and-pavement same level) limit.",
        ],
      },
      ru: {
        text: "При приближении к ж/д переезду, кольцевой развязке или перекрёстку, где у вас нет преимущества, максимальная скорость…",
        options: ["50 км/ч", "70 км/ч", "30 км/ч", "20 км/ч"],
        explanation:
          "При приближении к ж/д переезду, кольцу или перекрёстку без преимущества максимально — 50 км/ч.",
        optionRationales: [
          "",
          "70 км/ч слишком много; специальный лимит приближения — 50.",
          "30 км/ч — это городской лимит на дорогах с одной полосой в направлении.",
          "20 км/ч — лимит на одноуровневой улице (проезжая часть и тротуар на одном уровне).",
        ],
      },
    },
  },
  {
    id: "manual-t10-04",
    section: "driving_conditions",
    correctIndex: 3,
    source: SOURCE,
    termIds: ["autopista", "autovia"],
    translations: {
      es: {
        text: "En autopista o autovía, la velocidad máxima genérica para un turismo es…",
        options: ["100 km/h", "110 km/h", "90 km/h", "120 km/h"],
        explanation:
          "Los turismos y motocicletas tienen una velocidad máxima genérica de 120 km/h en autopista y autovía.",
        optionRationales: [
          "100 km/h es el máximo genérico de los autobuses en autopista, no de los turismos.",
          "110 km/h no es un límite genérico oficial actualmente.",
          "90 km/h es el máximo de los camiones y vehículos > 3.500 kg en autopista.",
          "",
        ],
      },
      en: {
        text: "On a motorway (autopista / autovía) the general maximum speed for a car is…",
        options: ["100 km/h", "110 km/h", "90 km/h", "120 km/h"],
        explanation:
          "Cars and motorcycles have a general maximum of 120 km/h on autopista and autovía.",
        optionRationales: [
          "100 km/h is the bus limit on motorway, not the car limit.",
          "110 km/h isn't a current official generic limit.",
          "90 km/h is for lorries and vehicles over 3,500 kg on motorway.",
          "",
        ],
      },
      ru: {
        text: "На автомагистрали (autopista/autovía) общий максимальный лимит для легкового автомобиля…",
        options: ["100 км/ч", "110 км/ч", "90 км/ч", "120 км/ч"],
        explanation:
          "Общий максимум для легковых машин и мотоциклов на автомагистрали и скоростной автодороге — 120 км/ч.",
        optionRationales: [
          "100 км/ч — это лимит для автобусов, а не для легковых.",
          "110 км/ч — не является действующим официальным лимитом.",
          "90 км/ч — для грузовиков и ТС свыше 3500 кг.",
          "",
        ],
      },
    },
  },
  {
    id: "manual-t10-05",
    section: "driving_conditions",
    correctIndex: 2,
    source: SOURCE,
    translations: {
      es: {
        text: "En autopista, la velocidad máxima genérica para un camión es…",
        options: ["120 km/h", "100 km/h", "90 km/h", "80 km/h"],
        explanation:
          "Los camiones, tractocamiones, furgonetas, autocaravanas de más de 3.500 kg, vehículos articulados o con remolque tienen 90 km/h como máximo genérico en autopista y autovía.",
        optionRationales: [
          "120 km/h es el límite del turismo, no del camión.",
          "100 km/h corresponde a los autobuses.",
          "",
          "80 km/h es el límite del camión en carretera convencional, no en autopista.",
        ],
      },
      en: {
        text: "On a motorway, the general maximum speed for a lorry (truck) is…",
        options: ["120 km/h", "100 km/h", "90 km/h", "80 km/h"],
        explanation:
          "Lorries, tractor-lorries, vans, motorhomes over 3,500 kg, articulated vehicles and vehicles with trailers have a 90 km/h max on autopista/autovía.",
        optionRationales: [
          "120 km/h is the car limit, not the lorry limit.",
          "100 km/h is the bus limit.",
          "",
          "80 km/h is the lorry limit on conventional roads, not motorway.",
        ],
      },
      ru: {
        text: "На автомагистрали общий максимальный лимит для грузовика…",
        options: ["120 км/ч", "100 км/ч", "90 км/ч", "80 км/ч"],
        explanation:
          "Для грузовиков, тягачей, фургонов, домов на колёсах > 3500 кг, автопоездов и авто с прицепом — 90 км/ч на автомагистрали.",
        optionRationales: [
          "120 км/ч — лимит легковых, не грузовиков.",
          "100 км/ч — лимит автобусов.",
          "",
          "80 км/ч — лимит грузовиков на обычной дороге, а не на автомагистрали.",
        ],
      },
    },
  },
  {
    id: "manual-t10-06",
    section: "driving_conditions",
    correctIndex: 1,
    source: SOURCE,
    translations: {
      es: {
        text: "En autopista o autovía, la velocidad máxima genérica para un autobús es…",
        options: ["120 km/h", "100 km/h", "90 km/h", "80 km/h"],
        explanation:
          "Los autobuses, vehículos derivados de turismos y mixtos adaptables tienen 100 km/h como máximo genérico en autopista y autovía.",
        optionRationales: [
          "120 km/h es el límite del turismo, no del autobús.",
          "",
          "90 km/h corresponde a los camiones y vehículos > 3.500 kg.",
          "80 km/h es el límite del camión en convencional.",
        ],
      },
      en: {
        text: "On a motorway, the general maximum speed for a bus is…",
        options: ["120 km/h", "100 km/h", "90 km/h", "80 km/h"],
        explanation:
          "Buses, car-derived vehicles and adaptable-mix vehicles have a 100 km/h max on autopista/autovía.",
        optionRationales: [
          "120 km/h is the car limit, not the bus limit.",
          "",
          "90 km/h is for lorries and vehicles over 3,500 kg.",
          "80 km/h is the lorry limit on conventional roads.",
        ],
      },
      ru: {
        text: "На автомагистрали общий максимум для автобуса…",
        options: ["120 км/ч", "100 км/ч", "90 км/ч", "80 км/ч"],
        explanation:
          "Автобусы и производные от легковых имеют максимум 100 км/ч на автомагистрали.",
        optionRationales: [
          "120 км/ч — лимит легковых, не автобусов.",
          "",
          "90 км/ч — для грузовиков и ТС > 3500 кг.",
          "80 км/ч — лимит грузовиков на обычной дороге.",
        ],
      },
    },
  },
  {
    id: "manual-t10-07",
    section: "driving_conditions",
    correctIndex: 3,
    source: SOURCE,
    translations: {
      es: {
        text: "¿Cuál de estas NO es un tipo de distancia mencionada en el manual?",
        options: [
          "Distancia de reacción",
          "Distancia de frenado",
          "Separación lateral",
          "Distancia de rodaje",
        ],
        explanation:
          "El manual menciona: distancia de reacción, distancia de frenado, distancia de detención, separación lateral y distancia de seguridad. La 'distancia de rodaje' no es una de ellas.",
        optionRationales: [
          "Sí es un tipo oficial: el espacio recorrido desde ver el peligro hasta empezar a frenar.",
          "Sí es oficial: el espacio recorrido desde pisar el freno hasta detenerse.",
          "Sí es oficial: el espacio lateral con otros vehículos y usuarios (1,5 m con ciclistas, por ejemplo).",
          "",
        ],
      },
      en: {
        text: "Which of these is NOT a type of distance mentioned in the manual?",
        options: [
          "Reaction distance",
          "Braking distance",
          "Lateral clearance",
          "Rolling distance",
        ],
        explanation:
          "The manual lists: reaction distance, braking distance, stopping distance, lateral clearance and safety distance. 'Rolling distance' is not one of them.",
        optionRationales: [
          "This is official: distance travelled between seeing the hazard and starting to brake.",
          "Official: distance from pressing the brake to fully stopping.",
          "Official: lateral space to other users (e.g. 1.5 m from cyclists).",
          "",
        ],
      },
      ru: {
        text: "Какое расстояние НЕ упомянуто в руководстве?",
        options: [
          "Дистанция реакции",
          "Тормозной путь",
          "Боковой интервал",
          "Дистанция обкатки",
        ],
        explanation:
          "В руководстве: дистанция реакции, тормозной путь, полный остановочный путь, боковой интервал и безопасная дистанция. «Дистанция обкатки» не относится к ним.",
        optionRationales: [
          "Это официальный тип: путь от обнаружения опасности до начала торможения.",
          "Официальный: путь от нажатия тормоза до полной остановки.",
          "Официальный: боковой интервал с другими участниками (1,5 м с велосипедистом и т.п.).",
          "",
        ],
      },
    },
  },
  {
    id: "manual-t10-08",
    section: "driving_conditions",
    correctIndex: 0,
    source: SOURCE,
    translations: {
      es: {
        text: "Ir a una velocidad claramente inferior a la mínima permitida se considera…",
        options: [
          "Velocidad anormalmente reducida",
          "Velocidad adecuada",
          "Velocidad óptima",
          "Solo un consejo, no infracción",
        ],
        explanation:
          "Cuando un vehículo va a una velocidad menor a la mínima permitida se dice que lleva una velocidad anormalmente reducida (por ejemplo, 40 km/h en autopista donde el mínimo es 60).",
        optionRationales: [
          "",
          "Ir por debajo del mínimo nunca es «adecuada»; interfiere con el tráfico normal.",
          "No existe la categoría oficial «velocidad óptima» en el reglamento.",
          "Es una infracción real, no un consejo.",
        ],
      },
      en: {
        text: "Driving clearly below the minimum permitted speed is considered…",
        options: [
          "Abnormally low speed",
          "Suitable speed",
          "Optimal speed",
          "Just advice, not an offence",
        ],
        explanation:
          "Driving below the minimum permitted speed is 'abnormally low speed' (e.g. 40 km/h on a motorway with a 60 km/h minimum).",
        optionRationales: [
          "",
          "Below the minimum is never 'suitable'; it interferes with normal traffic.",
          "There's no official 'optimal speed' category in the regulations.",
          "It's a real offence, not advice.",
        ],
      },
      ru: {
        text: "Движение значительно ниже минимально допустимой скорости считается…",
        options: [
          "Аномально низкой скоростью",
          "Надлежащей скоростью",
          "Оптимальной скоростью",
          "Просто советом, а не нарушением",
        ],
        explanation:
          "Движение ниже минимально разрешённой скорости — «аномально низкая скорость» (например, 40 км/ч на автомагистрали с минимумом 60).",
        optionRationales: [
          "",
          "Ниже минимума никогда не «надлежащая»; мешает нормальному потоку.",
          "Категории «оптимальная скорость» в правилах не существует.",
          "Это реальное нарушение, а не совет.",
        ],
      },
    },
  },
  {
    id: "manual-t10-09",
    section: "driving_conditions",
    correctIndex: 2,
    source: SOURCE,
    translations: {
      es: {
        text: "¿Cuál de estas situaciones NO obliga a reducir la velocidad?",
        options: [
          "Acercarse a un autobús parado con niños",
          "Cruzarte con un camión en una curva estrecha",
          "Circular por una autopista despejada de día",
          "Deslumbramiento por las luces de otro vehículo",
        ],
        explanation:
          "El manual obliga a reducir en presencia de peatones, ciclistas, vehículos parados, autobuses con niños, cruces sin prioridad, deslumbramiento, mala visibilidad, etc. Una autopista despejada de día no lo requiere de por sí.",
        optionRationales: [
          "Sí obliga: los niños pueden bajarse y cruzar; máximo cuidado.",
          "Sí obliga: espacio lateral limitado en curva estrecha.",
          "",
          "Sí obliga: al perder visión hay que reducir hasta recuperar visibilidad.",
        ],
      },
      en: {
        text: "Which of these situations does NOT require slowing down?",
        options: [
          "Approaching a stopped bus with children",
          "Crossing paths with a lorry on a narrow curve",
          "Driving on a clear motorway during the day",
          "Being dazzled by another vehicle's lights",
        ],
        explanation:
          "The manual requires reducing speed near pedestrians, cyclists, stopped vehicles, buses with children, unpriority junctions, dazzling lights, poor visibility, etc. A clear daytime motorway on its own does not.",
        optionRationales: [
          "Requires slowing: children may get off and cross; max caution.",
          "Requires slowing: limited lateral space on a narrow curve.",
          "",
          "Requires slowing: when vision drops you slow down until visibility returns.",
        ],
      },
      ru: {
        text: "В какой из ситуаций НЕ требуется снижать скорость?",
        options: [
          "Приближение к остановившемуся автобусу с детьми",
          "Разъезд с грузовиком на узком повороте",
          "Движение по свободной автомагистрали днём",
          "Ослепление светом встречного автомобиля",
        ],
        explanation:
          "Руководство требует снижать скорость при пешеходах, велосипедистах, остановившихся авто, автобусах с детьми, перекрёстках без преимущества, ослеплении, плохой видимости. Свободная автомагистраль днём — нет.",
        optionRationales: [
          "Требуется снижать: дети могут выйти и переходить; максимальная осторожность.",
          "Требуется: ограниченный боковой интервал на узком повороте.",
          "",
          "Требуется: при потере видимости снижают скорость до восстановления обзора.",
        ],
      },
    },
  },
];
