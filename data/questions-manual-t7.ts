import type { Question } from "@/lib/types";

// DGT Manual Permiso B (Lectura Fácil, 2024), Tema 7 — Sistema de luces.

const SOURCE = "DGT Manual Permiso B (Lectura Fácil, 2024), Tema 7";

export const QUESTIONS_MANUAL_T7: Question[] = [
  {
    id: "manual-t7-01",
    section: "driving_conditions",
    correctIndex: 3,
    source: SOURCE,
    translations: {
      es: {
        text: "¿En cuál de estas situaciones NO es obligatorio encender las luces?",
        options: [
          "Por la noche",
          "Al pasar por un túnel",
          "Al circular por un carril reversible o adicional habilitado",
          "En un día despejado con sol brillante",
        ],
        explanation:
          "Se encienden siempre de noche, en túneles, en carriles reversibles/adicionales y en días oscuros con poca luz natural. Un día despejado con sol brillante no lo requiere de por sí.",
      },
      en: {
        text: "In which of these situations is turning on the lights NOT mandatory?",
        options: [
          "At night",
          "When passing through a tunnel",
          "On a reversible or additional lane in use",
          "On a clear day with bright sun",
        ],
        explanation:
          "Lights are required at night, in tunnels, on reversible/additional lanes and on dark days with poor natural light. A clear sunny day does not require them by itself.",
      },
      ru: {
        text: "В какой из ситуаций фары включать НЕ обязательно?",
        options: [
          "Ночью",
          "При проезде через тоннель",
          "На реверсивной или временно открытой дополнительной полосе",
          "В ясный солнечный день",
        ],
        explanation:
          "Включать надо ночью, в тоннеле, на реверсивных/доп. полосах и в тёмный день. Ясный солнечный день сам по себе не требует.",
      },
    },
  },
  {
    id: "manual-t7-02",
    section: "driving_conditions",
    correctIndex: 1,
    source: SOURCE,
    translations: {
      es: {
        text: "Las luces de largo alcance (luces de carretera) están PROHIBIDAS…",
        options: [
          "En túneles",
          "Dentro de pueblos y ciudades",
          "En carreteras a más de 40 km/h",
          "Cuando llueve",
        ],
        explanation:
          "Las luces de largo alcance están prohibidas dentro de pueblos y ciudades y cuando el vehículo está parado. Deslumbran a otros conductores.",
      },
      en: {
        text: "High beams (long-range lights) are FORBIDDEN…",
        options: [
          "In tunnels",
          "Inside built-up areas (towns and cities)",
          "On roads at more than 40 km/h",
          "When it's raining",
        ],
        explanation:
          "High beams are forbidden in built-up areas and when the vehicle is stopped, because they dazzle other drivers.",
      },
      ru: {
        text: "Дальний свет ЗАПРЕЩЁН…",
        options: [
          "В тоннелях",
          "В населённых пунктах (городах и посёлках)",
          "На дорогах со скоростью выше 40 км/ч",
          "Во время дождя",
        ],
        explanation:
          "Дальний свет запрещён в населённых пунктах и когда автомобиль стоит — ослепляет других водителей.",
      },
    },
  },
  {
    id: "manual-t7-03",
    section: "driving_conditions",
    correctIndex: 2,
    source: SOURCE,
    translations: {
      es: {
        text: "Con niebla intensa, ¿qué luces son las correctas?",
        options: [
          "Solo luz de largo alcance",
          "Solo luces de posición",
          "Luces de corto alcance (cruce) y, si dispone, antinieblas delanteras; las traseras solo si la visibilidad es muy mala",
          "Cualquier combinación menos las antinieblas",
        ],
        explanation:
          "Con niebla se usan las luces de cruce y las antinieblas delanteras si se dispone. Las antinieblas traseras solo si la visibilidad es muy mala. Nunca las largas, que reflejan la niebla y deslumbran.",
      },
      en: {
        text: "In dense fog, which lights are correct?",
        options: [
          "Only high beams",
          "Only sidelights",
          "Dipped beams and, if fitted, front fog lights; rear fogs only in very poor visibility",
          "Any combination except fog lights",
        ],
        explanation:
          "In fog use dipped beams and front fog lights if fitted. Rear fog lights only in very poor visibility. Never high beams — they reflect in the fog and dazzle.",
      },
      ru: {
        text: "В густом тумане какие фары включать?",
        options: [
          "Только дальний свет",
          "Только габариты",
          "Ближний свет и, если есть, передние противотуманные; задние противотуманные — только при очень плохой видимости",
          "Любая комбинация, кроме противотуманок",
        ],
        explanation:
          "В тумане — ближний свет и передние противотуманные, если они есть. Задние противотуманные — только при очень плохой видимости. Дальний нельзя — он отражается от тумана и слепит.",
      },
    },
  },
  {
    id: "manual-t7-04",
    section: "driving_conditions",
    correctIndex: 0,
    source: SOURCE,
    translations: {
      es: {
        text: "¿De qué color son las luces de posición delanteras, traseras y laterales?",
        options: [
          "Blancas delante, rojas detrás y amarillas en los laterales",
          "Amarillas delante, blancas detrás y rojas en los laterales",
          "Rojas delante, amarillas detrás y blancas en los laterales",
          "Todas blancas",
        ],
        explanation:
          "Las luces de posición son blancas delante, rojas detrás y amarillas en los laterales del vehículo.",
      },
      en: {
        text: "What colours are the position lights (front, rear, side)?",
        options: [
          "White front, red rear, yellow sides",
          "Yellow front, white rear, red sides",
          "Red front, yellow rear, white sides",
          "All white",
        ],
        explanation:
          "Position lights are white at the front, red at the rear and yellow on the sides.",
      },
      ru: {
        text: "Какого цвета габаритные огни спереди, сзади и по бокам?",
        options: [
          "Спереди белые, сзади красные, по бокам жёлтые",
          "Спереди жёлтые, сзади белые, по бокам красные",
          "Спереди красные, сзади жёлтые, по бокам белые",
          "Все белые",
        ],
        explanation:
          "Габариты: спереди белые, сзади красные, по бокам жёлтые.",
      },
    },
  },
  {
    id: "manual-t7-05",
    section: "driving_conditions",
    correctIndex: 2,
    source: SOURCE,
    translations: {
      es: {
        text: "Se considera que una carretera está poco iluminada cuando…",
        options: [
          "No se ven las líneas del suelo",
          "No hay farolas",
          "No se puede leer la matrícula de un vehículo a 10 m o no se ve un vehículo oscuro a 50 m",
          "Hay más de 3 vehículos por delante",
        ],
        explanation:
          "El manual define carretera poco iluminada como aquella en la que no se puede leer la matrícula del vehículo de delante a 10 metros o no se ve un vehículo oscuro a 50 metros.",
      },
      en: {
        text: "A road is considered poorly lit when…",
        options: [
          "You can't see the road lines",
          "There are no streetlights",
          "You can't read the plate of the vehicle ahead at 10 m, or can't see a dark vehicle at 50 m",
          "There are more than 3 vehicles ahead",
        ],
        explanation:
          "The manual defines poor lighting as: the plate of the vehicle ahead is unreadable at 10 m, or a dark vehicle isn't visible at 50 m.",
      },
      ru: {
        text: "Дорога считается плохо освещённой, когда…",
        options: [
          "Не видно разметки",
          "Нет фонарей",
          "Не читается номер впереди идущего с 10 м, или не видно тёмного автомобиля на 50 м",
          "Впереди более 3 машин",
        ],
        explanation:
          "По руководству, плохое освещение: номер впереди идущего не читается с 10 м, либо тёмный автомобиль не виден с 50 м.",
      },
    },
  },
  {
    id: "manual-t7-06",
    section: "driving_conditions",
    correctIndex: 1,
    source: SOURCE,
    translations: {
      es: {
        text: "La señal de emergencia (los cuatro intermitentes a la vez) se debe usar cuando…",
        options: [
          "Aparcas en línea",
          "Un vehículo está averiado, no puede alcanzar la velocidad mínima, o para avisar de otro vehículo parado por emergencia",
          "Vas a hacer un adelantamiento",
          "Frenas por primera vez",
        ],
        explanation:
          "Se usan cuando el vehículo tiene una avería y no puede llevar la velocidad mínima, en un viaje de emergencia, para avisar de otro vehículo parado por emergencia y al subir/bajar pasajeros del transporte escolar.",
      },
      en: {
        text: "Hazard lights (all four turn signals at once) should be used when…",
        options: [
          "Parking parallel to the kerb",
          "The vehicle has a breakdown and can't hit the minimum speed, on an emergency trip, or to warn of another stopped emergency vehicle",
          "Preparing to overtake",
          "Braking for the first time",
        ],
        explanation:
          "Use hazards for a breakdown at below minimum speed, an emergency trip, warning of another stopped vehicle, and when a school-transport bus loads or unloads.",
      },
      ru: {
        text: "Аварийная сигнализация (все 4 поворотника одновременно) должна включаться, когда…",
        options: [
          "Паркуешься параллельно",
          "У ТС поломка и не удаётся выдержать минимальную скорость, при экстренной поездке, или чтобы предупредить о другом остановившемся ТС",
          "Готовишься к обгону",
          "Тормозишь первый раз",
        ],
        explanation:
          "Аварийка включается при поломке (ниже минимальной скорости), при экстренном рейсе, для предупреждения о другом стоящем ТС, а также при посадке/высадке в школьный автобус.",
      },
    },
  },
  {
    id: "manual-t7-07",
    section: "driving_conditions",
    correctIndex: 0,
    source: SOURCE,
    translations: {
      es: {
        text: "Las motocicletas deben llevar encendidas durante el día…",
        options: [
          "Las luces de corto alcance (cruce), siempre",
          "Las luces de largo alcance",
          "Solo las de posición",
          "No es obligatorio ningún tipo de luz",
        ],
        explanation:
          "Las motocicletas deben circular siempre con las luces de corto alcance (cruce) encendidas durante el día en cualquier vía.",
      },
      en: {
        text: "Motorcycles must ride during daytime with…",
        options: [
          "Dipped beams (low beams) on at all times",
          "High beams on",
          "Only sidelights",
          "No lights required",
        ],
        explanation:
          "Motorcycles must always have dipped beams (low beams) on during the day on any road.",
      },
      ru: {
        text: "Мотоциклы должны днём двигаться…",
        options: [
          "Всегда с включённым ближним светом",
          "С включённым дальним светом",
          "Только с габаритами",
          "Без обязательного света",
        ],
        explanation:
          "Мотоциклы обязаны всегда двигаться с включённым ближним светом днём на любой дороге.",
      },
    },
  },
  {
    id: "manual-t7-08",
    section: "driving_conditions",
    correctIndex: 2,
    source: SOURCE,
    translations: {
      es: {
        text: "El uso del claxon (señales acústicas) está permitido…",
        options: [
          "Para saludar a otros conductores",
          "Siempre que estés dentro del vehículo",
          "Para evitar un posible accidente y, fuera de poblado, para avisar de un adelantamiento o de un servicio prioritario",
          "Solo entre las 06:00 y las 22:00",
        ],
        explanation:
          "El claxon se puede usar para evitar accidentes, fuera de poblado para avisar de un adelantamiento, y en servicios prioritarios (por ejemplo, llevar a un herido grave al hospital).",
      },
      en: {
        text: "Using the horn (acoustic signal) is allowed…",
        options: [
          "To greet other drivers",
          "Any time you're in the vehicle",
          "To avoid an accident, and outside built-up areas to signal overtaking or a priority run",
          "Only between 06:00 and 22:00",
        ],
        explanation:
          "The horn is allowed to avoid accidents; outside built-up areas to signal overtaking; and for priority runs (e.g. taking a serious casualty to hospital).",
      },
      ru: {
        text: "Звуковой сигнал (клаксон) разрешён…",
        options: [
          "Чтобы поприветствовать других водителей",
          "В любое время, находясь в машине",
          "Чтобы избежать аварии; вне населённых пунктов — предупредить об обгоне или срочной поездке",
          "Только с 06:00 до 22:00",
        ],
        explanation:
          "Клаксон допустим для предотвращения аварии, вне населённого пункта — для предупреждения об обгоне, а также при срочной поездке (например, транспортировка тяжело раненого).",
      },
    },
  },
];
