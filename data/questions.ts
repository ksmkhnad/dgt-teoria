import type { Question } from "@/lib/types";
import { QUESTIONS_MANUAL_T2 } from "./questions-manual-t2";
import { QUESTIONS_MANUAL_T3 } from "./questions-manual-t3";
import { QUESTIONS_MANUAL_T4 } from "./questions-manual-t4";
import { QUESTIONS_MANUAL_T5 } from "./questions-manual-t5";
import { QUESTIONS_MANUAL_T6 } from "./questions-manual-t6";
import { QUESTIONS_MANUAL_T7 } from "./questions-manual-t7";
import { QUESTIONS_MANUAL_T8 } from "./questions-manual-t8";
import { QUESTIONS_MANUAL_T9 } from "./questions-manual-t9";
import { QUESTIONS_MANUAL_T10 } from "./questions-manual-t10";
import { QUESTIONS_MANUAL_T11 } from "./questions-manual-t11";
import { QUESTIONS_MANUAL_T12 } from "./questions-manual-t12";
import { QUESTIONS_MANUAL_T13 } from "./questions-manual-t13";
import { QUESTIONS_MANUAL_T14 } from "./questions-manual-t14";
import { QUESTIONS_MANUAL_T15 } from "./questions-manual-t15";
import { QUESTIONS_MANUAL_T16 } from "./questions-manual-t16";
import { QUESTIONS_MANUAL_T17 } from "./questions-manual-t17";
import { QUESTIONS_MANUAL_ANEXO } from "./questions-manual-anexo";

// Seed bank. Original sample questions in the style of the DGT permiso B exam.
// Manual-derived batches are imported from separate files and appended below.

