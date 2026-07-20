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
      },
      en: {
        text: "A circular sign with a blue background and a white arrow indicates…",
        options: ["Prohibition", "Warning", "End of restriction", "Mandatory direction"],
        explanation:
          "Circular blue signs with white symbols are mandatory (obligation) signs.",
      },
      ru: {
        text: "Круглый знак с синим фоном и белой стрелкой означает…",
        options: ["Запрет", "Предупреждение", "Конец ограничения", "Обязательное направление"],
        explanation:
          "Круглые синие знаки с белыми символами — предписывающие.",
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
      },
      en: {
        text: "What is the maximum blood alcohol level in exhaled air for a driver with more than 2 years of a B licence?",
        options: ["0.15 mg/l", "0.25 mg/l", "0.50 mg/l", "0.10 mg/l"],
        explanation:
          "The general limit is 0.25 mg/l in exhaled air (0.5 g/l in blood). Novice and professional drivers: 0.15 mg/l.",
      },
      ru: {
        text: "Какова максимальная концентрация алкоголя в выдыхаемом воздухе для водителя со стажем более 2 лет (категория B)?",
        options: ["0,15 мг/л", "0,25 мг/л", "0,50 мг/л", "0,10 мг/л"],
        explanation:
          "Общий предел — 0,25 мг/л в выдыхаемом воздухе (0,5 г/л в крови). Для начинающих и профессиональных водителей — 0,15 мг/л.",
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
      },
      en: {
        text: "For how many years is a driver considered a 'novel' (novice) driver?",
        options: ["1 year", "3 years", "2 years", "5 years"],
        explanation:
          "A driver is considered a novice for the first 2 years after obtaining their licence.",
      },
      ru: {
        text: "Сколько лет водитель считается начинающим?",
        options: ["1 год", "3 года", "2 года", "5 лет"],
        explanation:
          "Водитель считается начинающим первые 2 года после получения прав.",
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
      },
      en: {
        text: "Children under what height must use a child restraint system (CRS)?",
        options: ["1.20 m", "1.50 m", "1.35 m", "1.25 m"],
        explanation:
          "Children under 1.35 m must use an approved child restraint system suited to their height and weight.",
      },
      ru: {
        text: "Дети какого роста обязаны использовать детское удерживающее устройство?",
        options: ["1,20 м", "1,50 м", "1,35 м", "1,25 м"],
        explanation:
          "Дети ростом менее 1,35 м обязаны использовать сертифицированное детское кресло, подходящее по росту и весу.",
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
      },
      en: {
        text: "The minimum legal tread depth for car tyres is…",
        options: ["1.0 mm", "1.6 mm", "2.0 mm", "3.0 mm"],
        explanation:
          "The minimum legal tread depth is 1.6 mm across the entire main tread of the tyre.",
      },
      ru: {
        text: "Минимальная законная глубина протектора шин легкового авто…",
        options: ["1,0 мм", "1,6 мм", "2,0 мм", "3,0 мм"],
        explanation:
          "Минимальная законная глубина протектора — 1,6 мм по всей ширине протектора.",
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
      },
      en: {
        text: "A B licence must be renewed (for drivers under 65) every…",
        options: ["5 years", "10 years", "15 years", "20 years"],
        explanation:
          "The B licence is renewed every 10 years up to age 65; from 65 onwards, every 5 years.",
      },
      ru: {
        text: "Права категории B (для лиц младше 65 лет) продлеваются каждые…",
        options: ["5 лет", "10 лет", "15 лет", "20 лет"],
        explanation:
          "Права категории B продлеваются каждые 10 лет до 65 лет; после 65 — каждые 5 лет.",
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
      },
      en: {
        text: "How many points does a novice driver start with?",
        options: ["8 points", "12 points", "10 points", "15 points"],
        explanation:
          "A novice driver starts with 8 points; after 3 years without deduction they reach the standard 12.",
      },
      ru: {
        text: "Со скольких баллов начинает начинающий водитель?",
        options: ["8 баллов", "12 баллов", "10 баллов", "15 баллов"],
        explanation:
          "Начинающий водитель начинает с 8 баллов; через 3 года без штрафных вычетов — стандартные 12.",
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
      },
      en: {
        text: "The general maximum speed on a motorway for a car is…",
        options: ["100 km/h", "110 km/h", "120 km/h", "130 km/h"],
        explanation:
          "The general maximum speed on motorways and dual carriageways for cars and motorcycles is 120 km/h.",
      },
      ru: {
        text: "Общий максимальный скоростной лимит на автомагистрали для легкового авто…",
        options: ["100 км/ч", "110 км/ч", "120 км/ч", "130 км/ч"],
        explanation:
          "На автомагистралях и скоростных автодорогах общий предел для легковых авто и мотоциклов — 120 км/ч.",
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
      },
      en: {
        text: "On urban roads with a single lane per direction, the general speed limit is…",
        options: ["20 km/h", "30 km/h", "50 km/h", "40 km/h"],
        explanation:
          "Since 2021, on urban roads with one lane per direction the limit is 30 km/h (20 km/h if the road and pavement are at the same level).",
      },
      ru: {
        text: "На городских дорогах с одной полосой в каждом направлении общий скоростной лимит…",
        options: ["20 км/ч", "30 км/ч", "50 км/ч", "40 км/ч"],
        explanation:
          "С 2021 года на городских дорогах с одной полосой в каждом направлении лимит — 30 км/ч (20 км/ч, если проезжая часть и тротуар на одном уровне).",
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
      },
      en: {
        text: "When overtaking a cyclist outside built-up areas, the minimum lateral clearance is…",
        options: ["1.5 metres", "1 metre", "2 metres", "50 centimetres"],
        explanation:
          "When overtaking a cyclist outside built-up areas you must leave at least 1.5 m clearance. You may cross a solid line to do it safely.",
      },
      ru: {
        text: "При обгоне велосипедиста вне населённого пункта минимальный боковой интервал…",
        options: ["1,5 метра", "1 метр", "2 метра", "50 сантиметров"],
        explanation:
          "При обгоне велосипедиста вне населённого пункта нужно оставлять не менее 1,5 м бокового интервала. Разрешается пересечь сплошную, если это безопасно.",
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
];
