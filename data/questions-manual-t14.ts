import type { Question } from "@/lib/types";

// DGT Manual Permiso B (Lectura Fácil, 2024), Tema 14 — Conducir de forma segura.

const SOURCE = "DGT Manual Permiso B (Lectura Fácil, 2024), Tema 14";

export const QUESTIONS_MANUAL_T14: Question[] = [
  {
    id: "manual-t14-01",
    section: "safety",
    correctIndex: 2,
    source: SOURCE,
    translations: {
      es: {
        text: "Antes de entrar en una curva debes…",
        options: [
          "Acelerar para tomarla con inercia",
          "Frenar bruscamente en el centro de la curva",
          "Reducir la velocidad y acercarte al borde derecho de la calzada",
          "Cerrar los ojos",
        ],
        explanation:
          "Antes de la curva: reducir la velocidad (frenar si es necesario) y acercarte al borde derecho. Dentro: girar suave, no frenar/acelerar bruscamente. Al salir: acelerar poco a poco.",
        optionRationales: [
          "Acelerar antes aumenta la fuerza centrífuga y arriesga salida de vía.",
          "Frenar bruscamente DENTRO de la curva puede provocar derrape.",
          "",
          "Broma peligrosa; es un distractor obvio, pero típico en tests.",
        ],
      },
      en: {
        text: "Before entering a curve you should…",
        options: [
          "Accelerate to keep momentum",
          "Brake hard in the middle of the curve",
          "Slow down and move to the right edge of the road",
          "Close your eyes",
        ],
        explanation:
          "Before the curve: slow down (brake if needed) and move to the right edge. Inside: turn smoothly, no hard braking or acceleration. Exiting: accelerate gradually.",
        optionRationales: [
          "Accelerating early increases the outward force and risks running wide.",
          "Hard braking INSIDE the curve can trigger a skid.",
          "",
          "Deliberately absurd distractor — but classic in tests.",
        ],
      },
      ru: {
        text: "Перед входом в поворот следует…",
        options: [
          "Разогнаться, чтобы пройти по инерции",
          "Резко тормозить в середине поворота",
          "Снизить скорость и прижаться к правому краю проезжей части",
          "Закрыть глаза",
        ],
        explanation:
          "Перед поворотом: снизить скорость (если надо — тормозить), прижаться к правому краю. В повороте: плавно рулить, не тормозить/газовать резко. На выходе: постепенно разгоняться.",
        optionRationales: [
          "Ускорение перед поворотом увеличивает центробежную силу и риск снести с траектории.",
          "Резкое торможение ВНУТРИ поворота может вызвать занос.",
          "",
          "Очевидно абсурдный отвлекающий вариант — но типичен для тестов.",
        ],
      },
    },
  },
  {
    id: "manual-t14-02",
    section: "safety",
    correctIndex: 1,
    source: SOURCE,
    translations: {
      es: {
        text: "¿Cuál de estas NO es una causa habitual de derrape?",
        options: [
          "Conducir muy rápido",
          "Llevar los neumáticos nuevos y bien inflados",
          "Girar bruscamente el volante",
          "Pisar muy fuerte el freno",
        ],
        explanation:
          "Causas de derrape: velocidad alta, giro brusco de volante, frenada fuerte, neumáticos/amortiguadores en mal estado, carga mal repartida. Neumáticos NUEVOS y bien inflados AYUDAN a no derrapar.",
        optionRationales: [
          "Alta velocidad es la primera causa de derrape.",
          "",
          "Un volantazo puede desestabilizar y provocar derrape.",
          "Frenar muy fuerte bloquea las ruedas (si no hay ABS) y produce derrape.",
        ],
      },
      en: {
        text: "Which of these is NOT a common cause of skidding?",
        options: [
          "Driving too fast",
          "Having new, properly-inflated tyres",
          "Sudden steering input",
          "Slamming the brakes",
        ],
        explanation:
          "Skid causes: high speed, sudden steering, hard braking, worn tyres/shocks, bad load distribution. NEW well-inflated tyres HELP prevent skidding.",
        optionRationales: [
          "High speed is the first cause of skidding.",
          "",
          "A sharp steering input can destabilise and cause a skid.",
          "Slamming the brakes locks wheels (without ABS) and skids the car.",
        ],
      },
      ru: {
        text: "Что из перечисленного НЕ является типичной причиной заноса?",
        options: [
          "Слишком высокая скорость",
          "Новые, хорошо накачанные шины",
          "Резкий поворот руля",
          "Резкое нажатие на тормоз",
        ],
        explanation:
          "Причины заноса: скорость, резкое руление, резкое торможение, износ шин/амортизаторов, плохое распределение груза. Новые накачанные шины НАОБОРОТ помогают.",
        optionRationales: [
          "Высокая скорость — главная причина заноса.",
          "",
          "Резкий поворот руля дестабилизирует машину.",
          "Резкое торможение блокирует колёса (без ABS) — занос.",
        ],
      },
    },
  },
  {
    id: "manual-t14-03",
    section: "safety",
    correctIndex: 3,
    source: SOURCE,
    translations: {
      es: {
        text: "Al aproximarse un vehículo que puede deslumbrarte, ¿qué NO debes hacer?",
        options: [
          "Reducir la velocidad",
          "Apagar las largas y encender las de cruce",
          "Guiarte por la línea del borde derecho",
          "Ponerte gafas de sol",
        ],
        explanation:
          "Nunca uses gafas de sol de noche: deslumbran menos otros vehículos, pero verás mucho peor la carretera. Reduce velocidad, usa cruce y guíate por la línea derecha.",
        optionRationales: [
          "Reducir velocidad es correcto para no invadir carril si pierdes visión.",
          "Cambiar a cruce es exactamente lo que debe hacerse al cruzarse con otro vehículo.",
          "Guiarse por la línea derecha te mantiene en tu carril mientras recuperas visión.",
          "",
        ],
      },
      en: {
        text: "When an oncoming vehicle may dazzle you, what should you NOT do?",
        options: [
          "Slow down",
          "Switch high beams off, dipped beams on",
          "Use the right edge line as a guide",
          "Put on sunglasses",
        ],
        explanation:
          "Never wear sunglasses at night: they may cut oncoming glare but ruin your view of the road. Slow down, switch to dipped beams, follow the right line.",
        optionRationales: [
          "Slowing is correct — you might veer if you lose vision.",
          "Switching to dipped is exactly right when meeting oncoming traffic.",
          "The right-edge line keeps you in lane while your eyes adapt.",
          "",
        ],
      },
      ru: {
        text: "Когда встречный может ослепить, чего делать НЕ следует?",
        options: [
          "Снизить скорость",
          "Переключиться с дальнего на ближний",
          "Ориентироваться по правой линии разметки",
          "Надеть тёмные очки",
        ],
        explanation:
          "Ночью тёмные очки — нельзя: встречные ослепляют меньше, но дорогу видно намного хуже. Снизь скорость, включи ближний, держи правую линию.",
        optionRationales: [
          "Снижение скорости правильно — при потере обзора можно уйти с полосы.",
          "Переход на ближний — то, что нужно при встречном.",
          "Правая линия помогает удержать полосу, пока глаза адаптируются.",
          "",
        ],
      },
    },
  },
  {
    id: "manual-t14-04",
    section: "safety",
    correctIndex: 0,
    source: SOURCE,
    termIds: ["aquaplaning"],
    translations: {
      es: {
        text: "Al conducir con lluvia y detectar aquaplaning (el vehículo flota sobre el agua), debes…",
        options: [
          "No frenar bruscamente, soltar el acelerador y sujetar el volante en línea recta",
          "Frenar a fondo",
          "Girar bruscamente el volante para salir del charco",
          "Acelerar para atravesarlo rápido",
        ],
        explanation:
          "En aquaplaning: NO frenar bruscamente, soltar el acelerador y mantener el volante recto hasta recuperar contacto con la calzada.",
        optionRationales: [
          "",
          "Frenar a fondo bloquea las ruedas: el vehículo se descontrola completamente.",
          "Un volantazo agrava la pérdida de control cuando las ruedas vuelven a agarrar.",
          "Acelerar aumenta el efecto de flotación; empeora la situación.",
        ],
      },
      en: {
        text: "In rain, if you detect aquaplaning (car floating on water), you should…",
        options: [
          "Don't brake hard, ease off the accelerator, keep the wheel straight",
          "Slam the brakes",
          "Yank the wheel to get out of the puddle",
          "Accelerate to power through",
        ],
        explanation:
          "In aquaplaning: don't brake hard, ease off the accelerator, keep the wheel straight until grip returns.",
        optionRationales: [
          "",
          "Slamming brakes locks the wheels; total loss of control.",
          "A sharp steering input makes recovery violent when grip returns.",
          "Accelerating increases the floating effect; makes it worse.",
        ],
      },
      ru: {
        text: "На дожде при аквапланировании (машина «плывёт» по воде) нужно…",
        options: [
          "Не тормозить резко, отпустить газ и держать руль прямо",
          "Резко нажать на тормоз",
          "Резко вывернуть руль, чтобы уйти с лужи",
          "Разогнаться, чтобы быстро проехать",
        ],
        explanation:
          "При аквапланировании: не тормозить резко, отпустить газ, держать руль прямо, пока не восстановится сцепление.",
        optionRationales: [
          "",
          "Резкое торможение блокирует колёса — полная потеря управления.",
          "Резкий руль — жёсткий удар когда сцепление возвращается.",
          "Ускорение усиливает эффект «всплытия»; хуже.",
        ],
      },
    },
  },
  {
    id: "manual-t14-05",
    section: "safety",
    correctIndex: 2,
    source: SOURCE,
    translations: {
      es: {
        text: "Con nieve o hielo, ¿qué NO debes hacer?",
        options: [
          "Reducir la velocidad",
          "Aumentar la distancia de seguridad",
          "Frenar bruscamente",
          "Usar marchas cortas",
        ],
        explanation:
          "En nieve o hielo: reducir velocidad, aumentar distancia, hacer movimientos suaves (volante, freno, acelerador) y usar marchas cortas. Frenar bruscamente provoca derrape.",
        optionRationales: [
          "Reducir velocidad es exactamente lo correcto.",
          "Aumentar distancia da tiempo para frenar en calzada resbaladiza.",
          "",
          "Usar marchas cortas ayuda a controlar la velocidad con freno motor.",
        ],
      },
      en: {
        text: "On snow or ice, what should you NOT do?",
        options: [
          "Slow down",
          "Increase following distance",
          "Brake hard",
          "Use low gears",
        ],
        explanation:
          "On snow/ice: slow down, keep more distance, use smooth inputs and low gears. Hard braking causes skids.",
        optionRationales: [
          "Slowing down is exactly right.",
          "More distance gives time to brake on slippery surfaces.",
          "",
          "Low gears help engine-brake and stay controlled.",
        ],
      },
      ru: {
        text: "На снегу или льду чего делать НЕЛЬЗЯ?",
        options: [
          "Снижать скорость",
          "Увеличивать дистанцию",
          "Резко тормозить",
          "Использовать пониженные передачи",
        ],
        explanation:
          "На снегу/льду: снижать скорость, увеличивать дистанцию, действовать плавно, использовать пониженные. Резкое торможение вызывает занос.",
        optionRationales: [
          "Снижать скорость — правильно.",
          "Дистанция даёт время затормозить на скользком.",
          "",
          "Пониженные передачи помогают контролировать скорость двигателем.",
        ],
      },
    },
  },
  {
    id: "manual-t14-06",
    section: "safety",
    correctIndex: 3,
    source: SOURCE,
    translations: {
      es: {
        text: "Con niebla intensa, ¿qué luces debes usar?",
        options: [
          "Solo las de posición",
          "Las de largo alcance",
          "Las cuatro intermitentes",
          "Las de cruce y las antinieblas delanteras (traseras solo si la visibilidad es muy mala)",
        ],
        explanation:
          "Con niebla: cruce + antinieblas delanteras. Las traseras SOLO en visibilidad muy mala. Nunca las largas: la luz se refleja en la niebla y te deslumbra a ti mismo.",
        optionRationales: [
          "Solo posición no ilumina lo suficiente la carretera.",
          "Las largas se reflejan en la niebla y ciegan al propio conductor.",
          "Las cuatro intermitentes se usan para señal de emergencia, no como iluminación en niebla.",
          "",
        ],
      },
      en: {
        text: "In heavy fog, which lights should you use?",
        options: [
          "Only sidelights",
          "High beams",
          "Hazard lights (4-ways)",
          "Dipped beams + front fog lights (rear fog only if visibility is very poor)",
        ],
        explanation:
          "In fog: dipped + front fogs. Rear fogs ONLY in very poor visibility. Never high beams — they reflect off the fog and dazzle you.",
        optionRationales: [
          "Sidelights alone don't light enough of the road.",
          "High beams reflect off fog and blind the driver.",
          "Hazards are for emergencies, not fog illumination.",
          "",
        ],
      },
      ru: {
        text: "В густом тумане какие фары использовать?",
        options: [
          "Только габаритные",
          "Дальний свет",
          "Аварийная сигнализация (все 4 поворотника)",
          "Ближний + передние противотуманные (задние противотуманные — только при очень плохой видимости)",
        ],
        explanation:
          "В тумане: ближний + передние противотуманные. Задние противотуманные — ТОЛЬКО при очень плохой видимости. Дальний нельзя — свет отражается от тумана и слепит.",
        optionRationales: [
          "Одни габариты не освещают дорогу.",
          "Дальний отражается от тумана и слепит самого водителя.",
          "Аварийная сигнализация — для аварийных ситуаций, а не для освещения.",
          "",
        ],
      },
    },
  },
  {
    id: "manual-t14-07",
    section: "safety",
    correctIndex: 1,
    source: SOURCE,
    translations: {
      es: {
        text: "Al adelantar de noche, cuando te acercas al vehículo que quieres pasar, debes…",
        options: [
          "Aumentar las luces de largo alcance para verlo mejor",
          "Cambiar de largas a cruce para no deslumbrar por los retrovisores",
          "Encender las cuatro intermitentes",
          "Apagar todas las luces",
        ],
        explanation:
          "Al acercarte para adelantar de noche, cambia a cruce: las largas pueden deslumbrar al conductor de delante a través de sus retrovisores. Vuelve a largas cuando ya no le deslumbres.",
        optionRationales: [
          "Deslumbrar por los retrovisores es peligroso y no facilita la maniobra.",
          "",
          "Las cuatro intermitentes son para emergencias/paradas, no para adelantar.",
          "Apagar las luces de noche es peligrosísimo y prohibido.",
        ],
      },
      en: {
        text: "Overtaking at night, as you approach the vehicle ahead you should…",
        options: [
          "Turn high beams up higher to see it",
          "Switch from high to dipped so you don't dazzle via their mirrors",
          "Turn on hazard lights",
          "Turn all lights off",
        ],
        explanation:
          "Approaching to overtake at night, switch to dipped: high beams dazzle the driver ahead via their mirrors. Switch back to high once you're past them.",
        optionRationales: [
          "Dazzling via mirrors is dangerous and doesn't help the maneuver.",
          "",
          "Hazards are for emergencies/stops, not overtaking.",
          "Killing all lights at night is extremely dangerous and forbidden.",
        ],
      },
      ru: {
        text: "При обгоне ночью, приближаясь к обгоняемому, следует…",
        options: [
          "Включить дальний ярче, чтобы лучше видеть",
          "Переключиться с дальнего на ближний, чтобы не слепить через зеркала",
          "Включить аварийку",
          "Погасить все фары",
        ],
        explanation:
          "Ночью при обгоне подъезжая — переключаешься на ближний: дальний слепит водителя впереди через зеркала. После обгона можно снова дальний.",
        optionRationales: [
          "Слепить через зеркала опасно и не помогает манёвру.",
          "",
          "Аварийка — для аварийных остановок, не для обгона.",
          "Гасить фары ночью крайне опасно и запрещено.",
        ],
      },
    },
  },
  {
    id: "manual-t14-08",
    section: "safety",
    correctIndex: 2,
    source: SOURCE,
    translations: {
      es: {
        text: "Zonas de obras en la carretera se señalizan con…",
        options: [
          "Señales azules",
          "Señales de color verde",
          "Señales verticales con fondo amarillo y marcas amarillas en la calzada",
          "Señales blancas y negras",
        ],
        explanation:
          "En zonas de obras: señales verticales con fondo AMARILLO y marcas amarillas pintadas en la calzada. El amarillo indica carácter temporal / obras.",
        optionRationales: [
          "Las azules son de indicación/obligación, no de obras.",
          "El verde se asocia a las autopistas/autovías, no a obras.",
          "",
          "El blanco/negro no es el código de las obras; obras = amarillo.",
        ],
      },
      en: {
        text: "Roadwork zones are marked with…",
        options: [
          "Blue signs",
          "Green signs",
          "Vertical signs with YELLOW background and yellow road markings",
          "Black-and-white signs",
        ],
        explanation:
          "Roadworks: vertical signs with a YELLOW background and yellow road markings. Yellow signals a temporary / works context.",
        optionRationales: [
          "Blue is for information/obligation, not roadworks.",
          "Green is for motorways/dual carriageways, not roadworks.",
          "",
          "Black-and-white isn't the code for roadworks; works = yellow.",
        ],
      },
      ru: {
        text: "Дорожные работы обозначаются…",
        options: [
          "Синими знаками",
          "Зелёными знаками",
          "Постоянными знаками с ЖЁЛТЫМ фоном и жёлтой разметкой",
          "Чёрно-белыми знаками",
        ],
        explanation:
          "Дорожные работы — вертикальные знаки на ЖЁЛТОМ фоне и жёлтая разметка на дороге. Жёлтый — временный характер / работы.",
        optionRationales: [
          "Синие знаки — информационные/предписывающие, не работы.",
          "Зелёные — для автомагистрали, не для работ.",
          "",
          "Чёрно-белый — не код работ; работы = жёлтый.",
        ],
      },
    },
  },
  {
    id: "manual-t14-09",
    section: "safety",
    correctIndex: 0,
    source: SOURCE,
    translations: {
      es: {
        text: "Con mucho viento lateral, ¿qué debes hacer?",
        options: [
          "Sujetar el volante con firmeza con las dos manos y reducir la velocidad",
          "Soltar el volante para que el coche vaya solo",
          "Acelerar para compensar el viento",
          "Cerrar todas las ventanillas para peso interior",
        ],
        explanation:
          "Con viento lateral: sujetar el volante con firmeza con las dos manos y reducir la velocidad. El viento puede empujar al vehículo lateralmente, sobre todo a los altos (furgonetas, autocaravanas).",
        optionRationales: [
          "",
          "Soltar el volante es exactamente lo contrario de lo que hay que hacer.",
          "Acelerar aumenta el riesgo si una ráfaga desvía el vehículo.",
          "Cerrar ventanillas no compensa una ráfaga de viento lateral.",
        ],
      },
      en: {
        text: "In strong side wind, what should you do?",
        options: [
          "Hold the wheel firmly with both hands and slow down",
          "Let go of the wheel and let the car settle",
          "Speed up to counter the wind",
          "Close all windows to add interior weight",
        ],
        explanation:
          "In side wind: grip the wheel firmly with both hands and slow down. Wind can shove the vehicle sideways, especially tall ones (vans, motorhomes).",
        optionRationales: [
          "",
          "Letting go of the wheel is the exact opposite of what to do.",
          "Speeding up magnifies risk if a gust pushes you sideways.",
          "Closing windows doesn't offset a side gust.",
        ],
      },
      ru: {
        text: "При сильном боковом ветре нужно…",
        options: [
          "Крепко держать руль двумя руками и снизить скорость",
          "Отпустить руль, чтобы машина сама выровнялась",
          "Разогнаться, компенсируя ветер",
          "Закрыть все окна для веса салона",
        ],
        explanation:
          "При боковом ветре: крепко держать руль двумя руками и снизить скорость. Ветер сносит машину вбок, особенно высокие (фургоны, дома на колёсах).",
        optionRationales: [
          "",
          "Отпустить руль — прямо противоположное правильному действию.",
          "Ускорение усиливает риск при порыве.",
          "Закрытые окна не компенсируют боковой порыв.",
        ],
      },
    },
  },
  {
    id: "manual-t14-10",
    section: "safety",
    correctIndex: 1,
    source: SOURCE,
    termIds: ["fatiga"],
    translations: {
      es: {
        text: "Al conducir de noche por una zona bien iluminada y pasar a otra mal iluminada, debes…",
        options: [
          "Acelerar para salir rápido de la zona oscura",
          "Poner especial atención porque los ojos tardan unos segundos en adaptarse",
          "Encender las cuatro intermitentes",
          "Cerrar los ojos un momento",
        ],
        explanation:
          "Los ojos tardan unos segundos en adaptarse al cambio de luz. Reduce velocidad y presta atención especial durante esos segundos críticos.",
        optionRationales: [
          "Acelerar cuando no ves bien es lo peor que puedes hacer.",
          "",
          "Las cuatro intermitentes se usan para emergencias, no para cambios de iluminación.",
          "Cerrar los ojos al conducir es criminal; distractor evidente pero típico.",
        ],
      },
      en: {
        text: "At night, moving from a well-lit zone to a poorly-lit one, you should…",
        options: [
          "Speed up to leave the dark zone quickly",
          "Pay extra attention — eyes take seconds to adapt",
          "Turn on hazard lights",
          "Close your eyes for a moment",
        ],
        explanation:
          "Eyes need a few seconds to adapt to the light change. Slow down and stay alert during those critical seconds.",
        optionRationales: [
          "Speeding up when your eyes haven't adapted is the worst thing to do.",
          "",
          "Hazards are for emergencies, not lighting changes.",
          "Closing your eyes while driving is criminal; obvious but classic distractor.",
        ],
      },
      ru: {
        text: "Ночью при переходе с хорошо освещённого участка на плохо освещённый нужно…",
        options: [
          "Разогнаться, чтобы быстрее проехать тёмный участок",
          "Быть особенно внимательным — глазам нужно несколько секунд, чтобы адаптироваться",
          "Включить аварийку",
          "На секунду закрыть глаза",
        ],
        explanation:
          "Глазам нужно несколько секунд, чтобы адаптироваться к смене освещения. Снизь скорость и будь особенно внимателен в эти критические секунды.",
        optionRationales: [
          "Разгоняться, когда глаза не адаптированы — худшее решение.",
          "",
          "Аварийка — для аварий, не для смены освещения.",
          "Закрывать глаза за рулём — очевидный, но типичный ложный вариант.",
        ],
      },
    },
  },
];
