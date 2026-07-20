import type { Question } from "@/lib/types";

// DGT Manual Permiso B (Lectura Fácil, 2024), Tema 4 — Obligaciones.

const SOURCE = "DGT Manual Permiso B (Lectura Fácil, 2024), Tema 4";

export const QUESTIONS_MANUAL_T4: Question[] = [
  {
    id: "manual-t4-01",
    section: "others",
    correctIndex: 2,
    source: SOURCE,
    translations: {
      es: {
        text: "¿Qué está prohibido para el conductor?",
        options: [
          "Beber agua",
          "Ajustar el volumen de la radio con manos libres",
          "Usar auriculares conectados al móvil o para escuchar música",
          "Hablar con un pasajero",
        ],
        explanation:
          "Usar auriculares conectados al móvil o a cualquier aparato de sonido está prohibido. Solo se permiten auriculares específicos en el casco de motocicletas cuando funcionan como navegador GPS.",
        optionRationales: [
          "Beber agua no está prohibido por sí mismo, aunque no distraiga.",
          "Ajustar el volumen no es la infracción; la infracción son los auriculares o el móvil sujeto con la mano.",
          "",
          "Hablar con un pasajero no está prohibido si no supone distracción.",
        ],
      },
      en: {
        text: "Which of these is forbidden for the driver?",
        options: [
          "Drinking water",
          "Adjusting the radio volume hands-free",
          "Using headphones connected to a phone or music player",
          "Talking to a passenger",
        ],
        explanation:
          "Headphones connected to a phone or music device are forbidden. Only specific in-helmet headphones on motorcycles are allowed, and only as GPS navigators.",
        optionRationales: [
          "Drinking water isn't forbidden as long as it doesn't distract.",
          "Adjusting the volume isn't the offence; hand-held phone or headphones are.",
          "",
          "Talking to a passenger isn't forbidden unless it becomes a distraction.",
        ],
      },
      ru: {
        text: "Что запрещено водителю?",
        options: [
          "Пить воду",
          "Регулировать громкость радио через громкую связь",
          "Использовать наушники, подключённые к телефону или для музыки",
          "Разговаривать с пассажиром",
        ],
        explanation:
          "Наушники, подключённые к телефону или аудиоустройству, запрещены. Разрешены только специальные наушники в шлеме мотоциклиста, работающие как GPS-навигатор.",
        optionRationales: [
          "Пить воду само по себе не запрещено, если не отвлекает.",
          "Регулировка громкости не нарушение; нарушение — держать телефон в руке или наушники.",
          "",
          "Разговор с пассажиром не запрещён, если не отвлекает.",
        ],
      },
    },
  },
  {
    id: "manual-t4-02",
    section: "others",
    correctIndex: 3,
    source: SOURCE,
    translations: {
      es: {
        text: "Al echar combustible al vehículo…",
        options: [
          "El motor debe estar encendido",
          "La radio y las luces pueden seguir funcionando",
          "Se puede fumar cerca",
          "El motor, las luces y la radio deben estar apagados o desconectados",
        ],
        explanation:
          "Para echar combustible, todo debe estar apagado o desconectado: motor, luces y radio. El combustible es inflamable y una chispa puede provocar un incendio.",
        optionRationales: [
          "Con el motor encendido hay chispas y calor: riesgo de incendio con vapor de combustible.",
          "También la radio y las luces deben apagarse, no solo el motor.",
          "Fumar cerca del combustible es prohibido y muy peligroso.",
          "",
        ],
      },
      en: {
        text: "When refuelling the vehicle…",
        options: [
          "The engine may stay on",
          "The radio and lights may keep running",
          "You can smoke nearby",
          "Engine, lights and radio must all be off / disconnected",
        ],
        explanation:
          "When refuelling everything must be off: engine, lights and radio. Fuel vapours are flammable and a single spark can start a fire.",
        optionRationales: [
          "A running engine produces sparks and heat: fire risk with fuel vapours.",
          "Radio and lights also need to be off, not just the engine.",
          "Smoking near fuel is forbidden and extremely dangerous.",
          "",
        ],
      },
      ru: {
        text: "При заправке автомобиля…",
        options: [
          "Двигатель может работать",
          "Радио и фары могут оставаться включёнными",
          "Можно курить рядом",
          "Двигатель, фары и радио должны быть выключены/отключены",
        ],
        explanation:
          "При заправке всё должно быть выключено: двигатель, фары и радио. Пары топлива легко воспламеняются, искра — пожар.",
        optionRationales: [
          "При работающем двигателе есть искры и тепло — опасность возгорания паров.",
          "Радио и фары тоже надо выключить, не только двигатель.",
          "Курение возле топлива запрещено и крайне опасно.",
          "",
        ],
      },
    },
  },
  {
    id: "manual-t4-03",
    section: "others",
    correctIndex: 0,
    source: SOURCE,
    translations: {
      es: {
        text: "En bicicleta de noche o con poca visibilidad, tu ropa o elemento reflectante debe ser visible desde…",
        options: ["150 metros", "50 metros", "300 metros", "10 metros"],
        explanation:
          "El manual exige llevar una prenda o elemento brillante que se vea desde 150 metros. Esta obligación es igual para el conductor y para el pasajero.",
        optionRationales: [
          "",
          "50 metros es demasiado corto para la velocidad de un vehículo motor.",
          "300 metros supera el mínimo exigido por el manual.",
          "10 metros no ofrece tiempo de reacción; el mínimo son 150.",
        ],
      },
      en: {
        text: "On a bicycle at night or in poor visibility, your reflective clothing/item must be visible from…",
        options: ["150 metres", "50 metres", "300 metres", "10 metres"],
        explanation:
          "The manual requires reflective clothing or an item visible from 150 metres. This applies to both the rider and any passenger.",
        optionRationales: [
          "",
          "50 metres is too short for a motor vehicle's stopping distance.",
          "300 metres exceeds the manual's requirement.",
          "10 metres leaves no reaction time; the minimum is 150.",
        ],
      },
      ru: {
        text: "На велосипеде ночью или в плохой видимости светоотражающая одежда/предмет должны быть видны с расстояния…",
        options: ["150 метров", "50 метров", "300 метров", "10 метров"],
        explanation:
          "Руководство требует, чтобы светоотражающий элемент был виден с 150 метров. Требование распространяется и на пассажира.",
        optionRationales: [
          "",
          "50 м слишком мало для тормозного пути автомобиля.",
          "300 м превышает требование руководства.",
          "10 м не даёт времени на реакцию; минимум — 150.",
        ],
      },
    },
  },
  {
    id: "manual-t4-04",
    section: "others",
    correctIndex: 1,
    source: SOURCE,
    translations: {
      es: {
        text: "La velocidad máxima de un vehículo especial que hace obras es…",
        options: ["25 km/h", "40 km/h", "60 km/h", "80 km/h"],
        explanation:
          "Los vehículos especiales que hacen obras o servicios de conservación circulan con luz amarilla encendida y a un máximo de 40 km/h.",
        optionRationales: [
          "25 km/h es demasiado bajo; el manual fija 40.",
          "",
          "60 km/h excede el máximo permitido para vehículos especiales en obras.",
          "80 km/h no aplica a vehículos especiales; corresponde a otros tipos.",
        ],
      },
      en: {
        text: "The maximum speed of a special vehicle doing roadworks is…",
        options: ["25 km/h", "40 km/h", "60 km/h", "80 km/h"],
        explanation:
          "Special vehicles doing works or maintenance circulate with a yellow warning light on and at a max of 40 km/h.",
        optionRationales: [
          "25 km/h is too low; the manual sets 40.",
          "",
          "60 km/h exceeds the max for special vehicles on works.",
          "80 km/h doesn't apply to special vehicles; it's for other types.",
        ],
      },
      ru: {
        text: "Максимальная скорость спецавтомобиля на дорожных работах…",
        options: ["25 км/ч", "40 км/ч", "60 км/ч", "80 км/ч"],
        explanation:
          "Спецавтомобили на работах/обслуживании двигаются с включённым жёлтым проблесковым и с максимумом 40 км/ч.",
        optionRationales: [
          "25 км/ч слишком мало; руководство — 40.",
          "",
          "60 км/ч превышает лимит спецтранспорта на работах.",
          "80 км/ч не относится к спецтранспорту; это лимит других категорий.",
        ],
      },
    },
  },
  {
    id: "manual-t4-05",
    section: "others",
    correctIndex: 2,
    source: SOURCE,
    translations: {
      es: {
        text: "Fuera de poblado, un peatón debe andar por…",
        options: [
          "El centro de la calzada",
          "La derecha, como en la ciudad",
          "La izquierda, salvo que sea más seguro la derecha",
          "El arcén de cualquier lado",
        ],
        explanation:
          "Fuera de pueblos y ciudades el peatón camina por la izquierda de la carretera, salvo que sea más seguro andar por la derecha. Así ve a los vehículos que se aproximan.",
        optionRationales: [
          "Nunca se camina por el centro de la calzada.",
          "En ciudad se anda por la acera; fuera del pueblo la regla es la izquierda.",
          "",
          "Ir por cualquier lado no es correcto; hay una regla clara con excepciones.",
        ],
      },
      en: {
        text: "Outside built-up areas, a pedestrian must walk on…",
        options: [
          "The middle of the road",
          "The right side, like in a city",
          "The left side, unless the right is safer",
          "Either shoulder, freely",
        ],
        explanation:
          "Outside towns pedestrians walk on the LEFT of the road unless the right is safer. That way you can see approaching vehicles.",
        optionRationales: [
          "You never walk in the middle of the road.",
          "In town you walk on the pavement; outside town the rule is the left.",
          "",
          "'Either side' is wrong; there's a clear rule with an exception.",
        ],
      },
      ru: {
        text: "За пределами населённого пункта пешеход должен идти…",
        options: [
          "По центру проезжей части",
          "По правой стороне, как в городе",
          "По левой стороне (если справа не безопаснее)",
          "По любой обочине на выбор",
        ],
        explanation:
          "За городом пешеход идёт по ЛЕВОЙ стороне, кроме случаев, когда справа безопаснее. Так видно приближающиеся машины.",
        optionRationales: [
          "По центру проезжей части ходить нельзя.",
          "В городе идут по тротуару; за городом правило — левая сторона.",
          "",
          "«По любой обочине» неверно — есть чёткое правило с исключением.",
        ],
      },
    },
  },
  {
    id: "manual-t4-06",
    section: "others",
    correctIndex: 3,
    source: SOURCE,
    translations: {
      es: {
        text: "Un grupo de peatones andando de noche en fila. ¿Qué luces deben llevar?",
        options: [
          "Ninguna, deben ir juntos y en silencio",
          "Todos con luz roja",
          "El primero con luz roja, el último con luz blanca",
          "El primero con luz blanca o amarilla, el último con luz roja",
        ],
        explanation:
          "En fila: la persona de delante lleva luz blanca o amarilla, la de detrás lleva luz roja. Así los conductores saben dónde empieza y acaba el grupo.",
        optionRationales: [
          "Ir sin luz en carretera de noche es infracción y muy peligroso.",
          "Todo rojo confunde: no se distingue delante/detrás.",
          "Colores invertidos: rojo va detrás, no delante.",
          "",
        ],
      },
      en: {
        text: "A group of pedestrians walking single-file at night. Which lights?",
        options: [
          "None, just walk together quietly",
          "All carry a red light",
          "Front person red, last person white",
          "Front person white or yellow, last person red",
        ],
        explanation:
          "Single file: front person carries white or yellow, last person carries red. That way drivers see where the group starts and ends.",
        optionRationales: [
          "No light at night on the road is an offence and very unsafe.",
          "All-red confuses drivers: they can't tell front from back.",
          "Colours reversed: red goes at the back, not the front.",
          "",
        ],
      },
      ru: {
        text: "Группа пешеходов идёт в колонну ночью. Какие огни?",
        options: [
          "Никаких, просто идти вместе",
          "У всех — красный огонь",
          "У переднего красный, у заднего белый",
          "У переднего белый или жёлтый, у заднего красный",
        ],
        explanation:
          "В колонне: у переднего — белый или жёлтый, у заднего — красный. Так водители видят, где начало и конец группы.",
        optionRationales: [
          "Ночью на дороге без огней — нарушение и очень опасно.",
          "Все красные путают: не отличить перёд от зада.",
          "Цвета перепутаны: красный — сзади, а не спереди.",
          "",
        ],
      },
    },
  },
  {
    id: "manual-t4-07",
    section: "others",
    correctIndex: 0,
    source: SOURCE,
    translations: {
      es: {
        text: "Los vehículos de movilidad personal (patinete eléctrico, monociclo…) NO pueden circular por…",
        options: [
          "Aceras, túneles, travesías, autopistas, autovías ni carreteras interurbanas",
          "Solo por autopistas",
          "Solo por aceras",
          "Solo por túneles",
        ],
        explanation:
          "Los VMP tienen prohibida la circulación por: aceras, zonas peatonales, túneles, travesías, autopistas, autovías y carreteras que están fuera del pueblo o ciudad.",
        optionRationales: [
          "",
          "Es una prohibición amplia, no limitada solo a autopistas.",
          "Igual: la lista es más larga; también aceras están prohibidas.",
          "Los túneles son solo uno de los lugares donde está prohibida la circulación.",
        ],
      },
      en: {
        text: "Personal mobility vehicles (e-scooters, unicycles…) CANNOT ride on…",
        options: [
          "Pavements, tunnels, through-roads, motorways, dual carriageways or interurban roads",
          "Only motorways",
          "Only pavements",
          "Only tunnels",
        ],
        explanation:
          "PMVs are forbidden on: pavements, pedestrian zones, tunnels, through-roads, motorways, dual carriageways, and roads outside towns.",
        optionRationales: [
          "",
          "It's a broad prohibition, not just motorways.",
          "Same — the list is longer than just pavements.",
          "Tunnels are one of several forbidden places, not the only one.",
        ],
      },
      ru: {
        text: "Средства персональной мобильности (электросамокаты, моноколёса и т.п.) НЕ могут ездить по…",
        options: [
          "Тротуарам, тоннелям, travesías, автомагистралям, скоростным дорогам и загородным дорогам",
          "Только по автомагистралям",
          "Только по тротуарам",
          "Только по тоннелям",
        ],
        explanation:
          "СИМ запрещены на: тротуарах, пешеходных зонах, в тоннелях, на travesías, автомагистралях, скоростных автодорогах и на дорогах за городом.",
        optionRationales: [
          "",
          "Это широкий запрет, не только автомагистрали.",
          "Аналогично — список шире, тротуары лишь один из пунктов.",
          "Тоннели — лишь один из запрещённых мест, не единственный.",
        ],
      },
    },
  },
  {
    id: "manual-t4-08",
    section: "others",
    correctIndex: 2,
    source: SOURCE,
    translations: {
      es: {
        text: "Los animales en la carretera SIEMPRE deben ir guiados por…",
        options: [
          "Un menor con supervisión",
          "Un perro pastor entrenado",
          "Una persona mayor de 18 años",
          "Nadie, si van en manada",
        ],
        explanation:
          "El ganado y los animales que transportan personas o cargas siempre los debe guiar una persona mayor de 18 años. Ningún animal puede circular por autopistas o autovías.",
        optionRationales: [
          "Un menor no está autorizado a guiar animales por la carretera.",
          "El manual exige una persona mayor de edad, no un animal.",
          "",
          "Aunque sea manada, alguien debe guiarla; la responsabilidad es de una persona.",
        ],
      },
      en: {
        text: "Animals on the road must ALWAYS be guided by…",
        options: [
          "A minor under supervision",
          "A trained sheepdog",
          "A person over 18",
          "No one, if they travel as a herd",
        ],
        explanation:
          "Livestock and pack/load animals must always be guided by a person over 18. No animal may travel on motorways or dual carriageways.",
        optionRationales: [
          "A minor isn't authorised to guide animals on the road.",
          "The manual requires an adult person, not an animal.",
          "",
          "Even a herd needs a human guide; responsibility lies with a person.",
        ],
      },
      ru: {
        text: "Животных на дороге ВСЕГДА должен сопровождать…",
        options: [
          "Несовершеннолетний под присмотром",
          "Обученная пастушья собака",
          "Совершеннолетний (старше 18 лет)",
          "Никто, если они идут стадом",
        ],
        explanation:
          "Скот и вьючных животных всегда должен сопровождать взрослый человек (старше 18 лет). Ни одно животное не может двигаться по автомагистрали.",
        optionRationales: [
          "Несовершеннолетний не имеет права сопровождать животных на дороге.",
          "Требуется взрослый человек, а не животное.",
          "",
          "Даже стаду нужен человек-сопровождающий; ответственность на нём.",
        ],
      },
    },
  },
  {
    id: "manual-t4-09",
    section: "others",
    correctIndex: 1,
    source: SOURCE,
    translations: {
      es: {
        text: "Al abrir la puerta del vehículo después de aparcar, debes…",
        options: [
          "Abrirla de golpe para bajar rápido",
          "Asegurarte de que no hay peligro para otros (ciclistas, peatones, tráfico)",
          "Abrirla solo del lado del conductor",
          "Bajar sin mirar si vas con prisa",
        ],
        explanation:
          "Está prohibido abrir la puerta antes de asegurarse de que no hay peligro. Un ciclista o motocicleta puede pasar en ese momento; abrir sin mirar provoca accidentes.",
        optionRationales: [
          "Abrir de golpe es peligroso: el «dooring» (choque con ciclista) es un accidente clásico.",
          "",
          "La regla vale para todas las puertas, no solo la del conductor.",
          "Bajar sin mirar es exactamente lo que la norma prohíbe.",
        ],
      },
      en: {
        text: "When opening the door after parking you must…",
        options: [
          "Fling it open to get out quickly",
          "Check there's no danger to others (cyclists, pedestrians, traffic)",
          "Only open the driver's door",
          "Just get out fast if you're in a hurry",
        ],
        explanation:
          "It's forbidden to open the door before checking there's no danger. A cyclist or motorcyclist can be passing; opening blind causes classic 'dooring' crashes.",
        optionRationales: [
          "Flinging the door is dangerous — 'dooring' a cyclist is a common crash.",
          "",
          "The rule applies to all doors, not just the driver's.",
          "Getting out without looking is exactly what the rule forbids.",
        ],
      },
      ru: {
        text: "Открывая дверь после парковки, водитель должен…",
        options: [
          "Резко открыть её, чтобы быстро выйти",
          "Убедиться, что нет опасности для других (велосипедистов, пешеходов, транспорта)",
          "Открывать только водительскую дверь",
          "Выйти не глядя, если торопится",
        ],
        explanation:
          "Открывать дверь, не убедившись в безопасности, запрещено. Мимо может проезжать велосипедист или мотоцикл — классическое ДТП «dooring».",
        optionRationales: [
          "Резко открытая дверь опасна: «dooring» — типичное ДТП с велосипедистом.",
          "",
          "Правило распространяется на все двери, не только водительскую.",
          "Выходить не глядя — именно то, что запрещено.",
        ],
      },
    },
  },
  {
    id: "manual-t4-10",
    section: "others",
    correctIndex: 3,
    source: SOURCE,
    translations: {
      es: {
        text: "En un paso de peatones, ¿cómo debe cruzar el peatón?",
        options: [
          "Corriendo, sin mirar",
          "Rodeando la calzada",
          "En zigzag para evitar coches",
          "En línea recta y sin pararse, tras asegurarse de que los coches han parado o vienen despacio",
        ],
        explanation:
          "Se cruza en línea recta y sin pararse. Antes de empezar, asegúrate de que los coches se han detenido o se acercan despacio.",
        optionRationales: [
          "Correr sin mirar es exactamente lo que provoca atropellos.",
          "«Rodear» aplica a rotondas/plazas, no a un paso de peatones.",
          "El zigzag desconcierta a los conductores y aumenta el riesgo.",
          "",
        ],
      },
      en: {
        text: "At a pedestrian crossing, how should the pedestrian cross?",
        options: [
          "Running, without looking",
          "By going around the roadway",
          "Zig-zagging to avoid cars",
          "Straight across, without stopping, after confirming cars have stopped or are approaching slowly",
        ],
        explanation:
          "Cross in a straight line without stopping. Before starting, confirm cars have stopped or are approaching slowly.",
        optionRationales: [
          "Running blind is exactly what causes pedestrian crashes.",
          "'Going around' applies to roundabouts, not a zebra crossing.",
          "Zig-zagging confuses drivers and raises risk.",
          "",
        ],
      },
      ru: {
        text: "На пешеходном переходе пешеход должен переходить…",
        options: [
          "Бегом, не глядя",
          "Обходя проезжую часть по кругу",
          "Зигзагом, чтобы уворачиваться от машин",
          "По прямой без остановок, убедившись, что машины остановились или едут медленно",
        ],
        explanation:
          "Переходят по прямой, не останавливаясь. Перед началом убедитесь, что машины остановились или медленно приближаются.",
        optionRationales: [
          "Бег вслепую — типичная причина наездов на пешехода.",
          "«Обходить» — это про круговые перекрёстки, не про зебру.",
          "Зигзаг сбивает с толку водителей и повышает риск.",
          "",
        ],
      },
    },
  },
];
