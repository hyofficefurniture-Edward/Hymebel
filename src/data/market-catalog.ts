import { products } from './products';
export type Market = 'mn' | 'ru';
export type MarketLanguage = 'mn' | 'ru' | 'en';
type Text = Record<MarketLanguage, string>;
const text = (mn: string, ru: string, en: string): Text => ({ mn, ru, en });

// Shared physical range, independently written market copy. No imported claims,
// prices, delivery guarantees or customer-location assertions from products.ts.
export const catalogGroups = [
  { slug: 'hotel-furniture', image: '/images/productos/hotel-room.webp', title: text('Зочид буудлын тавилга', 'Мебель для гостиниц', 'Hotel furniture'),
    mn: 'Улаанбаатар эсвэл бусад хотын зочид буудлын төслийг өрөөний төрөл, нийтийн талбай, ашиглалтын урсгалаар нь төлөвлөнө. Ор, орны толгой, шкаф, бичгийн ширээ, лоббийн суудлыг нэг өрөөний жагсаалтад уялдуулж, өнгөлгөө ба тоо хэмжээг хамтад нь тодруулна.',
    ru: 'Для нового отеля или реконструкции действующей гостиницы разделите спецификацию на номерной фонд, лобби и общественные зоны. Сопоставляем кровати, изголовья, шкафы, письменные столы и мягкую мебель с типами номеров, чертежами и очередностью закупки.',
    en: 'Coordinate guestroom furniture and public spaces by room type. Beds, headboards, wardrobes, desks and lobby seating are reviewed against drawings, finishes and procurement phases.',
    checklist: text('Өрөөний төрөл ба тоо; орны хэмжээ; шкафын төлөвлөлт; өнгөлгөөний жишээ; гэрэлтүүлэг болон цахилгааны интерфейс.', 'Типы и количество номеров; размеры кроватей; наполнение шкафов; образцы отделок; сопряжения со светом и электрикой.', 'Room types and quantities; bed sizes; wardrobe layouts; finish references; lighting and power interfaces.') },
  { slug: 'office-furniture', image: '/images/productos/office.webp', title: text('Оффис ба ажлын байр', 'Мебель для офисов', 'Office furniture'),
    mn: 'Шинэ оффис, дизайн студи, байгууллагын ажлын байрыг төлөвлөлтөөс нь эхэлж бүрдүүлнэ. Ажлын ширээ, уулзалтын ширээ, ресепшн, хадгалах шүүгээг ажилтны тоо ба өрөөний хэмжээнд тохируулан сонгоно. Кабелийн гарц, залгуурын байршлыг захиалгын өмнө зураг дээр тэмдэглэх нь чухал.',
    ru: 'При переезде или поэтапном обновлении офиса важны не только модели мебели, но и совместимость с планировкой. Рабочие станции, переговорные столы, кабинеты, стойки ресепшн и системы хранения рассматриваются вместе с кабельными трассами и доступом для обслуживания.',
    en: 'Plan workstations, meeting tables, executive furniture, reception and storage around the workplace layout. Review circulation, cable access and maintenance before confirming the configuration.',
    checklist: text('Ажилтны тоо; өрөөний хэмжээ; ширээний байрлал; кабелийн гарц; хадгалах хэрэгцээ.', 'Планировка; число рабочих мест; схема переговорных; кабельные выводы; требования к хранению.', 'Workplace layout; workstation counts; meeting capacity; cable routing; storage requirements.') },
  { slug: 'education-healthcare', image: '/images/productos/education.webp', title: text('Сургууль ба эмнэлгийн орчин', 'Образование и здравоохранение', 'Education and healthcare'),
    mn: 'Сургалтын өрөө, номын сан, ажилтны хэсэг, хүлээлгийн танхимын тавилгыг зориулалтаар нь ангилна. Ширээ, суудал, хадгалах шүүгээ сонгохдоо хэрэглэгчийн нас, хэмжээ, цэвэрлэгээ, өдөр тутмын хөдөлгөөнийг тодруулна. Эмнэлгийн зориулалттай тоног төхөөрөмжийг ердийн тавилгатай андуурахгүйгээр тусад нь тодорхойлно.',
    ru: 'Для учебных классов, библиотек, помещений персонала и зон ожидания нужна ведомость функций по каждому помещению. Уточняем размеры, возрастную группу, интенсивность использования и требования к уборке. Медицинское оборудование и специализированные изделия требуют отдельного технического задания.',
    en: 'Specify classrooms, libraries, staff rooms and waiting areas by function. Clarify user groups, dimensions, daily use and cleaning requirements; specialised medical equipment requires a separate specification.',
    checklist: text('Өрөөний зориулалт; насны бүлэг; суудлын тоо; цэвэрлэгээний шаардлага; шаардлагатай баримт бичиг.', 'Назначение помещений; группы пользователей; количество мест; требования к очистке; перечень необходимых документов.', 'Room functions; user groups; seating counts; cleaning requirements; required documentation.') },
  { slug: 'villa-residential', image: '/images/productos/residential.webp', title: text('Орон сууц ба хувийн интерьер', 'Резиденции и жилые интерьеры', 'Residential interiors'),
    mn: 'Хувийн сууц, орон сууцны интерьерийн тавилгыг өрөө бүрийн хэмжээс, материал, өнгөний сонголттой уялдуулна. Унтлагын өрөө, зочны өрөө, хоолны хэсэг болон шүүгээний хүрээг нэг жагсаалтад цэгцэлж, бэлэн тавилга ба зурагт тулгуурласан захиалгыг ялгана.',
    ru: 'Для частной резиденции или жилого интерьера согласуем мебель по помещениям, отделкам и посадочным размерам. Важно разделить отдельно стоящие предметы и изделия по чертежам, проверить проходы, стыки со стенами и состав комплекта до расчёта.',
    en: 'Coordinate bedrooms, living rooms, dining areas and storage through a room-by-room schedule. Separate freestanding furniture from drawing-based joinery and review wall interfaces and access dimensions.',
    checklist: text('Хэмжилттэй зураг; өрөөний жагсаалт; өнгө ба материал; хаалга, лифтний хэмжээ; захиалгын хүрээ.', 'Обмерные планы; список помещений; материалы и цвета; размеры проёмов и лифтов; границы комплектации.', 'Measured plans; room schedule; material palette; door and lift access; supply scope.') },
  { slug: 'restaurant-furniture', image: '/images/productos/hotel-lobby.webp', title: text('Ресторан, кафе ба лобби', 'Рестораны, кафе и лаунж-зоны', 'Restaurants and lounge spaces'),
    mn: 'Ресторан, кафе, зочид буудлын лоббид ширээ, сандал, буйдангийн байрлалыг үйлчлүүлэгч болон ажилтны хөдөлгөөнтэй уялдуулна. Суудлын тоо, ширээний өндөр, бүрээсийн сонголт, хадгалалтын нөхцөлөөс эхэлж, нэг загварын өөр хэмжээг BOQ-д тусад нь тэмдэглэнэ.',
    ru: 'Для ресторана, кафе и лаунж-зоны проверяем вместимость и расстановку до выбора отделки. Столы, стулья, барные посадочные места и банкетная мебель должны соответствовать рабочим проходам, высоте столешниц и сценарию ежедневной эксплуатации.',
    en: 'Review seating capacity and circulation for restaurants, cafés and lounge areas. Coordinate dining tables, chairs, bar seating and banquet furniture with tabletop heights, upholstery and storage needs.',
    checklist: text('Суудлын төлөвлөлт; ширээний хэмжээ; суудлын өндөр; бүрээс; эвхэх эсвэл давхарлах хэрэгцээ.', 'Схема посадки; размеры столов; высота сиденья; обивка; потребность в складировании.', 'Seating plan; table sizes; seat heights; upholstery; stacking and storage needs.') },
];

