import type { Question } from "@/lib/types";

// DGT Manual Permiso B (Lectura Fácil, 2024), Tema 16 — Accidentes de tráfico.

const SOURCE = "DGT Manual Permiso B (Lectura Fácil, 2024), Tema 16";

export const QUESTIONS_MANUAL_T16: Question[] = [
  {
    id: "manual-t16-01",
    section: "safety",
    correctIndex: 0,
    source: SOURCE,
    translations: {
      es: {
        text: "¿Qué factor de riesgo causa más accidentes de tráfico?",
        options: [
          "El factor humano (entre 70 y 90 de cada 100)",
          "El estado de la carretera",
          "Fallo en el vehículo",
          "El clima",
        ],
        explanation:
          "El factor humano causa entre 70 y 90 de cada 100 accidentes: exceso de velocidad, alcohol, distracciones. Carretera: 10-35. Vehículo: 4-13.",
        optionRationales: [
          "",
          "El estado de la carretera causa entre 10 y 35 de cada 100 — mucho menos que el humano.",
          "El fallo del vehículo causa solo 4-13 de cada 100.",
          "El clima no es una de las categorías principales del manual.",
        ],
      },
      en: {
        text: "Which risk factor causes the most traffic accidents?",
        options: [
          "The human factor (70-90 out of every 100)",
          "Road condition",
          "Vehicle failure",
          "Weather",
        ],
        explanation:
          "The human factor causes 70-90 out of every 100 accidents: speeding, alcohol, distraction. Road: 10-35. Vehicle: 4-13.",
        optionRationales: [
          "",
          "Road condition causes only 10-35 of every 100 — far less than human.",
          "Vehicle failure causes only 4-13 of every 100.",
          "Weather isn't one of the manual's main categories.",
        ],
      },
      ru: {
        text: "Какой фактор риска вызывает больше всего ДТП?",
        options: [
          "Человеческий (70-90 из 100)",
          "Состояние дороги",
          "Неисправность автомобиля",
          "Погода",
        ],
        explanation:
          "Человеческий фактор — 70-90 из 100 ДТП: превышение скорости, алкоголь, отвлечение. Дорога: 10-35. ТС: 4-13.",
        optionRationales: [
          "",
          "Состояние дороги — 10-35 из 100, намного меньше человеческого.",
          "Неисправность ТС — только 4-13 из 100.",
          "Погода не входит в основные категории руководства.",
        ],
      },
    },
  },
  {
    id: "manual-t16-02",
    section: "safety",
    correctIndex: 1,
    source: SOURCE,
    translations: {
      es: {
        text: "¿Dónde se producen la mayoría de los accidentes mortales?",
        options: [
          "En autopistas y autovías",
          "En carreteras fuera de pueblos o ciudades",
          "En las curvas",
          "En las rotondas",
        ],
        explanation:
          "La mayoría de accidentes mortales se producen en carreteras fuera de poblado y en RECTAS (no en curvas). Las autopistas son de las vías más seguras.",
        optionRationales: [
          "Las autopistas y autovías tienen MENOS accidentes que el resto de carreteras.",
          "",
          "Los accidentes ocurren más en RECTAS que en curvas — típica trampa por intuición.",
          "Las rotondas son intersecciones de baja velocidad; no acumulan accidentes mortales.",
        ],
      },
      en: {
        text: "Where do most fatal accidents happen?",
        options: [
          "On motorways",
          "On roads outside towns",
          "On curves",
          "At roundabouts",
        ],
        explanation:
          "Most fatal accidents happen on interurban roads and on STRAIGHT stretches (not curves). Motorways are among the safest roads.",
        optionRationales: [
          "Motorways have FEWER accidents than other roads.",
          "",
          "More accidents happen on STRAIGHTS than curves — a classic intuition trap.",
          "Roundabouts are low-speed junctions; not fatal-accident hotspots.",
        ],
      },
      ru: {
        text: "Где происходит большинство смертельных ДТП?",
        options: [
          "На автомагистралях",
          "На дорогах вне населённых пунктов",
          "На поворотах",
          "На кольцевых перекрёстках",
        ],
        explanation:
          "Большинство смертельных ДТП — на междугородних дорогах и на ПРЯМЫХ участках (не на поворотах). Автомагистрали — одни из самых безопасных дорог.",
        optionRationales: [
          "На автомагистралях аварий МЕНЬШЕ, чем на других дорогах.",
          "",
          "Аварий больше на ПРЯМЫХ, чем на поворотах — типичная интуитивная ловушка.",
          "Кольцевые перекрёстки — низкоскоростные, не концентрируют смертельные ДТП.",
        ],
      },
    },
  },
  {
    id: "manual-t16-03",
    section: "safety",
    correctIndex: 2,
    source: SOURCE,
    termIds: ["pas"],
    translations: {
      es: {
        text: "¿En qué orden hay que aplicar la regla P.A.S. tras un accidente?",
        options: [
          "Socorrer, Avisar, Proteger",
          "Avisar, Proteger, Socorrer",
          "Proteger, Avisar, Socorrer",
          "Proteger, Socorrer, Avisar",
        ],
        explanation:
          "P.A.S. = Proteger → Avisar → Socorrer. Primero se protege el lugar (chaleco, luces), luego se avisa (112), y por último se atiende a los heridos.",
        optionRationales: [
          "Socorrer sin proteger primero puede producir más víctimas.",
          "Avisar sin proteger es peligroso; alguien puede ser atropellado.",
          "",
          "Avisar va ANTES de socorrer: los servicios de emergencia deben llegar cuanto antes.",
        ],
      },
      en: {
        text: "In what order do you apply the P.A.S. rule after an accident?",
        options: [
          "Aid, Alert, Protect",
          "Alert, Protect, Aid",
          "Protect, Alert, Aid",
          "Protect, Aid, Alert",
        ],
        explanation:
          "P.A.S. = Protect → Alert → Aid. Secure the scene first (vest, hazards), then alert (112), then aid the injured.",
        optionRationales: [
          "Aiding without protecting first can cause more casualties.",
          "Alerting without protecting is dangerous; someone could be hit.",
          "",
          "Alert comes BEFORE aid — emergency services should arrive as soon as possible.",
        ],
      },
      ru: {
        text: "В каком порядке применять правило P.A.S. после ДТП?",
        options: [
          "Помочь, Сообщить, Защитить",
          "Сообщить, Защитить, Помочь",
          "Защитить, Сообщить, Помочь",
          "Защитить, Помочь, Сообщить",
        ],
        explanation:
          "P.A.S. = Защитить → Сообщить → Помочь. Сначала обеспечить безопасность (жилет, аварийка), затем сообщить (112), потом оказать помощь.",
        optionRationales: [
          "Помогать без защиты — риск новых пострадавших.",
          "Сообщать без защиты опасно; кого-то может сбить.",
          "",
          "Сообщать нужно ДО помощи — экстренные службы должны выехать раньше.",
        ],
      },
    },
  },
  {
    id: "manual-t16-04",
    section: "safety",
    correctIndex: 3,
    source: SOURCE,
    translations: {
      es: {
        text: "¿A qué número se llama en caso de accidente?",
        options: ["911", "080", "060", "112"],
        explanation:
          "El número único europeo de emergencias es el 112. Funciona en toda la UE y desde cualquier móvil, incluso sin cobertura del operador.",
        optionRationales: [
          "El 911 es de EEUU. En España el número correcto es 112.",
          "El 080 es un número antiguo de bomberos, no de emergencias generales.",
          "El 060 no es un número de emergencia.",
          "",
        ],
      },
      en: {
        text: "What emergency number do you call in Spain after an accident?",
        options: ["911", "080", "060", "112"],
        explanation:
          "The single European emergency number is 112. It works across the EU and from any mobile, even without carrier signal.",
        optionRationales: [
          "911 is the US number. In Spain use 112.",
          "080 is an old fire-brigade number, not the general emergency line.",
          "060 isn't an emergency number.",
          "",
        ],
      },
      ru: {
        text: "Какой номер набирать при ДТП в Испании?",
        options: ["911", "080", "060", "112"],
        explanation:
          "Единый европейский номер экстренных служб — 112. Работает по всей ЕС с любого мобильного, даже без покрытия оператора.",
        optionRationales: [
          "911 — номер США. В Испании — 112.",
          "080 — старый номер пожарной, не общий экстренный.",
          "060 — не экстренный номер.",
          "",
        ],
      },
    },
  },
  {
    id: "manual-t16-05",
    section: "safety",
    correctIndex: 0,
    source: SOURCE,
    translations: {
      es: {
        text: "En un accidente, ¿debes quitar el casco al motociclista herido?",
        options: [
          "No, nunca (salvo emergencia extrema y por personal formado)",
          "Sí, siempre y rápido",
          "Sí, para comprobar si respira",
          "Solo si está consciente",
        ],
        explanation:
          "NUNCA quites el casco a un motociclista herido: al hacerlo se puede mover el cuello y agravar una lesión cervical. Solo lo retira personal sanitario formado.",
        optionRationales: [
          "",
          "«Siempre y rápido» es exactamente lo que puede matar al herido con lesión cervical.",
          "Aunque parezca lógico, mover el casco arriesga la médula; comprueba respiración con el casco puesto.",
          "Que esté consciente no te autoriza a moverle el cuello quitando el casco.",
        ],
      },
      en: {
        text: "At the scene, should you remove an injured motorcyclist's helmet?",
        options: [
          "No, never (only trained personnel in extreme emergencies)",
          "Yes, always and quickly",
          "Yes, to check they are breathing",
          "Only if they are conscious",
        ],
        explanation:
          "NEVER remove an injured rider's helmet: it can move the neck and worsen a cervical injury. Only trained medical staff should do it.",
        optionRationales: [
          "",
          "'Always and quickly' is exactly what can kill someone with a cervical injury.",
          "Seemingly logical, but moving the helmet risks the spinal cord; check breathing with helmet on.",
          "Being conscious doesn't authorise you to move the neck by removing the helmet.",
        ],
      },
      ru: {
        text: "На месте ДТП нужно ли снимать шлем с пострадавшего мотоциклиста?",
        options: [
          "Нет, никогда (только обученный персонал в крайних случаях)",
          "Да, всегда и быстро",
          "Да, чтобы проверить дыхание",
          "Только если он в сознании",
        ],
        explanation:
          "НИКОГДА не снимать шлем с раненого мотоциклиста: движение может усилить травму шеи. Снимает только медперсонал.",
        optionRationales: [
          "",
          "«Всегда и быстро» — именно то, что может убить при травме шеи.",
          "Кажется логичным, но снятие шлема рискует спинным мозгом; проверять дыхание можно в шлеме.",
          "Сознание не даёт права двигать шею, снимая шлем.",
        ],
      },
    },
  },
  {
    id: "manual-t16-06",
    section: "safety",
    correctIndex: 1,
    source: SOURCE,
    translations: {
      es: {
        text: "Si un objeto está clavado en el cuerpo de un herido, debes…",
        options: [
          "Sacarlo con cuidado y limpiar la herida",
          "NO sacarlo; se saca solo en el hospital",
          "Cortarlo por la mitad para dejar solo la parte enterrada",
          "Echar alcohol alrededor",
        ],
        explanation:
          "NUNCA se saca un objeto clavado. Puede estar taponando una arteria y sacarlo provoca hemorragia masiva. Solo se retira en el hospital.",
        optionRationales: [
          "Sacar el objeto puede provocar una hemorragia mortal.",
          "",
          "Cortarlo puede moverlo dentro del cuerpo y provocar más daño interno.",
          "El alcohol no está indicado en heridas de accidente; solo un profesional decide.",
        ],
      },
      en: {
        text: "If an object is stuck in a casualty's body, you should…",
        options: [
          "Pull it out carefully and clean the wound",
          "Do NOT remove it — only at hospital",
          "Cut it in half to leave only the embedded part",
          "Pour alcohol around it",
        ],
        explanation:
          "NEVER remove an embedded object. It may be plugging an artery; removing causes massive haemorrhage. Only at hospital.",
        optionRationales: [
          "Pulling it out can trigger a fatal haemorrhage.",
          "",
          "Cutting can move it inside and cause more internal damage.",
          "Alcohol isn't indicated on trauma wounds; only a professional decides.",
        ],
      },
      ru: {
        text: "Если в теле пострадавшего застрял предмет, нужно…",
        options: [
          "Аккуратно вытащить и очистить рану",
          "НЕ доставать — только в больнице",
          "Обрезать пополам, чтобы осталась только вросшая часть",
          "Полить спиртом вокруг",
        ],
        explanation:
          "НИКОГДА не доставать застрявший предмет. Он может закрывать артерию; извлечение — массивное кровотечение. Только в больнице.",
        optionRationales: [
          "Извлечение может вызвать смертельное кровотечение.",
          "",
          "Обрезка может сдвинуть предмет внутри и усилить внутреннюю травму.",
          "Спирт не показан при травматических ранах; решает только специалист.",
        ],
      },
    },
  },
  {
    id: "manual-t16-07",
    section: "safety",
    correctIndex: 2,
    source: SOURCE,
    translations: {
      es: {
        text: "Si un herido está inconsciente y NO respira, hay que…",
        options: [
          "Darle agua",
          "Sentarle y esperar",
          "Iniciar reanimación cardiopulmonar (RCP): 30 compresiones + 2 ventilaciones",
          "Ponerle boca abajo",
        ],
        explanation:
          "Herido inconsciente sin respiración: iniciar RCP. 30 compresiones (100/min) + 2 ventilaciones boca a boca. Continuar hasta que lleguen los servicios de emergencia.",
        optionRationales: [
          "Dar agua a un inconsciente puede asfixiarlo.",
          "Esperar sin actuar = pérdida de la «hora de oro».",
          "",
          "Boca abajo bloquea las vías respiratorias; nunca en inconsciente que no respira.",
        ],
      },
      en: {
        text: "If a casualty is unconscious and NOT breathing, you should…",
        options: [
          "Give them water",
          "Sit them up and wait",
          "Start CPR: 30 chest compressions + 2 rescue breaths",
          "Put them face-down",
        ],
        explanation:
          "Unconscious + not breathing: start CPR. 30 compressions (100/min) + 2 breaths. Continue until emergency services arrive.",
        optionRationales: [
          "Water to an unconscious person can cause aspiration/choking.",
          "Doing nothing wastes the 'golden hour'.",
          "",
          "Face-down blocks the airway; never for an unconscious non-breather.",
        ],
      },
      ru: {
        text: "Если пострадавший без сознания и НЕ дышит, нужно…",
        options: [
          "Дать воды",
          "Посадить и подождать",
          "Начать СЛР: 30 компрессий грудной клетки + 2 вдоха",
          "Положить лицом вниз",
        ],
        explanation:
          "Без сознания и не дышит: начать СЛР. 30 компрессий (100/мин) + 2 вдоха. Продолжать до приезда скорой.",
        optionRationales: [
          "Вода без сознания — риск аспирации и удушья.",
          "Бездействие — потеря «золотого часа».",
          "",
          "Лицом вниз перекрывает дыхательные пути; нельзя.",
        ],
      },
    },
  },
  {
    id: "manual-t16-08",
    section: "safety",
    correctIndex: 3,
    source: SOURCE,
    translations: {
      es: {
        text: "Para controlar una hemorragia externa, ¿cuál es el primer método a probar?",
        options: [
          "Torniquete",
          "Compresión arterial",
          "Coser la herida",
          "Compresión directa sobre la herida con una gasa o pañuelo limpio",
        ],
        explanation:
          "Orden correcto: 1) Compresión directa (primero) → 2) Compresión arterial → 3) Torniquete (solo si los dos anteriores fallan). Coser una herida jamás se hace en un accidente.",
        optionRationales: [
          "El torniquete es el ÚLTIMO recurso, solo si compresión directa y arterial fallan.",
          "La compresión arterial es el SEGUNDO método, cuando falla la directa.",
          "Coser heridas en un accidente es imposible y contraindicado.",
          "",
        ],
      },
      en: {
        text: "To control external bleeding, what should you try first?",
        options: [
          "Tourniquet",
          "Arterial pressure",
          "Suture the wound",
          "Direct pressure on the wound with a clean gauze/cloth",
        ],
        explanation:
          "Correct order: 1) Direct pressure (first) → 2) Arterial pressure → 3) Tourniquet (only if the first two fail). Suturing at a scene is never done.",
        optionRationales: [
          "Tourniquet is the LAST resort, only if direct + arterial pressure fail.",
          "Arterial pressure is the SECOND step, when direct pressure fails.",
          "Suturing at an accident scene is impossible and contraindicated.",
          "",
        ],
      },
      ru: {
        text: "Чтобы остановить наружное кровотечение, что применить ПЕРВЫМ?",
        options: [
          "Жгут",
          "Прижатие артерии",
          "Зашить рану",
          "Прямое давление на рану чистой марлей/тканью",
        ],
        explanation:
          "Порядок: 1) прямое давление → 2) прижатие артерии → 3) жгут (только если два первых не помогли). Зашивать в поле нельзя.",
        optionRationales: [
          "Жгут — ПОСЛЕДНЕЕ средство, только если давление и прижатие не помогли.",
          "Прижатие артерии — ВТОРОЙ метод, когда давление не работает.",
          "Зашивание на месте ДТП невозможно и противопоказано.",
          "",
        ],
      },
    },
  },
  {
    id: "manual-t16-09",
    section: "safety",
    correctIndex: 0,
    source: SOURCE,
    translations: {
      es: {
        text: "Si tienes que mover a un herido a un lugar seguro, ¿cómo se hace?",
        options: [
          "Entre tres personas coordinadas, moviéndole como un solo bloque (cabeza-cuello-cuerpo alineados)",
          "Cogiéndole de los brazos y arrastrándole",
          "Cargándole en la espalda de una persona",
          "Girándole primero boca abajo",
        ],
        explanation:
          "Solo se mueve al herido si su vida corre peligro en ese lugar. Se hace entre TRES personas coordinadas, manteniendo cabeza, cuello y cuerpo alineados como un solo bloque.",
        optionRationales: [
          "",
          "Arrastrar por los brazos puede desalinear el cuello y agravar una fractura cervical.",
          "Cargar en la espalda flexiona el cuerpo; peligrosísimo con posibles lesiones internas.",
          "Girar boca abajo bloquea las vías respiratorias y agrava daños de espalda.",
        ],
      },
      en: {
        text: "If you must move a casualty to safety, how do you do it?",
        options: [
          "Three coordinated people, moving them as a single block (head-neck-body aligned)",
          "Grab their arms and drag them",
          "Piggy-back them on one person",
          "Roll them face-down first",
        ],
        explanation:
          "Only move a casualty if their life is at risk where they are. Use THREE coordinated people, keeping head, neck and body aligned as one block.",
        optionRationales: [
          "",
          "Dragging by the arms misaligns the neck and worsens cervical fractures.",
          "Piggy-back bends the body; extremely dangerous with possible internal injuries.",
          "Face-down blocks the airway and worsens back injuries.",
        ],
      },
      ru: {
        text: "Если пострадавшего нужно переместить в безопасное место, как это делать?",
        options: [
          "Втроём согласованно, перемещая как единый блок (голова-шея-тело в одной линии)",
          "Взять за руки и тащить",
          "Взвалить на спину одному человеку",
          "Сначала перевернуть лицом вниз",
        ],
        explanation:
          "Перемещать пострадавшего можно только если ему грозит опасность на месте. Делают ВТРОЁМ, согласованно, сохраняя голову-шею-тело в одной линии.",
        optionRationales: [
          "",
          "Тащить за руки — сдвинуть шею, усугубить перелом.",
          "На спине одному — сгибание тела; крайне опасно при возможных внутренних травмах.",
          "Лицом вниз — перекрытие дыхательных путей и усугубление травм спины.",
        ],
      },
    },
  },
  {
    id: "manual-t16-10",
    section: "safety",
    correctIndex: 1,
    source: SOURCE,
    translations: {
      es: {
        text: "«Omisión de socorro» significa…",
        options: [
          "Ayudar demasiado tarde",
          "No ayudar a la víctima o no avisar del accidente cuando se podía sin peligro; es delito",
          "Ayudar sin conocimientos médicos",
          "Llegar a un accidente por casualidad",
        ],
        explanation:
          "Omisión de socorro es un DELITO: no ayudar cuando puedes hacerlo sin ponerte en peligro, no avisar del accidente, o causarlo y darse a la fuga.",
        optionRationales: [
          "Ayudar tarde no es delito automático; el delito es NO ayudar en absoluto.",
          "",
          "Ayudar sin conocimientos no es delito; el manual anima a ayudar con lo que se sepa.",
          "Ser testigo casual no es delito; el delito es huir después de ayudar poder.",
        ],
      },
      en: {
        text: "'Omisión de socorro' (failure to assist) means…",
        options: [
          "Helping too late",
          "Not helping the victim or not alerting when you could safely; it's a crime",
          "Helping without medical training",
          "Coming across an accident by chance",
        ],
        explanation:
          "Omisión de socorro is a CRIME: not helping when you can do so safely, not alerting emergency services, or fleeing after causing an accident.",
        optionRationales: [
          "Helping late isn't automatically a crime; the crime is NOT helping at all.",
          "",
          "Helping untrained isn't a crime; the manual encourages helping with what you know.",
          "Being a chance witness isn't a crime; fleeing when you could have helped is.",
        ],
      },
      ru: {
        text: "«Omisión de socorro» (неоказание помощи) — это…",
        options: [
          "Помощь с опозданием",
          "Не помочь жертве или не сообщить о ДТП, когда мог без опасности; это преступление",
          "Оказание помощи без медзнаний",
          "Случайно оказаться на месте ДТП",
        ],
        explanation:
          "Omisión de socorro — ПРЕСТУПЛЕНИЕ: не помочь, когда можно без риска, не сообщить о ДТП, или устроить и скрыться.",
        optionRationales: [
          "Помощь с опозданием не автоматически преступление; преступно НЕ помогать вовсе.",
          "",
          "Помощь без медзнаний — не преступление; руководство призывает помогать чем можешь.",
          "Случайный свидетель — не преступление; преступно скрыться, имея возможность помочь.",
        ],
      },
    },
  },
];
