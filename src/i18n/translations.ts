import { Language } from '../context/LanguageContext';

export interface BlankSpeakerItem {
  id: string;
  slotNumber: string;
  placeholderTitle: string;
  description: string;
}

export interface TrackItem {
  id: number;
  number: string;
  title: string;
  description: string;
}

export interface BlankArchiveItem {
  id: string;
  slotNumber: string;
  title: string;
  description: string;
}

export interface TranslationData {
  header: {
    orgName: string;
    anniversaryBadge: string;
    nav: {
      hero: string;
      about: string;
      tracks: string;
      speakers: string;
      archive: string;
      register: string;
    };
    registerBtn: string;
  };
  hero: {
    tagline: string;
    title: string;
    titleAccent: string;
    dateMeta: string;
    locationMeta: string;
    organizers: string;
    btnApply: string;
    btnLetter: string;
  };
  concept: {
    tag: string;
    title: string;
    subtitle: string;
    timestamp: string;
    col1: string;
    col2: string;
  };
  institute: {
    tag: string;
    title: string;
    subtitle: string;
    lead: string;
    body1: string;
    body2: string;
    quote: string;
    quoteAuthor: string;
  };
  metrics: {
    item1Val: string;
    item1Label: string;
    item2Val: string;
    item2Label: string;
    item3Val: string;
    item3Label: string;
    item4Val: string;
    item4Label: string;
  };
  speakers: {
    tag: string;
    title: string;
    subtitle: string;
    items: BlankSpeakerItem[];
  };
  tracks: {
    tag: string;
    title: string;
    subtitle: string;
    items: TrackItem[];
  };
  partners: {
    tag: string;
    title: string;
    subtitle: string;
    orgs: {
      name: string;
      status: string;
    }[];
  };
  parallax: {
    quote: string;
    subquote: string;
  };
  archive: {
    tag: string;
    title: string;
    subtitle: string;
    items: BlankArchiveItem[];
  };
  registration: {
    tag: string;
    title: string;
    subtitle: string;
    fields: {
      fullName: string;
      fullNamePlaceholder: string;
      email: string;
      emailPlaceholder: string;
      phone: string;
      phonePlaceholder: string;
      format: string;
      formatInPerson: string;
      formatOnline: string;
      track: string;
      trackSelectPlaceholder: string;
      organization: string;
      organizationPlaceholder: string;
      position: string;
      positionPlaceholder: string;
    };
    submitBtn: string;
    submittingBtn: string;
    successTitle: string;
    successMessage: string;
    regIdLabel: string;
    newRegBtn: string;
    errors: {
      required: string;
      email: string;
      phone: string;
    };
  };
  footer: {
    brandDesc: string;
    col1Title: string;
    col2Title: string;
    col3Title: string;
    address: string;
    phones: string[];
    email: string;
    copyright: string;
  };
}

