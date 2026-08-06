import type { Question } from "@/lib/types";

// DGT Manual Permiso B (Lectura Fácil, 2024), Anexo — Permiso por puntos.

const SOURCE = "DGT Manual Permiso B (Lectura Fácil, 2024), Anexo";

export const QUESTIONS_MANUAL_ANEXO: Question[] = [
  {
    id: "manual-anexo-01",
    section: "admin",
    correctIndex: 0,
    source: SOURCE,
    termIds: ["conductor_novel"],
    translations: {
      es: {
        text: "¿Con cuántos puntos empieza un conductor novel?",
        options: ["8 puntos", "12 puntos", "10 puntos", "15 puntos"],
        explanation:
          "Los conductores noveles empiezan con 8 puntos durante los dos primeros años. Si no pierden ninguno, pasan a 12.",
        optionRationales: [
          "",
          "12 puntos es lo que se tiene TRAS los primeros dos años sin sanciones.",
          "10 no es una cifra oficial en el sistema por puntos.",
          "15 es el máximo posible, tras más de 8 años sin faltas — no de un novel.",
        ],
      },
      en: {
        text: "How many points does a novice driver start with?",
        options: ["8 points", "12 points", "10 points", "15 points"],
        explanation:
          "Novice drivers start with 8 points for the first two years. If they lose none, they move to 12.",
        optionRationales: [
          "",
          "12 is what you get AFTER two years without offences.",
          "10 isn't an official points-system figure.",
          "15 is the maximum after 8+ years without offences — not for a novice.",
        ],
      },
      ru: {
        text: "С каким количеством баллов начинает начинающий водитель?",
        options: ["8 баллов", "12 баллов", "10 баллов", "15 баллов"],
        explanation:
          "Начинающие водители начинают с 8 баллов в первые 2 года. Если не теряют — переходят на 12.",
        optionRationales: [
          "",
          "12 — это ПОСЛЕ двух лет без нарушений.",
          "10 — не официальная цифра системы.",
          "15 — максимум после 8+ лет без нарушений; не для начинающего.",
        ],
      },
    },
  },
  {
    id: "manual-anexo-02",
    section: "admin",
    correctIndex: 3,
    source: SOURCE,
    translations: {
      es: {
        text: "¿Cuál es el número máximo de puntos que puede tener un conductor?",
        options: ["8", "10", "12", "15"],
        explanation:
          "El máximo es 15 puntos: 8 novel → 12 (a los 2 años) → 14 (a los 5 años) → 15 (a los 8 años). Todo sin perder puntos por sanciones.",
        optionRationales: [
          "8 son los puntos iniciales del novel.",
          "10 no es una cifra oficial.",
          "12 es el estándar tras 2 años; no el máximo posible.",
          "",
        ],
      },
      en: {
        text: "What is the maximum number of points a driver can have?",
        options: ["8", "10", "12", "15"],
        explanation:
          "The maximum is 15: 8 novice → 12 (after 2 years) → 14 (after 5) → 15 (after 8). All without losing any points.",
        optionRationales: [
          "8 is the novice starting figure.",
          "10 isn't an official figure.",
          "12 is standard after 2 years; not the max.",
          "",
        ],
      },
      ru: {
        text: "Каково максимальное количество баллов у водителя?",
        options: ["8", "10", "12", "15"],
        explanation:
          "Максимум — 15: 8 начинающий → 12 (через 2 года) → 14 (через 5) → 15 (через 8). Без потери баллов.",
        optionRationales: [
          "8 — стартовые баллы новичка.",
          "10 — не официальная цифра.",
          "12 — стандарт через 2 года, не максимум.",
          "",
        ],
      },
    },
  },
  {
    id: "manual-anexo-03",
    section: "admin",
    correctIndex: 2,
    source: SOURCE,
    translations: {
      es: {
        text: "Si pierdes TODOS los puntos, no podrás volver a conducir hasta que pasen…",
        options: ["1 mes", "3 meses", "6 meses", "1 año"],
        explanation:
          "Perder todos los puntos: 6 meses sin conducir. Después, curso de 24 horas + examen en Jefatura de Tráfico. Si vuelve a pasar en 3 años: 12 meses.",
        optionRationales: [
          "1 mes es demasiado corto; la sanción real es 6 meses.",
          "3 meses tampoco corresponde; se pide medio año.",
          "",
          "1 año es el plazo cuando REPITES en los 3 años siguientes, no la primera vez.",
        ],
      },
      en: {
        text: "If you lose ALL your points, you cannot drive again until…",
        options: ["1 month", "3 months", "6 months", "1 year"],
        explanation:
          "Losing all points: 6-month suspension. Then a 24-hour course + exam at Jefatura de Tráfico. If it happens again within 3 years: 12 months.",
        optionRationales: [
          "1 month is too short; the actual ban is 6 months.",
          "3 months isn't the correct figure either.",
          "",
          "1 year applies if you REPEAT within 3 years, not the first time.",
        ],
      },
      ru: {
        text: "Если потерять ВСЕ баллы, водить снова нельзя до…",
        options: ["1 месяца", "3 месяцев", "6 месяцев", "1 года"],
        explanation:
          "Все баллы потеряны — 6 месяцев без вождения. Затем курс 24 часа + экзамен в Jefatura de Tráfico. Если снова в течение 3 лет — 12 месяцев.",
        optionRationales: [
          "1 месяц слишком мало; реальный срок — 6 месяцев.",
          "3 месяца — тоже неверно.",
          "",
          "1 год — если ПОВТОРНО в течение 3 лет, а не с первого раза.",
        ],
      },
    },
  },
  {
    id: "manual-anexo-04",
    section: "admin",
    correctIndex: 1,
    source: SOURCE,
    translations: {
      es: {
        text: "Los conductores que solo pierden algunos puntos pueden recuperarlos haciendo un curso de…",
        options: [
          "6 horas, recuperando hasta 3 puntos",
          "12 horas, recuperando hasta 6 puntos",
          "24 horas, recuperando todos los puntos",
          "3 horas, recuperando 1 punto",
        ],
        explanation:
          "Curso de educación vial de 12 horas recupera hasta 6 puntos. El curso de 24 horas + examen es solo tras haber perdido TODOS los puntos.",
        optionRationales: [
          "6 horas no es la duración oficial del curso de recuperación parcial.",
          "",
          "24 horas + examen es para recuperar el PERMISO después de perder todos los puntos, no puntos aislados.",
          "3 horas es una duración inventada, no oficial.",
        ],
      },
      en: {
        text: "Drivers who only lose some points can recover them by taking a course of…",
        options: [
          "6 hours, recovering up to 3 points",
          "12 hours, recovering up to 6 points",
          "24 hours, recovering all points",
          "3 hours, recovering 1 point",
        ],
        explanation:
          "A 12-hour road-safety course recovers up to 6 points. The 24-hour course + exam is only after losing ALL points.",
        optionRationales: [
          "6 hours isn't the official partial-recovery course length.",
          "",
          "24 hours + exam is to recover your LICENCE after losing all points, not individual points.",
          "3 hours isn't an official figure.",
        ],
      },
      ru: {
        text: "Водители, потерявшие часть баллов, могут восстановить их курсом…",
        options: [
          "6 часов, до 3 баллов",
          "12 часов, до 6 баллов",
          "24 часа, все баллы",
          "3 часа, 1 балл",
        ],
        explanation:
          "Курс безопасности 12 часов восстанавливает до 6 баллов. Курс 24 часа + экзамен — только после полной потери всех баллов.",
        optionRationales: [
          "6 часов — не официальная длительность.",
          "",
          "24 часа + экзамен — для возврата ПРАВ после полной потери, а не отдельных баллов.",
          "3 часа — не официальная цифра.",
        ],
      },
    },
  },
  {
    id: "manual-anexo-05",
    section: "admin",
    correctIndex: 2,
    source: SOURCE,
    translations: {
      es: {
        text: "Conducir con una tasa de alcohol superior a 0,50 mg/l (general) supone la pérdida de…",
        options: ["2 puntos", "4 puntos", "6 puntos", "10 puntos"],
        explanation:
          "Tasa > 0,50 mg/l aire (general) o > 0,30 mg/l (noveles/profesionales) = pérdida de 6 puntos. Entre 0,25 y 0,50 = 4 puntos. Consumir drogas = 6 puntos.",
        optionRationales: [
          "2 puntos es una infracción menor; el alcohol elevado no lo es.",
          "4 puntos corresponden a alcoholemia INTERMEDIA (0,25-0,50 mg/l), no a la superior.",
          "",
          "10 puntos no existe como sanción única; el máximo por falta es 6.",
        ],
      },
      en: {
        text: "Driving with a BAC over 0.50 mg/l (general) loses you…",
        options: ["2 points", "4 points", "6 points", "10 points"],
        explanation:
          "BAC > 0.50 mg/l air (general) or > 0.30 mg/l (novice/professional) = 6 points lost. Between 0.25 and 0.50 = 4 points. Drug use = 6 points.",
        optionRationales: [
          "2 points is for minor offences; high BAC isn't minor.",
          "4 points is for the INTERMEDIATE BAC (0.25-0.50), not the higher band.",
          "",
          "10 points isn't a single penalty; max per offence is 6.",
        ],
      },
      ru: {
        text: "Вождение с алкоголем более 0,50 мг/л (общий лимит) — потеря…",
        options: ["2 баллов", "4 баллов", "6 баллов", "10 баллов"],
        explanation:
          "Алкоголь > 0,50 мг/л (общий) или > 0,30 мг/л (начинающие/профи) = минус 6 баллов. От 0,25 до 0,50 = минус 4. Наркотики = 6.",
        optionRationales: [
          "2 балла — за мелкие нарушения; сильный алкоголь — не мелочь.",
          "4 балла — за СРЕДНЮЮ концентрацию (0,25-0,50), не выше.",
          "",
          "10 баллов — не существует как единая санкция; максимум за нарушение — 6.",
        ],
      },
    },
  },
  {
    id: "manual-anexo-06",
    section: "admin",
    correctIndex: 3,
    source: SOURCE,
    translations: {
      es: {
        text: "Conducir con el teléfono móvil en la mano supone la pérdida de…",
        options: ["2 puntos", "3 puntos", "4 puntos", "6 puntos"],
        explanation:
          "Conducir con el móvil sujeto con la mano = 6 puntos + multa. Manos libres SÍ está permitido si no requiere sujeción manual.",
        optionRationales: [
          "2 puntos es demasiado poco para una infracción tan grave.",
          "3 puntos corresponde a otras faltas menores (cambio de sentido, auriculares).",
          "4 puntos es alcoholemia intermedia, no móvil en mano.",
          "",
        ],
      },
      en: {
        text: "Driving with a hand-held mobile phone loses you…",
        options: ["2 points", "3 points", "4 points", "6 points"],
        explanation:
          "Hand-held mobile while driving = 6 points + fine. Hands-free IS allowed if it doesn't require holding.",
        optionRationales: [
          "2 points is too little for such a serious offence.",
          "3 points is for other minor offences (illegal U-turn, headphones).",
          "4 points is mid-range BAC, not the phone in hand.",
          "",
        ],
      },
      ru: {
        text: "Вождение с телефоном в руке — потеря…",
        options: ["2 баллов", "3 баллов", "4 баллов", "6 баллов"],
        explanation:
          "Держать телефон в руке = минус 6 баллов + штраф. Громкая связь разрешена, если не требует держать.",
        optionRationales: [
          "2 балла — слишком мало для такого серьёзного нарушения.",
          "3 балла — за другие мелкие (незаконный разворот, наушники).",
          "4 балла — средняя алкоголь-концентрация, не телефон.",
          "",
        ],
      },
    },
  },
  {
    id: "manual-anexo-07",
    section: "admin",
    correctIndex: 3,
    source: SOURCE,
    translations: {
      es: {
        text: "Adelantar a un ciclista sin dejar 1,5 m de separación supone la pérdida de…",
        options: ["2 puntos", "3 puntos", "4 puntos", "6 puntos"],
        explanation:
          "Adelantar sin dejar 1,5 m con ciclistas o poniéndoles en peligro = 6 puntos + multa. Es una de las faltas más graves porque afecta a usuarios vulnerables.",
        optionRationales: [
          "2 puntos es demasiado poco; adelantar mal a un ciclista puede ser mortal.",
          "3 puntos es para otras faltas menores.",
          "4 puntos no corresponde a esta infracción.",
          "",
        ],
      },
      en: {
        text: "Overtaking a cyclist without leaving 1.5 m clearance loses you…",
        options: ["2 points", "3 points", "4 points", "6 points"],
        explanation:
          "Overtaking without leaving 1.5 m clearance for cyclists or endangering them = 6 points + fine. One of the most serious offences, as it affects vulnerable users.",
        optionRationales: [
          "2 points is too little; unsafe overtakes of cyclists can be fatal.",
          "3 points is for other minor offences.",
          "4 points doesn't match this offence.",
          "",
        ],
      },
      ru: {
        text: "Обгон велосипедиста без 1,5 м бокового интервала — потеря…",
        options: ["2 баллов", "3 баллов", "4 баллов", "6 баллов"],
        explanation:
          "Обгон велосипедиста без 1,5 м интервала или с созданием опасности = минус 6 баллов + штраф. Одно из самых серьёзных нарушений — уязвимые участники.",
        optionRationales: [
          "2 балла — слишком мало; опасный обгон велосипедиста может быть смертельным.",
          "3 балла — за другие мелкие нарушения.",
          "4 балла — не соответствует.",
          "",
        ],
      },
    },
  },
  {
    id: "manual-anexo-08",
    section: "admin",
    correctIndex: 2,
    source: SOURCE,
    translations: {
      es: {
        text: "No llevar puesto el cinturón de seguridad, casco u otro sistema de retención supone la pérdida de…",
        options: ["1 punto", "2 puntos", "3 puntos", "6 puntos"],
        explanation:
          "No llevar puesto el cinturón, el casco o cualquier otro sistema de retención = 3 puntos + multa. Aplica al conductor y también si permite que un pasajero no lo lleve.",
        optionRationales: [
          "1 punto no se aplica a esta infracción; es demasiado bajo.",
          "2 puntos no corresponde; para el cinturón el sistema fija 3.",
          "",
          "6 puntos se reserva para las faltas muy graves (alcohol, móvil, adelantamiento peligroso).",
        ],
      },
      en: {
        text: "Not wearing a seat belt, helmet or other restraint system loses you…",
        options: ["1 point", "2 points", "3 points", "6 points"],
        explanation:
          "Not wearing a seat belt, helmet or any restraint system = 3 points + fine. Applies to the driver and also if they let a passenger skip it.",
        optionRationales: [
          "1 point doesn't apply here; it's too low.",
          "2 points isn't right either; for the belt the system sets 3.",
          "",
          "6 points is reserved for very serious offences (alcohol, phone, dangerous overtake).",
        ],
      },
      ru: {
        text: "Не пристёгнутый ремень, шлем или другое средство защиты — потеря…",
        options: ["1 балла", "2 баллов", "3 баллов", "6 баллов"],
        explanation:
          "Отсутствие ремня, шлема или иного средства защиты = минус 3 балла + штраф. Касается водителя и случая, когда он допустил не пристёгнутого пассажира.",
        optionRationales: [
          "1 балл не применяется — слишком мало.",
          "2 балла тоже неверно; за ремень система назначает 3.",
          "",
          "6 баллов — за очень грубые нарушения (алкоголь, телефон, опасный обгон).",
        ],
      },
    },
  },
  {
    id: "manual-anexo-09",
    section: "admin",
    correctIndex: 2,
    source: SOURCE,
    translations: {
      es: {
        text: "Saltarse un semáforo en rojo supone la pérdida de…",
        options: ["2 puntos", "3 puntos", "4 puntos", "6 puntos"],
        explanation:
          "No respetar la luz roja de un semáforo o una señal de STOP / ceda el paso = 4 puntos + multa. Es infracción grave por el riesgo de colisión en el cruce.",
        optionRationales: [
          "2 puntos es una infracción menor; saltarse un rojo no lo es.",
          "3 puntos corresponde a otras faltas (cinturón, cambio de sentido indebido).",
          "",
          "6 puntos se aplica a alcohol, drogas, móvil en mano, etc., no al semáforo por sí solo.",
        ],
      },
      en: {
        text: "Running a red light loses you…",
        options: ["2 points", "3 points", "4 points", "6 points"],
        explanation:
          "Failing to respect a red light or a STOP / give-way sign = 4 points + fine. It's a serious offence because of the collision risk at the junction.",
        optionRationales: [
          "2 points is for minor offences; running a red isn't minor.",
          "3 points is for other offences (seat belt, illegal U-turn).",
          "",
          "6 points applies to alcohol, drugs, hand-held phone etc., not to running a red on its own.",
        ],
      },
      ru: {
        text: "Проезд на красный свет — потеря…",
        options: ["2 баллов", "3 баллов", "4 баллов", "6 баллов"],
        explanation:
          "Нарушение красного сигнала светофора или знаков STOP / уступи дорогу = минус 4 балла + штраф. Серьёзное нарушение из-за риска ДТП на перекрёстке.",
        optionRationales: [
          "2 балла — за мелкие нарушения; проезд на красный к ним не относится.",
          "3 балла — за другие нарушения (ремень, незаконный разворот).",
          "",
          "6 баллов — за алкоголь, наркотики, телефон в руке и т. п., но не за проезд на красный.",
        ],
      },
    },
  },
  {
    id: "manual-anexo-10",
    section: "admin",
    correctIndex: 3,
    source: SOURCE,
    translations: {
      es: {
        text: "Negarse a hacer las pruebas de alcohol o drogas supone…",
        options: [
          "Pérdida de 3 puntos y multa administrativa",
          "Pérdida de 4 puntos",
          "Nada; es un derecho del conductor negarse",
          "Pérdida de 6 puntos, multa muy grave y puede ser delito penal",
        ],
        explanation:
          "Negarse a las pruebas de alcohol o drogas = 6 puntos, multa muy grave y además puede constituir delito penal (desobediencia). No es un derecho: la ley obliga a someterse.",
        optionRationales: [
          "3 puntos es una sanción menor; la negativa a la prueba es más grave.",
          "4 puntos tampoco corresponde; se sanciona con el máximo (6).",
          "No es un derecho; el conductor está obligado a someterse a las pruebas.",
          "",
        ],
      },
      en: {
        text: "Refusing to take an alcohol or drugs test carries…",
        options: [
          "3 points and an administrative fine",
          "4 points",
          "Nothing; drivers have the right to refuse",
          "6 points, a very serious fine and it can be a criminal offence",
        ],
        explanation:
          "Refusing an alcohol or drugs test = 6 points, a very serious fine and can even be a criminal offence (disobedience). It's not a right — the law requires submission.",
        optionRationales: [
          "3 points is a mild sanction; refusing the test is more serious.",
          "4 points isn't right either; refusal draws the maximum (6).",
          "It isn't a right; the driver is legally required to take the tests.",
          "",
        ],
      },
      ru: {
        text: "Отказ от теста на алкоголь или наркотики влечёт…",
        options: [
          "Минус 3 балла и административный штраф",
          "Минус 4 балла",
          "Ничего; у водителя есть право отказаться",
          "Минус 6 баллов, очень крупный штраф, возможно уголовное дело",
        ],
        explanation:
          "Отказ от теста на алкоголь или наркотики = минус 6 баллов, очень крупный штраф, вплоть до уголовной ответственности (неповиновение). Это не право: закон обязывает пройти тест.",
        optionRationales: [
          "3 балла — слишком мягко; отказ от теста серьёзнее.",
          "4 балла тоже не то; при отказе применяется максимум (6).",
          "Это не право; закон обязывает пройти тест.",
          "",
        ],
      },
    },
  },
  {
    id: "manual-anexo-11",
    section: "admin",
    correctIndex: 1,
    source: SOURCE,
    translations: {
      es: {
        text: "Un conductor que comete una infracción GRAVE recupera el saldo total de puntos si pasan…",
        options: [
          "1 año sin cometer otra infracción grave o muy grave",
          "2 años sin cometer otra infracción grave o muy grave",
          "3 años",
          "5 años",
        ],
        explanation:
          "Se recupera el saldo total tras 2 años sin cometer otra infracción grave o muy grave. Para infracciones muy graves, el plazo es de 3 años.",
        optionRationales: [
          "1 año no basta para faltas graves; el plazo son 2 años.",
          "",
          "3 años es el plazo para recuperar el saldo tras infracciones MUY GRAVES, no graves.",
          "5 años no corresponde; el sistema fija 2 años (grave) o 3 años (muy grave).",
        ],
      },
      en: {
        text: "A driver who commits a SERIOUS offence recovers their full points balance after…",
        options: [
          "1 year without another serious or very serious offence",
          "2 years without another serious or very serious offence",
          "3 years",
          "5 years",
        ],
        explanation:
          "Full balance is restored after 2 years without another serious or very serious offence. For very serious offences, the period is 3 years.",
        optionRationales: [
          "1 year isn't enough for serious offences; the period is 2 years.",
          "",
          "3 years is the period for recovering the balance after VERY SERIOUS offences, not serious ones.",
          "5 years doesn't apply; the system sets 2 (serious) or 3 (very serious).",
        ],
      },
      ru: {
        text: "Водитель, совершивший ГРУБОЕ нарушение, полностью восстанавливает баланс баллов через…",
        options: [
          "1 год без нового грубого или очень грубого нарушения",
          "2 года без нового грубого или очень грубого нарушения",
          "3 года",
          "5 лет",
        ],
        explanation:
          "Полный баланс восстанавливается через 2 года без нового грубого или очень грубого нарушения. Для очень грубых нарушений — 3 года.",
        optionRationales: [
          "1 год мало; для грубых нарушений установлено 2 года.",
          "",
          "3 года — срок восстановления после ОЧЕНЬ грубых нарушений, не грубых.",
          "5 лет не подходит; система устанавливает 2 (грубое) или 3 (очень грубое).",
        ],
      },
    },
  },
];
