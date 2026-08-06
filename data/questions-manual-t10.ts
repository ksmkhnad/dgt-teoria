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
  {
    id: "manual-t10-10",
    section: "driving_conditions",
    correctIndex: 1,
    source: SOURCE,
    termIds: ["via_urbana"],
    translations: {
      es: {
        text: "En vía urbana con calzada y acera al mismo nivel (plataforma única), la velocidad máxima es…",
        options: ["30 km/h", "20 km/h", "40 km/h", "50 km/h"],
        explanation:
          "Plataforma única (acera y calzada al mismo nivel) = 20 km/h. Es el límite urbano más bajo, para proteger a los peatones que comparten el espacio.",
        optionRationales: [
          "30 km/h aplica a calles urbanas con 1 carril por sentido, no a plataforma única.",
          "",
          "40 km/h no es un límite urbano oficial.",
          "50 km/h aplica a calles urbanas con 2+ carriles por sentido.",
        ],
      },
      en: {
        text: "On an urban road with roadway and pavement at the same level (shared platform), the max speed is…",
        options: ["30 km/h", "20 km/h", "40 km/h", "50 km/h"],
        explanation:
          "Shared platform (pavement and roadway at same level) = 20 km/h. It's the lowest urban limit, to protect pedestrians sharing the space.",
        optionRationales: [
          "30 km/h is for urban streets with 1 lane per direction, not shared platform.",
          "",
          "40 km/h isn't an official urban limit.",
          "50 km/h is for urban streets with 2+ lanes per direction.",
        ],
      },
      ru: {
        text: "На городской улице с проезжей частью и тротуаром на одном уровне (общая платформа) максимум скорости…",
        options: ["30 км/ч", "20 км/ч", "40 км/ч", "50 км/ч"],
        explanation:
          "Общая платформа (тротуар и дорога на одном уровне) = 20 км/ч. Самый низкий городской лимит, защищает пешеходов.",
        optionRationales: [
          "30 км/ч — для городских улиц с 1 полосой в направлении, не для общей платформы.",
          "",
          "40 км/ч — не официальный городской лимит.",
          "50 км/ч — для городских улиц с 2+ полосами в направлении.",
        ],
      },
    },
  },
  {
    id: "manual-t10-11",
    section: "driving_conditions",
    correctIndex: 3,
    source: SOURCE,
    termIds: ["travesia"],
    translations: {
      es: {
        text: "En una travesía (tramo de carretera que atraviesa un pueblo), la velocidad máxima general es…",
        options: ["30 km/h", "70 km/h", "90 km/h", "50 km/h"],
        explanation:
          "En travesía la velocidad máxima genérica es 50 km/h, sin importar cuántos carriles tenga. Es una carretera interurbana pero cruza un poblado.",
        optionRationales: [
          "30 km/h es el límite urbano de calle con 1 carril por sentido, no de travesía.",
          "70 km/h no es un límite oficial.",
          "90 km/h es el máximo en carretera convencional (fuera del poblado).",
          "",
        ],
      },
      en: {
        text: "On a travesía (interurban road passing through a town), the general maximum speed is…",
        options: ["30 km/h", "70 km/h", "90 km/h", "50 km/h"],
        explanation:
          "On a travesía the general maximum is 50 km/h regardless of lane count. It's an interurban road but goes through a built-up area.",
        optionRationales: [
          "30 km/h is the urban limit for a single-lane-per-direction street, not travesía.",
          "70 km/h isn't an official limit.",
          "90 km/h is the max on conventional (out-of-town) roads.",
          "",
        ],
      },
      ru: {
        text: "На travesía (загородная дорога, проходящая через посёлок) общий максимум скорости…",
        options: ["30 км/ч", "70 км/ч", "90 км/ч", "50 км/ч"],
        explanation:
          "На travesía общий максимум — 50 км/ч независимо от числа полос. Загородная дорога, но проходит через населённый пункт.",
        optionRationales: [
          "30 км/ч — городской лимит для одной полосы в направлении, не для travesía.",
          "70 км/ч — не официальный лимит.",
          "90 км/ч — максимум на обычной загородной дороге.",
          "",
        ],
      },
    },
  },
  {
    id: "manual-t10-12",
    section: "driving_conditions",
    correctIndex: 2,
    source: SOURCE,
    termIds: ["autopista"],
    translations: {
      es: {
        text: "¿Cuál es la velocidad MÍNIMA para circular por autopista o autovía?",
        options: ["40 km/h", "50 km/h", "60 km/h", "80 km/h"],
        explanation:
          "El mínimo en autopista y autovía es 60 km/h. Por debajo de esa velocidad se considera «anormalmente reducida» y no está permitido circular.",
        optionRationales: [
          "40 km/h es demasiado bajo; provocaría alcances por detrás.",
          "50 km/h es el mínimo urbano típico, no de autopista.",
          "",
          "80 km/h es más alto que el mínimo; es la mitad del máximo genérico de turismo en autopista.",
        ],
      },
      en: {
        text: "What is the MINIMUM speed on a motorway or dual carriageway?",
        options: ["40 km/h", "50 km/h", "60 km/h", "80 km/h"],
        explanation:
          "Minimum on motorway/dual carriageway is 60 km/h. Below that is 'abnormally low' and not allowed.",
        optionRationales: [
          "40 km/h is too low; it would cause rear-end crashes.",
          "50 km/h is typical urban limit, not motorway minimum.",
          "",
          "80 km/h is above the minimum; roughly half the car's generic max on motorway.",
        ],
      },
      ru: {
        text: "Какой МИНИМАЛЬНЫЙ скоростной лимит на автомагистрали?",
        options: ["40 км/ч", "50 км/ч", "60 км/ч", "80 км/ч"],
        explanation:
          "Минимум на автомагистрали и скоростной автодороге — 60 км/ч. Ниже — «аномально низкая», ехать запрещено.",
        optionRationales: [
          "40 км/ч слишком мало; риск наезда сзади.",
          "50 км/ч — типичный городской лимит, не минимум магистрали.",
          "",
          "80 км/ч выше минимума; примерно половина общего лимита для легковых.",
        ],
      },
    },
  },
  {
    id: "manual-t10-13",
    section: "driving_conditions",
    correctIndex: 1,
    source: SOURCE,
    translations: {
      es: {
        text: "En carretera convencional, la velocidad máxima genérica para un camión es…",
        options: ["100 km/h", "80 km/h", "90 km/h", "70 km/h"],
        explanation:
          "Camiones, tractocamiones, furgonetas > 3.500 kg, autocaravanas > 3.500 kg y vehículos con remolque: 80 km/h en carretera convencional (90 en autopista).",
        optionRationales: [
          "100 km/h no aplica a camiones; es el máximo urbano-autovía para autobuses.",
          "",
          "90 km/h es el máximo del camión en autopista, no en convencional (el camión siempre 10 km/h menos que turismo).",
          "70 km/h es demasiado bajo; el mínimo genérico para camión.",
        ],
      },
      en: {
        text: "On a conventional road, the general maximum speed for a lorry is…",
        options: ["100 km/h", "80 km/h", "90 km/h", "70 km/h"],
        explanation:
          "Lorries, tractor-lorries, vans > 3,500 kg, motorhomes > 3,500 kg and vehicles with trailer: 80 km/h on conventional road (90 on motorway).",
        optionRationales: [
          "100 km/h doesn't apply to lorries.",
          "",
          "90 km/h is the lorry max on motorway, not conventional (lorry always 10 km/h below cars).",
          "70 km/h is too low; that's not a generic lorry limit.",
        ],
      },
      ru: {
        text: "На обычной загородной дороге общий максимум для грузовика…",
        options: ["100 км/ч", "80 км/ч", "90 км/ч", "70 км/ч"],
        explanation:
          "Грузовики, тягачи, фургоны > 3500 кг, кемперы > 3500 кг и авто с прицепом: 80 км/ч на обычной дороге (90 на автомагистрали).",
        optionRationales: [
          "100 км/ч не относится к грузовикам.",
          "",
          "90 км/ч — предел грузовика на автомагистрали, не на обычной (грузовик всегда на 10 км/ч ниже легковой).",
          "70 км/ч слишком мало; не общий предел грузовика.",
        ],
      },
    },
  },
  {
    id: "manual-t10-14",
    section: "driving_conditions",
    correctIndex: 3,
    source: SOURCE,
    translations: {
      es: {
        text: "En carretera convencional, la velocidad máxima genérica para un autobús es…",
        options: ["70 km/h", "80 km/h", "100 km/h", "90 km/h"],
        explanation:
          "Autobuses, vehículos derivados de turismo y mixtos adaptables: 90 km/h en carretera convencional y 100 km/h en autopista/autovía.",
        optionRationales: [
          "70 km/h no es un límite oficial para autobús.",
          "80 km/h es el límite del camión en convencional, no del autobús.",
          "100 km/h es el máximo del autobús en autopista, no en convencional.",
          "",
        ],
      },
      en: {
        text: "On a conventional road, the general max for a bus is…",
        options: ["70 km/h", "80 km/h", "100 km/h", "90 km/h"],
        explanation:
          "Buses, car-derived and mixed-adaptable vehicles: 90 km/h on conventional road, 100 km/h on motorway.",
        optionRationales: [
          "70 km/h isn't an official bus limit.",
          "80 km/h is the lorry limit on conventional roads, not bus.",
          "100 km/h is the bus max on motorway, not conventional.",
          "",
        ],
      },
      ru: {
        text: "На обычной загородной дороге общий максимум для автобуса…",
        options: ["70 км/ч", "80 км/ч", "100 км/ч", "90 км/ч"],
        explanation:
          "Автобусы и производные от легковых: 90 км/ч на обычной дороге, 100 км/ч на автомагистрали.",
        optionRationales: [
          "70 км/ч — не официальный лимит автобуса.",
          "80 км/ч — лимит грузовика на обычной дороге, не автобуса.",
          "100 км/ч — предел автобуса на автомагистрали, не на обычной.",
          "",
        ],
      },
    },
  },
  {
    id: "manual-t10-15",
    section: "driving_conditions",
    correctIndex: 0,
    source: SOURCE,
    translations: {
      es: {
        text: "Circular a 100 km/h en una carretera donde el máximo permitido es 90 km/h se llama…",
        options: [
          "Exceso de velocidad",
          "Velocidad inadecuada",
          "Velocidad óptima",
          "Velocidad anormalmente reducida",
        ],
        explanation:
          "Cuando el vehículo va más rápido que el máximo permitido, se llama «exceso de velocidad». No confundir con «inadecuada» (dentro del límite pero mala para las condiciones).",
        optionRationales: [
          "",
          "«Inadecuada» es cuando estás DENTRO del límite legal pero es mala idea (hielo, niebla, obras). Aquí ya te pasaste del límite.",
          "«Óptima» no es una categoría oficial en el reglamento.",
          "«Anormalmente reducida» es lo opuesto: ir por DEBAJO del mínimo.",
        ],
      },
      en: {
        text: "Driving at 100 km/h on a road where the max is 90 km/h is called…",
        options: [
          "Speeding (exceso de velocidad)",
          "Unsuitable speed",
          "Optimal speed",
          "Abnormally low speed",
        ],
        explanation:
          "When you exceed the legal max, that's 'exceso de velocidad' (speeding). Don't confuse with 'unsuitable' (within limit but bad for the conditions).",
        optionRationales: [
          "",
          "'Unsuitable' is when you're WITHIN the legal limit but it's a bad idea (ice, fog, works). Here you've already crossed the limit.",
          "'Optimal' isn't an official regulation category.",
          "'Abnormally low' is the opposite: going BELOW the minimum.",
        ],
      },
      ru: {
        text: "Ехать 100 км/ч там, где максимум 90 км/ч — это…",
        options: [
          "Превышение скорости (exceso de velocidad)",
          "Ненадлежащая скорость",
          "Оптимальная скорость",
          "Аномально низкая скорость",
        ],
        explanation:
          "Когда едешь быстрее лимита, это «exceso de velocidad» — превышение. Не путать с «ненадлежащей» (в лимите, но плохо для условий).",
        optionRationales: [
          "",
          "«Ненадлежащая» — когда ты В ПРЕДЕЛАХ лимита, но плохая идея (лёд, туман, работы). Здесь ты уже превысил лимит.",
          "«Оптимальная» — не официальная категория в правилах.",
          "«Аномально низкая» — противоположное: ниже минимума.",
        ],
      },
    },
  },
  {
    id: "manual-t10-16",
    section: "driving_conditions",
    correctIndex: 2,
    source: SOURCE,
    translations: {
      es: {
        text: "Al acercarte a un autobús escolar parado que está subiendo o bajando niños, debes…",
        options: [
          "Continuar a velocidad normal",
          "Acelerar para pasar rápido",
          "Reducir la velocidad y estar preparado para detenerte",
          "Tocar el claxon",
        ],
        explanation:
          "Los niños pueden bajarse del autobús y cruzar sin mirar. Hay que reducir la velocidad y estar listo para parar. Es una de las situaciones de máxima precaución del manual.",
        optionRationales: [
          "A velocidad normal no reaccionas a tiempo si un niño cruza.",
          "Acelerar es exactamente lo contrario de lo que se debe hacer.",
          "",
          "El claxon puede asustar y provocar que el niño se lance a la carretera.",
        ],
      },
      en: {
        text: "Approaching a stopped school bus loading or unloading children, you should…",
        options: [
          "Keep at normal speed",
          "Speed up to pass quickly",
          "Slow down and be ready to stop",
          "Honk the horn",
        ],
        explanation:
          "Kids may get off the bus and cross without looking. Slow down and be ready to stop. One of the manual's max-caution situations.",
        optionRationales: [
          "At normal speed you won't react in time if a child crosses.",
          "Speeding up is exactly the wrong response.",
          "",
          "Honking may startle the child into stepping into traffic.",
        ],
      },
      ru: {
        text: "Подъезжая к остановившемуся школьному автобусу, где дети садятся или выходят, нужно…",
        options: [
          "Ехать с обычной скоростью",
          "Ускориться, чтобы быстрее проехать",
          "Снизить скорость и быть готовым остановиться",
          "Посигналить",
        ],
        explanation:
          "Дети могут выйти из автобуса и перебежать дорогу не глядя. Снижаем скорость, готовы остановиться. Одна из ситуаций максимальной осторожности.",
        optionRationales: [
          "На обычной скорости не успеешь среагировать, если ребёнок побежит.",
          "Ускорение — прямо противоположное правильному действию.",
          "",
          "Клаксон может напугать ребёнка и толкнуть его на проезжую часть.",
        ],
      },
    },
  },
  {
    id: "manual-t10-17",
    section: "driving_conditions",
    correctIndex: 1,
    source: SOURCE,
    translations: {
      es: {
        text: "Un ciclomotor circulando por autopista o autovía…",
        options: [
          "Está permitido si va a más de 45 km/h",
          "Está PROHIBIDO",
          "Está permitido de día",
          "Solo con acompañante",
        ],
        explanation:
          "Los ciclomotores (velocidad máxima 45 km/h) están PROHIBIDOS en autopistas y autovías porque no pueden alcanzar el mínimo de 60 km/h.",
        optionRationales: [
          "Un ciclomotor por definición no supera 45 km/h; si va más rápido ya no es ciclomotor.",
          "",
          "La hora no cambia la regla; siempre prohibido.",
          "Un acompañante no cambia la clase del vehículo ni su velocidad máxima.",
        ],
      },
      en: {
        text: "A moped on a motorway or dual carriageway…",
        options: [
          "Is allowed if it goes above 45 km/h",
          "Is FORBIDDEN",
          "Is allowed during the day",
          "Only with a passenger",
        ],
        explanation:
          "Mopeds (max speed 45 km/h) are FORBIDDEN on motorways/dual carriageways because they can't reach the 60 km/h minimum.",
        optionRationales: [
          "By definition a moped can't exceed 45 km/h; if it does, it's not a moped anymore.",
          "",
          "Time of day doesn't change the rule; always forbidden.",
          "A passenger doesn't change the vehicle class or its max speed.",
        ],
      },
      ru: {
        text: "Мопед на автомагистрали…",
        options: [
          "Разрешён, если едет более 45 км/ч",
          "ЗАПРЕЩЁН",
          "Разрешён днём",
          "Только с пассажиром",
        ],
        explanation:
          "Мопеды (максимум 45 км/ч) ЗАПРЕЩЕНЫ на автомагистрали, потому что не могут набрать минимум 60 км/ч.",
        optionRationales: [
          "По определению мопед не превышает 45 км/ч; если превышает — уже не мопед.",
          "",
          "Время суток не меняет правило; всегда запрещено.",
          "Пассажир не меняет класс ТС и максимальную скорость.",
        ],
      },
    },
  },
  {
    id: "manual-t10-18",
    section: "driving_conditions",
    correctIndex: 3,
    source: SOURCE,
    termIds: ["distancia_frenado"],
    translations: {
      es: {
        text: "Si duplicas la velocidad (por ejemplo, de 50 a 100 km/h), la distancia de frenado…",
        options: [
          "Se duplica también",
          "No cambia",
          "Se reduce a la mitad",
          "Se multiplica aproximadamente por cuatro",
        ],
        explanation:
          "La distancia de frenado crece con el CUADRADO de la velocidad. Al doblar la velocidad, la distancia de frenado se cuadruplica. Por eso el exceso de velocidad es tan peligroso.",
        optionRationales: [
          "Se duplica solo la distancia de REACCIÓN (proporcional a la velocidad). El frenado escala con el cuadrado.",
          "Cambia y mucho; ignorar esto es la causa más común de alcances graves.",
          "Reducirse a la mitad al DUPLICAR la velocidad es imposible físicamente.",
          "",
        ],
      },
      en: {
        text: "If you double your speed (say, from 50 to 100 km/h), the braking distance…",
        options: [
          "Also doubles",
          "Doesn't change",
          "Halves",
          "Multiplies by roughly four",
        ],
        explanation:
          "Braking distance grows with the SQUARE of speed. Doubling the speed quadruples the braking distance. That's why speeding is so dangerous.",
        optionRationales: [
          "Only the REACTION distance doubles (proportional to speed). Braking scales with the square.",
          "It changes a lot; ignoring this is the most common cause of serious rear-end crashes.",
          "Halving braking distance when speed doubles is physically impossible.",
          "",
        ],
      },
      ru: {
        text: "Если удвоить скорость (например, с 50 до 100 км/ч), тормозной путь…",
        options: [
          "Тоже удвоится",
          "Не изменится",
          "Уменьшится вдвое",
          "Умножится примерно в четыре раза",
        ],
        explanation:
          "Тормозной путь растёт как КВАДРАТ скорости. При удвоении скорости тормозной путь увеличивается в 4 раза. Поэтому превышение так опасно.",
        optionRationales: [
          "Удваивается только дистанция РЕАКЦИИ (пропорциональна скорости). Тормозной путь — квадрат.",
          "Меняется, и сильно; игнорирование этого — главная причина серьёзных наездов сзади.",
          "Уменьшить тормозной путь при удвоении скорости физически невозможно.",
          "",
        ],
      },
    },
  },
  {
    id: "manual-t10-19",
    section: "driving_conditions",
    correctIndex: 0,
    source: SOURCE,
    termIds: ["distancia_seguridad"],
    translations: {
      es: {
        text: "Circulando por túnel, la distancia de seguridad recomendada con el vehículo de delante es…",
        options: [
          "Al menos 100 m (150 m para vehículos pesados)",
          "10 m suficientes",
          "50 m siempre",
          "Igual que fuera del túnel",
        ],
        explanation:
          "En túnel la distancia recomendada es 100 m (o 4 segundos), y 150 m (o 6 segundos) para vehículos pesados. En caso de incendio esta distancia salva vidas.",
        optionRationales: [
          "",
          "10 m es peligrosísimo; sin distancia no hay margen de reacción ni de evacuación.",
          "50 m es la referencia para vehículos > 3.500 kg fuera del túnel, no dentro.",
          "En túnel la distancia debe ser MAYOR que fuera; incidencias en túnel son más graves.",
        ],
      },
      en: {
        text: "Inside a tunnel, the recommended following distance is…",
        options: [
          "At least 100 m (150 m for heavy vehicles)",
          "10 m is enough",
          "50 m always",
          "Same as outside the tunnel",
        ],
        explanation:
          "In a tunnel, recommended distance is 100 m (or 4 seconds), and 150 m (6 s) for heavy vehicles. In a tunnel fire this distance saves lives.",
        optionRationales: [
          "",
          "10 m is extremely dangerous; no margin to react or evacuate.",
          "50 m is the reference for > 3,500 kg vehicles outside the tunnel, not inside.",
          "In-tunnel distance must be GREATER than outside; tunnel incidents are more severe.",
        ],
      },
      ru: {
        text: "В тоннеле рекомендуемая дистанция до впереди идущего…",
        options: [
          "Минимум 100 м (150 м для тяжёлых ТС)",
          "10 м достаточно",
          "50 м всегда",
          "Такая же, как вне тоннеля",
        ],
        explanation:
          "В тоннеле — 100 м (или 4 сек), для тяжёлых ТС — 150 м (6 сек). При пожаре в тоннеле эта дистанция спасает жизни.",
        optionRationales: [
          "",
          "10 м крайне опасно; нет запаса для реакции и эвакуации.",
          "50 м — для ТС > 3500 кг ВНЕ тоннеля, не внутри.",
          "В тоннеле дистанция должна быть БОЛЬШЕ, чем снаружи; инциденты в тоннеле опаснее.",
        ],
      },
    },
  },
];
