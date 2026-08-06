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
  {
    id: "manual-t8-16",
    section: "signs",
    correctIndex: 2,
    source: SOURCE,
    translations: {
      es: {
        text: "Una señal circular con fondo azul y símbolo blanco (por ejemplo, una flecha) es una señal de…",
        options: [
          "Prohibición",
          "Peligro",
          "Obligación",
          "Fin de prohibición",
        ],
        explanation:
          "Las señales circulares con fondo azul y símbolos blancos son señales de OBLIGACIÓN: indican la dirección, sentido o comportamiento que se debe seguir.",
        optionRationales: [
          "Las prohibiciones son circulares con fondo blanco y borde rojo, no azules.",
          "Las de peligro son triangulares con borde rojo, no circulares azules.",
          "",
          "El fin de prohibición se representa con círculo blanco tachado con barra oblicua, no azul.",
        ],
      },
      en: {
        text: "A circular sign with blue background and white symbol (e.g. an arrow) is a…",
        options: [
          "Prohibition sign",
          "Warning sign",
          "Mandatory sign",
          "End-of-prohibition sign",
        ],
        explanation:
          "Circular signs with blue background and white symbols are MANDATORY signs: they show the direction, way or behaviour you must follow.",
        optionRationales: [
          "Prohibitions are circular with white background and red border, not blue.",
          "Warning signs are triangular with red border, not blue circles.",
          "",
          "End-of-prohibition is a white circle crossed by a diagonal bar, not blue.",
        ],
      },
      ru: {
        text: "Круглый знак на синем фоне с белым символом (например, стрелкой) — это знак…",
        options: [
          "Запрета",
          "Предупреждения",
          "Предписания",
          "Окончания запрета",
        ],
        explanation:
          "Круглые знаки с синим фоном и белыми символами — ПРЕДПИСЫВАЮЩИЕ: показывают направление, движение или поведение, которое обязательно.",
        optionRationales: [
          "Запрещающие — круглые с белым фоном и красной каймой, не синие.",
          "Предупреждающие — треугольные с красной каймой, а не синие круги.",
          "",
          "Окончание запрета — белый круг с диагональной чертой, не синий.",
        ],
      },
    },
  },
  {
    id: "manual-t8-17",
    section: "signs",
    correctIndex: 1,
    source: SOURCE,
    translations: {
      es: {
        text: "Ante una señal de STOP…",
        options: [
          "Debes ceder el paso reduciendo la velocidad, pero puedes seguir sin parar si no viene nadie",
          "Debes detener el vehículo completamente antes de la línea de detención y ceder el paso",
          "Debes tocar el claxon antes de continuar",
          "Debes detenerte solo si ves otro vehículo",
        ],
        explanation:
          "El STOP obliga a DETENERSE por completo antes de la línea de detención (o del borde de la intersección si no hay línea) y a ceder el paso a los vehículos que circulen por la vía a la que se accede.",
        optionRationales: [
          "Eso describe el Ceda el paso, no el STOP.",
          "",
          "El claxon no es obligatorio ante un STOP; solo hay que detenerse.",
          "El STOP exige detención completa siempre, aunque no venga nadie.",
        ],
      },
      en: {
        text: "At a STOP sign you must…",
        options: [
          "Yield by slowing down, but you may go on without stopping if nobody's coming",
          "Come to a complete stop before the stop line and yield",
          "Sound the horn before continuing",
          "Stop only if you see another vehicle",
        ],
        explanation:
          "STOP forces a complete stop before the stop line (or the edge of the intersection if no line) and yielding to vehicles on the road being entered.",
        optionRationales: [
          "That describes a yield sign, not STOP.",
          "",
          "The horn isn't required at STOP; you just have to stop.",
          "STOP always requires a full stop, even if nobody's coming.",
        ],
      },
      ru: {
        text: "У знака STOP нужно…",
        options: [
          "Уступить, снизив скорость; но если никого нет — можно ехать не останавливаясь",
          "Полностью остановиться перед стоп-линией и уступить дорогу",
          "Просигналить и ехать дальше",
          "Останавливаться только если видишь другой автомобиль",
        ],
        explanation:
          "STOP обязывает ПОЛНОСТЬЮ остановиться перед стоп-линией (или перед краем перекрёстка, если разметки нет) и уступить дорогу транспорту на дороге, куда выезжаешь.",
        optionRationales: [
          "Это описание знака «Уступите», а не STOP.",
          "",
          "Сигнал не обязателен у STOP; надо остановиться.",
          "STOP всегда требует полной остановки, даже если никого нет.",
        ],
      },
    },
  },
  {
    id: "manual-t8-18",
    section: "signs",
    correctIndex: 0,
    source: SOURCE,
    translations: {
      es: {
        text: "Una línea longitudinal continua BLANCA sobre la calzada significa que…",
        options: [
          "No se puede rebasar ni pisar",
          "Se puede rebasar solo para adelantar",
          "Se puede pisar para aparcar",
          "Indica el borde derecho de la calzada",
        ],
        explanation:
          "La línea continua blanca separa carriles y NO se puede rebasar ni pisar, salvo emergencia. Marca la prohibición de invadir el carril contrario o el adyacente.",
        optionRationales: [
          "",
          "Justo lo contrario: la línea continua no permite adelantar.",
          "Tampoco se puede pisar para aparcar; hay que aparcar antes o después.",
          "El borde derecho es también una línea continua, pero eso es un uso específico. La regla general de línea continua es no rebasarla ni pisarla.",
        ],
      },
      en: {
        text: "A solid WHITE longitudinal line on the carriageway means that…",
        options: [
          "It cannot be crossed or driven over",
          "It can be crossed only to overtake",
          "It can be driven over to park",
          "It marks the right edge of the carriageway",
        ],
        explanation:
          "A solid white line separates lanes and cannot be crossed or driven over, except in emergency. It forbids invading the opposite or adjacent lane.",
        optionRationales: [
          "",
          "The opposite: a solid line doesn't allow overtaking.",
          "You can't drive over it to park either; park before or after.",
          "The right edge is also a solid line, but that's a specific case. The general rule is: don't cross or drive over.",
        ],
      },
      ru: {
        text: "Продольная сплошная БЕЛАЯ линия на проезжей части означает, что…",
        options: [
          "Пересекать и наезжать нельзя",
          "Пересекать можно только для обгона",
          "Наезжать можно для парковки",
          "Обозначает правый край проезжей части",
        ],
        explanation:
          "Сплошная белая разделяет полосы, пересекать и наезжать нельзя, кроме экстренных случаев. Запрещает выезд на встречную или соседнюю полосу.",
        optionRationales: [
          "",
          "Наоборот: сплошная не разрешает обгон.",
          "И наезжать для парковки нельзя; парковаться — до или после.",
          "Правый край тоже размечается сплошной, но это частный случай. Общее правило: не пересекать и не наезжать.",
        ],
      },
    },
  },
  {
    id: "manual-t8-19",
    section: "signs",
    correctIndex: 2,
    source: SOURCE,
    translations: {
      es: {
        text: "Cuando hay señales verticales fijas y, temporalmente, señales de obras (fondo amarillo)…",
        options: [
          "Se cumplen las fijas y se ignoran las temporales",
          "Prevalecen las que tengan menor límite",
          "Prevalecen las temporales (fondo amarillo) sobre las fijas del mismo tipo",
          "Se cumplen ambas al mismo tiempo",
        ],
        explanation:
          "Las señales temporales de obras, con fondo amarillo, prevalecen sobre las fijas del mismo tipo. Reflejan una condición transitoria (obras, riesgo temporal) más restrictiva o distinta.",
        optionRationales: [
          "Las temporales son las que prevalecen; ignorarlas es infracción.",
          "El orden no es «la más restrictiva» sino la temporalidad: la temporal manda.",
          "",
          "No pueden cumplirse ambas simultáneamente si se contradicen; una prevalece.",
        ],
      },
      en: {
        text: "When fixed vertical signs coexist with temporary roadworks signs (yellow background)…",
        options: [
          "Obey the fixed ones and ignore the temporary",
          "The one with the lower limit prevails",
          "Temporary (yellow-background) signs prevail over fixed ones of the same type",
          "Both apply simultaneously",
        ],
        explanation:
          "Temporary roadworks signs, with yellow background, prevail over fixed signs of the same type. They reflect a transient condition (works, temporary risk) that's more restrictive or different.",
        optionRationales: [
          "The temporary ones prevail; ignoring them is an offence.",
          "The rule isn't «the most restrictive» but temporality: temporary wins.",
          "",
          "Both cannot apply at once if they contradict; one prevails.",
        ],
      },
      ru: {
        text: "Когда есть стационарные вертикальные знаки и временные дорожных работ (жёлтый фон)…",
        options: [
          "Соблюдают стационарные, а временные игнорируют",
          "Действует тот, у кого лимит меньше",
          "Временные (жёлтый фон) имеют приоритет над стационарными того же типа",
          "Действуют оба одновременно",
        ],
        explanation:
          "Временные знаки дорожных работ с жёлтым фоном имеют приоритет над стационарными того же типа. Они отражают временное состояние (работы, временный риск), более строгое или иное.",
        optionRationales: [
          "Приоритет — у временных; игнорирование — нарушение.",
          "Правило — не «строже», а именно временность: временный побеждает.",
          "",
          "Оба одновременно действовать не могут, если противоречат; один имеет приоритет.",
        ],
      },
    },
  },
  {
    id: "manual-t8-20",
    section: "priorities",
    correctIndex: 3,
    source: SOURCE,
    translations: {
      es: {
        text: "El orden de prioridad entre señales, de mayor a menor, es…",
        options: [
          "Verticales > Horizontales > Semáforo > Agente",
          "Semáforo > Agente > Verticales > Horizontales",
          "Horizontales > Verticales > Semáforo > Agente",
          "Agente > Semáforo > Verticales > Horizontales",
        ],
        explanation:
          "El orden reglamentario es: 1º Agente de circulación, 2º Semáforo, 3º Señales verticales, 4º Marcas viales (horizontales). El agente siempre manda incluso si contradice al semáforo.",
        optionRationales: [
          "Las verticales no están por encima del semáforo ni del agente.",
          "El semáforo NO está por encima del agente; el agente prevalece siempre.",
          "Las horizontales son las de menor prioridad, no las de mayor.",
          "",
        ],
      },
      en: {
        text: "The order of priority between signs, from highest to lowest, is…",
        options: [
          "Vertical > Horizontal > Traffic light > Officer",
          "Traffic light > Officer > Vertical > Horizontal",
          "Horizontal > Vertical > Traffic light > Officer",
          "Officer > Traffic light > Vertical > Horizontal",
        ],
        explanation:
          "The regulatory order is: 1) Traffic officer, 2) Traffic light, 3) Vertical signs, 4) Road markings (horizontal). The officer always overrides, even against a light.",
        optionRationales: [
          "Vertical signs are not above the light or the officer.",
          "The traffic light is NOT above the officer; the officer always prevails.",
          "Horizontal markings are the lowest priority, not the highest.",
          "",
        ],
      },
      ru: {
        text: "Порядок приоритета между знаками (от большего к меньшему):",
        options: [
          "Вертикальные > Горизонтальные > Светофор > Регулировщик",
          "Светофор > Регулировщик > Вертикальные > Горизонтальные",
          "Горизонтальные > Вертикальные > Светофор > Регулировщик",
          "Регулировщик > Светофор > Вертикальные > Горизонтальные",
        ],
        explanation:
          "Регламент: 1) Регулировщик, 2) Светофор, 3) Вертикальные знаки, 4) Разметка (горизонтальная). Регулировщик всегда важнее, даже против светофора.",
        optionRationales: [
          "Вертикальные не выше светофора и регулировщика.",
          "Светофор НЕ выше регулировщика; регулировщик всегда впереди.",
          "Горизонтальные — самый низкий приоритет, не самый высокий.",
          "",
        ],
      },
    },
  },
  {
    id: "manual-t8-21",
    section: "signs",
    correctIndex: 0,
    source: SOURCE,
    translations: {
      es: {
        text: "Una línea longitudinal discontinua AMARILLA sobre el bordillo o el arcén significa que…",
        options: [
          "Prohibido estacionar",
          "Prohibido parar y estacionar",
          "Solo se puede parar en horario nocturno",
          "Zona de estacionamiento regulado (zona azul)",
        ],
        explanation:
          "Línea amarilla DISCONTINUA en el bordillo/arcén: prohibido ESTACIONAR (pero se permite la parada momentánea). Línea amarilla CONTINUA: prohibida tanto la parada como el estacionamiento.",
        optionRationales: [
          "",
          "La prohibición de parar Y estacionar es la línea amarilla CONTINUA, no la discontinua.",
          "No hay diferenciación horaria por color; el color indica el tipo de prohibición.",
          "La zona azul se señaliza con marcas horizontales azules dentro del carril, no con línea amarilla.",
        ],
      },
      en: {
        text: "A DISHED yellow longitudinal line on the kerb or hard shoulder means…",
        options: [
          "No parking",
          "No stopping and no parking",
          "Stopping allowed only at night",
          "Regulated parking zone (blue zone)",
        ],
        explanation:
          "Yellow DISHED line on kerb/hard shoulder: NO PARKING (but you may briefly stop). Yellow SOLID line: no stopping AND no parking.",
        optionRationales: [
          "",
          "No stopping AND no parking is the SOLID yellow line, not the dashed.",
          "There's no time-of-day differentiation by colour; colour marks the type of ban.",
          "Blue zones are marked with blue horizontal marks within the lane, not with a yellow line.",
        ],
      },
      ru: {
        text: "Прерывистая ЖЁЛТАЯ продольная линия на бордюре или обочине означает…",
        options: [
          "Стоянка запрещена",
          "Остановка и стоянка запрещены",
          "Остановка только ночью",
          "Зона регулируемой парковки (синяя зона)",
        ],
        explanation:
          "Жёлтая ПРЕРЫВИСТАЯ на бордюре/обочине — запрет СТОЯНКИ (кратковременная остановка разрешена). Жёлтая СПЛОШНАЯ — запрет и остановки, и стоянки.",
        optionRationales: [
          "",
          "Запрет остановки И стоянки — это СПЛОШНАЯ жёлтая, а не прерывистая.",
          "Никакого ночного различения по цвету нет; цвет обозначает тип запрета.",
          "Синяя зона размечается синими горизонтальными полосами внутри полосы, а не жёлтой линией.",
        ],
      },
    },
  },
  {
    id: "manual-t8-22",
    section: "signs",
    correctIndex: 2,
    source: SOURCE,
    translations: {
      es: {
        text: "Una señal cuadrada con fondo azul y un símbolo blanco (por ejemplo, un tenedor y un cuchillo) es una señal de…",
        options: [
          "Prohibición",
          "Obligación",
          "Indicaciones generales / servicio",
          "Advertencia de peligro",
        ],
        explanation:
          "Las señales cuadradas o rectangulares con fondo azul y símbolo blanco son de INDICACIONES GENERALES o de SERVICIO (hotel, restaurante, gasolinera, hospital…). Solo informan; no obligan ni prohíben.",
        optionRationales: [
          "Las prohibiciones son circulares con borde rojo, no cuadradas azules.",
          "Las obligaciones son circulares azules, no cuadradas.",
          "",
          "Las de peligro son triangulares con borde rojo.",
        ],
      },
      en: {
        text: "A square sign with blue background and white symbol (e.g. knife and fork) is a…",
        options: [
          "Prohibition sign",
          "Mandatory sign",
          "General information / service sign",
          "Danger warning sign",
        ],
        explanation:
          "Square/rectangular blue signs with white symbols are GENERAL INFORMATION or SERVICE signs (hotel, restaurant, fuel, hospital…). They only inform — no obligation, no prohibition.",
        optionRationales: [
          "Prohibitions are circular with red border, not blue squares.",
          "Mandatory signs are blue CIRCLES, not squares.",
          "",
          "Danger signs are triangular with red border.",
        ],
      },
      ru: {
        text: "Квадратный знак с синим фоном и белым символом (например, вилка и нож) — это знак…",
        options: [
          "Запрета",
          "Предписания",
          "Общей информации / сервиса",
          "Предупреждения об опасности",
        ],
        explanation:
          "Квадратные/прямоугольные синие знаки с белыми символами — знаки ОБЩЕЙ ИНФОРМАЦИИ или СЕРВИСА (гостиница, ресторан, АЗС, больница…). Только информируют, не обязывают и не запрещают.",
        optionRationales: [
          "Запрещающие — круглые с красной каймой, не синие квадраты.",
          "Предписывающие — синие КРУГИ, не квадраты.",
          "",
          "Предупреждающие — треугольные с красной каймой.",
        ],
      },
    },
  },
  {
    id: "manual-t8-23",
    section: "priorities",
    correctIndex: 1,
    source: SOURCE,
    translations: {
      es: {
        text: "Un semáforo en ámbar fijo (no intermitente) significa…",
        options: [
          "Precaución, se puede pasar reduciendo la velocidad",
          "Debes detenerte; solo puedes cruzar si al encenderse estás tan cerca que frenar sería peligroso",
          "Es equivalente al verde",
          "Solo se aplica a peatones",
        ],
        explanation:
          "El ámbar FIJO obliga a detenerse antes de la línea. Solo se puede continuar si al encenderse el ámbar el vehículo está tan cerca del semáforo que frenar podría causar peligro (por ejemplo, alcance por detrás).",
        optionRationales: [
          "Eso describe el ámbar INTERMITENTE (precaución), no el fijo.",
          "",
          "El ámbar no equivale al verde; el verde autoriza el paso libremente, el ámbar exige detenerse.",
          "Aplica a todos los vehículos, no solo a peatones.",
        ],
      },
      en: {
        text: "A steady (non-flashing) amber traffic light means…",
        options: [
          "Caution, you may pass at reduced speed",
          "You must stop; you may only cross if you're so close when it lights that braking would be dangerous",
          "Equivalent to green",
          "Applies only to pedestrians",
        ],
        explanation:
          "Steady amber requires stopping before the line. You may only continue if, when it lit up, your vehicle was so close to the light that braking could cause danger (e.g. rear-end collision).",
        optionRationales: [
          "That describes FLASHING amber (caution), not steady.",
          "",
          "Amber isn't equivalent to green; green allows free passage, amber requires stopping.",
          "Applies to all vehicles, not only pedestrians.",
        ],
      },
      ru: {
        text: "Жёлтый (не мигающий) сигнал светофора означает…",
        options: [
          "Осторожно, можно проехать со сниженной скоростью",
          "Нужно остановиться; проехать можно, только если при включении был так близко, что торможение опасно",
          "Равнозначен зелёному",
          "Действует только для пешеходов",
        ],
        explanation:
          "Постоянный жёлтый требует остановки перед линией. Проехать можно, только если в момент включения ты был так близко, что торможение опасно (например, наезд сзади).",
        optionRationales: [
          "Это описание МИГАЮЩЕГО жёлтого (осторожно), а не постоянного.",
          "",
          "Жёлтый не равен зелёному; зелёный разрешает проезд, жёлтый требует остановиться.",
          "Действует для всех ТС, не только для пешеходов.",
        ],
      },
    },
  },
];
