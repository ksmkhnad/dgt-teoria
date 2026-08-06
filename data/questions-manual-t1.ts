import type { Question } from "@/lib/types";

// DGT Manual Permiso B (Lectura Fácil, 2024), Tema 1 — Definiciones.

const SOURCE = "DGT Manual Permiso B (Lectura Fácil, 2024), Tema 1";

export const QUESTIONS_MANUAL_T1: Question[] = [
  {
    id: "manual-t1-01",
    section: "others",
    correctIndex: 2,
    source: SOURCE,
    translations: {
      es: {
        text: "Un turismo puede tener como máximo, incluida la plaza del conductor…",
        options: ["5 plazas", "7 plazas", "9 plazas", "12 plazas"],
        explanation:
          "Un turismo es un automóvil destinado al transporte de personas con capacidad de hasta 9 plazas, incluida la del conductor. Por encima de 9 plazas ya es autobús.",
        optionRationales: [
          "5 es una cifra habitual pero no el máximo legal; el manual fija el tope en 9.",
          "7 tampoco es el máximo; muchos turismos familiares llegan a 7 pero pueden llegar a 9.",
          "",
          "12 plazas ya no es turismo, sería autobús (>9 plazas).",
        ],
      },
      en: {
        text: "A turismo (passenger car) can have at most, including the driver's seat…",
        options: ["5 seats", "7 seats", "9 seats", "12 seats"],
        explanation:
          "A turismo is a passenger vehicle with up to 9 seats including the driver. Above 9 it counts as a bus.",
        optionRationales: [
          "5 is common but not the legal max; the manual sets the cap at 9.",
          "7 is not the max either; many family cars have 7 but can go up to 9.",
          "",
          "12 seats is no longer a turismo — it's a bus (>9 seats).",
        ],
      },
      ru: {
        text: "Максимальное число мест в легковом автомобиле (turismo), включая место водителя…",
        options: ["5 мест", "7 мест", "9 мест", "12 мест"],
        explanation:
          "Turismo — легковой автомобиль на перевозку людей вместимостью до 9 мест включая водителя. Свыше 9 — уже автобус.",
        optionRationales: [
          "5 — распространённое число, но не максимум; в manual установлен предел 9.",
          "7 тоже не максимум; семейные turismo бывают до 7, но допускается до 9.",
          "",
          "12 мест — это уже автобус (>9 мест), не turismo.",
        ],
      },
    },
  },
  {
    id: "manual-t1-02",
    section: "others",
    correctIndex: 1,
    source: SOURCE,
    translations: {
      es: {
        text: "Un ciclomotor de dos ruedas (categoría L1e) tiene una velocidad máxima por construcción de…",
        options: ["25 km/h", "45 km/h", "50 km/h", "60 km/h"],
        explanation:
          "El ciclomotor de dos ruedas (L1e) no puede superar los 45 km/h por construcción y su cilindrada máxima es de 50 cm³ (o 4 kW eléctrico).",
        optionRationales: [
          "25 km/h corresponde a los VMP (patinetes eléctricos) o bicicletas eléctricas asistidas, no al ciclomotor.",
          "",
          "50 km/h es la cilindrada máxima (50 cm³), no la velocidad; se confunden a menudo.",
          "60 km/h ya sería motocicleta de categoría superior, no ciclomotor.",
        ],
      },
      en: {
        text: "A two-wheel moped (L1e category) has a maximum design speed of…",
        options: ["25 km/h", "45 km/h", "50 km/h", "60 km/h"],
        explanation:
          "A two-wheel moped (L1e) is limited by construction to 45 km/h and 50 cc engine (or 4 kW electric).",
        optionRationales: [
          "25 km/h is the limit for PMV (e-scooters) or assisted e-bikes, not mopeds.",
          "",
          "50 km/h is the engine displacement (50 cc), not the speed — commonly confused.",
          "60 km/h already puts it in a higher motorcycle category, not moped.",
        ],
      },
      ru: {
        text: "Двухколёсный мопед (категория L1e) имеет максимальную конструкционную скорость…",
        options: ["25 км/ч", "45 км/ч", "50 км/ч", "60 км/ч"],
        explanation:
          "Мопед L1e по конструкции не превышает 45 км/ч, объём двигателя до 50 см³ (или 4 кВт для электро).",
        optionRationales: [
          "25 км/ч — предел для СИМ (электросамокатов) или электровелосипедов с педалированием, не для мопеда.",
          "",
          "50 км/ч — это объём двигателя (50 см³), а не скорость; часто путают.",
          "60 км/ч — это уже мотоцикл более высокой категории, не мопед.",
        ],
      },
    },
  },
  {
    id: "manual-t1-03",
    section: "others",
    correctIndex: 3,
    source: SOURCE,
    translations: {
      es: {
        text: "La diferencia principal entre una autopista y una autovía es que la autopista…",
        options: [
          "Tiene un límite de velocidad más alto",
          "Es siempre de peaje",
          "Solo permite turismos y motos",
          "Nunca tiene cruces al mismo nivel ni accesos desde propiedades colindantes",
        ],
        explanation:
          "En la autopista está prohibido cualquier cruce al mismo nivel y no puede haber accesos directos desde fincas. La autovía sí puede tener limitaciones menores en trazado y accesos.",
        optionRationales: [
          "Ambas tienen el mismo límite general de 120 km/h para turismos.",
          "Hay autopistas gratuitas y autovías de peaje; el peaje no las define.",
          "Ambas prohíben peatones, bicis y ciclomotores; no es la diferencia clave.",
          "",
        ],
      },
      en: {
        text: "The main difference between an autopista and an autovía is that the autopista…",
        options: [
          "Has a higher speed limit",
          "Is always tolled",
          "Only allows cars and motorbikes",
          "Never has at-grade crossings or accesses from adjacent properties",
        ],
        explanation:
          "On an autopista no at-grade crossings are allowed and no direct property accesses. Autovías may have minor limitations in layout and accesses.",
        optionRationales: [
          "Both share the same 120 km/h general limit for cars.",
          "Some autopistas are free and some autovías are tolled; tolls don't define them.",
          "Both ban pedestrians, bikes and mopeds; that isn't the key difference.",
          "",
        ],
      },
      ru: {
        text: "Главное отличие autopista от autovía в том, что autopista…",
        options: [
          "Имеет более высокий лимит скорости",
          "Всегда платная",
          "Разрешена только для легковых и мотоциклов",
          "Никогда не имеет пересечений в одном уровне и въездов из прилегающих участков",
        ],
        explanation:
          "На autopista запрещены любые пересечения в одном уровне и прямые въезды с частных участков. У autovía допускаются послабления в трассе и въездах.",
        optionRationales: [
          "Общий лимит одинаковый — 120 км/ч для легковых.",
          "Есть бесплатные autopistas и платные autovías; плата не определяет тип.",
          "Обе запрещены для пешеходов, велосипедов и мопедов; это не ключевое отличие.",
          "",
        ],
      },
    },
  },
  {
    id: "manual-t1-04",
    section: "others",
    correctIndex: 0,
    source: SOURCE,
    translations: {
      es: {
        text: "Una «vía urbana» es…",
        options: [
          "Cualquier vía pública situada dentro de poblado, salvo las travesías",
          "Cualquier calle sin señalización",
          "Solo las calles del centro histórico",
          "Cualquier vía con límite de 30 km/h",
        ],
        explanation:
          "Vía urbana es toda vía pública dentro de poblado, excepto las travesías (tramos de carretera interurbana que atraviesan el poblado).",
        optionRationales: [
          "",
          "Estar señalizada o no no cambia su carácter urbano; el criterio es geográfico (dentro de poblado).",
          "El casco histórico no es una definición legal; se aplica a todo el poblado.",
          "El límite de 30 km/h se aplica en muchas urbanas, pero no las define; hay urbanas de 50 km/h también.",
        ],
      },
      en: {
        text: "An «urban road» is…",
        options: [
          "Any public road inside a built-up area, except travesías",
          "Any street without signs",
          "Only streets in the historical centre",
          "Any road with a 30 km/h limit",
        ],
        explanation:
          "An urban road is any public road inside a built-up area, except travesías (interurban road segments passing through a town).",
        optionRationales: [
          "",
          "Whether or not it's signed doesn't change its urban nature; the test is geographic (inside built-up area).",
          "Historical centre isn't a legal definition; the rule applies to the whole built-up area.",
          "30 km/h applies to many urban streets but doesn't define them; some urban streets are 50 km/h.",
        ],
      },
      ru: {
        text: "«Городская дорога» (vía urbana) — это…",
        options: [
          "Любая публичная дорога в пределах населённого пункта, кроме travesías",
          "Любая улица без знаков",
          "Только улицы исторического центра",
          "Любая дорога с ограничением 30 км/ч",
        ],
        explanation:
          "Городская дорога — любая публичная дорога внутри населённого пункта, за исключением travesías (участков междугородных дорог, проходящих через город).",
        optionRationales: [
          "",
          "Наличие или отсутствие знаков не меняет её городской статус; критерий географический.",
          "Исторический центр — не юридическое понятие; правило применяется ко всему населённому пункту.",
          "30 км/ч действует на многих городских улицах, но не определяет их; есть городские с 50 км/ч.",
        ],
      },
    },
  },
  {
    id: "manual-t1-05",
    section: "others",
    correctIndex: 2,
    source: SOURCE,
    translations: {
      es: {
        text: "El arcén es…",
        options: [
          "La parte de la calzada por donde circulan los vehículos lentos",
          "Una franja pintada dentro de la calzada",
          "Una franja longitudinal pavimentada situada fuera de la calzada, al mismo nivel que ella",
          "El espacio entre dos calzadas separadas",
        ],
        explanation:
          "Arcén: franja longitudinal, pavimentada o no, contigua a la calzada, situada al mismo nivel que ella y que no está destinada a la circulación general de automóviles.",
        optionRationales: [
          "El arcén NO forma parte de la calzada, y no está destinado a la circulación general de automóviles.",
          "Una franja pintada dentro de la calzada es una marca vial (isleta, carril bici, etc.), no el arcén.",
          "",
          "El espacio entre dos calzadas separadas es la mediana, no el arcén.",
        ],
      },
      en: {
        text: "The arcén (hard shoulder) is…",
        options: [
          "The part of the carriageway for slow vehicles",
          "A painted strip inside the carriageway",
          "A longitudinal paved strip alongside the carriageway, at the same level",
          "The space between two separated carriageways",
        ],
        explanation:
          "Arcén: longitudinal strip, paved or not, adjacent to the carriageway, at the same level as it, not intended for general vehicle circulation.",
        optionRationales: [
          "The arcén is NOT part of the carriageway and isn't for general vehicle circulation.",
          "A painted strip inside the carriageway is a road marking (island, bike lane, etc.), not the arcén.",
          "",
          "The space between two separated carriageways is the median, not the arcén.",
        ],
      },
      ru: {
        text: "Arcén (обочина) — это…",
        options: [
          "Часть проезжей части, где едут медленные ТС",
          "Полоса разметки внутри проезжей части",
          "Продольная полоса с покрытием, прилегающая к проезжей части, на одном уровне с ней",
          "Пространство между двумя разделёнными проезжими частями",
        ],
        explanation:
          "Arcén — продольная полоса (с покрытием или без) рядом с проезжей частью, на одном уровне с ней, не предназначенная для общего движения автомобилей.",
        optionRationales: [
          "Arcén НЕ входит в проезжую часть и не предназначен для общего движения.",
          "Полоса разметки внутри проезжей части — это дорожная разметка (островок, велополоса и т.п.), а не arcén.",
          "",
          "Пространство между разделёнными проезжими частями — разделительная полоса (mediana), не arcén.",
        ],
      },
    },
  },
  {
    id: "manual-t1-06",
    section: "others",
    correctIndex: 1,
    source: SOURCE,
    translations: {
      es: {
        text: "La calzada es…",
        options: [
          "Cualquier parte pavimentada de la vía",
          "La parte de la vía dedicada a la circulación de vehículos",
          "La franja destinada al paso de peatones",
          "El espacio para vehículos parados",
        ],
        explanation:
          "La calzada es la parte de la vía dedicada a la circulación de vehículos. Puede tener uno o más carriles y estar separada por líneas o medianas.",
        optionRationales: [
          "El arcén y las aceras también son partes pavimentadas de la vía, pero no forman parte de la calzada.",
          "",
          "El paso de peatones es una zona de la calzada, pero no es la calzada; los peatones tienen la acera para circular.",
          "Los espacios de estacionamiento están normalmente fuera de la calzada (en el arcén o en zonas específicas).",
        ],
      },
      en: {
        text: "The calzada (carriageway) is…",
        options: [
          "Any paved part of the road",
          "The part of the road dedicated to vehicle circulation",
          "The strip reserved for pedestrians",
          "The space for stopped vehicles",
        ],
        explanation:
          "The calzada is the part of the road dedicated to vehicle circulation. It can have one or more lanes and be separated by lines or medians.",
        optionRationales: [
          "The arcén and pavements are also paved parts of the road but aren't part of the calzada.",
          "",
          "Pedestrian crossings sit on the calzada but aren't it; pedestrians walk on the sidewalk.",
          "Parking spaces are normally off the calzada (on the arcén or specific zones).",
        ],
      },
      ru: {
        text: "Calzada (проезжая часть) — это…",
        options: [
          "Любая асфальтированная часть дороги",
          "Часть дороги, предназначенная для движения транспортных средств",
          "Полоса для пешеходов",
          "Место для стоящих автомобилей",
        ],
        explanation:
          "Calzada — часть дороги, предназначенная для движения ТС. Может иметь одну или несколько полос и быть разделена линиями или разделительной полосой.",
        optionRationales: [
          "Arcén и тротуары тоже с покрытием, но не входят в calzada.",
          "",
          "Пешеходный переход — зона на calzada, но не сама calzada; пешеходы ходят по тротуару.",
          "Парковочные места обычно вне calzada (на arcén или в специальных зонах).",
        ],
      },
    },
  },
  {
    id: "manual-t1-07",
    section: "others",
    correctIndex: 2,
    source: SOURCE,
    translations: {
      es: {
        text: "La MMA (Masa Máxima Autorizada) de un vehículo es…",
        options: [
          "El peso del vehículo vacío con el conductor",
          "El peso del vehículo con la carga habitual",
          "La masa máxima con la que se autoriza su circulación",
          "El peso de la carga que puede llevar",
        ],
        explanation:
          "La MMA es la masa máxima con la que se autoriza la circulación del vehículo por las vías públicas. Aparece en la ficha técnica y no puede superarse.",
        optionRationales: [
          "El peso del vehículo vacío es la Tara, no la MMA.",
          "El peso con carga habitual es un dato variable; la MMA es un tope legal fijo.",
          "",
          "El peso de la carga es la Carga Útil, que se calcula como MMA − Tara.",
        ],
      },
      en: {
        text: "MMA (Maximum Authorized Mass) of a vehicle is…",
        options: [
          "The empty vehicle plus the driver",
          "The vehicle with its usual load",
          "The maximum mass at which its circulation is authorized",
          "The weight of the load it can carry",
        ],
        explanation:
          "MMA is the maximum mass at which the vehicle is authorized to circulate on public roads. It's on the technical sheet and can't be exceeded.",
        optionRationales: [
          "Empty vehicle weight is Tara, not MMA.",
          "Weight with usual load is variable; MMA is a fixed legal cap.",
          "",
          "Load weight is Carga Útil, calculated as MMA − Tara.",
        ],
      },
      ru: {
        text: "MMA (максимально разрешённая масса) автомобиля — это…",
        options: [
          "Масса пустого автомобиля с водителем",
          "Масса автомобиля с обычным грузом",
          "Максимальная масса, при которой разрешено его движение",
          "Масса груза, который он может везти",
        ],
        explanation:
          "MMA — максимальная масса, при которой разрешено движение ТС по публичным дорогам. Указана в техпаспорте и не может быть превышена.",
        optionRationales: [
          "Масса пустого автомобиля — это Tara, а не MMA.",
          "Масса с обычным грузом — переменная; MMA — фиксированный юридический предел.",
          "",
          "Масса груза — Carga Útil, вычисляется как MMA − Tara.",
        ],
      },
    },
  },
  {
    id: "manual-t1-08",
    section: "others",
    correctIndex: 0,
    source: SOURCE,
    translations: {
      es: {
        text: "La Tara de un vehículo es…",
        options: [
          "El peso del vehículo en vacío con depósitos, herramientas y rueda de repuesto",
          "El peso del vehículo con el conductor",
          "El peso máximo autorizado por el fabricante",
          "El peso de la carga que puede transportar",
        ],
        explanation:
          "Tara es la masa del vehículo en vacío, sin ocupantes ni carga, pero con sus depósitos de combustible llenos, dotaciones y rueda de repuesto.",
        optionRationales: [
          "",
          "El peso con conductor no es la Tara; la Tara excluye siempre a las personas.",
          "El peso máximo autorizado es la MMA, no la Tara.",
          "El peso de la carga es la Carga Útil, calculada como MMA − Tara.",
        ],
      },
      en: {
        text: "The Tara (kerb weight) of a vehicle is…",
        options: [
          "The empty vehicle with full tanks, tools and spare wheel",
          "The vehicle with the driver",
          "The maximum weight authorized by the manufacturer",
          "The weight of the load it can carry",
        ],
        explanation:
          "Tara is the empty vehicle mass — no occupants, no load — but with fuel tanks full, standard fittings and spare wheel.",
        optionRationales: [
          "",
          "Weight with driver isn't Tara; Tara always excludes people.",
          "The manufacturer's max is MMA, not Tara.",
          "Load weight is Carga Útil, calculated as MMA − Tara.",
        ],
      },
      ru: {
        text: "Tara (снаряжённая масса) автомобиля — это…",
        options: [
          "Масса пустого автомобиля с полными баками, инструментами и запаской",
          "Масса автомобиля с водителем",
          "Максимальная масса, разрешённая производителем",
          "Масса груза, который он может везти",
        ],
        explanation:
          "Tara — масса пустого ТС без пассажиров и груза, но с полными баками, штатным оснащением и запасным колесом.",
        optionRationales: [
          "",
          "Масса с водителем не Tara; Tara всегда без людей.",
          "Максимум от производителя — это MMA, а не Tara.",
          "Масса груза — Carga Útil, вычисляется как MMA − Tara.",
        ],
      },
    },
  },
];
