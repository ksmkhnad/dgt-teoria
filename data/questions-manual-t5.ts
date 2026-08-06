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
  {
    id: "manual-t5-11",
    section: "safety",
    correctIndex: 2,
    source: SOURCE,
    translations: {
      es: {
        text: "Los menores deben viajar en un sistema de retención infantil (SRI) hasta que midan…",
        options: [
          "1,20 m",
          "1,30 m",
          "1,35 m",
          "1,50 m o cumplan 14 años",
        ],
        explanation:
          "En España es obligatorio el SRI adecuado al peso y talla del menor hasta que mida al menos 1,35 m. A partir de esa altura puede usar solo el cinturón.",
        optionRationales: [
          "1,20 m no es el umbral vigente en España; queda por debajo de lo exigido.",
          "1,30 m tampoco; la norma actual fija 1,35 m como umbral inferior.",
          "",
          "1,50 m es una recomendación de seguridad, no la obligación legal para dejar de usar SRI.",
        ],
      },
      en: {
        text: "Children must travel in a child restraint system (CRS) until they measure at least…",
        options: [
          "1.20 m",
          "1.30 m",
          "1.35 m",
          "1.50 m or age 14",
        ],
        explanation:
          "In Spain a CRS matching the child's weight and height is mandatory until at least 1.35 m tall. Above that they may use just the seatbelt.",
        optionRationales: [
          "1.20 m isn't the Spanish threshold; below what's required.",
          "1.30 m isn't either; the current rule is 1.35 m as the minimum.",
          "",
          "1.50 m is a safety recommendation, not the legal cutoff for stopping CRS use.",
        ],
      },
      ru: {
        text: "Дети должны ехать в детском удерживающем устройстве, пока не достигнут роста…",
        options: [
          "1,20 м",
          "1,30 м",
          "1,35 м",
          "1,50 м или возраста 14 лет",
        ],
        explanation:
          "В Испании детское кресло (по весу и росту) обязательно, пока ребёнок не достигнет 1,35 м. С этого роста можно использовать только ремень.",
        optionRationales: [
          "1,20 м — не действующий в Испании порог; ниже требуемого.",
          "1,30 м тоже нет; действующая норма — минимум 1,35 м.",
          "",
          "1,50 м — рекомендация по безопасности, а не юридический порог для отказа от кресла.",
        ],
      },
    },
  },
  {
    id: "manual-t5-12",
    section: "safety",
    correctIndex: 1,
    source: SOURCE,
    translations: {
      es: {
        text: "Si necesitas llevar un SRI a contramarcha en el asiento del acompañante, debes…",
        options: [
          "No es posible: prohibido totalmente",
          "Desconectar el airbag frontal de ese asiento",
          "Bajar la ventanilla para reducir presión",
          "Poner el asiento en su posición más adelantada",
        ],
        explanation:
          "Un SRI a contramarcha en el asiento delantero exige desactivar el airbag frontal del acompañante. Un airbag activo puede matar al bebé si se abre contra la sillita.",
        optionRationales: [
          "Sí se puede llevar delante a contramarcha, pero solo con el airbag desactivado.",
          "",
          "La ventanilla no tiene ningún efecto sobre el riesgo del airbag.",
          "Poner el asiento más adelantado empeora la situación: hay que alejarlo del salpicadero.",
        ],
      },
      en: {
        text: "If you need to fit a rear-facing CRS on the front passenger seat, you must…",
        options: [
          "You can't — completely forbidden",
          "Deactivate that seat's frontal airbag",
          "Lower the window to reduce pressure",
          "Move the seat all the way forward",
        ],
        explanation:
          "A rear-facing CRS in the front requires disabling the passenger frontal airbag. An active airbag can kill the baby by hitting the seat.",
        optionRationales: [
          "It IS allowed rear-facing in front, but only with the airbag disabled.",
          "",
          "The window has no effect on the airbag risk.",
          "Moving the seat forward makes it worse — you should move it back, away from the dashboard.",
        ],
      },
      ru: {
        text: "Если детское кресло стоит спиной вперёд на переднем пассажирском сиденье, нужно…",
        options: [
          "Так нельзя — полностью запрещено",
          "Отключить фронтальную подушку безопасности этого сиденья",
          "Приоткрыть окно, чтобы снизить давление",
          "Максимально придвинуть сиденье вперёд",
        ],
        explanation:
          "Кресло спиной вперёд впереди разрешено, но только с ОТКЛЮЧЁННОЙ пассажирской фронтальной подушкой. Активная подушка может убить ребёнка, ударив в кресло.",
        optionRationales: [
          "Спиной вперёд впереди разрешено, но только с выключенной подушкой.",
          "",
          "Окно никак не влияет на риск от подушки.",
          "Придвигать сиденье вперёд — только ухудшать; наоборот, надо отодвинуть от торпедо.",
        ],
      },
    },
  },
  {
    id: "manual-t5-13",
    section: "safety",
    correctIndex: 3,
    source: SOURCE,
    translations: {
      es: {
        text: "El reposacabezas está bien ajustado cuando…",
        options: [
          "Su parte inferior queda a la altura del cuello",
          "Toca el techo del vehículo",
          "Queda separado unos 10 cm de la cabeza",
          "Su parte superior queda a la altura de la parte alta de la cabeza y lo más cerca posible de ella",
        ],
        explanation:
          "El reposacabezas evita el latigazo cervical. Está bien ajustado cuando su parte superior queda a la misma altura que la parte alta de la cabeza y lo más pegado posible a ella.",
        optionRationales: [
          "A la altura del cuello no protege: en un impacto la cabeza pasa por encima.",
          "Tocar el techo no es un ajuste; el ajuste es respecto a la cabeza del ocupante.",
          "10 cm de separación es demasiado: la cabeza chocará bruscamente contra él en un frenazo.",
          "",
        ],
      },
      en: {
        text: "The headrest is properly adjusted when…",
        options: [
          "Its lower edge is at neck height",
          "It touches the vehicle roof",
          "It sits about 10 cm away from the head",
          "Its top edge is level with the top of the head and as close to it as possible",
        ],
        explanation:
          "The headrest prevents whiplash. It's properly adjusted when its top edge matches the top of the head and sits as close as possible to it.",
        optionRationales: [
          "At neck height it won't protect: on impact the head goes over the top.",
          "Touching the roof isn't the adjustment — it's about the occupant's head, not the roof.",
          "10 cm gap is too much: the head hits it hard on braking.",
          "",
        ],
      },
      ru: {
        text: "Подголовник отрегулирован правильно, когда…",
        options: [
          "Его нижний край на уровне шеи",
          "Он касается потолка автомобиля",
          "Между ним и головой около 10 см",
          "Его верхний край на уровне макушки и как можно ближе к голове",
        ],
        explanation:
          "Подголовник защищает от хлыстовой травмы. Правильно отрегулирован, когда верхний край на уровне макушки и максимально близко к голове.",
        optionRationales: [
          "На уровне шеи — не защитит: при ударе голова перелетит через него.",
          "Касается потолка — не критерий; критерий — голова седока, а не крыша.",
          "10 см — слишком много: голова резко ударится о него при торможении.",
          "",
        ],
      },
    },
  },
  {
    id: "manual-t5-14",
    section: "safety",
    correctIndex: 2,
    source: SOURCE,
    translations: {
      es: {
        text: "El uso del cinturón de seguridad está exento en…",
        options: [
          "Trayectos urbanos de menos de 5 km",
          "Cuando el conductor lleva chaqueta gruesa",
          "Conductores de taxi en servicio urbano y personal de emergencias en intervención",
          "Cualquier trayecto de menos de 10 minutos",
        ],
        explanation:
          "El cinturón es obligatorio siempre para todos, con excepciones muy tasadas: taxistas en servicio urbano, personal de emergencias en actuación, personas con exención médica acreditada y algún caso puntual (marcha atrás, aparcamiento).",
        optionRationales: [
          "La distancia no exime; el cinturón es obligatorio también en trayectos cortos urbanos.",
          "La ropa no exime en absoluto; hay que ponérselo bien.",
          "",
          "La duración del trayecto no crea exención.",
        ],
      },
      en: {
        text: "Seatbelt use is exempt for…",
        options: [
          "Urban trips shorter than 5 km",
          "When the driver wears a thick jacket",
          "Taxi drivers in urban service and emergency workers during an intervention",
          "Any trip shorter than 10 minutes",
        ],
        explanation:
          "The seatbelt is always mandatory, with very narrow exemptions: taxi drivers in urban service, emergency workers during interventions, people with a certified medical exemption and a few specific cases (reversing, parking).",
        optionRationales: [
          "Distance doesn't exempt; the belt is required even on short urban trips.",
          "Clothing doesn't exempt at all; wear it properly.",
          "",
          "Trip duration doesn't create an exemption.",
        ],
      },
      ru: {
        text: "Использование ремня безопасности НЕ требуется при…",
        options: [
          "Городских поездках менее 5 км",
          "Если водитель в толстой куртке",
          "У таксистов в городском обслуживании и служб экстренного реагирования на вызове",
          "Любой поездке менее 10 минут",
        ],
        explanation:
          "Ремень обязателен всегда с очень узкими исключениями: таксисты в городе, экстренные службы на вызове, лица с медицинским освобождением и отдельные случаи (движение задним ходом, парковка).",
        optionRationales: [
          "Расстояние не освобождает; ремень обязателен и на коротких городских поездках.",
          "Одежда никак не освобождает; ремень надевается правильно.",
          "",
          "Продолжительность поездки не создаёт исключения.",
        ],
      },
    },
  },
];
