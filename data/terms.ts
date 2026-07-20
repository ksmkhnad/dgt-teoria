import type { Term } from "@/lib/types";

// Glossary of DGT / Spanish traffic terms.
// Definitions grounded in DGT Manual Permiso B (Lectura Fácil, 2024) Tema 1 & 2,
// extended with vocabulary from Igor's 2025-updated theory course:
// ADAS, MiDGT, and updated speed/BAC regulations.
// EN/RU translations AI-drafted; spot-check before public use.

const SRC_MANUAL = "DGT Manual Permiso B (Lectura Fácil, 2024)";
const SRC_IGOR = "Igor DGT theory course (2025 update)";

export const TERMS: Term[] = [
  // ===== VEHICLES =====
  {
    id: "turismo",
    category: "vehicles",
    source: SRC_MANUAL,
    relatedTerms: ["mma", "tara"],
    translations: {
      es: {
        term: "Turismo",
        definition:
          "Automóvil destinado al transporte de personas con capacidad de hasta 9 plazas, incluida la del conductor.",
        example: "La mayoría de los coches particulares son turismos.",
      },
      en: {
        term: "Passenger car (turismo)",
        definition:
          "Motor vehicle designed to carry people, with capacity for up to 9 seats including the driver.",
        example: "Most private cars are 'turismos'.",
      },
      ru: {
        term: "Легковой автомобиль (turismo)",
        definition:
          "Транспортное средство для перевозки людей, вместимостью до 9 мест включая водителя.",
        example: "Большинство личных машин — turismo.",
      },
    },
  },
  {
    id: "motocicleta",
    category: "vehicles",
    source: SRC_MANUAL,
    translations: {
      es: {
        term: "Motocicleta",
        definition:
          "Vehículo de dos o tres ruedas con motor y velocidad superior a 45 km/h. Se conducen con los permisos A1, A2 o A según su potencia.",
      },
      en: {
        term: "Motorcycle",
        definition:
          "Two- or three-wheeled motor vehicle with a top speed above 45 km/h. Requires A1, A2 or A licence depending on power.",
      },
      ru: {
        term: "Мотоцикл",
        definition:
          "Двух- или трёхколёсное моторное ТС со скоростью выше 45 км/ч. Требует прав A1, A2 или A в зависимости от мощности.",
      },
    },
  },
  {
    id: "ciclomotor",
    category: "vehicles",
    source: SRC_MANUAL,
    relatedTerms: ["motocicleta"],
    translations: {
      es: {
        term: "Ciclomotor",
        definition:
          "Vehículo de dos o tres ruedas con motor, cuya velocidad máxima no supera los 45 km/h. Se conduce con el permiso AM (mínimo 15 años).",
        example: "Un scooter de 50 cc para ciudad suele ser un ciclomotor.",
      },
      en: {
        term: "Moped (ciclomotor)",
        definition:
          "Two- or three-wheeled motor vehicle whose top speed does not exceed 45 km/h. Requires an AM licence (min. age 15).",
        example: "A 50cc city scooter is usually a ciclomotor.",
      },
      ru: {
        term: "Мопед (ciclomotor)",
        definition:
          "Двух- или трёхколёсное моторное ТС с максимальной скоростью не выше 45 км/ч. Требует прав AM (мин. возраст 15 лет).",
        example: "Городской скутер 50 см³ обычно относится к ciclomotor.",
      },
    },
  },
  {
    id: "ciclo",
    category: "vehicles",
    source: SRC_MANUAL,
    translations: {
      es: {
        term: "Ciclo",
        definition:
          "Vehículo de dos ruedas propulsado por el esfuerzo muscular del conductor. Se considera ciclo incluso si tiene motor eléctrico de pedaleo asistido de hasta 250 W.",
      },
      en: {
        term: "Cycle / bicycle",
        definition:
          "Two-wheeled vehicle propelled by the rider's muscular effort. Still a 'ciclo' even with a pedal-assist e-motor up to 250 W.",
      },
      ru: {
        term: "Велосипед (ciclo)",
        definition:
          "Двухколёсное ТС, приводимое мускульной силой водителя. Считается ciclo даже с электромотором педального ассистирования до 250 Вт.",
      },
    },
  },
  {
    id: "tara",
    category: "vehicles",
    source: SRC_MANUAL,
    relatedTerms: ["mma", "masa_orden_marcha"],
    translations: {
      es: {
        term: "Tara",
        definition:
          "Peso del vehículo vacío, sin conductor, pasajeros ni carga, pero con todos sus depósitos llenos.",
      },
      en: {
        term: "Tare weight (tara)",
        definition:
          "Weight of the empty vehicle: no driver, passengers or cargo, but with all tanks full.",
      },
      ru: {
        term: "Собственная масса (tara)",
        definition:
          "Масса пустого автомобиля: без водителя, пассажиров и груза, но со всеми заполненными баками.",
      },
    },
  },
  {
    id: "masa_orden_marcha",
    category: "vehicles",
    source: SRC_MANUAL,
    relatedTerms: ["tara", "mma"],
    translations: {
      es: {
        term: "Masa en orden de marcha",
        definition:
          "Tara del vehículo más el peso del conductor (75 kg) y el equipamiento estándar.",
      },
      en: {
        term: "Mass in running order",
        definition:
          "Tare of the vehicle plus the driver's weight (75 kg) and standard equipment.",
      },
      ru: {
        term: "Снаряжённая масса",
        definition:
          "Tara плюс масса водителя (75 кг) и штатное оборудование.",
      },
    },
  },
  {
    id: "mma",
    category: "vehicles",
    source: SRC_MANUAL,
    relatedTerms: ["tara"],
    translations: {
      es: {
        term: "MMA (Masa Máxima Autorizada)",
        definition:
          "Peso máximo total con el que un vehículo puede circular legalmente, incluyendo carga, pasajeros y conductor. Aparece en el permiso de circulación.",
      },
      en: {
        term: "Gross vehicle weight rating / MMA",
        definition:
          "Maximum total weight with which a vehicle may legally circulate, including cargo, passengers and driver. Shown on the vehicle registration.",
      },
      ru: {
        term: "Максимально разрешённая масса (MMA)",
        definition:
          "Максимальная суммарная масса, с которой ТС может законно двигаться (включая груз, пассажиров и водителя). Указана в свидетельстве о регистрации.",
      },
    },
  },
  {
    id: "vehiculo_especial",
    category: "vehicles",
    source: SRC_MANUAL,
    translations: {
      es: {
        term: "Vehículo especial",
        definition:
          "Vehículo con características diferentes a los ordinarios: agrícola, de obras, remolcado, etc. Suele tener límites de velocidad más bajos.",
      },
      en: {
        term: "Special vehicle",
        definition:
          "Vehicle with special features unlike ordinary ones: agricultural, works, towed, etc. Usually subject to lower speed limits.",
      },
      ru: {
        term: "Специальное ТС",
        definition:
          "ТС с особыми характеристиками (сельскохозяйственное, дорожно-строительное, прицепное и т.п.). Обычно с более низкими лимитами скорости.",
      },
    },
  },
  {
    id: "semirremolque",
    category: "vehicles",
    source: SRC_MANUAL,
    translations: {
      es: {
        term: "Semirremolque",
        definition:
          "Vehículo remolcado que apoya parte de su peso sobre el vehículo tractor, formando un vehículo articulado.",
      },
      en: {
        term: "Semi-trailer",
        definition:
          "Trailer that rests part of its weight on the tractor unit, forming an articulated vehicle.",
      },
      ru: {
        term: "Полуприцеп",
        definition:
          "Прицепное ТС, часть массы которого опирается на тягач, образуя автопоезд.",
      },
    },
  },

  // ===== PERSONS =====
  {
    id: "conductor",
    category: "persons",
    source: SRC_MANUAL,
    relatedTerms: ["conductor_novel", "peaton"],
    translations: {
      es: {
        term: "Conductor",
        definition:
          "Persona que maneja un vehículo o que dirige a los animales que tiran de él.",
      },
      en: {
        term: "Driver",
        definition:
          "Person who controls a vehicle or guides the animals drawing it.",
      },
      ru: {
        term: "Водитель",
        definition:
          "Лицо, управляющее ТС или животными, тянущими его.",
      },
    },
  },
  {
    id: "peaton",
    category: "persons",
    source: SRC_MANUAL,
    relatedTerms: ["conductor"],
    translations: {
      es: {
        term: "Peatón",
        definition:
          "Persona que va a pie por la vía. También es peatón quien empuja una bicicleta o silla de ruedas (incluso motorizada).",
      },
      en: {
        term: "Pedestrian",
        definition:
          "Person walking on foot along the road. Someone pushing a bicycle or a wheelchair (including motorised) is also a pedestrian.",
      },
      ru: {
        term: "Пешеход",
        definition:
          "Лицо, идущее пешком. Также пешеходом считается тот, кто ведёт велосипед или коляску (в том числе моторизованную) рядом с собой.",
      },
    },
  },
  {
    id: "titular_vehiculo",
    category: "persons",
    source: SRC_MANUAL,
    translations: {
      es: {
        term: "Titular del vehículo",
        definition:
          "Persona a cuyo nombre está registrado el vehículo. Es responsable de que el vehículo tenga toda la documentación en regla.",
      },
      en: {
        term: "Registered keeper",
        definition:
          "Person in whose name the vehicle is registered. Responsible for keeping documentation up to date.",
      },
      ru: {
        term: "Владелец / зарегистрированный держатель ТС",
        definition:
          "Лицо, на чьё имя зарегистрировано ТС. Отвечает за то, чтобы все документы были в порядке.",
      },
    },
  },
  {
    id: "conductor_habitual",
    category: "persons",
    source: SRC_MANUAL,
    translations: {
      es: {
        term: "Conductor habitual",
        definition:
          "Persona que conduce con más frecuencia un determinado vehículo, aunque no sea su titular.",
      },
      en: {
        term: "Habitual driver",
        definition:
          "Person who most frequently drives a specific vehicle, even if not the registered keeper.",
      },
      ru: {
        term: "Основной водитель",
        definition:
          "Лицо, чаще всего управляющее конкретным ТС, даже если оно не является владельцем.",
      },
    },
  },
  {
    id: "conductor_novel",
    category: "persons",
    source: SRC_IGOR,
    relatedTerms: ["permiso_conducir"],
    translations: {
      es: {
        term: "Conductor novel",
        definition:
          "Persona que obtuvo el permiso de conducir hace menos de 2 años. Tiene 8 puntos y límites de alcoholemia más estrictos. Debe llevar la placa verde con L en el cristal trasero.",
      },
      en: {
        term: "Novice driver (novel)",
        definition:
          "Driver who has held the licence for less than 2 years. Starts with 8 points, subject to stricter BAC limits, must display the green L plate on the rear window.",
      },
      ru: {
        term: "Начинающий водитель (novel)",
        definition:
          "Водитель со стажем менее 2 лет. На старте 8 баллов, более строгие лимиты по алкоголю, обязан размещать зелёную табличку «L» на заднем стекле.",
      },
    },
  },

  // ===== ROADS =====
  {
    id: "via_publica",
    category: "roads",
    source: SRC_MANUAL,
    translations: {
      es: {
        term: "Vía pública",
        definition:
          "Lugar por donde circulan peatones, vehículos y animales. Puede ser una calle, carretera o camino.",
      },
      en: {
        term: "Public road",
        definition:
          "Space along which pedestrians, vehicles and animals travel. Can be a street, road or lane.",
      },
      ru: {
        term: "Дорога общего пользования",
        definition:
          "Пространство для движения пешеходов, ТС и животных. Может быть улицей, автодорогой или просёлочной дорогой.",
      },
    },
  },
  {
    id: "calzada",
    category: "roads",
    source: SRC_MANUAL,
    relatedTerms: ["arcen", "carril"],
    translations: {
      es: {
        term: "Calzada",
        definition:
          "Parte de la vía por donde circulan los vehículos. Puede tener uno o varios carriles.",
      },
      en: {
        term: "Roadway (calzada)",
        definition:
          "Part of the road used by vehicles. May have one or several lanes.",
      },
      ru: {
        term: "Проезжая часть (calzada)",
        definition:
          "Часть дороги, по которой движутся ТС. Может иметь одну или несколько полос.",
      },
    },
  },
  {
    id: "arcen",
    category: "roads",
    source: SRC_MANUAL,
    relatedTerms: ["calzada"],
    translations: {
      es: {
        term: "Arcén",
        definition:
          "Franja lateral de la vía, fuera de la calzada, destinada a peatones, ciclistas, animales, vehículos lentos o paradas de emergencia.",
      },
      en: {
        term: "Shoulder / hard shoulder (arcén)",
        definition:
          "Lateral strip of the road, outside the roadway, for pedestrians, cyclists, animals, slow vehicles or emergency stops.",
      },
      ru: {
        term: "Обочина (arcén)",
        definition:
          "Боковая полоса за пределами проезжей части — для пешеходов, велосипедистов, животных, тихоходных ТС и аварийных остановок.",
      },
    },
  },
  {
    id: "mediana",
    category: "roads",
    source: SRC_MANUAL,
    translations: {
      es: {
        term: "Mediana",
        definition:
          "Franja que separa las dos calzadas de una autopista o autovía, con sentidos de circulación opuestos.",
      },
      en: {
        term: "Central reservation / median",
        definition:
          "Strip separating the two carriageways of a motorway or dual carriageway with opposite directions of travel.",
      },
      ru: {
        term: "Разделительная полоса (mediana)",
        definition:
          "Полоса, разделяющая две проезжие части автомагистрали или скоростной дороги встречных направлений.",
      },
    },
  },
  {
    id: "carril",
    category: "roads",
    source: SRC_MANUAL,
    relatedTerms: ["calzada"],
    translations: {
      es: {
        term: "Carril",
        definition:
          "Cada una de las bandas longitudinales en que puede estar dividida la calzada, con anchura suficiente para la circulación de una fila de vehículos.",
      },
      en: {
        term: "Lane",
        definition:
          "Each longitudinal strip of the roadway wide enough for a single line of vehicles.",
      },
      ru: {
        term: "Полоса движения",
        definition:
          "Каждая продольная полоса проезжей части шириной, достаточной для движения одного ряда ТС.",
      },
    },
  },
  {
    id: "autopista",
    category: "roads",
    source: SRC_MANUAL,
    relatedTerms: ["autovia"],
    translations: {
      es: {
        term: "Autopista",
        definition:
          "Vía de al menos 2 carriles por sentido, separadas por mediana, sin cruces a nivel y sin acceso directo a fincas colindantes. Está totalmente vallada. Máx. 120 km/h, mín. 60 km/h.",
      },
      en: {
        term: "Motorway (autopista)",
        definition:
          "Road with at least 2 lanes per direction, separated by a median, no level crossings and no direct access to adjacent properties. Fully fenced. Max 120 km/h, min 60 km/h.",
      },
      ru: {
        term: "Автомагистраль (autopista)",
        definition:
          "Дорога с не менее чем 2 полосами в каждом направлении, разделительной полосой, без пересечений в одном уровне и без прямых съездов к прилегающим владениям. Полностью огорожена. Макс. 120 км/ч, мин. 60 км/ч.",
      },
    },
  },
  {
    id: "autovia",
    category: "roads",
    source: SRC_MANUAL,
    relatedTerms: ["autopista"],
    translations: {
      es: {
        term: "Autovía",
        definition:
          "Similar a la autopista pero con acceso limitado a fincas colindantes. Máx. 120 km/h, mín. 60 km/h. Los ciclistas mayores de 14 años pueden circular por el arcén salvo prohibición.",
      },
      en: {
        term: "Dual carriageway (autovía)",
        definition:
          "Similar to a motorway but with limited access to adjacent properties. Max 120 km/h, min 60 km/h. Cyclists over 14 may ride on the shoulder unless prohibited.",
      },
      ru: {
        term: "Скоростная автодорога (autovía)",
        definition:
          "Похожа на автомагистраль, но с ограниченным доступом к прилегающим владениям. Макс. 120 км/ч, мин. 60 км/ч. Велосипедисты старше 14 лет могут ехать по обочине, если нет запрета.",
      },
    },
  },
  {
    id: "carretera_convencional",
    category: "roads",
    source: SRC_MANUAL,
    translations: {
      es: {
        term: "Carretera convencional",
        definition:
          "Vía interurbana que no cumple los requisitos de autopista ni autovía. Máx. general 90 km/h para turismos.",
      },
      en: {
        term: "Conventional (single-carriageway) road",
        definition:
          "Interurban road that does not meet motorway or dual-carriageway criteria. General max 90 km/h for cars.",
      },
      ru: {
        term: "Обычная загородная дорога",
        definition:
          "Междугородняя дорога, не подходящая под категорию autopista/autovía. Общий максимум 90 км/ч для легковых.",
      },
    },
  },
  {
    id: "travesia",
    category: "roads",
    source: SRC_IGOR,
    translations: {
      es: {
        term: "Travesía",
        definition:
          "Tramo de carretera interurbana que atraviesa un núcleo de población. Velocidad máxima 50 km/h independientemente del número de carriles.",
      },
      en: {
        term: "Travesía (through-road)",
        definition:
          "Section of interurban road passing through a built-up area. Speed limit 50 km/h regardless of lane count.",
      },
      ru: {
        term: "Travesía (участок за/через населённый пункт)",
        definition:
          "Отрезок междугородней дороги, проходящий через населённый пункт. Лимит 50 км/ч независимо от числа полос.",
      },
    },
  },
  {
    id: "via_urbana",
    category: "roads",
    source: SRC_IGOR,
    translations: {
      es: {
        term: "Vía urbana",
        definition:
          "Vía dentro de un pueblo o ciudad. Límites: 20 km/h en calzada única con acera al mismo nivel, 30 km/h en 1 carril por sentido, 50 km/h en 2+ carriles por sentido.",
      },
      en: {
        term: "Urban road",
        definition:
          "Road inside a town or city. Limits: 20 km/h on single-platform streets, 30 km/h with 1 lane per direction, 50 km/h with 2+ lanes per direction.",
      },
      ru: {
        term: "Городская дорога",
        definition:
          "Дорога внутри населённого пункта. Лимиты: 20 км/ч на одноуровневых с тротуаром, 30 км/ч при 1 полосе в каждом направлении, 50 км/ч при 2+ полосах в направлении.",
      },
    },
  },
  {
    id: "glorieta",
    category: "roads",
    source: SRC_MANUAL,
    imageUrl: "/signs/p4.svg",
    imageCredit: "P-4 · Wikimedia Commons",
    translations: {
      es: {
        term: "Glorieta / Rotonda",
        definition:
          "Intersección con circulación giratoria en sentido antihorario. Tienen preferencia los vehículos que ya circulan por ella.",
      },
      en: {
        term: "Roundabout",
        definition:
          "Junction with circular counter-clockwise traffic. Vehicles already in the roundabout have priority.",
      },
      ru: {
        term: "Кольцевой перекрёсток (glorieta)",
        definition:
          "Перекрёсток с круговым движением против часовой стрелки. Преимущество у тех, кто уже движется по кругу.",
      },
    },
  },
  {
    id: "paso_a_nivel",
    category: "roads",
    source: SRC_MANUAL,
    translations: {
      es: {
        term: "Paso a nivel",
        definition:
          "Lugar donde las vías del tren se cruzan con una carretera o camino al mismo nivel. Puede tener barreras o no.",
      },
      en: {
        term: "Level crossing",
        definition:
          "Point where railway tracks cross a road at the same level. May or may not have barriers.",
      },
      ru: {
        term: "Железнодорожный переезд",
        definition:
          "Место, где железнодорожные пути пересекают дорогу на одном уровне. Может быть со шлагбаумом или без.",
      },
    },
  },

  // ===== SIGNS =====
  {
    id: "senal_vertical",
    category: "signs",
    source: SRC_MANUAL,
    relatedTerms: ["semaforo", "marca_vial"],
    translations: {
      es: {
        term: "Señal vertical",
        definition:
          "Placa fija en un poste u otra estructura al lado o sobre la vía. Se dividen en: advierten peligro, obligan/prohíben, informan/orientan.",
      },
      en: {
        term: "Vertical sign",
        definition:
          "Plate fixed to a post or other structure beside or above the road. Groups: warn of danger, mandate/prohibit, inform/orient.",
      },
      ru: {
        term: "Постоянный знак",
        definition:
          "Пластина, закреплённая на столбе или иной опоре у дороги. Делятся на: предупреждающие, предписывающие/запрещающие, информационные.",
      },
    },
  },
  {
    id: "semaforo",
    category: "signs",
    source: SRC_MANUAL,
    relatedTerms: ["senal_vertical"],
    translations: {
      es: {
        term: "Semáforo",
        definition:
          "Dispositivo luminoso que regula la circulación. Prevalece sobre las señales verticales.",
      },
      en: {
        term: "Traffic light",
        definition:
          "Light-based device regulating traffic. Overrules vertical signs when both apply.",
      },
      ru: {
        term: "Светофор",
        definition:
          "Световое устройство, регулирующее движение. Приоритет над постоянными знаками.",
      },
    },
  },
  {
    id: "marca_vial",
    category: "signs",
    source: SRC_MANUAL,
    translations: {
      es: {
        term: "Marca vial",
        definition:
          "Líneas y símbolos pintados sobre la calzada. Ocupan el último lugar en el orden de prioridad de las señales.",
      },
      en: {
        term: "Road marking",
        definition:
          "Lines and symbols painted on the roadway. Lowest priority in the signal hierarchy.",
      },
      ru: {
        term: "Дорожная разметка",
        definition:
          "Линии и символы, нанесённые на проезжую часть. Наименьший приоритет в иерархии сигналов.",
      },
    },
  },
  {
    id: "panel_variable",
    category: "signs",
    source: SRC_MANUAL,
    translations: {
      es: {
        term: "Panel de mensaje variable",
        definition:
          "Panel electrónico cuyo mensaje cambia según las circunstancias del tráfico. Sus instrucciones son de obligado cumplimiento.",
      },
      en: {
        term: "Variable message sign",
        definition:
          "Electronic panel whose message changes with traffic conditions. Its instructions are mandatory.",
      },
      ru: {
        term: "Знак с изменяемым сообщением",
        definition:
          "Электронное табло, сообщение которого меняется в зависимости от ситуации. Указания обязательны к исполнению.",
      },
    },
  },
  {
    id: "senal_balizamiento",
    category: "signs",
    source: SRC_MANUAL,
    translations: {
      es: {
        term: "Señales de balizamiento",
        definition:
          "Luces, señales y dispositivos que destacan obras o peligros, e indican por dónde circular.",
      },
      en: {
        term: "Marker / delineator signs",
        definition:
          "Lights, signs and devices that highlight roadworks or hazards and indicate which route to take.",
      },
      ru: {
        term: "Ограждающие/направляющие сигналы",
        definition:
          "Огни, знаки и устройства, обозначающие работы или опасные участки и указывающие направление движения.",
      },
    },
  },
  {
    id: "ceda_paso",
    category: "signs",
    source: SRC_MANUAL,
    relatedTerms: ["stop"],
    imageUrl: "/signs/r1.svg",
    imageCredit: "Wikimedia Commons · public domain",
    translations: {
      es: {
        term: "Ceda el paso",
        definition:
          "Señal triangular invertida que obliga a reducir la velocidad y ceder el paso a los vehículos con preferencia, sin necesidad de detenerse si la vía está libre.",
      },
      en: {
        term: "Give way / yield",
        definition:
          "Inverted triangular sign requiring you to slow and give way to vehicles with priority. You need not stop if the road is clear.",
      },
      ru: {
        term: "Уступите дорогу (ceda el paso)",
        definition:
          "Треугольный перевёрнутый знак. Обязывает снизить скорость и уступить транспорту с преимуществом; при свободной дороге останавливаться не нужно.",
      },
    },
  },
  {
    id: "stop",
    category: "signs",
    source: SRC_MANUAL,
    relatedTerms: ["ceda_paso"],
    imageUrl: "/signs/r2.svg",
    imageCredit: "Wikimedia Commons · public domain",
    translations: {
      es: {
        term: "STOP",
        definition:
          "Señal octogonal roja que obliga a detener el vehículo por completo antes de la línea de detención y ceder el paso.",
      },
      en: {
        term: "STOP",
        definition:
          "Red octagonal sign requiring a full stop before the stop line and giving way to other traffic.",
      },
      ru: {
        term: "STOP",
        definition:
          "Красный восьмиугольный знак. Обязывает полностью остановиться перед стоп-линией и уступить дорогу.",
      },
    },
  },
  {
    id: "senal_peligro",
    category: "signs",
    source: SRC_MANUAL,
    imageUrl: "/signs/p13a.svg",
    imageCredit: "P-13a · Wikimedia Commons",
    translations: {
      es: {
        term: "Señal de peligro (serie P)",
        definition:
          "Señal triangular con borde rojo y fondo blanco (o amarillo si es temporal). Códigos empiezan por P (peligro). Ejemplos: P-1 preferencia, P-4 rotonda, P-13 curva peligrosa.",
      },
      en: {
        term: "Danger warning sign (P series)",
        definition:
          "Triangular sign with red border, white (or yellow if temporary) background. Codes start with P (peligro). Examples: P-1 priority, P-4 roundabout, P-13 dangerous curve.",
      },
      ru: {
        term: "Предупреждающий знак (серия P)",
        definition:
          "Треугольный знак с красной каймой и белым фоном (жёлтый — временный). Коды начинаются с P (peligro). Примеры: P-1 приоритет, P-4 кольцо, P-13 опасный поворот.",
      },
    },
  },
  {
    id: "senal_reglamentacion",
    category: "signs",
    source: SRC_MANUAL,
    imageUrl: "/signs/r301.svg",
    imageCredit: "R-301 · Wikimedia Commons",
    translations: {
      es: {
        term: "Señal de reglamentación (serie R)",
        definition:
          "Círculo con borde rojo (prohibición/restricción) o azul (obligación). Ejemplos: R-101 dirección prohibida, R-301 velocidad máxima, R-402 sentido obligatorio.",
      },
      en: {
        term: "Regulation sign (R series)",
        definition:
          "Circular sign with red border (prohibition/restriction) or blue (obligation). Examples: R-101 no entry, R-301 max speed, R-402 mandatory direction.",
      },
      ru: {
        term: "Знак предписания (серия R)",
        definition:
          "Круг с красной каймой (запрет/ограничение) или синий (предписание). Примеры: R-101 запрет въезда, R-301 максимальная скорость, R-402 обязательное направление.",
      },
    },
  },
  {
    id: "senal_indicacion",
    category: "signs",
    source: SRC_MANUAL,
    imageUrl: "/signs/s13.svg",
    imageCredit: "S-13 · Wikimedia Commons",
    translations: {
      es: {
        term: "Señal de indicación (serie S)",
        definition:
          "Señal rectangular/cuadrada que informa u orienta (servicios, direcciones, hospitales, etc.). Códigos empiezan por S.",
      },
      en: {
        term: "Information sign (S series)",
        definition:
          "Rectangular/square sign that informs or orients (services, directions, hospitals, etc.). Codes start with S.",
      },
      ru: {
        term: "Информационный знак (серия S)",
        definition:
          "Прямоугольный/квадратный знак с информацией или ориентиром (услуги, направления, больницы и т.п.). Коды начинаются с S.",
      },
    },
  },

  // ===== MANEUVERS =====
  {
    id: "adelantamiento",
    category: "maneuvers",
    source: SRC_MANUAL,
    translations: {
      es: {
        term: "Adelantamiento",
        definition:
          "Maniobra por la que un vehículo pasa a otro que va delante en el mismo sentido. Se hace por la izquierda salvo excepciones. Fuera de poblado, hay que dejar 1,5 m mínimo al adelantar a un ciclista.",
      },
      en: {
        term: "Overtaking",
        definition:
          "Maneuver in which a vehicle passes another travelling ahead in the same direction. Done on the left except for specific cases. Outside built-up areas, leave at least 1.5 m when overtaking a cyclist.",
      },
      ru: {
        term: "Обгон",
        definition:
          "Манёвр, при котором один автомобиль опережает другой, идущий впереди в том же направлении. Обгон слева, за исключением особых случаев. Вне населённого пункта — минимум 1,5 м бокового интервала при обгоне велосипедиста.",
      },
    },
  },
  {
    id: "incorporacion",
    category: "maneuvers",
    source: SRC_MANUAL,
    translations: {
      es: {
        term: "Incorporación",
        definition:
          "Maniobra de entrar a la circulación desde una parada, un aparcamiento o un carril de aceleración. Obliga a ceder el paso a los vehículos que ya circulan.",
      },
      en: {
        term: "Joining traffic",
        definition:
          "Maneuver of entering traffic from a stop, parking or acceleration lane. Requires giving way to vehicles already on the road.",
      },
      ru: {
        term: "Выезд/включение в поток",
        definition:
          "Начало движения из состояния остановки, с парковки или полосы разгона. Требует уступить дорогу уже движущимся ТС.",
      },
    },
  },
  {
    id: "cambio_sentido",
    category: "maneuvers",
    source: SRC_MANUAL,
    translations: {
      es: {
        term: "Cambio de sentido",
        definition:
          "Maniobra para invertir la dirección de la marcha (media vuelta). Solo se puede realizar en una maniobra, sin obstruir el tráfico, y donde no esté prohibida. En autopista/autovía debe hacerse en un enlace habilitado.",
      },
      en: {
        term: "U-turn (change of direction)",
        definition:
          "Maneuver to reverse the direction of travel. Must be done in a single move, without obstructing traffic, and only where not prohibited. On motorways, only at designated interchanges.",
      },
      ru: {
        term: "Разворот (смена направления)",
        definition:
          "Манёвр для изменения направления движения на противоположное. Должен выполняться за один приём, без создания помех, и только там, где не запрещён. На автомагистрали — только через специальные развязки.",
      },
    },
  },
  {
    id: "detencion",
    category: "maneuvers",
    source: SRC_IGOR,
    relatedTerms: ["parada", "estacionamiento"],
    translations: {
      es: {
        term: "Detención",
        definition:
          "Parada breve e involuntaria por exigencias del tráfico (semáforo en rojo, atasco, emergencia). No es lo mismo que parada.",
      },
      en: {
        term: "Involuntary stop (detención)",
        definition:
          "Brief involuntary stop caused by traffic (red light, jam, emergency). Different from a voluntary 'parada'.",
      },
      ru: {
        term: "Вынужденная остановка (detención)",
        definition:
          "Кратковременная непроизвольная остановка из-за движения (красный, пробка, авария). Отличается от произвольной parada.",
      },
    },
  },
  {
    id: "parada",
    category: "maneuvers",
    source: SRC_IGOR,
    relatedTerms: ["detencion", "estacionamiento"],
    translations: {
      es: {
        term: "Parada",
        definition:
          "Inmovilización voluntaria de un vehículo por menos de 2 minutos. El conductor debe quedarse cerca del vehículo para poder moverlo si es necesario.",
      },
      en: {
        term: "Stop (parada)",
        definition:
          "Voluntary immobilisation of the vehicle for under 2 minutes. The driver must stay near the vehicle to move it if needed.",
      },
      ru: {
        term: "Стоянка до 2 минут (parada)",
        definition:
          "Добровольная остановка ТС менее чем на 2 минуты. Водитель должен находиться рядом, чтобы при необходимости отогнать машину.",
      },
    },
  },
  {
    id: "estacionamiento",
    category: "maneuvers",
    source: SRC_IGOR,
    relatedTerms: ["parada"],
    translations: {
      es: {
        term: "Estacionamiento",
        definition:
          "Inmovilización voluntaria del vehículo por más de 2 minutos. El conductor puede alejarse. En vías de doble sentido, solo se estaciona en el lado derecho; en vías de un solo sentido, se puede en ambos lados si hay espacio.",
      },
      en: {
        term: "Parking",
        definition:
          "Voluntary immobilisation of the vehicle for more than 2 minutes. The driver may leave. On two-way roads, park only on the right; on one-way roads, either side if space allows.",
      },
      ru: {
        term: "Парковка",
        definition:
          "Добровольная остановка ТС более чем на 2 минуты. Водитель может уйти. На двусторонней дороге — только справа; на односторонней — с любой стороны при наличии места.",
      },
    },
  },

  // ===== SAFETY =====
  {
    id: "cinturon_seguridad",
    category: "safety",
    source: SRC_MANUAL,
    relatedTerms: ["sri"],
    translations: {
      es: {
        term: "Cinturón de seguridad",
        definition:
          "Sistema obligatorio para todos los ocupantes del vehículo, delante y detrás, en todas las vías.",
      },
      en: {
        term: "Seatbelt",
        definition:
          "Mandatory for all occupants of the vehicle, front and rear, on all types of road.",
      },
      ru: {
        term: "Ремень безопасности",
        definition:
          "Обязателен для всех пассажиров и водителя, спереди и сзади, на всех типах дорог.",
      },
    },
  },
  {
    id: "sri",
    category: "safety",
    source: SRC_MANUAL,
    relatedTerms: ["cinturon_seguridad"],
    translations: {
      es: {
        term: "SRI (Sistema de Retención Infantil)",
        definition:
          "Silla o dispositivo homologado obligatorio para niños de menos de 1,35 m de estatura, adaptado a su talla y peso.",
      },
      en: {
        term: "Child Restraint System (CRS)",
        definition:
          "Approved seat or device required for children under 1.35 m in height, matched to their size and weight.",
      },
      ru: {
        term: "Детское удерживающее устройство (SRI)",
        definition:
          "Сертифицированное кресло/устройство, обязательное для детей ростом менее 1,35 м; должно соответствовать росту и весу.",
      },
    },
  },
  {
    id: "distancia_seguridad",
    category: "safety",
    source: SRC_IGOR,
    relatedTerms: ["distancia_reaccion", "distancia_frenado"],
    translations: {
      es: {
        term: "Distancia de seguridad",
        definition:
          "Espacio mínimo con el vehículo de delante para poder frenar sin colisionar. Guía práctica: 2-3 segundos; 50 m para vehículos >3.500 kg; 100-150 m dentro de un túnel.",
      },
      en: {
        term: "Safe following distance",
        definition:
          "Minimum gap from the vehicle ahead so you can brake without hitting it. Rule of thumb: 2-3 seconds; 50 m for vehicles over 3,500 kg; 100-150 m inside a tunnel.",
      },
      ru: {
        term: "Безопасная дистанция",
        definition:
          "Минимальный интервал до впереди идущего ТС, чтобы успеть затормозить. Правило: 2-3 секунды; 50 м для ТС свыше 3500 кг; 100-150 м в тоннеле.",
      },
    },
  },
  {
    id: "distancia_reaccion",
    category: "safety",
    source: SRC_MANUAL,
    relatedTerms: ["distancia_frenado", "distancia_seguridad"],
    translations: {
      es: {
        term: "Distancia de reacción",
        definition:
          "Espacio que recorre el vehículo desde que el conductor percibe un peligro hasta que empieza a frenar. Aumenta con fatiga, alcohol y velocidad.",
      },
      en: {
        term: "Reaction distance",
        definition:
          "Distance travelled between perceiving a hazard and starting to brake. Grows with fatigue, alcohol and speed.",
      },
      ru: {
        term: "Дистанция реакции",
        definition:
          "Расстояние, которое ТС проходит с момента обнаружения опасности до начала торможения. Возрастает при усталости, алкоголе и скорости.",
      },
    },
  },
  {
    id: "distancia_frenado",
    category: "safety",
    source: SRC_MANUAL,
    relatedTerms: ["distancia_reaccion"],
    translations: {
      es: {
        term: "Distancia de frenado",
        definition:
          "Espacio recorrido desde que se pisa el freno hasta que el vehículo se detiene. Depende de velocidad, neumáticos, estado de la calzada y del sistema de frenos.",
      },
      en: {
        term: "Braking distance",
        definition:
          "Distance travelled from pressing the brake to fully stopping. Depends on speed, tyres, road surface and brake condition.",
      },
      ru: {
        term: "Тормозной путь",
        definition:
          "Расстояние от момента нажатия на тормоз до полной остановки. Зависит от скорости, шин, покрытия и состояния тормозов.",
      },
    },
  },
  {
    id: "aquaplaning",
    category: "safety",
    source: SRC_MANUAL,
    translations: {
      es: {
        term: "Aquaplaning (hidroplaneo)",
        definition:
          "Pérdida de contacto de los neumáticos con la calzada por una capa de agua. Se pierde adherencia y control. Se previene con neumáticos en buen estado y reduciendo velocidad con lluvia.",
      },
      en: {
        term: "Aquaplaning / hydroplaning",
        definition:
          "Loss of tyre contact with the road due to a water layer. Grip and control are lost. Prevention: good tyres and lower speed in rain.",
      },
      ru: {
        term: "Аквапланирование",
        definition:
          "Потеря сцепления шин с дорогой из-за слоя воды. Теряется управление. Профилактика: хорошие шины и низкая скорость в дождь.",
      },
    },
  },
  {
    id: "alcoholemia",
    category: "safety",
    source: SRC_MANUAL,
    translations: {
      es: {
        term: "Tasa de alcoholemia",
        definition:
          "Cantidad de alcohol por litro de sangre (g/l) o por litro de aire espirado (mg/l). Límites: general 0,25 mg/l aire (0,5 g/l sangre); noveles y profesionales 0,15 mg/l aire (0,3 g/l sangre); menores de edad 0,0.",
      },
      en: {
        term: "Blood alcohol concentration",
        definition:
          "Alcohol per litre of blood (g/l) or per litre of exhaled air (mg/l). Limits: general 0.25 mg/l air (0.5 g/l blood); novice/professional 0.15 mg/l air (0.3 g/l blood); minors 0.0.",
      },
      ru: {
        term: "Концентрация алкоголя (BAC)",
        definition:
          "Количество алкоголя на литр крови (г/л) или литр выдыхаемого воздуха (мг/л). Лимиты: общий 0,25 мг/л (0,5 г/л); начинающие/профи 0,15 мг/л (0,3 г/л); несовершеннолетние 0,0.",
      },
    },
  },
  {
    id: "fatiga",
    category: "safety",
    source: SRC_MANUAL,
    relatedTerms: ["somnolencia"],
    translations: {
      es: {
        term: "Fatiga",
        definition:
          "Cansancio físico o psicológico que disminuye la capacidad de conducir. Prevención: descansar 20-30 min cada 2 h o 200 km.",
      },
      en: {
        term: "Fatigue",
        definition:
          "Physical or psychological tiredness that reduces driving ability. Prevention: rest 20-30 min every 2 h or 200 km.",
      },
      ru: {
        term: "Усталость (fatiga)",
        definition:
          "Физическая или психологическая усталость, снижающая способность к вождению. Профилактика: отдых 20-30 мин каждые 2 часа или 200 км.",
      },
    },
  },
  {
    id: "somnolencia",
    category: "safety",
    source: SRC_MANUAL,
    relatedTerms: ["fatiga"],
    translations: {
      es: {
        term: "Somnolencia",
        definition:
          "Estado de cansancio, pesadez y sueño. Síntomas: bostezos, visión borrosa, pérdida de concentración. Solución: parar y dormir 20-30 min.",
      },
      en: {
        term: "Drowsiness (somnolence)",
        definition:
          "State of tiredness, heaviness and sleepiness. Signs: yawning, blurred vision, loss of concentration. Solution: stop and sleep 20-30 min.",
      },
      ru: {
        term: "Сонливость (somnolencia)",
        definition:
          "Состояние усталости, тяжести и желания спать. Признаки: зевота, размытое зрение, потеря концентрации. Решение: остановиться и поспать 20-30 мин.",
      },
    },
  },
  {
    id: "pas",
    category: "safety",
    source: SRC_MANUAL,
    translations: {
      es: {
        term: "P.A.S. (Proteger, Avisar, Socorrer)",
        definition:
          "Protocolo de actuación en accidente de tráfico. 1) Proteger el lugar (chaleco, triángulos, luces). 2) Avisar al 112. 3) Socorrer a los heridos sin moverlos si no es necesario.",
      },
      en: {
        term: "P.A.S. (Protect, Alert, Aid)",
        definition:
          "Accident-response protocol. 1) Protect the scene (hi-vis vest, triangles, hazards). 2) Alert 112. 3) Aid casualties, not moving them unless necessary.",
      },
      ru: {
        term: "P.A.S. (Защитить, Сообщить, Помочь)",
        definition:
          "Протокол действий при ДТП. 1) Обозначить место (жилет, треугольники, аварийка). 2) Сообщить 112. 3) Оказать помощь пострадавшим, не двигая их без необходимости.",
      },
    },
  },

  // ===== DOCUMENTATION =====
  {
    id: "permiso_conducir",
    category: "documentation",
    source: SRC_MANUAL,
    relatedTerms: ["conductor_novel", "midgt"],
    translations: {
      es: {
        term: "Permiso de conducir",
        definition:
          "Documento que autoriza a conducir. Renovación cada 10 años (<65 años) o cada 5 años (≥65). Tipos: AM, A1, A2, A, B, B+E, C, D, E.",
      },
      en: {
        term: "Driving licence",
        definition:
          "Document authorising you to drive. Renewed every 10 years under 65, every 5 from 65. Categories: AM, A1, A2, A, B, B+E, C, D, E.",
      },
      ru: {
        term: "Водительское удостоверение",
        definition:
          "Документ, разрешающий вождение. Продлевается каждые 10 лет до 65 лет, каждые 5 — с 65. Категории: AM, A1, A2, A, B, B+E, C, D, E.",
      },
    },
  },
  {
    id: "permiso_circulacion",
    category: "documentation",
    source: SRC_MANUAL,
    translations: {
      es: {
        term: "Permiso de circulación",
        definition:
          "Documento que confirma que el vehículo está matriculado y autorizado a circular. Debe llevarse siempre en el vehículo.",
      },
      en: {
        term: "Vehicle registration certificate",
        definition:
          "Document confirming the vehicle is registered and authorised to circulate. Must always be carried in the vehicle.",
      },
      ru: {
        term: "Свидетельство о регистрации ТС",
        definition:
          "Документ, подтверждающий, что ТС зарегистрировано и допущено к движению. Всегда должно быть в машине.",
      },
    },
  },
  {
    id: "itv",
    category: "documentation",
    source: SRC_MANUAL,
    translations: {
      es: {
        term: "ITV (Inspección Técnica de Vehículos)",
        definition:
          "Revisión periódica obligatoria del estado técnico del vehículo. Turismos: primera a los 4 años, luego cada 2, y cada año a partir de los 10.",
      },
      en: {
        term: "ITV (Technical vehicle inspection)",
        definition:
          "Mandatory periodic inspection of a vehicle's technical condition. Cars: first at 4 years, then every 2, then every year after 10.",
      },
      ru: {
        term: "ITV (техосмотр)",
        definition:
          "Обязательный периодический техосмотр ТС. Легковые: первый через 4 года, затем каждые 2 года, а после 10 лет — ежегодно.",
      },
    },
  },
  {
    id: "seguro_obligatorio",
    category: "documentation",
    source: SRC_MANUAL,
    translations: {
      es: {
        term: "Seguro obligatorio de responsabilidad civil",
        definition:
          "Seguro obligatorio que cubre los daños a terceros causados por el vehículo. No cubre los daños al propio vehículo del asegurado.",
      },
      en: {
        term: "Mandatory third-party insurance",
        definition:
          "Compulsory insurance covering damage to third parties caused by the vehicle. Does not cover damage to the insured's own vehicle.",
      },
      ru: {
        term: "Обязательное страхование ГО",
        definition:
          "Обязательная страховка, покрывающая ущерб третьим лицам от ТС. Не покрывает ущерб собственному автомобилю страхователя.",
      },
    },
  },
  {
    id: "matricula",
    category: "documentation",
    source: SRC_MANUAL,
    translations: {
      es: {
        term: "Matrícula",
        definition:
          "Conjunto de letras y números que identifica al vehículo, grabado en una placa metálica. Cada vehículo tiene una matrícula única.",
      },
      en: {
        term: "Number plate / registration plate",
        definition:
          "Combination of letters and numbers identifying the vehicle, on a metal plate. Every vehicle has a unique plate.",
      },
      ru: {
        term: "Номерной знак",
        definition:
          "Комбинация букв и цифр, идентифицирующая ТС, на металлической табличке. У каждого ТС свой уникальный номер.",
      },
    },
  },
  {
    id: "midgt",
    category: "documentation",
    source: SRC_IGOR,
    translations: {
      es: {
        term: "MiDGT",
        definition:
          "Aplicación oficial de la DGT que sirve como versión digital del permiso de conducir y otros documentos. Válida ante controles policiales.",
      },
      en: {
        term: "MiDGT app",
        definition:
          "Official DGT app that acts as a digital driving licence and documentation wallet. Valid at police checks.",
      },
      ru: {
        term: "MiDGT (приложение)",
        definition:
          "Официальное приложение DGT — цифровой аналог водительского удостоверения и документов. Действительно при проверке полиции.",
      },
    },
  },

  // ===== MECHANICS / ADAS =====
  {
    id: "abs",
    category: "mechanics_adas",
    source: SRC_IGOR,
    translations: {
      es: {
        term: "ABS (Sistema Antibloqueo de Frenos)",
        definition:
          "Sistema que impide que las ruedas se bloqueen al frenar bruscamente, permitiendo mantener la dirección del vehículo.",
      },
      en: {
        term: "ABS (Anti-lock Braking System)",
        definition:
          "System that prevents wheels from locking under hard braking, allowing you to keep steering control.",
      },
      ru: {
        term: "ABS (антиблокировочная система тормозов)",
        definition:
          "Система, предотвращающая блокировку колёс при резком торможении и позволяющая сохранять управление рулём.",
      },
    },
  },
  {
    id: "esp",
    category: "mechanics_adas",
    source: SRC_IGOR,
    relatedTerms: ["abs"],
    translations: {
      es: {
        term: "ESP (Control Electrónico de Estabilidad)",
        definition:
          "Sistema que detecta pérdidas de control (subvirare o sobreviraje) y frena selectivamente las ruedas para estabilizar el vehículo.",
      },
      en: {
        term: "ESP (Electronic Stability Programme)",
        definition:
          "System that detects loss of control (understeer or oversteer) and selectively brakes wheels to stabilise the vehicle.",
      },
      ru: {
        term: "ESP (электронная система стабилизации)",
        definition:
          "Система, обнаруживающая занос (недо- или избыточную поворачиваемость) и подтормаживающая нужные колёса, стабилизируя ТС.",
      },
    },
  },
  {
    id: "aeb",
    category: "mechanics_adas",
    source: SRC_IGOR,
    relatedTerms: ["adas"],
    translations: {
      es: {
        term: "AEB (Frenada Autónoma de Emergencia)",
        definition:
          "Sistema que avisa al conductor de un posible impacto y, si no reacciona, frena el vehículo automáticamente para evitar o reducir el impacto.",
      },
      en: {
        term: "AEB (Autonomous Emergency Braking)",
        definition:
          "System that warns the driver of a possible impact and, if there's no reaction, brakes automatically to avoid or reduce the crash.",
      },
      ru: {
        term: "AEB (автономное экстренное торможение)",
        definition:
          "Система предупреждает водителя о возможном столкновении и, если реакции нет, автоматически тормозит, чтобы избежать удара или смягчить его.",
      },
    },
  },
  {
    id: "lka",
    category: "mechanics_adas",
    source: SRC_IGOR,
    relatedTerms: ["adas"],
    translations: {
      es: {
        term: "LKA / LDW (Asistente / Aviso de Mantenimiento de Carril)",
        definition:
          "LDW avisa al conductor si el vehículo se sale del carril sin señalizar; LKA además corrige la dirección para volver al carril.",
      },
      en: {
        term: "LKA / LDW (Lane Keep Assist / Departure Warning)",
        definition:
          "LDW alerts the driver if the vehicle drifts out of its lane without indicating; LKA also steers back into the lane.",
      },
      ru: {
        term: "LKA / LDW (удержание/предупреждение о полосе)",
        definition:
          "LDW предупреждает при уходе с полосы без сигнала; LKA дополнительно подруливает, возвращая машину в полосу.",
      },
    },
  },
  {
    id: "tpms",
    category: "mechanics_adas",
    source: SRC_IGOR,
    translations: {
      es: {
        term: "TPMS (Control de Presión de Neumáticos)",
        definition:
          "Sistema que avisa al conductor cuando la presión de uno o más neumáticos está por debajo de lo recomendado.",
      },
      en: {
        term: "TPMS (Tyre Pressure Monitoring System)",
        definition:
          "System that alerts the driver when one or more tyres drop below the recommended pressure.",
      },
      ru: {
        term: "TPMS (система контроля давления в шинах)",
        definition:
          "Система, предупреждающая, когда давление одной или нескольких шин ниже рекомендованного.",
      },
    },
  },
  {
    id: "adas",
    category: "mechanics_adas",
    source: SRC_IGOR,
    relatedTerms: ["abs", "esp", "aeb", "lka", "tpms"],
    translations: {
      es: {
        term: "ADAS (Sistemas Avanzados de Asistencia a la Conducción)",
        definition:
          "Conjunto de sistemas electrónicos que ayudan al conductor: ABS, ESP, AEB, LKA/LDW, TPMS, hill holder, reconocimiento de señales, detección de fatiga, etc.",
      },
      en: {
        term: "ADAS (Advanced Driver Assistance Systems)",
        definition:
          "Set of electronic systems that assist the driver: ABS, ESP, AEB, LKA/LDW, TPMS, hill holder, traffic-sign recognition, fatigue detection, etc.",
      },
      ru: {
        term: "ADAS (системы помощи водителю)",
        definition:
          "Комплекс электронных систем в помощь водителю: ABS, ESP, AEB, LKA/LDW, TPMS, hill holder, распознавание знаков, детекция усталости и др.",
      },
    },
  },
  {
    id: "hill_holder",
    category: "mechanics_adas",
    source: SRC_IGOR,
    translations: {
      es: {
        term: "Hill holder",
        definition:
          "Sistema que evita que el vehículo se desplace hacia atrás al arrancar en una pendiente.",
      },
      en: {
        term: "Hill holder",
        definition:
          "System that prevents the vehicle from rolling back when moving off on an incline.",
      },
      ru: {
        term: "Hill holder (помощь при трогании на подъёме)",
        definition:
          "Система, не даёт машине скатиться назад при трогании на подъёме.",
      },
    },
  },
  {
    id: "airbag",
    category: "mechanics_adas",
    source: SRC_MANUAL,
    translations: {
      es: {
        term: "Airbag",
        definition:
          "Bolsa de aire que se infla en milisegundos ante un impacto fuerte para reducir las lesiones. No sustituye al cinturón, sino que lo complementa.",
      },
      en: {
        term: "Airbag",
        definition:
          "Bag that inflates in milliseconds during a serious impact to reduce injury. Complements the seatbelt; does not replace it.",
      },
      ru: {
        term: "Подушка безопасности",
        definition:
          "Подушка, раскрывающаяся за миллисекунды при сильном ударе, чтобы снизить тяжесть травм. Дополняет ремень, а не заменяет.",
      },
    },
  },
];
