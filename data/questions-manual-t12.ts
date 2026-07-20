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
      },
    },
  },
];
