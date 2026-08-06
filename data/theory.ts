import type { TheoryChapter } from "@/lib/types";

// Theory chapters — condensed key facts from
// "Manual del Permiso B en Lectura Fácil" (DGT, 2024).
// All original wording; not verbatim from the manual.

export const THEORY: TheoryChapter[] = [
  {
    id: "t1",
    tema: "1",
    section: "others",
    sourceStartPage: 5,
    termIds: ["conductor", "peaton", "titular_vehiculo", "tara", "mma", "masa_orden_marcha", "turismo", "motocicleta", "ciclomotor", "ciclo"],
    translations: {
      es: {
        title: "Definiciones",
        overview:
          "El vocabulario base de la DGT: vehículos, personas, categorías de peso. Sin dominar estos términos es imposible entender las preguntas.",
        keyFacts: [
          "Vehículos a motor: turismos, motocicletas, camiones, autobuses, vehículos especiales.",
          "Vehículos sin motor: ciclos (bicis, incluso con motor de pedaleo asistido hasta 250 W), animales-tractor, vehículos de movilidad personal.",
          "Ciclomotor ≤ 45 km/h (permiso AM, 15 años). Motocicleta > 45 km/h (A1/A2/A).",
          "Tara = peso vacío. MMA = máximo autorizado con carga. Masa en orden de marcha = tara + 75 kg del conductor.",
          "Peatón: quien va a pie, también quien empuja bici o silla de ruedas (aunque sea eléctrica).",
        ],
      },
      en: {
        title: "Definitions",
        overview:
          "The DGT's base vocabulary: vehicles, people, weight categories. Without these terms you can't parse the exam questions.",
        keyFacts: [
          "Motor vehicles: cars, motorcycles, lorries, buses, special vehicles.",
          "Non-motor: cycles (bikes, incl. pedal-assist e-motors up to 250 W), animal-drawn, personal mobility vehicles.",
          "Moped ≤ 45 km/h (AM licence, age 15). Motorcycle > 45 km/h (A1/A2/A).",
          "Tare = empty weight. GVWR = maximum authorised loaded weight. Running mass = tare + 75 kg driver.",
          "Pedestrian: anyone on foot, incl. someone pushing a bike or a wheelchair (even electric).",
        ],
      },
      ru: {
        title: "Определения",
        overview:
          "Базовая лексика DGT: транспорт, участники, весовые категории. Без этих терминов вопросы не разобрать.",
        keyFacts: [
          "Моторный транспорт: легковые, мотоциклы, грузовики, автобусы, спецтранспорт.",
          "Безмоторный: велосипеды (включая электроассистированные до 250 Вт), гужевые, СИМ.",
          "Мопед ≤ 45 км/ч (права AM, с 15 лет). Мотоцикл > 45 км/ч (A1/A2/A).",
          "Tara — снаряжённая масса без водителя. MMA — максимальная разрешённая. Масса в порядке движения = tara + 75 кг.",
          "Пешеход: тот, кто идёт пешком, а также ведёт велосипед или коляску (в т.ч. электрическую).",
        ],
      },
    },
  },
  {
    id: "t2",
    tema: "2",
    section: "admin",
    sourceStartPage: 26,
    termIds: ["permiso_conducir", "permiso_circulacion", "itv", "seguro_obligatorio", "matricula", "conductor_novel", "midgt"],
    translations: {
      es: {
        title: "Documentación",
        overview:
          "Los cuatro documentos obligatorios, cuándo renovar el permiso, cuándo pasar la ITV y qué es un conductor novel.",
        keyFacts: [
          "Debes llevar siempre: permiso de conducir, permiso de circulación, tarjeta ITV y seguro obligatorio.",
          "Permiso B: mínimo 18 años. Se renueva cada 10 años (<65) o cada 5 años (≥65).",
          "Novel = 2 años tras obtener el permiso. Empiezas con 8 puntos y llevas placa L verde en el cristal trasero.",
          "ITV turismo: primera a los 4 años, luego cada 2, anual tras 10 años.",
          "Cambio de datos personales: comunicar a Tráfico en 15 días. Venta de vehículo: 10 días.",
          "MiDGT es la app oficial: sirve como versión digital del permiso ante controles policiales.",
        ],
      },
      en: {
        title: "Documentation",
        overview:
          "The four mandatory documents, licence renewal, ITV schedule and what makes you a novice driver.",
        keyFacts: [
          "Always carry: driving licence, vehicle registration, ITV card, mandatory insurance.",
          "B licence: minimum age 18. Renew every 10 years (under 65) or every 5 (65+).",
          "Novice = 2 years after getting the licence. Start with 8 points, display a green L on the rear window.",
          "ITV cars: first at 4 years, then every 2, annually after 10.",
          "Personal-data changes: notify Tráfico within 15 days. Vehicle sale: 10 days.",
          "MiDGT is the official app — a digital version of your licence for police checks.",
        ],
      },
      ru: {
        title: "Документы",
        overview:
          "Четыре обязательных документа, продление прав, график ITV и что такое «начинающий водитель».",
        keyFacts: [
          "Всегда с собой: права, свидетельство о регистрации ТС, карта ITV, обязательная страховка.",
          "Категория B: с 18 лет. Продлевать каждые 10 лет (до 65) или каждые 5 (65+).",
          "Начинающий — 2 года после получения прав. Стартовые 8 баллов, зелёная табличка L сзади.",
          "ITV для легковых: первый через 4 года, затем каждые 2, ежегодно после 10.",
          "Смена личных данных — сообщить в Tráfico в 15 дней. Продажа ТС — в 10 дней.",
          "MiDGT — официальное приложение, цифровой аналог прав при проверке полиции.",
        ],
      },
    },
  },
  {
    id: "t3",
    tema: "3",
    section: "alcohol_drugs",
    sourceStartPage: 42,
    termIds: ["alcoholemia", "fatiga", "somnolencia", "distancia_reaccion"],
    translations: {
      es: {
        title: "El estado del conductor",
        overview:
          "Cómo el alcohol, drogas, fatiga y sueño afectan la conducción. Números exactos que la DGT pregunta directamente.",
        keyFacts: [
          "Tiempo de reacción normal: 0,5-1 segundo. Aumenta con fatiga, alcohol y edad.",
          "Descansos: 20-30 min cada 2 horas o 200 km, aunque no notes fatiga.",
          "Alcohol general: 0,25 mg/l aire (0,5 g/l sangre). Novel y profesional: 0,15 mg/l (0,3 g/l).",
          "Pico de alcoholemia: ~1 hora después de beber; luego baja muy despacio.",
          "El alcohol afecta sobre todo al cerebro y a la vista, no solo al equilibrio.",
          "Ante los primeros síntomas de fatiga: parar en lugar seguro y dormir 20-30 min. El café y la música no la curan.",
          "Somnolencia = pesadez + sueño. Bostezos, visión borrosa, no recordar los últimos km.",
        ],
      },
      en: {
        title: "The driver's state",
        overview:
          "How alcohol, drugs, fatigue and sleepiness affect driving. Exact numbers the DGT asks about directly.",
        keyFacts: [
          "Normal reaction time: 0.5-1 second. Grows with fatigue, alcohol and age.",
          "Rest breaks: 20-30 min every 2 hours or 200 km, even if you don't feel tired.",
          "General BAC: 0.25 mg/l air (0.5 g/l blood). Novice and professional: 0.15 mg/l (0.3 g/l).",
          "Peak BAC: ~1 hour after drinking; then slow decline.",
          "Alcohol mainly hits the brain and vision, not just balance.",
          "First signs of fatigue: stop in a safe place and sleep 20-30 min. Coffee and loud music don't cure it.",
          "Drowsiness = heaviness + sleepiness. Yawning, blurred vision, forgetting the last few km.",
        ],
      },
      ru: {
        title: "Состояние водителя",
        overview:
          "Как алкоголь, наркотики, усталость и сон влияют на вождение. Точные цифры, которые DGT спрашивает напрямую.",
        keyFacts: [
          "Нормальное время реакции: 0,5-1 сек. Растёт при усталости, алкоголе, в возрасте.",
          "Отдых: 20-30 мин каждые 2 часа или 200 км, даже если усталости нет.",
          "Общий предел: 0,25 мг/л (0,5 г/л). Начинающие и профи: 0,15 мг/л (0,3 г/л).",
          "Пик концентрации алкоголя — примерно через 1 час; потом медленно снижается.",
          "Алкоголь бьёт прежде всего по мозгу и зрению, не только по равновесию.",
          "Первые признаки усталости — остановиться в безопасном месте и поспать 20-30 мин. Кофе и музыка не лечат.",
          "Сонливость = тяжесть + желание спать. Зевота, размытое зрение, не помнишь последние км.",
        ],
      },
    },
  },
  {
    id: "t4",
    tema: "4",
    section: "others",
    sourceStartPage: 74,
    termIds: ["conductor", "peaton"],
    translations: {
      es: {
        title: "Obligaciones de conductores y peatones",
        overview:
          "Qué está prohibido al conducir, qué obligaciones tienen los peatones, cómo circulan los animales.",
        keyFacts: [
          "Prohibido usar auriculares conectados al móvil o para escuchar música (excepto GPS en casco de moto).",
          "Prohibido sujetar el móvil con la mano: manos libres solo si no requiere sujeción manual.",
          "Al repostar: motor, luces y radio apagados. Prohibido fumar cerca.",
          "En bici o moto de noche: prenda o elemento reflectante visible a 150 m.",
          "Peatón fuera de poblado: caminar por la izquierda (salvo que sea más seguro la derecha).",
          "En grupo de peatones: primero luz blanca o amarilla, último luz roja.",
          "Vehículos de movilidad personal (patinetes): prohibidos en aceras, túneles, travesías, autopistas y carreteras interurbanas.",
        ],
      },
      en: {
        title: "Driver and pedestrian obligations",
        overview:
          "What's forbidden while driving, pedestrian duties, and how animals travel on the road.",
        keyFacts: [
          "Forbidden: headphones connected to a phone or music player (except GPS-audio in motorcycle helmets).",
          "Forbidden: holding a phone in your hand. Hands-free is fine only if you don't have to hold anything.",
          "Refuelling: engine, lights and radio off. No smoking nearby.",
          "Bike/moped at night: reflective item visible from 150 m.",
          "Pedestrian outside town: walk on the LEFT (unless the right is safer).",
          "Group walking single-file at night: front person carries white or yellow, last carries red.",
          "Personal mobility vehicles (e-scooters): forbidden on pavements, tunnels, through-roads, motorways and interurban roads.",
        ],
      },
      ru: {
        title: "Обязанности водителей и пешеходов",
        overview:
          "Что запрещено за рулём, обязанности пешеходов, как перемещать животных по дороге.",
        keyFacts: [
          "Запрещены наушники, подключённые к телефону или для музыки (исключение: GPS-звук в мотошлеме).",
          "Запрещено держать телефон в руке. Громкая связь можно, если не требуется удерживать устройство.",
          "На заправке: двигатель, фары, радио — выключены. Курить рядом нельзя.",
          "Велосипед/мопед ночью: светоотражающий элемент, видимый с 150 м.",
          "Пешеход вне города: идти по ЛЕВОЙ стороне (кроме случаев, когда справа безопаснее).",
          "Группа в колонне ночью: у переднего белый/жёлтый огонь, у заднего — красный.",
          "Электросамокаты и подобное: запрещены на тротуарах, в тоннелях, на travesías, автомагистралях и загородных дорогах.",
        ],
      },
    },
  },
  {
    id: "t5",
    tema: "5",
    section: "safety",
    sourceStartPage: 86,
    termIds: ["cinturon_seguridad", "sri", "airbag", "abs", "aeb", "aquaplaning"],
    translations: {
      es: {
        title: "Dispositivos de seguridad en el vehículo",
        overview:
          "Diferencia entre seguridad activa (evita accidentes) y pasiva (reduce daños). Uso correcto de ABS, cinturón, airbag, y estado de neumáticos y frenos.",
        keyFacts: [
          "Seguridad activa: frenos, ruedas, luces (necesitan uso del conductor). Pasiva: cinturón, airbag, reposacabezas (actúan automáticamente).",
          "El pedal de freno actúa sobre las 4 ruedas. El freno de mano solo sobre las traseras.",
          "ABS: impide el bloqueo de las ruedas. Con ABS pisas fuerte y a fondo hasta parar; sin ABS bombeas o alivias al notar bloqueo.",
          "Cinturón obligatorio para TODOS los ocupantes, en todos los asientos y todo tipo de vía.",
          "SRI (sillita infantil) obligatorio para niños de menos de 1,35 m.",
          "Airbag COMPLEMENTA el cinturón, no lo sustituye. Sin cinturón puede causar más lesiones.",
          "Profundidad mínima legal del dibujo del neumático: 1,6 mm. Cambio recomendado cada 5 años aunque estén bien.",
          "Presión de los neumáticos: revisar al menos 1 vez al mes.",
        ],
      },
      en: {
        title: "Vehicle safety devices",
        overview:
          "Active safety (prevents crashes) vs passive (reduces harm). Correct use of ABS, seatbelt, airbag, plus tyre and brake condition.",
        keyFacts: [
          "Active safety: brakes, tyres, lights (need driver input). Passive: seatbelt, airbag, headrest (auto-triggered).",
          "The brake pedal acts on all 4 wheels. The handbrake only on the rear.",
          "ABS prevents wheel-lock. With ABS press hard and all the way; without ABS pump or ease off when wheels start to lock.",
          "Seatbelt mandatory for ALL occupants, every seat, every road.",
          "Child restraint mandatory for children under 1.35 m tall.",
          "The airbag COMPLEMENTS the seatbelt; it doesn't replace it. Without a seatbelt it can worsen injuries.",
          "Legal minimum tyre tread depth: 1.6 mm. Recommended replacement every 5 years even if visually fine.",
          "Tyre pressure: check at least once a month.",
        ],
      },
      ru: {
        title: "Устройства безопасности автомобиля",
        overview:
          "Активная безопасность (предотвращает ДТП) vs пассивная (снижает ущерб). Правильное использование ABS, ремня, подушки, состояние шин и тормозов.",
        keyFacts: [
          "Активная: тормоза, шины, свет (требуют действий водителя). Пассивная: ремень, подушка, подголовник (авто).",
          "Педаль тормоза — на все 4 колеса. Ручник — только на задние.",
          "ABS не даёт колёсам блокироваться. С ABS — жать до упора; без ABS — «прокачивать» или отпускать при блокировке.",
          "Ремень обязателен для ВСЕХ пассажиров, на любом сидении, на любой дороге.",
          "Детское кресло обязательно для детей ростом менее 1,35 м.",
          "Подушка ДОПОЛНЯЕТ ремень, не заменяет его. Без ремня может нанести дополнительные травмы.",
          "Минимальная законная глубина протектора: 1,6 мм. Рекомендуется менять каждые 5 лет даже без износа.",
          "Давление в шинах: проверять минимум раз в месяц.",
        ],
      },
    },
  },
  {
    id: "t6",
    tema: "6",
    section: "mechanics",
    sourceStartPage: 120,
    translations: {
      es: {
        title: "Elementos del vehículo y normas para usarlos",
        overview:
          "Pedales, volante, retrovisores, sistemas ADAS. Cómo colocarte en el asiento y qué esperar de los asistentes electrónicos.",
        keyFacts: [
          "Volante: dos manos, agarre por fuera, firme sin apretar, sin cruzar las manos al girar.",
          "Retrovisores obligatorios en turismo: uno exterior izquierdo + uno interior central. El exterior derecho es recomendado.",
          "Postura: cabeza por encima del volante; brazos ligeramente doblados; reposacabezas a la altura de tu cabeza.",
          "TSR (reconocimiento de señales de velocidad): detecta límites y los muestra al conductor.",
          "LDW/LKA (aviso/asistente de mantenimiento de carril): avisa o corrige si te sales sin señalizar.",
          "Los sistemas ADAS ayudan pero NO sustituyen al conductor.",
          "Prohibido pegar láminas o colocar cristales de colores no homologados que reduzcan la visibilidad.",
        ],
      },
      en: {
        title: "Vehicle controls and how to use them",
        overview:
          "Pedals, wheel, mirrors, ADAS. Correct seating posture and what to expect from electronic assistants.",
        keyFacts: [
          "Wheel: both hands, grip from outside, firm not tight, never cross hands when turning.",
          "Mandatory mirrors on a car: left exterior + interior central. The right exterior is recommended.",
          "Posture: head above the wheel; arms slightly bent; headrest at head height.",
          "TSR (speed-sign recognition): detects limits and shows them to the driver.",
          "LDW/LKA (lane-departure warning / keep assist): alerts or steers back if you drift without indicating.",
          "ADAS help you but DO NOT replace the driver.",
          "Forbidden: films or non-approved tinted glass that reduce visibility.",
        ],
      },
      ru: {
        title: "Элементы автомобиля и как их использовать",
        overview:
          "Педали, руль, зеркала, ADAS. Правильная посадка и что ждать от электронных помощников.",
        keyFacts: [
          "Руль: обе руки, снаружи, крепко без напряжения, не перекрещивать руки при повороте.",
          "Обязательные зеркала на легковом: левое наружное + салонное. Правое наружное — рекомендуется.",
          "Посадка: голова над рулём; руки слегка согнуты; подголовник на уровне головы.",
          "TSR (распознавание знаков): показывает ограничения скорости на приборке.",
          "LDW/LKA (уход/удержание в полосе): предупреждает или подруливает при уходе без сигнала.",
          "ADAS помогают, но НЕ заменяют водителя.",
          "Запрещены плёнки или несертифицированная тонировка, ухудшающие видимость.",
        ],
      },
    },
  },
  {
    id: "t7",
    tema: "7",
    section: "driving_conditions",
    sourceStartPage: 139,
    translations: {
      es: {
        title: "Sistema de luces",
        overview:
          "Cuándo encender qué luz. Reglas de posición, cruce, largo alcance, antinieblas, emergencia y claxon.",
        keyFacts: [
          "Luces obligatorias: de noche, en túneles, en carriles reversibles o adicionales, y en días con poca luz.",
          "Colores de posición: blanco delante, rojo detrás, amarillo en los laterales.",
          "Luces largas prohibidas dentro de pueblos y ciudades y con el vehículo parado.",
          "Con niebla: cruce + antinieblas delanteras. Traseras solo con visibilidad muy mala. Nunca las largas.",
          "Motocicletas: siempre con luces de cruce durante el día.",
          "Señal de emergencia (4 intermitentes): avería que impide la velocidad mínima, viaje urgente, aviso de vehículo parado.",
          "Claxon: solo para evitar accidente y, fuera de poblado, para adelantar o servicio urgente.",
          "Carretera poco iluminada: no se lee la matrícula a 10 m o no se ve un coche oscuro a 50 m.",
        ],
      },
      en: {
        title: "Lighting system",
        overview:
          "When to use which light. Position, dipped, high beam, fog, hazards and the horn.",
        keyFacts: [
          "Lights required: at night, in tunnels, on reversible/additional lanes, and on dark days.",
          "Position colours: white front, red rear, yellow sides.",
          "High beams forbidden inside towns and cities, and with the vehicle stopped.",
          "In fog: dipped + front fogs. Rear fogs only in very poor visibility. Never high beams.",
          "Motorcycles: dipped beams on all day.",
          "Hazards (4 flashers): breakdown that can't hit the minimum speed, emergency trip, warning of stopped vehicle.",
          "Horn: only to prevent an accident, and outside towns to signal overtaking or a priority run.",
          "Poor lighting: can't read the plate at 10 m, can't see a dark car at 50 m.",
        ],
      },
      ru: {
        title: "Система света",
        overview:
          "Когда какие фары включать. Габариты, ближний, дальний, противотуманки, аварийка и клаксон.",
        keyFacts: [
          "Свет обязателен: ночью, в тоннелях, на реверсивных/доп. полосах, в тёмные дни.",
          "Цвета габаритов: белый спереди, красный сзади, жёлтый по бокам.",
          "Дальний свет запрещён в населённых пунктах и когда авто стоит.",
          "В туман: ближний + передние противотуманные. Задние — только при очень плохой видимости. Дальний нельзя.",
          "Мотоциклы: днём всегда с включённым ближним.",
          "Аварийка (4 поворотника): поломка ниже мин. скорости, экстренная поездка, предупреждение о стоящем ТС.",
          "Клаксон: только для предотвращения аварии, вне города — для обгона или срочной поездки.",
          "Плохо освещённая дорога: не читается номер с 10 м, не видно тёмный авто на 50 м.",
        ],
      },
    },
  },
  {
    id: "t8",
    tema: "8",
    section: "signs",
    sourceStartPage: 154,
    termIds: ["stop", "ceda_paso", "senal_peligro", "senal_reglamentacion", "senal_indicacion", "semaforo", "marca_vial", "senal_vertical"],
    translations: {
      es: {
        title: "Señales de circulación",
        overview:
          "La jerarquía de señales, formas y colores, series P/R/S y qué hacer con los agentes de tráfico.",
        keyFacts: [
          "Orden de prioridad: 1) Agentes de tráfico, 2) Temporales, 3) Semáforos, 4) Verticales, 5) Marcas viales.",
          "STOP obliga a detención COMPLETA antes de la línea. Ceda el paso solo obliga a reducir y ceder.",
          "Entre STOP y ceda el paso prevalece STOP. Entre STOP y semáforo verde prevalece el semáforo.",
          "Serie P (peligro): triangular con borde rojo. Serie R (reglamentación): circular. Serie S (indicación): rectangular.",
          "Norma general: obedecer las señales verticales y semáforos que están a tu derecha.",
          "Semáforo amarillo fijo prohíbe el paso salvo a vehículos que no pueden detenerse con seguridad.",
          "Aspa roja (X) sobre un carril: no se puede ocupar; abandonarlo lo antes posible.",
          "Amarilla intermitente en semáforo circular: ceder el paso a derecha, izquierda y peatones.",
        ],
      },
      en: {
        title: "Traffic signs",
        overview:
          "The signal hierarchy, shapes and colours, P/R/S series, and what to do with traffic officers.",
        keyFacts: [
          "Priority order: 1) Traffic officers, 2) Temporary signs, 3) Lights, 4) Vertical signs, 5) Road markings.",
          "STOP requires a FULL stop before the line. Yield only requires slowing and giving way.",
          "STOP vs yield → STOP wins. STOP vs green light → green light wins.",
          "P series (danger): triangular red border. R series (regulation): circular. S series (info): rectangular.",
          "General rule: obey vertical signs and lights on your right.",
          "Steady amber = passage forbidden unless you can't stop safely.",
          "Red X above a lane: lane not usable; leave it as soon as possible.",
          "Flashing amber on a round light: yield to right, left, and pedestrians.",
        ],
      },
      ru: {
        title: "Дорожные знаки",
        overview:
          "Иерархия сигналов, формы и цвета, серии P/R/S, и что делать с регулировщиком.",
        keyFacts: [
          "Порядок приоритета: 1) регулировщик, 2) временные знаки, 3) светофоры, 4) постоянные знаки, 5) разметка.",
          "STOP — ПОЛНАЯ остановка перед линией. «Уступите» — только снизить скорость и уступить.",
          "STOP vs «уступите» → STOP. STOP vs зелёный светофор → светофор.",
          "Серия P (опасность): треугольная с красной каймой. R (предписание): круглая. S (информация): прямоугольная.",
          "Общее правило: подчиняться знакам и светофорам, что справа.",
          "Постоянный жёлтый — проезд запрещён, кроме случаев когда нельзя безопасно остановиться.",
          "Красный крест X над полосой: полосу занимать нельзя, покинуть как можно скорее.",
          "Мигающий жёлтый на круглом светофоре: уступить справа, слева и пешеходам.",
        ],
      },
    },
  },
  {
    id: "t9",
    tema: "9",
    section: "driving_conditions",
    sourceStartPage: 212,
    termIds: ["calzada", "arcen", "carril", "autopista", "autovia", "travesia", "glorieta", "paso_a_nivel"],
    translations: {
      es: {
        title: "La vía",
        overview:
          "Partes de la vía, tipos (autopista, autovía, carretera, travesía) y por dónde debe circular cada vehículo.",
        keyFacts: [
          "Plataforma = calzada + arcén. Calzada estrecha < 6,5 m. Carril estrecho < 3 m.",
          "Vía urbana: dentro del pueblo. Interurbana: fuera. Travesía: interurbana atravesando un pueblo (máx 50 km/h).",
          "Autopista: solo accesos autorizados, sin cruces a nivel, totalmente vallada. Autovía: similar pero con acceso desde algunas propiedades.",
          "Regla general: circular por la derecha, cerca del borde de la calzada.",
          "Doble sentido con 3 carriles: el central solo para adelantar o girar a la izquierda.",
          "Automóviles no deben circular por el arcén, salvo avería o emergencia.",
          "Panel de estado del tráfico: blanco = normal, verde = no se alcanza el máximo, amarillo = paros, rojo = muchas retenciones, negro = vía cortada.",
        ],
      },
      en: {
        title: "The road",
        overview:
          "Parts of the road, types (motorway, dual carriageway, road, through-road) and where each vehicle should drive.",
        keyFacts: [
          "Plataforma = roadway + shoulder. Narrow roadway < 6.5 m. Narrow lane < 3 m.",
          "Urban road: inside town. Interurban: outside. Through-road: interurban passing through a town (max 50 km/h).",
          "Motorway: only authorised access, no level crossings, fully fenced. Dual carriageway: similar but with some property access.",
          "General rule: drive on the right, close to the edge of the roadway.",
          "Two-way road with 3 lanes: central lane only for overtaking or turning left.",
          "Cars must not drive on the shoulder except in breakdown or emergency.",
          "Traffic-status panel: white = normal, green = can't reach max speed, yellow = jams, red = heavy jams, black = road closed.",
        ],
      },
      ru: {
        title: "Дорога",
        overview:
          "Части дороги, типы (автомагистраль, автомагистраль ниже класса, обычная дорога, travesía) и по чему кому ехать.",
        keyFacts: [
          "Plataforma = проезжая часть + обочина. Узкая проезжая < 6,5 м. Узкая полоса < 3 м.",
          "Городская: внутри посёлка. Загородная: снаружи. Travesía: загородная через посёлок (макс 50 км/ч).",
          "Autopista: только официальные съезды, без пересечений в уровне, огорожена. Autovía: похоже, но с доступом к некоторым владениям.",
          "Общее правило: ехать по правой, ближе к краю проезжей части.",
          "Двусторонняя с 3 полосами: средняя — только для обгона или поворота налево.",
          "Легковые не ездят по обочине, кроме поломки или аварии.",
          "Табло состояния трафика: белый = норма, зелёный = нельзя достичь максимума, жёлтый = заторы, красный = серьёзные заторы, чёрный = дорога перекрыта.",
        ],
      },
    },
  },
  {
    id: "t10",
    tema: "10",
    section: "driving_conditions",
    sourceStartPage: 243,
    termIds: ["autopista", "autovia", "distancia_seguridad", "distancia_reaccion", "distancia_frenado"],
    translations: {
      es: {
        title: "Velocidad y distancias",
        overview:
          "Tipos de velocidad, límites genéricos por tipo de vehículo y de vía, y las distancias que importan al frenar.",
        keyFacts: [
          "Cuatro tipos de velocidad: máxima, mínima, inadecuada (dentro del límite pero mala para las condiciones) y adecuada.",
          "Turismo: autopista/autovía 120 km/h, convencional 90, urbana 30 (o 50 con 2+ carriles por sentido).",
          "Autobús: autopista 100, convencional 90. Camión/furgoneta >3.500 kg: autopista 90, convencional 80.",
          "Autopista/autovía: mínimo 60 km/h para poder circular.",
          "Al acercarse a paso a nivel, rotonda o cruce sin prioridad: máximo 50 km/h.",
          "Tipos de distancia: reacción, frenado, detención (reacción + frenado), separación lateral, seguridad.",
          "Distancia de seguridad práctica: 2-3 segundos; 50 m para ≥ 3.500 kg; 100-150 m en túneles.",
        ],
      },
      en: {
        title: "Speed and distances",
        overview:
          "Types of speed, general limits by vehicle and road, and the distances that matter when braking.",
        keyFacts: [
          "Four types of speed: max, min, unsuitable (within limit but wrong for conditions), suitable.",
          "Car: motorway 120, conventional road 90, urban 30 (or 50 with 2+ lanes per direction).",
          "Bus: motorway 100, conventional 90. Lorry / van > 3,500 kg: motorway 90, conventional 80.",
          "Motorway/dual carriageway: minimum 60 km/h to travel on them.",
          "Approaching a level crossing, roundabout or unpriority junction: max 50 km/h.",
          "Distance types: reaction, braking, stopping (reaction + braking), lateral clearance, safety.",
          "Practical safe following distance: 2-3 seconds; 50 m for ≥ 3,500 kg; 100-150 m in tunnels.",
        ],
      },
      ru: {
        title: "Скорость и дистанции",
        overview:
          "Типы скорости, общие лимиты по типу ТС и дороги, и дистанции при торможении.",
        keyFacts: [
          "Четыре типа: макс, мин, ненадлежащая (в пределах лимита, но не для условий), надлежащая.",
          "Легковой: автомагистраль 120, обычная 90, городская 30 (или 50 при 2+ полосах в направлении).",
          "Автобус: автомагистраль 100, обычная 90. Грузовик > 3500 кг: автомагистраль 90, обычная 80.",
          "Автомагистраль: минимум 60 км/ч, чтобы ехать по ней.",
          "При приближении к ж/д переезду, кольцу или перекрёстку без преимущества: макс 50 км/ч.",
          "Типы дистанций: реакции, тормозной путь, полный остановочный, боковой интервал, безопасная.",
          "Практическая безопасная дистанция: 2-3 сек; 50 м для ≥ 3500 кг; 100-150 м в тоннеле.",
        ],
      },
    },
  },
  {
    id: "t11",
    tema: "11",
    section: "others",
    sourceStartPage: 267,
    termIds: ["adelantamiento", "cambio_sentido", "parada", "estacionamiento"],
    translations: {
      es: {
        title: "Maniobras",
        overview:
          "La regla R.S.M., adelantamientos, cambio de sentido y la diferencia entre parada y estacionamiento.",
        keyFacts: [
          "Regla R.S.M. antes de cualquier maniobra: Retrovisor, Señal, Maniobra.",
          "Adelantamiento por la izquierda como norma. Excepciones: tranvía en el centro, conductor que gira a la izquierda, calle urbana con 2+ carriles del mismo sentido.",
          "Al adelantar a ciclo o ciclomotor: mínimo 1,5 m de separación lateral y cambiar al carril de la izquierda.",
          "Prohibido adelantar en curvas, cambios de rasante y con visibilidad reducida.",
          "Cambio de sentido: en una sola maniobra, sin obstruir; en autopista/autovía solo por enlace habilitado.",
          "Al ser adelantado: mantenerte a la derecha del carril, no acelerar, reducir si hay peligro.",
          "Parada: voluntaria, <2 min, conductor cerca. Estacionamiento: >2 min, conductor puede alejarse.",
        ],
      },
      en: {
        title: "Manoeuvres",
        overview:
          "The R.S.M. rule, overtaking, U-turns, and the difference between parada and estacionamiento.",
        keyFacts: [
          "R.S.M. rule before any manoeuvre: Mirror, Signal, Manoeuvre.",
          "Overtake on the left as a rule. Exceptions: tram in the middle, driver clearly turning left, urban street with 2+ same-direction lanes.",
          "Overtaking a cycle or moped: minimum 1.5 m lateral clearance and change to the left lane.",
          "Overtaking is forbidden on curves, crests and where visibility is reduced.",
          "U-turn: single manoeuvre, without obstructing; on motorway only at a designated interchange.",
          "When being overtaken: stay right in your lane, don't accelerate, slow down if danger appears.",
          "Parada: voluntary stop, <2 min, driver stays close. Estacionamiento: >2 min, driver may leave.",
        ],
      },
      ru: {
        title: "Манёвры",
        overview:
          "Правило R.S.M., обгон, разворот, и разница между parada и estacionamiento.",
        keyFacts: [
          "R.S.M. перед любым манёвром: Зеркало, Сигнал, Манёвр.",
          "Обгон слева по правилу. Исключения: трамвай посередине, водитель явно поворачивает налево, город с 2+ полосами одного направления.",
          "Обгон велосипеда/мопеда: минимум 1,5 м бокового интервала и переход на левую полосу.",
          "Обгон запрещён на поворотах, подъёмах, при плохой видимости.",
          "Разворот: за один приём, не создавая помех; на автомагистрали — только через специальные развязки.",
          "Когда вас обгоняют: держаться правее в полосе, не ускоряться, при опасности снизить скорость.",
          "Parada: до 2 мин, водитель рядом. Estacionamiento: более 2 мин, водитель может уйти.",
        ],
      },
    },
  },
  {
    id: "t12",
    tema: "12",
    section: "priorities",
    sourceStartPage: 301,
    termIds: ["ceda_paso", "stop", "glorieta"],
    translations: {
      es: {
        title: "Normas de preferencia",
        overview:
          "Quién tiene preferencia en cada situación: cruces, rotondas, autopistas, ciclistas, peatones y vehículos de urgencia.",
        keyFacts: [
          "Cruce sin señales: preferencia para el vehículo que viene por la DERECHA.",
          "Los vehículos por raíles (tranvía) tienen preferencia sobre los de carretera.",
          "En una rotonda tienen preferencia los vehículos que ya circulan por ella.",
          "Al incorporarte a autopista/autovía: cedes tú, no los que ya circulan.",
          "Peatones tienen preferencia en pasos, aceras y zonas peatonales; también cuando un vehículo cruza una acera (garaje).",
          "Ciclistas en grupo: si uno ya ha entrado en el cruce, todos los demás vehículos esperan a que pase el grupo entero.",
          "Vehículos de urgencia con luces + sirena: preferencia siempre. Apartarse a la derecha y detenerse si es necesario.",
          "Zona estrecha sin señales: preferencia para el que entró primero.",
        ],
      },
      en: {
        title: "Priority rules",
        overview:
          "Who has right of way in each situation: junctions, roundabouts, motorways, cyclists, pedestrians and emergency vehicles.",
        keyFacts: [
          "Unsignaled junction: priority to the vehicle coming from the RIGHT.",
          "Rail vehicles (trams) have priority over road vehicles.",
          "On a roundabout, priority goes to vehicles already circulating.",
          "Joining a motorway: you yield, not those already on it.",
          "Pedestrians have priority at crossings, pavements and pedestrian zones; also when a vehicle crosses a pavement (garage).",
          "Group of cyclists: once one has entered the junction, all other vehicles wait for the whole group.",
          "Emergency vehicles with lights + siren: always priority. Move right and stop if needed.",
          "Narrow section without signs: priority to the vehicle that entered first.",
        ],
      },
      ru: {
        title: "Правила приоритета",
        overview:
          "У кого преимущество в каждой ситуации: перекрёстки, кольца, автомагистрали, велосипедисты, пешеходы, спецтранспорт.",
        keyFacts: [
          "Нерегулируемый перекрёсток: преимущество у того, кто движется СПРАВА.",
          "Рельсовый транспорт (трамвай) имеет преимущество над безрельсовым.",
          "На кольце преимущество у тех, кто уже движется по кругу.",
          "Въезд на автомагистраль: уступаешь ты, а не те, кто уже едет.",
          "Пешеходы имеют приоритет на переходах, тротуарах, в пешеходных зонах; также когда авто пересекает тротуар (выезд из гаража).",
          "Группа велосипедистов: если один уже въехал на перекрёсток, остальные ждут всю группу.",
          "Спецтранспорт с мигалками + сиреной: приоритет всегда. Прижаться вправо, при необходимости — остановиться.",
          "Узкий участок без знаков: преимущество у того, кто въехал первым.",
        ],
      },
    },
  },
  {
    id: "t13",
    tema: "13",
    section: "others",
    sourceStartPage: 319,
    translations: {
      es: {
        title: "Transportar personas y cargas",
        overview:
          "Cuántas personas se pueden transportar, cómo debe ir la carga, y las medidas máximas permitidas de vehículo y carga.",
        keyFacts: [
          "Solo tantos pasajeros como asientos. Cada uno en su asiento durante todo el viaje.",
          "Bicicleta: solo su conductor. Excepción: adulto puede llevar a un niño <7 años en asiento adicional autorizado.",
          "Ciclomotor/motocicleta: pasajero >12 años, sentado detrás, casco puesto. Excepción: niño >7 años con uno de sus padres.",
          "Anchura máxima del vehículo (con carga): 2,55 m. Altura: 4 m (autobús 4,20; grúas 4,50).",
          "Vehículos ≤ 5 m: la carga puede sobresalir hasta 1/3 del largo del vehículo por delante y por detrás.",
          "Cargas que sobresalen por detrás: placa reflectante roja y blanca en diagonal, de día y de noche. Luz roja de noche.",
          "Adelantar cargas laterales > 40 cm: luces blancas delante, rojas detrás.",
        ],
      },
      en: {
        title: "Carrying people and loads",
        overview:
          "How many people you can carry, how the load must travel, and maximum vehicle and load dimensions.",
        keyFacts: [
          "One passenger per seat. Everyone stays in their seat throughout the trip.",
          "Bicycle: rider only. Exception: an adult may carry a child under 7 in an approved additional seat.",
          "Moped/motorcycle: passenger >12 years, seated behind, helmet on. Exception: child >7 with a parent.",
          "Max vehicle width (with load): 2.55 m. Height: 4 m (bus 4.20; tow trucks 4.50).",
          "Vehicles ≤ 5 m: load may overhang up to 1/3 of the vehicle length front and rear.",
          "Rear-overhang loads: reflective red-and-white diagonal plate day and night. Red light at night.",
          "Side loads > 40 cm: white lights at the front, red at the rear.",
        ],
      },
      ru: {
        title: "Перевозка людей и грузов",
        overview:
          "Сколько людей можно перевозить, как размещать груз, максимальные габариты ТС и груза.",
        keyFacts: [
          "Один пассажир на место. Каждый в своём кресле всю поездку.",
          "Велосипед: только водитель. Исключение: взрослый может везти ребёнка <7 лет в сертифицированном кресле.",
          "Мопед/мотоцикл: пассажир >12 лет, за водителем, в шлеме. Исключение: ребёнок >7 с родителем.",
          "Максимальная ширина ТС (с грузом): 2,55 м. Высота: 4 м (автобус 4,20; эвакуатор 4,50).",
          "ТС ≤ 5 м: груз может выступать до 1/3 длины ТС спереди и сзади.",
          "Задний выступ груза: красно-белая полосатая табличка днём и ночью. Красный фонарь ночью.",
          "Боковой выступ > 40 см: белые огни спереди, красные сзади.",
        ],
      },
    },
  },
  {
    id: "t14",
    tema: "14",
    section: "safety",
    sourceStartPage: 341,
    termIds: ["aquaplaning"],
    translations: {
      es: {
        title: "Conducir de forma segura",
        overview:
          "Cómo tomar curvas, conducir de noche, en lluvia, nieve, hielo, niebla y viento.",
        keyFacts: [
          "Antes de la curva: reducir. Dentro: giro suave, sin acelerones ni frenazos. Al salir: acelerar poco a poco.",
          "Derrape: soltar el acelerador, girar el volante hacia el lado en que se desplazan las ruedas (no bloquear el freno).",
          "Aquaplaning: no frenar, soltar el acelerador, volante recto hasta recuperar el agarre.",
          "En nieve/hielo: velocidad baja, más distancia, marchas cortas, movimientos suaves.",
          "Con niebla intensa: cruce + antinieblas delanteras. Traseras solo en visibilidad muy mala.",
          "Adelantar de noche: bajar a luces de cruce al acercarte para no deslumbrar al de delante.",
          "Con viento lateral: sujetar el volante con firmeza y reducir la velocidad.",
          "Obras: fondo AMARILLO en las señales verticales y marcas amarillas en la calzada.",
        ],
      },
      en: {
        title: "Safe driving",
        overview:
          "Curves, night driving, rain, snow, ice, fog and wind.",
        keyFacts: [
          "Before a curve: slow down. Inside: smooth steering, no hard braking or acceleration. Exit: accelerate gradually.",
          "Skid: ease off the accelerator, steer toward the direction the wheels are sliding, don't slam the brakes.",
          "Aquaplaning: don't brake, ease off the accelerator, keep the wheel straight until grip returns.",
          "Snow/ice: low speed, more distance, low gears, smooth inputs.",
          "In heavy fog: dipped + front fogs. Rear fogs only in very poor visibility.",
          "Overtaking at night: drop to dipped beams as you approach so you don't dazzle the driver ahead.",
          "Side wind: grip the wheel firmly and slow down.",
          "Roadworks: YELLOW background on vertical signs and yellow road markings.",
        ],
      },
      ru: {
        title: "Безопасное вождение",
        overview:
          "Повороты, ночь, дождь, снег, лёд, туман, ветер.",
        keyFacts: [
          "Перед поворотом: снизить скорость. Внутри: плавно рулить, без резких тормозов и газа. На выходе: постепенно ускоряться.",
          "Занос: отпустить газ, руль в сторону сноса колёс, не бить по тормозу.",
          "Аквапланирование: не тормозить, отпустить газ, руль прямо, ждать восстановления сцепления.",
          "Снег/лёд: низкая скорость, большая дистанция, пониженные передачи, плавные действия.",
          "Густой туман: ближний + передние противотуманные. Задние — только при очень плохой видимости.",
          "Обгон ночью: переключиться на ближний при приближении, чтобы не ослепить впереди идущего.",
          "Боковой ветер: крепко держать руль и снизить скорость.",
          "Дорожные работы: ЖЁЛТЫЙ фон на постоянных знаках и жёлтая разметка.",
        ],
      },
    },
  },
  {
    id: "t15",
    tema: "15",
    section: "mechanics",
    sourceStartPage: 365,
    translations: {
      es: {
        title: "Mecánica y mantenimiento",
        overview:
          "Los 8 sistemas del vehículo, los testigos importantes y cómo se comprueban aceite, batería y frenos.",
        keyFacts: [
          "Ocho sistemas: alimentación, eléctrico, lubricación, refrigeración, transmisión, dirección, suspensión, frenado.",
          "Sistema de alimentación: lleva aire + combustible al motor. Filtro sucio → humo NEGRO por el escape.",
          "Sistema eléctrico: batería (arranque), circuito de encendido (bujías), alternador (recarga).",
          "El testigo ROJO de aceite: parar cuanto antes y apagar el motor; nunca continuar.",
          "Nivel de aceite: comprobar con varilla, motor PARADO y FRÍO. Debe estar entre mínimo y máximo.",
          "Filtro de aire: revisar más en verano y en caminos polvorientos.",
          "Frenos: elemento de seguridad ACTIVA. Si se calientan por uso intenso, soltar el pedal para que se enfríen.",
        ],
      },
      en: {
        title: "Mechanics and maintenance",
        overview:
          "The 8 vehicle systems, key warning lights, and how to check oil, battery and brakes.",
        keyFacts: [
          "Eight systems: fuel/air, electrical, lubrication, cooling, transmission, steering, suspension, braking.",
          "Fuel/air system: delivers air + fuel to the engine. Dirty filter → BLACK smoke from the exhaust.",
          "Electrical: battery (starting), ignition circuit (spark plugs), alternator (recharge).",
          "RED oil warning light: stop as soon as safely possible and switch off the engine; never continue.",
          "Oil level: check with the dipstick, engine OFF and COLD. Must be between min and max.",
          "Air filter: check more often in summer and on dusty roads.",
          "Brakes: ACTIVE safety element. If they overheat from heavy use, release the pedal to let them cool.",
        ],
      },
      ru: {
        title: "Механика и обслуживание",
        overview:
          "Восемь систем автомобиля, ключевые индикаторы и как проверить масло, аккумулятор и тормоза.",
        keyFacts: [
          "Восемь систем: питание, электрика, смазка, охлаждение, трансмиссия, рулевое, подвеска, тормоза.",
          "Система питания: подаёт воздух + топливо в двигатель. Грязный фильтр → ЧЁРНЫЙ дым.",
          "Электрическая: аккумулятор (запуск), система зажигания (свечи), генератор (зарядка).",
          "КРАСНЫЙ индикатор масла: как можно скорее остановиться и заглушить; не продолжать.",
          "Уровень масла: проверять щупом, двигатель ВЫКЛЮЧЕН и ХОЛОДНЫЙ. Между min и max.",
          "Воздушный фильтр: чаще проверять летом и на пыльных дорогах.",
          "Тормоза: АКТИВНАЯ безопасность. При перегреве от интенсивного использования — отпустить педаль, дать остыть.",
        ],
      },
    },
  },
  {
    id: "t16",
    tema: "16",
    section: "safety",
    sourceStartPage: 388,
    termIds: ["pas"],
    translations: {
      es: {
        title: "Accidentes de tráfico",
        overview:
          "Factores de riesgo, protocolo P.A.S. y primeros auxilios básicos que la DGT pregunta.",
        keyFacts: [
          "El factor HUMANO causa 70-90 de cada 100 accidentes (velocidad, alcohol, distracciones).",
          "Mayoría de accidentes mortales: en carreteras fuera de poblado y en RECTAS (no en curvas).",
          "Regla P.A.S.: Proteger → Avisar → Socorrer. En ese orden.",
          "Número de emergencias: 112 (no 911). Funciona en toda Europa desde cualquier móvil.",
          "NUNCA mover a un herido salvo peligro inmediato (fuego). Preserva el cuello.",
          "NUNCA quitar el casco al motociclista ni sacar objetos clavados en el cuerpo.",
          "RCP: 30 compresiones + 2 ventilaciones. Ritmo ~100/min. Hasta que llegue la ayuda.",
          "Hemorragia: 1) compresión directa, 2) compresión arterial, 3) torniquete (solo si nada funciona, en brazo/pierna).",
          "Omisión de socorro es DELITO: no ayudar cuando puedes sin peligro.",
        ],
      },
      en: {
        title: "Traffic accidents",
        overview:
          "Risk factors, the P.A.S. protocol, and basic first aid the DGT asks about.",
        keyFacts: [
          "The HUMAN factor causes 70-90 out of every 100 accidents (speed, alcohol, distraction).",
          "Most fatal accidents happen on interurban roads and on STRAIGHTS (not on curves).",
          "P.A.S. rule: Protect → Alert → Aid. In that order.",
          "Emergency number: 112 (not 911). Works across Europe from any mobile.",
          "NEVER move a casualty unless immediate danger (fire). Protect the neck.",
          "NEVER remove a motorcyclist's helmet or pull embedded objects from the body.",
          "CPR: 30 compressions + 2 rescue breaths. Rate ~100/min. Continue until help arrives.",
          "Bleeding: 1) direct pressure, 2) arterial pressure, 3) tourniquet (only if nothing else works, arm/leg).",
          "Failure to assist is a CRIME: not helping when you could without endangering yourself.",
        ],
      },
      ru: {
        title: "Дорожно-транспортные происшествия",
        overview:
          "Факторы риска, протокол P.A.S. и базовая первая помощь, о которой спрашивает DGT.",
        keyFacts: [
          "ЧЕЛОВЕЧЕСКИЙ фактор — 70-90 из 100 ДТП (скорость, алкоголь, отвлечение).",
          "Большинство смертельных ДТП — на загородных дорогах и на ПРЯМЫХ (не в поворотах).",
          "Правило P.A.S.: Защитить → Сообщить → Помочь. Именно в этом порядке.",
          "Экстренный номер: 112 (не 911). Работает по всей Европе с любого мобильного.",
          "НИКОГДА не двигать пострадавшего, кроме случаев непосредственной опасности (пожар). Беречь шею.",
          "НИКОГДА не снимать шлем мотоциклиста и не вытаскивать застрявшие в теле предметы.",
          "СЛР: 30 компрессий + 2 вдоха. Ритм ~100/мин. До приезда помощи.",
          "Кровотечение: 1) прямое давление, 2) прижатие артерии, 3) жгут (только если ничего не помогло, рука/нога).",
          "Неоказание помощи — ПРЕСТУПЛЕНИЕ: не помочь, когда мог без опасности для себя.",
        ],
      },
    },
  },
  {
    id: "t17",
    tema: "17",
    section: "safety",
    sourceStartPage: 437,
    termIds: ["distancia_seguridad"],
    translations: {
      es: {
        title: "Conducción preventiva y eficiente",
        overview:
          "Ver a distancia, anticipar imprevistos, mantener espacio. Cómo ahorrar combustible y qué son las etiquetas ambientales.",
        keyFacts: [
          "Tres principios preventivos: Visión (mirar lejos y a los lados), Anticipación (prever a los demás), Espacio (distancia).",
          "Mirar hacia adelante al espacio que recorrerás en unos 20 segundos. A más velocidad, más lejos.",
          "Ángulo muerto: espacio a los lados que no ves con retrovisores. Girar la cabeza antes de cambiar de carril.",
          "BSM: detector de ángulo muerto, luz en el retrovisor cuando hay otro vehículo cerca.",
          "Distancia práctica: 2-3 segundos con el de delante. En túnel: 100 m (150 m para pesados).",
          "Conducción eficiente: velocidad constante, marchas largas, evitar frenazos y acelerones.",
          "Consumen MÁS: baca cargada (aerodinámica), baja presión de neumáticos, aire acondicionado al máximo.",
          "Etiquetas DGT: 0 (eléctrico), ECO (híbrido), C (gasolina Euro 4+), B (gasolina Euro 3+). Definen acceso a ZBE.",
        ],
      },
      en: {
        title: "Preventive and efficient driving",
        overview:
          "See far, anticipate the unexpected, keep space. How to save fuel and what the DGT environmental labels mean.",
        keyFacts: [
          "Three preventive principles: Vision (look far and to the sides), Anticipation (predict others), Space (keep distance).",
          "Look ahead to the space you'll cover in ~20 seconds. Faster driving means looking further.",
          "Blind spot: area beside you invisible in mirrors. Turn your head before changing lanes.",
          "BSM: blind-spot monitor, lights up on the mirror when another vehicle is close.",
          "Practical distance: 2-3 seconds from the car ahead. Tunnel: 100 m (150 m for heavy vehicles).",
          "Efficient driving: steady speed, longer gears, avoid hard braking and acceleration.",
          "Higher consumption: loaded roof rack (drag), under-inflated tyres, AC at max.",
          "DGT labels: 0 (electric), ECO (hybrid), C (petrol Euro 4+), B (petrol Euro 3+). Determine access to LEZs.",
        ],
      },
      ru: {
        title: "Превентивное и экономичное вождение",
        overview:
          "Смотреть далеко, предвидеть, держать дистанцию. Как экономить топливо и что такое экологические наклейки DGT.",
        keyFacts: [
          "Три превентивных принципа: Обзор (смотреть далеко и по сторонам), Предвидение (предугадывать), Дистанция.",
          "Смотреть вперёд на расстояние, которое проедешь за ~20 секунд. Чем быстрее — тем дальше.",
          "Слепая зона: боковая область, не видная в зеркалах. Повернуть голову перед сменой полосы.",
          "BSM: контроль слепых зон, лампочка в зеркале при приближении другого ТС.",
          "Практическая дистанция: 2-3 сек до впереди идущего. В тоннеле: 100 м (150 м для тяжёлого ТС).",
          "Экономичное вождение: ровная скорость, повышенные передачи, без резких торможений и разгонов.",
          "Больше расход: гружёный багажник на крыше (аэро), низкое давление в шинах, кондиционер на максимуме.",
          "Наклейки DGT: 0 (электро), ECO (гибрид), C (бензин Euro 4+), B (бензин Euro 3+). Определяют доступ в зоны низких выбросов.",
        ],
      },
    },
  },
  {
    id: "anexo",
    tema: "Anexo",
    section: "admin",
    sourceStartPage: 467,
    termIds: ["conductor_novel"],
    translations: {
      es: {
        title: "El permiso por puntos",
        overview:
          "Cuántos puntos tienes según tu antigüedad, cómo se pierden y cómo recuperarlos.",
        keyFacts: [
          "Novel: 8 puntos. Tras 2 años sin sanciones: 12. Tras 5 años más: 14. Tras 8 años: 15 (máximo).",
          "Si pierdes TODOS los puntos: 6 meses sin conducir + curso de 24 horas + examen.",
          "Curso de recuperación de 12 horas: recupera hasta 6 puntos.",
          "Alcohol 0,25-0,50 mg/l = −4 puntos. > 0,50 mg/l o drogas = −6 puntos.",
          "Móvil sujeto con la mano = −6 puntos. Auriculares conectados al móvil = −3 puntos.",
          "No respetar STOP, ceda el paso o semáforo rojo = −4 puntos.",
          "Adelantar a ciclista sin dejar 1,5 m = −6 puntos.",
          "Marcha atrás en autopista/autovía = −4 puntos. Sentido contrario = −6.",
        ],
      },
      en: {
        title: "The points-based licence",
        overview:
          "How many points you have by seniority, how they're lost and how to recover them.",
        keyFacts: [
          "Novice: 8 points. After 2 years without offences: 12. After 5 more years: 14. After 8: 15 (max).",
          "Lose ALL points: 6 months without driving + 24-hour course + exam.",
          "12-hour recovery course: recovers up to 6 points.",
          "Alcohol 0.25-0.50 mg/l = −4 points. > 0.50 mg/l or drugs = −6 points.",
          "Hand-held mobile = −6 points. Headphones connected to phone = −3 points.",
          "Failing to observe STOP, yield or a red light = −4 points.",
          "Overtaking a cyclist without leaving 1.5 m = −6 points.",
          "Reversing on a motorway/dual carriageway = −4 points. Wrong-way = −6.",
        ],
      },
      ru: {
        title: "Балльная система прав",
        overview:
          "Сколько у тебя баллов в зависимости от стажа, как их теряют и как восстанавливают.",
        keyFacts: [
          "Начинающий: 8 баллов. Через 2 года без нарушений: 12. Ещё через 5 лет: 14. Через 8: 15 (максимум).",
          "Потерять ВСЕ баллы: 6 месяцев без вождения + курс 24 часа + экзамен.",
          "Восстановительный курс 12 часов: возвращает до 6 баллов.",
          "Алкоголь 0,25-0,50 мг/л = −4 балла. > 0,50 мг/л или наркотики = −6.",
          "Держать телефон в руке = −6. Наушники к телефону = −3.",
          "Не соблюсти STOP, «уступите» или красный светофор = −4.",
          "Обгон велосипедиста без 1,5 м = −6.",
          "Движение задним ходом на автомагистрали = −4. Против движения = −6.",
        ],
      },
    },
  },
];
