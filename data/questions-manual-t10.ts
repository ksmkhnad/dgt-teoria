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
      },
      en: {
        text: "When approaching a level crossing, a roundabout or a junction where you don't have priority, what is the maximum speed?",
        options: ["50 km/h", "70 km/h", "30 km/h", "20 km/h"],
        explanation:
          "Approaching level crossings, roundabouts or unpriority junctions the maximum speed is 50 km/h.",
      },
      ru: {
        text: "При приближении к ж/д переезду, кольцевой развязке или перекрёстку, где у вас нет преимущества, максимальная скорость…",
        options: ["50 км/ч", "70 км/ч", "30 км/ч", "20 км/ч"],
        explanation:
          "При приближении к ж/д переезду, кольцу или перекрёстку без преимущества максимально — 50 км/ч.",
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
      },
      en: {
        text: "On a motorway (autopista / autovía) the general maximum speed for a car is…",
        options: ["100 km/h", "110 km/h", "90 km/h", "120 km/h"],
        explanation:
          "Cars and motorcycles have a general maximum of 120 km/h on autopista and autovía.",
      },
      ru: {
        text: "На автомагистрали (autopista/autovía) общий максимальный лимит для легкового автомобиля…",
        options: ["100 км/ч", "110 км/ч", "90 км/ч", "120 км/ч"],
        explanation:
          "Общий максимум для легковых машин и мотоциклов на автомагистрали и скоростной автодороге — 120 км/ч.",
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
      },
      en: {
        text: "On a motorway, the general maximum speed for a lorry (truck) is…",
        options: ["120 km/h", "100 km/h", "90 km/h", "80 km/h"],
        explanation:
          "Lorries, tractor-lorries, vans, motorhomes over 3,500 kg, articulated vehicles and vehicles with trailers have a 90 km/h max on autopista/autovía.",
      },
      ru: {
        text: "На автомагистрали общий максимальный лимит для грузовика…",
        options: ["120 км/ч", "100 км/ч", "90 км/ч", "80 км/ч"],
        explanation:
          "Для грузовиков, тягачей, фургонов, домов на колёсах > 3500 кг, автопоездов и авто с прицепом — 90 км/ч на автомагистрали.",
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
      },
      en: {
        text: "On a motorway, the general maximum speed for a bus is…",
        options: ["120 km/h", "100 km/h", "90 km/h", "80 km/h"],
        explanation:
          "Buses, car-derived vehicles and adaptable-mix vehicles have a 100 km/h max on autopista/autovía.",
      },
      ru: {
        text: "На автомагистрали общий максимум для автобуса…",
        options: ["120 км/ч", "100 км/ч", "90 км/ч", "80 км/ч"],
        explanation:
          "Автобусы и производные от легковых имеют максимум 100 км/ч на автомагистрали.",
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
      },
    },
  },
];
