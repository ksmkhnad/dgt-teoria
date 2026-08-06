import type { Question } from "@/lib/types";

// DGT Manual Permiso B (Lectura Fácil, 2024), Tema 9 — La vía.

const SOURCE = "DGT Manual Permiso B (Lectura Fácil, 2024), Tema 9";

export const QUESTIONS_MANUAL_T9: Question[] = [
  {
    id: "manual-t9-01",
    section: "driving_conditions",
    correctIndex: 2,
    source: SOURCE,
    termIds: ["calzada", "arcen"],
    translations: {
      es: {
        text: "La 'plataforma' de la vía es…",
        options: [
          "Solo la calzada",
          "Solo el arcén",
          "Toda la zona por la que pueden circular o parar los vehículos (calzada + arcén)",
          "La acera",
        ],
        explanation:
          "La plataforma incluye la calzada y el arcén. Es toda la zona de la vía que los vehículos pueden usar para circular o parar.",
        optionRationales: [
          "La calzada es solo una parte de la plataforma, no toda.",
          "El arcén es la otra parte; la plataforma incluye ambas.",
          "",
          "La acera es zona peatonal, no forma parte de la plataforma.",
        ],
      },
      en: {
        text: "The 'plataforma' of a road is…",
        options: [
          "Only the roadway",
          "Only the shoulder",
          "The whole zone vehicles can drive on or stop on (roadway + shoulder)",
          "The pavement",
        ],
        explanation:
          "Plataforma = roadway + shoulder. It's the entire zone vehicles may use for driving or stopping.",
        optionRationales: [
          "The roadway is only part of the plataforma.",
          "The shoulder is the other part; plataforma includes both.",
          "",
          "The pavement is a pedestrian zone, not part of the plataforma.",
        ],
      },
      ru: {
        text: "«Plataforma» дороги — это…",
        options: [
          "Только проезжая часть",
          "Только обочина",
          "Вся зона, где могут ехать или останавливаться автомобили (проезжая часть + обочина)",
          "Тротуар",
        ],
        explanation:
          "Plataforma включает проезжую часть и обочину — всю зону, доступную транспорту для движения или остановки.",
        optionRationales: [
          "Проезжая часть — только часть plataforma.",
          "Обочина — другая часть; plataforma включает обе.",
          "",
          "Тротуар — пешеходная зона, не входит в plataforma.",
        ],
      },
    },
  },
  {
    id: "manual-t9-02",
    section: "driving_conditions",
    correctIndex: 0,
    source: SOURCE,
    termIds: ["calzada"],
    translations: {
      es: {
        text: "Se llama 'calzada estrecha' a la que mide menos de…",
        options: ["6,5 metros", "3 metros", "4 metros", "10 metros"],
        explanation:
          "Calzada estrecha: menos de 6,5 metros de ancho. Un CARRIL estrecho, en cambio, es el que mide menos de 3 m.",
        optionRationales: [
          "",
          "3 metros es la definición de CARRIL estrecho, no calzada.",
          "4 metros no es una definición oficial.",
          "10 metros es una calzada amplia, no estrecha.",
        ],
      },
      en: {
        text: "A 'narrow roadway' (calzada estrecha) is one that measures less than…",
        options: ["6.5 metres", "3 metres", "4 metres", "10 metres"],
        explanation:
          "Narrow roadway: under 6.5 m wide. A narrow LANE, by contrast, is under 3 m.",
        optionRationales: [
          "",
          "3 metres is a narrow LANE, not roadway.",
          "4 metres isn't an official definition.",
          "10 metres is a wide roadway, not narrow.",
        ],
      },
      ru: {
        text: "«Узкая проезжая часть» — это когда её ширина менее…",
        options: ["6,5 метра", "3 метра", "4 метра", "10 метров"],
        explanation:
          "Узкая проезжая часть — менее 6,5 м. Узкая ПОЛОСА, в свою очередь, — менее 3 м.",
        optionRationales: [
          "",
          "3 м — это узкая ПОЛОСА, не проезжая часть.",
          "4 м не является официальным определением.",
          "10 м — это широкая проезжая часть, не узкая.",
        ],
      },
    },
  },
  {
    id: "manual-t9-03",
    section: "driving_conditions",
    correctIndex: 1,
    source: SOURCE,
    translations: {
      es: {
        text: "La 'zona de frenado de emergencia' sirve para…",
        options: [
          "Adelantar rápido",
          "Parar vehículos a los que les fallan los frenos",
          "Estacionar sin límite de tiempo",
          "Reparar el vehículo",
        ],
        explanation:
          "Zona preparada para que paren los vehículos cuya sistema de frenos ha fallado. Al entrar, el vehículo se detiene aunque los frenos no respondan.",
        optionRationales: [
          "No es para adelantar; es una emergencia de frenos.",
          "",
          "No es un aparcamiento; es un dispositivo de emergencia.",
          "No hay reparación en la propia zona; es una detención segura.",
        ],
      },
      en: {
        text: "The 'emergency braking zone' is used to…",
        options: [
          "Overtake quickly",
          "Stop vehicles whose brakes have failed",
          "Park with no time limit",
          "Repair the vehicle",
        ],
        explanation:
          "A prepared zone where vehicles with brake failure can stop. Entering it stops the vehicle even without working brakes.",
        optionRationales: [
          "Not for overtaking; it's a brake-failure emergency.",
          "",
          "It isn't a car park; it's an emergency device.",
          "You don't repair in the zone itself; it's a safe stop.",
        ],
      },
      ru: {
        text: "«Аварийная тормозная полоса» служит для…",
        options: [
          "Быстрого обгона",
          "Остановки автомобилей с отказом тормозов",
          "Парковки без ограничения времени",
          "Ремонта автомобиля",
        ],
        explanation:
          "Специально подготовленная зона, где остановится автомобиль, у которого отказали тормоза. При въезде автомобиль останавливается даже без тормозов.",
        optionRationales: [
          "Не для обгона; это экстренная мера при отказе тормозов.",
          "",
          "Это не парковка; это устройство для экстренной остановки.",
          "Ремонт в самой зоне не проводят; это безопасная остановка.",
        ],
      },
    },
  },
  {
    id: "manual-t9-04",
    section: "driving_conditions",
    correctIndex: 3,
    source: SOURCE,
    translations: {
      es: {
        text: "En un panel de estado del tráfico, ¿qué significa el color rojo?",
        options: [
          "Se puede circular con normalidad",
          "No se puede alcanzar la velocidad máxima",
          "La carretera está cortada",
          "Hay demasiados vehículos y muchos paros y retenciones",
        ],
        explanation:
          "Blanco: circulación normal. Verde: no se alcanza el máximo. Amarillo: paros y retenciones. Rojo: muchos vehículos, muchas retenciones. Negro: carretera cortada.",
        optionRationales: [
          "Circulación normal es BLANCO, no rojo.",
          "«No se alcanza el máximo» es VERDE.",
          "«Carretera cortada» es NEGRO, no rojo.",
          "",
        ],
      },
      en: {
        text: "On a traffic-status panel, what does the colour RED mean?",
        options: [
          "Normal traffic",
          "Cannot reach the max speed",
          "Road closed",
          "Very heavy traffic with many stops and jams",
        ],
        explanation:
          "White: normal. Green: max speed not reachable. Yellow: some stops/jams. Red: heavy traffic, many stops. Black: road closed.",
        optionRationales: [
          "Normal traffic is WHITE, not red.",
          "'Max not reachable' is GREEN.",
          "'Road closed' is BLACK, not red.",
          "",
        ],
      },
      ru: {
        text: "На табло состояния движения красный цвет означает…",
        options: [
          "Обычное движение",
          "Нельзя достичь максимальной скорости",
          "Дорога перекрыта",
          "Очень много машин и заторов",
        ],
        explanation:
          "Белый — норма. Зелёный — не достигается максимум. Жёлтый — местами заторы. Красный — плотный поток и много заторов. Чёрный — дорога перекрыта.",
        optionRationales: [
          "Обычное движение — БЕЛЫЙ, не красный.",
          "«Не достигается максимум» — ЗЕЛЁНЫЙ.",
          "«Дорога перекрыта» — ЧЁРНЫЙ, не красный.",
          "",
        ],
      },
    },
  },
  {
    id: "manual-t9-05",
    section: "driving_conditions",
    correctIndex: 2,
    source: SOURCE,
    translations: {
      es: {
        text: "En carretera convencional (fuera de poblado), el vehículo debe circular…",
        options: [
          "Por el centro de la calzada",
          "Por el carril de la izquierda",
          "Por la derecha, cerca del borde de la calzada, sobre todo en curvas de visibilidad reducida",
          "Por el arcén siempre",
        ],
        explanation:
          "Se circula por la derecha, cerca del borde de la calzada. En curvas o cambios de rasante con visibilidad reducida, más cerca del borde derecho todavía.",
        optionRationales: [
          "Circular por el centro invade el otro sentido y es peligroso.",
          "El carril izquierdo es solo para adelantar.",
          "",
          "El arcén no es carril; los turismos no circulan por el arcén salvo emergencia.",
        ],
      },
      en: {
        text: "On a conventional road (outside built-up areas), the vehicle must drive…",
        options: [
          "Down the middle of the roadway",
          "In the left lane",
          "On the right, near the edge, especially on blind curves",
          "Always on the shoulder",
        ],
        explanation:
          "Drive on the right, close to the edge. Even closer to the right on blind curves and crests.",
        optionRationales: [
          "Driving down the middle invades the other side and is dangerous.",
          "The left lane is only for overtaking.",
          "",
          "The shoulder isn't a lane; cars don't drive there except in emergencies.",
        ],
      },
      ru: {
        text: "На обычной дороге (вне населённого пункта) автомобиль должен ехать…",
        options: [
          "По середине проезжей части",
          "По левой полосе",
          "По правой, ближе к краю, особенно на закрытых поворотах",
          "Всегда по обочине",
        ],
        explanation:
          "Едут по правой, ближе к краю проезжей части. На закрытых поворотах и подъёмах — ещё ближе к правому краю.",
        optionRationales: [
          "По центру — вторжение на встречную; опасно.",
          "Левая полоса — только для обгона.",
          "",
          "Обочина — не полоса; легковые ездят по ней только в аварийных случаях.",
        ],
      },
    },
  },
  {
    id: "manual-t9-06",
    section: "driving_conditions",
    correctIndex: 1,
    source: SOURCE,
    termIds: ["autopista", "autovia"],
    translations: {
      es: {
        text: "¿Cuál es la principal diferencia entre autopista y autovía?",
        options: [
          "En autovía se puede circular a 130 km/h",
          "En autovía se puede entrar desde algunas propiedades colindantes; en autopista no",
          "En autopista pueden circular ciclomotores; en autovía no",
          "No hay diferencias reales",
        ],
        explanation:
          "Autopista: acceso solo por accesos autorizados, ninguna propiedad colindante. Autovía: se puede entrar desde algunas propiedades y suele no ser de peaje.",
        optionRationales: [
          "El límite máximo es 120 km/h en ambas; 130 no es válido.",
          "",
          "En ninguna de las dos pueden circular ciclomotores.",
          "Sí hay diferencias reglamentarias entre las dos.",
        ],
      },
      en: {
        text: "What's the main difference between an autopista and an autovía?",
        options: [
          "You can drive 130 km/h on autovía",
          "Autovía allows access from some adjacent properties; autopista doesn't",
          "Autopista allows mopeds; autovía doesn't",
          "No real difference",
        ],
        explanation:
          "Autopista: entry only via authorised junctions, no adjacent-property access. Autovía: some adjacent-property access; usually toll-free.",
        optionRationales: [
          "The max is 120 km/h on both; 130 isn't valid.",
          "",
          "Neither allows mopeds.",
          "There are real regulatory differences.",
        ],
      },
      ru: {
        text: "В чём главное отличие autopista и autovía?",
        options: [
          "На autovía можно ехать 130 км/ч",
          "На autovía есть съезды к некоторым прилегающим владениям; на autopista нет",
          "На autopista могут ехать мопеды; на autovía нет",
          "Разницы нет",
        ],
        explanation:
          "Autopista: только через официальные съезды, без доступа к прилегающим владениям. Autovía: есть съезды к некоторым владениям, обычно бесплатная.",
        optionRationales: [
          "Максимум 120 км/ч на обеих; 130 не действует.",
          "",
          "Мопеды не допускаются ни там, ни там.",
          "Регламентные различия реальны.",
        ],
      },
    },
  },
  {
    id: "manual-t9-07",
    section: "driving_conditions",
    correctIndex: 3,
    source: SOURCE,
    termIds: ["travesia", "via_urbana"],
    translations: {
      es: {
        text: "Una 'travesía' es…",
        options: [
          "Un cruce peligroso",
          "Un puente",
          "Un tramo de autopista",
          "Un tramo de carretera interurbana que atraviesa un poblado",
        ],
        explanation:
          "Travesía: tramo de carretera interurbana que pasa por dentro de un pueblo. Velocidad máxima 50 km/h, sin importar el número de carriles.",
        optionRationales: [
          "Un cruce peligroso se llama intersección o cruce, no travesía.",
          "Un puente es una infraestructura, no una categoría de vía.",
          "Un tramo de autopista se llama autopista, no travesía.",
          "",
        ],
      },
      en: {
        text: "A 'travesía' is…",
        options: [
          "A dangerous junction",
          "A bridge",
          "A stretch of motorway",
          "A stretch of interurban road that passes through a town",
        ],
        explanation:
          "Travesía: an interurban road passing through a built-up area. Max speed 50 km/h regardless of lane count.",
        optionRationales: [
          "A dangerous junction is called just that, not travesía.",
          "A bridge is infrastructure, not a road category.",
          "Motorway sections stay motorway, not travesía.",
          "",
        ],
      },
      ru: {
        text: "«Travesía» — это…",
        options: [
          "Опасный перекрёсток",
          "Мост",
          "Участок автомагистрали",
          "Участок междугородней дороги, проходящий через населённый пункт",
        ],
        explanation:
          "Travesía — участок междугородней дороги внутри посёлка. Максимум 50 км/ч независимо от числа полос.",
        optionRationales: [
          "Опасный перекрёсток называется просто пересечением, не travesía.",
          "Мост — это сооружение, не тип дороги.",
          "Участок автомагистрали остаётся автомагистралью.",
          "",
        ],
      },
    },
  },
  {
    id: "manual-t9-08",
    section: "driving_conditions",
    correctIndex: 0,
    source: SOURCE,
    translations: {
      es: {
        text: "'Dirección' y 'sentido' NO son lo mismo. Dos coches que van por la misma carretera en carriles opuestos van…",
        options: [
          "En la misma dirección, en sentidos distintos",
          "En direcciones distintas, en sentidos iguales",
          "En la misma dirección y en el mismo sentido",
          "En direcciones y sentidos distintos",
        ],
        explanation:
          "Dirección = línea que une dos puntos (la propia carretera). Sentido = las dos posibilidades (ida/vuelta) sobre esa misma dirección. Misma dirección, distinto sentido.",
        optionRationales: [
          "",
          "Direcciones distintas serían dos carreteras distintas.",
          "El mismo sentido implicaría ir en paralelo hacia el mismo lugar.",
          "No es doble diferencia; solo cambia el sentido, no la dirección.",
        ],
      },
      en: {
        text: "'Direction' and 'sense' are NOT the same. Two cars on the same road in opposite lanes travel…",
        options: [
          "Same direction, opposite senses",
          "Different directions, same sense",
          "Same direction and same sense",
          "Different directions AND senses",
        ],
        explanation:
          "Direction = line joining two points (the road itself). Sense = the two options (there/back) along that direction. Same direction, opposite sense.",
        optionRationales: [
          "",
          "Different directions would mean different roads.",
          "Same sense would mean travelling side by side toward the same place.",
          "It's not both differing; only the sense flips, not the direction.",
        ],
      },
      ru: {
        text: "«Направление» и «сторона» — не одно и то же. Две машины на одной дороге во встречных полосах едут…",
        options: [
          "В одном направлении, в разные стороны",
          "В разных направлениях, в одну сторону",
          "В одном направлении и в одну сторону",
          "В разных направлениях и в разные стороны",
        ],
        explanation:
          "Направление = линия, соединяющая две точки (сама дорога). Сторона = два варианта (туда/обратно) вдоль неё. Одно направление, разные стороны.",
        optionRationales: [
          "",
          "Разные направления — это разные дороги.",
          "Одинаковая сторона означала бы движение рядом в одну точку.",
          "Не оба параметра отличаются; отличается только сторона, а не направление.",
        ],
      },
    },
  },
  {
    id: "manual-t9-09",
    section: "driving_conditions",
    correctIndex: 2,
    source: SOURCE,
    translations: {
      es: {
        text: "En una carretera de doble sentido y tres carriles, ¿cuándo se puede usar el carril central?",
        options: [
          "Siempre",
          "Nunca",
          "Solo para adelantar y para cambiar de dirección hacia la izquierda",
          "Solo si vas en camión",
        ],
        explanation:
          "En vía de doble sentido con tres carriles, el carril central es solo para adelantar y para girar a la izquierda. Nunca se ocupa el carril izquierdo (dirección contraria).",
        optionRationales: [
          "«Siempre» sería invadir el sentido contrario cuando no procede.",
          "«Nunca» tampoco: para adelantar y girar a la izquierda sí se usa.",
          "",
          "El tipo de vehículo no cambia la regla del carril central.",
        ],
      },
      en: {
        text: "On a two-way road with three lanes, when may you use the central lane?",
        options: [
          "Always",
          "Never",
          "Only to overtake and to turn left",
          "Only if you drive a lorry",
        ],
        explanation:
          "On a two-way three-lane road, the central lane is for overtaking or turning left only. The left lane (oncoming) is never used.",
        optionRationales: [
          "'Always' would mean invading oncoming space needlessly.",
          "'Never' is wrong too: for overtaking and left-turns you do use it.",
          "",
          "Vehicle type doesn't change the central-lane rule.",
        ],
      },
      ru: {
        text: "На двусторонней дороге с тремя полосами когда можно использовать среднюю полосу?",
        options: [
          "Всегда",
          "Никогда",
          "Только для обгона и поворота налево",
          "Только если едешь на грузовике",
        ],
        explanation:
          "На двусторонней дороге с тремя полосами средняя — только для обгона и поворота налево. Левая полоса (встречная) никогда не используется.",
        optionRationales: [
          "«Всегда» означало бы бесполезный выезд на встречку.",
          "«Никогда» тоже неверно — для обгона и поворота налево её используют.",
          "",
          "Тип ТС не меняет правило средней полосы.",
        ],
      },
    },
  },
  {
    id: "manual-t9-10",
    section: "driving_conditions",
    correctIndex: 1,
    source: SOURCE,
    termIds: ["arcen"],
    translations: {
      es: {
        text: "Los automóviles (turismos) por el arcén…",
        options: [
          "Pueden circular siempre",
          "No deben circular por él, salvo avería o imprevisto",
          "Pueden circular solo de noche",
          "Circulan por el arcén cuando llueve",
        ],
        explanation:
          "Los turismos no deben circular por el arcén salvo avería o alguna otra emergencia. El arcén está pensado para peatones, ciclos, ciclomotores y paradas de emergencia.",
        optionRationales: [
          "Circular normalmente por el arcén está prohibido y es peligroso.",
          "",
          "La hora no cambia la norma; no se circula por el arcén.",
          "La lluvia no permite invadir el arcén; hay que reducir velocidad y quedarse en la calzada.",
        ],
      },
      en: {
        text: "Cars driving on the hard shoulder…",
        options: [
          "May drive there anytime",
          "Should not drive there except for breakdown or emergency",
          "May drive there only at night",
          "Drive there when it rains",
        ],
        explanation:
          "Cars should not drive on the shoulder except in breakdown or emergency. The shoulder is for pedestrians, cycles, mopeds and emergency stops.",
        optionRationales: [
          "Regular shoulder-driving is forbidden and dangerous.",
          "",
          "Time of day doesn't change the rule.",
          "Rain doesn't authorise using the shoulder; slow down and stay in the lane.",
        ],
      },
      ru: {
        text: "Легковой автомобиль по обочине…",
        options: [
          "Может ехать всегда",
          "Ехать не должен, кроме случая поломки/аварии",
          "Может ехать только ночью",
          "Ездит по обочине при дожде",
        ],
        explanation:
          "Легковые не должны ездить по обочине, кроме поломки или аварийной ситуации. Обочина — для пешеходов, велосипедистов, мопедов и аварийных остановок.",
        optionRationales: [
          "Обычное движение по обочине запрещено и опасно.",
          "",
          "Время суток не меняет правила.",
          "Дождь не даёт права на обочину; надо снизить скорость, оставаясь на полосе.",
        ],
      },
    },
  },
  {
    id: "manual-t9-11",
    section: "driving_conditions",
    correctIndex: 2,
    source: SOURCE,
    translations: {
      es: {
        text: "La mediana de una vía es…",
        options: [
          "El carril central",
          "La línea pintada en el medio",
          "La franja longitudinal que separa dos calzadas de sentidos opuestos, no destinada a la circulación",
          "El arcén interior de una autopista",
        ],
        explanation:
          "La mediana es la franja longitudinal que separa dos calzadas de sentidos opuestos y no está destinada a la circulación. Puede estar pavimentada, ajardinada o llevar un quitamiedos.",
        optionRationales: [
          "El carril central es un carril de circulación; la mediana no lo es.",
          "Una línea pintada es una marca vial (por ejemplo, doble continua), no una mediana.",
          "",
          "El arcén interior es una franja pavimentada anexa a la calzada, distinta de la mediana en sí.",
        ],
      },
      en: {
        text: "The median (mediana) of a road is…",
        options: [
          "The central lane",
          "The painted line in the middle",
          "The longitudinal strip separating two roadways with opposite senses, not for traffic",
          "The inner shoulder of a motorway",
        ],
        explanation:
          "The median is the longitudinal strip separating two carriageways of opposite senses; not for traffic. It can be paved, planted or have a barrier.",
        optionRationales: [
          "The central lane IS a traffic lane; the median isn't.",
          "A painted line is a road marking (e.g. double continuous), not a median.",
          "",
          "The inner shoulder is a paved strip alongside the carriageway, distinct from the median itself.",
        ],
      },
      ru: {
        text: "Mediana дороги — это…",
        options: [
          "Средняя полоса движения",
          "Разметочная линия по центру",
          "Продольная разделительная полоса между двумя проезжими частями противоположных направлений, не для движения",
          "Внутренняя обочина автомагистрали",
        ],
        explanation:
          "Mediana — продольная разделительная полоса между двумя проезжими частями противоположных направлений; для движения не предназначена. Может быть с покрытием, озеленением или отбойником.",
        optionRationales: [
          "Средняя полоса — полоса движения; mediana — нет.",
          "Разметочная линия — это marking (двойная сплошная и т. п.), не разделительная полоса.",
          "",
          "Внутренняя обочина — полоса с покрытием у проезжей части, отличается от самой mediana.",
        ],
      },
    },
  },
  {
    id: "manual-t9-12",
    section: "driving_conditions",
    correctIndex: 0,
    source: SOURCE,
    translations: {
      es: {
        text: "Un carril reversible es…",
        options: [
          "Un carril cuyo sentido de circulación puede cambiarse según la hora o el tráfico, señalizado en cada momento",
          "Un carril solo para vehículos de emergencia",
          "Un carril únicamente para taxis",
          "El carril de la izquierda en cualquier autovía",
        ],
        explanation:
          "El carril reversible cambia de sentido según hora o necesidad de tráfico (por ejemplo, entradas y salidas de grandes ciudades). Su sentido siempre está señalizado en cada momento; con luces las cortas encendidas.",
        optionRationales: [
          "",
          "Los carriles para emergencias son distintos (arcén habilitado o carril bus-VAO).",
          "Los carriles solo para taxis son carriles reservados (BUS/TAXI), no reversibles.",
          "El carril izquierdo en autovía no es reversible; es simplemente el más rápido/de adelantamiento.",
        ],
      },
      en: {
        text: "A reversible lane is…",
        options: [
          "A lane whose direction can change by hour or traffic, always signposted at the moment of use",
          "A lane only for emergency vehicles",
          "A lane only for taxis",
          "The left lane of any dual carriageway",
        ],
        explanation:
          "A reversible lane switches direction by time of day or traffic need (e.g. big-city commutes). Its direction is always signposted at that moment; drive with dipped beams on.",
        optionRationales: [
          "",
          "Emergency lanes are different (equipped shoulder or bus/HOV lanes).",
          "Taxi-only lanes are reserved lanes (BUS/TAXI), not reversible.",
          "The left lane of a dual carriageway is a fast/overtaking lane, not reversible.",
        ],
      },
      ru: {
        text: "Реверсивная полоса — это…",
        options: [
          "Полоса, направление движения которой может меняться по времени или трафику, всегда обозначается в момент использования",
          "Полоса только для экстренных служб",
          "Полоса только для такси",
          "Левая полоса на любой скоростной дороге",
        ],
        explanation:
          "Реверсивная полоса меняет направление по времени или необходимости трафика (например, часы пик в больших городах). Её направление всегда обозначается в конкретный момент; ехать с ближним светом.",
        optionRationales: [
          "",
          "Полосы для экстренных — другое (обозначенная обочина или BUS/VAO).",
          "Полосы только для такси — выделенные (BUS/TAXI), не реверсивные.",
          "Левая полоса скоростной — это полоса для обгона, не реверсивная.",
        ],
      },
    },
  },
  {
    id: "manual-t9-13",
    section: "driving_conditions",
    correctIndex: 3,
    source: SOURCE,
    translations: {
      es: {
        text: "Los carriles BUS-VAO están reservados a…",
        options: [
          "Solo autobuses",
          "Solo taxis",
          "Solo motocicletas",
          "Autobuses y vehículos con alta ocupación (varios ocupantes), según señalización",
        ],
        explanation:
          "El carril BUS-VAO (Vehículo de Alta Ocupación) es para autobuses y vehículos con más de un ocupante (según la señal: 2+ o 3+ personas). Suele estar en accesos a grandes ciudades.",
        optionRationales: [
          "«Solo autobuses» sería un carril BUS estándar, no BUS-VAO.",
          "Los taxis pueden usarlo por normativa, pero no es exclusivo suyo.",
          "Las motocicletas suelen tenerlo permitido, pero no es «solo motos».",
          "",
        ],
      },
      en: {
        text: "BUS-VAO (HOV) lanes are reserved for…",
        options: [
          "Buses only",
          "Taxis only",
          "Motorcycles only",
          "Buses and high-occupancy vehicles (several occupants), as signposted",
        ],
        explanation:
          "The BUS-VAO (High-Occupancy Vehicle) lane is for buses and vehicles with more than one occupant (2+ or 3+ depending on signs). Usually on the approach to big cities.",
        optionRationales: [
          "'Buses only' would be a standard BUS lane, not BUS-VAO.",
          "Taxis may use them by rule but they aren't taxi-exclusive.",
          "Motorbikes are usually allowed but the lane isn't 'motorbikes only'.",
          "",
        ],
      },
      ru: {
        text: "Полосы BUS-VAO предназначены для…",
        options: [
          "Только автобусов",
          "Только такси",
          "Только мотоциклов",
          "Автобусов и авто с высокой загруженностью (несколько человек в салоне), по знаку",
        ],
        explanation:
          "Полоса BUS-VAO (Vehículo de Alta Ocupación) — для автобусов и авто с несколькими пассажирами (по знаку 2+ или 3+ человек). Обычно на подъездах к крупным городам.",
        optionRationales: [
          "«Только автобусы» — это стандартная BUS, а не BUS-VAO.",
          "Такси часто разрешены, но полоса не «только для такси».",
          "Мотоциклам обычно тоже разрешено, но полоса не «только для мото».",
          "",
        ],
      },
    },
  },
  {
    id: "manual-t9-14",
    section: "driving_conditions",
    correctIndex: 1,
    source: SOURCE,
    translations: {
      es: {
        text: "En una pendiente descendente pronunciada, ¿cómo debes conducir para gastar menos frenos?",
        options: [
          "En punto muerto para ahorrar combustible",
          "Con una marcha corta engranada para usar el freno motor",
          "Con las luces largas encendidas",
          "Con el freno de mano parcialmente accionado",
        ],
        explanation:
          "En pendiente descendente hay que llevar una marcha corta engranada. El freno motor ayuda a controlar la velocidad y evita el sobrecalentamiento de los frenos por uso prolongado.",
        optionRationales: [
          "En punto muerto pierdes freno motor y control; además, en pendiente ni siquiera se ahorra combustible en coches modernos.",
          "",
          "Las luces largas no ayudan a frenar; solo iluminan más.",
          "Usar el freno de mano parcialmente en marcha es peligroso: se sobrecalienta y puede bloquear las traseras.",
        ],
      },
      en: {
        text: "On a steep downhill, how should you drive to save the brakes?",
        options: [
          "In neutral to save fuel",
          "In a low gear so engine braking helps",
          "With high beams on",
          "With the handbrake partly on",
        ],
        explanation:
          "Downhill, stay in a low gear. Engine braking helps control speed and stops the brakes from overheating from prolonged use.",
        optionRationales: [
          "In neutral you lose engine braking and control; modern cars don't save fuel that way either.",
          "",
          "High beams don't help you brake; they only light more.",
          "Partial handbrake while moving is dangerous — it overheats and can lock the rears.",
        ],
      },
      ru: {
        text: "На крутом спуске как ехать, чтобы меньше изнашивать тормоза?",
        options: [
          "На нейтрали, чтобы экономить топливо",
          "На пониженной передаче, используя торможение двигателем",
          "С включённым дальним светом",
          "С частично поднятым ручником",
        ],
        explanation:
          "На спуске ехать на пониженной передаче. Торможение двигателем помогает контролировать скорость и не даёт тормозам перегреться.",
        optionRationales: [
          "На нейтрали пропадает торможение двигателем и контроль; современные машины на нейтрали топливо не экономят.",
          "",
          "Дальний свет не помогает тормозить; он лишь ярче светит.",
          "Ручник в движении опасен: перегревается и может заблокировать задние колёса.",
        ],
      },
    },
  },
  {
    id: "manual-t9-15",
    section: "driving_conditions",
    correctIndex: 2,
    source: SOURCE,
    translations: {
      es: {
        text: "En un túnel debes…",
        options: [
          "Circular con luces largas para ver mejor",
          "Quitarte las gafas de sol solo después de salir",
          "Encender las luces de cruce (aunque el túnel esté iluminado), mantener la distancia y no cambiar de carril",
          "Adelantar rápido para salir cuanto antes",
        ],
        explanation:
          "En túnel: enciende las luces de cruce aunque esté iluminado, mantén distancia con el vehículo de delante, no cambies de carril salvo necesidad y no adelantes si no está expresamente permitido.",
        optionRationales: [
          "Las luces largas deslumbran en túnel, sobre todo a los que vienen de frente.",
          "Las gafas de sol se quitan ANTES de entrar; dentro no se ve nada con ellas puestas.",
          "",
          "Adelantar «rápido» en túnel es peligroso: espacio reducido, poca visibilidad lateral y posible tráfico frontal.",
        ],
      },
      en: {
        text: "In a tunnel you must…",
        options: [
          "Drive with high beams for better vision",
          "Only take sunglasses off after exiting",
          "Turn on dipped beams (even if the tunnel is lit), keep distance and don't change lanes",
          "Overtake fast to get out sooner",
        ],
        explanation:
          "In a tunnel: dipped beams on even in a lit tunnel, keep distance from the car in front, don't change lanes unless needed and don't overtake unless explicitly allowed.",
        optionRationales: [
          "High beams dazzle in a tunnel, especially oncoming traffic.",
          "Sunglasses come off BEFORE entering; inside you can't see with them on.",
          "",
          "'Fast' overtaking in a tunnel is dangerous: tight space, poor lateral view, possible oncoming traffic.",
        ],
      },
      ru: {
        text: "В тоннеле нужно…",
        options: [
          "Ехать с дальним, чтобы лучше видеть",
          "Снять солнечные очки только после выезда",
          "Включить ближний свет (даже если тоннель освещён), держать дистанцию и не менять полосу",
          "Быстро обгонять, чтобы скорее выехать",
        ],
        explanation:
          "В тоннеле: ближний свет включён, даже если тоннель освещён; держать дистанцию; полосу без нужды не менять; обгон — только там, где явно разрешён.",
        optionRationales: [
          "Дальний в тоннеле слепит — особенно встречных.",
          "Очки снимают ДО въезда; внутри в них ничего не видно.",
          "",
          "«Быстро обогнать» в тоннеле опасно: тесно, боковой обзор плохой, возможно встречное движение.",
        ],
      },
    },
  },
];
