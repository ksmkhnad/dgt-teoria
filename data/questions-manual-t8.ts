import type { Question } from "@/lib/types";

// Questions derived from DGT Manual Permiso B (Lectura Fácil, 2024), Tema 8 — Señales.
// Facts grounded in the manual; translations AI-drafted, spot-check before public use.

const SOURCE = "DGT Manual Permiso B (Lectura Fácil, 2024), Tema 8";

export const QUESTIONS_MANUAL_T8: Question[] = [
  {
    id: "manual-t8-01",
    section: "signs",
    correctIndex: 0,
    source: SOURCE,
    translations: {
      es: {
        text: "Cuando aparecen varias señales al mismo tiempo, ¿cuál es el orden de prioridad correcto?",
        options: [
          "Agentes > señales temporales > semáforos > señales verticales > marcas viales",
          "Semáforos > agentes > señales verticales > marcas viales > señales temporales",
          "Señales verticales > semáforos > agentes > marcas viales > señales temporales",
          "Marcas viales > señales verticales > semáforos > agentes > señales temporales",
        ],
        explanation:
          "El orden establecido por el manual es: 1) Agentes de tráfico, 2) Señales temporales, 3) Semáforos, 4) Señales verticales, 5) Marcas y líneas en la carretera.",
      },
      en: {
        text: "When several signs appear at once, what is the correct priority order?",
        options: [
          "Officers > temporary signs > lights > vertical signs > road markings",
          "Lights > officers > vertical signs > road markings > temporary signs",
          "Vertical signs > lights > officers > road markings > temporary signs",
          "Road markings > vertical signs > lights > officers > temporary signs",
        ],
        explanation:
          "The manual's order is: 1) Traffic officers, 2) Temporary signs, 3) Traffic lights, 4) Vertical signs, 5) Road markings.",
      },
      ru: {
        text: "Когда одновременно действуют несколько знаков, каков правильный порядок приоритета?",
        options: [
          "Регулировщик > временные знаки > светофоры > постоянные знаки > разметка",
          "Светофоры > регулировщик > постоянные знаки > разметка > временные знаки",
          "Постоянные знаки > светофоры > регулировщик > разметка > временные знаки",
          "Разметка > постоянные знаки > светофоры > регулировщик > временные знаки",
        ],
        explanation:
          "Порядок по руководству: 1) регулировщик, 2) временные знаки, 3) светофоры, 4) постоянные знаки, 5) дорожная разметка.",
      },
    },
  },
  {
    id: "manual-t8-02",
    section: "signs",
    correctIndex: 1,
    source: SOURCE,
    termIds: ["stop", "semaforo"],
    translations: {
      es: {
        text: "Si en un cruce hay una señal de STOP y un semáforo en verde, ¿qué debes obedecer?",
        options: [
          "La señal de STOP",
          "El semáforo en verde",
          "Puedes elegir cualquiera",
          "Detenerte y esperar orden del agente",
        ],
        explanation:
          "Cuando coexisten un STOP y un semáforo en verde, prevalece el semáforo. Los semáforos tienen prioridad sobre las señales verticales.",
      },
      en: {
        text: "At a junction with both a STOP sign and a green traffic light, which do you obey?",
        options: [
          "The STOP sign",
          "The green light",
          "You can choose either",
          "Stop and wait for an officer",
        ],
        explanation:
          "When a STOP sign and a green light coexist, the light prevails. Traffic lights outrank vertical signs.",
      },
      ru: {
        text: "На перекрёстке одновременно знак STOP и зелёный сигнал светофора — чему подчиняться?",
        options: [
          "Знаку STOP",
          "Зелёному сигналу светофора",
          "Можно выбрать любое",
          "Остановиться и ждать регулировщика",
        ],
        explanation:
          "Если одновременно STOP и зелёный сигнал — приоритет у светофора. Светофоры выше по приоритету, чем постоянные знаки.",
      },
    },
  },
  {
    id: "manual-t8-03",
    section: "signs",
    correctIndex: 0,
    source: SOURCE,
    translations: {
      es: {
        text: "Si coinciden una señal de STOP y una señal de ceda el paso, ¿cuál debes obedecer?",
        options: [
          "La señal de STOP",
          "La señal de ceda el paso",
          "La más nueva de las dos",
          "Ninguna, seguir sin detenerse",
        ],
        explanation:
          "Entre STOP y ceda el paso prevalece la señal más restrictiva: STOP, que obliga a detención completa.",
      },
      en: {
        text: "If a STOP sign and a yield sign appear together, which do you obey?",
        options: [
          "The STOP sign",
          "The yield sign",
          "The newer of the two",
          "Neither — keep going",
        ],
        explanation:
          "Between STOP and yield the more restrictive one prevails: STOP, which requires a full stop.",
      },
      ru: {
        text: "Если стоят одновременно знак STOP и знак «уступите дорогу» — чему подчиняться?",
        options: [
          "Знаку STOP",
          "Знаку «уступите дорогу»",
          "Более новому из двух",
          "Ничему — ехать дальше",
        ],
        explanation:
          "Между STOP и «уступите дорогу» действует более строгий знак — STOP, требующий полной остановки.",
      },
    },
  },
  {
    id: "manual-t8-04",
    section: "signs",
    correctIndex: 2,
    source: SOURCE,
    translations: {
      es: {
        text: "Un agente de tráfico levanta el brazo verticalmente. ¿Qué significa?",
        options: [
          "Vía libre, todos pueden circular",
          "Solo pueden pasar los que están a su izquierda",
          "Todos los conductores que se acerquen al agente deben detenerse",
          "Se debe hacer sonar el claxon",
        ],
        explanation:
          "Brazo levantado en vertical: deben detenerse todos los conductores que se acerquen al agente. Los que ya estaban dentro del cruce pueden seguir.",
      },
      en: {
        text: "A traffic officer raises their arm vertically. What does it mean?",
        options: [
          "Road clear, all may proceed",
          "Only those on the officer's left may pass",
          "All drivers approaching the officer must stop",
          "You should sound the horn",
        ],
        explanation:
          "Arm raised vertically: all drivers approaching the officer must stop. Those already inside the junction may continue through it.",
      },
      ru: {
        text: "Регулировщик поднял руку вертикально вверх. Что это значит?",
        options: [
          "Дорога свободна, все могут ехать",
          "Могут проехать только те, кто слева от регулировщика",
          "Все водители, приближающиеся к регулировщику, должны остановиться",
          "Нужно посигналить",
        ],
        explanation:
          "Рука вверх — все приближающиеся водители должны остановиться. Уже въехавшие на перекрёсток могут его завершить.",
      },
    },
  },
  {
    id: "manual-t8-05",
    section: "signs",
    correctIndex: 1,
    source: SOURCE,
    translations: {
      es: {
        text: "Un agente de tráfico ondea una bandera roja. ¿Qué significa?",
        options: [
          "Los vehículos pueden reanudar la marcha con precaución",
          "Los vehículos no pueden circular por esa carretera",
          "Hay que encender las luces largas",
          "Se está inaugurando la vía",
        ],
        explanation:
          "Bandera roja: los vehículos no pueden circular por esa carretera. Bandera verde permite reanudar; bandera amarilla obliga a circular con mucho cuidado por posible peligro.",
      },
      en: {
        text: "A traffic officer waves a red flag. What does it mean?",
        options: [
          "Vehicles may resume with caution",
          "Vehicles may not circulate on this road",
          "Turn on high beams",
          "The road is being inaugurated",
        ],
        explanation:
          "Red flag: vehicles cannot circulate on that road. Green flag allows resuming; yellow flag means proceed with great care because of possible danger.",
      },
      ru: {
        text: "Регулировщик машет красным флагом. Что это означает?",
        options: [
          "Можно продолжать движение с осторожностью",
          "По этой дороге движение запрещено",
          "Нужно включить дальний свет",
          "Открытие дороги",
        ],
        explanation:
          "Красный флаг — движение по этой дороге запрещено. Зелёный — можно продолжать; жёлтый — повышенная осторожность из-за возможной опасности.",
      },
    },
  },
  {
    id: "manual-t8-06",
    section: "signs",
    correctIndex: 3,
    source: SOURCE,
    translations: {
      es: {
        text: "En un semáforo de vehículos, una luz amarilla fija significa…",
        options: [
          "Puedes pasar si vas con precaución",
          "Debes acelerar para pasar rápido",
          "Solo afecta a los peatones",
          "Prohíbe el paso, salvo a vehículos que no pueden detenerse con seguridad",
        ],
        explanation:
          "La luz amarilla fija prohíbe el paso igual que la roja, pero permite el paso a vehículos que ya no pueden detenerse con seguridad.",
      },
      en: {
        text: "At a vehicle traffic light, a steady amber (yellow) light means…",
        options: [
          "You may pass if cautious",
          "Speed up to clear quickly",
          "It only affects pedestrians",
          "Passage prohibited, except for vehicles that cannot stop safely",
        ],
        explanation:
          "Steady amber prohibits passage as red does, but allows vehicles that cannot stop safely to continue.",
      },
      ru: {
        text: "Постоянный жёлтый сигнал светофора для транспорта означает…",
        options: [
          "Можно проехать при осторожности",
          "Нужно ускориться, чтобы быстрее проехать",
          "Действует только для пешеходов",
          "Движение запрещено, кроме случаев, когда автомобиль не может безопасно остановиться",
        ],
        explanation:
          "Постоянный жёлтый — движение запрещено, как и красный, но разрешено проехать тем, кто не может безопасно остановиться.",
      },
    },
  },
  {
    id: "manual-t8-07",
    section: "signs",
    correctIndex: 2,
    source: SOURCE,
    translations: {
      es: {
        text: "En un semáforo de carril, una luz roja en forma de aspa (X) significa…",
        options: [
          "Puedes ocupar el carril con precaución",
          "El carril está reservado a vehículos autorizados",
          "No se puede ocupar ese carril; hay que abandonarlo lo antes posible",
          "Solo se aplica a peatones",
        ],
        explanation:
          "Aspa roja en semáforo de carril: no se puede ocupar. Todos los conductores deben abandonar el carril lo más rápido posible.",
      },
      en: {
        text: "A red X on an overhead lane traffic light means…",
        options: [
          "You may use the lane with caution",
          "The lane is reserved for authorised vehicles",
          "The lane may not be used; leave it as soon as possible",
          "It only applies to pedestrians",
        ],
        explanation:
          "Red X on a lane light: the lane may not be occupied. All drivers must leave it as soon as possible.",
      },
      ru: {
        text: "Красный крест (X) на светофоре над полосой означает…",
        options: [
          "Можно двигаться по полосе с осторожностью",
          "Полоса зарезервирована для спецтранспорта",
          "Полосу занимать нельзя, нужно её как можно скорее покинуть",
          "Действует только для пешеходов",
        ],
        explanation:
          "Красный крест над полосой — движение по ней запрещено. Все водители обязаны как можно скорее её покинуть.",
      },
    },
  },
  {
    id: "manual-t8-08",
    section: "signs",
    correctIndex: 0,
    source: SOURCE,
    translations: {
      es: {
        text: "Un semáforo con una bicicleta dibujada…",
        options: [
          "Sus indicaciones solo afectan a ciclos y ciclomotores",
          "Afecta a todos los conductores",
          "Es un semáforo decorativo",
          "Solo funciona en zonas peatonales",
        ],
        explanation:
          "Los semáforos con una bicicleta o ciclo dibujados afectan solo a ciclos y ciclomotores; el resto de vehículos no debe atenderlos.",
      },
      en: {
        text: "A traffic light with a bicycle drawn on it…",
        options: [
          "Applies only to bicycles and mopeds",
          "Applies to all drivers",
          "Is decorative",
          "Only works in pedestrian zones",
        ],
        explanation:
          "Lights with a bicycle/cycle drawn on them apply only to bicycles and mopeds; other vehicles ignore them.",
      },
      ru: {
        text: "Светофор с изображением велосипеда…",
        options: [
          "Действует только для велосипедов и мопедов",
          "Действует для всех водителей",
          "Является декоративным",
          "Работает только в пешеходных зонах",
        ],
        explanation:
          "Светофоры с изображением велосипеда действуют только на велосипедистов и мопедистов; остальные не должны им подчиняться.",
      },
    },
  },
  {
    id: "manual-t8-09",
    section: "signs",
    correctIndex: 2,
    source: SOURCE,
    termIds: ["senal_peligro", "senal_vertical"],
    translations: {
      es: {
        text: "Las señales verticales cuyo nombre empieza por 'P' son…",
        options: [
          "Señales de prohibición",
          "Señales de prioridad",
          "Señales que avisan de peligro",
          "Señales de proximidad",
        ],
        explanation:
          "Las señales cuyo código empieza por 'P' son señales que avisan de peligro (P de peligro). Ejemplos: P-1 preferencia, P-4 rotonda, P-13 curva peligrosa.",
      },
      en: {
        text: "Vertical signs whose code starts with 'P' are…",
        options: [
          "Prohibition signs",
          "Priority signs",
          "Signs warning of danger",
          "Proximity signs",
        ],
        explanation:
          "Signs starting with 'P' are danger-warning signs (P = peligro). Examples: P-1 priority, P-4 roundabout, P-13 dangerous curve.",
      },
      ru: {
        text: "Постоянные знаки, код которых начинается на «P» — это…",
        options: [
          "Запрещающие знаки",
          "Знаки приоритета",
          "Знаки, предупреждающие об опасности",
          "Знаки близости объектов",
        ],
        explanation:
          "Знаки с кодом на «P» — предупреждающие об опасности (P = peligro). Примеры: P-1 приоритет, P-4 круговое движение, P-13 опасный поворот.",
      },
    },
  },
  {
    id: "manual-t8-10",
    section: "signs",
    correctIndex: 1,
    source: SOURCE,
    translations: {
      es: {
        text: "La señal P-4 indica…",
        options: [
          "Curva peligrosa",
          "Cruce con circulación giratoria (rotonda)",
          "Paso a nivel",
          "Puente móvil",
        ],
        explanation:
          "P-4 avisa de un cruce con circulación giratoria. Los vehículos solo pueden girar en el sentido de las flechas.",
      },
      en: {
        text: "The P-4 sign warns of…",
        options: [
          "A dangerous curve",
          "A junction with circulatory traffic (roundabout)",
          "A level crossing",
          "A movable bridge",
        ],
        explanation:
          "P-4 warns of an intersection with circulatory traffic. Vehicles may only turn in the direction of the arrows.",
      },
      ru: {
        text: "Знак P-4 предупреждает о…",
        options: [
          "Опасном повороте",
          "Круговом перекрёстке (кольцо)",
          "Железнодорожном переезде",
          "Разводном мосте",
        ],
        explanation:
          "P-4 — предупреждение о круговом перекрёстке. Движение только в направлении стрелок.",
      },
    },
  },
  {
    id: "manual-t8-11",
    section: "signs",
    correctIndex: 3,
    source: SOURCE,
    translations: {
      es: {
        text: "Por norma general, ¿qué señales verticales debes obedecer?",
        options: [
          "Solo las del lado izquierdo",
          "Las que estén más cerca del vehículo, sin importar el lado",
          "Solo las que están sobre puentes",
          "Las que están a tu derecha en la carretera",
        ],
        explanation:
          "La norma es obedecer las señales verticales y los semáforos que están a la derecha. Si vas a girar a la izquierda y no hay señales a la derecha, se obedecen las de la izquierda.",
      },
      en: {
        text: "As a general rule, which vertical signs must you obey?",
        options: [
          "Only those on the left side",
          "Whichever is closest, regardless of side",
          "Only those on bridges",
          "Those on your right on the road",
        ],
        explanation:
          "The rule is to obey the vertical signs and lights on your right. When turning left with no right-side signs, obey those on the left.",
      },
      ru: {
        text: "По общему правилу, какие постоянные знаки нужно соблюдать?",
        options: [
          "Только слева",
          "Ближайший знак, независимо от стороны",
          "Только те, что над мостами",
          "Те, что справа по ходу движения",
        ],
        explanation:
          "Общее правило — соблюдать знаки и светофоры справа. При повороте налево, если справа знаков нет, соблюдают знаки слева.",
      },
    },
  },
  {
    id: "manual-t8-12",
    section: "signs",
    correctIndex: 0,
    source: SOURCE,
    translations: {
      es: {
        text: "En señales de balizamiento, ¿qué significan tres paneles de dirección permanentes juntos?",
        options: [
          "Mucho peligro en esa zona",
          "Peligro moderado",
          "Que la carretera está en obras",
          "Zona reservada a peatones",
        ],
        explanation:
          "El número de paneles direccionales permanentes indica el nivel de peligro: 1 panel = peligro moderado, 2 = bastante peligro, 3 = mucho peligro.",
      },
      en: {
        text: "In hazard-marker signs, what do three permanent directional panels together indicate?",
        options: [
          "Serious danger in the area",
          "Moderate danger",
          "That the road is under works",
          "A pedestrian-reserved zone",
        ],
        explanation:
          "The number of permanent directional panels indicates the danger level: 1 = moderate, 2 = considerable, 3 = serious.",
      },
      ru: {
        text: "На знаках-направляющих три постоянных панели рядом означают…",
        options: [
          "Высокую опасность на участке",
          "Умеренную опасность",
          "Дорожные работы",
          "Пешеходную зону",
        ],
        explanation:
          "Количество постоянных направляющих панелей показывает уровень опасности: 1 — умеренная, 2 — значительная, 3 — высокая.",
      },
    },
  },
  {
    id: "manual-t8-13",
    section: "signs",
    correctIndex: 2,
    source: SOURCE,
    translations: {
      es: {
        text: "En un semáforo circular, una o dos luces amarillas intermitentes obligan a…",
        options: [
          "Detenerse por completo",
          "Reanudar la marcha con normalidad",
          "Ceder el paso a vehículos de la derecha, izquierda y peatones",
          "Encender los intermitentes",
        ],
        explanation:
          "Luces amarillas intermitentes: obligan a ceder el paso a los vehículos que vienen por la derecha y por la izquierda, y también a los peatones.",
      },
      en: {
        text: "One or two flashing amber lights on a round vehicle light mean…",
        options: [
          "Come to a full stop",
          "Resume normal driving",
          "Give way to vehicles from the right, left and to pedestrians",
          "Turn on your indicators",
        ],
        explanation:
          "Flashing amber: you must give way to vehicles coming from the right and left, and also to pedestrians.",
      },
      ru: {
        text: "Один или два мигающих жёлтых сигнала на круглом транспортном светофоре означают…",
        options: [
          "Полная остановка",
          "Обычное продолжение движения",
          "Уступить дорогу транспорту справа, слева и пешеходам",
          "Включить поворотники",
        ],
        explanation:
          "Мигающий жёлтый: уступите дорогу автомобилям справа и слева, а также пешеходам.",
      },
    },
  },
  {
    id: "manual-t8-14",
    section: "signs",
    correctIndex: 1,
    source: SOURCE,
    translations: {
      es: {
        text: "Los agentes de tráfico deben usar prendas y objetos que se vean bien a una distancia mínima de…",
        options: ["100 metros", "150 metros", "50 metros", "200 metros"],
        explanation:
          "El manual indica que los agentes usan prendas y objetos que se vean bien a 150 metros de distancia.",
      },
      en: {
        text: "Traffic officers must wear items visible at a minimum distance of…",
        options: ["100 metres", "150 metres", "50 metres", "200 metres"],
        explanation:
          "The manual specifies clothing and equipment visible from 150 metres away.",
      },
      ru: {
        text: "Одежда и жезлы регулировщика должны быть видимы с минимального расстояния…",
        options: ["100 метров", "150 метров", "50 метров", "200 метров"],
        explanation:
          "Руководство указывает, что регулировщик должен быть заметен с 150 метров.",
      },
    },
  },
  {
    id: "manual-t8-15",
    section: "signs",
    correctIndex: 3,
    source: SOURCE,
    translations: {
      es: {
        text: "Ante un panel de mensaje variable, debes…",
        options: [
          "Ignorarlo si contradice una señal vertical fija",
          "Aplicarlo solo si eres profesional",
          "Consultarlo solo por curiosidad",
          "Obedecer sus instrucciones y recomendaciones",
        ],
        explanation:
          "Los paneles de mensajes variables informan, advierten y dan instrucciones que se deben cumplir. Se ajustan a las circunstancias del tráfico.",
      },
      en: {
        text: "At a variable message sign, you must…",
        options: [
          "Ignore it if it contradicts a fixed vertical sign",
          "Follow it only if you're a professional driver",
          "Take note of it only out of curiosity",
          "Follow its instructions and recommendations",
        ],
        explanation:
          "Variable message signs inform, warn and give instructions that must be complied with. They adapt to current traffic conditions.",
      },
      ru: {
        text: "Знак с изменяемым сообщением…",
        options: [
          "Игнорировать, если противоречит стационарному знаку",
          "Соблюдать только профессионалам",
          "Изучать из любопытства",
          "Выполнять его инструкции и рекомендации",
        ],
        explanation:
          "Знаки с изменяемым сообщением информируют, предупреждают и дают инструкции, обязательные к исполнению. Отражают текущую ситуацию на дороге.",
      },
    },
  },
];