const entries = [
  ['hotel-ca-03','hotel-furniture', text('Зочны өрөөний захиалгат иж бүрдэл','Мебельный комплект для гостиничного номера','Guestroom furniture set'), text('Өрөөний төрлөөр ор, орны толгой, ширээ, шкафын тоог нэгтгэнэ.','Сопоставьте состав комплекта с категорией номера и планом размещения.','Map beds, desks and wardrobes to each room type.')],
  ['hotel-ca-09','hotel-furniture', text('Буфет ба үйлчилгээний шүүгээ','Буфетные тумбы и системы хранения','Buffet sideboards'), text('Үйлчилгээний талбай, хадгалалтын хэрэгцээ, тоноглолын зайг тодруулна.','Уточните зону обслуживания, полезный объём и размещение оборудования.','Clarify service space, storage capacity and equipment interfaces.')],
  ['hotel-ca-10','hotel-furniture', text('Зочид буудлын FF&E хүрээ','Комплектация гостиничного FF&E','Hotel FF&E coordination'), text('Өрөөний тавилга, нийтийн талбай, нэмэлт эд зүйлсийг BOQ-д салгана.','Разделите номерной фонд и общественные зоны в единой спецификации.','Separate guestroom and public-space items in the procurement schedule.')],
  ['office-ca-11','office-furniture', text('Модуль ажлын байр','Модульные рабочие станции','Modular workstations'), text('Ажилтны тоо, гарц ба кабелийн байрлалыг төлөвлөлтөөр шалгана.','Проверьте проходы, кабельные выводы и этапность установки рабочих мест.','Review circulation, cable outlets and workstation configuration.')],
  ['office-ca-05','office-furniture', text('Уулзалтын өрөөний ширээ','Стол для переговорной','Meeting-room table'), text('Оролцогчдын тоо, өрөөний урт, цахилгааны гарцыг тодруулна.','Согласуйте число мест, рабочие проходы и точки подключения.','Confirm meeting capacity, circulation and connection points.')],
  ['office-ca-09','office-furniture', text('Ресепшний ширээ','Стойка ресепшн','Reception desk'), text('Хүлээн авах урсгал, ажилтны талбай, тоноглолын байрлалыг тодруулна.','Уточните рабочую зону администратора и размещение техники.','Define the staff work area and equipment positions.')],
  ['edu-ca-01','education-healthcare', text('Сургалтын ширээ ба суудал','Учебные столы и сиденья','Learning desks and seating'), text('Насны бүлэг, өрөөний хэмжээ, суудлын тоогоор сонгоно.','Задайте группу пользователей, расстановку и количество мест.','Specify user groups, classroom layout and seating counts.')],
  ['edu-ca-04','education-healthcare', text('Дотуур байрны давхар ор','Двухъярусная кровать для общежития','Dormitory bunk bed'), text('Өрөөний зориулалт болон өдөр тутмын хэрэглээг зурагтай нягтална.','Сопоставьте конфигурацию с функцией помещения и эксплуатацией.','Review room function and daily use against the layout.')],
  ['med-ca-01','education-healthcare', text('Орны хажуугийн шүүгээ','Прикроватная тумба','Bedside cabinet'), text('Зориулалт, цэвэрлэгээ, техникийн шаардлагыг тусад нь батална.','Назначение изделия и требования к очистке уточняются в техническом задании.','Confirm intended use, cleaning needs and technical specifications.')],
  ['home-ca-01','villa-residential', text('Хувийн интерьерийн тавилга','Мебель для частной резиденции','Private residence furniture'), text('Өрөө бүрийн хүрээ, материал, өнгөний жишээг нэгтгэнэ.','Согласуйте состав мебели по помещениям и палитру отделок.','Coordinate room-by-room scope and finish references.')],
  ['home-ca-06','villa-residential', text('Зочны өрөөний иж бүрдэл','Комплект для гостиной','Living-room furniture'), text('Буйдан, ширээ, хөдөлгөөний зайг хэмжилттэй төлөвлөлтөд оруулна.','Проверьте посадочные размеры и проходы на обмерном плане.','Check furniture footprints and circulation on measured plans.')],
  ['home-ca-07','villa-residential', text('Унтлагын ба хоолны өрөөний тавилга','Мебель для спальни и столовой','Bedroom and dining furniture'), text('Тусдаа өрөөний тоо хэмжээ, багцын хүрээ ба өнгөлгөөг тэмдэглэнэ.','Разделите помещения, состав комплектов и требования к отделке.','Separate room quantities, set contents and finishes.')],
  ['hotel-ca-02','restaurant-furniture', text('Банкетын суудал','Банкетные стулья','Banquet seating'), text('Банкетын байрлал, суудлын тоо, хадгалах талбайг тодруулна.','Уточните формат мероприятий, число мест и схему хранения.','Specify event layouts, quantities and storage arrangements.')],
  ['hotel-ca-07','restaurant-furniture', text('Барын өндөр суудал','Барные стулья','Bar seating'), text('Барын тавцан ба суудлын өндрийг хамтад нь шалгана.','Сопоставьте высоту сиденья с барной столешницей.','Check seat height against the bar counter.')],
  ['hotel-ca-08','restaurant-furniture', text('Рестораны хоолны ширээ','Обеденные столы для ресторана','Restaurant dining tables'), text('Хоёр, дөрөв эсвэл олон хүний суудлыг гарцтай нь төлөвлөнө.','Рассчитайте посадку и проходы для разных форматов столов.','Plan seating and circulation for each table format.')],
] as const;
export function catalogFor(market: Market, language: MarketLanguage) {
  return entries.map(([id, category, name, note]) => {
    const source = products.find(p => p.id === id);
    if (!source) throw new Error(`Missing catalog source ${id}`);
    return { id, category, title: name[language], note: note[language], image: source.image, gallery: source.gallery.slice(0, 2),
      context: catalogGroups.find(g => g.slug === category)![language === 'en' ? 'en' : market] };
  });
}

