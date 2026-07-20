import type { Question } from "@/lib/types";

// DGT Manual Permiso B (Lectura Fácil, 2024), Tema 13 — Transportar personas y cargas.

const SOURCE = "DGT Manual Permiso B (Lectura Fácil, 2024), Tema 13";

export const QUESTIONS_MANUAL_T13: Question[] = [
  {
    id: "manual-t13-01",
    section: "others",
    correctIndex: 2,
    source: SOURCE,
    translations: {
      es: {
        text: "¿Cuál es la anchura máxima permitida para un vehículo, incluida su carga?",
        options: ["2,00 m", "2,20 m", "2,55 m", "3,00 m"],
        explanation:
          "La anchura máxima permitida para un vehículo, incluida la carga, es 2,55 metros. Esto vale para cualquier turismo, furgoneta o camión ordinario.",
        optionRationales: [
          "2,00 m es demasiado restrictivo; el máximo real es 2,55.",
          "2,20 m no es una medida oficial del manual.",
          "",
          "3,00 m supera el límite reglamentario; los vehículos de más ancho requieren autorización especial.",
        ],
      },
      en: {
        text: "What is the maximum allowed width for a vehicle, including its load?",
        options: ["2.00 m", "2.20 m", "2.55 m", "3.00 m"],
        explanation:
          "Maximum vehicle width including cargo is 2.55 m. Applies to any regular car, van or lorry.",
        optionRationales: [
          "2.00 m is too restrictive; the actual max is 2.55.",
          "2.20 m isn't an official manual figure.",
          "",
          "3.00 m exceeds the limit; wider vehicles require special authorisation.",
        ],
      },
      ru: {
        text: "Максимальная разрешённая ширина автомобиля с грузом?",
        options: ["2,00 м", "2,20 м", "2,55 м", "3,00 м"],
        explanation:
          "Максимальная ширина ТС с грузом — 2,55 м. Действует для любых легковых, фургонов и обычных грузовиков.",
        optionRationales: [
          "2,00 м слишком мало; реальный максимум — 2,55.",
          "2,20 м — не официальный лимит.",
          "",
          "3,00 м превышает регламент; шире — только со спецразрешением.",
        ],
      },
    },
  },
  {
    id: "manual-t13-02",
    section: "others",
    correctIndex: 1,
    source: SOURCE,
    translations: {
      es: {
        text: "En un turismo, la altura máxima permitida (incluida la carga) es…",
        options: ["3,50 m", "4,00 m", "4,50 m", "5,00 m"],
        explanation:
          "Vehículos en general: 4 m. Autobuses: 4,20 m. Grúas que retiran vehículos: 4,50 m. Un turismo entra en «general».",
        optionRationales: [
          "3,50 m es demasiado restrictivo; el general es 4 m.",
          "",
          "4,50 m es el límite de las grúas que retiran vehículos, no de un turismo.",
          "5,00 m no es un límite oficial.",
        ],
      },
      en: {
        text: "For a car, the maximum allowed height including cargo is…",
        options: ["3.50 m", "4.00 m", "4.50 m", "5.00 m"],
        explanation:
          "General vehicles: 4 m. Buses: 4.20 m. Recovery cranes: 4.50 m. A car falls under 'general'.",
        optionRationales: [
          "3.50 m is too restrictive; the general limit is 4 m.",
          "",
          "4.50 m is the crane limit, not a car limit.",
          "5.00 m isn't an official limit.",
        ],
      },
      ru: {
        text: "Максимальная высота легкового авто с грузом?",
        options: ["3,50 м", "4,00 м", "4,50 м", "5,00 м"],
        explanation:
          "Общий лимит для ТС — 4 м. Автобусы — 4,20 м. Эвакуаторы — 4,50 м. Легковой попадает в «общий».",
        optionRationales: [
          "3,50 м слишком мало; общий лимит — 4 м.",
          "",
          "4,50 м — это лимит эвакуаторов, а не легковых.",
          "5,00 м не является официальным лимитом.",
        ],
      },
    },
  },
  {
    id: "manual-t13-03",
    section: "others",
    correctIndex: 3,
    source: SOURCE,
    translations: {
      es: {
        text: "En un turismo con cinco asientos pueden viajar…",
        options: [
          "Seis personas si una va sentada en el suelo",
          "Siete si son niños",
          "Cualquier número si todos llevan cinturón",
          "Cinco personas, una por asiento",
        ],
        explanation:
          "El número de pasajeros es igual al número de asientos del vehículo. Cinco asientos = máximo cinco personas.",
        optionRationales: [
          "Nadie puede viajar en el suelo del vehículo; cada persona debe ocupar un asiento.",
          "Los niños también cuentan como pasajeros y necesitan su asiento (con SRI si corresponde).",
          "El cinturón no permite pasajeros extra; el límite es por asiento.",
          "",
        ],
      },
      en: {
        text: "In a 5-seat car, how many people may travel?",
        options: [
          "Six if one sits on the floor",
          "Seven if they're children",
          "Any number if all wear seatbelts",
          "Five people — one per seat",
        ],
        explanation:
          "The number of passengers equals the number of seats. Five seats = maximum five people.",
        optionRationales: [
          "No one may travel on the floor; each person needs a seat.",
          "Children count as passengers too and need their own seat (with CRS if applicable).",
          "Wearing seatbelts doesn't allow extra passengers; the limit is by seat.",
          "",
        ],
      },
      ru: {
        text: "В легковом автомобиле с 5 сиденьями могут ехать…",
        options: [
          "Шестеро, если один сидит на полу",
          "Семеро, если это дети",
          "Сколько угодно, если все пристёгнуты",
          "Пятеро — по одному на сиденье",
        ],
        explanation:
          "Число пассажиров = число сидений. 5 сидений — максимум 5 человек.",
        optionRationales: [
          "На полу автомобиля никто не ездит; у каждого своё сиденье.",
          "Дети тоже считаются пассажирами и должны иметь сиденье (с ДУУ, если положено).",
          "Ремни не разрешают лишних пассажиров; лимит — по числу сидений.",
          "",
        ],
      },
    },
  },
  {
    id: "manual-t13-04",
    section: "others",
    correctIndex: 0,
    source: SOURCE,
    translations: {
      es: {
        text: "Un adulto en bicicleta puede llevar como pasajero…",
        options: [
          "Un niño menor de 7 años en un asiento adicional homologado detrás",
          "Un adulto en la barra",
          "Dos niños, uno delante y uno detrás",
          "Nadie, siempre viaja solo",
        ],
        explanation:
          "En bicicletas para una persona solo viaja el conductor. Excepción: un adulto puede llevar a un niño menor de 7 años en un asiento homologado detrás del asiento del adulto.",
        optionRationales: [
          "",
          "Nunca se lleva a un adulto de pasajero en una bicicleta para una persona.",
          "Solo se admite un niño menor de 7 años, no dos.",
          "«Nadie» ignora la excepción del niño menor de 7 en asiento homologado.",
        ],
      },
      en: {
        text: "On a bicycle, an adult may carry as passenger…",
        options: [
          "A child under 7 in an approved rear child seat",
          "Another adult on the crossbar",
          "Two children, one front and one back",
          "No one — always solo",
        ],
        explanation:
          "On a single-rider bike only the rider goes. Exception: an adult may carry a child under 7 in an approved seat mounted behind the adult.",
        optionRationales: [
          "",
          "You never carry another adult as passenger on a single-rider bike.",
          "Only ONE child under 7 is allowed, not two.",
          "'No one' misses the child-under-7 exception.",
        ],
      },
      ru: {
        text: "На велосипеде взрослый может везти пассажиром…",
        options: [
          "Ребёнка до 7 лет в сертифицированном заднем детском кресле",
          "Взрослого на раме",
          "Двух детей — спереди и сзади",
          "Никого — всегда только один",
        ],
        explanation:
          "На одноместном велосипеде едет только водитель. Исключение: взрослый может везти ребёнка до 7 лет в сертифицированном кресле сзади.",
        optionRationales: [
          "",
          "Взрослого пассажира на одноместном велосипеде не возят.",
          "Разрешён только ОДИН ребёнок до 7 лет, а не двое.",
          "«Никого» игнорирует исключение для ребёнка до 7 лет.",
        ],
      },
    },
  },
  {
    id: "manual-t13-05",
    section: "others",
    correctIndex: 1,
    source: SOURCE,
    translations: {
      es: {
        text: "En una motocicleta puede viajar un pasajero cuando…",
        options: [
          "Tiene más de 5 años",
          "Tiene más de 12 años, se sienta detrás, coloca los pies en los reposapiés y lleva casco",
          "Tiene cualquier edad si va en brazos del conductor",
          "Tiene más de 18 años",
        ],
        explanation:
          "El pasajero de una moto debe: tener más de 12 años, sentarse detrás, colocar los pies en los reposapiés y llevar el casco. Excepción: niños desde 7 con un padre responsable y todas las medidas de seguridad.",
        optionRationales: [
          "5 años es demasiado joven en la norma general; la excepción es desde 7 con padre responsable.",
          "",
          "En brazos nunca; el pasajero debe sentarse correctamente detrás.",
          "El manual pide «más de 12», no «más de 18»; 18 no es el criterio.",
        ],
      },
      en: {
        text: "A passenger can ride pillion on a motorcycle when they…",
        options: [
          "Are over 5",
          "Are over 12, sit behind, use foot-pegs, wear a helmet",
          "Any age if held in the rider's arms",
          "Are over 18",
        ],
        explanation:
          "Motorcycle passengers must be over 12, sit behind, use foot-pegs and wear a helmet. Exception: children from 7 with a responsible parent and full safety measures.",
        optionRationales: [
          "5 is too young in general; the exception is from 7 with a responsible parent.",
          "",
          "Never in someone's arms; the passenger must sit correctly behind.",
          "The manual says over 12, not over 18.",
        ],
      },
      ru: {
        text: "Пассажир может ехать на мотоцикле, если он…",
        options: [
          "Старше 5 лет",
          "Старше 12 лет, сидит сзади, ставит ноги на подножки и в шлеме",
          "Любого возраста, если на руках у водителя",
          "Старше 18 лет",
        ],
        explanation:
          "Пассажир мотоцикла: старше 12, сидит сзади, ноги на подножках, в шлеме. Исключение: дети с 7 лет — с ответственным взрослым и всеми мерами безопасности.",
        optionRationales: [
          "5 лет — слишком мало по общему правилу; исключение — с 7 лет и с взрослым.",
          "",
          "Никогда на руках; пассажир сидит правильно сзади.",
          "Руководство говорит «старше 12», а не «старше 18».",
        ],
      },
    },
  },
  {
    id: "manual-t13-06",
    section: "others",
    correctIndex: 2,
    source: SOURCE,
    translations: {
      es: {
        text: "Los animales dentro del vehículo…",
        options: [
          "Pueden ir sueltos por el vehículo",
          "Deben viajar en el asiento del conductor",
          "Deben viajar detrás y sujetos al asiento, con malla separadora si es posible",
          "Deben viajar en el capó",
        ],
        explanation:
          "Los animales viajan atrás y sujetos al asiento. Cuando sea posible, se coloca una malla separadora entre la zona del animal y la del conductor.",
        optionRationales: [
          "Los animales nunca pueden ir sueltos; suponen distracción y riesgo en un frenazo.",
          "En el asiento del conductor jamás — el conductor necesita libertad de movimientos.",
          "",
          "El capó no es lugar para transportar animales; es una imagen absurda pero típica trampa.",
        ],
      },
      en: {
        text: "Animals inside a vehicle…",
        options: [
          "May roam freely inside",
          "Must travel on the driver's seat",
          "Must travel in the back, restrained, with a mesh divider when possible",
          "Must travel on the bonnet",
        ],
        explanation:
          "Animals travel in the back, restrained to the seat, ideally with a mesh divider between the animal zone and the driver.",
        optionRationales: [
          "Animals must never roam free; distraction and hard-braking risk.",
          "Never on the driver's seat — the driver needs freedom of movement.",
          "",
          "The bonnet is obviously not a place for animals; the classic absurd distractor.",
        ],
      },
      ru: {
        text: "Животные в автомобиле…",
        options: [
          "Могут свободно перемещаться по салону",
          "Должны ехать на месте водителя",
          "Должны ехать сзади и быть закреплены, желательно с сетчатой перегородкой",
          "Должны ехать на капоте",
        ],
        explanation:
          "Животные едут сзади, пристёгнутые к сиденью. По возможности — сетка-перегородка между зоной животного и водителя.",
        optionRationales: [
          "Свободно перемещаться нельзя: отвлекает и опасно при торможении.",
          "На месте водителя — никогда, водителю нужна свобода движений.",
          "",
          "На капоте — абсурд, но типичный ложный вариант в тестах.",
        ],
      },
    },
  },
  {
    id: "manual-t13-07",
    section: "others",
    correctIndex: 3,
    source: SOURCE,
    translations: {
      es: {
        text: "Está PROHIBIDO que la carga transportada…",
        options: [
          "Vaya bien sujeta",
          "Esté cubierta con una lona",
          "Vaya en el portamaletas",
          "Se mueva, se caiga, se arrastre o produzca ruido/polvo/humo",
        ],
        explanation:
          "La carga no puede moverse por el vehículo, caerse, arrastrarse por la carretera ni producir ruido, polvo o humo. Debe ir bien sujeta y no molestar a otros usuarios.",
        optionRationales: [
          "Ir bien sujeta es exactamente lo que se pide, no lo prohibido.",
          "Una lona ayuda a proteger la carga; no está prohibida.",
          "El portamaletas es el lugar correcto para la carga.",
          "",
        ],
      },
      en: {
        text: "It is FORBIDDEN for the transported cargo to…",
        options: [
          "Be securely strapped",
          "Be covered with a tarp",
          "Sit in the boot",
          "Shift, fall, drag on the road or produce noise/dust/smoke",
        ],
        explanation:
          "Cargo must not move inside the vehicle, fall out, drag on the road, or produce noise/dust/smoke. It must be secured and not disturb other road users.",
        optionRationales: [
          "Securely strapped is what the rule requires, not what it forbids.",
          "A tarp actually helps protect the load; not forbidden.",
          "The boot is the correct place for cargo.",
          "",
        ],
      },
      ru: {
        text: "Перевозимому грузу ЗАПРЕЩЕНО…",
        options: [
          "Быть надёжно закреплённым",
          "Быть накрытым тентом",
          "Находиться в багажнике",
          "Смещаться, падать, волочиться, шуметь / пылить / дымить",
        ],
        explanation:
          "Груз не может смещаться в машине, падать, волочиться по дороге, шуметь, пылить или дымить. Должен быть закреплён и не мешать другим.",
        optionRationales: [
          "Надёжное крепление — это требование, а не запрет.",
          "Тент только помогает; не запрещено.",
          "Багажник — правильное место для груза.",
          "",
        ],
      },
    },
  },
  {
    id: "manual-t13-08",
    section: "others",
    correctIndex: 1,
    source: SOURCE,
    translations: {
      es: {
        text: "En un vehículo de menos de 5 m de largo, ¿cuánto puede sobresalir una carga indivisible por delante y por detrás?",
        options: [
          "Hasta 2 m por cada lado",
          "Hasta 1/3 de la longitud del vehículo",
          "50 % de la longitud del vehículo",
          "Nada; nunca puede sobresalir",
        ],
        explanation:
          "En vehículos ≤ 5 m que llevan cargas indivisibles, la carga puede sobresalir hasta 1/3 de la longitud del vehículo (por delante o por detrás). Si el vehículo mide 3 m, puede sobresalir 1 m.",
        optionRationales: [
          "2 m por lado corresponde a vehículos > 5 m, no a los ≤ 5 m.",
          "",
          "50 % es demasiado; el máximo es 1/3 (33 %).",
          "Sí puede sobresalir en cargas indivisibles cumpliendo las medidas.",
        ],
      },
      en: {
        text: "On a vehicle under 5 m long, how far may an indivisible load overhang front or rear?",
        options: [
          "Up to 2 m each end",
          "Up to 1/3 of the vehicle's length",
          "50 % of the vehicle's length",
          "Not at all",
        ],
        explanation:
          "For vehicles ≤ 5 m carrying indivisible loads, overhang up to 1/3 of the vehicle length (front or rear). A 3 m vehicle can overhang 1 m.",
        optionRationales: [
          "2 m per end applies to vehicles > 5 m, not ≤ 5 m.",
          "",
          "50 % is too much; the max is 1/3 (about 33 %).",
          "Overhang IS allowed for indivisible loads within the limits.",
        ],
      },
      ru: {
        text: "У автомобиля до 5 м длиной насколько может выступать неделимый груз спереди и сзади?",
        options: [
          "До 2 м с каждой стороны",
          "До 1/3 длины автомобиля",
          "50 % длины автомобиля",
          "Никак — совсем не может",
        ],
        explanation:
          "Для ТС ≤ 5 м с неделимым грузом — вылет до 1/3 длины авто (спереди или сзади). Для 3-метрового авто — до 1 м.",
        optionRationales: [
          "2 м с каждой стороны — это для ТС > 5 м, не для ≤ 5 м.",
          "",
          "50 % слишком много; максимум — 1/3 (около 33 %).",
          "Неделимый груз может выступать в рамках лимитов.",
        ],
      },
    },
  },
  {
    id: "manual-t13-09",
    section: "others",
    correctIndex: 2,
    source: SOURCE,
    translations: {
      es: {
        text: "Una carga que sobresale por detrás de día debe señalarse con…",
        options: [
          "Una luz blanca",
          "Nada; solo por delante",
          "Una placa con líneas rojas y blancas en diagonal",
          "Una bandera negra",
        ],
        explanation:
          "Por detrás: se señala de día y de noche con una placa con líneas rojas y blancas en diagonal. Además, de noche, con luz roja.",
        optionRationales: [
          "La luz blanca corresponde a las cargas que sobresalen por DELANTE, no por detrás.",
          "Por detrás sí se señala también de día; no basta con noche.",
          "",
          "Una bandera negra no es un elemento oficial de señalización de cargas.",
        ],
      },
      en: {
        text: "A load overhanging at the rear must be marked during the day with…",
        options: [
          "A white light",
          "Nothing — only the front is marked",
          "A red-and-white diagonal-striped plate",
          "A black flag",
        ],
        explanation:
          "Rear: marked day AND night with a red-and-white diagonal-stripe plate. At night, also a red light.",
        optionRationales: [
          "White light is for FRONT overhang, not rear.",
          "Rear is marked in daytime too; night alone isn't enough.",
          "",
          "A black flag isn't an official load-marking device.",
        ],
      },
      ru: {
        text: "Груз, выступающий сзади, днём обозначается…",
        options: [
          "Белым огнём",
          "Никак — обозначают только спереди",
          "Табличкой с красно-белыми диагональными полосами",
          "Чёрным флагом",
        ],
        explanation:
          "Сзади обозначают днём И ночью табличкой с красно-белыми диагональными полосами. Ночью — ещё и красным огнём.",
        optionRationales: [
          "Белый огонь — для ПЕРЕДНЕГО выступа, а не заднего.",
          "Сзади обозначают и днём; одной ночи недостаточно.",
          "",
          "Чёрный флаг — не официальный элемент обозначения груза.",
        ],
      },
    },
  },
  {
    id: "manual-t13-10",
    section: "others",
    correctIndex: 0,
    source: SOURCE,
    translations: {
      es: {
        text: "Los pasajeros deben subir y bajar del vehículo…",
        options: [
          "Cuando el vehículo esté parado y por el lado más cercano a la acera o al arcén",
          "En cualquier momento si van con prisa",
          "Preferiblemente en marcha",
          "Solo por el lado del conductor",
        ],
        explanation:
          "Los pasajeros suben y bajan cuando el vehículo está parado y siempre por el lado más cercano a la acera o al arcén.",
        optionRationales: [
          "",
          "Nunca en marcha; es extremadamente peligroso y prohibido.",
          "«En marcha» es exactamente lo contrario de lo correcto.",
          "El lado del conductor puede abrirse al tráfico y provocar «dooring» con ciclistas.",
        ],
      },
      en: {
        text: "Passengers should get in and out of the vehicle…",
        options: [
          "When the vehicle is stopped, on the side nearer the pavement or shoulder",
          "Any time, if they're in a hurry",
          "Ideally while moving",
          "Only on the driver's side",
        ],
        explanation:
          "Passengers get in/out when the vehicle is stopped, on the side nearest the pavement or shoulder.",
        optionRationales: [
          "",
          "Never while moving; extremely dangerous and forbidden.",
          "'While moving' is the exact opposite of correct.",
          "The driver's side can open onto traffic and cause 'dooring' incidents with cyclists.",
        ],
      },
      ru: {
        text: "Пассажиры садятся и выходят из машины…",
        options: [
          "Когда машина остановлена, со стороны ближе к тротуару или обочине",
          "В любой момент, если торопятся",
          "Желательно на ходу",
          "Только со стороны водителя",
        ],
        explanation:
          "Пассажиры садятся/выходят только на стоящей машине и со стороны, ближней к тротуару или обочине.",
        optionRationales: [
          "",
          "На ходу — никогда; крайне опасно и запрещено.",
          "«На ходу» — прямая противоположность правилу.",
          "Со стороны водителя дверь открывается в поток — риск «dooring» с велосипедистом.",
        ],
      },
    },
  },
];