const SEED: Question[] = [
  {
    id: "signs-001",
    section: "signs",
    correctIndex: 1,
    translations: {
      es: {
        text: "Una señal triangular con el borde rojo y fondo blanco es una señal de…",
        options: ["Obligación", "Peligro / advertencia", "Prohibición", "Indicación"],
        explanation:
          "Las señales triangulares con borde rojo advierten de un peligro próximo. Las circulares con borde rojo son de prohibición o restricción.",
        optionRationales: [
          "Las señales de obligación son circulares con fondo azul y símbolos blancos, nunca triangulares.",
          "",
          "Las prohibiciones sí llevan borde rojo, pero son circulares (no triangulares). La forma es la clave.",
          "Las señales de indicación son rectangulares o cuadradas y suelen tener fondo azul o verde.",
        ],
      },
      en: {
        text: "A triangular sign with a red border and white background is a…",
        options: ["Mandatory sign", "Warning / danger sign", "Prohibition sign", "Information sign"],
        explanation:
          "Triangular signs with a red border warn of an upcoming hazard. Circular signs with a red border are prohibitions or restrictions.",
        optionRationales: [
          "Mandatory signs are circular with a blue background and white symbols — never triangular.",
          "",
          "Prohibitions do use a red border, but they are circular (not triangular). Shape is the tell.",
          "Information signs are rectangular or square, usually with a blue or green background.",
        ],
      },
      ru: {
        text: "Треугольный знак с красной каймой на белом фоне — это знак…",
        options: ["Предписания", "Предупреждения об опасности", "Запрета", "Информационный"],
        explanation:
          "Треугольные знаки с красной каймой предупреждают о приближающейся опасности. Круглые с красной каймой — запрещающие.",
        optionRationales: [
          "Предписывающие знаки — круглые с синим фоном и белыми символами, никогда не треугольные.",
          "",
          "У запрещающих действительно красная кайма, но они круглые, а не треугольные. Форма — ключ.",
          "Информационные знаки прямоугольные или квадратные, обычно на синем или зелёном фоне.",
        ],
      },
    },
  },
  {
    id: "signs-002",
    section: "signs",
    correctIndex: 2,
    translations: {
      es: {
        text: "La señal STOP obliga a…",
        options: [
          "Ceder el paso sin necesidad de detenerse",
          "Detenerse solo si hay vehículos visibles",
          "Detenerse completamente antes de la línea",
          "Reducir a 20 km/h y continuar",
        ],
        explanation:
          "La señal STOP obliga a detener el vehículo por completo antes de la línea de detención y a ceder el paso.",
        optionRationales: [
          "Ceder el paso sin detenerse es la señal de «ceda el paso» (R-1), no STOP (R-2).",
          "STOP obliga a la parada completa siempre, aunque no veas a nadie.",
          "",
          "20 km/h no es válido; STOP exige velocidad 0 antes de la línea.",
        ],
      },
      en: {
        text: "A STOP sign requires you to…",
        options: [
          "Yield without stopping",
          "Stop only if you see other vehicles",
          "Come to a complete stop before the line",
          "Slow to 20 km/h and continue",
        ],
        explanation:
          "A STOP sign requires a full stop before the stop line and giving way to other traffic.",
        optionRationales: [
          "Yielding without stopping is the 'yield' sign (R-1), not STOP (R-2).",
          "STOP always requires a full stop, even if you can't see anyone.",
          "",
          "20 km/h isn't valid; STOP demands zero speed before the line.",
        ],
      },
      ru: {
        text: "Знак STOP обязывает…",
        options: [
          "Уступить дорогу без остановки",
          "Остановиться только если видны другие машины",
          "Полностью остановиться перед линией",
          "Снизить скорость до 20 км/ч и продолжить",
        ],
        explanation:
          "Знак STOP обязывает полностью остановиться перед стоп-линией и уступить дорогу.",
        optionRationales: [
          "«Уступить без остановки» — это знак «уступите дорогу» (R-1), не STOP (R-2).",
          "STOP всегда требует полной остановки, даже если никого не видно.",
          "",
          "20 км/ч не подходит; STOP требует нулевой скорости перед линией.",
        ],
      },
    },
  },
  {
    id: "signs-003",
    section: "signs",
    correctIndex: 0,
    translations: {
      es: {
        text: "Una línea longitudinal continua en la calzada…",
        options: [
          "No puede cruzarse ni pisarse",
          "Puede cruzarse para adelantar",
          "Solo separa carriles del mismo sentido",
          "Indica un carril reservado",
        ],
        explanation:
          "Una línea continua no puede cruzarse ni pisarse salvo por necesidad (obstáculo, emergencia).",
        optionRationales: [
          "",
          "Cruzar una línea continua para adelantar es infracción; solo se cruza por necesidad (obstáculo, emergencia).",
          "También separa sentidos opuestos; su función no depende del sentido de las calzadas.",
          "Los carriles reservados se marcan con otras señales (BUS, taxi, bici), no solo con línea continua.",
        ],
      },
      en: {
        text: "A solid longitudinal line on the road…",
        options: [
          "Cannot be crossed or driven over",
          "Can be crossed to overtake",
          "Only separates lanes going the same way",
          "Marks a reserved lane",
        ],
        explanation:
          "A solid line cannot be crossed or driven over except out of necessity (obstacle, emergency).",
        optionRationales: [
          "",
          "Crossing a solid line to overtake is an offence; only cross out of necessity (obstacle, emergency).",
          "It also separates opposite-direction lanes; the rule doesn't depend on lane direction.",
          "Reserved lanes are marked by other signs (bus, taxi, bike), not just a solid line.",
        ],
      },
      ru: {
        text: "Сплошная продольная линия на дороге…",
        options: [
          "Пересекать и наезжать на неё нельзя",
          "Можно пересекать для обгона",
          "Разделяет только полосы одного направления",
          "Обозначает выделенную полосу",
        ],
        explanation:
          "Сплошную линию нельзя пересекать или наезжать, за исключением необходимости (препятствие, аварийная ситуация).",
        optionRationales: [
          "",
          "Пересекать сплошную для обгона — нарушение; только по необходимости (препятствие, аварийная).",
          "Она также разделяет встречные направления; правило не зависит от направления.",
          "Выделенные полосы обозначают другие знаки (автобус, такси, вело), не только сплошная.",
        ],
      },
    },
  },
  {
    id: "signs-004",
    section: "signs",
    correctIndex: 3,
    translations: {
      es: {
        text: "Una señal circular con fondo azul y una flecha blanca indica…",
        options: [
          "Prohibición",
          "Advertencia",
          "Fin de restricción",
          "Obligación (sentido obligatorio)",
        ],
        explanation:
          "Las señales circulares azules con símbolos blancos son señales de obligación.",
        optionRationales: [
          "Las de prohibición son circulares pero con borde rojo, no fondo azul.",
          "Las de advertencia son triangulares con borde rojo, no circulares azules.",
          "Fin de restricción se indica con círculo blanco con banda diagonal, no azul.",
          "",
        ],
      },
      en: {
        text: "A circular sign with a blue background and a white arrow indicates…",
        options: ["Prohibition", "Warning", "End of restriction", "Mandatory direction"],
        explanation:
          "Circular blue signs with white symbols are mandatory (obligation) signs.",
        optionRationales: [
          "Prohibitions are circular but with a red border, not a blue background.",
          "Warnings are triangular with a red border, not circular blue.",
          "End-of-restriction uses a white circle with a diagonal band, not blue.",
          "",
        ],
      },
      ru: {
        text: "Круглый знак с синим фоном и белой стрелкой означает…",
        options: ["Запрет", "Предупреждение", "Конец ограничения", "Обязательное направление"],
        explanation:
          "Круглые синие знаки с белыми символами — предписывающие.",
        optionRationales: [
          "Запрещающие тоже круглые, но с красной каймой, не синий фон.",
          "Предупреждающие — треугольные с красной каймой, не синие круглые.",
          "Конец ограничения — белый круг с диагональной полосой, а не синий.",
          "",
        ],
      },
    },
  },
  {
    id: "priorities-001",
    section: "priorities",
    correctIndex: 1,
    translations: {
      es: {
        text: "En una intersección sin señales ni semáforos, ¿quién tiene preferencia?",
        options: [
          "El vehículo que llegó primero",
          "El vehículo que viene por la derecha",
          "El vehículo más grande",
          "El vehículo que va más rápido",
        ],
        explanation:
          "En intersecciones sin señalización, la preferencia la tiene quien circula por la derecha.",
        optionRationales: [
          "El orden de llegada no determina la preferencia en cruces sin señalización.",
          "",
          "El tamaño nunca es criterio en la normativa española.",
          "La velocidad no da preferencia; podría además ser infracción.",
        ],
      },
      en: {
        text: "At an intersection with no signs or lights, who has priority?",
        options: [
          "Whoever arrived first",
          "The vehicle coming from the right",
          "The larger vehicle",
          "The faster vehicle",
        ],
        explanation:
          "At unsignaled intersections, priority is given to the vehicle coming from the right.",
        optionRationales: [
          "Arrival order isn't the priority criterion at unsignaled junctions.",
          "",
          "Size is never a criterion in Spanish traffic law.",
          "Speed doesn't grant priority; it may also be an offence.",
        ],
      },
      ru: {
        text: "На перекрёстке без знаков и светофоров кто имеет преимущество?",
        options: [
          "Кто первый подъехал",
          "Тот, кто едет справа",
          "Более крупный автомобиль",
          "Тот, кто едет быстрее",
        ],
        explanation:
          "На нерегулируемом перекрёстке преимущество имеет тот, кто движется справа (правило «помеха справа»).",
        optionRationales: [
          "Порядок подъезда не определяет приоритет на нерегулируемом перекрёстке.",
          "",
          "Размер никогда не критерий в испанских ПДД.",
          "Скорость не даёт приоритета; может ещё и быть нарушением.",
        ],
      },
    },
  },
  {
    id: "priorities-002",
    section: "priorities",
    correctIndex: 2,
    translations: {
      es: {
        text: "En una rotonda, la preferencia la tienen…",
        options: [
          "Los vehículos que entran",
          "Los peatones sobre los coches",
          "Los vehículos que ya circulan por ella",
          "Los que giran a la derecha",
        ],
        explanation:
          "En una glorieta, la preferencia la tienen los vehículos que ya están circulando por ella.",
        optionRationales: [
          "Es al revés: los que entran ceden el paso a quienes ya están dentro.",
          "Los peatones tienen preferencia en pasos de peatones específicos, no como regla general en la rotonda.",
          "",
          "El sentido del giro no cambia la regla; la preferencia sigue siendo de quien ya está dentro.",
        ],
      },
      en: {
        text: "At a roundabout, priority goes to…",
        options: [
          "Vehicles entering",
          "Pedestrians over cars",
          "Vehicles already circulating in the roundabout",
          "Those turning right",
        ],
        explanation:
          "At a roundabout, priority is given to vehicles already circulating within it.",
        optionRationales: [
          "The opposite: entering vehicles yield to those already inside.",
          "Pedestrians have priority at specific crossings, not as a general rule of the roundabout.",
          "",
          "Turn direction doesn't change the rule; priority stays with those already inside.",
        ],
      },
      ru: {
        text: "На круговом перекрёстке преимущество имеют…",
        options: [
          "Въезжающие автомобили",
          "Пешеходы над машинами",
          "Автомобили, уже движущиеся по кругу",
          "Те, кто поворачивает направо",
        ],
        explanation:
          "На круговом перекрёстке преимущество у автомобилей, уже движущихся по кругу.",
        optionRationales: [
          "Наоборот: въезжающие уступают тем, кто уже на кольце.",
          "Пешеходы имеют приоритет на конкретных переходах, а не в целом по кольцу.",
          "",
          "Направление поворота не меняет правило; приоритет у тех, кто уже на кругу.",
        ],
      },
    },
  },
  {
    id: "priorities-003",
    section: "priorities",
    correctIndex: 0,
    translations: {
      es: {
        text: "Un vehículo prioritario con luces y sirena…",
        options: [
          "Tiene preferencia sobre los demás usuarios",
          "No tiene ninguna preferencia especial",
          "Solo tiene preferencia en autopista",
          "Debe respetar todas las señales igual que los demás",
        ],
        explanation:
          "Los vehículos prioritarios en servicio urgente con señales luminosas y acústicas tienen preferencia.",
        optionRationales: [
          "",
          "Con luces y sirena en servicio urgente sí tienen preferencia; la clave son las señales activas.",
          "La preferencia se aplica en cualquier vía, no solo autopista.",
          "Los prioritarios pueden saltarse señales y límites de forma segura para atender la urgencia.",
        ],
      },
      en: {
        text: "An emergency vehicle with lights and siren…",
        options: [
          "Has priority over all other users",
          "Has no special priority",
          "Has priority only on the motorway",
          "Must obey signs just like everyone else",
        ],
        explanation:
          "Emergency vehicles on an urgent call with lights and siren have right of way.",
        optionRationales: [
          "",
          "With lights and siren on an urgent call they DO have priority; the active signals are the key.",
          "Priority applies on any road, not just motorways.",
          "Priority vehicles may safely bypass signs and limits to attend the emergency.",
        ],
      },
      ru: {
        text: "Автомобиль спецслужб с проблесковыми маячками и сиреной…",
        options: [
          "Имеет преимущество перед всеми остальными участниками движения",
          "Не имеет особого преимущества",
          "Имеет преимущество только на автомагистрали",
          "Обязан соблюдать все знаки как обычные машины",
        ],
        explanation:
          "Автомобили экстренных служб при выполнении срочного вызова с включёнными маячками и сиреной имеют преимущество.",
        optionRationales: [
          "",
          "С мигалкой и сиреной на срочном вызове преимущество ЕСТЬ; ключ — активные сигналы.",
          "Преимущество действует на любой дороге, не только на автомагистрали.",
          "Спецтранспорт может безопасно превышать и не выполнять знаки для срочного вызова.",
        ],
      },
    },
  },
  {
    id: "alcohol-001",
    section: "alcohol_drugs",
    correctIndex: 1,
    translations: {
      es: {
        text: "¿Cuál es la tasa máxima de alcohol en aire espirado para un conductor con más de 2 años de carnet (B)?",
        options: ["0,15 mg/l", "0,25 mg/l", "0,50 mg/l", "0,10 mg/l"],
        explanation:
          "El límite general es 0,25 mg/l en aire espirado (0,5 g/l en sangre). Para conductores noveles y profesionales es 0,15 mg/l.",
        optionRationales: [
          "0,15 mg/l es el límite de NOVELES y profesionales, no del conductor general.",
          "",
          "0,50 g/l es el límite general pero en SANGRE, no en aire; hay que fijarse en la unidad.",
          "0,10 mg/l no es un límite legal en la normativa española.",
        ],
      },
      en: {
        text: "What is the maximum blood alcohol level in exhaled air for a driver with more than 2 years of a B licence?",
        options: ["0.15 mg/l", "0.25 mg/l", "0.50 mg/l", "0.10 mg/l"],
        explanation:
          "The general limit is 0.25 mg/l in exhaled air (0.5 g/l in blood). Novice and professional drivers: 0.15 mg/l.",
        optionRationales: [
          "0.15 mg/l is the NOVICE / professional limit, not the general driver limit.",
          "",
          "0.50 g/l is the general limit but in BLOOD, not exhaled air — watch the unit.",
          "0.10 mg/l isn't a legal threshold in Spanish law.",
        ],
      },
      ru: {
        text: "Какова максимальная концентрация алкоголя в выдыхаемом воздухе для водителя со стажем более 2 лет (категория B)?",
        options: ["0,15 мг/л", "0,25 мг/л", "0,50 мг/л", "0,10 мг/л"],
        explanation:
          "Общий предел — 0,25 мг/л в выдыхаемом воздухе (0,5 г/л в крови). Для начинающих и профессиональных водителей — 0,15 мг/л.",
        optionRationales: [
          "0,15 мг/л — предел для НАЧИНАЮЩИХ и профи, не для общего водителя.",
          "",
          "0,50 г/л — общий предел, но в КРОВИ, не в воздухе; следи за единицами.",
          "0,10 мг/л — не является законным пределом в испанском законодательстве.",
        ],
      },
    },
  },
  {
    id: "alcohol-002",
    section: "alcohol_drugs",
    correctIndex: 2,
    translations: {
      es: {
        text: "¿Durante cuántos años se considera conductor novel?",
        options: ["1 año", "3 años", "2 años", "5 años"],
        explanation:
          "Un conductor es considerado novel durante los 2 primeros años tras obtener el carnet.",
        optionRationales: [
          "1 año es demasiado corto; el manual fija exactamente 2 años.",
          "3 años es el periodo tras el cual (sin sanciones) se pasa de 8 a 14 puntos; no es «novel».",
          "",
          "5 años no corresponde a «novel»; a los 5 años se puede subir a 14 puntos.",
        ],
      },
      en: {
        text: "For how many years is a driver considered a 'novel' (novice) driver?",
        options: ["1 year", "3 years", "2 years", "5 years"],
        explanation:
          "A driver is considered a novice for the first 2 years after obtaining their licence.",
        optionRationales: [
          "1 year is too short; the manual sets it at exactly 2 years.",
          "3 years is the period after which (no penalties) points go from 8 to 14; not 'novice'.",
          "",
          "5 years isn't 'novice'; at 5 years you can move up to 14 points.",
        ],
      },
      ru: {
        text: "Сколько лет водитель считается начинающим?",
        options: ["1 год", "3 года", "2 года", "5 лет"],
        explanation:
          "Водитель считается начинающим первые 2 года после получения прав.",
        optionRationales: [
          "1 год — слишком мало; в руководстве ровно 2 года.",
          "3 года — срок, через который (без штрафов) переходят с 8 к 14 баллов; не «начинающий».",
          "",
          "5 лет — не «начинающий»; через 5 лет можно перейти на 14 баллов.",
        ],
      },
    },
  },
  {
    id: "alcohol-003",
    section: "alcohol_drugs",
    correctIndex: 3,
    translations: {
      es: {
        text: "Consumir cannabis afecta a la conducción…",
        options: [
          "Solo en dosis muy altas",
          "No afecta si te sientes bien",
          "Menos que el alcohol",
          "Disminuye reflejos, atención y percepción del riesgo",
        ],
        explanation:
          "El cannabis reduce los reflejos, la atención y la percepción del riesgo, aumentando la probabilidad de accidente.",
        optionRationales: [
          "El cannabis afecta también con dosis moderadas; no hay «umbral seguro» al volante.",
          "La sensación subjetiva no es fiable; el consumidor cree estar bien mientras sus reflejos están reducidos.",
          "Cannabis y alcohol tienen efectos distintos pero comparables en la conducción; ambos son incompatibles con el volante.",
          "",
        ],
      },
      en: {
        text: "Consuming cannabis affects driving…",
        options: [
          "Only in very high doses",
          "It doesn't affect you if you feel fine",
          "Less than alcohol does",
          "It reduces reflexes, attention, and risk perception",
        ],
        explanation:
          "Cannabis reduces reflexes, attention, and risk perception, increasing crash probability.",
        optionRationales: [
          "Cannabis impairs even at moderate doses; there's no 'safe threshold' behind the wheel.",
          "Subjective feeling is unreliable; you can feel fine while your reflexes are impaired.",
          "Cannabis and alcohol have different but comparable effects on driving; both are incompatible with driving.",
          "",
        ],
      },
      ru: {
        text: "Употребление каннабиса влияет на вождение…",
        options: [
          "Только в очень больших дозах",
          "Не влияет, если чувствуешь себя нормально",
          "Меньше, чем алкоголь",
          "Снижает реакцию, внимание и восприятие риска",
        ],
        explanation:
          "Каннабис снижает реакцию, внимание и восприятие риска, повышая вероятность ДТП.",
        optionRationales: [
          "Каннабис действует и в умеренных дозах; «безопасного порога» за рулём нет.",
          "Субъективные ощущения ненадёжны; можно чувствовать себя нормально при сниженной реакции.",
          "У каннабиса и алкоголя разные, но сопоставимые эффекты на вождение; оба несовместимы с рулём.",
          "",
        ],
      },
    },
  },
  {
    id: "safety-001",
    section: "safety",
    correctIndex: 0,
    translations: {
      es: {
        text: "El uso del cinturón de seguridad es obligatorio…",
        options: [
          "Para todos los ocupantes, delante y detrás",
          "Solo para el conductor",
          "Solo en carretera, no en ciudad",
          "Solo para asientos delanteros",
        ],
        explanation:
          "El cinturón es obligatorio para todos los ocupantes del vehículo, en todos los asientos y en todo tipo de vía.",
        optionRationales: [
          "",
          "Los pasajeros no llevar cinturón multiplican por 8 la lesión grave; siempre obligatorio.",
          "El tipo de vía no cambia la norma; también dentro de ciudad es obligatorio.",
          "Los ocupantes traseros sin cinturón son proyectiles en un impacto; obligatorio también atrás.",
        ],
      },
      en: {
        text: "Wearing a seatbelt is mandatory…",
        options: [
          "For all occupants, front and rear seats",
          "Only for the driver",
          "Only on highways, not in the city",
          "Only for front seats",
        ],
        explanation:
          "Seatbelts are mandatory for all occupants of the vehicle, in every seat and on every type of road.",
        optionRationales: [
          "",
          "Unbelted passengers multiply serious injury 8×; always mandatory.",
          "Road type doesn't change the rule; also mandatory in cities.",
          "Unbelted rear passengers become projectiles in a crash; mandatory in the rear too.",
        ],
      },
      ru: {
        text: "Использование ремня безопасности обязательно…",
        options: [
          "Для всех пассажиров, спереди и сзади",
          "Только для водителя",
          "Только на трассе, не в городе",
          "Только для передних сидений",
        ],
        explanation:
          "Ремни безопасности обязательны для всех пассажиров, на всех сиденьях и на любых дорогах.",
        optionRationales: [
          "",
          "Непристёгнутые пассажиры увеличивают риск тяжёлых травм в 8 раз; обязательно всегда.",
          "Тип дороги не меняет правило; в городе тоже обязательно.",
          "Непристёгнутые сзади становятся «снарядами» при ударе; обязательно и сзади.",
        ],
      },
    },
  },
  {
    id: "safety-002",
    section: "safety",
    correctIndex: 2,
    termIds: ["sri", "cinturon_seguridad"],
    translations: {
      es: {
        text: "Los niños menores de qué estatura deben usar sistema de retención infantil (SRI)?",
        options: ["1,20 m", "1,50 m", "1,35 m", "1,25 m"],
        explanation:
          "Los menores de 1,35 m de estatura deben usar sistema de retención infantil homologado adaptado a su talla y peso.",
        optionRationales: [
          "1,20 m está por debajo del umbral legal; niños entre 1,20 y 1,35 aún necesitan SRI.",
          "1,50 m es demasiado alto; corresponde a la talla media de adultos bajitos.",
          "",
          "1,25 m también es inferior al umbral; hasta 1,35 m es SRI obligatorio.",
        ],
      },
      en: {
        text: "Children under what height must use a child restraint system (CRS)?",
        options: ["1.20 m", "1.50 m", "1.35 m", "1.25 m"],
        explanation:
          "Children under 1.35 m must use an approved child restraint system suited to their height and weight.",
        optionRationales: [
          "1.20 m is below the legal threshold; kids between 1.20 and 1.35 still need CRS.",
          "1.50 m is too tall; that's the height of shorter adults.",
          "",
          "1.25 m is also below the threshold; CRS is required up to 1.35 m.",
        ],
      },
      ru: {
        text: "Дети какого роста обязаны использовать детское удерживающее устройство?",
        options: ["1,20 м", "1,50 м", "1,35 м", "1,25 м"],
        explanation:
          "Дети ростом менее 1,35 м обязаны использовать сертифицированное детское кресло, подходящее по росту и весу.",
        optionRationales: [
          "1,20 м ниже порога; дети от 1,20 до 1,35 всё равно нужно кресло.",
          "1,50 м — слишком много; это рост невысоких взрослых.",
          "",
          "1,25 м тоже ниже порога; до 1,35 м кресло обязательно.",
        ],
      },
    },
  },
  {
    id: "safety-003",
    section: "safety",
    correctIndex: 1,
    termIds: ["pas"],
    translations: {
      es: {
        text: "En caso de accidente, la primera actuación debe ser…",
        options: [
          "Mover a los heridos fuera del vehículo",
          "Proteger el lugar (P.A.S.: Proteger, Avisar, Socorrer)",
          "Fotografiar los daños",
          "Llamar a la aseguradora",
        ],
        explanation:
          "Se sigue el protocolo P.A.S.: Proteger primero (señalizar, luces de emergencia), después Avisar (112), finalmente Socorrer.",
        optionRationales: [
          "Mover a los heridos solo si hay peligro inmediato (incendio); puede agravar lesiones cervicales.",
          "",
          "Las fotos son para el parte y la aseguradora, después de proteger, avisar y socorrer.",
          "La aseguradora se avisa después de los servicios de emergencia; primero P.A.S.",
        ],
      },
      en: {
        text: "At an accident scene, the first action should be…",
        options: [
          "Move the injured out of the vehicle",
          "Secure the scene (P.A.S.: Protect, Alert, Aid)",
          "Photograph the damage",
          "Call your insurance",
        ],
        explanation:
          "Follow the P.A.S. protocol: Protect first (warning triangles, hazard lights), then Alert (112), finally Aid.",
        optionRationales: [
          "Moving casualties is only for immediate danger (fire); it can worsen cervical injuries.",
          "",
          "Photos are for the claim, after protecting, alerting and aiding.",
          "The insurer is called after emergency services; P.A.S. first.",
        ],
      },
      ru: {
        text: "При ДТП первым действием должно быть…",
        options: [
          "Вытащить пострадавших из машины",
          "Обеспечить безопасность места (P.A.S.: защитить, сообщить, помочь)",
          "Сфотографировать повреждения",
          "Позвонить в страховую",
        ],
        explanation:
          "Следуйте протоколу P.A.S.: сначала защитить (аварийка, знак), затем сообщить (112), затем оказать помощь.",
        optionRationales: [
          "Пострадавших двигают только при явной опасности (пожар); можно усугубить травму шеи.",
          "",
          "Фото — для страховой, уже после защиты, звонка и помощи.",
          "Страховую вызывают ПОСЛЕ экстренных служб; сначала P.A.S.",
        ],
      },
    },
  },
  {
    id: "mechanics-001",
    section: "mechanics",
    correctIndex: 1,
    translations: {
      es: {
        text: "La profundidad mínima legal del dibujo de los neumáticos de un turismo es…",
        options: ["1,0 mm", "1,6 mm", "2,0 mm", "3,0 mm"],
        explanation:
          "La profundidad mínima legal del dibujo es de 1,6 mm en toda la banda de rodadura.",
        optionRationales: [
          "1,0 mm es inferior al mínimo legal; con ese dibujo hay que cambiar.",
          "",
          "2,0 mm es una recomendación de seguridad (cambio anticipado), no el mínimo legal.",
          "3,0 mm es una recomendación conservadora, no la cifra legal.",
        ],
      },
      en: {
        text: "The minimum legal tread depth for car tyres is…",
        options: ["1.0 mm", "1.6 mm", "2.0 mm", "3.0 mm"],
        explanation:
          "The minimum legal tread depth is 1.6 mm across the entire main tread of the tyre.",
        optionRationales: [
          "1.0 mm is below the legal minimum; at that depth replace them.",
          "",
          "2.0 mm is a safety recommendation (change earlier), not the legal minimum.",
          "3.0 mm is a conservative recommendation, not the legal figure.",
        ],
      },
      ru: {
        text: "Минимальная законная глубина протектора шин легкового авто…",
        options: ["1,0 мм", "1,6 мм", "2,0 мм", "3,0 мм"],
        explanation:
          "Минимальная законная глубина протектора — 1,6 мм по всей ширине протектора.",
        optionRationales: [
          "1,0 мм ниже законного минимума; при таком износе — менять.",
          "",
          "2,0 мм — рекомендация безопасности (менять заранее), не законный минимум.",
          "3,0 мм — консервативная рекомендация, не законная цифра.",
        ],
      },
    },
  },
  {
    id: "mechanics-002",
    section: "mechanics",
    correctIndex: 2,
    translations: {
      es: {
        text: "Si se enciende el testigo rojo de aceite mientras conduce, debe…",
        options: [
          "Continuar hasta llegar a casa",
          "Aumentar las revoluciones para lubricar mejor",
          "Detenerse cuanto antes en un lugar seguro y apagar el motor",
          "Añadir agua al depósito",
        ],
        explanation:
          "El testigo rojo de presión de aceite indica un problema grave; hay que detenerse cuanto antes y apagar el motor para evitar averías graves.",
        optionRationales: [
          "Continuar sin lubricación adecuada puede fundir el motor.",
          "Aumentar revoluciones sin presión de aceite acelera el desgaste catastrófico.",
          "",
          "El agua es para el sistema de refrigeración, no para el circuito de aceite.",
        ],
      },
      en: {
        text: "If the red oil warning light comes on while driving, you should…",
        options: [
          "Keep driving until you get home",
          "Rev the engine higher to improve lubrication",
          "Stop as soon as safely possible and switch off the engine",
          "Add water to the tank",
        ],
        explanation:
          "The red oil-pressure light signals a serious problem. Stop safely as soon as possible and switch off the engine to avoid engine damage.",
        optionRationales: [
          "Driving on without proper lubrication can seize the engine.",
          "Revving with no oil pressure accelerates catastrophic wear.",
          "",
          "Water is for the cooling system, not the oil circuit.",
        ],
      },
      ru: {
        text: "Если во время движения загорелся красный индикатор давления масла, следует…",
        options: [
          "Ехать дальше до дома",
          "Увеличить обороты для лучшей смазки",
          "Как можно скорее остановиться в безопасном месте и заглушить двигатель",
          "Долить воды в бачок",
        ],
        explanation:
          "Красный индикатор давления масла — признак серьёзной проблемы. Нужно как можно скорее безопасно остановиться и заглушить двигатель, чтобы избежать поломки.",
        optionRationales: [
          "Дальнейшая езда без нормальной смазки может заклинить двигатель.",
          "Раскручивать обороты без давления масла — катастрофический износ.",
          "",
          "Вода — для системы охлаждения, не для смазки.",
        ],
      },
    },
  },
  {
    id: "mechanics-003",
    section: "mechanics",
    correctIndex: 3,
    termIds: ["aquaplaning"],
    translations: {
      es: {
        text: "El aquaplaning (hidroplaneo) se produce cuando…",
        options: [
          "El motor se sobrecalienta con la lluvia",
          "Los frenos pierden su eficacia por humedad",
          "El limpiaparabrisas no funciona",
          "Los neumáticos pierden contacto con la calzada por una capa de agua",
        ],
        explanation:
          "El aquaplaning ocurre cuando el neumático no puede evacuar el agua y flota sobre ella, perdiendo la adherencia con el asfalto.",
        optionRationales: [
          "La lluvia refresca el motor, no lo sobrecalienta; ese no es el fenómeno.",
          "La humedad puede reducir un momento la fricción del disco, pero es diferente del aquaplaning.",
          "Un limpiaparabrisas roto reduce visibilidad, no causa pérdida de adherencia por agua.",
          "",
        ],
      },
      en: {
        text: "Aquaplaning occurs when…",
        options: [
          "The engine overheats in the rain",
          "The brakes lose effectiveness due to moisture",
          "The wiper stops working",
          "The tyres lose contact with the road due to a layer of water",
        ],
        explanation:
          "Aquaplaning happens when tyres cannot channel the water away and float on top of it, losing grip with the road surface.",
        optionRationales: [
          "Rain cools the engine, doesn't overheat it; wrong phenomenon.",
          "Moisture briefly cuts disc friction, but that's different from aquaplaning.",
          "A broken wiper reduces visibility, not tyre grip on water.",
          "",
        ],
      },
      ru: {
        text: "Аквапланирование возникает, когда…",
        options: [
          "Двигатель перегревается под дождём",
          "Тормоза теряют эффективность из-за влаги",
          "Стеклоочиститель не работает",
          "Шины теряют контакт с дорогой из-за слоя воды",
        ],
        explanation:
          "Аквапланирование происходит, когда шина не успевает отвести воду и «всплывает» над ней, теряя сцепление с покрытием.",
        optionRationales: [
          "Дождь охлаждает двигатель, а не перегревает; это не про то явление.",
          "Влажность на короткое время уменьшает трение дисков, но это не аквапланирование.",
          "Сломанный дворник ухудшает обзор, а не сцепление шин.",
          "",
        ],
      },
    },
  },
  {
    id: "admin-001",
    section: "admin",
    correctIndex: 1,
    translations: {
      es: {
        text: "El permiso B se debe renovar (para menores de 65 años) cada…",
        options: ["5 años", "10 años", "15 años", "20 años"],
        explanation:
          "El permiso B se renueva cada 10 años hasta los 65 años; a partir de esa edad, cada 5 años.",
        optionRationales: [
          "5 años es la frecuencia a partir de los 65, no antes.",
          "",
          "15 años no es un plazo oficial de renovación.",
          "20 años tampoco; no aplica en la normativa española.",
        ],
      },
      en: {
        text: "A B licence must be renewed (for drivers under 65) every…",
        options: ["5 years", "10 years", "15 years", "20 years"],
        explanation:
          "The B licence is renewed every 10 years up to age 65; from 65 onwards, every 5 years.",
        optionRationales: [
          "5 years is the interval from 65 onwards, not before.",
          "",
          "15 years isn't an official renewal period.",
          "20 years doesn't apply in Spanish law.",
        ],
      },
      ru: {
        text: "Права категории B (для лиц младше 65 лет) продлеваются каждые…",
        options: ["5 лет", "10 лет", "15 лет", "20 лет"],
        explanation:
          "Права категории B продлеваются каждые 10 лет до 65 лет; после 65 — каждые 5 лет.",
        optionRationales: [
          "5 лет — интервал с 65 лет, не раньше.",
          "",
          "15 лет — не официальный срок продления.",
          "20 лет — не применяется в испанском законодательстве.",
        ],
      },
    },
  },
  {
    id: "admin-002",
    section: "admin",
    correctIndex: 0,
    translations: {
      es: {
        text: "¿Con cuántos puntos empieza un conductor novel?",
        options: ["8 puntos", "12 puntos", "10 puntos", "15 puntos"],
        explanation:
          "El conductor novel empieza con 8 puntos y, tras 3 años sin sanciones que le resten, pasa a tener 12.",
        optionRationales: [
          "",
          "12 puntos se tienen TRAS 3 años sin sanciones desde el permiso; no al empezar.",
          "10 puntos no es una cifra oficial del sistema.",
          "15 puntos es el máximo posible tras 8+ años sin faltas, no para un novel.",
        ],
      },
      en: {
        text: "How many points does a novice driver start with?",
        options: ["8 points", "12 points", "10 points", "15 points"],
        explanation:
          "A novice driver starts with 8 points; after 3 years without deduction they reach the standard 12.",
        optionRationales: [
          "",
          "12 points is reached AFTER 3 years without offences; not at the start.",
          "10 points isn't an official figure.",
          "15 points is the max after 8+ years without offences, not a novice figure.",
        ],
      },
      ru: {
        text: "Со скольких баллов начинает начинающий водитель?",
        options: ["8 баллов", "12 баллов", "10 баллов", "15 баллов"],
        explanation:
          "Начинающий водитель начинает с 8 баллов; через 3 года без штрафных вычетов — стандартные 12.",
        optionRationales: [
          "",
          "12 баллов — уже ПОСЛЕ 3 лет без нарушений; не с самого старта.",
          "10 баллов — не официальная цифра.",
          "15 баллов — максимум после 8+ лет без нарушений, не для начинающего.",
        ],
      },
    },
  },
  {
    id: "driving-001",
    section: "driving_conditions",
    correctIndex: 2,
    translations: {
      es: {
        text: "La velocidad máxima genérica en autopista para un turismo es…",
        options: ["100 km/h", "110 km/h", "120 km/h", "130 km/h"],
        explanation:
          "La velocidad máxima genérica en autopista y autovía para turismos y motocicletas es 120 km/h.",
        optionRationales: [
          "100 km/h es el límite genérico de autobuses en autopista, no de turismos.",
          "110 km/h no es un límite oficial actualmente.",
          "",
          "130 km/h no es válido en España; algunos países vecinos sí lo permiten (Francia).",
        ],
      },
      en: {
        text: "The general maximum speed on a motorway for a car is…",
        options: ["100 km/h", "110 km/h", "120 km/h", "130 km/h"],
        explanation:
          "The general maximum speed on motorways and dual carriageways for cars and motorcycles is 120 km/h.",
        optionRationales: [
          "100 km/h is the bus limit on motorway, not the car limit.",
          "110 km/h isn't a current official limit.",
          "",
          "130 km/h isn't valid in Spain; some neighbours allow it (France).",
        ],
      },
      ru: {
        text: "Общий максимальный скоростной лимит на автомагистрали для легкового авто…",
        options: ["100 км/ч", "110 км/ч", "120 км/ч", "130 км/ч"],
        explanation:
          "На автомагистралях и скоростных автодорогах общий предел для легковых авто и мотоциклов — 120 км/ч.",
        optionRationales: [
          "100 км/ч — лимит для автобусов, не для легковых.",
          "110 км/ч — не действующий официальный лимит.",
          "",
          "130 км/ч в Испании не действует; в некоторых соседних странах — да (Франция).",
        ],
      },
    },
  },
  {
    id: "driving-002",
    section: "driving_conditions",
    correctIndex: 1,
    translations: {
      es: {
        text: "En vías urbanas de un único carril por sentido, la velocidad máxima genérica es…",
        options: ["20 km/h", "30 km/h", "50 km/h", "40 km/h"],
        explanation:
          "Desde 2021, en vías urbanas de un solo carril por sentido la velocidad máxima es 30 km/h (20 km/h si la calzada y acera están al mismo nivel).",
        optionRationales: [
          "20 km/h aplica solo si la calzada y la acera están al mismo nivel (plataforma única).",
          "",
          "50 km/h aplica cuando hay dos o más carriles por sentido, no con uno solo.",
          "40 km/h no es un límite oficial en vías urbanas.",
        ],
      },
      en: {
        text: "On urban roads with a single lane per direction, the general speed limit is…",
        options: ["20 km/h", "30 km/h", "50 km/h", "40 km/h"],
        explanation:
          "Since 2021, on urban roads with one lane per direction the limit is 30 km/h (20 km/h if the road and pavement are at the same level).",
        optionRationales: [
          "20 km/h applies only if road and pavement are at the same level (shared platform).",
          "",
          "50 km/h applies with 2+ lanes per direction, not a single lane.",
          "40 km/h isn't an official urban limit.",
        ],
      },
      ru: {
        text: "На городских дорогах с одной полосой в каждом направлении общий скоростной лимит…",
        options: ["20 км/ч", "30 км/ч", "50 км/ч", "40 км/ч"],
        explanation:
          "С 2021 года на городских дорогах с одной полосой в каждом направлении лимит — 30 км/ч (20 км/ч, если проезжая часть и тротуар на одном уровне).",
        optionRationales: [
          "20 км/ч — только если проезжая часть и тротуар на одном уровне.",
          "",
          "50 км/ч — при 2+ полосах в направлении, не при одной.",
          "40 км/ч — не официальный городской лимит.",
        ],
      },
    },
  },
  {
    id: "driving-003",
    section: "driving_conditions",
    correctIndex: 3,
    translations: {
      es: {
        text: "Con niebla intensa debe utilizar…",
        options: [
          "Solo las luces de cruce",
          "Las largas para ver mejor",
          "Solo las de posición",
          "Luces de cruce y, si dispone, antinieblas",
        ],
        explanation:
          "Con niebla se usan luces de cruce y antinieblas delanteras; nunca las largas, que reflejan la niebla y deslumbran.",
        optionRationales: [
          "Solo cruce está bien, pero si tienes antinieblas hay que usarlas también.",
          "Las largas se reflejan en la niebla como una pared blanca y te deslumbran a ti mismo.",
          "Solo posición no ilumina la carretera; peligroso.",
          "",
        ],
      },
      en: {
        text: "In dense fog you should use…",
        options: [
          "Only dipped-beam headlights",
          "High beams so you can see better",
          "Only sidelights",
          "Dipped beams and, if fitted, front fog lights",
        ],
        explanation:
          "In fog use dipped beams and front fog lights; never high beams — they reflect on the fog and dazzle you.",
        optionRationales: [
          "Dipped alone is OK, but if you have fog lights they should also be used.",
          "High beams reflect off the fog like a white wall and dazzle you.",
          "Sidelights alone don't light the road; dangerous.",
          "",
        ],
      },
      ru: {
        text: "В густом тумане следует использовать…",
        options: [
          "Только ближний свет",
          "Дальний свет — так лучше видно",
          "Только габаритные огни",
          "Ближний свет и, если есть, передние противотуманные фары",
        ],
        explanation:
          "В тумане используют ближний свет и передние противотуманные фары; дальний нельзя — он отражается от тумана и слепит.",
        optionRationales: [
          "Один ближний — можно, но если есть противотуманки, их тоже надо включить.",
          "Дальний отражается от тумана как белая стена и слепит самого водителя.",
          "Только габариты не освещают дорогу; опасно.",
          "",
        ],
      },
    },
  },
  {
    id: "driving-004",
    section: "driving_conditions",
    correctIndex: 0,
    termIds: ["adelantamiento", "ciclo"],
    translations: {
      es: {
        text: "En un adelantamiento fuera de poblado a un ciclista, la separación lateral mínima es…",
        options: ["1,5 metros", "1 metro", "2 metros", "50 centímetros"],
        explanation:
          "Al adelantar a un ciclista fuera de poblado hay que dejar al menos 1,5 m de separación lateral. Puede invadirse la línea continua si es seguro.",
        optionRationales: [
          "",
          "1 m es inferior al mínimo legal; una ráfaga o bache y el ciclista sale volando.",
          "2 m es una separación buena en la práctica, pero el mínimo legal es 1,5.",
          "50 cm es muy peligroso y sanción de −6 puntos + multa.",
        ],
      },
      en: {
        text: "When overtaking a cyclist outside built-up areas, the minimum lateral clearance is…",
        options: ["1.5 metres", "1 metre", "2 metres", "50 centimetres"],
        explanation:
          "When overtaking a cyclist outside built-up areas you must leave at least 1.5 m clearance. You may cross a solid line to do it safely.",
        optionRationales: [
          "",
          "1 m is below the legal minimum; a gust or pothole and the cyclist is down.",
          "2 m is good practice, but the legal minimum is 1.5.",
          "50 cm is extremely dangerous and carries −6 points + fine.",
        ],
      },
      ru: {
        text: "При обгоне велосипедиста вне населённого пункта минимальный боковой интервал…",
        options: ["1,5 метра", "1 метр", "2 метра", "50 сантиметров"],
        explanation:
          "При обгоне велосипедиста вне населённого пункта нужно оставлять не менее 1,5 м бокового интервала. Разрешается пересечь сплошную, если это безопасно.",
        optionRationales: [
          "",
          "1 м меньше законного минимума; порыв ветра или яма — велосипедист падает.",
          "2 м — хорошая практика, но законный минимум 1,5.",
          "50 см крайне опасно и штрафуется −6 баллов + штраф.",
        ],
      },
    },
  },
  {
    id: "others-001",
    section: "others",
    correctIndex: 2,
    translations: {
      es: {
        text: "El uso del teléfono móvil sujeto con la mano mientras se conduce…",
        options: [
          "Está permitido en semáforos rojos",
          "Está permitido con manos libres siempre",
          "Está prohibido y sanciona con 6 puntos y multa",
          "Está permitido en carreteras convencionales",
        ],
        explanation:
          "Sujetar el móvil mientras se conduce está prohibido y conlleva 6 puntos y multa. Manos libres sí está permitido si no requiere sujeción manual.",
        optionRationales: [
          "Aunque el vehículo esté parado en un semáforo, sigues siendo conductor y no se puede sujetar el móvil.",
          "Manos libres es la variante permitida (sin sujetar), pero la pregunta habla de móvil SUJETO con la mano.",
          "",
          "El tipo de vía no cambia la norma; sujetar el móvil está prohibido en todas partes.",
        ],
      },
      en: {
        text: "Using a hand-held mobile phone while driving…",
        options: [
          "Is allowed at red lights",
          "Is always allowed with hands-free",
          "Is prohibited and penalised with 6 points and a fine",
          "Is allowed on rural roads",
        ],
        explanation:
          "Holding a phone while driving is prohibited: 6 points and a fine. Hands-free is allowed if it doesn't need to be held.",
        optionRationales: [
          "Even stopped at a red light you're still driving; holding the phone is banned.",
          "Hands-free is the allowed alternative (no holding), but the question is about a HAND-held phone.",
          "",
          "Road type doesn't change the rule; holding the phone is banned everywhere.",
        ],
      },
      ru: {
        text: "Использование мобильного телефона в руке во время вождения…",
        options: [
          "Разрешено на красный сигнал светофора",
          "Всегда разрешено через громкую связь",
          "Запрещено, штраф и −6 баллов",
          "Разрешено на обычных дорогах",
        ],
        explanation:
          "Держать телефон в руке за рулём запрещено: −6 баллов и штраф. Громкая связь разрешена, если не требуется держать устройство.",
        optionRationales: [
          "Даже стоя на красном, ты водитель — держать телефон нельзя.",
          "Громкая связь — разрешённый вариант (без удержания), но вопрос о ТЕЛЕФОНЕ В РУКЕ.",
          "",
          "Тип дороги не меняет правила; держать телефон запрещено везде.",
        ],
      },
    },
  },
  {
    id: "others-002",
    section: "others",
    correctIndex: 1,
    translations: {
      es: {
        text: "Ante un ceda el paso, debe…",
        options: [
          "Detenerse siempre",
          "Reducir la velocidad y ceder el paso a los vehículos con preferencia",
          "Continuar sin variar la velocidad",
          "Detenerse solo si hay peatones",
        ],
        explanation:
          "El ceda el paso obliga a ceder el paso a los vehículos con preferencia, sin necesidad obligatoria de detenerse si la vía está libre.",
        optionRationales: [
          "Detenerse siempre es la señal STOP, no ceda el paso. Aquí solo se para si hace falta.",
          "",
          "Mantener la velocidad ignora el deber de ceder el paso si hay tráfico.",
          "El ceda el paso obliga a ceder a los vehículos con preferencia; los peatones tienen sus propias reglas.",
        ],
      },
      en: {
        text: "At a yield sign you must…",
        options: [
          "Always stop",
          "Slow down and give way to vehicles with priority",
          "Continue at the same speed",
          "Stop only if there are pedestrians",
        ],
        explanation:
          "A yield sign requires you to give way to vehicles with priority; you don't have to stop if the road is clear.",
        optionRationales: [
          "Always-stopping is STOP, not yield. Here you only stop if needed.",
          "",
          "Keeping speed ignores the duty to yield when traffic is present.",
          "Yield requires giving way to priority vehicles; pedestrians follow their own rules.",
        ],
      },
      ru: {
        text: "Знак «уступите дорогу» обязывает…",
        options: [
          "Всегда останавливаться",
          "Снизить скорость и уступить дорогу транспорту с преимуществом",
          "Продолжить движение без изменения скорости",
          "Останавливаться только если есть пешеходы",
        ],
        explanation:
          "Знак «уступите дорогу» обязывает уступить транспорту с преимуществом; останавливаться при свободной дороге не обязательно.",
        optionRationales: [
          "Всегда останавливаться — это STOP, а не «уступите». Здесь останавливаются только при необходимости.",
          "",
          "Сохранять скорость игнорирует обязанность уступить при наличии транспорта.",
          "«Уступите» касается транспорта с преимуществом; у пешеходов свои правила.",
        ],
      },
    },
  },
];

export const QUESTIONS: Question[] = [
  ...SEED,
  ...QUESTIONS_MANUAL_T2,
  ...QUESTIONS_MANUAL_T3,
  ...QUESTIONS_MANUAL_T4,
  ...QUESTIONS_MANUAL_T5,
  ...QUESTIONS_MANUAL_T6,
  ...QUESTIONS_MANUAL_T7,
  ...QUESTIONS_MANUAL_T8,
  ...QUESTIONS_MANUAL_T9,
  ...QUESTIONS_MANUAL_T10,
  ...QUESTIONS_MANUAL_T11,
  ...QUESTIONS_MANUAL_T12,
  ...QUESTIONS_MANUAL_T13,
  ...QUESTIONS_MANUAL_T14,
  ...QUESTIONS_MANUAL_T15,
  ...QUESTIONS_MANUAL_T16,
  ...QUESTIONS_MANUAL_T17,
  ...QUESTIONS_MANUAL_ANEXO,
];
