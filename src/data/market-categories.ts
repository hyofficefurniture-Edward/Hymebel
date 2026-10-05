export type MarketCategory = {
  slug: "hotel-furniture" | "office-furniture" | "education-healthcare";
  title: string;
  description: string;
  intro: string;
  bullets: string[];
};

const english = [
  { slug: "hotel-furniture", title: "Hotel furniture for project enquiries", description: "Hotel furniture project enquiries for Mongolia or Russia: guest rooms, public areas and room lists.", intro: "Use this page to start a hotel furniture scope with drawings, BOQ, room type schedules and quantities.", bullets: ["Guest rooms, public areas, restaurants and meeting spaces.", "Room lists, quantities, finishes and interface requirements.", "Project-specific review before any technical or commercial commitment."] },
  { slug: "office-furniture", title: "Office furniture for project enquiries", description: "Office furniture project enquiries for Mongolia or Russia: workstations, meeting rooms and executive spaces.", intro: "Share workplace layouts, workstation counts, meeting-room requirements and procurement brief.", bullets: ["Workstations, meeting rooms and executive offices.", "Layouts, power/data interfaces and material preferences.", "Project-specific scope review before quotation or scheduling."] },
  { slug: "education-healthcare", title: "Education and healthcare furniture enquiries", description: "Education and healthcare furniture project enquiries for Mongolia or Russia, reviewed with drawings and quantities.", intro: "Send the room programme, functional requirements and drawings for education or healthcare projects.", bullets: ["Classrooms, staff areas, waiting zones and support spaces.", "Functional requirements, dimensions and quantities.", "Compliance documents and specifications assessed for the individual project."] },
] as const satisfies readonly MarketCategory[];

const mongolian = [
  { slug: "hotel-furniture", title: "Зочид буудлын төслийн тавилга", description: "Монголын зочид буудлын төслийн тавилгын хүсэлт: зочны өрөө, нийтийн талбай, өрөөний жагсаалт.", intro: "Зочид буудлын зураг, BOQ, өрөөний төрлийн жагсаалт болон тоо хэмжээг илгээн төслийн хүрээг эхлүүлнэ үү.", bullets: ["Зочны өрөө, нийтийн талбай, ресторан, уулзалтын орчин.", "Өрөөний жагсаалт, тоо хэмжээ, өнгөлгөө ба уялдааны шаардлага.", "Техникийн болон арилжааны нөхцөлийг зөвхөн тухайн төслөөр нягтална."] },
  { slug: "office-furniture", title: "Оффисын төслийн тавилга", description: "Монголын оффисын төслийн тавилгын хүсэлт: ажлын байр, уулзалтын өрөө, удирдах албаны орон зай.", intro: "Ажлын байрны төлөвлөлт, ширээний тоо, уулзалтын өрөөний шаардлага, худалдан авах товчоо хуваалцана уу.", bullets: ["Ажлын байр, уулзалтын өрөө, удирдах албаны оффис.", "Төлөвлөлт, цахилгаан/дата уялдаа, материалын сонголт.", "Үнийн санал, хугацааг төслийн хүрээг нягталсны дараа хэлэлцэнэ."] },
  { slug: "education-healthcare", title: "Боловсрол ба эрүүл мэндийн төслийн тавилга", description: "Монголын сургууль, эрүүл мэндийн төслийн тавилгын хүсэлт: зураг ба тоо хэмжээгээр нягтална.", intro: "Боловсрол эсвэл эрүүл мэндийн төслийн өрөөний хөтөлбөр, ашиглалтын шаардлага, зургийг илгээнэ үү.", bullets: ["Анги, ажилтны хэсэг, хүлээлгийн болон туслах талбай.", "Ашиглалтын шаардлага, хэмжээ, тоо ширхэг.", "Стандартын бичиг баримт, техникийн тодорхойлолтыг тухайн төслөөр үнэлнэ."] },
] as const satisfies readonly MarketCategory[];

const russian = [
  { slug: "hotel-furniture", title: "Мебель для гостиничного проекта", description: "Запрос по мебели для гостиничного проекта в России: номера, общественные зоны и ведомость помещений.", intro: "Отправьте чертежи, BOQ, перечень типов номеров и количество, чтобы начать проработку гостиничного проекта.", bullets: ["Номера, общественные зоны, рестораны и переговорные.", "Ведомость помещений, количество, отделки и требования к стыкам.", "Технические и коммерческие условия рассматриваются только для конкретного проекта."] },
  { slug: "office-furniture", title: "Мебель для офисного проекта", description: "Запрос по мебели для офисного проекта в России: рабочие места, переговорные и кабинеты.", intro: "Поделитесь планировкой, количеством рабочих мест, требованиями к переговорным и закупочным брифом.", bullets: ["Рабочие места, переговорные и кабинеты.", "Планировки, интерфейсы питания/данных и предпочтения по материалам.", "Расчёт и сроки обсуждаются после проверки объёма проекта."] },
  { slug: "education-healthcare", title: "Мебель для образования и здравоохранения", description: "Запрос по мебели для проектов образования и здравоохранения в России, рассматриваемый по чертежам и количеству.", intro: "Пришлите программу помещений, функциональные требования и чертежи для проекта образования или здравоохранения.", bullets: ["Учебные классы, помещения персонала, зоны ожидания и вспомогательные зоны.", "Функциональные требования, размеры и количество.", "Документы и спецификации оцениваются применительно к конкретному проекту."] },
] as const satisfies readonly MarketCategory[];

export function categoriesFor(market: "mn" | "ru", language: "mn" | "ru" | "en"): readonly MarketCategory[] {
  if (language === "en") return english;
  return market === "mn" ? mongolian : russian;
}
