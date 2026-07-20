import type { Question } from "@/lib/types";

// Questions derived from DGT Manual Permiso B (Lectura Fácil, 2024), Tema 8 — Señales.

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
        optionRationales: [
          "",
          "Coloca los semáforos por encima de los agentes: los agentes SIEMPRE están en primer lugar.",
          "Pone las verticales por encima de los semáforos y a los agentes en tercer lugar: dos inversiones.",
          "Las marcas viales son la ÚLTIMA prioridad, nunca la primera.",
        ],
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
        optionRationales: [
          "",
          "Puts lights above officers — officers are ALWAYS first.",
          "Puts vertical signs above lights, and officers in third place: two swaps wrong.",
          "Road markings are the LOWEST priority, never the highest.",
        ],
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
        optionRationales: [
          "",
          "Ставит светофоры выше регулировщика — но регулировщик ВСЕГДА первый.",
          "Постоянные знаки выше светофоров, а регулировщик на третьем месте: две перестановки неверны.",
          "Разметка — НИЗШИЙ приоритет, а не высший.",
        ],
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
        optionRationales: [
          "El STOP es una señal vertical, y las verticales están por debajo de los semáforos en la jerarquía.",
          "",
          "Nunca hay libre elección: la jerarquía de señales fija siempre una única respuesta correcta.",
          "En el enunciado no hay agente; solo se obedece al agente cuando efectivamente está regulando el cruce.",
        ],
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
        optionRationales: [
          "STOP is a vertical sign, and vertical signs sit below traffic lights in the hierarchy.",
          "",
          "You never get to pick freely: the sign hierarchy always fixes exactly one right answer.",
          "The question doesn't mention an officer; you obey an officer only when one is actually directing traffic.",
        ],
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
        optionRationales: [
          "STOP — постоянный знак, а постоянные знаки в иерархии ниже светофоров.",
          "",
          "Свободного выбора не бывает: иерархия сигналов всегда однозначна.",
          "В вопросе не сказано о регулировщике; подчиняются ему только когда он реально управляет движением.",
        ],
      },
    },
  },
  {
    id: "manual-t8-03",
    section: "signs",
    correctIndex: 0,
    source: SOURCE,
    imageUrl: "/signs/r2.svg",
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
        optionRationales: [
          "",
          "El ceda el paso es menos restrictivo que el STOP; prevalece siempre la señal más restrictiva.",
          "La antigüedad no influye en la señalización; solo cuenta el grado de restricción.",
          "Ambas señales son válidas; ignorarlas es infracción grave.",
        ],
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
        optionRationales: [
          "",
          "Yield is less restrictive than STOP; the more restrictive sign always wins.",
          "Sign age is never a factor; only how restrictive it is.",
          "Both signs are still valid; ignoring them is a serious offence.",
        ],
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
        optionRationales: [
          "",
          "«Уступите дорогу» менее строгий, чем STOP; действует более строгий знак.",
          "Возраст знака никогда не учитывается — только степень ограничения.",
          "Оба знака действующие; их игнорирование — серьёзное нарушение.",
        ],
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
        optionRationales: [
          "El brazo vertical significa PARAR, no vía libre.",
          "El gesto afecta a todos los que se acercan, sin distinción de lado.",
          "",
          "Los agentes no piden claxon con sus gestos; sirven para regular el tráfico.",
        ],
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
        optionRationales: [
          "The vertical arm means STOP, not go.",
          "The gesture applies to all drivers approaching, regardless of side.",
          "",
          "Officers' arm gestures never ask for the horn; they regulate flow.",
        ],
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
        optionRationales: [
          "Рука вверх — это ОСТАНОВКА, а не свободный проезд.",
          "Жест распространяется на всех приближающихся, без разделения по сторонам.",
          "",
          "Регулировщик никогда не требует сигнала клаксона своими жестами.",
        ],
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
        optionRationales: [
          "Reanudar la marcha corresponde a la bandera VERDE, no a la roja.",
          "",
          "El color de la bandera se refiere al estado del tráfico, no a las luces del vehículo.",
          "No es una función oficial de las banderas en tráfico.",
        ],
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
        optionRationales: [
          "Resuming is what the GREEN flag means, not red.",
          "",
          "Flag colours signal traffic status, not vehicle-lighting requirements.",
          "Not an official traffic use for flags.",
        ],
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
        optionRationales: [
          "Продолжать движение — это ЗЕЛЁНЫЙ флаг, а не красный.",
          "",
          "Цвет флага относится к состоянию дороги, а не к свету автомобиля.",
          "У флагов в дорожном движении такой функции нет.",
        ],
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
        optionRationales: [
          "La amarilla FIJA es prohibitiva; la amarilla INTERMITENTE es la que permite cruzar con precaución.",
          "Acelerar en amarilla es peligroso e infringe la norma; hay que intentar detenerse.",
          "El semáforo de vehículos regula a vehículos; los peatones tienen su propio semáforo.",
          "",
        ],
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
        optionRationales: [
          "Steady amber is a prohibition; FLASHING amber is the one that means proceed with caution.",
          "Speeding up on amber is dangerous and against the rules; you should try to stop.",
          "Vehicle traffic lights regulate vehicles; pedestrians have their own lights.",
          "",
        ],
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
        optionRationales: [
          "Постоянный жёлтый — запрещающий; проезжать с осторожностью можно на МИГАЮЩИЙ жёлтый.",
          "Ускоряться на жёлтый опасно и нарушает правила; надо пробовать остановиться.",
          "Транспортный светофор регулирует транспорт; у пешеходов свой светофор.",
          "",
        ],
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
        optionRationales: [
          "El aspa es prohibición dura, no aviso de precaución.",
          "Los carriles reservados se marcan con señales específicas (carril bus, BAO), no con un aspa.",
          "",
          "Los semáforos de carril se aplican a vehículos, no a peatones.",
        ],
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
        optionRationales: [
          "The X is a hard prohibition, not a caution.",
          "Reserved lanes have their own signage (bus, HOV/BAO), not an X.",
          "",
          "Lane traffic lights apply to vehicles, not pedestrians.",
        ],
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
        optionRationales: [
          "Крест — жёсткий запрет, а не предупреждение об осторожности.",
          "Выделенные полосы обозначаются другими знаками (автобус, BAO), а не крестом.",
          "",
          "Светофоры над полосами адресованы транспорту, не пешеходам.",
        ],
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
        optionRationales: [
          "",
          "El pictograma delimita a quién va dirigida la señal; no aplica a todos.",
          "En señalización de tráfico no existen semáforos decorativos.",
          "Estos semáforos se colocan en calzada normal, no solo en zonas peatonales.",
        ],
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
        optionRationales: [
          "",
          "The pictogram narrows the audience; it doesn't apply to all drivers.",
          "Traffic signage never includes purely decorative lights.",
          "These lights appear on regular roads, not only in pedestrian zones.",
        ],
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
        optionRationales: [
          "",
          "Пиктограмма ограничивает адресата: не для всех.",
          "Декоративных светофоров в дорожной сигнализации не бывает.",
          "Такие светофоры ставят и на обычной проезжей части.",
        ],
      },
    },
  },
  {
    id: "manual-t8-09",
    section: "signs",
    correctIndex: 2,
    source: SOURCE,
    termIds: ["senal_peligro", "senal_vertical"],
    imageUrl: "/signs/p13a.svg",
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
        optionRationales: [
          "Las prohibiciones son de la serie R (Reglamentación), círculo con borde rojo.",
          "Existen señales de prioridad, pero la 'P' aquí no viene de 'prioridad' sino de 'peligro'.",
          "",
          "'Proximidad' no es una categoría oficial de señales en el catálogo DGT.",
        ],
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
        optionRationales: [
          "Prohibitions are in the R (Regulation) series, red-bordered circles.",
          "Priority signs exist, but the 'P' here stands for 'peligro' (danger), not priority.",
          "",
          "'Proximity' isn't an official DGT sign category.",
        ],
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
        optionRationales: [
          "Запрещающие — серия R (Reglamentación), круг с красной каймой.",
          "Знаки приоритета есть, но здесь «P» — от peligro (опасность), не от «приоритет».",
          "",
          "«Близость» не является официальной категорией знаков DGT.",
        ],
      },
    },
  },
  {
    id: "manual-t8-10",
    section: "signs",
    correctIndex: 1,
    source: SOURCE,
    imageUrl: "/signs/p4.svg",
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
        optionRationales: [
          "La curva peligrosa es la P-13 (a/b según el sentido).",
          "",
          "El paso a nivel es la P-7 (con barreras) o P-8 (sin barreras).",
          "El puente móvil es la P-5.",
        ],
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
        optionRationales: [
          "Dangerous curve is P-13 (a/b depending on direction).",
          "",
          "Level crossing is P-7 (with barriers) or P-8 (without).",
          "Movable bridge is P-5.",
        ],
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
        optionRationales: [
          "Опасный поворот — это P-13 (a/b по направлению).",
          "",
          "Железнодорожный переезд — P-7 (со шлагбаумом) или P-8 (без).",
          "Разводной мост — P-5.",
        ],
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
        optionRationales: [
          "La izquierda es excepción (giro a la izquierda sin señal a la derecha), no norma.",
          "El lado sí importa: la norma general es la derecha; la cercanía no manda.",
          "Las señales sobre puentes son un caso particular, no la norma general.",
          "",
        ],
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
        optionRationales: [
          "Left is an exception (turning left with no right-side sign), not the rule.",
          "Side does matter — the rule is 'right', not 'nearest'.",
          "Bridge-mounted signs are one case, not the general rule.",
          "",
        ],
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
        optionRationales: [
          "Левая сторона — исключение (поворот налево без знака справа), а не правило.",
          "Сторона важна: правило — справа, а не «ближайший».",
          "Мостовые знаки — частный случай, а не общее правило.",
          "",
        ],
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
        optionRationales: [
          "",
          "Peligro moderado se indica con UN panel, no tres.",
          "Los paneles direccionales indican grado de peligro, no específicamente obras.",
          "Los paneles de balizamiento no marcan zonas peatonales.",
        ],
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
        optionRationales: [
          "",
          "Moderate danger is shown by ONE panel, not three.",
          "Panels indicate danger level generally, not roadworks specifically.",
          "Hazard markers don't designate pedestrian zones.",
        ],
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
        optionRationales: [
          "",
          "Умеренная опасность — ОДНА панель, не три.",
          "Панели показывают уровень опасности в целом, а не именно дорожные работы.",
          "Направляющие панели не обозначают пешеходную зону.",
        ],
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
        optionRationales: [
          "Detenerse por completo corresponde a la luz roja o amarilla fija, no a la intermitente.",
          "La amarilla intermitente es un aviso de precaución: hay que ceder el paso, no continuar sin más.",
          "",
          "El semáforo no ordena encender los intermitentes del vehículo.",
        ],
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
        optionRationales: [
          "A full stop is required by red or steady amber, not flashing.",
          "Flashing amber warns of hazard: you yield, you don't just drive on normally.",
          "",
          "Traffic lights never command your vehicle's own indicators.",
        ],
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
        optionRationales: [
          "Полная остановка — на красный или постоянный жёлтый, не на мигающий.",
          "Мигающий жёлтый — предупреждение об опасности: уступай, а не езжай как обычно.",
          "",
          "Светофор не управляет поворотниками автомобиля.",
        ],
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
        optionRationales: [
          "100 m es menos que el mínimo exigido por el manual.",
          "",
          "50 m es demasiado corto para una vía con velocidad interurbana.",
          "200 m supera el mínimo; el manual pide 150.",
        ],
      },
      en: {
        text: "Traffic officers must wear items visible at a minimum distance of…",
        options: ["100 metres", "150 metres", "50 metres", "200 metres"],
        explanation:
          "The manual specifies clothing and equipment visible from 150 metres away.",
        optionRationales: [
          "100 m is below the manual's requirement.",
          "",
          "50 m is far too short for interurban speeds.",
          "200 m exceeds the requirement; the manual says 150.",
        ],
      },
      ru: {
        text: "Одежда и жезлы регулировщика должны быть видимы с минимального расстояния…",
        options: ["100 метров", "150 метров", "50 метров", "200 метров"],
        explanation:
          "Руководство указывает, что регулировщик должен быть заметен с 150 метров.",
        optionRationales: [
          "100 м меньше требуемого руководством.",
          "",
          "50 м слишком мало для загородных скоростей.",
          "200 м превышает требование; в руководстве — 150.",
        ],
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
        optionRationales: [
          "Los VMS tienen prioridad sobre las señales verticales fijas por su carácter dinámico.",
          "Se aplica a todos los conductores, no solo a profesionales.",
          "Sus indicaciones son de obligado cumplimiento, no meramente informativas.",
          "",
        ],
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
        optionRationales: [
          "VMS actually outrank fixed vertical signs because they reflect real-time conditions.",
          "Applies to all drivers, not only professionals.",
          "Their instructions are mandatory, not just informational.",
          "",
        ],
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
        optionRationales: [
          "VMS-знаки имеют приоритет над стационарными постоянными знаками, потому что отражают текущую обстановку.",
          "Действуют для всех водителей, не только профессиональных.",
          "Их указания обязательны, а не носят справочный характер.",
          "",
        ],
      },
    },
  },
];