export function regionalCopy(market: Market, language: MarketLanguage) {
  const mn = language === 'mn', ru = language === 'ru';
  const t = (a: string,b: string,c: string) => mn ? a : ru ? b : c;
  return {
    products: t('Тавилгын каталог','Каталог мебели','Furniture catalog'), cases: t('Төслийн жишээ','Проектные примеры','Project references'), services: t('Үйлчилгээ','Услуги','Services'), about: t('Үйлдвэр ба баг','Производство и команда','Factory and team'),
    read: t('Дэлгэрэнгүй','Подробнее','View details'), brief: t('Төслийн бриф','Бриф проекта','Project brief'), faq: t('Түгээмэл асуулт','Вопросы и ответы','FAQ'),
    definition: t('Hymebel нь Hongye Furniture Group-ийн Монголд зориулсан төслийн тавилгын суваг юм. Зочид буудал, оффис, сургалтын орчин болон хувийн интерьерийн шаардлагыг зураг, BOQ, өрөөний жагсаалтаас эхлэн нэг багтай уялдуулан хэлэлцэнэ.','Hymebel — канал проектной комплектации Hongye Furniture Group для России. Мы обсуждаем мебель для гостиниц, офисов, учебных пространств и жилых интерьеров по чертежам и спецификациям, чтобы связать подбор изделий с техническим заданием и графиком закупки.',`Hymebel is the ${market === 'mn' ? 'Mongolia' : 'Russia'} project-furniture channel of Hongye Furniture Group. Review hotel, workplace, education and residential furniture with one team using drawings, room schedules and procurement specifications.`),
    productLead: t('Өрөөний зориулалтаар сонгоод, хэмжээ, материал, тоо ширхэгээ төслийн хүсэлтэд нэмээрэй.','Выберите направление, затем уточните размеры, отделки и количество в запросе по проекту.','Choose a project category, then confirm dimensions, finishes and quantities in your enquiry.'),
    rangeNote: t('Каталогийн зураг нь бүтээгдэхүүний төрлийг харуулна. Тухайн төслийн хэмжээ, материал, үнэ, хугацааг баталсан техникийн нөхцөлөөр тодруулна.','Фотографии показывают ассортимент. Размеры, материалы, цена и сроки для заказа подтверждаются по согласованной спецификации.','Catalog images illustrate the range. Order dimensions, materials, price and timing are confirmed against an agreed specification.'),
    casesLead: t('Доорх зураг нь одоо байгаа компанийн сангийн гадаад төслийн болон бүтээгдэхүүний орчны жишээ юм. Эдгээрийг Монголд хэрэгжүүлсэн төсөл гэж танилцуулахгүй; шинэ төслийн шаардлагыг ойлгуулахад ашиглана.','Ниже — зарубежные проектные и интерьерные примеры из существующей библиотеки компании. Они не заявляются как объекты в России: используйте их для обсуждения состава комплектации и технического задания.','These overseas project and interior references come from the existing company library. They are not presented as completed projects in this market; use them to discuss furnishing scope and technical requirements.'),
    serviceLead: t('Зөвхөн тавилга сонгохоос илүү: зураг, тоо хэмжээ, материал, дээж, үйлдвэрлэлийн болон савлагааны мэдээллийг нэг төслийн хүрээнд уялдуулна.','От подбора мебели к согласованной комплектации: связываем чертежи, ведомости, отделки, образцы и требования к отгрузке.','Move from furniture selection to a coordinated scope: connect drawings, quantities, finishes, samples and shipment requirements.'),
    servicesList: mn ? [
      ['Зураг ба BOQ нягтлах','Өрөөний жагсаалт, зураг, тоо ширхэгийг харьцуулж, дутуу мэдээлэл ба нийлүүлэлтийн хүрээг тодруулна.'],
      ['Материал ба өнгөлгөө сонгох','Өнгө, гадаргуу, бүрээс, фурнитурын сонголтыг ашиглалтын орчинтой уялдуулж, дээжийн шаардлагыг тохирно.'],
      ['Захиалгат хэмжээ ба уялдаа','Шүүгээ, ширээ, орны толгой болон бусад эдлэлийн хэмжээг зурагтай тулгаж, цахилгаан ба ханын интерфейсийг тодруулна.'],
      ['Дээж ба үйлдвэрлэлийн хяналтын цэг','Батлах дээж, ажлын зураг, шалгах үзүүлэлт, зурагт тайлангийн хүрээг захиалгад тохируулна.'],
      ['Савлагаа ба хүргэлтийн бэлтгэл','Өрөө эсвэл үе шатаар тэмдэглэгээ хийх, савлагаа, ачилт, хүлээн авах нөхцөлийг гэрээний хүрээнд ярилцана.'],
      ['Суурилуулалтын мэдээлэл','Угсралтын зураг, эд ангийн жагсаалт, талбай дээрх хариуцлагын хуваарийг тодруулна.']
    ] : ru ? [
      ['Проверка спецификации и BOQ','Сопоставляем позиции, количества и чертежи; фиксируем технические вопросы до подготовки расчёта.'],
      ['Материалы и отделки','Уточняем палитру, обивку, фурнитуру и условия эксплуатации; согласуем перечень образцов для утверждения.'],
      ['Изделия по чертежам','Проверяем габариты, узлы примыкания, доступ для сборки и сопряжения с инженерными системами.'],
      ['Образцы и контрольные точки','Определяем, какие образцы, рабочие чертежи, параметры проверки и фотоотчёты нужны для заказа.'],
      ['Поэтапная комплектация и упаковка','Согласуем разделение партий, маркировку по помещениям, требования к упаковке и условия передачи груза.'],
      ['Подготовка к монтажу','Уточняем сборочные документы, состав крепежа и распределение ответственности на объекте.']
    ] : [
      ['Drawing and BOQ review','Reconcile quantities and drawings; identify technical questions before costing.'],
      ['Materials and finishes','Discuss upholstery, hardware and finish references with the intended use.'],
      ['Drawing-based customisation','Review dimensions, wall interfaces, assembly access and engineering connections.'],
      ['Samples and checkpoints','Agree samples, drawings, inspection parameters and reporting for the order.'],
      ['Packing and procurement phases','Clarify batch structure, room labelling, packaging and cargo handover.'],
      ['Installation preparation','Define assembly documentation, hardware and responsibilities on site.']
    ],
    factoryBody: t('Hongye Furniture Group-ийн үйлдвэрлэлийн сангаас цех, CNC боловсруулалт, угсралт, шалгалт, савлагааны зургийг үзүүлж байна. Төслийн баг зураг болон материалын шийдвэрийг үйлдвэрлэлийн шаардлагатай уялдуулна. Үйлдвэртэй холбогдох уулзалт, дээж болон шаардлагатай баримт бичгийг хүсэлтээр хэлэлцэнэ.','Фотографии из библиотеки Hongye Furniture Group показывают обработку, сборку, контроль и экспортную упаковку. Проектная работа связывает согласованные чертежи и отделки с производственными требованиями. Посещение, образцы и документы обсуждаются по запросу для конкретной комплектации.','Images from the Hongye Furniture Group library show machining, assembly, quality review and export packing. Project coordination connects approved drawings and finishes with production requirements. Discuss visits, samples and documentation for your specific scope.'),
    factoryCaptions: [t('CNC боловсруулалт','Обработка на CNC','CNC machining'),t('Угсралтын хэсэг','Сборка мебели','Furniture assembly'),t('Чанарын хяналт','Контроль качества','Quality review')],
    processTitle: t('Зургаас нийлүүлэлтийн хүрээ хүртэл','От задания к комплектации','From brief to supply scope'),
    process: mn ? ['Хот, барилгын төрөл, өрөөний тоо болон зорилтот хугацаагаа өгнө.','Зураг ба BOQ-д тулгуурлан бүтээгдэхүүний хүрээ, хэмжээ, материал, тоо хэмжээг нягтална.','Дээж, ажлын зураг, үнийн санал болон хариуцлагын хуваарийг тохирно.','Баталсан захиалгын үйлдвэрлэл, шалгалт, савлагаа, ачилтын мэдээллийг уялдуулна.'] : ru ? ['Передайте тип объекта, ведомость помещений, чертежи и график закупки.','Уточните состав, размеры, отделки и количество; разделите этапы комплектации.','Согласуйте образцы, рабочие чертежи, расчёт и границы ответственности.','Зафиксируйте контроль, упаковку, партии и условия отгрузки в документах заказа.'] : ['Share the building type, room schedule, drawings and target dates.','Review scope, sizes, finishes, quantities and procurement phases.','Agree samples, working drawings, costing and responsibilities.','Coordinate production checks, packing and shipment against the order.'],
    faqItems: mn ? [
      ['Ямар тавилга нэг хүсэлтэд багтаж болох вэ?','Зочны өрөө, лобби, ресторан, оффис, сургалтын болон орон сууцны тавилгыг өрөөний жагсаалтаар нэгтгэн хэлэлцэж болно. Эцсийн хүрээг бүтээгдэхүүн болон зурагтай нь батална.'],
      ['Улаанбаатараас өөр хотын төсөл илгээж болох уу?','Болно. Хот, талбайд хүрэх нөхцөл, хүлээн авах хаяг болон хуваарийг хүсэлтэд оруулна уу. Логистикийн хувилбарыг тухайн захиалгаар хэлэлцэнэ.'],
      ['Тусгай хэмжээ эсвэл өнгө сонгож болох уу?','Зураг, хэмжилт, өнгөлгөөний жишээг илгээнэ үү. Үйлдвэрлэх боломж, дээж ба тоо хэмжээг баталсны дараа техникийн нөхцөлд тусгана.'],
      ['Үнэ тооцуулахад юу бэлтгэх вэ?','Тавилгын жагсаалт, тоо хэмжээ, зураг эсвэл жишээ, материалын сонголт, хот ба зорилтот огноо хэрэгтэй. BOQ бүрэн биш бол дутуу хэсгийг эхний ярилцлагаар тодруулна.'],
      ['Хүргэлт ба угсралтыг хэрхэн тохирох вэ?','Савлагаа, тээврийн хувилбар, хүлээн авах нөхцөл, талбайн угсралтын хариуцлагыг гэрээнд тодруулна. Тогтсон нийтлэг хугацаа эсвэл үнэгүй угсралтын амлалт өгөхгүй.']
    ] : ru ? [
      ['Можно ли комплектовать объект по очередям?','Да, очередность можно обсудить по помещениям или партиям. Передайте график готовности зон, количества и ограничения по хранению; согласованная схема отражается в документах заказа.'],
      ['Как сравнить предложения по BOQ?','Сведите позиции к одинаковым размерам, материалам, отделкам, количествам и составу услуг. Доставка, упаковка, сборка и документы должны быть выделены отдельно.'],
      ['Можно ли заказать мебель по проектным чертежам?','Пришлите размеры, узлы, референсы и требования к отделке. Возможность изготовления и состав образцов проверяются до утверждения спецификации.'],
      ['Какие сведения нужны для расчёта?','Чертежи или планы, ведомость помещений, количества, материалы, город назначения и целевые даты. Отдельно укажите требования к документам и монтажу.'],
      ['Какие документы и условия поставки доступны?','Перечень документов, требования к продукции, логистику и монтаж проверяем применительно к товару, месту назначения и договору. Универсальные обещания по сертификации и срокам не заменяют согласованную спецификацию.']
    ] : [
      ['Which furniture scopes can be discussed together?','Guestrooms, public spaces, offices, education and residential furniture can be reviewed in one room schedule. The final supply scope is confirmed against the drawings and product requirements.'],
      ['Can furniture be made to project drawings?','Send dimensions, details, references and finishes. Feasibility and samples are reviewed before the specification is approved.'],
      ['What is needed for a quotation?','A furniture list, quantities, drawings or references, finishes, destination and target dates. Identify packing, documentation and installation requirements separately.'],
      ['How are delivery and installation agreed?','Packing, transport options, cargo handover and installation responsibilities are defined for the order and contract rather than assumed.']
    ],
    caseItems: [
      {image:'/images/proyectos/hotel-suite.webp',title:t('Зочны өрөөний FF&E жишээ','Пример гостиничного FF&E','Guestroom FF&E reference'),body:t('Компанийн сангийн Ташкентын зочид буудлын жишээнээс ор, ширээ, шкаф, гэрэлтүүлгийн уялдааг харж болно. Шинэ төсөлд өрөөний өөрийн зураг ба хэмжээсээр хүрээг тодруулна.','Пример из гостиничной библиотеки Ташкента помогает обсудить кровать, рабочую зону, шкаф и свет. Для вашего объекта состав проверяется по собственным чертежам и ведомости номеров.','A Tashkent hotel reference illustrates coordination of beds, work areas, wardrobes and lighting. Your room schedule and drawings determine the new scope.')},
      {image:'/images/products/office-ca-05/office-ca-05-scene.jpg',title:t('Уулзалтын өрөөний шийдлийн жишээ','Пример комплектации переговорной','Meeting-room reference'),body:t('Одоо байгаа оффисын сангийн зураг. Ширээний хэмжээ, суудлын тоо, кабелийн байрлалыг Монгол дахь төслийн өрөөний төлөвлөлттэй харьцуулан ярилцана.','Фотография из существующей офисной библиотеки. Используйте её для обсуждения вместимости, кабельного доступа и стыков; размеры нового заказа подтверждаются отдельно.','An existing office-library image for discussing capacity, cable access and interfaces; new order dimensions are reviewed separately.')},
      {image:'/images/products/hotel-ca-11/hotel-ca-11-scene.jpg',title:t('Банкетын талбайн тавилгын жишээ','Пример банкетной комплектации','Banquet furnishing reference'),body:t('Сангийн банкeтийн орчны зураг нь ширээ, суудлын зохион байгуулалтыг харуулна. Суурилуулсан суудлын тоо, нийлүүлсэн хэмжээ зэрэг баталгаажаагүй тоог шинэ төсөлд шилжүүлэхгүй.','Интерьерный пример из библиотеки показывает расстановку банкетных столов и посадочных мест. Он помогает уточнить формат мероприятий и хранение, без переноса неподтверждённых объёмов поставки.','A library reference for discussing banquet layouts and storage without transferring unverified delivery quantities to a new project.')}
    ],
  };
}



