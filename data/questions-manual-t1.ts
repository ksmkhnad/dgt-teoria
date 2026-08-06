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
  {
    id: "manual-t1-09",
    section: "others",
    correctIndex: 2,
    source: SOURCE,
    translations: {
      es: {
        text: "La Carga Útil de un vehículo se calcula como…",
        options: [
          "MMA + Tara",
          "MMA × 2",
          "MMA − Tara",
          "Tara − MMA",
        ],
        explanation:
          "La Carga Útil es la máxima carga (pasajeros + mercancías) que un vehículo puede transportar. Se calcula restando la Tara a la MMA: Carga Útil = MMA − Tara.",
        optionRationales: [
          "Sumar da un número sin sentido físico; no representa capacidad de carga.",
          "Multiplicar la MMA por 2 no tiene relación con la carga; es un número arbitrario.",
          "",
          "Tara menos MMA daría un valor negativo (la MMA siempre es mayor que la Tara).",
        ],
      },
      en: {
        text: "The Carga Útil (payload) of a vehicle is calculated as…",
        options: [
          "MMA + Tara",
          "MMA × 2",
          "MMA − Tara",
          "Tara − MMA",
        ],
        explanation:
          "Payload is the max load (passengers + goods) a vehicle can carry. It's MMA minus Tara: Payload = MMA − Tara.",
        optionRationales: [
          "Adding gives a meaningless number; doesn't represent load capacity.",
          "MMA × 2 is unrelated to load; an arbitrary number.",
          "",
          "Tara minus MMA gives a negative value (MMA is always greater than Tara).",
        ],
      },
      ru: {
        text: "Carga Útil (полезная нагрузка) вычисляется как…",
        options: [
          "MMA + Tara",
          "MMA × 2",
          "MMA − Tara",
          "Tara − MMA",
        ],
        explanation:
          "Полезная нагрузка — максимум груза (пассажиры + вещи), который может везти авто. Считается как MMA минус Tara: Carga Útil = MMA − Tara.",
        optionRationales: [
          "Сложение даёт бессмысленное число, не характеризующее грузоподъёмность.",
          "MMA × 2 никак не связано с грузом — произвольное число.",
          "",
          "Tara минус MMA даст отрицательное значение (MMA всегда больше Tara).",
        ],
      },
    },
  },
  {
    id: "manual-t1-10",
    section: "others",
    correctIndex: 1,
    source: SOURCE,
    translations: {
      es: {
        text: "Una travesía es…",
        options: [
          "Una calle peatonal del centro urbano",
          "El tramo de una carretera interurbana que atraviesa un poblado",
          "Un camino rural sin asfaltar",
          "Una carretera de circunvalación por fuera del poblado",
        ],
        explanation:
          "Travesía es el tramo de carretera interurbana que atraviesa el suelo urbano de un poblado. No cuenta como vía urbana ordinaria; conserva su carácter de carretera aunque haya casas alrededor.",
        optionRationales: [
          "Las calles peatonales no forman parte de la red de carreteras; son vías urbanas puras.",
          "",
          "Los caminos rurales sin asfaltar son vías secundarias, no travesías.",
          "Una circunvalación va POR FUERA del poblado, precisamente para no atravesarlo.",
        ],
      },
      en: {
        text: "A travesía is…",
        options: [
          "A pedestrian street in the town centre",
          "The segment of an interurban road that crosses a built-up area",
          "An unpaved rural track",
          "A ring road going around the outside of a town",
        ],
        explanation:
          "A travesía is the segment of an interurban road that crosses the built-up area of a town. It doesn't count as an ordinary urban road; it keeps its road character even with houses around.",
        optionRationales: [
          "Pedestrian streets aren't part of the road network; they are pure urban streets.",
          "",
          "Unpaved rural tracks are secondary lanes, not travesías.",
          "A ring road goes AROUND the outside, precisely to avoid crossing the town.",
        ],
      },
      ru: {
        text: "Travesía — это…",
        options: [
          "Пешеходная улица в центре города",
          "Участок междугородной дороги, проходящий через населённый пункт",
          "Грунтовая сельская дорога",
          "Объездная дорога снаружи населённого пункта",
        ],
        explanation:
          "Travesía — участок междугородной дороги, проходящий через территорию населённого пункта. Это не обычная городская улица; сохраняет статус дороги, даже если вокруг дома.",
        optionRationales: [
          "Пешеходные улицы не входят в дорожную сеть — это чисто городские улицы.",
          "",
          "Грунтовые сельские дороги — второстепенные пути, не travesías.",
          "Объездная идёт СНАРУЖИ, именно чтобы не проходить через населённый пункт.",
        ],
      },
    },
  },
  {
    id: "manual-t1-11",
    section: "others",
    correctIndex: 0,
    source: SOURCE,
    translations: {
      es: {
        text: "En una glorieta (rotonda), ¿quién tiene prioridad?",
        options: [
          "Los vehículos que ya están circulando por el anillo",
          "Los que entran, porque llegan primero al cruce",
          "Los que salen de la glorieta",
          "No hay reglas; el primero que pase",
        ],
        explanation:
          "En una glorieta los vehículos que ya circulan por el anillo tienen prioridad sobre los que se disponen a entrar. Al incorporarse hay que ceder el paso.",
        optionRationales: [
          "",
          "Es al revés: el que entra debe ceder el paso al que ya está dentro.",
          "Los que salen simplemente se marchan; no hay «prioridad de salida» especial.",
          "Sí hay reglas claras y son obligatorias; no es «el primero que pase».",
        ],
      },
      en: {
        text: "In a roundabout, who has priority?",
        options: [
          "Vehicles already circulating in the ring",
          "Vehicles entering, because they arrived at the junction first",
          "Vehicles leaving the roundabout",
          "No rules — first come, first served",
        ],
        explanation:
          "In a roundabout, vehicles already in the ring have priority over those about to enter. When joining you must give way.",
        optionRationales: [
          "",
          "It's the opposite: whoever enters must give way to those already inside.",
          "Vehicles leaving just exit; there's no special 'exit priority'.",
          "There are clear, mandatory rules — it isn't 'first come, first served'.",
        ],
      },
      ru: {
        text: "На круговом перекрёстке (glorieta) у кого приоритет?",
        options: [
          "У тех, кто уже едет по кольцу",
          "У тех, кто въезжает — они первыми подошли к перекрёстку",
          "У тех, кто выезжает с кольца",
          "Никаких правил — кто первый успел",
        ],
        explanation:
          "На круговом перекрёстке приоритет у тех, кто уже движется по кольцу. Въезжающий обязан уступить.",
        optionRationales: [
          "",
          "Наоборот: въезжающий уступает тем, кто уже в кольце.",
          "Выезжающие просто покидают кольцо; специального «приоритета выезда» нет.",
          "Правила есть и они обязательны, это не «кто первый успел».",
        ],
      },
    },
  },
  {
    id: "manual-t1-12",
    section: "others",
    correctIndex: 2,
    source: SOURCE,
    translations: {
      es: {
        text: "Un vehículo de movilidad personal (VMP), como un patinete eléctrico, tiene una velocidad máxima autorizada de…",
        options: [
          "10 km/h",
          "20 km/h",
          "25 km/h",
          "45 km/h",
        ],
        explanation:
          "Los VMP (patinetes eléctricos) están limitados a 25 km/h. No pueden circular por aceras, autopistas, autovías, túneles urbanos ni travesías; sí por carriles bici y calzada urbana según ordenanzas.",
        optionRationales: [
          "10 km/h es la velocidad de un peatón corriendo; los VMP superan claramente esa cifra.",
          "20 km/h no es el límite reglamentario; el manual fija 25.",
          "",
          "45 km/h es el máximo del ciclomotor (L1e), no del VMP.",
        ],
      },
      en: {
        text: "A Personal Mobility Vehicle (VMP), like an e-scooter, has an authorised maximum speed of…",
        options: [
          "10 km/h",
          "20 km/h",
          "25 km/h",
          "45 km/h",
        ],
        explanation:
          "PMVs (e-scooters) are limited to 25 km/h. They can't use pavements, motorways, dual carriageways, urban tunnels or travesías; they may use bike lanes and urban carriageways per local rules.",
        optionRationales: [
          "10 km/h is a running pedestrian's pace; PMVs clearly exceed that.",
          "20 km/h isn't the regulatory limit; the manual sets 25.",
          "",
          "45 km/h is the moped (L1e) maximum, not the PMV's.",
        ],
      },
      ru: {
        text: "Персональное транспортное средство (VMP), например электросамокат, имеет максимально разрешённую скорость…",
        options: [
          "10 км/ч",
          "20 км/ч",
          "25 км/ч",
          "45 км/ч",
        ],
        explanation:
          "СИМ (электросамокаты) ограничены 25 км/ч. Им запрещены тротуары, автомагистрали, скоростные, городские тоннели и travesías; разрешены велополосы и проезжая часть по местным правилам.",
        optionRationales: [
          "10 км/ч — скорость бегущего пешехода; СИМ явно её превышает.",
          "20 км/ч — не установленный законом лимит; в руководстве 25.",
          "",
          "45 км/ч — максимум мопеда (L1e), а не СИМ.",
        ],
      },
    },
  },
  {
    id: "manual-t1-13",
    section: "others",
    correctIndex: 1,
    source: SOURCE,
    translations: {
      es: {
        text: "Un vehículo articulado está formado por…",
        options: [
          "Dos turismos unidos por una barra rígida",
          "Un vehículo tractor (cabeza) y un semirremolque acoplado",
          "Un camión con dos remolques",
          "Un autobús de dos pisos",
        ],
        explanation:
          "Un vehículo articulado es la combinación de un vehículo tractor (cabeza tractora) y un semirremolque unido a él mediante quinta rueda. Los conjuntos con remolques son «trenes de carretera», no articulados.",
        optionRationales: [
          "Dos turismos con una barra no son un vehículo articulado; es un remolcado de auxilio en carretera.",
          "",
          "Un camión con dos remolques es un «tren de carretera» (conjunto de vehículos), no un articulado.",
          "Un autobús de dos pisos es un solo vehículo, sin articulación.",
        ],
      },
      en: {
        text: "An articulated vehicle is made up of…",
        options: [
          "Two cars joined by a rigid bar",
          "A tractor unit (cab) and a semi-trailer coupled to it",
          "A truck with two trailers",
          "A double-decker bus",
        ],
        explanation:
          "An articulated vehicle is the combination of a tractor unit and a semi-trailer connected by a fifth wheel. Combinations with full trailers are 'road trains', not articulated.",
        optionRationales: [
          "Two cars linked by a bar aren't articulated; that's a roadside recovery tow.",
          "",
          "A truck with two trailers is a 'road train' (vehicle combination), not articulated.",
          "A double-decker bus is a single vehicle with no articulation.",
        ],
      },
      ru: {
        text: "Сочленённое транспортное средство состоит из…",
        options: [
          "Двух легковых, соединённых жёсткой сцепкой",
          "Тягача (кабины) и присоединённого к нему полуприцепа",
          "Грузовика с двумя прицепами",
          "Двухэтажного автобуса",
        ],
        explanation:
          "Сочленённое ТС — комбинация тягача и полуприцепа, соединённых через седельно-сцепное устройство. Составы с полными прицепами — «автопоезда», не сочленённые.",
        optionRationales: [
          "Две легковых на жёсткой сцепке — не сочленённое ТС, это буксировка в аварийных случаях.",
          "",
          "Грузовик с двумя прицепами — это «автопоезд» (состав ТС), а не сочленённое.",
          "Двухэтажный автобус — одно цельное ТС без сочленения.",
        ],
      },
    },
  },
  {
    id: "manual-t1-14",
    section: "others",
    correctIndex: 2,
    source: SOURCE,
    translations: {
      es: {
        text: "Las líneas azules en una zona de estacionamiento indican…",
        options: [
          "Estacionamiento reservado para residentes",
          "Estacionamiento gratuito sin límite de tiempo",
          "Estacionamiento regulado (ORA/zona azul): tiempo limitado y suele requerir pago",
          "Estacionamiento exclusivo para motocicletas",
        ],
        explanation:
          "Las líneas azules delimitan una zona de estacionamiento regulado (ORA / «zona azul»): tiempo limitado, generalmente con pago mediante parquímetro o app.",
        optionRationales: [
          "Las plazas para residentes se marcan con líneas verdes (o mixtas), no azules puras.",
          "El estacionamiento gratuito sin límite se marca con líneas blancas.",
          "",
          "Las plazas exclusivas para motos suelen estar señaladas con pictogramas, no con color azul.",
        ],
      },
      en: {
        text: "Blue lines in a parking zone indicate…",
        options: [
          "Parking reserved for residents",
          "Free parking with no time limit",
          "Regulated parking (ORA / 'blue zone'): time-limited, usually paid",
          "Parking exclusive to motorcycles",
        ],
        explanation:
          "Blue lines mark a regulated parking zone (ORA / 'blue zone'): time-limited and usually requiring payment at a meter or via an app.",
        optionRationales: [
          "Resident parking is marked with green lines (or mixed), not pure blue.",
          "Unlimited free parking is marked with white lines.",
          "",
          "Motorcycle-only bays are marked with pictograms, not blue colour.",
        ],
      },
      ru: {
        text: "Синие линии в зоне парковки означают…",
        options: [
          "Парковка только для резидентов",
          "Бесплатная парковка без ограничения времени",
          "Регулируемая парковка (ORA/«синяя зона»): ограничение времени, обычно платно",
          "Парковка только для мотоциклов",
        ],
        explanation:
          "Синие линии обозначают регулируемую парковку (ORA / «синяя зона»): ограничение времени, обычно с оплатой через паркомат или приложение.",
        optionRationales: [
          "Парковка для резидентов — зелёные линии (или смешанные), не чисто синие.",
          "Бесплатная без ограничений — белые линии.",
          "",
          "Мотопарковки обозначают пиктограммой, а не цветом.",
        ],
      },
    },
  },
  {
    id: "manual-t1-15",
    section: "others",
    correctIndex: 3,
    source: SOURCE,
    translations: {
      es: {
        text: "Una autocaravana es un vehículo…",
        options: [
          "Que solo puede conducirse con permiso C",
          "Que no está permitido en autopistas",
          "Que siempre supera los 3.500 kg de MMA",
          "Especial, con espacio habitable, que puede llegar hasta 3.500 kg de MMA y conducirse con permiso B",
        ],
        explanation:
          "La autocaravana es un vehículo con espacio habitable que hasta 3.500 kg de MMA se puede conducir con el permiso B (categoría M1). Por encima de 3.500 kg requiere permiso C1 o C.",
        optionRationales: [
          "Solo requiere C si supera 3.500 kg; la mayoría de autocaravanas de alquiler son ≤ 3.500 kg y van con B.",
          "En autopistas están permitidas como cualquier vehículo a motor.",
          "No siempre; existen modelos por debajo de 3.500 kg pensados justamente para el permiso B.",
          "",
        ],
      },
      en: {
        text: "A motorhome (autocaravana) is a vehicle that…",
        options: [
          "Can only be driven with a C licence",
          "Isn't allowed on motorways",
          "Always exceeds 3,500 kg MMA",
          "Is a special vehicle with a living area; up to 3,500 kg MMA can be driven on a B licence",
        ],
        explanation:
          "A motorhome has a living space and, up to 3,500 kg MMA, can be driven on a B licence (M1 category). Above 3,500 kg needs C1 or C.",
        optionRationales: [
          "C is only needed above 3,500 kg; most rental motorhomes are ≤ 3,500 kg and use B.",
          "Motorways allow them like any motor vehicle.",
          "Not always; there are models below 3,500 kg designed precisely for the B licence.",
          "",
        ],
      },
      ru: {
        text: "Автодом (autocaravana) — это ТС, которое…",
        options: [
          "Можно водить только с правами C",
          "Не допускается на автомагистрали",
          "Всегда превышает 3500 кг MMA",
          "Специальное ТС с жилым пространством; до 3500 кг MMA — можно водить с правами B",
        ],
        explanation:
          "Автодом имеет жилую зону, и до 3500 кг MMA можно водить с правами B (категория M1). Свыше 3500 кг нужны C1 или C.",
        optionRationales: [
          "C нужен только свыше 3500 кг; большинство арендных автодомов ≤ 3500 кг и допускают B.",
          "На автомагистралях они разрешены как любые моторные ТС.",
          "Не всегда; есть модели до 3500 кг, специально под категорию B.",
          "",
        ],
      },
    },
  },
];
