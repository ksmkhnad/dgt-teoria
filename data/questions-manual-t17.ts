import type { Question } from "@/lib/types";

// DGT Manual Permiso B (Lectura Fácil, 2024), Tema 17 — Conducción preventiva y eficiente.

const SOURCE = "DGT Manual Permiso B (Lectura Fácil, 2024), Tema 17";

export const QUESTIONS_MANUAL_T17: Question[] = [
  {
    id: "manual-t17-01",
    section: "safety",
    correctIndex: 3,
    source: SOURCE,
    translations: {
      es: {
        text: "Antes de un viaje, ¿qué NO es una comprobación obligatoria de seguridad?",
        options: [
          "Chaleco reflectante",
          "Rueda de repuesto",
          "Luz para indicar peligro / triángulos",
          "GPS con mapa actualizado",
        ],
        explanation:
          "Obligatorios: luz/triángulos para señalizar peligro, chaleco reflectante y rueda de repuesto. GPS es útil pero NO es obligatorio de seguridad.",
        optionRationales: [
          "El chaleco es obligatorio; se pone antes de salir del vehículo en emergencia.",
          "La rueda de repuesto es obligatoria (o kit equivalente).",
          "Los triángulos o la luz V-16 son obligatorios para señalizar en avería.",
          "",
        ],
      },
      en: {
        text: "Before a trip, which is NOT a mandatory safety item?",
        options: [
          "High-vis vest",
          "Spare wheel",
          "Warning light / triangles",
          "GPS with updated maps",
        ],
        explanation:
          "Mandatory: warning triangles/light, high-vis vest and spare wheel. A GPS is useful but NOT a mandatory safety item.",
        optionRationales: [
          "The vest is mandatory; you put it on before exiting the vehicle in an emergency.",
          "The spare wheel is mandatory (or equivalent kit).",
          "Triangles or the V-16 light are mandatory for signalling breakdowns.",
          "",
        ],
      },
      ru: {
        text: "Что перед поездкой НЕ является обязательным элементом безопасности?",
        options: [
          "Светоотражающий жилет",
          "Запасное колесо",
          "Аварийный свет / знаки аварийной остановки",
          "GPS с обновлёнными картами",
        ],
        explanation:
          "Обязательны: аварийные знаки/фонарь, жилет, запасное колесо. GPS полезен, но НЕ обязателен для безопасности.",
        optionRationales: [
          "Жилет обязателен; надевают до выхода из авто при аварии.",
          "Запаска обязательна (или эквивалентный набор).",
          "Знаки аварийной остановки или фонарь V-16 обязательны.",
          "",
        ],
      },
    },
  },
  {
    id: "manual-t17-02",
    section: "safety",
    correctIndex: 1,
    source: SOURCE,
    translations: {
      es: {
        text: "Al conducir de forma preventiva, ¿a qué distancia (en tiempo) debes mirar hacia adelante?",
        options: [
          "5 segundos",
          "Al espacio que recorrerás en unos 20 segundos",
          "50 metros exactos",
          "Solo al vehículo de delante",
        ],
        explanation:
          "Debes mirar el espacio que recorrerás en los próximos ~20 segundos. Cuanto más rápido conduzcas, más lejos hay que mirar. Ayuda a prever y evitar frenazos.",
        optionRationales: [
          "5 segundos es poco tiempo para prever situaciones a alta velocidad.",
          "",
          "«50 metros exactos» no tiene sentido: depende de la velocidad.",
          "Mirar solo al de delante impide anticipar problemas más lejanos.",
        ],
      },
      en: {
        text: "In preventive driving, how far ahead should you look?",
        options: [
          "5 seconds ahead",
          "The distance you'll cover in about 20 seconds",
          "Exactly 50 metres",
          "Only at the car in front",
        ],
        explanation:
          "Look at the space you'll cover in ~20 seconds. The faster you drive, the further you look. Helps anticipate and avoid hard braking.",
        optionRationales: [
          "5 seconds is too short to anticipate at higher speeds.",
          "",
          "'Exactly 50 metres' makes no sense — it depends on speed.",
          "Looking only at the car in front prevents seeing further hazards.",
        ],
      },
      ru: {
        text: "При «превентивном вождении» на какое расстояние (по времени) нужно смотреть вперёд?",
        options: [
          "На 5 секунд вперёд",
          "На расстояние, которое проедешь примерно за 20 секунд",
          "Ровно на 50 метров",
          "Только на впередиидущий автомобиль",
        ],
        explanation:
          "Смотреть на пространство, которое пройдёшь за ~20 секунд. Чем выше скорость, тем дальше нужно смотреть.",
        optionRationales: [
          "5 секунд мало для предвидения на высокой скорости.",
          "",
          "«Ровно 50 метров» не имеет смысла — зависит от скорости.",
          "Смотреть только на переднего — не видеть более дальних угроз.",
        ],
      },
    },
  },
  {
    id: "manual-t17-03",
    section: "safety",
    correctIndex: 2,
    source: SOURCE,
    translations: {
      es: {
        text: "¿Qué es un ángulo muerto?",
        options: [
          "Un carril reservado a peatones",
          "Un tipo de cruce peligroso",
          "El espacio a los lados del vehículo que no puedes ver aunque los retrovisores estén bien colocados",
          "La zona detrás de un camión",
        ],
        explanation:
          "Ángulos muertos: espacios a los lados del vehículo que no se ven por los retrovisores. Se comprueban girando la cabeza antes de cambiar de carril.",
        optionRationales: [
          "Un carril peatonal es una zona reservada a peatones, no un ángulo muerto.",
          "«Cruce peligroso» describe otras cosas, no el ángulo muerto.",
          "",
          "La zona detrás del camión también es ángulo muerto, pero no la definición general.",
        ],
      },
      en: {
        text: "What is a blind spot?",
        options: [
          "A pedestrian-only lane",
          "A type of dangerous junction",
          "The area beside the vehicle you can't see even with mirrors correctly set",
          "The area behind a lorry",
        ],
        explanation:
          "Blind spots: areas beside the vehicle not visible in the mirrors. Check by turning your head before changing lanes.",
        optionRationales: [
          "A pedestrian lane is a pedestrian zone, not a blind spot.",
          "'Dangerous junction' describes other things.",
          "",
          "Behind a lorry is also a blind spot but not the general definition.",
        ],
      },
      ru: {
        text: "Что такое «слепая зона»?",
        options: [
          "Пешеходная выделенная полоса",
          "Тип опасного перекрёстка",
          "Область по бокам автомобиля, которую не видно даже при правильно настроенных зеркалах",
          "Пространство за грузовиком",
        ],
        explanation:
          "Слепые зоны — области по бокам, не видимые в зеркалах. Перед сменой полосы нужно повернуть голову и проверить.",
        optionRationales: [
          "Пешеходная полоса — пешеходная зона, а не слепая.",
          "«Опасный перекрёсток» — про другое.",
          "",
          "За грузовиком тоже слепая зона, но это не общее определение.",
        ],
      },
    },
  },
  {
    id: "manual-t17-04",
    section: "safety",
    correctIndex: 0,
    source: SOURCE,
    translations: {
      es: {
        text: "El sistema BSM (detector de ángulos muertos) sirve para…",
        options: [
          "Avisar cuando hay otro vehículo en el ángulo muerto",
          "Aparcar solo",
          "Reconocer señales de velocidad",
          "Encender las luces automáticamente",
        ],
        explanation:
          "BSM = Blind Spot Monitor. Se enciende una luz en el retrovisor cuando hay otro vehículo en el ángulo muerto. Algunos solo se activan si pones el intermitente.",
        optionRationales: [
          "",
          "Aparcar solo es tarea del asistente de aparcamiento, no del BSM.",
          "Reconocer señales de velocidad lo hace el TSR, no el BSM.",
          "Encender luces automáticamente es otra función distinta.",
        ],
      },
      en: {
        text: "The BSM (Blind Spot Monitor) is used to…",
        options: [
          "Warn when another vehicle is in the blind spot",
          "Park the car itself",
          "Recognise speed-limit signs",
          "Turn headlights on automatically",
        ],
        explanation:
          "BSM = Blind Spot Monitor. A light on the mirror lights up when another vehicle is in the blind spot. Some only activate when you signal.",
        optionRationales: [
          "",
          "Auto-parking is the parking assistant's job, not BSM.",
          "Recognising speed signs is TSR, not BSM.",
          "Auto-lights is a different function.",
        ],
      },
      ru: {
        text: "Система BSM (контроль слепых зон) нужна для…",
        options: [
          "Предупреждения о ТС в слепой зоне",
          "Автоматической парковки",
          "Распознавания знаков скорости",
          "Автоматического включения фар",
        ],
        explanation:
          "BSM = Blind Spot Monitor. Индикатор в зеркале загорается, когда в слепой зоне другой автомобиль. Некоторые системы срабатывают только при включённом поворотнике.",
        optionRationales: [
          "",
          "Автопарковка — работа ассистента парковки, не BSM.",
          "Распознавание знаков — TSR, не BSM.",
          "Автосвет — отдельная функция.",
        ],
      },
    },
  },
  {
    id: "manual-t17-05",
    section: "safety",
    correctIndex: 3,
    source: SOURCE,
    translations: {
      es: {
        text: "Los tres principios de la conducción preventiva son…",
        options: [
          "Velocidad, potencia, agarre",
          "Radio, aire acondicionado, GPS",
          "Cinturón, casco, airbag",
          "Visión, anticipación y espacio (distancia de seguridad)",
        ],
        explanation:
          "Conducción preventiva se basa en tres principios: Visión (mirar lejos y a los lados), Anticipación (prever movimientos) y Espacio (distancia de seguridad).",
        optionRationales: [
          "«Velocidad, potencia, agarre» son características físicas, no principios de conducción.",
          "Los elementos de comodidad no son principios de conducción.",
          "Son elementos de seguridad pasiva, no principios preventivos.",
          "",
        ],
      },
      en: {
        text: "The three principles of preventive driving are…",
        options: [
          "Speed, power, grip",
          "Radio, AC, GPS",
          "Seatbelt, helmet, airbag",
          "Vision, anticipation and space (safe distance)",
        ],
        explanation:
          "Preventive driving rests on three principles: Vision (look far and to the sides), Anticipation (predict others), and Space (safe following distance).",
        optionRationales: [
          "'Speed, power, grip' are physical traits, not driving principles.",
          "Comfort items aren't driving principles.",
          "Those are passive safety, not preventive principles.",
          "",
        ],
      },
      ru: {
        text: "Три принципа превентивного вождения — это…",
        options: [
          "Скорость, мощность, сцепление",
          "Радио, кондиционер, GPS",
          "Ремень, шлем, подушка",
          "Обзор, предвидение и дистанция (безопасное расстояние)",
        ],
        explanation:
          "Превентивное вождение — три принципа: Обзор (смотреть далеко и по сторонам), Предвидение (предугадывать), Дистанция (безопасное расстояние).",
        optionRationales: [
          "«Скорость, мощность, сцепление» — физические характеристики, не принципы вождения.",
          "Комфорт — не принципы вождения.",
          "Это пассивная безопасность, не превентивные принципы.",
          "",
        ],
      },
    },
  },
  {
    id: "manual-t17-06",
    section: "safety",
    correctIndex: 1,
    source: SOURCE,
    termIds: ["distancia_seguridad"],
    translations: {
      es: {
        text: "En condiciones normales, la distancia de seguridad práctica con el vehículo de delante es…",
        options: [
          "Medio segundo",
          "Aproximadamente 2-3 segundos",
          "10 segundos",
          "1 kilómetro",
        ],
        explanation:
          "2-3 segundos: pasa un objeto fijo (poste); cuenta 2-3 segundos hasta que tu coche llegue al mismo punto. Con mal tiempo o cargas, aumenta la distancia.",
        optionRationales: [
          "Medio segundo es el tiempo de reacción; no hay margen para frenar.",
          "",
          "10 segundos es exagerado en tráfico normal; puede provocar interposiciones constantes.",
          "1 kilómetro es imposible de mantener en tráfico real.",
        ],
      },
      en: {
        text: "In normal conditions, the practical safe following distance is…",
        options: [
          "Half a second",
          "About 2-3 seconds",
          "10 seconds",
          "1 kilometre",
        ],
        explanation:
          "2-3 seconds: a fixed object passes (post); count 2-3 seconds until your car reaches the same point. Increase in bad weather or with load.",
        optionRationales: [
          "Half a second is reaction time; zero margin to brake.",
          "",
          "10 seconds is excessive in normal traffic; other cars will constantly cut in.",
          "1 km is impossible in real traffic.",
        ],
      },
      ru: {
        text: "В нормальных условиях практическая безопасная дистанция до впередиидущего…",
        options: [
          "Полсекунды",
          "Примерно 2-3 секунды",
          "10 секунд",
          "1 километр",
        ],
        explanation:
          "2-3 секунды: неподвижный ориентир (столб) проходит впереди; считаешь 2-3 секунды до того же места. При плохой погоде/грузе — больше.",
        optionRationales: [
          "Полсекунды — время реакции; нет запаса для торможения.",
          "",
          "10 секунд — избыточно в обычном потоке; другие постоянно будут вклиниваться.",
          "1 км невозможно поддерживать в реальном движении.",
        ],
      },
    },
  },
  {
    id: "manual-t17-07",
    section: "safety",
    correctIndex: 2,
    source: SOURCE,
    translations: {
      es: {
        text: "¿Cuál de estas es una técnica de conducción EFICIENTE (menor consumo)?",
        options: [
          "Acelerar y frenar bruscamente",
          "Ir siempre en marcha baja",
          "Mantener velocidad constante y usar marchas largas cuando sea posible",
          "Llevar el vehículo con las ventanillas abiertas a alta velocidad",
        ],
        explanation:
          "Conducción eficiente: velocidad constante, marchas largas cuando sea posible, evitar acelerar/frenar bruscos. Reduce consumo y contaminación.",
        optionRationales: [
          "Acelerar/frenar bruscamente sube mucho el consumo.",
          "Marchas bajas suben las revoluciones y el consumo.",
          "",
          "Ventanillas abiertas a alta velocidad aumentan la resistencia aerodinámica y el consumo.",
        ],
      },
      en: {
        text: "Which is an EFFICIENT driving technique (lower consumption)?",
        options: [
          "Sharp acceleration and braking",
          "Always in low gear",
          "Steady speed and long gears where possible",
          "Windows open at high speed",
        ],
        explanation:
          "Efficient driving: steady speed, longer gears where possible, avoid sharp accel/brake. Cuts fuel and emissions.",
        optionRationales: [
          "Sharp accel/brake spikes consumption.",
          "Low gears raise revs and consumption.",
          "",
          "Open windows at speed add drag and raise consumption.",
        ],
      },
      ru: {
        text: "Что относится к ЭФФЕКТИВНОМУ вождению (низкий расход)?",
        options: [
          "Резкий разгон и торможение",
          "Всё время на низких передачах",
          "Ровная скорость и высокие передачи, когда возможно",
          "Открытые окна на высокой скорости",
        ],
        explanation:
          "Эффективное вождение: ровная скорость, повышенные передачи, без резких разгонов/торможений. Снижает расход и выбросы.",
        optionRationales: [
          "Резкие разгон/торможение сильно увеличивают расход.",
          "Низкие передачи — высокие обороты и расход.",
          "",
          "Открытые окна на высокой скорости увеличивают сопротивление воздуха.",
        ],
      },
    },
  },
  {
    id: "manual-t17-08",
    section: "safety",
    correctIndex: 3,
    source: SOURCE,
    translations: {
      es: {
        text: "¿Cuál de estos NO es un factor que aumenta el consumo?",
        options: [
          "Llevar la baca cargada",
          "Neumáticos con baja presión",
          "Acelerar bruscamente",
          "Cerrar bien la puerta del maletero",
        ],
        explanation:
          "Aumentan el consumo: baca cargada (aerodinámica), baja presión de neumáticos, acelerar/frenar bruscamente, aire acondicionado a tope, carga excesiva.",
        optionRationales: [
          "La baca cargada empeora la aerodinámica y sube el consumo.",
          "Baja presión aumenta rodadura y consumo.",
          "Acelerar bruscamente es la mayor causa de consumo extra.",
          "",
        ],
      },
      en: {
        text: "Which is NOT a factor that increases fuel consumption?",
        options: [
          "A loaded roof rack",
          "Under-inflated tyres",
          "Sharp acceleration",
          "Properly closing the boot door",
        ],
        explanation:
          "Increases consumption: loaded roof rack (drag), under-inflated tyres, sharp accel/brake, full AC, excess load.",
        optionRationales: [
          "A loaded roof rack worsens aerodynamics and raises consumption.",
          "Under-inflated tyres raise rolling resistance and consumption.",
          "Sharp acceleration is the biggest single cause of extra fuel use.",
          "",
        ],
      },
      ru: {
        text: "Что НЕ увеличивает расход топлива?",
        options: [
          "Гружёный багажник на крыше",
          "Пониженное давление в шинах",
          "Резкое ускорение",
          "Хорошо закрытая дверь багажника",
        ],
        explanation:
          "Увеличивают расход: гружёный багажник на крыше (аэро), низкое давление в шинах, резкие ускорения/торможения, кондиционер на полную, перегруз.",
        optionRationales: [
          "Гружёный багажник на крыше портит аэродинамику и повышает расход.",
          "Низкое давление увеличивает сопротивление качению.",
          "Резкое ускорение — главная причина лишнего расхода.",
          "",
        ],
      },
    },
  },
  {
    id: "manual-t17-09",
    section: "safety",
    correctIndex: 0,
    source: SOURCE,
    translations: {
      es: {
        text: "En invierno, para preparar el vehículo antes de viajar, se recomienda…",
        options: [
          "Llevar cadenas, evitar conducir de noche y viajar con el depósito lleno",
          "Bajar la presión de los neumáticos al mínimo",
          "Quitar el limpiaparabrisas",
          "No revisar el estado del vehículo",
        ],
        explanation:
          "En invierno: llevar cadenas para nieve, evitar conducir de noche (menos visibilidad + más peligro), depósito lleno, ropa de abrigo, agua y linterna.",
        optionRationales: [
          "",
          "Bajar la presión al mínimo aumenta el desgaste y el riesgo de reventón; nunca hacerlo.",
          "El limpiaparabrisas es más necesario que nunca en invierno (nieve, lluvia).",
          "No revisar el vehículo es la peor forma de preparar un viaje.",
        ],
      },
      en: {
        text: "In winter, to prepare for a trip you should…",
        options: [
          "Carry chains, avoid driving at night, keep the tank full",
          "Deflate tyres to minimum",
          "Remove the windscreen wipers",
          "Skip the vehicle check",
        ],
        explanation:
          "In winter: carry snow chains, avoid night driving (lower visibility + more danger), full tank, warm clothing, water and a torch.",
        optionRationales: [
          "",
          "Deflating tyres accelerates wear and risks blowouts; never do it.",
          "Wipers are more critical than ever in winter (snow, rain).",
          "Skipping checks is the worst possible trip prep.",
        ],
      },
      ru: {
        text: "Зимой перед поездкой рекомендуется…",
        options: [
          "Взять цепи, избегать ночной езды, полный бак",
          "Спустить давление в шинах до минимума",
          "Снять стеклоочистители",
          "Не проверять состояние авто",
        ],
        explanation:
          "Зимой: цепи, избегать ночи (плохая видимость и опасность), полный бак, тёплая одежда, вода, фонарь.",
        optionRationales: [
          "",
          "Спускать давление — ускорять износ и риск разрыва; так делать нельзя.",
          "Дворники зимой особенно нужны (снег, дождь).",
          "Не проверять авто — худшая подготовка к поездке.",
        ],
      },
    },
  },
  {
    id: "manual-t17-10",
    section: "safety",
    correctIndex: 2,
    source: SOURCE,
    translations: {
      es: {
        text: "Los distintivos ambientales (etiquetas de la DGT) sirven para…",
        options: [
          "Indicar el año de matriculación del vehículo",
          "Mostrar la potencia del motor",
          "Clasificar los vehículos según su nivel de contaminación (0, ECO, C, B)",
          "Autorizar a conducir de noche",
        ],
        explanation:
          "Las etiquetas ambientales (0 = eléctricos, ECO = híbridos, C = gasolina Euro 4+, B = gasolina Euro 3+) clasifican los vehículos por contaminación. Determinan el acceso a ZBE (zonas de bajas emisiones).",
        optionRationales: [
          "El año de matriculación se ve en el permiso de circulación, no en la etiqueta ambiental.",
          "La potencia se ve en la ficha técnica, no en la etiqueta.",
          "",
          "Nada tienen que ver con la autorización para conducir de noche.",
        ],
      },
      en: {
        text: "DGT environmental badges are used to…",
        options: [
          "Show the year of registration",
          "Show engine power",
          "Classify vehicles by pollution level (0, ECO, C, B)",
          "Authorise night driving",
        ],
        explanation:
          "The DGT environmental labels (0 = electric, ECO = hybrid, C = petrol Euro 4+, B = petrol Euro 3+) classify vehicles by pollution. They determine access to LEZs.",
        optionRationales: [
          "Registration year is on the vehicle registration, not the environmental badge.",
          "Engine power is on the technical sheet, not the badge.",
          "",
          "Nothing to do with authorising night driving.",
        ],
      },
      ru: {
        text: "Экологические наклейки DGT нужны для…",
        options: [
          "Указания года регистрации",
          "Указания мощности двигателя",
          "Классификации ТС по уровню загрязнения (0, ECO, C, B)",
          "Разрешения на ночное вождение",
        ],
        explanation:
          "Экологические наклейки DGT (0 — электро, ECO — гибриды, C — бензин Euro 4+, B — бензин Euro 3+) классифицируют ТС по уровню загрязнения. Определяют доступ в зоны низких выбросов.",
        optionRationales: [
          "Год регистрации — в свидетельстве, а не в наклейке.",
          "Мощность — в техпаспорте, а не в наклейке.",
          "",
          "К ночному вождению не имеет отношения.",
        ],
      },
    },
  },
];
