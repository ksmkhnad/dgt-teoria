import type { Question } from "@/lib/types";

// DGT Manual Permiso B (Lectura Fácil, 2024), Tema 15 — Mecánica y mantenimiento.

const SOURCE = "DGT Manual Permiso B (Lectura Fácil, 2024), Tema 15";

export const QUESTIONS_MANUAL_T15: Question[] = [
  {
    id: "manual-t15-01",
    section: "mechanics",
    correctIndex: 2,
    source: SOURCE,
    translations: {
      es: {
        text: "¿Cuál es la función del sistema de alimentación?",
        options: [
          "Frenar el vehículo",
          "Iluminar la carretera",
          "Llevar el aire y el combustible al motor",
          "Enfriar el motor",
        ],
        explanation:
          "El sistema de alimentación lleva aire y combustible al motor. Un filtro limpia el aire; si está sucio, aumenta el consumo y puede salir humo negro por el escape.",
        optionRationales: [
          "Frenar es función del sistema de frenado, no de alimentación.",
          "Iluminar es función del sistema eléctrico/alumbrado.",
          "",
          "Enfriar es función del sistema de refrigeración.",
        ],
      },
      en: {
        text: "What is the function of the fuel/air (alimentación) system?",
        options: [
          "Braking the vehicle",
          "Lighting the road",
          "Delivering air and fuel to the engine",
          "Cooling the engine",
        ],
        explanation:
          "The alimentación system delivers air and fuel to the engine. A filter cleans the air; a dirty filter raises consumption and can produce black smoke.",
        optionRationales: [
          "Braking is the brake system, not fuel/air.",
          "Lighting is the electrical/lighting system.",
          "",
          "Cooling is the refrigeration system.",
        ],
      },
      ru: {
        text: "Какова функция системы питания (alimentación)?",
        options: [
          "Тормозить автомобиль",
          "Освещать дорогу",
          "Подавать воздух и топливо в двигатель",
          "Охлаждать двигатель",
        ],
        explanation:
          "Система питания подаёт воздух и топливо в двигатель. Фильтр очищает воздух; загрязнённый увеличивает расход и даёт чёрный дым.",
        optionRationales: [
          "Торможение — задача тормозной системы.",
          "Освещение — электрической системы.",
          "",
          "Охлаждение — задача системы охлаждения.",
        ],
      },
    },
  },
  {
    id: "manual-t15-02",
    section: "mechanics",
    correctIndex: 3,
    source: SOURCE,
    translations: {
      es: {
        text: "Si sale humo NEGRO por el tubo de escape…",
        options: [
          "El aceite se está terminando",
          "El motor se está enfriando demasiado",
          "La batería está descargada",
          "El filtro de aire está sucio o roto",
        ],
        explanation:
          "Humo negro = filtro de aire sucio o roto (combustible mal quemado). Humo azul = aceite quemándose. Humo blanco = agua/condensación o refrigerante.",
        optionRationales: [
          "El aceite quemándose da humo AZUL, no negro.",
          "Un motor frío no expulsa humo negro; suele expulsar humo blanco de condensación.",
          "La batería no tiene tubo de escape; no produce humo.",
          "",
        ],
      },
      en: {
        text: "If BLACK smoke comes from the exhaust…",
        options: [
          "The oil is running low",
          "The engine is too cold",
          "The battery is flat",
          "The air filter is dirty or broken",
        ],
        explanation:
          "Black smoke = dirty or broken air filter (fuel not burning properly). Blue smoke = oil burning. White smoke = water/condensation or coolant.",
        optionRationales: [
          "Burning oil gives BLUE smoke, not black.",
          "A cold engine doesn't produce black smoke; usually white from condensation.",
          "The battery isn't on the exhaust; it doesn't smoke.",
          "",
        ],
      },
      ru: {
        text: "Если из выхлопной идёт ЧЁРНЫЙ дым…",
        options: [
          "Заканчивается масло",
          "Двигатель слишком холодный",
          "Аккумулятор разряжен",
          "Воздушный фильтр загрязнён или порван",
        ],
        explanation:
          "Чёрный дым = грязный или порванный воздушный фильтр (топливо горит неполно). Синий = масло. Белый = вода/конденсат или антифриз.",
        optionRationales: [
          "Горящее масло — СИНИЙ дым, а не чёрный.",
          "Холодный двигатель не даёт чёрный дым; обычно белый от конденсата.",
          "Аккумулятор к выхлопу не относится; он не дымит.",
          "",
        ],
      },
    },
  },
  {
    id: "manual-t15-03",
    section: "mechanics",
    correctIndex: 0,
    source: SOURCE,
    translations: {
      es: {
        text: "¿Cómo se comprueba correctamente el nivel de aceite?",
        options: [
          "Con la varilla indicadora, con el motor parado y frío",
          "Con el motor a máximas revoluciones",
          "Sacando el aceite y midiéndolo con una jarra",
          "Sin herramientas, mirando por el capó",
        ],
        explanation:
          "El nivel se comprueba con la varilla indicadora, con el MOTOR PARADO y FRÍO. El aceite debe estar entre las marcas de mínimo y máximo.",
        optionRationales: [
          "",
          "Con el motor a máximas revoluciones la varilla no da lectura fiable.",
          "Sacar el aceite estropea la medida y es peligroso; hay que usar la varilla.",
          "«Mirar por el capó» no es una técnica; se requiere la varilla.",
        ],
      },
      en: {
        text: "How do you correctly check the engine oil level?",
        options: [
          "With the dipstick, engine off and cold",
          "With the engine at max revs",
          "Draining the oil and measuring in a jug",
          "No tools, just looking under the bonnet",
        ],
        explanation:
          "You check with the dipstick, with the ENGINE OFF and COLD. The oil should sit between the min and max marks.",
        optionRationales: [
          "",
          "At max revs the dipstick doesn't give a reliable reading.",
          "Draining ruins the measurement and is dangerous; use the dipstick.",
          "'Looking under the bonnet' isn't a technique; you need the dipstick.",
        ],
      },
      ru: {
        text: "Как правильно проверить уровень масла?",
        options: [
          "Щупом при выключенном и холодном двигателе",
          "При максимальных оборотах двигателя",
          "Слив масло и измерив мерным кувшином",
          "Без инструментов, просто заглянув под капот",
        ],
        explanation:
          "Уровень проверяют щупом при ВЫКЛЮЧЕННОМ и ХОЛОДНОМ двигателе. Уровень должен быть между отметками MIN и MAX.",
        optionRationales: [
          "",
          "На максимальных оборотах щуп не даёт надёжного значения.",
          "Слив масла портит измерение и опасно; нужен щуп.",
          "«Заглянуть под капот» — не метод; нужен щуп.",
        ],
      },
    },
  },
  {
    id: "manual-t15-04",
    section: "mechanics",
    correctIndex: 1,
    source: SOURCE,
    translations: {
      es: {
        text: "Si se enciende el testigo rojo de presión de aceite mientras conduces, debes…",
        options: [
          "Continuar y añadir aceite al llegar a casa",
          "Detener el vehículo lo antes posible y apagar el motor; no continuar hasta arreglar el problema",
          "Añadir agua al depósito de refrigeración",
          "Acelerar para calentar el motor",
        ],
        explanation:
          "Testigo rojo de aceite = poca presión / poco aceite. Se debe detener el vehículo lo antes posible y apagar el motor. Continuar puede destruir el motor.",
        optionRationales: [
          "Continuar con testigo rojo de aceite puede fundir el motor.",
          "",
          "El agua es para el sistema de refrigeración, no de lubricación.",
          "Acelerar con problema de lubricación es acelerar el daño al motor.",
        ],
      },
      en: {
        text: "If the red oil-pressure warning light comes on while driving, you should…",
        options: [
          "Keep going and add oil when you get home",
          "Stop as soon as safely possible and switch off the engine; don't drive on until fixed",
          "Add water to the coolant tank",
          "Rev the engine to warm it up",
        ],
        explanation:
          "Red oil warning = low pressure or low oil. Stop as soon as safe and switch off the engine. Continuing can destroy it.",
        optionRationales: [
          "Continuing with the red oil light can seize the engine.",
          "",
          "Water is for the cooling system, not the oil system.",
          "Revving with a lubrication fault accelerates engine damage.",
        ],
      },
      ru: {
        text: "Если во время движения загорелся красный индикатор давления масла, нужно…",
        options: [
          "Ехать дальше и долить масло дома",
          "Как можно скорее безопасно остановиться и заглушить двигатель; не продолжать до устранения причины",
          "Долить воды в бачок охлаждения",
          "Раскрутить двигатель, чтобы прогреть",
        ],
        explanation:
          "Красный индикатор масла — низкое давление или уровень. Нужно как можно скорее безопасно остановиться и заглушить мотор. Продолжение — риск разрушить двигатель.",
        optionRationales: [
          "Ехать с красным индикатором масла — можно заклинить двигатель.",
          "",
          "Вода — для системы охлаждения, не смазки.",
          "Раскручивать при неисправной смазке — ускорять разрушение мотора.",
        ],
      },
    },
  },
  {
    id: "manual-t15-05",
    section: "mechanics",
    correctIndex: 2,
    source: SOURCE,
    translations: {
      es: {
        text: "¿Cuál es la función de la batería?",
        options: [
          "Enfriar el motor",
          "Filtrar el aire",
          "Proporcionar la energía para arrancar el motor y alimentar el circuito eléctrico",
          "Frenar el vehículo",
        ],
        explanation:
          "La batería da la energía para arrancar el motor y alimenta el resto del circuito eléctrico cuando es necesario. Hay que mantenerla limpia y seca.",
        optionRationales: [
          "Enfriar es tarea del sistema de refrigeración.",
          "Filtrar el aire lo hace el filtro del sistema de alimentación.",
          "",
          "Frenar es tarea del sistema de frenado.",
        ],
      },
      en: {
        text: "What is the battery's function?",
        options: [
          "Cool the engine",
          "Filter the air",
          "Provide the power to start the engine and feed the electrical circuit",
          "Brake the vehicle",
        ],
        explanation:
          "The battery provides the power to start the engine and feeds the rest of the electrical system when needed. Keep it clean and dry.",
        optionRationales: [
          "Cooling is the cooling system's job.",
          "Air filtering is the fuel-system's filter, not the battery.",
          "",
          "Braking is the brake system's job.",
        ],
      },
      ru: {
        text: "Какова функция аккумулятора?",
        options: [
          "Охлаждать двигатель",
          "Фильтровать воздух",
          "Давать энергию для запуска двигателя и питать электрическую цепь",
          "Тормозить машину",
        ],
        explanation:
          "Аккумулятор даёт энергию для запуска двигателя и питает электросистему. Держать в чистоте и сухости.",
        optionRationales: [
          "Охлаждение — задача системы охлаждения.",
          "Фильтрация воздуха — задача воздушного фильтра, не батареи.",
          "",
          "Торможение — задача тормозной системы.",
        ],
      },
    },
  },
  {
    id: "manual-t15-06",
    section: "mechanics",
    correctIndex: 3,
    source: SOURCE,
    translations: {
      es: {
        text: "¿Cuál es la función del alternador?",
        options: [
          "Iluminar la carretera",
          "Frenar el vehículo",
          "Refrigerar el motor",
          "Generar electricidad y cargar la batería mientras el motor funciona",
        ],
        explanation:
          "El alternador genera electricidad mientras el motor está en marcha y carga la batería. Se mueve por una correa que hay que revisar y cambiar cuando esté desgastada.",
        optionRationales: [
          "Iluminar la carretera es tarea de las luces, alimentadas por el alternador pero no la función principal.",
          "Frenar es tarea de los frenos.",
          "Refrigerar es tarea del sistema de refrigeración.",
          "",
        ],
      },
      en: {
        text: "What does the alternator do?",
        options: [
          "Light the road",
          "Brake the vehicle",
          "Cool the engine",
          "Generate electricity and charge the battery while the engine runs",
        ],
        explanation:
          "The alternator generates electricity while the engine runs and charges the battery. It's driven by a belt that needs checking and replacing when worn.",
        optionRationales: [
          "Lighting the road is what lights do — powered by the alternator, but not its own function.",
          "Braking is the brake system.",
          "Cooling is the cooling system.",
          "",
        ],
      },
      ru: {
        text: "Какова функция генератора (alternador)?",
        options: [
          "Освещать дорогу",
          "Тормозить",
          "Охлаждать двигатель",
          "Вырабатывать электричество и заряжать аккумулятор при работающем двигателе",
        ],
        explanation:
          "Генератор вырабатывает электричество и заряжает аккумулятор при работающем двигателе. Приводится ремнём — проверять и менять при износе.",
        optionRationales: [
          "Освещать — работа фар (питаются от генератора, но это не его функция).",
          "Торможение — тормозная система.",
          "Охлаждение — система охлаждения.",
          "",
        ],
      },
    },
  },
  {
    id: "manual-t15-07",
    section: "mechanics",
    correctIndex: 1,
    source: SOURCE,
    termIds: ["abs"],
    translations: {
      es: {
        text: "Los frenos son un elemento de…",
        options: [
          "Seguridad pasiva",
          "Seguridad activa",
          "Confort",
          "Rendimiento",
        ],
        explanation:
          "Los frenos son SEGURIDAD ACTIVA: sirven para evitar accidentes. Los elementos activos requieren uso del conductor; los pasivos (cinturón, airbag) actúan automáticamente.",
        optionRationales: [
          "La seguridad pasiva (cinturón, airbag) actúa automáticamente en el accidente.",
          "",
          "Los frenos no son elemento de confort; son de seguridad.",
          "«Rendimiento» no es una categoría de seguridad reglamentaria.",
        ],
      },
      en: {
        text: "Brakes are an element of…",
        options: [
          "Passive safety",
          "Active safety",
          "Comfort",
          "Performance",
        ],
        explanation:
          "Brakes are ACTIVE safety: they prevent crashes. Active items require driver input; passive ones (seatbelt, airbag) trigger automatically.",
        optionRationales: [
          "Passive safety (seatbelt, airbag) triggers automatically in a crash.",
          "",
          "Brakes aren't a comfort item; they're safety.",
          "'Performance' isn't a regulatory safety category.",
        ],
      },
      ru: {
        text: "Тормоза относятся к системам…",
        options: [
          "Пассивной безопасности",
          "Активной безопасности",
          "Комфорта",
          "Производительности",
        ],
        explanation:
          "Тормоза — АКТИВНАЯ безопасность: предотвращают ДТП. Активные системы требуют действий водителя; пассивные (ремень, подушка) срабатывают автоматически.",
        optionRationales: [
          "Пассивная (ремень, подушка) срабатывает автоматически при ДТП.",
          "",
          "Тормоза — не комфорт, а безопасность.",
          "«Производительность» — не регламентная категория безопасности.",
        ],
      },
    },
  },
  {
    id: "manual-t15-08",
    section: "mechanics",
    correctIndex: 0,
    source: SOURCE,
    translations: {
      es: {
        text: "Si notas que el freno pierde eficacia por sobrecalentamiento tras un uso intenso, debes…",
        options: [
          "Soltar el pedal de freno para que se enfríe",
          "Pisar más fuerte para compensar",
          "Ignorarlo hasta el próximo taller",
          "Verter agua sobre los frenos",
        ],
        explanation:
          "Frenos calientes por uso intenso: soltar el pedal para que se enfríen. Si es bajada larga, no acelerar y usar marchas cortas (freno motor).",
        optionRationales: [
          "",
          "Pisar más fuerte los calienta aún más y agrava el problema.",
          "Frenos débiles son peligro inmediato; no se ignora.",
          "Verter agua a frenos calientes puede deformarlos por choque térmico.",
        ],
      },
      en: {
        text: "If you notice brake fade from overheating after heavy use, you should…",
        options: [
          "Release the pedal to let brakes cool",
          "Press harder to compensate",
          "Ignore it until the next garage",
          "Pour water on the brakes",
        ],
        explanation:
          "Overheated brakes: release the pedal to let them cool. On a long descent, don't accelerate and use low gears (engine braking).",
        optionRationales: [
          "",
          "Pressing harder heats them more and worsens the fade.",
          "Weak brakes are an immediate danger; you don't ignore.",
          "Water on hot brakes can warp them via thermal shock.",
        ],
      },
      ru: {
        text: "Если тормоза потеряли эффективность из-за перегрева после интенсивного торможения, нужно…",
        options: [
          "Отпустить педаль, чтобы они остыли",
          "Нажимать сильнее, чтобы компенсировать",
          "Игнорировать до ближайшего сервиса",
          "Полить водой тормоза",
        ],
        explanation:
          "Перегретые тормоза: отпустить педаль, чтобы остыли. На длинном спуске — не разгоняться, использовать пониженные (торможение двигателем).",
        optionRationales: [
          "",
          "Нажимать сильнее — ещё больше нагреешь; станет хуже.",
          "Слабые тормоза — прямая опасность; игнорировать нельзя.",
          "Вода на горячие тормоза — риск деформации от термоудара.",
        ],
      },
    },
  },
  {
    id: "manual-t15-09",
    section: "mechanics",
    correctIndex: 2,
    source: SOURCE,
    translations: {
      es: {
        text: "¿Qué debes revisar más a menudo en el filtro de aire?",
        options: [
          "En invierno más que en verano",
          "Solo una vez al año",
          "En verano y cuando conduces por caminos con mucho polvo",
          "Solo si el coche es nuevo",
        ],
        explanation:
          "El filtro de aire se revisa más veces en VERANO y cuando se conduce por caminos con mucho polvo. El polvo lo satura antes.",
        optionRationales: [
          "En invierno hay menos polvo en el aire; es al revés.",
          "Solo una vez al año no es suficiente en verano o caminos polvorientos.",
          "",
          "La edad del coche no es el criterio; lo es el polvo y el uso.",
        ],
      },
      en: {
        text: "When should you check the air filter more often?",
        options: [
          "In winter more than in summer",
          "Only once a year",
          "In summer and when driving on dusty roads",
          "Only if the car is new",
        ],
        explanation:
          "Check the air filter more often in SUMMER and when driving on dusty roads. Dust clogs it faster.",
        optionRationales: [
          "Winter has less dust in the air; it's the opposite.",
          "Once a year isn't enough in summer or on dusty roads.",
          "",
          "Car age isn't the criterion; dust and use are.",
        ],
      },
      ru: {
        text: "Когда воздушный фильтр нужно проверять чаще?",
        options: [
          "Зимой чаще, чем летом",
          "Только раз в год",
          "Летом и когда ездишь по пыльным дорогам",
          "Только если машина новая",
        ],
        explanation:
          "Воздушный фильтр чаще проверяют ЛЕТОМ и при езде по пыльным дорогам. Пыль забивает его быстрее.",
        optionRationales: [
          "Зимой пыли меньше; наоборот.",
          "Раз в год недостаточно летом или на пыльных дорогах.",
          "",
          "Возраст машины не критерий; критерий — пыль и эксплуатация.",
        ],
      },
    },
  },
  {
    id: "manual-t15-10",
    section: "mechanics",
    correctIndex: 3,
    source: SOURCE,
    translations: {
      es: {
        text: "¿Cuál de estos NO es uno de los ocho sistemas principales del vehículo según el manual?",
        options: [
          "Sistema de frenado",
          "Sistema de dirección",
          "Sistema eléctrico",
          "Sistema de audio",
        ],
        explanation:
          "Los ocho sistemas son: alimentación, eléctrico, lubricación, refrigeración, transmisión, dirección, suspensión y frenado. El audio NO es sistema principal.",
        optionRationales: [
          "El frenado sí es uno de los ocho sistemas principales.",
          "La dirección sí es uno de los ocho.",
          "El eléctrico sí es uno de los ocho.",
          "",
        ],
      },
      en: {
        text: "Which of these is NOT one of the eight main vehicle systems in the manual?",
        options: [
          "Braking system",
          "Steering system",
          "Electrical system",
          "Audio system",
        ],
        explanation:
          "The eight are: fuel/air, electrical, lubrication, cooling, transmission, steering, suspension and braking. Audio is NOT a main system.",
        optionRationales: [
          "Braking is one of the eight.",
          "Steering is one of the eight.",
          "Electrical is one of the eight.",
          "",
        ],
      },
      ru: {
        text: "Что из перечисленного НЕ входит в восемь основных систем автомобиля по руководству?",
        options: [
          "Тормозная система",
          "Рулевая система",
          "Электрическая система",
          "Аудиосистема",
        ],
        explanation:
          "Восемь систем: питания, электрическая, смазки, охлаждения, трансмиссия, рулевая, подвески и тормозная. Аудио НЕ основная.",
        optionRationales: [
          "Тормозная — одна из восьми.",
          "Рулевая — одна из восьми.",
          "Электрическая — одна из восьми.",
          "",
        ],
      },
    },
  },
];