export const translations: Record<Language, TranslationData> = {
  ky: {
    header: {
      orgName: "БББаОБ",
      anniversaryBadge: "ЖРТ 25 ЖЫЛ",
      nav: {
        hero: "Башкы бет",
        about: "Окуя жөнүндө",
        tracks: "Багыттар",
        speakers: "Спикерлер",
        archive: "Хроника",
        register: "Катталуу"
      },
      registerBtn: "Катталуу"
    },
    hero: {
      tagline: "ЖОГОРКУ МЕКТЕПКЕ КАБЫЛ АЛУУДАГЫ САПАТ ЖАНА КАЛЫСТЫК МАСЕЛЕЛЕРИ БОЮНЧА ЭЛ АРАЛЫК ИЛИМИЙ-ПРАКТИКАЛЫК КОНФЕРЕНЦИЯ",
      title: "ТЕҢ МҮМКҮНЧҮЛҮК — КЕҢ КЕЛЕЧЕК",
      titleAccent: "Жалпы республикалык тестирлөөгө (ЖРТ) 25 жыл",
      dateMeta: "2026-жылдын 29-октябры | 09:00",
      locationMeta: "Бишкек ш., Кыргыз Республикасы",
      organizers: "Билим берүүнү баалоо жана окутуу усулдары борбору (БББаОБ) Кыргыз Республикасынын Илим, жогорку билим берүү жана инновациялар министрлигинин жана Кыргыз Республикасынын Агартуу министрлигинин колдоосу менен",
      btnApply: "Табыштама берүү",
      btnLetter: "Маалыматтык кат (PDF)"
    },
    concept: {
      tag: "01 / КОНЦЕПЦИЯ ЖАНА КҮН ТАРТИБИ",
      title: "Конференция",
      subtitle: "Чейрек кылымдык объективдүүлүк, калыстык жана меритократия",
      timestamp: "2026-жылдын 29-октябры | 09:00",
      col1: "2026-жылы Кыргыз Республикасынын жогорку окуу жайларына тапшырууда абитуриенттерди баалоонун жана тандоонун негизги куралдарынын бири болгон Жалпы республикалык тестирлөөнү (ЖРТ) киргизүүгө 25 жыл толот. Бул маанилүү датага байланыштуу БББаОБ жогорку мектепке кабыл алуудагы сапат жана калыстык маселелери боюнча эл аралык илимий-практикалык конференциясын өткөрөт.",
      col2: "Конференциянын максаты — билим берүү натыйжаларын баалоонун заманбап ыкмаларын талкуулоо, улуттук жана эл аралык тажрыйба алмашуу, ошондой эле баалоо тутумдарын жана билим берүүдөгү тандоону өнүктүрүүнүн келечегин аныктоо үчүн эл аралык кесиптик аянтча түзүү."
    },
    institute: {
      tag: "02 / ИНСТИТУТ ЖӨНҮНДӨ",
      title: "БББаОБ",
      subtitle: "Уюм жөнүндө жана көз карандысыз баалоонун негиздери",
      lead: "2002-жылы негизделген Билим берүүнү баалоо жана окутуу усулдары борбору (БББаОБ) Кыргызстанда биринчи жолу мамлекеттик ЖОЖдорго кабыл алуунун көз карандысыз жана калыс тутумун ишке киргизген.",
      body1: "25 жыл аралыгында БББаОБ психометрикалык стандарттарга негизделген улуттук өлчөө тутумун калыптандырды. Тест тапшырмаларынын сырдуулугу жана текшерүүнүн ачык-айкындуулугу коомчулуктун жогорку ишенимине ээ болду.",
      body2: "ЖРТнын негизинде республиканын бардык аймактарындагы бүтүрүүчүлөр өздөрүнүн таза билими менен жогорку окуу жайлардын бюджеттик гранттарына тапшырууга тең укуктуу шарт алышты.",
      quote: "«Биздин башкы миссиябыз — ар бир бүтүрүүчүнүн билимин коомдук абалына карабастан так жана калыс өлчөө.»",
      quoteAuthor: "БББаОБ"
    },
    metrics: {
      item1Val: "25",
      item1Label: "ачык-айкын тандоо жылдары",
      item2Val: "1 000 000+",
      item2Label: "бүтүрүүчү тестирлөөдөн өттү",
      item3Val: "100%",
      item3Label: "гранттарды бөлүштүрүүдө меритократия",
      item4Val: "9",
      item4Label: "илимий-практикалык багыт"
    },
    speakers: {
      tag: "03 / ЭКСПЕРТТИК КУРАМ",
      title: "Спикерлер",
      subtitle: "Пленардык отурумдун жана эксперттик панелдердин негизги баяндамачылары",
      items: [
        {
          id: "sp1",
          slotNumber: "01",
          placeholderTitle: "[БЛАНК] Пленардык баяндамачы",
          description: "Пленардык баяндамачынын аты-жөнү жана темасы оргкомитет тарабынан бекитилүүдө."
        },
        {
          id: "sp2",
          slotNumber: "02",
          placeholderTitle: "[БЛАНК] Эл аралык эксперт",
          description: "Чет өлкөлүк тестологиялык кызматтын өкүлүнүн катышуусу макулдашылууда."
        },
        {
          id: "sp3",
          slotNumber: "03",
          placeholderTitle: "[БЛАНК] Психометрика эксперти",
          description: "Билим берүүдөгү өлчөөлөр жана психометрика боюнча эксперттин анонсу жакында жарыяланат."
        }
      ]
    },
    tracks: {
      tag: "04 / ИЛИМИЙ КҮН ТАРТИБИ",
      title: "Багыттар",
      subtitle: "Конференциянын 9 расмий тематикалык багыты (маалыматтык кат боюнча)",
      items: [
        {
          id: 1,
          number: "01",
          title: "25 жыл ЖРТ: тажрыйба, жыйынтыктар жана келечек",
          description: "Кыргызстандагы көз карандысыз тестирлөө тутумунун калыптанышы, жыйынтыктары жана стратегиялык өнүгүүсү."
        },
        {
          id: 2,
          number: "02",
          title: "Билим берүүнү баалоонун сапаты, объективдүүлүгү жана ишенимдүүлүгү",
          description: "Психометрикалык стандарттар, тесттердин валиддүүлүгү жана өлчөө сапатын камсыздоо."
        },
        {
          id: 3,
          number: "03",
          title: "Тандоодогу калыстык жана бирдей мүмкүнчүлүктөр",
          description: "Абитуриенттердин аймактык жана социалдык абалына карабастан тең укуктуулугун камсыз кылуу."
        },
        {
          id: 4,
          number: "04",
          title: "Тесттерди иштеп чыгуунун жана колдонуунун заманбап ыкмалары",
          description: "Тапшырмаларды калибрлөө, сынчыл ойломду өлчөө жана заманбап педагогикалык ченөөлөр."
        },
        {
          id: 5,
          number: "05",
          title: "Улуттук жана кирүү сынактарынын эл аралык тажрыйбасы",
          description: "Дүйнө өлкөлөрүндөгү улуттук экзамендерди уюштуруу тажрыйбасы жана салыштырма талдоо."
        },
        {
          id: 6,
          number: "06",
          title: "Баалоодогу санариптештирүү жана инновациялар",
          description: "Компьютердик адаптивдик тестирлөө (CAT), жасалма интеллект жана технологиялык чечимдер."
        },
        {
          id: 7,
          number: "07",
          title: "Баалоо жыйынтыктарын башкаруучулук чечимдерди кабыл алуу үчүн колдонуу",
          description: "Тестирлөө натыйжаларын билим берүү саясатын иштеп чыгуу жана мониторинг үчүн пайдалануу."
        },
        {
          id: 8,
          number: "08",
          title: "Ишеним, ачык-айкындуулук жана баалоо тутумдарынын коомдук кабыл алынышы",
          description: "Коомчулуктун тестирлөө тутумуна болгон ишеними жана антикоррупциялык туруктуулук."
        },
        {
          id: 9,
          number: "09",
          title: "Баалоонун улуттук тутумдарын өнүктүрүүнүн заманбап чакырыктары жана келечеги",
          description: "Глобалдык өзгөрүүлөр жана Кыргызстандагы баалоо экосистемасынын стратегиялык келечеги."
        }
      ]
    },
    partners: {
      tag: "05 / УЮШТУРУУЧУЛАР",
      title: "Организаторлор жана өнөктөштөр",
      subtitle: "Конференциянын расмий уюштуруучулары",
      orgs: [
        { name: "Билим берүүнү баалоо жана окутуу усулдары борбору (БББаОБ)", status: "Башкы уюштуруучу" },
        { name: "Кыргыз Республикасынын Илим, жогорку билим берүү жана инновациялар министрлиги", status: "Мамлекеттик колдоо" },
        { name: "Кыргыз Республикасынын Агартуу министрлиги", status: "Мамлекеттик колдоо" }
      ]
    },
    parallax: {
      quote: "«ЖРТ — билим аркылуу ачылган бирдей мүмкүнчүлүк жана меритократия.»",
      subquote: "2002 — 2026: 25 жыл объективдүү тандоо жолунда"
    },
    archive: {
      tag: "06 / АРХИВ ЖАНА ХРОНИКА",
      title: "Хроника: 25 жылдык өнүгүү вехалары",
      subtitle: "Мааракелик архивдик материалдар жана басып өткөн жол",
      items: [
        {
          id: "arch1",
          slotNumber: "01",
          title: "[БЛАНК] 2002–2010-жылдардын архиви",
          description: "Улуттук тестирлөөнүн биринчи он жылдыгы боюнча тарыхый очерк жана фотоматериалдар даярдалууда."
        },
        {
          id: "arch2",
          slotNumber: "02",
          title: "[БЛАНК] 2011–2020-жылдардын архиви",
          description: "Предметтик тесттердин киргизилиши жана баалоо тутумунун институционалдык бекемделиши тууралуу материалдар."
        },
        {
          id: "arch3",
          slotNumber: "03",
          title: "[БЛАНК] 2021–2026-жылдардын архиви",
          description: "Санариптик трансформация жана ЖРТнын 25 жылдык мааракелик чыгарылышы."
        }
      ]
    },
    registration: {
      tag: "07 / РАСМИЙ КАТТОО",
      title: "Катышуучуну каттоо",
      subtitle: "Конференцияга катышуу үчүн анкетаны толтуруңуз",
      fields: {
        fullName: "Аты-жөнүңүз (ФИО)",
        fullNamePlaceholder: "мис., Асанов Темирбек Касымович",
        email: "Электрондук почта",
        emailPlaceholder: "asanov@domain.kg",
        phone: "Байланыш телефону",
        phonePlaceholder: "+996 (___) __-__-__",
        format: "Катышуу форматы",
        formatInPerson: "Офлайн (Бишкек ш.)",
        formatOnline: "Онлайн",
        track: "Катышуу багыты",
        trackSelectPlaceholder: "Багытты тандаңыз...",
        organization: "Уюм / ЖОЖ",
        organizationPlaceholder: "мис., Кыргыз улуттук университети",
        position: "Кызматыңыз",
        positionPlaceholder: "мис., Профессор, кафедра башчысы"
      },
      submitBtn: "Табыштаманы жөнөтүү",
      submittingBtn: "Жөнөтүлүүдө...",
      successTitle: "Табыштама ийгиликтүү катталды!",
      successMessage: "Сиздин маалыматтарыңыз оргкомитетке келип түштү жана расмий базага (Firestore) киргизилди.",
      regIdLabel: "Каттоо номери",
      newRegBtn: "Дагы бир катышуучуну каттоо",
      errors: {
        required: "Бул талааны толтуруу милдеттүү",
        email: "Туура электрондук почтаны жазыңыз",
        phone: "Телефон номерин толук көрсөтүңүз"
      }
    },
    footer: {
      brandDesc: "Билим берүүнү баалоо жана окутуу усулдары борбору (БББаОБ) — Кыргыз Республикасындагы көз карандысыз стандартташтырылган баалоонун улуттук институту.",
      col1Title: "Өткөрүү орду",
      col2Title: "Байланыш телефондору",
      col3Title: "Электрондук дарек",
      address: "Бишкек шаары, Кыргыз Республикасы",
      phones: ["+996 550 66 48 38", "+996 502 66 48 38", "+996 772 66 48 38"],
      email: "conference.ceatm@gmail.com",
      copyright: "© 2026 БББаОБ. 25 жыл Жалпы республикалык тестирлөөгө."
    }
  },
  ru: {
    header: {
      orgName: "ЦООМО",
      anniversaryBadge: "25 ЛЕТ ОРТ",
      nav: {
        hero: "Главная",
        about: "О событии",
        tracks: "Направления",
        speakers: "Спикеры",
        archive: "Хроника",
        register: "Регистрация"
      },
      registerBtn: "Регистрация"
    },
    hero: {
      tagline: "МЕЖДУНАРОДНАЯ НАУЧНО-ПРАКТИЧЕСКАЯ КОНФЕРЕНЦИЯ ПО ВОПРОСАМ КАЧЕСТВА И СПРАВЕДЛИВОСТИ ОТБОРА В ВЫСШУЮ ШКОЛУ",
      title: "РАВНЫЙ ШАНС — БОЛЬШОЕ БУДУЩЕЕ",
      titleAccent: "25 лет Общереспубликанскому тестированию (ОРТ)",
      dateMeta: "29 октября 2026 года | 09:00",
      locationMeta: "г. Бишкек, Кыргызская Республика",
      organizers: "Центр оценки в образовании и методов обучения (ЦООМО) при поддержке Министерства науки, высшего образования и инноваций Кыргызской Республики и Министерства просвещения Кыргызской Республики",
      btnApply: "Подать заявку",
      btnLetter: "Информационное письмо (PDF)"
    },
    concept: {
      tag: "01 / КОНЦЕПЦИЯ И ПОВЕСТКА",
      title: "Конференция",
      subtitle: "Четверть века объективности, справедливости и меритократии",
      timestamp: "29 октября 2026 | 09:00",
      col1: "В 2026 году исполняется 25 лет со дня внедрения Общереспубликанского тестирования (ОРТ) – одного из ключевых инструментов оценки и отбора абитуриентов при поступлении в высшие учебные заведения Кыргызской Республики. В связи с этой значимой датой ЦООМО проводит международную научно-практическую конференцию по вопросам качества и справедливости отбора в высшую школу.",
      col2: "Цель конференции — создание международной профессиональной площадки для обсуждения современных подходов к оцениванию образовательных результатов, обмена национальным и международным опытом, а также определения перспектив развития систем оценивания и образовательного отбора. Особое внимание будет уделено 25-летнему опыту ОРТ, его роли в обеспечении прозрачности и равных возможностей."
    },
    institute: {
      tag: "02 / ОБ ИНСТИТУТЕ",
      title: "ЦООМО",
      subtitle: "Об организации и истоках независимого тестирования",
      lead: "Основанный в 2002 году Центр оценки в образовании и методов обучения (ЦООМО) впервые в истории Кыргызстана внедрил системный инструмент прозрачного отбора абитуриентов в высшие учебные заведения.",
      body1: "За 25 лет система ОРТ подтвердила свою надежность. Стандартизированные процедуры составления тестов, строгая конфиденциальность материалов и психометрический контроль позволили искоренить коррупционные риски при зачислении в вузы.",
      body2: "Благодаря Общереспубликанскому тестированию каждый выпускник школы получил равное право на получение высшего образования на основе личных знаний и способностей.",
      quote: "«Наша миссия — гарантировать равные возможности и безупречную объективность для каждого выпускника Кыргызстана.»",
      quoteAuthor: "ЦООМО"
    },
    metrics: {
      item1Val: "25",
      item1Label: "лет прозрачного отбора",
      item2Val: "1 000 000+",
      item2Label: "абитуриентов прошли тестирование",
      item3Val: "100%",
      item3Label: "меритократия при распределении грантов",
      item4Val: "9",
      item4Label: "тематических направлений конференции"
    },
    speakers: {
      tag: "03 / ДОКЛАДЧИКИ",
      title: "Спикеры",
      subtitle: "Ключевые спикеры пленарных заседаний и экспертных панелей",
      items: [
        {
          id: "sp1",
          slotNumber: "01",
          placeholderTitle: "[БЛАНК] Пленарный докладчик",
          description: "Информация о ключевом спикере пленарного заседания формируется оргкомитетом."
        },
        {
          id: "sp2",
          slotNumber: "02",
          placeholderTitle: "[БЛАНК] Международный эксперт",
          description: "Согласование участия представителя зарубежной экзаменационной службы."
        },
        {
          id: "sp3",
          slotNumber: "03",
          placeholderTitle: "[БЛАНК] Эксперт по психометрике",
          description: "Анонс доклада специалиста в сфере педагогических измерений и стандартизированного тестирования."
        }
      ]
    },
    tracks: {
      tag: "04 / ТЕМАТИЧЕСКАЯ МАТРИЦА",
      title: "Направления",
      subtitle: "9 официальных направлений конференции из информационного письма ЦООМО",
      items: [
        {
          id: 1,
          number: "01",
          title: "25 лет ОРТ: опыт, результаты и перспективы",
          description: "История становления независимого тестирования в Кыргызстане, эволюция тестового инструментария и перспективы развития."
        },
        {
          id: 2,
          number: "02",
          title: "Качество, объективность и надёжность образовательного оценивания",
          description: "Психометрические стандарты, обеспечение валидности и надежности измерительных материалов."
        },
        {
          id: 3,
          number: "03",
          title: "Справедливость и равные возможности при отборе",
          description: "Обеспечение равного доступа к образованию для выпускников из регионов и принципы меритократии."
        },
        {
          id: 4,
          number: "04",
          title: "Современные подходы к разработке и применению тестов",
          description: "Методология конструирования заданий, калибровка шкал и оценка функциональной грамотности."
        },
        {
          id: 5,
          number: "05",
          title: "Международный опыт национальных и вступительных экзаменов",
          description: "Сравнительный анализ систем отбора в высшую школу зарубежных стран и международные стандарты."
        },
        {
          id: 6,
          number: "06",
          title: "Цифровизация и инновации в оценивании",
          description: "Компьютерное адаптивное тестирование (CAT), применение цифровых технологий и защита данных."
        },
        {
          id: 7,
          number: "07",
          title: "Использование результатов оценивания для принятия управленческих решений",
          description: "Аналитика результатов тестирования для корректировки образовательных программ и госполитики."
        },
        {
          id: 8,
          number: "08",
          title: "Доверие, прозрачность и общественное восприятие систем оценивания",
          description: "Антикоррупционная устойчивость процедуры тестирования, информационная открытость и доверие общества."
        },
        {
          id: 9,
          number: "09",
          title: "Современные вызовы и перспективы развития национальных систем оценивания",
          description: "Оценивание навыков XXI века и перспективные направления развития национальной системы отбора."
        }
      ]
    },
    partners: {
      tag: "05 / УЮШТУРУУЧУЛАР",
      title: "Организаторы и партнеры",
      subtitle: "Официальные организаторы конференции",
      orgs: [
        { name: "Центр оценки в образовании и методов обучения (ЦООМО)", status: "Главный организатор" },
        { name: "Министерство науки, высшего образования и инноваций Кыргызской Республики", status: "Государственная поддержка" },
        { name: "Министерство просвещения Кыргызской Республики", status: "Государственная поддержка" }
      ]
    },
    parallax: {
      quote: "«ОРТ доказало, что знания — это главный капитал выпускника при поступлении в высшую школу Кыргызстана.»",
      subquote: "2002 — 2026: 25 лет объективности и меритократии"
    },
    archive: {
      tag: "06 / АРХИВ И ХРОНИКА",
      title: "Хроника 25-летия: вехи развития",
      subtitle: "Архивные материалы и ключевые этапы становления ОРТ",
      items: [
        {
          id: "arch1",
          slotNumber: "01",
          title: "[БЛАНК] Архив 2002–2010 годов",
          description: "Материалы о создании независимого тестирования и первом десятилетии проведения ОРТ."
        },
        {
          id: "arch2",
          slotNumber: "02",
          title: "[БЛАНК] Архив 2011–2020 годов",
          description: "Внедрение предметных тестов, развитие психометрической базы и институциональное укрепление."
        },
        {
          id: "arch3",
          slotNumber: "03",
          title: "[БЛАНК] Архив 2021–2026 годов",
          description: "Цифровизация экзаменационных процедур и юбилейный 25-й сезон тестирования."
        }
      ]
    },
    registration: {
      tag: "07 / РЕГИСТРАЦИЯ",
      title: "Регистрация участников",
      subtitle: "Заполните официальную заявку на участие в конференции",
      fields: {
        fullName: "Фамилия, Имя, Отчество (полностью)",
        fullNamePlaceholder: "Иванов Петр Сергеевич",
        email: "Адрес электронной почты",
        emailPlaceholder: "example@domain.com",
        phone: "Контактный номер телефона",
        phonePlaceholder: "+996 (___) __-__-__",
        format: "Формат присутствия",
        formatInPerson: "Очно в Бишкеке",
        formatOnline: "Онлайн-подключение",
        track: "Тематическая секция",
        trackSelectPlaceholder: "Выберите направление...",
        organization: "Организация / Вуз",
        organizationPlaceholder: "Кыргызский национальный университет",
        position: "Должность",
        positionPlaceholder: "Заведующий кафедрой, доцент"
      },
      submitBtn: "Отправить заявку",
      submittingBtn: "Регистрация...",
      successTitle: "Заявка успешно зарегистрирована!",
      successMessage: "Ваша регистрационная анкета сохранена в официальной базе данных Firestore (conferenceRegistrations).",
      regIdLabel: "Номер заявки",
      newRegBtn: "Подать еще одну заявку",
      errors: {
        required: "Обязательное поле для заполнения",
        email: "Укажите корректный адрес электронной почты",
        phone: "Укажите корректный номер телефона"
      }
    },
    footer: {
      brandDesc: "Центр оценки в образовании и методов обучения (ЦООМО) — независимая институция Кыргызской Республики, обеспечивающая прозрачные и надежные педагогические измерения.",
      col1Title: "Место проведения",
      col2Title: "Телефоны для справок",
      col3Title: "Электронная почта",
      address: "г. Бишкек, Кыргызская Республика",
      phones: ["+996 550 66 48 38", "+996 502 66 48 38", "+996 772 66 48 38"],
      email: "conference.ceatm@gmail.com",
      copyright: "© 2026 ЦООМО. 25 лет Общереспубликанскому тестированию."
    }
  },
  en: {
    header: {
      orgName: "CEATM",
      anniversaryBadge: "25 YEARS ORT",
      nav: {
        hero: "Home",
        about: "About",
        tracks: "Tracks",
        speakers: "Speakers",
        archive: "Chronicle",
        register: "Register"
      },
      registerBtn: "Register"
    },
    hero: {
      tagline: "INTERNATIONAL SCIENTIFIC-PRACTICAL CONFERENCE ON THE QUALITY AND FAIRNESS OF SELECTION FOR HIGHER EDUCATION",
      title: "EQUAL OPPORTUNITY — GREAT FUTURE",
      titleAccent: "25 Years of the National Scholarship Testing (ORT)",
      dateMeta: "October 29, 2026 | 09:00",
      locationMeta: "Bishkek, Kyrgyz Republic",
      organizers: "Center for Educational Assessment and Teaching Methods (CEATM) supported by the Ministry of Science, Higher Education and Innovations and the Ministry of Education of the Kyrgyz Republic",
      btnApply: "Apply Now",
      btnLetter: "Official Letter (PDF)"
    },
    concept: {
      tag: "01 / CONCEPT & AGENDA",
      title: "Conference",
      subtitle: "A quarter century of objectivity, fairness, and meritocracy",
      timestamp: "October 29, 2026 | 09:00",
      col1: "The year 2026 marks the 25th anniversary of the National Scholarship Testing (ORT) in Kyrgyzstan — a cornerstone mechanism for objective educational assessment and merit-based university admissions. To commemorate this milestone, CEATM convenes an international conference dedicated to academic quality and fairness in higher education admissions.",
      col2: "The conference establishes an international platform for discussing contemporary approaches to educational assessment, sharing national and global best practices, and shaping future trajectories of testing and selection systems."
    },
    institute: {
      tag: "02 / ABOUT CEATM",
      title: "CEATM",
      subtitle: "About the institution and foundations of independent testing",
      lead: "Founded in 2002, the Center for Educational Assessment and Teaching Methods (CEATM) instituted Kyrgyzstan's first independent, nationwide university admissions mechanism.",
      body1: "Over 25 years, CEATM has developed an internationally benchmarked testing ecosystem. Rigorous confidentiality protocols, secure administration, and psychometric validation have earned public trust.",
      body2: "Through ORT, high school graduates nationwide receive equal constitutional opportunities to compete for university scholarships based on verifiable merit and personal ability.",
      quote: "“Our mission is to guarantee uncompromising objectivity and equal opportunity for every student in Kyrgyzstan.”",
      quoteAuthor: "CEATM"
    },
    metrics: {
      item1Val: "25",
      item1Label: "years of transparent selection",
      item2Val: "1,000,000+",
      item2Label: "examinees evaluated",
      item3Val: "100%",
      item3Label: "merit-based grant allocation",
      item4Val: "9",
      item4Label: "thematic conference tracks"
    },
    speakers: {
      tag: "03 / SPEAKERS",
      title: "Speakers",
      subtitle: "Plenary speakers and panel authorities",
      items: [
        {
          id: "sp1",
          slotNumber: "01",
          placeholderTitle: "[BLANK] Keynote Speaker",
          description: "Keynote plenary speaker announcement will be released by the organizing committee."
        },
        {
          id: "sp2",
          slotNumber: "02",
          placeholderTitle: "[BLANK] International Expert",
          description: "Participation of international examination agency leadership is being finalized."
        },
        {
          id: "sp3",
          slotNumber: "03",
          placeholderTitle: "[BLANK] Psychometrics Expert",
          description: "Presentation topic and biographical abstract will be announced shortly."
        }
      ]
    },
    tracks: {
      tag: "04 / SCIENTIFIC AGENDA",
      title: "Tracks",
      subtitle: "9 official conference tracks from the CEATM announcement",
      items: [
        {
          id: 1,
          number: "01",
          title: "25 Years of ORT: Experience, Results, and Prospects",
          description: "Origins and evolution of standardized testing in Kyrgyzstan, institutional impact, and future prospects."
        },
        {
          id: 2,
          number: "02",
          title: "Quality, Objectivity, and Reliability of Educational Assessment",
          description: "Psychometric standards, score reliability, and continuous quality assurance frameworks."
        },
        {
          id: 3,
          number: "03",
          title: "Fairness and Equal Opportunities in Selection",
          description: "Mitigating regional disparities, affirmative action mechanisms, and merit-based grant allocation."
        },
        {
          id: 4,
          number: "04",
          title: "Modern Approaches to Test Development and Administration",
          description: "Item writing methodology, cognitive demand scaling, and assessing critical thinking."
        },
        {
          id: 5,
          number: "05",
          title: "International Experience of National and University Entrance Examinations",
          description: "Comparative insights from national testing regimes worldwide and international assessment standards."
        },
        {
          id: 6,
          number: "06",
          title: "Digitalization and Innovations in Assessment",
          description: "Computerized Adaptive Testing (CAT), modern technologies, and data security."
        },
        {
          id: 7,
          number: "07",
          title: "Using Assessment Results for Educational Policy and Decision-Making",
          description: "Harnessing assessment data for educational policy, school monitoring, and curriculum enhancement."
        },
        {
          id: 8,
          number: "08",
          title: "Trust, Transparency, and Public Perception of Assessment Systems",
          description: "Anti-corruption safeguards, stakeholder communication, and public confidence in testing."
        },
        {
          id: 9,
          number: "09",
          title: "Modern Challenges and Future Trajectories of National Assessment Systems",
          description: "Assessing 21st-century competencies and future trajectories of the national assessment ecosystem."
        }
      ]
    },
    partners: {
      tag: "05 / ORGANIZERS",
      title: "Organizers & Partners",
      subtitle: "Official conference organizers",
      orgs: [
        { name: "Center for Educational Assessment and Teaching Methods (CEATM)", status: "Host & Primary Organizer" },
        { name: "Ministry of Science, Higher Education and Innovations of the Kyrgyz Republic", status: "State Patronage" },
        { name: "Ministry of Education of the Kyrgyz Republic", status: "State Patronage" }
      ]
    },
    parallax: {
      quote: "“ORT proved that academic merit is the paramount currency for university entry in Kyrgyzstan.”",
      subquote: "2002 — 2026: 25 Years of Objectivity and Meritocracy"
    },
    archive: {
      tag: "06 / ARCHIVE & CHRONICLE",
      title: "25-Year Chronicle: Key Milestones",
      subtitle: "Archival documentation and milestones of the National Scholarship Testing",
      items: [
        {
          id: "arch1",
          slotNumber: "01",
          title: "[BLANK] Archive: 2002–2010",
          description: "Historical documentation on the establishment of independent testing and the inaugural decade."
        },
        {
          id: "arch2",
          slotNumber: "02",
          title: "[BLANK] Archive: 2011–2020",
          description: "Introduction of domain-specific subject tests and psychometric infrastructure expansion."
        },
        {
          id: "arch3",
          slotNumber: "03",
          title: "[BLANK] Archive: 2021–2026",
          description: "Digital initiatives, exam resilience, and the milestone 25th anniversary season."
        }
      ]
    },
    registration: {
      tag: "07 / REGISTRATION",
      title: "Participant Registration",
      subtitle: "Submit official registration for conference attendance",
      fields: {
        fullName: "Full Name",
        fullNamePlaceholder: "e.g., Alex Smith",
        email: "Email Address",
        emailPlaceholder: "smith@university.edu",
        phone: "Contact Phone",
        phonePlaceholder: "+996 (___) __-__-__",
        format: "Attendance Format",
        formatInPerson: "In-Person (Bishkek)",
        formatOnline: "Online",
        track: "Thematic Track",
        trackSelectPlaceholder: "Select conference track...",
        organization: "Organization / University",
        organizationPlaceholder: "e.g., National University",
        position: "Position",
        positionPlaceholder: "e.g., Department Chair, Professor"
      },
      submitBtn: "Submit Application",
      submittingBtn: "Submitting...",
      successTitle: "Registration Successfully Submitted!",
      successMessage: "Your registration details have been saved into the official database (conferenceRegistrations).",
      regIdLabel: "Registration ID",
      newRegBtn: "Register Another Participant",
      errors: {
        required: "This field is required",
        email: "Please enter a valid email address",
        phone: "Please enter a valid phone number"
      }
    },
    footer: {
      brandDesc: "Center for Educational Assessment and Teaching Methods (CEATM) — Independent national authority for standardized educational measurement in the Kyrgyz Republic.",
      col1Title: "Venue Location",
      col2Title: "Information Lines",
      col3Title: "Official Email",
      address: "Bishkek, Kyrgyz Republic",
      phones: ["+996 550 66 48 38", "+996 502 66 48 38", "+996 772 66 48 38"],
      email: "conference.ceatm@gmail.com",
      copyright: "© 2026 CEATM. 25 Years of National Scholarship Testing."
    }
  }
};
