import type { Question } from "@/lib/types";

// DGT Manual Permiso B (Lectura Fácil, 2024), Tema 6 — Elementos del vehículo.

const SOURCE = "DGT Manual Permiso B (Lectura Fácil, 2024), Tema 6";

export const QUESTIONS_MANUAL_T6: Question[] = [
  {
    id: "manual-t6-01",
    section: "mechanics",
    correctIndex: 1,
    source: SOURCE,
    translations: {
      es: {
        text: "El pedal del freno actúa sobre…",
        options: [
          "Solo las ruedas delanteras",
          "Todas las ruedas del vehículo",
          "Solo las ruedas traseras",
          "Solo el motor",
        ],
        explanation:
          "El pedal del freno actúa sobre TODAS las ruedas del coche. Se pisa con el pie derecho y de forma suave. El freno de mano, en cambio, actúa solo sobre las ruedas traseras.",
        optionRationales: [
          "Solo delanteras no daría suficiente frenada; en realidad frena las cuatro.",
          "",
          "Solo traseras corresponde al freno de mano, no al pedal.",
          "El pedal frena las ruedas, no el motor (el motor puede retener con freno motor).",
        ],
      },
      en: {
        text: "The brake pedal acts on…",
        options: [
          "Only the front wheels",
          "All wheels of the vehicle",
          "Only the rear wheels",
          "Only the engine",
        ],
        explanation:
          "The brake pedal acts on ALL wheels. Press it gently with your right foot. The handbrake, by contrast, acts only on the rear wheels.",
        optionRationales: [
          "Fronts only wouldn't be enough; the pedal brakes all four.",
          "",
          "Rears-only is the handbrake, not the pedal.",
          "The pedal brakes wheels, not the engine (engine braking is separate).",
        ],
      },
      ru: {
        text: "Педаль тормоза воздействует на…",
        options: [
          "Только передние колёса",
          "Все колёса автомобиля",
          "Только задние колёса",
          "Только двигатель",
        ],
        explanation:
          "Педаль тормоза воздействует на ВСЕ колёса. Нажимают правой ногой, плавно. Ручной тормоз, наоборот, действует только на задние колёса.",
        optionRationales: [
          "Только передние — недостаточно; педаль тормозит все четыре.",
          "",
          "Только задние — это ручник, не педаль.",
          "Педаль тормозит колёса, а не двигатель (торможение двигателем — отдельная функция).",
        ],
      },
    },
  },
  {
    id: "manual-t6-02",
    section: "mechanics",
    correctIndex: 3,
    source: SOURCE,
    translations: {
      es: {
        text: "El freno de mano actúa…",
        options: [
          "Sobre las cuatro ruedas",
          "Sobre las ruedas delanteras",
          "Sobre el motor",
          "Sobre las ruedas traseras y sirve para mantener el vehículo parado",
        ],
        explanation:
          "El freno de mano frena las ruedas traseras y mantiene el vehículo parado (por ejemplo, aparcado en pendiente).",
        optionRationales: [
          "Las cuatro ruedas es el pedal del freno.",
          "Sobre delanteras no actúa el freno de mano.",
          "El freno de mano no actúa sobre el motor.",
          "",
        ],
      },
      en: {
        text: "The handbrake acts on…",
        options: [
          "All four wheels",
          "The front wheels",
          "The engine",
          "The rear wheels — used to keep the vehicle stationary",
        ],
        explanation:
          "The handbrake brakes the rear wheels and keeps the vehicle stationary (e.g. parked on a slope).",
        optionRationales: [
          "All four wheels is the brake pedal.",
          "The handbrake doesn't act on the front wheels.",
          "The handbrake doesn't act on the engine.",
          "",
        ],
      },
      ru: {
        text: "Ручной тормоз действует на…",
        options: [
          "Все четыре колеса",
          "Передние колёса",
          "Двигатель",
          "Задние колёса — удерживает машину на месте",
        ],
        explanation:
          "Ручник тормозит задние колёса и удерживает машину неподвижно (например, на парковке под уклон).",
        optionRationales: [
          "Все четыре колеса — это педаль тормоза.",
          "На передние колёса ручник не действует.",
          "Ручник не действует на двигатель.",
          "",
        ],
      },
    },
  },
  {
    id: "manual-t6-03",
    section: "mechanics",
    correctIndex: 2,
    source: SOURCE,
    translations: {
      es: {
        text: "¿Cómo debes coger el volante?",
        options: [
          "Con una sola mano por comodidad",
          "Por la parte interior",
          "Con las dos manos, por fuera y con firmeza sin cruzar las manos",
          "Con los dedos, para tener más precisión",
        ],
        explanation:
          "Con las dos manos, por la parte exterior, con firmeza pero sin apretar. Nunca cruzar las manos al girar.",
        optionRationales: [
          "Solo se suelta una mano el tiempo justo para usar otros mandos.",
          "Coger por dentro es peligroso: si salta el airbag, puede lesionar los brazos.",
          "",
          "Con los dedos no hay control real ante un imprevisto.",
        ],
      },
      en: {
        text: "How should you hold the steering wheel?",
        options: [
          "One hand, for comfort",
          "From the inside of the rim",
          "Both hands, from outside, firm but not crossing hands when turning",
          "With fingers only, for precision",
        ],
        explanation:
          "Both hands, from the outside, firm but not squeezing. Never cross your hands when turning.",
        optionRationales: [
          "You only release one hand briefly to use other controls.",
          "Gripping from inside is dangerous — an airbag deploy can injure the arms.",
          "",
          "Fingertip grip gives no real control in an emergency.",
        ],
      },
      ru: {
        text: "Как правильно держать руль?",
        options: [
          "Одной рукой, для удобства",
          "С внутренней стороны обода",
          "Обеими руками, снаружи, крепко но без напряжения, не перекрещивая",
          "Пальцами — для точности",
        ],
        explanation:
          "Обеими руками, снаружи, крепко, но без напряжения. При повороте руки не перекрещивают.",
        optionRationales: [
          "Одну руку отпускают только на короткое время для других органов управления.",
          "Держать изнутри опасно: при срабатывании подушки можно травмировать руки.",
          "",
          "Пальцами — нет реального контроля при неожиданной ситуации.",
        ],
      },
    },
  },
  {
    id: "manual-t6-04",
    section: "mechanics",
    correctIndex: 0,
    source: SOURCE,
    translations: {
      es: {
        text: "Sobre los cristales del vehículo está PROHIBIDO…",
        options: [
          "Pegar láminas o pegatinas que reduzcan la visibilidad",
          "Limpiarlos",
          "Cerrar las ventanillas",
          "Colocar limpiaparabrisas",
        ],
        explanation:
          "Está prohibido pegar láminas, pegatinas o cristales de colores no homologados que reduzcan la visibilidad. La visibilidad es clave para conducir seguro.",
        optionRationales: [
          "",
          "Limpiar cristales es obligatorio para ver bien, no prohibido.",
          "Cerrar la ventanilla no está prohibido; a veces es lo correcto.",
          "El limpiaparabrisas es obligatorio y homologado, no prohibido.",
        ],
      },
      en: {
        text: "It is FORBIDDEN on vehicle windows to…",
        options: [
          "Stick films or stickers that reduce visibility",
          "Clean them",
          "Close the windows",
          "Fit windscreen wipers",
        ],
        explanation:
          "Films, stickers and non-approved tinted glass that reduce visibility are forbidden. Visibility is critical to safe driving.",
        optionRationales: [
          "",
          "Cleaning windows is mandatory for good visibility, not forbidden.",
          "Closing the window isn't forbidden; often it's the right thing.",
          "Wipers are mandatory equipment, not forbidden.",
        ],
      },
      ru: {
        text: "На стёклах автомобиля ЗАПРЕЩЕНО…",
        options: [
          "Клеить плёнки или наклейки, снижающие видимость",
          "Мыть их",
          "Закрывать окна",
          "Устанавливать стеклоочистители",
        ],
        explanation:
          "Запрещены плёнки, наклейки и несертифицированная тонировка, которые ухудшают обзор. Видимость критична для безопасности.",
        optionRationales: [
          "",
          "Мыть стёкла обязательно для хорошего обзора — не запрещено.",
          "Закрыть окно не запрещено; часто это правильно.",
          "Стеклоочистители обязательны, а не запрещены.",
        ],
      },
    },
  },
  {
    id: "manual-t6-05",
    section: "mechanics",
    correctIndex: 1,
    source: SOURCE,
    translations: {
      es: {
        text: "Los turismos deben llevar como mínimo cuántos retrovisores obligatorios?",
        options: [
          "Uno (solo el central interior)",
          "Dos (uno exterior izquierdo y uno interior central)",
          "Cuatro (uno en cada esquina)",
          "Ninguno si tienes cámara 360",
        ],
        explanation:
          "Obligatorios: uno exterior izquierdo y uno interior central. El exterior derecho es recomendable pero no obligatorio en turismos.",
        optionRationales: [
          "Solo el interior no da visión lateral izquierda; hay que sumar el exterior izquierdo.",
          "",
          "El manual no exige cuatro retrovisores; con dos se cumple.",
          "La cámara 360 no sustituye los retrovisores obligatorios.",
        ],
      },
      en: {
        text: "How many mirrors are mandatory on a car?",
        options: [
          "One (only the interior mirror)",
          "Two (left external + interior central)",
          "Four (one at every corner)",
          "None if you have a 360° camera",
        ],
        explanation:
          "Mandatory: left external + interior central. The right external mirror is recommended but not mandatory on cars.",
        optionRationales: [
          "Interior only gives no left-side view; you also need the left exterior.",
          "",
          "The manual doesn't require four mirrors; two meet the rule.",
          "A 360° camera doesn't replace the mandatory mirrors.",
        ],
      },
      ru: {
        text: "Сколько зеркал обязательно на легковом автомобиле?",
        options: [
          "Одно (только салонное)",
          "Два (левое наружное и салонное)",
          "Четыре (по одному на угол)",
          "Ни одного, если есть камера 360°",
        ],
        explanation:
          "Обязательны: левое наружное и салонное. Правое наружное рекомендуется, но не обязательно на легковом.",
        optionRationales: [
          "Только салонное не даёт левого обзора; нужно ещё левое наружное.",
          "",
          "Руководство не требует четырёх зеркал; хватает двух.",
          "Камера 360° не заменяет обязательные зеркала.",
        ],
      },
    },
  },
  {
    id: "manual-t6-06",
    section: "mechanics",
    correctIndex: 2,
    source: SOURCE,
    translations: {
      es: {
        text: "Conducir demasiado cerca del volante produce…",
        options: [
          "Mayor precisión al girar",
          "Menos fatiga",
          "Fatiga porque fuerzas el cuerpo para hacer movimientos",
          "Es la postura recomendada",
        ],
        explanation:
          "Conducir demasiado cerca del volante fuerza el cuerpo y produce fatiga. Demasiado lejos, también es peligroso porque obliga a inclinarse.",
        optionRationales: [
          "Al contrario, tan cerca reduce el margen de reacción del cuerpo.",
          "Produce MÁS fatiga, no menos.",
          "",
          "La postura recomendada es distancia media, con la cabeza sobre el volante.",
        ],
      },
      en: {
        text: "Sitting too close to the steering wheel causes…",
        options: [
          "Better turning precision",
          "Less fatigue",
          "Fatigue because you force your body to move",
          "It's the recommended posture",
        ],
        explanation:
          "Sitting too close forces your body and causes fatigue. Too far is also dangerous because you have to lean forward.",
        optionRationales: [
          "On the contrary, sitting so close reduces your body's motion margin.",
          "It causes MORE fatigue, not less.",
          "",
          "Recommended posture is medium distance with head above the wheel.",
        ],
      },
      ru: {
        text: "Сидеть слишком близко к рулю приводит к…",
        options: [
          "Более точному повороту",
          "Меньшей усталости",
          "Усталости, потому что тело работает в напряжении",
          "Это рекомендуемая посадка",
        ],
        explanation:
          "Слишком близко к рулю — тело напряжено и быстро устаёт. Слишком далеко тоже опасно: приходится тянуться.",
        optionRationales: [
          "Наоборот, слишком близко — меньше свободы для движений.",
          "Больше усталости, не меньше.",
          "",
          "Правильная посадка — средняя дистанция, голова выше руля.",
        ],
      },
    },
  },
  {
    id: "manual-t6-07",
    section: "mechanics",
    correctIndex: 3,
    source: SOURCE,
    translations: {
      es: {
        text: "El reposacabezas debe estar…",
        options: [
          "Lo más bajo posible",
          "Lo más alto posible",
          "Quitado si molesta",
          "A la altura de tu cabeza",
        ],
        explanation:
          "El reposacabezas se ajusta a la altura de tu cabeza. Si está demasiado bajo, en un choque trasero el cuello se hiperextiende (latigazo cervical).",
        optionRationales: [
          "Demasiado bajo NO protege el cuello ante impacto trasero.",
          "Demasiado alto tampoco: la nuca debe apoyar contra el reposacabezas, no por debajo.",
          "El reposacabezas es un elemento de seguridad pasiva; nunca se quita.",
          "",
        ],
      },
      en: {
        text: "The headrest should be…",
        options: [
          "As low as possible",
          "As high as possible",
          "Removed if it's in the way",
          "At the height of your head",
        ],
        explanation:
          "The headrest sits at the height of your head. Too low and in a rear crash your neck hyperextends (whiplash).",
        optionRationales: [
          "Too low does NOT protect the neck in a rear crash.",
          "Too high is also wrong: the back of the head must rest against it.",
          "The headrest is a passive-safety item; never remove it.",
          "",
        ],
      },
      ru: {
        text: "Подголовник должен быть…",
        options: [
          "Как можно ниже",
          "Как можно выше",
          "Снят, если мешает",
          "На уровне вашей головы",
        ],
        explanation:
          "Подголовник — на уровне головы. Слишком низко — при ударе сзади шея переразгибается (хлыстовая травма).",
        optionRationales: [
          "Слишком низко НЕ защищает шею при ударе сзади.",
          "Слишком высоко тоже неправильно: затылок должен упираться в подголовник.",
          "Подголовник — элемент пассивной безопасности; его не снимают.",
          "",
        ],
      },
    },
  },
  {
    id: "manual-t6-08",
    section: "mechanics",
    correctIndex: 0,
    source: SOURCE,
    translations: {
      es: {
        text: "El asistente de aparcamiento…",
        options: [
          "El conductor debe mantener la atención y puede parar la maniobra en cualquier momento",
          "Elimina toda responsabilidad del conductor",
          "Sustituye al carnet de conducir",
          "Solo funciona en autopista",
        ],
        explanation:
          "El asistente ayuda pero no sustituye al conductor. Este debe prestar atención y puede detener la maniobra si detecta peligro.",
        optionRationales: [
          "",
          "Ningún ADAS elimina la responsabilidad del conductor.",
          "Los sistemas de ayuda no sustituyen al permiso de conducir.",
          "El asistente de aparcamiento se usa donde hay que aparcar, no en autopista.",
        ],
      },
      en: {
        text: "The parking assistant…",
        options: [
          "The driver must stay attentive and can abort the maneuver anytime",
          "Removes all driver responsibility",
          "Replaces the driving licence",
          "Only works on motorways",
        ],
        explanation:
          "The assistant helps but doesn't replace the driver. You stay attentive and can stop the maneuver at any time.",
        optionRationales: [
          "",
          "No ADAS system removes driver responsibility.",
          "Assistance systems don't replace a driving licence.",
          "Parking assist is used where you park, not on motorways.",
        ],
      },
      ru: {
        text: "Система помощи при парковке…",
        options: [
          "Водитель должен быть внимателен и в любой момент может прервать манёвр",
          "Полностью снимает с водителя ответственность",
          "Заменяет водительские права",
          "Работает только на автомагистрали",
        ],
        explanation:
          "Помощник помогает, но не заменяет водителя. Тот должен быть внимателен и может остановить манёвр в любой момент.",
        optionRationales: [
          "",
          "Ни одна ADAS-система не снимает ответственность с водителя.",
          "Системы помощи не заменяют права.",
          "Ассистент нужен там, где паркуются, а не на автомагистрали.",
        ],
      },
    },
  },
  {
    id: "manual-t6-09",
    section: "mechanics",
    correctIndex: 2,
    source: SOURCE,
    translations: {
      es: {
        text: "El sistema TSR (reconocimiento de señales) sirve para…",
        options: [
          "Cambiar de carril automáticamente",
          "Aparcar solo",
          "Detectar señales de límite de velocidad y avisar al conductor (o reducir la velocidad)",
          "Encender las luces automáticamente",
        ],
        explanation:
          "TSR (Traffic Sign Recognition): detecta las señales de límite de velocidad y las muestra al conductor. En algunos vehículos también reduce la velocidad automáticamente.",
        optionRationales: [
          "El cambio de carril lo gestiona LKA/LDW, no TSR.",
          "Aparcar es función del asistente de aparcamiento, no de TSR.",
          "",
          "Las luces automáticas son otra función distinta del TSR.",
        ],
      },
      en: {
        text: "The TSR (Traffic Sign Recognition) system…",
        options: [
          "Changes lanes automatically",
          "Parks the car itself",
          "Detects speed-limit signs and warns the driver (or reduces speed)",
          "Turns headlights on automatically",
        ],
        explanation:
          "TSR detects speed-limit signs and shows them to the driver. Some vehicles also auto-reduce speed.",
        optionRationales: [
          "Lane-change is LKA/LDW, not TSR.",
          "Parking is the parking assistant, not TSR.",
          "",
          "Auto-headlights is a separate function from TSR.",
        ],
      },
      ru: {
        text: "Система TSR (распознавания знаков) нужна для…",
        options: [
          "Автоматической смены полосы",
          "Самостоятельной парковки",
          "Распознавания знаков ограничения скорости и предупреждения водителя (или снижения скорости)",
          "Автоматического включения фар",
        ],
        explanation:
          "TSR — Traffic Sign Recognition: распознаёт знаки ограничения скорости и показывает их водителю. Иногда автоматически снижает скорость.",
        optionRationales: [
          "Сменой полосы занимается LKA/LDW, а не TSR.",
          "Парковка — работа ассистента парковки, не TSR.",
          "",
          "Автосвет — отдельная функция, не TSR.",
        ],
      },
    },
  },
  {
    id: "manual-t6-10",
    section: "mechanics",
    correctIndex: 1,
    source: SOURCE,
    translations: {
      es: {
        text: "Si mientras conduces descubres que los retrovisores están mal colocados, debes…",
        options: [
          "Ajustarlos mientras conduces con una mano",
          "Parar el vehículo en un lugar llano y recto y ajustarlos",
          "Ignorarlo hasta llegar al destino",
          "Pedir a un pasajero que se levante y los ajuste",
        ],
        explanation:
          "El manual recomienda parar el vehículo en un lugar llano y recto para ajustar los retrovisores. Ajustarlos en marcha es peligroso.",
        optionRationales: [
          "Ajustar con una mano en marcha te distrae y no puedes calibrarlos bien.",
          "",
          "Conducir con mala visión trasera es peligroso; no se ignora.",
          "Un pasajero de pie es un riesgo enorme; no se ajusta así.",
        ],
      },
      en: {
        text: "If while driving you find mirrors are misaligned, you should…",
        options: [
          "Adjust them one-handed while driving",
          "Stop the vehicle on a flat straight spot and adjust",
          "Ignore it until you arrive",
          "Have a passenger stand up and adjust them",
        ],
        explanation:
          "The manual says to stop on a flat straight stretch and adjust. Adjusting while moving is dangerous.",
        optionRationales: [
          "One-handed adjust while moving distracts and doesn't calibrate well.",
          "",
          "Driving without proper rear view is dangerous; don't ignore.",
          "A standing passenger is a huge risk; you never adjust that way.",
        ],
      },
      ru: {
        text: "Если во время движения вы заметили, что зеркала настроены неправильно, следует…",
        options: [
          "Подстроить их одной рукой на ходу",
          "Остановиться на ровном прямом участке и настроить",
          "Игнорировать до конца поездки",
          "Попросить пассажира встать и настроить",
        ],
        explanation:
          "Руководство советует остановиться на ровном прямом участке и подстроить зеркала. Настраивать на ходу опасно.",
        optionRationales: [
          "Настройка на ходу отвлекает и не даёт точного результата.",
          "",
          "Ехать без нормального обзора сзади опасно — игнорировать нельзя.",
          "Стоящий пассажир — огромный риск; так не настраивают.",
        ],
      },
    },
  },
  {
    id: "manual-t6-11",
    section: "mechanics",
    correctIndex: 2,
    source: SOURCE,
    translations: {
      es: {
        text: "La profundidad mínima legal del dibujo (banda de rodadura) de los neumáticos de un turismo es de…",
        options: ["0,8 mm", "1,2 mm", "1,6 mm", "3 mm"],
        explanation:
          "La profundidad mínima legal es de 1,6 mm en toda la banda de rodadura. Por debajo, el neumático no evacúa agua y aumenta el riesgo de aquaplaning y frenadas largas.",
        optionRationales: [
          "0,8 mm está por debajo del mínimo legal; el neumático sería peligroso.",
          "1,2 mm tampoco cumple; no es la cifra oficial.",
          "",
          "3 mm es una recomendación de cambio preventivo, no el mínimo legal.",
        ],
      },
      en: {
        text: "The minimum legal tyre tread depth on a car is…",
        options: ["0.8 mm", "1.2 mm", "1.6 mm", "3 mm"],
        explanation:
          "The legal minimum is 1.6 mm across the whole tread. Below that the tyre can't evacuate water — aquaplaning risk and longer braking distances.",
        optionRationales: [
          "0.8 mm is below the legal minimum; the tyre would be unsafe.",
          "1.2 mm doesn't meet the requirement either; not the official figure.",
          "",
          "3 mm is a recommended change-early depth, not the legal minimum.",
        ],
      },
      ru: {
        text: "Минимальная глубина протектора шин легкового автомобиля по закону —",
        options: ["0,8 мм", "1,2 мм", "1,6 мм", "3 мм"],
        explanation:
          "Юридический минимум — 1,6 мм по всей рабочей поверхности. Ниже — шина не отводит воду, растёт риск аквапланирования и удлиняется тормозной путь.",
        optionRationales: [
          "0,8 мм — ниже минимума; шина опасна.",
          "1,2 мм — тоже не выдерживает норму; не официальная цифра.",
          "",
          "3 мм — рекомендуемая для замены раньше, не юридический минимум.",
        ],
      },
    },
  },
  {
    id: "manual-t6-12",
    section: "mechanics",
    correctIndex: 3,
    source: SOURCE,
    translations: {
      es: {
        text: "El ABS (sistema antibloqueo de frenos) permite…",
        options: [
          "Frenar más lejos de un obstáculo",
          "Bloquear las ruedas para deslizarse mejor",
          "Aumentar la velocidad al frenar",
          "Frenar fuerte sin bloquear las ruedas, manteniendo la capacidad de dirigir el coche",
        ],
        explanation:
          "El ABS evita el bloqueo de las ruedas al frenar bruscamente. Así el conductor puede seguir dirigiendo el vehículo mientras frena a fondo, sobre todo para esquivar obstáculos.",
        optionRationales: [
          "Al contrario: el ABS reduce la distancia de frenada útil y sobre todo mantiene la dirección.",
          "El ABS EVITA el bloqueo; no lo provoca. Bloqueadas, las ruedas no dirigen.",
          "El ABS es un sistema de frenado; no aumenta la velocidad.",
          "",
        ],
      },
      en: {
        text: "ABS (anti-lock braking system) lets you…",
        options: [
          "Brake further from an obstacle",
          "Lock the wheels for better sliding",
          "Increase speed while braking",
          "Brake hard without locking the wheels, keeping steering ability",
        ],
        explanation:
          "ABS prevents wheel lock during hard braking. That way you can keep steering while braking flat-out — especially useful to swerve around obstacles.",
        optionRationales: [
          "Opposite: ABS reduces useful braking distance and keeps steering.",
          "ABS PREVENTS lock; it doesn't cause it. Locked wheels can't steer.",
          "ABS is a braking system; it doesn't increase speed.",
          "",
        ],
      },
      ru: {
        text: "ABS (антиблокировочная система) позволяет…",
        options: [
          "Тормозить дальше от препятствия",
          "Заблокировать колёса для лучшего скольжения",
          "Увеличить скорость при торможении",
          "Резко тормозить без блокировки колёс, сохраняя управляемость",
        ],
        explanation:
          "ABS предотвращает блокировку колёс при резком торможении. Так водитель может рулить, тормозя в пол — особенно чтобы объехать препятствие.",
        optionRationales: [
          "Наоборот: ABS сокращает эффективный тормозной путь и сохраняет управление.",
          "ABS ПРЕДОТВРАЩАЕТ блокировку, а не создаёт её. Заблокированные колёса не рулят.",
          "ABS — это система торможения; она не разгоняет.",
          "",
        ],
      },
    },
  },
  {
    id: "manual-t6-13",
    section: "mechanics",
    correctIndex: 1,
    source: SOURCE,
    translations: {
      es: {
        text: "El ESP (o ESC) es un sistema que…",
        options: [
          "Aumenta la potencia del motor",
          "Corrige la trayectoria del vehículo si detecta que empieza a derrapar o a perder estabilidad",
          "Enciende las luces automáticamente",
          "Reduce el consumo de combustible en llano",
        ],
        explanation:
          "El ESP (Electronic Stability Program) detecta derrapes o pérdidas de estabilidad y actúa sobre los frenos y el motor de forma independiente en cada rueda para recuperar la trayectoria.",
        optionRationales: [
          "El ESP no toca la potencia como aumento; solo la modula para estabilizar.",
          "",
          "Encender luces automáticamente es una función de las luces auto, no del ESP.",
          "El ESP no está pensado para reducir consumo, sino para evitar accidentes por pérdida de control.",
        ],
      },
      en: {
        text: "ESP (or ESC) is a system that…",
        options: [
          "Boosts engine power",
          "Corrects the vehicle's path when it detects a skid or loss of stability",
          "Turns headlights on automatically",
          "Reduces fuel consumption on flat roads",
        ],
        explanation:
          "ESP (Electronic Stability Program) detects skids or stability loss and acts on brakes and engine independently at each wheel to restore the trajectory.",
        optionRationales: [
          "ESP doesn't boost power; it only modulates it to stabilise.",
          "",
          "Auto headlights is a separate feature, not ESP.",
          "ESP isn't for fuel saving; it prevents loss-of-control crashes.",
        ],
      },
      ru: {
        text: "ESP (или ESC) — это система, которая…",
        options: [
          "Повышает мощность двигателя",
          "Корректирует траекторию, если обнаруживает занос или потерю устойчивости",
          "Автоматически включает фары",
          "Снижает расход топлива на равнине",
        ],
        explanation:
          "ESP (Electronic Stability Program) распознаёт занос или потерю устойчивости и подтормаживает отдельные колёса, а также вмешивается в двигатель, чтобы вернуть машину на курс.",
        optionRationales: [
          "ESP не «повышает» мощность, а модулирует её для стабилизации.",
          "",
          "Автосвет — отдельная функция, не ESP.",
          "ESP не для экономии, а против потери управления.",
        ],
      },
    },
  },
  {
    id: "manual-t6-14",
    section: "mechanics",
    correctIndex: 0,
    source: SOURCE,
    translations: {
      es: {
        text: "Un menor de estatura inferior a 1,35 m no puede viajar en el asiento delantero salvo en supuestos como…",
        options: [
          "Que no haya asientos traseros o estén todos ocupados por otros menores en SRI",
          "Que el conductor lo autorice porque conduce con cuidado",
          "Que viajen menos de 30 minutos",
          "Que el airbag esté encendido",
        ],
        explanation:
          "Los menores de 1,35 m viajan en los asientos traseros con SRI. Excepcionalmente van delante si el vehículo no tiene asientos traseros o si están todos ocupados por otros menores con SRI. Delante y con airbag frontal, el SRI a contra-marcha está prohibido.",
        optionRationales: [
          "",
          "«Conducir con cuidado» no exime; hay riesgo de choque incluso del conductor prudente.",
          "La duración del viaje no autoriza saltarse las reglas de seguridad.",
          "El airbag delantero es precisamente el motivo para NO llevar SRI a contra-marcha delante.",
        ],
      },
      en: {
        text: "A child under 1.35 m tall may only ride in the front seat in cases such as…",
        options: [
          "There are no rear seats, or they are all occupied by other children in CRS",
          "The driver allows it because they drive carefully",
          "The trip is less than 30 minutes",
          "The airbag is on",
        ],
        explanation:
          "Children under 1.35 m ride in the rear with a CRS. As an exception they can ride in front if there are no rear seats, or they are all taken by other children in CRS. With a front airbag on, a rearward-facing CRS in front is forbidden.",
        optionRationales: [
          "",
          "'Driving carefully' isn't an exemption; other drivers can still hit you.",
          "Trip length doesn't authorise skipping safety rules.",
          "A front airbag is precisely the reason NOT to put a rearward CRS in front.",
        ],
      },
      ru: {
        text: "Ребёнок ростом менее 1,35 м может ехать на переднем сиденье только если…",
        options: [
          "Задних сидений нет или они заняты другими детьми в креслах",
          "Водитель разрешил, потому что он аккуратный",
          "Поездка меньше 30 минут",
          "Включена подушка безопасности",
        ],
        explanation:
          "Дети до 1,35 м ездят сзади в детском кресле. Спереди — как исключение, если нет задних сидений или они заняты другими детьми в креслах. Против движения спереди при включённой подушке ставить нельзя.",
        optionRationales: [
          "",
          "«Аккуратный водитель» не оправдание — есть другие водители.",
          "Длительность поездки не разрешает нарушать правила безопасности.",
          "Передняя подушка — как раз причина НЕ ставить кресло против движения спереди.",
        ],
      },
    },
  },
  {
    id: "manual-t6-15",
    section: "mechanics",
    correctIndex: 2,
    source: SOURCE,
    translations: {
      es: {
        text: "El nivel de aceite del motor debe comprobarse…",
        options: [
          "Con el motor recién arrancado, aún caliente",
          "En cualquier momento",
          "Con el vehículo en llano y el motor frío o algunos minutos después de apagarlo",
          "Solo en talleres, nunca por el conductor",
        ],
        explanation:
          "El nivel de aceite se comprueba en llano, con el motor frío o unos minutos después de apagarlo, para que el aceite haya vuelto al cárter. Si se mide caliente y en marcha, el resultado no es fiable.",
        optionRationales: [
          "Con el motor caliente, parte del aceite está circulando; la medición engaña.",
          "«En cualquier momento» ignora la necesidad de que el aceite esté en el cárter.",
          "",
          "El conductor puede y debe comprobar el nivel; no es exclusivo del taller.",
        ],
      },
      en: {
        text: "The engine oil level should be checked…",
        options: [
          "Right after starting, while still warm",
          "At any time",
          "On level ground with the engine cold or a few minutes after switching off",
          "Only in workshops, never by the driver",
        ],
        explanation:
          "Check oil on level ground with the engine cold or a few minutes after switch-off, so the oil is back in the sump. Measuring hot and running gives an unreliable reading.",
        optionRationales: [
          "With a hot running engine, some oil is still circulating — the reading is misleading.",
          "'Any time' ignores the need for the oil to have returned to the sump.",
          "",
          "The driver can and should check the level; it isn't workshop-only.",
        ],
      },
      ru: {
        text: "Уровень масла в двигателе следует проверять…",
        options: [
          "Сразу после запуска, пока двигатель горячий",
          "В любой момент",
          "На ровной поверхности при холодном двигателе или через несколько минут после остановки",
          "Только в сервисе, никогда самому",
        ],
        explanation:
          "Уровень масла проверяют на ровной площадке, при холодном двигателе или через несколько минут после остановки — тогда масло стекло в поддон. Горячим и заведённым проверять нельзя.",
        optionRationales: [
          "Пока двигатель работает и горячий, часть масла в системе; результат обманчив.",
          "«В любой момент» игнорирует необходимость стекания масла в поддон.",
          "",
          "Водитель может и должен проверять уровень сам; не только сервис.",
        ],
      },
    },
  },
];
