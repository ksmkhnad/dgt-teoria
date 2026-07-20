import type { Question } from "@/lib/types";

// DGT Manual Permiso B (Lectura Fácil, 2024), Tema 5 — Dispositivos de seguridad.

const SOURCE = "DGT Manual Permiso B (Lectura Fácil, 2024), Tema 5";

export const QUESTIONS_MANUAL_T5: Question[] = [
  {
    id: "manual-t5-01",
    section: "safety",
    correctIndex: 2,
    source: SOURCE,
    translations: {
      es: {
        text: "¿Cuál es la diferencia entre seguridad activa y seguridad pasiva?",
        options: [
          "La activa se usa de día y la pasiva de noche",
          "La activa protege al conductor y la pasiva a los peatones",
          "La activa evita accidentes y requiere que el conductor la use; la pasiva reduce los daños y actúa de forma automática",
          "No hay diferencia real, son sinónimos",
        ],
        explanation:
          "Seguridad activa: elementos que evitan accidentes y necesitan uso del conductor (frenos, ruedas, luces). Seguridad pasiva: elementos que reducen daños y funcionan automáticamente (cinturón, airbag, reposacabezas).",
        optionRationales: [
          "El momento del día no es lo que las distingue; el criterio es preventivo vs paliativo.",
          "Ambas protegen a todos los ocupantes; no se dividen por tipo de usuario.",
          "",
          "Son categorías distintas y complementarias, no sinónimos.",
        ],
      },
      en: {
        text: "What is the difference between active and passive safety?",
        options: [
          "Active is used during the day, passive at night",
          "Active protects the driver, passive protects pedestrians",
          "Active prevents accidents and needs driver input; passive reduces harm and works automatically",
          "There's no real difference — synonyms",
        ],
        explanation:
          "Active safety: elements that prevent crashes and need driver use (brakes, tyres, lights). Passive safety: elements that reduce injury and work automatically (seatbelt, airbag, headrest).",
        optionRationales: [
          "Time of day isn't the criterion; the split is preventive vs mitigating.",
          "Both protect all occupants; they don't split by user type.",
          "",
          "They are distinct, complementary categories — not synonyms.",
        ],
      },
      ru: {
        text: "Чем отличается активная безопасность от пассивной?",
        options: [
          "Активная — днём, пассивная — ночью",
          "Активная защищает водителя, пассивная — пешеходов",
          "Активная предотвращает ДТП и требует действий водителя; пассивная снижает ущерб и работает автоматически",
          "Разницы нет, синонимы",
        ],
        explanation:
          "Активная — предотвращает ДТП, требует использования водителем (тормоза, шины, свет). Пассивная — снижает вред и работает автоматически (ремень, подушка, подголовник).",
        optionRationales: [
          "Время суток — не критерий; разделение по принципу профилактика/смягчение.",
          "Обе защищают всех в машине; разделения по типу участника нет.",
          "",
          "Это разные и взаимодополняющие категории, не синонимы.",
        ],
      },
    },
  },
  {
    id: "manual-t5-02",
    section: "safety",
    correctIndex: 0,
    source: SOURCE,
    termIds: ["abs"],
    translations: {
      es: {
        text: "El sistema ABS sirve para…",
        options: [
          "Evitar que las ruedas se bloqueen al frenar, manteniendo el control del vehículo",
          "Reducir el consumo de combustible",
          "Encender las luces automáticamente",
          "Detectar peatones",
        ],
        explanation:
          "El ABS impide el bloqueo de las ruedas en la frenada, permitiendo mantener la dirección del vehículo y frenar en menos espacio.",
        optionRationales: [
          "",
          "El ABS actúa sobre los frenos, no sobre el consumo (aunque puede alargar la vida del neumático).",
          "Encender luces automáticamente es otra función (sensor de luz), no el ABS.",
          "Detectar peatones lo hace el AEB o cámaras específicas, no el ABS.",
        ],
      },
      en: {
        text: "The ABS system is used to…",
        options: [
          "Prevent wheels from locking when braking, keeping steering control",
          "Reduce fuel consumption",
          "Turn on the lights automatically",
          "Detect pedestrians",
        ],
        explanation:
          "ABS prevents the wheels from locking when braking, letting you keep steering control and brake in less distance.",
        optionRationales: [
          "",
          "ABS works on the brakes, not on fuel consumption (though it can extend tyre life).",
          "Auto-lights is a separate function (light sensor), not ABS.",
          "Pedestrian detection is AEB / specific cameras, not ABS.",
        ],
      },
      ru: {
        text: "Система ABS нужна для того, чтобы…",
        options: [
          "Не давать колёсам блокироваться при торможении и сохранять управляемость",
          "Снижать расход топлива",
          "Автоматически включать фары",
          "Обнаруживать пешеходов",
        ],
        explanation:
          "ABS не даёт колёсам блокироваться при торможении, позволяя сохранять управление и тормозить на меньшем расстоянии.",
        optionRationales: [
          "",
          "ABS работает с тормозами, а не с расходом (хотя может продлить ресурс шин).",
          "Автосвет — отдельная функция (датчик света), не ABS.",
          "Обнаружение пешеходов — это AEB и камеры, не ABS.",
        ],
      },
    },
  },
  {
    id: "manual-t5-03",
    section: "safety",
    correctIndex: 3,
    source: SOURCE,
    termIds: ["abs"],
    translations: {
      es: {
        text: "Para una frenada de emergencia en un vehículo CON ABS, debes…",
        options: [
          "Pisar suave y a intervalos",
          "Pisar y soltar el freno rápidamente para evitar el bloqueo",
          "Usar solo el freno de mano",
          "Pisar fuerte y a fondo el pedal hasta que el vehículo se pare del todo",
        ],
        explanation:
          "Con ABS: pisar fuerte y a fondo el freno hasta detener el vehículo. El sistema evita el bloqueo automáticamente. Sin ABS: pisar hasta notar el bloqueo y aliviar sin dejar de frenar.",
        optionRationales: [
          "Pisar suave no aprovecha el sistema; se pierde distancia de frenado.",
          "Bombear el freno es la técnica SIN ABS; con ABS anula el sistema y alarga la frenada.",
          "El freno de mano en emergencia puede bloquear las ruedas traseras y provocar derrape.",
          "",
        ],
      },
      en: {
        text: "For emergency braking WITH ABS, you should…",
        options: [
          "Brake gently in pulses",
          "Pump the brake quickly to avoid locking",
          "Use only the handbrake",
          "Press the pedal hard and to the floor until the vehicle stops",
        ],
        explanation:
          "With ABS: press the brake hard and to the floor until stopped — the system prevents locking automatically. Without ABS: press until wheels begin to lock, then ease off slightly while continuing to brake.",
        optionRationales: [
          "Gentle braking doesn't use the system; you lose braking distance.",
          "Pumping is the technique WITHOUT ABS; with ABS it defeats the system and lengthens the stop.",
          "The handbrake in an emergency can lock the rear wheels and cause a skid.",
          "",
        ],
      },
      ru: {
        text: "Экстренное торможение на автомобиле С ABS выполняется так:",
        options: [
          "Тормозить мягко и импульсами",
          "Быстро нажимать-отпускать педаль, чтобы не блокировались колёса",
          "Использовать только ручник",
          "Резко и до упора нажать тормоз, пока автомобиль полностью не остановится",
        ],
        explanation:
          "С ABS — нажимать сильно и до упора, пока не остановишься; система сама не даёт блокировке. Без ABS — жать, пока не почувствуешь блокировку, слегка ослабить, продолжая торможение.",
        optionRationales: [
          "Мягкое торможение не задействует систему; теряется тормозной путь.",
          "«Прокачивание» — техника БЕЗ ABS; с ABS она отключает систему и удлиняет тормозной путь.",
          "Ручник в экстренной ситуации может заблокировать задние колёса и вызвать занос.",
          "",
        ],
      },
    },
  },
  {
    id: "manual-t5-04",
    section: "safety",
    correctIndex: 1,
    source: SOURCE,
    translations: {
      es: {
        text: "¿Cuál es la profundidad mínima legal del dibujo (banda de rodamiento) de los neumáticos de un turismo?",
        options: ["1,0 mm", "1,6 mm", "2,5 mm", "3,0 mm"],
        explanation:
          "La banda de rodamiento de los turismos debe tener unas ranuras con al menos 1,6 mm de profundidad.",
        optionRationales: [
          "1,0 mm es inferior al mínimo legal; con ese dibujo hay que cambiar los neumáticos.",
          "",
          "2,5 mm es una recomendación de seguridad (mejor cambio anticipado), no el mínimo legal.",
          "3,0 mm también es una recomendación conservadora, no la cifra legal.",
        ],
      },
      en: {
        text: "What is the minimum legal tread depth for a car's tyres?",
        options: ["1.0 mm", "1.6 mm", "2.5 mm", "3.0 mm"],
        explanation:
          "The tread of a car's tyres must have grooves at least 1.6 mm deep.",
        optionRationales: [
          "1.0 mm is below the legal minimum; at that depth you must replace them.",
          "",
          "2.5 mm is a safety recommendation (change earlier), not the legal minimum.",
          "3.0 mm is a conservative recommendation, not the legal figure.",
        ],
      },
      ru: {
        text: "Минимальная законная глубина протектора шин легкового авто?",
        options: ["1,0 мм", "1,6 мм", "2,5 мм", "3,0 мм"],
        explanation:
          "Протектор шины легкового авто должен иметь канавки глубиной минимум 1,6 мм.",
        optionRationales: [
          "1,0 мм ниже законного минимума; при таком износе шину пора менять.",
          "",
          "2,5 мм — рекомендация по безопасности (менять заранее), не законный минимум.",
          "3,0 мм — консервативная рекомендация, не законная цифра.",
        ],
      },
    },
  },
  {
    id: "manual-t5-05",
    section: "safety",
    correctIndex: 0,
    source: SOURCE,
    translations: {
      es: {
        text: "¿Cada cuánto se deben cambiar los neumáticos, aunque estén en buen estado?",
        options: ["Cada 5 años", "Cada año", "Cada 10 años", "Solo si están desgastados"],
        explanation:
          "Los neumáticos se cambian cada 5 años aunque estén en buen estado, porque la goma envejece con el tiempo.",
        optionRationales: [
          "",
          "Cambiar cada año es innecesario si el uso es normal; el criterio es antigüedad + desgaste.",
          "10 años es demasiado; la goma se degrada y aparecen grietas invisibles.",
          "Aunque no se vean desgastados, la goma envejece; el criterio no es solo visual.",
        ],
      },
      en: {
        text: "How often should tyres be replaced, even in good condition?",
        options: ["Every 5 years", "Every year", "Every 10 years", "Only when worn out"],
        explanation:
          "Tyres should be replaced every 5 years even if visually fine, because the rubber ages.",
        optionRationales: [
          "",
          "Every year is unnecessary with normal use; the criterion is age + wear.",
          "10 years is too long; rubber degrades and invisible cracks appear.",
          "Even when they look fine, the rubber ages; the criterion isn't purely visual.",
        ],
      },
      ru: {
        text: "Как часто нужно менять шины, даже если они в хорошем состоянии?",
        options: ["Каждые 5 лет", "Каждый год", "Каждые 10 лет", "Только когда изношены"],
        explanation:
          "Шины меняют каждые 5 лет, даже если внешне целы — резина стареет.",
        optionRationales: [
          "",
          "Каждый год не нужно при обычной эксплуатации; критерий — возраст + износ.",
          "10 лет — слишком долго; резина деградирует, появляются невидимые трещины.",
          "Даже без видимого износа резина стареет; критерий не только визуальный.",
        ],
      },
    },
  },
  {
    id: "manual-t5-06",
    section: "safety",
    correctIndex: 2,
    source: SOURCE,
    translations: {
      es: {
        text: "Si los neumáticos llevan MENOS presión de la recomendada…",
        options: [
          "El vehículo consume menos combustible",
          "Los neumáticos se agarran mejor a la carretera",
          "El neumático se calienta, se deforma, se desgasta antes, se consume más combustible y aumenta el riesgo de patinar y de reventar",
          "No hay ninguna consecuencia",
        ],
        explanation:
          "Baja presión: el neumático se calienta, se deforma, se desgasta antes, sube el consumo y aumenta el riesgo de patinar en mojado y de reventón.",
        optionRationales: [
          "Es al revés: consume MÁS combustible por mayor resistencia a la rodadura.",
          "Aunque haya más superficie de contacto, la deformación reduce adherencia real y aumenta el riesgo de aquaplaning.",
          "",
          "Sí hay consecuencias graves: seguridad, consumo y vida útil del neumático.",
        ],
      },
      en: {
        text: "If tyres are UNDER-inflated compared to the recommended pressure…",
        options: [
          "The vehicle uses less fuel",
          "The tyres grip the road better",
          "The tyre overheats, deforms, wears faster, fuel use rises, and the risk of skidding on wet and bursting increases",
          "There is no consequence",
        ],
        explanation:
          "Under-inflation: the tyre overheats, deforms, wears faster, fuel consumption rises, and the risk of skidding on wet and of blowout increases.",
        optionRationales: [
          "It's the opposite: MORE fuel due to higher rolling resistance.",
          "More contact area doesn't help; deformation reduces real grip and raises aquaplaning risk.",
          "",
          "There are serious consequences: safety, consumption and tyre lifetime.",
        ],
      },
      ru: {
        text: "Если давление в шинах НИЖЕ рекомендованного…",
        options: [
          "Расход топлива снижается",
          "Шины лучше держат дорогу",
          "Шина перегревается, деформируется, быстрее изнашивается, растёт расход, повышается риск заноса и разрыва",
          "Никаких последствий",
        ],
        explanation:
          "Пониженное давление: шина перегревается, деформируется, ускоренный износ, растёт расход, выше риск заноса на мокром и разрыва.",
        optionRationales: [
          "Наоборот: расход РАСТЁТ из-за сопротивления качению.",
          "Больше пятна контакта не помогает; деформация снижает реальное сцепление и повышает риск аквапланирования.",
          "",
          "Последствия серьёзные: безопасность, расход и ресурс шин.",
        ],
      },
    },
  },
  {
    id: "manual-t5-07",
    section: "safety",
    correctIndex: 1,
    source: SOURCE,
    translations: {
      es: {
        text: "¿Con qué frecuencia deberías comprobar la presión de los neumáticos?",
        options: ["Cada 3 meses", "Al menos una vez al mes", "Cada semana", "Solo antes de un viaje largo"],
        explanation:
          "Se debe controlar la presión de los neumáticos al menos una vez al mes. También conviene llevar una rueda de repuesto con la presión correcta.",
        optionRationales: [
          "Cada 3 meses es demasiado poco frecuente; la presión puede caer por temperatura y microfugas.",
          "",
          "Cada semana es innecesario; con una vez al mes es suficiente para uso normal.",
          "Solo antes de un viaje largo deja a la deriva la presión el resto del año.",
        ],
      },
      en: {
        text: "How often should you check tyre pressure?",
        options: ["Every 3 months", "At least once a month", "Every week", "Only before a long trip"],
        explanation:
          "Check tyre pressure at least once a month. Also keep a spare tyre with the correct pressure.",
        optionRationales: [
          "Every 3 months is too infrequent; pressure drops with temperature and micro-leaks.",
          "",
          "Every week is unnecessary; once a month covers normal use.",
          "Only before long trips leaves pressure unchecked the rest of the year.",
        ],
      },
      ru: {
        text: "Как часто нужно проверять давление в шинах?",
        options: ["Раз в 3 месяца", "Не реже раза в месяц", "Каждую неделю", "Только перед длительной поездкой"],
        explanation:
          "Давление в шинах проверяют минимум раз в месяц. Также стоит держать запаску с правильным давлением.",
        optionRationales: [
          "Раз в 3 месяца — слишком редко; давление падает от температуры и микроутечек.",
          "",
          "Каждую неделю не нужно; раз в месяц хватает для обычной эксплуатации.",
          "Только перед длительной поездкой — остальное время давление без контроля.",
        ],
      },
    },
  },
  {
    id: "manual-t5-08",
    section: "safety",
    correctIndex: 2,
    source: SOURCE,
    translations: {
      es: {
        text: "Si los frenos empiezan a fallar por sobrecalentamiento en una bajada larga, la solución es…",
        options: [
          "Pisar el freno con más fuerza",
          "Frenar solo con el freno de mano de manera brusca",
          "No acelerar, reducir marchas para que el motor frene y, si es necesario, tirar suavemente del freno de mano",
          "Apagar el motor",
        ],
        explanation:
          "En una cuesta larga con frenos calientes: no acelerar, reducir marchas para usar el freno motor y, si no se puede reducir, tirar del freno de mano de forma suave.",
        optionRationales: [
          "Pisar más los calienta aún más; los frenos pueden fallar por completo.",
          "El freno de mano brusco bloquea las traseras y provoca derrape.",
          "",
          "Apagar el motor te quita dirección asistida, freno motor y bomba de vacío del servofreno; peligrosísimo.",
        ],
      },
      en: {
        text: "If brakes start failing due to overheating on a long descent, the fix is…",
        options: [
          "Press the brake harder",
          "Yank the handbrake suddenly",
          "Don't accelerate, downshift so the engine brakes, and if needed pull the handbrake gently",
          "Switch off the engine",
        ],
        explanation:
          "On a long descent with overheating brakes: don't accelerate, downshift to use engine braking, and if you can't downshift, pull the handbrake gently.",
        optionRationales: [
          "Pressing harder heats them more; brakes can fail completely.",
          "A sudden handbrake locks the rear wheels and causes a skid.",
          "",
          "Switching off the engine kills power steering, engine braking and the brake booster's vacuum pump — extremely dangerous.",
        ],
      },
      ru: {
        text: "Если на длинном спуске тормоза начинают отказывать от перегрева, что делать?",
        options: [
          "Сильнее давить на педаль",
          "Резко дёрнуть ручник",
          "Не ускоряться, понизить передачи для торможения двигателем, при необходимости — мягко поднять ручник",
          "Заглушить двигатель",
        ],
        explanation:
          "На длинном спуске при перегретых тормозах: не ускоряться, понижать передачи для торможения двигателем, при необходимости — плавно поднять ручник.",
        optionRationales: [
          "Сильнее давить — ещё больше нагрев, тормоза могут полностью отказать.",
          "Резкий ручник блокирует задние колёса — занос.",
          "",
          "Заглушить мотор — потеря усилителя руля, торможения двигателем и вакуума усилителя тормозов; крайне опасно.",
        ],
      },
    },
  },
  {
    id: "manual-t5-09",
    section: "safety",
    correctIndex: 3,
    source: SOURCE,
    termIds: ["airbag", "cinturon_seguridad"],
    translations: {
      es: {
        text: "El airbag…",
        options: [
          "Sustituye al cinturón de seguridad",
          "Solo protege en accidentes frontales",
          "Es opcional y no obligatorio",
          "Complementa al cinturón; no lo sustituye. Sin cinturón puede causar más lesiones",
        ],
        explanation:
          "El airbag es un elemento de seguridad pasiva que complementa el cinturón. No lo sustituye: sin cinturón el impacto del airbag puede causar lesiones graves adicionales.",
        optionRationales: [
          "El cinturón sigue siendo obligatorio; el airbag no lo reemplaza.",
          "Hay airbags laterales, de cortina y de rodillas para distintos tipos de impacto.",
          "En los turismos modernos es obligatorio; no es un extra opcional.",
          "",
        ],
      },
      en: {
        text: "The airbag…",
        options: [
          "Replaces the seatbelt",
          "Only protects in frontal crashes",
          "Is optional and not required",
          "Complements the seatbelt; does not replace it. Without a seatbelt it can cause worse injuries",
        ],
        explanation:
          "The airbag is a passive-safety element that complements the seatbelt. It does not replace it: without a seatbelt the airbag's impact can add serious injury.",
        optionRationales: [
          "The seatbelt is still mandatory; the airbag doesn't replace it.",
          "There are side, curtain and knee airbags for different crash types.",
          "In modern cars it's mandatory equipment, not an optional extra.",
          "",
        ],
      },
      ru: {
        text: "Подушка безопасности…",
        options: [
          "Заменяет ремень безопасности",
          "Защищает только при лобовом ударе",
          "Опциональна, не обязательна",
          "Дополняет ремень, но не заменяет его. Без ремня может нанести дополнительные травмы",
        ],
        explanation:
          "Подушка — элемент пассивной безопасности, дополняющий ремень. Не заменяет его: без ремня удар подушки способен нанести серьёзные травмы.",
        optionRationales: [
          "Ремень остаётся обязательным; подушка его не заменяет.",
          "Существуют боковые, шторные и коленные подушки для разных типов удара.",
          "В современных легковых обязательна, не опциональна.",
          "",
        ],
      },
    },
  },
  {
    id: "manual-t5-10",
    section: "safety",
    correctIndex: 1,
    source: SOURCE,
    termIds: ["aeb", "adas"],
    translations: {
      es: {
        text: "El frenado autónomo de emergencia (AEB)…",
        options: [
          "Solo frena si el conductor pisa el pedal",
          "Detecta la distancia con el vehículo de delante mediante radar y, si el conductor no reacciona, frena automáticamente",
          "Sustituye completamente al conductor",
          "Solo funciona en autopista",
        ],
        explanation:
          "El AEB calcula la distancia con el vehículo delantero mediante radar; avisa por voz y sonido si es peligrosa y, si el conductor no reacciona, ejecuta una frenada de emergencia.",
        optionRationales: [
          "Precisamente el AEB actúa cuando el conductor NO frena; si esperara al pedal ya no serviría.",
          "",
          "Es una ayuda; el conductor sigue siendo responsable de la conducción en todo momento.",
          "Funciona en cualquier vía; suele ser especialmente útil en tráfico urbano por proximidad.",
        ],
      },
      en: {
        text: "Autonomous Emergency Braking (AEB)…",
        options: [
          "Only brakes if the driver presses the pedal",
          "Uses radar to gauge distance to the vehicle ahead and, if the driver doesn't react, brakes automatically",
          "Completely replaces the driver",
          "Only works on motorways",
        ],
        explanation:
          "AEB uses radar to compute distance to the vehicle ahead, warns with voice and sound if dangerous and, if the driver does not react, applies emergency braking.",
        optionRationales: [
          "AEB is precisely for when the driver does NOT brake; waiting for the pedal defeats the purpose.",
          "",
          "It's an assist; the driver remains responsible for the driving at all times.",
          "It works on any road; often most useful in urban traffic due to short distances.",
        ],
      },
      ru: {
        text: "Автономное экстренное торможение (AEB)…",
        options: [
          "Тормозит только когда водитель сам нажимает педаль",
          "Радар измеряет дистанцию до передней машины; если водитель не реагирует — тормозит автоматически",
          "Полностью заменяет водителя",
          "Работает только на автомагистрали",
        ],
        explanation:
          "AEB радаром считает дистанцию до впереди идущего, предупреждает голосом и звуком при опасном сближении и, если водитель не реагирует, выполняет экстренное торможение.",
        optionRationales: [
          "AEB нужен именно тогда, когда водитель НЕ тормозит; ждать педали — потерять смысл системы.",
          "",
          "Это ассистент; водитель по-прежнему отвечает за управление автомобилем.",
          "Работает на любой дороге; особенно полезен в городе из-за малых дистанций.",
        ],
      },
    },
  },
];
