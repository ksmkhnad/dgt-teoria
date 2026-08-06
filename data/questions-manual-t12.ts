import type { Question } from "@/lib/types";

// DGT Manual Permiso B (Lectura Fácil, 2024), Tema 12 — Normas de preferencia.

const SOURCE = "DGT Manual Permiso B (Lectura Fácil, 2024), Tema 12";

export const QUESTIONS_MANUAL_T12: Question[] = [
  {
    id: "manual-t12-01",
    section: "priorities",
    correctIndex: 1,
    source: SOURCE,
    translations: {
      es: {
        text: "En un cruce sin señales, ¿a quién debes ceder el paso?",
        options: [
          "Al vehículo que llegó antes",
          "Al vehículo que viene por tu derecha",
          "Al vehículo más grande",
          "Al que va más rápido",
        ],
        explanation:
          "En los cruces sin señales debes ceder el paso a los vehículos que vienen por tu derecha, aunque lleguen por una vía estrecha o en mal estado.",
        optionRationales: [
          "El orden de llegada no determina la preferencia en cruces sin señales.",
          "",
          "El tamaño del vehículo nunca es un criterio de preferencia en el reglamento.",
          "La velocidad tampoco es un criterio; podría incluso ser una infracción.",
        ],
      },
      en: {
        text: "At a junction with no signs, who must you give way to?",
        options: [
          "The vehicle that arrived first",
          "The vehicle coming from your right",
          "The larger vehicle",
          "The faster vehicle",
        ],
        explanation:
          "At junctions without signs you must give way to vehicles coming from your right, even if they arrive by a narrow or bad-condition road.",
        optionRationales: [
          "Arrival order doesn't determine priority at unsignaled junctions.",
          "",
          "Vehicle size is never a criterion in Spanish traffic law.",
          "Speed isn't a criterion either — and could be an offence.",
        ],
      },
      ru: {
        text: "На перекрёстке без знаков кому нужно уступить?",
        options: [
          "Тому, кто подъехал первым",
          "Тому, кто движется справа",
          "Более крупному автомобилю",
          "Более быстрому",
        ],
        explanation:
          "На нерегулируемом перекрёстке уступают тому, кто движется справа, даже если он подъезжает по узкой или плохой дороге.",
        optionRationales: [
          "Порядок подъезда не определяет приоритет на нерегулируемом перекрёстке.",
          "",
          "Размер ТС никогда не является критерием приоритета в испанских ПДД.",
          "Скорость тоже не критерий — это может быть даже нарушением.",
        ],
      },
    },
  },
  {
    id: "manual-t12-02",
    section: "priorities",
    correctIndex: 0,
    source: SOURCE,
    translations: {
      es: {
        text: "En un cruce sin señales, un tranvía y un turismo llegan al mismo tiempo. ¿Quién tiene preferencia?",
        options: [
          "El tranvía (los vehículos por raíles tienen preferencia)",
          "El turismo si viene por la derecha",
          "El primero que llegó",
          "El más grande",
        ],
        explanation:
          "Los vehículos que circulan por raíles tienen preferencia sobre los que circulan por la carretera, incluso frente a los que vienen por la derecha.",
        optionRationales: [
          "",
          "El tranvía anula la regla de la derecha: los raíles siempre mandan.",
          "El orden de llegada no aplica cuando hay un vehículo por raíles.",
          "El criterio del tamaño no existe; lo que cuenta es que circule por raíles.",
        ],
      },
      en: {
        text: "At a junction with no signs, a tram and a car arrive at the same time. Who has priority?",
        options: [
          "The tram (rail vehicles have priority)",
          "The car if it comes from the right",
          "Whoever arrived first",
          "The larger one",
        ],
        explanation:
          "Rail vehicles have priority over road vehicles, even over those coming from the right.",
        optionRationales: [
          "",
          "The tram overrides the right-hand rule: rail always wins.",
          "Arrival order doesn't apply when a rail vehicle is involved.",
          "Size is not a criterion; being on rails is.",
        ],
      },
      ru: {
        text: "На перекрёстке без знаков одновременно подъехали трамвай и легковой автомобиль. У кого преимущество?",
        options: [
          "У трамвая (рельсовый транспорт имеет приоритет)",
          "У автомобиля, если он справа",
          "Кто первый подъехал",
          "У более крупного",
        ],
        explanation:
          "Рельсовый транспорт имеет преимущество перед безрельсовым, даже перед теми, кто справа.",
        optionRationales: [
          "",
          "Трамвай отменяет правило «помеха справа»: рельсы всегда важнее.",
          "Порядок подъезда не действует, когда есть рельсовый транспорт.",
          "Размер не критерий; критерий — движение по рельсам.",
        ],
      },
    },
  },
  {
    id: "manual-t12-03",
    section: "priorities",
    correctIndex: 2,
    source: SOURCE,
    termIds: ["glorieta"],
    translations: {
      es: {
        text: "En una rotonda, la preferencia la tienen…",
        options: [
          "Los vehículos que van a entrar",
          "Los vehículos con luces largas encendidas",
          "Los vehículos que ya están circulando dentro de la rotonda",
          "Los vehículos que giran a la derecha",
        ],
        explanation:
          "En una rotonda los vehículos que ya están circulando dentro tienen preferencia sobre los que quieren entrar.",
        optionRationales: [
          "Es al revés: los que van a entrar deben ceder el paso.",
          "Las luces no otorgan preferencia; sirven para ver y ser vistos.",
          "",
          "El sentido del giro no cambia la regla de la rotonda.",
        ],
      },
      en: {
        text: "At a roundabout, priority is given to…",
        options: [
          "Vehicles about to enter",
          "Vehicles with high beams on",
          "Vehicles already circulating inside the roundabout",
          "Vehicles turning right",
        ],
        explanation:
          "Vehicles already circulating in the roundabout have priority over those entering.",
        optionRationales: [
          "It's the opposite: entering vehicles must yield.",
          "Headlights never confer priority; they help you see and be seen.",
          "",
          "Which direction you turn doesn't change the roundabout rule.",
        ],
      },
      ru: {
        text: "На кольцевой развязке преимущество имеют…",
        options: [
          "Те, кто въезжает",
          "Те, у кого включён дальний свет",
          "Те, кто уже движется по кругу",
          "Те, кто поворачивает направо",
        ],
        explanation:
          "На кольце преимущество у тех, кто уже движется внутри, перед въезжающими.",
        optionRationales: [
          "Наоборот: въезжающие обязаны уступать.",
          "Свет фар никогда не даёт преимущества; он для видимости.",
          "",
          "Направление поворота не меняет правило кольца.",
        ],
      },
    },
  },
  {
    id: "manual-t12-04",
    section: "priorities",
    correctIndex: 1,
    source: SOURCE,
    translations: {
      es: {
        text: "Al incorporarte a una autopista desde el carril de aceleración…",
        options: [
          "Tienes preferencia sobre los que circulan por la autopista",
          "Debes ceder el paso a los vehículos que ya circulan por ella",
          "Debes parar completamente en el carril",
          "Debes acelerar hasta 120 km/h antes de mirar",
        ],
        explanation:
          "Los vehículos que ya están dentro de la autopista tienen preferencia sobre los que quieren entrar. Debes ceder el paso desde el carril de aceleración.",
        optionRationales: [
          "Es exactamente al revés: el que se incorpora es el que cede el paso.",
          "",
          "Parar solo se hace al PRINCIPIO del carril si es imprescindible; no como norma.",
          "Acelerar sin mirar es peligrosísimo; siempre hay que observar el tráfico.",
        ],
      },
      en: {
        text: "When joining a motorway from an acceleration lane…",
        options: [
          "You have priority over those already on it",
          "You must give way to vehicles already on the motorway",
          "You must fully stop in the lane",
          "You must accelerate to 120 km/h before looking",
        ],
        explanation:
          "Vehicles already on the motorway have priority over those joining. Give way from the acceleration lane.",
        optionRationales: [
          "The opposite is true: the joining driver yields.",
          "",
          "Stopping only happens at the START of the lane if unavoidable, not as the rule.",
          "Accelerating blind is extremely dangerous; you must always observe traffic.",
        ],
      },
      ru: {
        text: "При въезде на автомагистраль с полосы разгона…",
        options: [
          "У вас преимущество над теми, кто уже едет по магистрали",
          "Вы обязаны уступить тем, кто уже движется по магистрали",
          "Нужно полностью остановиться на полосе",
          "Нужно разогнаться до 120 км/ч, не глядя по сторонам",
        ],
        explanation:
          "Те, кто уже движется по автомагистрали, имеют преимущество перед въезжающими. Уступить с полосы разгона.",
        optionRationales: [
          "Всё ровно наоборот: уступает именно въезжающий.",
          "",
          "Останавливаются только в НАЧАЛЕ полосы, если иначе никак — не как правило.",
          "Разгоняться, не глядя — крайне опасно; всегда нужно контролировать поток.",
        ],
      },
    },
  },
  {
    id: "manual-t12-05",
    section: "priorities",
    correctIndex: 3,
    source: SOURCE,
    translations: {
      es: {
        text: "¿En cuál de las siguientes situaciones tienen preferencia los peatones?",
        options: [
          "Solo en autopistas",
          "Solo entre las 22 h y las 07 h",
          "Solo cuando cruzan una rotonda",
          "En pasos de peatones, aceras y zonas peatonales; cuando un vehículo gira hacia otra vía por la que están cruzando; y cuando el vehículo cruza una acera",
        ],
        explanation:
          "Los peatones tienen preferencia en pasos de peatones, aceras y zonas peatonales; cuando un vehículo gira hacia otra vía por la que están cruzando; y cuando un vehículo cruza una acera (por ejemplo, al salir de un garaje).",
        optionRationales: [
          "Los peatones tienen prohibida la circulación por autopistas.",
          "La hora del día nunca determina la preferencia peatonal.",
          "La preferencia peatonal se aplica en muchas más situaciones que solo la rotonda.",
          "",
        ],
      },
      en: {
        text: "In which situations do pedestrians have priority?",
        options: [
          "Only on motorways",
          "Only between 22:00 and 07:00",
          "Only when crossing a roundabout",
          "At crossings, pavements and pedestrian zones; when a vehicle turns into a street they are crossing; and when a vehicle crosses a pavement",
        ],
        explanation:
          "Pedestrians have priority at crossings, pavements and pedestrian zones; when a vehicle turns into a street they are crossing; and when a vehicle crosses a pavement (e.g. leaving a garage).",
        optionRationales: [
          "Pedestrians are actually forbidden on motorways.",
          "Time of day never determines pedestrian priority.",
          "Pedestrian priority applies in many more situations than just roundabouts.",
          "",
        ],
      },
      ru: {
        text: "В каких ситуациях у пешеходов есть преимущество?",
        options: [
          "Только на автомагистралях",
          "Только с 22:00 до 07:00",
          "Только при пересечении кругового движения",
          "На переходах, тротуарах и в пешеходных зонах; когда авто поворачивает на улицу, по которой они переходят; когда авто пересекает тротуар",
        ],
        explanation:
          "Пешеходы имеют приоритет на переходах, тротуарах, в пешеходных зонах; когда авто поворачивает на улицу, по которой они переходят; когда авто пересекает тротуар (например, выезжая из гаража).",
        optionRationales: [
          "Пешеходам вообще запрещено находиться на автомагистрали.",
          "Время суток никогда не определяет пешеходное преимущество.",
          "Приоритет пешеходов действует в гораздо большем числе ситуаций, чем только кольцо.",
          "",
        ],
      },
    },
  },
  {
    id: "manual-t12-06",
    section: "priorities",
    correctIndex: 2,
    source: SOURCE,
    translations: {
      es: {
        text: "Un grupo de ciclistas cruza un cruce. Uno de ellos ya ha entrado. Los demás vehículos…",
        options: [
          "Pueden cruzar entre ellos con precaución",
          "Solo deben esperar al primero",
          "Deben esperar a que pase todo el grupo",
          "Solo deben esperar si hay señal",
        ],
        explanation:
          "Cuando los ciclistas circulan en grupo y uno ya ha entrado en el cruce, los demás vehículos deben esperar a que pase todo el grupo.",
        optionRationales: [
          "Cortar entre ciclistas es peligroso y contrario a la norma.",
          "El grupo se trata como una unidad: hay que esperar a todo el grupo, no solo al primero.",
          "",
          "La regla del grupo se aplica siempre, no depende de la presencia de una señal.",
        ],
      },
      en: {
        text: "A group of cyclists is crossing a junction. One has already entered. Other vehicles…",
        options: [
          "May weave through them carefully",
          "Only need to wait for the first cyclist",
          "Must wait for the entire group to pass",
          "Only wait if there's a sign",
        ],
        explanation:
          "When cyclists ride in a group and one has already entered a junction, other vehicles must wait for the whole group to pass.",
        optionRationales: [
          "Cutting through a group of cyclists is dangerous and against the rules.",
          "The group counts as one unit; you wait for the whole group, not just the first rider.",
          "",
          "The group rule always applies, regardless of signage.",
        ],
      },
      ru: {
        text: "Группа велосипедистов пересекает перекрёсток, и один уже въехал. Остальные автомобили…",
        options: [
          "Могут аккуратно проехать между ними",
          "Ждут только первого велосипедиста",
          "Должны пропустить всю группу",
          "Ждут только если есть знак",
        ],
        explanation:
          "Если велосипедисты едут группой и один уже въехал на перекрёсток, остальные транспортные средства должны пропустить всю группу.",
        optionRationales: [
          "Проезжать между велосипедистами опасно и запрещено правилами.",
          "Группа рассматривается как одно целое: пропускать надо всю группу, а не только первого.",
          "",
          "Правило группы действует всегда, независимо от знака.",
        ],
      },
    },
  },
  {
    id: "manual-t12-07",
    section: "priorities",
    correctIndex: 0,
    source: SOURCE,
    translations: {
      es: {
        text: "Un vehículo de urgencias con sirena y luces se aproxima por detrás. Debes…",
        options: [
          "Apartarte a la derecha y detenerte si es necesario para facilitarle el paso",
          "Frenar bruscamente en tu carril",
          "Adelantar rápidamente para dejarle sitio",
          "Ignorar la sirena si vas dentro del límite de velocidad",
        ],
        explanation:
          "Todos los vehículos deben facilitar el paso a un vehículo de urgencias en cuanto oigan la sirena o vean las luces: apartarse a la derecha y detenerse si es necesario.",
        optionRationales: [
          "",
          "Frenar bruscamente en tu carril bloquea al vehículo de urgencias y aumenta el riesgo de alcance.",
          "Adelantar acelerando no libera espacio; puede empeorar la situación.",
          "El deber de ceder no depende de tu propia velocidad; se cede siempre.",
        ],
      },
      en: {
        text: "An emergency vehicle with siren and lights is approaching from behind. You must…",
        options: [
          "Move to the right and stop if needed so it can pass",
          "Brake sharply in your lane",
          "Overtake quickly to make room",
          "Ignore the siren if you're within the speed limit",
        ],
        explanation:
          "All vehicles must give way to an emergency vehicle on hearing the siren or seeing the lights: move right and stop if necessary.",
        optionRationales: [
          "",
          "Braking hard in your lane blocks the emergency vehicle and risks a rear-end collision.",
          "Overtaking doesn't free space — it can worsen the situation.",
          "The duty to yield doesn't depend on your own speed; you always yield.",
        ],
      },
      ru: {
        text: "Сзади приближается автомобиль экстренных служб с сиреной и мигалками. Вы должны…",
        options: [
          "Прижаться вправо и при необходимости остановиться, чтобы пропустить его",
          "Резко тормозить на своей полосе",
          "Быстро обогнать, чтобы освободить место",
          "Игнорировать сирену, если едете в пределах лимита",
        ],
        explanation:
          "Все обязаны уступить дорогу спецтранспорту, услышав сирену или увидев маячки: сместиться вправо и при необходимости остановиться.",
        optionRationales: [
          "",
          "Резкое торможение на своей полосе блокирует спецтранспорт и создаёт риск наезда сзади.",
          "Обгон не освобождает место, а часто ухудшает ситуацию.",
          "Обязанность уступить не зависит от вашей скорости — уступают всегда.",
        ],
      },
    },
  },
  {
    id: "manual-t12-08",
    section: "priorities",
    correctIndex: 2,
    source: SOURCE,
    translations: {
      es: {
        text: "Un vehículo de urgencias en servicio urgente puede…",
        options: [
          "Circular sin ninguna restricción y sin importar los peatones",
          "Solo saltarse los semáforos, pero no exceder los límites de velocidad",
          "Circular por encima del límite y no está obligado a respetar todas las señales, siempre que no ponga en peligro a otros",
          "Nada, deben respetar todas las señales igual que un turismo",
        ],
        explanation:
          "Los vehículos en servicio de urgencias pueden circular más rápido del límite y no están obligados a respetar las señales, siempre que aseguren no poner en peligro a otros. Sí deben obedecer las señales de los agentes.",
        optionRationales: [
          "La exención no es absoluta: no pueden poner en peligro a peatones ni a otros.",
          "También pueden exceder los límites de velocidad, no solo saltarse los semáforos.",
          "",
          "Sí tienen exenciones específicas; no equivalen a un turismo normal.",
        ],
      },
      en: {
        text: "An emergency vehicle on an urgent call may…",
        options: [
          "Drive with no restrictions and ignore pedestrians",
          "Only run red lights, but never exceed speed limits",
          "Exceed limits and skip signals, provided they don't endanger others",
          "Nothing — they must obey all signs like any car",
        ],
        explanation:
          "Emergency vehicles on urgent calls may exceed speed limits and are not required to obey signs, provided they don't endanger others. They must obey traffic officers' signals.",
        optionRationales: [
          "The exemption isn't absolute: they may never endanger pedestrians or others.",
          "They may also exceed speed limits, not only run red lights.",
          "",
          "They do have specific exemptions; they aren't treated like a regular car.",
        ],
      },
      ru: {
        text: "Спецавтомобиль на срочном вызове может…",
        options: [
          "Ехать без ограничений и не обращать внимания на пешеходов",
          "Только проезжать на красный, но не превышать скорость",
          "Превышать скорость и не выполнять знаки при условии, что не создаёт опасности для других",
          "Ничего — обязан соблюдать всё как обычный автомобиль",
        ],
        explanation:
          "Спецтранспорт на срочном вызове может превышать скорость и не выполнять знаки при условии, что не создаёт опасности. Обязан подчиняться регулировщику.",
        optionRationales: [
          "Исключения не абсолютны: создавать опасность пешеходам и другим нельзя.",
          "Также разрешено превышать скорость, не только проезжать на красный.",
          "",
          "У них есть конкретные привилегии; они не приравниваются к обычному авто.",
        ],
      },
    },
  },
  {
    id: "manual-t12-09",
    section: "priorities",
    correctIndex: 1,
    source: SOURCE,
    translations: {
      es: {
        text: "En una zona estrecha sin señales, ¿quién tiene preferencia?",
        options: [
          "El vehículo más pequeño",
          "El vehículo que entró primero en la zona estrecha",
          "El vehículo que viene por la derecha",
          "Ninguno; debe retroceder el que llegó después al ver al otro",
        ],
        explanation:
          "En zonas estrechas sin señales tiene preferencia el vehículo que ha entrado primero en la zona estrecha.",
        optionRationales: [
          "El tamaño no es un criterio en las normas.",
          "",
          "La regla de la derecha es para cruces, no para zonas estrechas.",
          "La preferencia SÍ existe; la tiene quien entró primero, no es «ninguno».",
        ],
      },
      en: {
        text: "In a narrow section without signs, who has priority?",
        options: [
          "The smaller vehicle",
          "The vehicle that entered the narrow section first",
          "The vehicle from the right",
          "Neither — whoever arrived later must reverse",
        ],
        explanation:
          "In narrow sections without signs, priority goes to the vehicle that entered the narrow section first.",
        optionRationales: [
          "Size isn't a criterion in the rules.",
          "",
          "The right-hand rule is for junctions, not narrow sections.",
          "There IS a priority — the driver who entered first — so 'neither' is wrong.",
        ],
      },
      ru: {
        text: "На узком участке без знаков у кого преимущество?",
        options: [
          "У меньшего автомобиля",
          "У того, кто первым въехал в узкий участок",
          "У того, кто движется справа",
          "Ни у кого — кто подъехал позже, должен сдать назад",
        ],
        explanation:
          "На узком участке без знаков преимущество у того, кто первым въехал в узкий участок.",
        optionRationales: [
          "Размер не критерий по правилам.",
          "",
          "Правило «помеха справа» — для перекрёстков, а не для узких участков.",
          "Приоритет ЕСТЬ — у того, кто заехал первым; вариант «ни у кого» неверен.",
        ],
      },
    },
  },
  {
    id: "manual-t12-10",
    section: "priorities",
    correctIndex: 1,
    source: SOURCE,
    translations: {
      es: {
        text: "En un cruce sin señales, un vehículo circula por carretera PAVIMENTADA y otro por camino sin pavimentar. ¿Quién tiene preferencia?",
        options: [
          "El del camino sin pavimentar",
          "El de la carretera pavimentada",
          "El que viene por la derecha, siempre",
          "El más grande",
        ],
        explanation:
          "Excepción a la regla de la derecha: el vehículo que circula por vía pavimentada tiene preferencia sobre el que viene de camino sin pavimentar.",
        optionRationales: [
          "Es al revés: el del camino sin pavimentar cede.",
          "",
          "La regla de la derecha se aplica cuando ambos vienen por vías del mismo tipo; el pavimento la anula.",
          "El tamaño no es criterio en la normativa.",
        ],
      },
      en: {
        text: "At an unsignaled junction, one vehicle comes on a PAVED road and another on an unpaved track. Who has priority?",
        options: [
          "The one from the unpaved track",
          "The one from the paved road",
          "Whoever is on the right, always",
          "The larger one",
        ],
        explanation:
          "Exception to the right-hand rule: a vehicle on a paved road has priority over one coming from an unpaved track.",
        optionRationales: [
          "It's the other way around: the unpaved-track driver yields.",
          "",
          "The right-hand rule applies when both come from same-type roads; paving overrides it.",
          "Size isn't a criterion.",
        ],
      },
      ru: {
        text: "На перекрёстке без знаков: один автомобиль едет по АСФАЛЬТИРОВАННОЙ дороге, другой — по грунтовке. У кого преимущество?",
        options: [
          "У того, кто с грунтовки",
          "У того, кто с асфальтированной",
          "У того, кто справа, всегда",
          "У более крупного",
        ],
        explanation:
          "Исключение из правила «помеха справа»: автомобиль на асфальтированной дороге имеет приоритет над тем, кто выезжает с грунтовки.",
        optionRationales: [
          "Наоборот: с грунтовки — уступает.",
          "",
          "«Помеха справа» действует, когда обе дороги одного типа; асфальт отменяет.",
          "Размер — не критерий.",
        ],
      },
    },
  },
  {
    id: "manual-t12-11",
    section: "priorities",
    correctIndex: 2,
    source: SOURCE,
    translations: {
      es: {
        text: "Sales de una finca o garaje privado a una carretera. ¿Quién tiene preferencia?",
        options: [
          "Tú, porque estabas parado",
          "El que viene por la derecha",
          "Los vehículos que ya circulan por la carretera",
          "Es negociable con las luces",
        ],
        explanation:
          "Al salir de un acceso privado (finca, garaje) siempre cedes el paso a los vehículos que circulan por la vía a la que te incorporas y a los peatones que crucen la acera.",
        optionRationales: [
          "Estar parado no te da preferencia; incorporarte a la circulación exige ceder.",
          "La regla de la derecha aplica entre vías, no al salir de un acceso privado.",
          "",
          "Las luces sirven para avisar de la maniobra, no para negociar preferencia.",
        ],
      },
      en: {
        text: "You're exiting a private property or garage onto the road. Who has priority?",
        options: [
          "You, because you were stopped",
          "Whoever comes from the right",
          "Vehicles already on the road",
          "Negotiate it with headlights",
        ],
        explanation:
          "When exiting a private access (property, garage) you always yield to vehicles on the road you're joining and to pedestrians crossing the pavement.",
        optionRationales: [
          "Being stopped doesn't grant priority; joining traffic means yielding.",
          "The right-hand rule applies between roads, not when leaving a private access.",
          "",
          "Lights signal your manoeuvre; they don't negotiate priority.",
        ],
      },
      ru: {
        text: "Ты выезжаешь с частного участка или гаража на дорогу. У кого преимущество?",
        options: [
          "У тебя, потому что стоял",
          "У того, кто движется справа",
          "У тех, кто уже движется по дороге",
          "Договориться фарами",
        ],
        explanation:
          "При выезде с частного заезда (участок, гараж) всегда уступаешь тем, кто движется по дороге, куда выезжаешь, и пешеходам на тротуаре.",
        optionRationales: [
          "«Я стоял» — не даёт приоритета; включаясь в поток, ты уступаешь.",
          "«Помеха справа» действует между дорогами, не при выезде с частного заезда.",
          "",
          "Фары обозначают манёвр, но не «договариваются» о приоритете.",
        ],
      },
    },
  },
  {
    id: "manual-t12-12",
    section: "priorities",
    correctIndex: 0,
    source: SOURCE,
    translations: {
      es: {
        text: "En una calle estrecha con pendiente donde se encuentran dos vehículos sin señales, ¿quién tiene preferencia?",
        options: [
          "El que sube",
          "El que baja",
          "El más grande",
          "El primero en tocar el claxon",
        ],
        explanation:
          "En zonas estrechas con pendiente, tiene preferencia el vehículo que SUBE. El que baja puede maniobrar (frenar y retroceder) con más control que el que sube.",
        optionRationales: [
          "",
          "El que baja debe retroceder porque conserva mejor el control con la marcha atrás en bajada.",
          "El tamaño no es criterio; hay excepciones cuando un vehículo no puede maniobrar (autobús, camión).",
          "El claxon avisa pero no establece preferencia legal.",
        ],
      },
      en: {
        text: "On a narrow uphill street where two vehicles meet with no signs, who has priority?",
        options: [
          "The one going up",
          "The one going down",
          "The larger one",
          "Whoever honks first",
        ],
        explanation:
          "On narrow slopes, priority to the vehicle going UP. The one going down can more easily reverse and manoeuvre downhill.",
        optionRationales: [
          "",
          "The downhill driver reverses because they keep better control going backwards downhill.",
          "Size isn't a criterion; there are exceptions when one vehicle can't manoeuvre (bus, lorry).",
          "The horn warns but doesn't establish legal priority.",
        ],
      },
      ru: {
        text: "На узкой улице с уклоном встречаются два автомобиля без знаков. У кого преимущество?",
        options: [
          "У того, кто поднимается",
          "У того, кто спускается",
          "У более крупного",
          "У того, кто первым посигналил",
        ],
        explanation:
          "На узких участках с уклоном приоритет у ПОДНИМАЮЩЕГОСЯ. Спускающийся может задним ходом маневрировать с большим контролем.",
        optionRationales: [
          "",
          "Спускающийся сдаёт назад: контроль задним ходом на спуске лучше.",
          "Размер не критерий; есть исключения когда один не может маневрировать (автобус, грузовик).",
          "Клаксон предупреждает, но не даёт юридического приоритета.",
        ],
      },
    },
  },
  {
    id: "manual-t12-13",
    section: "priorities",
    correctIndex: 3,
    source: SOURCE,
    translations: {
      es: {
        text: "Un autobús urbano señaliza su salida de la parada. ¿Debes cederle el paso?",
        options: [
          "No, tú tienes preferencia",
          "Solo si hay señal vertical",
          "Solo si es de noche",
          "Sí, dentro de poblado; hay que facilitar la salida al autobús que sale de una parada señalizada",
        ],
        explanation:
          "Dentro de poblado, tienes que facilitar la salida del autobús que sale de una parada señalizada. Reducir velocidad, incluso detenerse. Es especialmente importante para servicios de transporte público.",
        optionRationales: [
          "No: la norma es ceder al autobús que sale de parada señalizada dentro de poblado.",
          "La obligación existe por la naturaleza del vehículo y la parada, no depende de una señal extra.",
          "La hora no cambia la regla.",
          "",
        ],
      },
      en: {
        text: "A city bus signals it's leaving its stop. Do you yield?",
        options: [
          "No, you have priority",
          "Only if a vertical sign says so",
          "Only at night",
          "Yes, within town; you must let a bus leave a marked stop",
        ],
        explanation:
          "Within town you must facilitate a bus leaving a marked stop. Slow down, even stop. Important for public-transport service.",
        optionRationales: [
          "No: the rule is to yield to a bus leaving a marked stop within town.",
          "The duty comes from the vehicle and stop type, not from an extra sign.",
          "Time of day doesn't change the rule.",
          "",
        ],
      },
      ru: {
        text: "Городской автобус подаёт сигнал отправления с остановки. Нужно ли уступить?",
        options: [
          "Нет, преимущество у тебя",
          "Только если есть знак",
          "Только ночью",
          "Да, в городе; нужно дать автобусу выехать с обозначенной остановки",
        ],
        explanation:
          "В городе обязан помочь автобусу выехать с обозначенной остановки. Снизить скорость, при необходимости остановиться.",
        optionRationales: [
          "Нет: правило — уступать автобусу, покидающему обозначенную остановку в городе.",
          "Обязанность — от типа ТС и остановки, а не от отдельного знака.",
          "Время суток не меняет правило.",
          "",
        ],
      },
    },
  },
  {
    id: "manual-t12-14",
    section: "priorities",
    correctIndex: 2,
    source: SOURCE,
    translations: {
      es: {
        text: "Vas a girar a la derecha en un cruce. En ese momento hay peatones cruzando la calle a la que giras. ¿Qué debes hacer?",
        options: [
          "Girar rápido antes de que crucen",
          "Tocar el claxon para que se aparten",
          "Ceder el paso: los peatones tienen preferencia cuando el vehículo gira hacia la vía por la que están cruzando",
          "Girar aunque estén cruzando, siempre que puedas",
        ],
        explanation:
          "Los peatones tienen preferencia cuando un vehículo gira para entrar en otra vía por la que ellos están cruzando. Es una de las causas principales de atropellos evitables.",
        optionRationales: [
          "Girar rápido cuando cruzan peatones = atropello.",
          "El claxon no da preferencia; el peatón la tiene por ley.",
          "",
          "«Siempre que puedas» sigue siendo negar la preferencia legal del peatón.",
        ],
      },
      en: {
        text: "You're turning right at a junction. Pedestrians are crossing the street you're turning into. What do you do?",
        options: [
          "Turn quickly before they finish",
          "Honk so they step aside",
          "Yield: pedestrians have priority when a vehicle turns into the street they're crossing",
          "Turn even if they're crossing, as long as you can",
        ],
        explanation:
          "Pedestrians have priority when a vehicle turns into another street they're crossing. It's a leading cause of avoidable pedestrian crashes.",
        optionRationales: [
          "Turning fast into crossing pedestrians = collision.",
          "The horn doesn't grant priority; the pedestrian has it by law.",
          "",
          "'As long as you can' still overrides the pedestrian's legal priority.",
        ],
      },
      ru: {
        text: "Поворачиваешь направо на перекрёстке. В этот момент по улице, куда ты поворачиваешь, идут пешеходы. Что делать?",
        options: [
          "Быстро повернуть, пока не перешли",
          "Посигналить, чтобы отошли",
          "Уступить: пешеходы имеют приоритет, когда авто поворачивает на дорогу, по которой они переходят",
          "Поворачивать, пока получается",
        ],
        explanation:
          "У пешеходов преимущество, когда авто поворачивает на дорогу, по которой они переходят. Одна из главных причин предотвратимых наездов.",
        optionRationales: [
          "Быстро повернуть на переходящих = наезд.",
          "Клаксон не даёт приоритета; у пешехода он по закону.",
          "",
          "«Пока получается» — всё равно нарушение приоритета пешехода.",
        ],
      },
    },
  },
  {
    id: "manual-t12-15",
    section: "priorities",
    correctIndex: 1,
    source: SOURCE,
    termIds: ["ceda_paso"],
    translations: {
      es: {
        text: "Ante una señal de «ceda el paso», tu obligación es…",
        options: [
          "Detenerte completamente siempre, como en el STOP",
          "Reducir la velocidad y ceder el paso; parar solo si es necesario para no obligar al otro a frenar",
          "Solo mirar y continuar sin cambiar la velocidad",
          "Tocar el claxon antes de entrar",
        ],
        explanation:
          "«Ceda el paso» obliga a reducir la velocidad y a ceder el paso a otros vehículos con preferencia, deteniéndose solo si es necesario. La diferencia con STOP: no exige parada completa siempre.",
        optionRationales: [
          "STOP siempre exige parar. Ceda solo si es necesario.",
          "",
          "Continuar sin cambiar velocidad puede obligar al otro a frenar — es la infracción típica del ceda mal ejecutado.",
          "El claxon no forma parte de la maniobra de ceder el paso.",
        ],
      },
      en: {
        text: "At a 'yield' sign, your duty is to…",
        options: [
          "Come to a full stop always, like STOP",
          "Slow down and yield; only stop if needed to avoid forcing the other driver to brake",
          "Just look and keep going without changing speed",
          "Honk before entering",
        ],
        explanation:
          "'Yield' means slow down and give way to others with priority, stopping only if needed. Difference from STOP: full stop is not always required.",
        optionRationales: [
          "STOP always requires a full stop. Yield only if needed.",
          "",
          "Keeping the same speed may force the other driver to brake — the typical yield-violation.",
          "The horn isn't part of the yield manoeuvre.",
        ],
      },
      ru: {
        text: "Перед знаком «уступите дорогу» твоя обязанность…",
        options: [
          "Полностью остановиться всегда, как на STOP",
          "Снизить скорость и уступить; останавливаться только если необходимо, чтобы не заставить другого тормозить",
          "Просто посмотреть и продолжить без изменения скорости",
          "Посигналить перед въездом",
        ],
        explanation:
          "«Уступите дорогу» — снизить скорость и уступить транспорту с преимуществом; остановка только если нужно. Отличие от STOP: полная остановка не всегда обязательна.",
        optionRationales: [
          "STOP всегда требует остановки. «Уступите» — только если нужно.",
          "",
          "Ехать той же скоростью — заставить другого тормозить, типичное нарушение.",
          "Клаксон не часть манёвра уступки.",
        ],
      },
    },
  },
  {
    id: "manual-t12-16",
    section: "priorities",
    correctIndex: 3,
    source: SOURCE,
    translations: {
      es: {
        text: "Un ciclista circula por un carril bici bien señalizado. Un turismo quiere cruzar el carril bici. ¿Quién tiene preferencia?",
        options: [
          "El turismo, porque es más grande",
          "El primero que llegue al cruce",
          "El turismo, porque va más rápido",
          "El ciclista, tiene preferencia en el carril bici",
        ],
        explanation:
          "Los ciclistas tienen preferencia cuando circulan por un carril bici, un paso para ciclistas o un arcén bien señalizado. Se debe ceder el paso al cruzar el carril bici.",
        optionRationales: [
          "El tamaño no da preferencia.",
          "El orden de llegada no importa cuando el ciclista está en su vía protegida.",
          "La velocidad no da preferencia; podría ser una infracción.",
          "",
        ],
      },
      en: {
        text: "A cyclist rides on a marked bike lane. A car wants to cross the bike lane. Who has priority?",
        options: [
          "The car, because it's bigger",
          "Whoever reaches the junction first",
          "The car, because it goes faster",
          "The cyclist, they have priority on the bike lane",
        ],
        explanation:
          "Cyclists have priority when riding on a bike lane, a cycle crossing or a properly marked shoulder. You yield when crossing the bike lane.",
        optionRationales: [
          "Size doesn't grant priority.",
          "Arrival order doesn't matter when the cyclist is on their protected lane.",
          "Speed doesn't grant priority; it may even be an offence.",
          "",
        ],
      },
      ru: {
        text: "Велосипедист едет по хорошо обозначенной велополосе. Легковой автомобиль хочет её пересечь. У кого преимущество?",
        options: [
          "У машины, потому что больше",
          "У того, кто первым подъехал",
          "У машины, потому что едет быстрее",
          "У велосипедиста — приоритет на велополосе",
        ],
        explanation:
          "У велосипедистов приоритет на велодорожке, пешеходно-велосипедном переходе или на выделенной обочине. При пересечении велополосы надо уступать.",
        optionRationales: [
          "Размер не даёт приоритета.",
          "Порядок подъезда не важен, когда велосипедист на своей защищённой полосе.",
          "Скорость не даёт приоритета; может быть нарушением.",
          "",
        ],
      },
    },
  },
  {
    id: "manual-t12-17",
    section: "priorities",
    correctIndex: 0,
    source: SOURCE,
    translations: {
      es: {
        text: "Un vehículo particular avisa con las luces de emergencia (4 intermitentes) y el claxon intermitente que está en un servicio urgente (por ejemplo, lleva un herido al hospital). ¿Tiene preferencia?",
        options: [
          "No tiene preferencia legal, pero los conductores deben facilitarle el paso si es posible; él sigue obligado a respetar las normas",
          "Sí, tiene la misma preferencia que una ambulancia",
          "No, es una falsa emergencia y hay que denunciarlo",
          "Solo si viste el chaleco reflectante",
        ],
        explanation:
          "Un particular que avisa de una urgencia (claxon intermitente, luces de emergencia, pañuelo blanco por la ventanilla) puede pedir paso, pero DEBE respetar las normas. La preferencia legal solo la tienen los vehículos preparados para emergencias con señales luminosas y acústicas activas.",
        optionRationales: [
          "",
          "No: la preferencia legal la reservan los vehículos oficiales de urgencia (policía, ambulancia, bomberos).",
          "No es «falsa»: el manual reconoce este uso — pero sin dar preferencia legal.",
          "El chaleco no cambia el estatus legal del vehículo.",
        ],
      },
      en: {
        text: "A private car signals urgency (4 hazards + intermittent horn), e.g. taking an injured person to hospital. Does it have priority?",
        options: [
          "No legal priority, but drivers should help if possible; the private car must still obey traffic rules",
          "Yes, same priority as an ambulance",
          "No — it's a fake emergency and should be reported",
          "Only if the driver wears a hi-vis vest",
        ],
        explanation:
          "A private driver signalling urgency (intermittent horn, hazards, white cloth out the window) can request passage but MUST obey the rules. Legal priority belongs only to emergency-equipped vehicles with active light and sound signals.",
        optionRationales: [
          "",
          "No: legal priority is reserved for official emergency vehicles (police, ambulance, fire).",
          "It's not 'fake': the manual recognises this signalling — just without granting legal priority.",
          "The vest doesn't change the legal status of the vehicle.",
        ],
      },
      ru: {
        text: "Частный автомобиль подаёт аварийку + прерывистый клаксон, срочно везёт раненого в больницу. Есть ли у него приоритет?",
        options: [
          "Юридического приоритета нет, но другие водители по возможности помогают ему; он сам обязан соблюдать правила",
          "Да, тот же приоритет, что и у скорой",
          "Нет, это ложная тревога, нужно жаловаться",
          "Только если водитель в светоотражающем жилете",
        ],
        explanation:
          "Частный водитель, сигналящий о срочности (прерывистый клаксон, аварийка, белый платок в окне), может просить проезда, но ОБЯЗАН соблюдать правила. Юридический приоритет — только у спецавтомобилей с активными маячками и сиреной.",
        optionRationales: [
          "",
          "Нет: юридический приоритет — только у официального спецтранспорта (полиция, скорая, пожарная).",
          "Это не «ложная тревога»: руководство признаёт такой сигнал — просто без юридического приоритета.",
          "Жилет не меняет юридический статус автомобиля.",
        ],
      },
    },
  },
];
