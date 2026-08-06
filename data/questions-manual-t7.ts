import type { Question } from "@/lib/types";

// DGT Manual Permiso B (Lectura Fácil, 2024), Tema 7 — Sistema de luces.

const SOURCE = "DGT Manual Permiso B (Lectura Fácil, 2024), Tema 7";

export const QUESTIONS_MANUAL_T7: Question[] = [
  {
    id: "manual-t7-01",
    section: "driving_conditions",
    correctIndex: 3,
    source: SOURCE,
    translations: {
      es: {
        text: "¿En cuál de estas situaciones NO es obligatorio encender las luces?",
        options: [
          "Por la noche",
          "Al pasar por un túnel",
          "Al circular por un carril reversible o adicional habilitado",
          "En un día despejado con sol brillante",
        ],
        explanation:
          "Se encienden siempre de noche, en túneles, en carriles reversibles/adicionales y en días oscuros con poca luz natural. Un día despejado con sol brillante no lo requiere de por sí.",
        optionRationales: [
          "De noche es obligatorio; conducir sin luces es infracción grave.",
          "En túneles es obligatorio, incluso en los iluminados, para ser visto.",
          "En carriles reversibles/adicionales las luces avisan a los demás del carril especial.",
          "",
        ],
      },
      en: {
        text: "In which of these situations is turning on the lights NOT mandatory?",
        options: [
          "At night",
          "When passing through a tunnel",
          "On a reversible or additional lane in use",
          "On a clear day with bright sun",
        ],
        explanation:
          "Lights are required at night, in tunnels, on reversible/additional lanes and on dark days with poor natural light. A clear sunny day does not require them by itself.",
        optionRationales: [
          "At night lights are mandatory; driving unlit is a serious offence.",
          "Tunnels are mandatory, even lit ones, so you are seen.",
          "On reversible/additional lanes lights warn others of the special lane in use.",
          "",
        ],
      },
      ru: {
        text: "В какой из ситуаций фары включать НЕ обязательно?",
        options: [
          "Ночью",
          "При проезде через тоннель",
          "На реверсивной или временно открытой дополнительной полосе",
          "В ясный солнечный день",
        ],
        explanation:
          "Включать надо ночью, в тоннеле, на реверсивных/доп. полосах и в тёмный день. Ясный солнечный день сам по себе не требует.",
        optionRationales: [
          "Ночью — обязательно; без света — серьёзное нарушение.",
          "В тоннеле — обязательно, даже если он освещён, чтобы вас было видно.",
          "На реверсивной/доп. полосе свет предупреждает других об особом режиме.",
          "",
        ],
      },
    },
  },
  {
    id: "manual-t7-02",
    section: "driving_conditions",
    correctIndex: 1,
    source: SOURCE,
    translations: {
      es: {
        text: "Las luces de largo alcance (luces de carretera) están PROHIBIDAS…",
        options: [
          "En túneles",
          "Dentro de pueblos y ciudades",
          "En carreteras a más de 40 km/h",
          "Cuando llueve",
        ],
        explanation:
          "Las luces de largo alcance están prohibidas dentro de pueblos y ciudades y cuando el vehículo está parado. Deslumbran a otros conductores.",
        optionRationales: [
          "En túneles pueden usarse cuando el túnel no está iluminado y no hay tráfico enfrente.",
          "",
          "Es al revés: a partir de 40 km/h fuera de poblado son obligatorias si no deslumbras.",
          "Con lluvia son desaconsejables (se reflejan), pero no están explícitamente prohibidas por lluvia.",
        ],
      },
      en: {
        text: "High beams (long-range lights) are FORBIDDEN…",
        options: [
          "In tunnels",
          "Inside built-up areas (towns and cities)",
          "On roads at more than 40 km/h",
          "When it's raining",
        ],
        explanation:
          "High beams are forbidden in built-up areas and when the vehicle is stopped, because they dazzle other drivers.",
        optionRationales: [
          "In tunnels they may be used when the tunnel isn't lit and no oncoming traffic.",
          "",
          "It's the opposite: above 40 km/h outside towns high beams are actually required if no dazzle risk.",
          "In rain they're inadvisable (reflection) but not explicitly forbidden by rain.",
        ],
      },
      ru: {
        text: "Дальний свет ЗАПРЕЩЁН…",
        options: [
          "В тоннелях",
          "В населённых пунктах (городах и посёлках)",
          "На дорогах со скоростью выше 40 км/ч",
          "Во время дождя",
        ],
        explanation:
          "Дальний свет запрещён в населённых пунктах и когда автомобиль стоит — ослепляет других водителей.",
        optionRationales: [
          "В тоннелях можно включать, если тоннель не освещён и нет встречных.",
          "",
          "Наоборот: свыше 40 км/ч вне города дальний свет требуется, если не слепишь.",
          "В дождь не рекомендуется (отражение), но именно из-за дождя не запрещён.",
        ],
      },
    },
  },
  {
    id: "manual-t7-03",
    section: "driving_conditions",
    correctIndex: 2,
    source: SOURCE,
    translations: {
      es: {
        text: "Con niebla intensa, ¿qué luces son las correctas?",
        options: [
          "Solo luz de largo alcance",
          "Solo luces de posición",
          "Luces de corto alcance (cruce) y, si dispone, antinieblas delanteras; las traseras solo si la visibilidad es muy mala",
          "Cualquier combinación menos las antinieblas",
        ],
        explanation:
          "Con niebla se usan las luces de cruce y las antinieblas delanteras si se dispone. Las antinieblas traseras solo si la visibilidad es muy mala. Nunca las largas, que reflejan la niebla y deslumbran.",
        optionRationales: [
          "Las largas se reflejan en la niebla como una pared blanca; deslumbran al propio conductor.",
          "Solo posición no ilumina la calzada; peligroso incluso a baja velocidad.",
          "",
          "Excluir las antinieblas es exactamente lo contrario de lo que se necesita en niebla.",
        ],
      },
      en: {
        text: "In dense fog, which lights are correct?",
        options: [
          "Only high beams",
          "Only sidelights",
          "Dipped beams and, if fitted, front fog lights; rear fogs only in very poor visibility",
          "Any combination except fog lights",
        ],
        explanation:
          "In fog use dipped beams and front fog lights if fitted. Rear fog lights only in very poor visibility. Never high beams — they reflect in the fog and dazzle.",
        optionRationales: [
          "High beams reflect off the fog like a white wall — they dazzle the driver.",
          "Sidelights don't light the road; dangerous even at low speed.",
          "",
          "Excluding fogs is the opposite of what fog requires.",
        ],
      },
      ru: {
        text: "В густом тумане какие фары включать?",
        options: [
          "Только дальний свет",
          "Только габариты",
          "Ближний свет и, если есть, передние противотуманные; задние противотуманные — только при очень плохой видимости",
          "Любая комбинация, кроме противотуманок",
        ],
        explanation:
          "В тумане — ближний свет и передние противотуманные, если они есть. Задние противотуманные — только при очень плохой видимости. Дальний нельзя — он отражается от тумана и слепит.",
        optionRationales: [
          "Дальний отражается от тумана как белая стена — слепит самого водителя.",
          "Одни габариты не освещают дорогу; опасно даже на низкой скорости.",
          "",
          "Исключать противотуманки — прямая противоположность тому, что нужно в туман.",
        ],
      },
    },
  },
  {
    id: "manual-t7-04",
    section: "driving_conditions",
    correctIndex: 0,
    source: SOURCE,
    translations: {
      es: {
        text: "¿De qué color son las luces de posición delanteras, traseras y laterales?",
        options: [
          "Blancas delante, rojas detrás y amarillas en los laterales",
          "Amarillas delante, blancas detrás y rojas en los laterales",
          "Rojas delante, amarillas detrás y blancas en los laterales",
          "Todas blancas",
        ],
        explanation:
          "Las luces de posición son blancas delante, rojas detrás y amarillas en los laterales del vehículo.",
        optionRationales: [
          "",
          "Colores invertidos: blanco es delante, no detrás.",
          "Un color rojo delante es peligrosísimo: se confunde con la parte trasera del vehículo.",
          "Colores iguales impiden saber si un vehículo va o viene; siempre son distintos.",
        ],
      },
      en: {
        text: "What colours are the position lights (front, rear, side)?",
        options: [
          "White front, red rear, yellow sides",
          "Yellow front, white rear, red sides",
          "Red front, yellow rear, white sides",
          "All white",
        ],
        explanation:
          "Position lights are white at the front, red at the rear and yellow on the sides.",
        optionRationales: [
          "",
          "Colours flipped: white is at the front, not the rear.",
          "Red at the front is extremely dangerous — would be mistaken for the rear of a vehicle.",
          "Same colour all round makes it impossible to tell direction; they're always different.",
        ],
      },
      ru: {
        text: "Какого цвета габаритные огни спереди, сзади и по бокам?",
        options: [
          "Спереди белые, сзади красные, по бокам жёлтые",
          "Спереди жёлтые, сзади белые, по бокам красные",
          "Спереди красные, сзади жёлтые, по бокам белые",
          "Все белые",
        ],
        explanation:
          "Габариты: спереди белые, сзади красные, по бокам жёлтые.",
        optionRationales: [
          "",
          "Цвета перепутаны: белый — спереди, а не сзади.",
          "Красный спереди крайне опасен: спутают с задней частью машины.",
          "Одинаковые огни не дают понять направление движения; они всегда разного цвета.",
        ],
      },
    },
  },
  {
    id: "manual-t7-05",
    section: "driving_conditions",
    correctIndex: 2,
    source: SOURCE,
    translations: {
      es: {
        text: "Se considera que una carretera está poco iluminada cuando…",
        options: [
          "No se ven las líneas del suelo",
          "No hay farolas",
          "No se puede leer la matrícula de un vehículo a 10 m o no se ve un vehículo oscuro a 50 m",
          "Hay más de 3 vehículos por delante",
        ],
        explanation:
          "El manual define carretera poco iluminada como aquella en la que no se puede leer la matrícula del vehículo de delante a 10 metros o no se ve un vehículo oscuro a 50 metros.",
        optionRationales: [
          "«Ver las líneas» es subjetivo; el manual usa criterios cuantificables (metros).",
          "Puede no haber farolas y aun así ser una noche muy clara; el criterio no es la infraestructura.",
          "",
          "El número de vehículos delante no está relacionado con la iluminación de la vía.",
        ],
      },
      en: {
        text: "A road is considered poorly lit when…",
        options: [
          "You can't see the road lines",
          "There are no streetlights",
          "You can't read the plate of the vehicle ahead at 10 m, or can't see a dark vehicle at 50 m",
          "There are more than 3 vehicles ahead",
        ],
        explanation:
          "The manual defines poor lighting as: the plate of the vehicle ahead is unreadable at 10 m, or a dark vehicle isn't visible at 50 m.",
        optionRationales: [
          "'Seeing the lines' is subjective; the manual uses measurable criteria (metres).",
          "There may be no streetlights on a very clear night; infrastructure isn't the criterion.",
          "",
          "Number of vehicles ahead is unrelated to road lighting.",
        ],
      },
      ru: {
        text: "Дорога считается плохо освещённой, когда…",
        options: [
          "Не видно разметки",
          "Нет фонарей",
          "Не читается номер впереди идущего с 10 м, или не видно тёмного автомобиля на 50 м",
          "Впереди более 3 машин",
        ],
        explanation:
          "По руководству, плохое освещение: номер впереди идущего не читается с 10 м, либо тёмный автомобиль не виден с 50 м.",
        optionRationales: [
          "«Видно разметку» — субъективно; в руководстве измеримые критерии (метры).",
          "Может не быть фонарей и при этом стоять ясная ночь; критерий не инфраструктура.",
          "",
          "Число машин впереди никак не связано с освещённостью.",
        ],
      },
    },
  },
  {
    id: "manual-t7-06",
    section: "driving_conditions",
    correctIndex: 1,
    source: SOURCE,
    translations: {
      es: {
        text: "La señal de emergencia (los cuatro intermitentes a la vez) se debe usar cuando…",
        options: [
          "Aparcas en línea",
          "Un vehículo está averiado, no puede alcanzar la velocidad mínima, o para avisar de otro vehículo parado por emergencia",
          "Vas a hacer un adelantamiento",
          "Frenas por primera vez",
        ],
        explanation:
          "Se usan cuando el vehículo tiene una avería y no puede llevar la velocidad mínima, en un viaje de emergencia, para avisar de otro vehículo parado por emergencia y al subir/bajar pasajeros del transporte escolar.",
        optionRationales: [
          "Aparcar en línea se señaliza con el intermitente del lado hacia el que te acercas, no con las cuatro.",
          "",
          "Para adelantar se usa el intermitente izquierdo; encender las cuatro confunde a los demás.",
          "Frenar se señala automáticamente con la luz de freno; las cuatro no son necesarias.",
        ],
      },
      en: {
        text: "Hazard lights (all four turn signals at once) should be used when…",
        options: [
          "Parking parallel to the kerb",
          "The vehicle has a breakdown and can't hit the minimum speed, on an emergency trip, or to warn of another stopped emergency vehicle",
          "Preparing to overtake",
          "Braking for the first time",
        ],
        explanation:
          "Use hazards for a breakdown at below minimum speed, an emergency trip, warning of another stopped vehicle, and when a school-transport bus loads or unloads.",
        optionRationales: [
          "Parallel parking uses the indicator on the side you're approaching, not the four-ways.",
          "",
          "Overtaking uses the left indicator; hazards would confuse others.",
          "Braking is signalled by the brake light itself; hazards aren't needed.",
        ],
      },
      ru: {
        text: "Аварийная сигнализация (все 4 поворотника одновременно) должна включаться, когда…",
        options: [
          "Паркуешься параллельно",
          "У ТС поломка и не удаётся выдержать минимальную скорость, при экстренной поездке, или чтобы предупредить о другом остановившемся ТС",
          "Готовишься к обгону",
          "Тормозишь первый раз",
        ],
        explanation:
          "Аварийка включается при поломке (ниже минимальной скорости), при экстренном рейсе, для предупреждения о другом стоящем ТС, а также при посадке/высадке в школьный автобус.",
        optionRationales: [
          "Параллельная парковка — включают поворотник в сторону манёвра, не аварийку.",
          "",
          "Обгон — левый поворотник; аварийка запутает остальных.",
          "Торможение обозначает стоп-сигнал; аварийка не нужна.",
        ],
      },
    },
  },
  {
    id: "manual-t7-07",
    section: "driving_conditions",
    correctIndex: 0,
    source: SOURCE,
    translations: {
      es: {
        text: "Las motocicletas deben llevar encendidas durante el día…",
        options: [
          "Las luces de corto alcance (cruce), siempre",
          "Las luces de largo alcance",
          "Solo las de posición",
          "No es obligatorio ningún tipo de luz",
        ],
        explanation:
          "Las motocicletas deben circular siempre con las luces de corto alcance (cruce) encendidas durante el día en cualquier vía.",
        optionRationales: [
          "",
          "Las largas de día deslumbran a todos los demás y no son necesarias.",
          "Las de posición no dan visibilidad suficiente; se ven mucho menos que las de cruce.",
          "Sí es obligatorio; una moto es difícil de ver y las luces son clave para ser detectada.",
        ],
      },
      en: {
        text: "Motorcycles must ride during daytime with…",
        options: [
          "Dipped beams (low beams) on at all times",
          "High beams on",
          "Only sidelights",
          "No lights required",
        ],
        explanation:
          "Motorcycles must always have dipped beams (low beams) on during the day on any road.",
        optionRationales: [
          "",
          "Daytime high beams dazzle everyone and aren't needed.",
          "Sidelights aren't visible enough; much less noticeable than dipped beams.",
          "It IS mandatory; motorcycles are hard to spot and lights are key to being seen.",
        ],
      },
      ru: {
        text: "Мотоциклы должны днём двигаться…",
        options: [
          "Всегда с включённым ближним светом",
          "С включённым дальним светом",
          "Только с габаритами",
          "Без обязательного света",
        ],
        explanation:
          "Мотоциклы обязаны всегда двигаться с включённым ближним светом днём на любой дороге.",
        optionRationales: [
          "",
          "Дневной дальний слепит всех и не нужен.",
          "Габариты плохо заметны — гораздо хуже, чем ближний свет.",
          "Обязательно; мотоцикл трудно заметить, свет — ключ к видимости.",
        ],
      },
    },
  },
  {
    id: "manual-t7-08",
    section: "driving_conditions",
    correctIndex: 2,
    source: SOURCE,
    translations: {
      es: {
        text: "El uso del claxon (señales acústicas) está permitido…",
        options: [
          "Para saludar a otros conductores",
          "Siempre que estés dentro del vehículo",
          "Para evitar un posible accidente y, fuera de poblado, para avisar de un adelantamiento o de un servicio prioritario",
          "Solo entre las 06:00 y las 22:00",
        ],
        explanation:
          "El claxon se puede usar para evitar accidentes, fuera de poblado para avisar de un adelantamiento, y en servicios prioritarios (por ejemplo, llevar a un herido grave al hospital).",
        optionRationales: [
          "Usar el claxon para saludar es infracción por contaminación acústica innecesaria.",
          "«Siempre que estés en el vehículo» no es una condición; hay casos concretos permitidos.",
          "",
          "El horario no es el criterio; lo que importa es el motivo del uso.",
        ],
      },
      en: {
        text: "Using the horn (acoustic signal) is allowed…",
        options: [
          "To greet other drivers",
          "Any time you're in the vehicle",
          "To avoid an accident, and outside built-up areas to signal overtaking or a priority run",
          "Only between 06:00 and 22:00",
        ],
        explanation:
          "The horn is allowed to avoid accidents; outside built-up areas to signal overtaking; and for priority runs (e.g. taking a serious casualty to hospital).",
        optionRationales: [
          "Honking to greet is an offence — unnecessary noise pollution.",
          "'Any time inside the vehicle' isn't a condition; only specific cases are allowed.",
          "",
          "Time of day isn't the criterion; what matters is the reason for using the horn.",
        ],
      },
      ru: {
        text: "Звуковой сигнал (клаксон) разрешён…",
        options: [
          "Чтобы поприветствовать других водителей",
          "В любое время, находясь в машине",
          "Чтобы избежать аварии; вне населённых пунктов — предупредить об обгоне или срочной поездке",
          "Только с 06:00 до 22:00",
        ],
        explanation:
          "Клаксон допустим для предотвращения аварии, вне населённого пункта — для предупреждения об обгоне, а также при срочной поездке (например, транспортировка тяжело раненого).",
        optionRationales: [
          "Сигналить в знак приветствия — нарушение (шумовое загрязнение).",
          "«Всегда в машине» — не условие; есть конкретные разрешённые случаи.",
          "",
          "Время суток не критерий; важна причина использования сигнала.",
        ],
      },
    },
  },
  {
    id: "manual-t7-09",
    section: "driving_conditions",
    correctIndex: 2,
    source: SOURCE,
    translations: {
      es: {
        text: "Circulas de noche por carretera convencional a más de 40 km/h sin cruzarte con nadie. ¿Qué luces debes llevar?",
        options: [
          "Solo las de posición",
          "Solo las de corto alcance (cruce)",
          "Las de largo alcance (carretera), obligatorias si no hay riesgo de deslumbrar",
          "Cualquiera de las tres, a tu elección",
        ],
        explanation:
          "Fuera de poblado, por la noche y a más de 40 km/h, las luces de largo alcance son obligatorias si no existe riesgo de deslumbrar a otros conductores.",
        optionRationales: [
          "Solo posición no permite ver la vía; es insuficiente y peligroso.",
          "Corto alcance ilumina ~40 m; a más de 40 km/h no da tiempo de reaccionar ante un obstáculo.",
          "",
          "La normativa fija cuáles usar según velocidad y visibilidad; no es libre elección.",
        ],
      },
      en: {
        text: "You drive at night on a conventional road above 40 km/h with no oncoming traffic. Which lights should you use?",
        options: [
          "Only sidelights",
          "Only dipped beams",
          "High beams — mandatory if there's no risk of dazzling others",
          "Any of the three, your choice",
        ],
        explanation:
          "Outside built-up areas, at night and above 40 km/h, high beams are mandatory if there's no risk of dazzling other drivers.",
        optionRationales: [
          "Sidelights don't let you see the road; insufficient and dangerous.",
          "Dipped beams light ~40 m; above 40 km/h that's not enough time to react.",
          "",
          "The rules fix which lights to use by speed and visibility; not a free choice.",
        ],
      },
      ru: {
        text: "Едете ночью по обычной дороге быстрее 40 км/ч, встречных нет. Какой свет?",
        options: [
          "Только габариты",
          "Только ближний свет",
          "Дальний свет — обязателен, если нет риска ослепить других",
          "Любой на выбор",
        ],
        explanation:
          "Вне населённого пункта, ночью, при скорости выше 40 км/ч дальний свет обязателен, если нет риска ослепить других.",
        optionRationales: [
          "Только габариты не позволяют видеть дорогу — недостаточно и опасно.",
          "Ближний освещает ~40 м; на скорости выше 40 км/ч не хватит времени среагировать.",
          "",
          "Правила фиксируют выбор света по скорости и видимости — не по желанию.",
        ],
      },
    },
  },
  {
    id: "manual-t7-10",
    section: "driving_conditions",
    correctIndex: 1,
    source: SOURCE,
    translations: {
      es: {
        text: "Si te cruzas de noche con otro vehículo que viene de frente con las luces largas, debes…",
        options: [
          "Encender también las largas para «devolvérselo»",
          "Cambiar tus largas a cortas con antelación (al menos 150 m antes) para no deslumbrarlo",
          "Apagar todas las luces para no molestar",
          "Frenar en seco y detenerte hasta que pase",
        ],
        explanation:
          "Al cruzarte con otro vehículo por la noche, debes cambiar de largas a cortas con antelación suficiente (mínimo 150 m antes) para no deslumbrarlo.",
        optionRationales: [
          "«Devolver» las largas provoca deslumbramiento mutuo y riesgo de accidente frontal.",
          "",
          "Apagar todas las luces te vuelve invisible; es infracción muy grave.",
          "Frenar bruscamente en carretera puede causar alcance por detrás.",
        ],
      },
      en: {
        text: "If you meet another vehicle at night with its high beams on, you must…",
        options: [
          "Turn on your high beams to 'return the favour'",
          "Switch from high to low beams in advance (at least 150 m before) so as not to dazzle",
          "Turn off all lights so as not to bother them",
          "Brake hard and stop until they pass",
        ],
        explanation:
          "When meeting another vehicle at night, switch from high to low beams in advance (at least 150 m before) so as not to dazzle them.",
        optionRationales: [
          "'Returning' high beams causes mutual dazzle and risks a head-on crash.",
          "",
          "Turning off all lights makes you invisible; a very serious offence.",
          "Braking hard on the road risks a rear-end collision from behind.",
        ],
      },
      ru: {
        text: "Ночью навстречу едет машина с дальним светом. Ваши действия?",
        options: [
          "Тоже включить дальний, «в ответ»",
          "Заранее переключиться с дальнего на ближний (минимум за 150 м), чтобы не ослепить",
          "Выключить все фары, чтобы не мешать",
          "Резко затормозить и остановиться, пока не проедет",
        ],
        explanation:
          "При встрече ночью нужно заранее (минимум за 150 м) переключиться с дальнего на ближний, чтобы не ослепить встречного.",
        optionRationales: [
          "«Ответный» дальний слепит обоих и грозит лобовым столкновением.",
          "",
          "Погасить все фары — стать невидимым, это очень грубое нарушение.",
          "Резко тормозить на трассе опасно — получите удар сзади.",
        ],
      },
    },
  },
  {
    id: "manual-t7-11",
    section: "driving_conditions",
    correctIndex: 2,
    source: SOURCE,
    translations: {
      es: {
        text: "Un vehículo que viene de frente te deslumbra con sus luces. ¿Qué debes hacer?",
        options: [
          "Mirar fijamente sus faros para ver mejor",
          "Encender tus antinieblas traseras",
          "Reducir la velocidad y mirar hacia el borde derecho de la calzada",
          "Cambiar de carril inmediatamente",
        ],
        explanation:
          "Ante un deslumbramiento debes reducir la velocidad, no mirar directamente a los faros y desviar la vista al borde derecho de la calzada como referencia para seguir tu trayectoria.",
        optionRationales: [
          "Mirar los faros ciega la retina y agrava el deslumbramiento durante varios segundos.",
          "Las antinieblas traseras deslumbran a quien va detrás y no ayudan contra la luz de frente.",
          "",
          "Cambiar de carril sin ver bien es peligroso; primero se reduce velocidad y se orienta la vista.",
        ],
      },
      en: {
        text: "An oncoming vehicle dazzles you with its lights. What should you do?",
        options: [
          "Look straight at its headlights to see better",
          "Turn on your rear fog lights",
          "Reduce speed and look towards the right edge of the road",
          "Change lanes immediately",
        ],
        explanation:
          "When dazzled, reduce speed, don't look at the headlights and shift your gaze to the right edge of the road as a reference for your path.",
        optionRationales: [
          "Staring at headlights blinds the retina and prolongs the dazzle for seconds.",
          "Rear fog lights dazzle those behind and don't help against front glare.",
          "",
          "Changing lanes without clear vision is dangerous; first slow down and reorient your gaze.",
        ],
      },
      ru: {
        text: "Встречный автомобиль слепит вас фарами. Ваши действия?",
        options: [
          "Смотреть прямо на фары, чтобы лучше видеть",
          "Включить задние противотуманные",
          "Снизить скорость и смотреть на правый край проезжей части",
          "Немедленно перестроиться",
        ],
        explanation:
          "При ослеплении: снизить скорость, не смотреть на фары, перевести взгляд к правому краю проезжей части как ориентиру.",
        optionRationales: [
          "Смотреть на фары — ослепляет сетчатку и продлевает эффект на секунды.",
          "Задние противотуманки слепят тех, кто сзади, и не помогают против встречного света.",
          "",
          "Перестраиваться, ничего не видя, опасно; сначала сбавить скорость и переориентировать взгляд.",
        ],
      },
    },
  },
  {
    id: "manual-t7-12",
    section: "driving_conditions",
    correctIndex: 3,
    source: SOURCE,
    translations: {
      es: {
        text: "Las luces antinieblas traseras solo deben usarse cuando…",
        options: [
          "Empieza a oscurecer",
          "Circulas por una vía urbana iluminada",
          "Hay tráfico lento delante de ti",
          "Hay niebla densa, lluvia muy fuerte o nevada intensa",
        ],
        explanation:
          "Las antinieblas traseras son muy potentes y deslumbran al que va detrás. Solo se encienden con niebla densa, lluvia muy fuerte o nevada intensa; en cualquier otra condición están prohibidas.",
        optionRationales: [
          "Al atardecer basta con las de posición y luego las cortas; las antinieblas traseras deslumbrarían.",
          "En una calle iluminada son molestas e innecesarias, y su uso indebido se sanciona.",
          "El tráfico lento no justifica encenderlas; para eso están las de freno y las de emergencia.",
          "",
        ],
      },
      en: {
        text: "Rear fog lights should only be used when…",
        options: [
          "Dusk is beginning",
          "You're driving on a lit urban street",
          "There's slow traffic ahead",
          "There's dense fog, very heavy rain or heavy snow",
        ],
        explanation:
          "Rear fog lights are very bright and dazzle those behind you. Only use them in dense fog, very heavy rain or heavy snow; otherwise they're forbidden.",
        optionRationales: [
          "At dusk, position and then dipped beams are enough; rear fogs would dazzle.",
          "On a lit street they're annoying and unnecessary — misuse is fined.",
          "Slow traffic doesn't justify them; brake and hazard lights already handle that.",
          "",
        ],
      },
      ru: {
        text: "Задние противотуманные фары включают только когда…",
        options: [
          "Начинает темнеть",
          "Едете по освещённой городской улице",
          "Впереди медленное движение",
          "Густой туман, очень сильный дождь или снегопад",
        ],
        explanation:
          "Задние противотуманки очень яркие и слепят тех, кто сзади. Включают только при густом тумане, очень сильном дожде или снегопаде — в остальных случаях запрещено.",
        optionRationales: [
          "В сумерках достаточно габаритов и потом ближнего; задние противотуманки будут слепить.",
          "На освещённой улице они мешают и не нужны — за нецелевое использование штрафуют.",
          "Медленный трафик не повод; для этого есть стоп-сигнал и аварийка.",
          "",
        ],
      },
    },
  },
  {
    id: "manual-t7-13",
    section: "driving_conditions",
    correctIndex: 1,
    source: SOURCE,
    translations: {
      es: {
        text: "Estacionas por la noche en calzada o arcén de una vía insuficientemente iluminada. ¿Qué luces debes dejar?",
        options: [
          "Ninguna, para no gastar batería",
          "Al menos las luces de posición",
          "Las luces de largo alcance",
          "Solo los intermitentes de emergencia",
        ],
        explanation:
          "En calzada o arcén de una vía insuficientemente iluminada, los vehículos estacionados por la noche deben tener encendidas al menos las luces de posición para ser vistos.",
        optionRationales: [
          "Sin luces el vehículo es invisible y provoca alcances traseros; infracción grave.",
          "",
          "Las largas encendidas y estacionadas deslumbran a otros y están expresamente prohibidas.",
          "Los intermitentes de emergencia consumen mucho y no son la señal indicada para estacionamiento nocturno normal.",
        ],
      },
      en: {
        text: "You park at night on the carriageway or hard shoulder of an insufficiently lit road. Which lights must you leave on?",
        options: [
          "None, to save battery",
          "At least the position (side) lights",
          "The high beams",
          "Only the hazard lights",
        ],
        explanation:
          "On the carriageway or hard shoulder of an insufficiently lit road, vehicles parked at night must have at least the position lights on to be seen.",
        optionRationales: [
          "With no lights the vehicle is invisible and gets rear-ended; a serious offence.",
          "",
          "High beams while parked dazzle others and are explicitly forbidden.",
          "Hazards drain the battery and aren't the right signal for normal night parking.",
        ],
      },
      ru: {
        text: "Ночью паркуетесь на проезжей части или обочине плохо освещённой дороги. Какой свет оставить?",
        options: [
          "Никакой, чтобы не сесть аккумулятор",
          "Как минимум габаритные огни",
          "Дальний свет",
          "Только аварийку",
        ],
        explanation:
          "На проезжей части или обочине плохо освещённой дороги ночью припаркованные ТС обязаны иметь хотя бы включённые габариты, чтобы их было видно.",
        optionRationales: [
          "Без света машина невидима — попутка ударит сзади; серьёзное нарушение.",
          "",
          "Дальний свет на парковке слепит и прямо запрещён.",
          "Аварийка сажает аккумулятор и не является штатным сигналом ночной парковки.",
        ],
      },
    },
  },
  {
    id: "manual-t7-14",
    section: "driving_conditions",
    correctIndex: 3,
    source: SOURCE,
    translations: {
      es: {
        text: "Instalar luces de colores no reglamentarios (por ejemplo, tira LED azul debajo del coche) en un vehículo particular es…",
        options: [
          "Legal si solo se enciende de día",
          "Legal si el vehículo ya ha pasado la ITV",
          "Legal en ciudad, prohibido en carretera",
          "Prohibido y sancionable; el vehículo puede no pasar la ITV",
        ],
        explanation:
          "Solo pueden llevarse las luces reglamentarias, con los colores y posiciones autorizados. Cualquier luz adicional o de color no permitido está prohibida y el vehículo puede no pasar la ITV.",
        optionRationales: [
          "El horario no exime; el vehículo debe cumplir siempre con la homologación.",
          "Haber pasado la ITV no autoriza modificaciones posteriores no homologadas.",
          "La normativa aplica igual en ciudad y en carretera; no hay excepción por ubicación.",
          "",
        ],
      },
      en: {
        text: "Fitting non-standard coloured lights (e.g. a blue LED strip under the car) on a private vehicle is…",
        options: [
          "Legal if only used by day",
          "Legal if the vehicle has passed its ITV",
          "Legal in the city, forbidden on the open road",
          "Forbidden and fineable; the vehicle may fail its ITV",
        ],
        explanation:
          "Only regulation lights, with authorised colours and positions, may be fitted. Any extra or non-standard-colour light is forbidden and the vehicle may fail the ITV.",
        optionRationales: [
          "Time of day doesn't exempt; the vehicle must always meet homologation.",
          "Passing the ITV doesn't authorise later non-homologated modifications.",
          "The rules apply equally in the city and on the road; no location exemption.",
          "",
        ],
      },
      ru: {
        text: "Установить нештатные цветные фары (например, синюю LED-подсветку под днище) на частный автомобиль…",
        options: [
          "Разрешено, если пользоваться только днём",
          "Разрешено, если авто уже прошло ITV",
          "Разрешено в городе, запрещено на трассе",
          "Запрещено и штрафуется; авто может не пройти ITV",
        ],
        explanation:
          "Разрешены только штатные фары установленных цветов и положения. Любая дополнительная или нештатного цвета — запрещена, ТС может не пройти ITV.",
        optionRationales: [
          "Время суток не освобождает; авто всегда должно соответствовать гомологации.",
          "Пройденный ITV не даёт права на последующие несертифицированные доработки.",
          "Правила одинаковы в городе и на трассе; исключений по месту нет.",
          "",
        ],
      },
    },
  },
  {
    id: "manual-t7-15",
    section: "driving_conditions",
    correctIndex: 2,
    source: SOURCE,
    translations: {
      es: {
        text: "Las luces de gálibo son obligatorias en vehículos con anchura superior a…",
        options: [
          "1,50 m",
          "1,80 m",
          "2,10 m",
          "2,55 m",
        ],
        explanation:
          "Las luces de gálibo son obligatorias en vehículos con anchura superior a 2,10 m para señalizar sus dimensiones a los demás conductores, especialmente en la oscuridad.",
        optionRationales: [
          "1,50 m es la anchura aproximada de un turismo pequeño; no requiere gálibo.",
          "1,80 m es la anchura media de un turismo grande; tampoco requiere gálibo.",
          "",
          "2,55 m es la anchura máxima general permitida (camiones); a partir de 2,10 m ya son obligatorias.",
        ],
      },
      en: {
        text: "Marker (gálibo) lights are mandatory on vehicles wider than…",
        options: [
          "1.50 m",
          "1.80 m",
          "2.10 m",
          "2.55 m",
        ],
        explanation:
          "Marker lights are mandatory on vehicles over 2.10 m wide to signal their dimensions to other drivers, especially at night.",
        optionRationales: [
          "1.50 m is roughly a small car — no markers needed.",
          "1.80 m is a large saloon — still no markers needed.",
          "",
          "2.55 m is the general max width (lorries); markers are required from 2.10 m.",
        ],
      },
      ru: {
        text: "Габаритные фонари (gálibo) обязательны на ТС шириной более…",
        options: [
          "1,50 м",
          "1,80 м",
          "2,10 м",
          "2,55 м",
        ],
        explanation:
          "Габаритные фонари обязательны при ширине ТС более 2,10 м — чтобы обозначать габариты другим водителям, особенно ночью.",
        optionRationales: [
          "1,50 м — ширина маленького легкового; габаритные не нужны.",
          "1,80 м — ширина крупного легкового; тоже не требуются.",
          "",
          "2,55 м — максимальная общая ширина (грузовики); обязательны уже с 2,10 м.",
        ],
      },
    },
  },
];
