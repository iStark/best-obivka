export const company = {
  name: 'BestObivka',
  logo: '/images/bestobivka_logo_new.png',
  logoLight: '/images/logo_bestobivka_white.png',
  phone: '8 (960) 355-64-88',
  phoneHref: 'tel:+79603556488',
  city: 'Саратов',
  region: 'Саратов и Энгельс',
  address: 'Техническая 16Б/3',
  email: 'bestobivka@yandex.ru',
  telegramHref: 'https://t.me/+79603556488',
  vkHref: 'https://vk.com/public211467075',
  okHref: 'https://ok.ru/profile/589633859125',
  maxHref: 'https://max.ru/u/f9LHodD0cOJ21lYc4qyvW1uJUjaCqtIEgL-Ymk2KZuopgDb6RL-xCaIpB4Q',
  whatsappHref: 'https://wa.me/79603556488',
  maxButton: '/images/max_button_new_2.png',
  quizHref: '#quiz',
  mapSrc:
    'https://yandex.ru/map-widget/v1/?um=constructor%3A54df304266973ce5bb5c8d9808df12cbe4b8b567ed593534e1cd70499a1662a6&source=constructor',
}

export const navItems = [
  { label: 'Услуги', href: '#services' },
  { label: 'Расчет', href: '#estimate' },
  { label: 'Работы', href: '#portfolio' },
  { label: 'Материалы', href: '#materials' },
  { label: 'Отзывы', href: '#reviews' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Контакты', href: '#contacts' },
]

export const heroStats = [
  { value: '12 мес.', label: 'гарантия по договору' },
  { value: '0 ₽', label: 'выезд мастера на замер' },
  { value: '5 шагов', label: 'онлайн-расчет стоимости' },
  { value: '10%', label: 'скидка после квиза' },
]

export const heroSlides = [
  {
    image: '/images/bestobivka/bestobivka_home.png',
    alt: 'Диван после перетяжки BestObivka',
    title: 'Перетяжка диванов',
    position: 'right center',
  },
  {
    image: '/images/bestobivka/before-after/3-1.jpg',
    alt: 'Готовый диван в новой голубой обивке',
    title: 'Новая ткань и наполнитель',
    position: 'center center',
  },
  {
    image: '/images/bestobivka/choise_material.jpg',
    alt: 'Каталоги тканей для перетяжки мебели',
    title: 'Подбор материалов',
    position: 'center center',
  },
  {
    image: '/images/bestobivka/before-after/9-1.jpg',
    alt: 'Мягкое изголовье после перетяжки',
    title: 'Кровати и изголовья',
    position: 'center center',
  },
]

export const serviceItems = [
  {
    id: 'sofa',
    title: 'Диваны',
    fullTitle: 'Перетяжка дивана',
    price: 'от 7 000 руб.',
    basePrice: 7000,
    image: '/images/bestobivka/uslugi/uslugi_divan_mobile.jpg',
    description: 'Обновляем ткань, наполнитель, пружинные блоки и механизмы трансформации.',
    tags: ['прямые диваны', 'еврокнижки', 'ремонт каркаса'],
  },
  {
    id: 'bed',
    title: 'Кровати',
    fullTitle: 'Перетяжка кровати',
    price: 'от 5 000 руб.',
    basePrice: 5000,
    image: '/images/bestobivka/uslugi/uslugi_krovat_mobile.jpg',
    description: 'Перетягиваем мягкие изголовья, царги, основания и декоративные панели.',
    tags: ['изголовья', 'панели', 'эко-кожа'],
  },
  {
    id: 'armchair',
    title: 'Кресла',
    fullTitle: 'Перетяжка кресел',
    price: 'от 3 500 руб.',
    basePrice: 3500,
    image: '/images/bestobivka/uslugi/uslugi_kreslo_mobile.jpg',
    description: 'Возвращаем форму, комфорт и аккуратный внешний вид любимым креслам.',
    tags: ['кресла', 'пуфы', 'стулья'],
  },
  {
    id: 'corner',
    title: 'Угловые диваны',
    fullTitle: 'Перетяжка угловых диванов',
    price: 'от 12 000 руб.',
    basePrice: 12000,
    image: '/images/bestobivka/uslugi/uslugi_uglovye_mobile.jpg',
    description: 'Работаем с крупными модульными конструкциями, углами и секциями.',
    tags: ['модули', 'доставка', 'мастерская'],
  },
]

export const materialOptions = [
  { id: 'fabric', label: 'Ткань', add: 0, note: 'рогожка, жаккард, шенилл' },
  { id: 'velour', label: 'Велюр', add: 2200, note: 'мягкая фактура, стойкий цвет' },
  { id: 'anti', label: 'Антивандальная', add: 3800, note: 'для семей с детьми и животными' },
  { id: 'leather', label: 'Кожа / эко-кожа', add: 5200, note: 'строгий вид и легкий уход' },
]

export const calculatorExtras = [
  { id: 'foam', label: 'Заменить наполнитель', price: 2400 },
  { id: 'mechanism', label: 'Проверить механизм', price: 1800 },
  { id: 'delivery', label: 'Забор и доставка', price: 0 },
]

export const portfolioProjects = [
  {
    id: 'classic-corner',
    title: 'Угловой диван для гостиной',
    before: '/images/bestobivka/before-after/1.jpg',
    after: '/images/bestobivka/before-after/1-1.jpg',
    meta: ['антивандальная ткань', 'ремонт сидений', '5 дней'],
  },
  {
    id: 'soft-sofa',
    title: 'Семейный диван с новым велюром',
    before: '/images/bestobivka/before-after/3.jpg',
    after: '/images/bestobivka/before-after/3-1.jpg',
    meta: ['велюр', 'новый наполнитель', '4 дня'],
  },
  {
    id: 'compact-chair',
    title: 'Кресло после полной реставрации',
    before: '/images/bestobivka/before-after/6.jpg',
    after: '/images/bestobivka/before-after/6-1.jpg',
    meta: ['усиление каркаса', 'ткань букле', '3 дня'],
  },
  {
    id: 'bed-headboard',
    title: 'Мягкое изголовье в новой обивке',
    before: '/images/bestobivka/before-after/9.jpg',
    after: '/images/bestobivka/before-after/9-1.jpg',
    meta: ['эко-кожа', 'перетяжка панелей', '2 дня'],
  },
]

export const materialGroups = [
  {
    title: 'Антивандальные ткани',
    text: 'Подходят для активной эксплуатации: плотное плетение, простая чистка, высокая устойчивость к зацепкам.',
  },
  {
    title: 'Велюр и микровелюр',
    text: 'Мягкая фактура для современных диванов, кресел и кроватей с уютным визуальным эффектом.',
  },
  {
    title: 'Эко-кожа и натуральная кожа',
    text: 'Аккуратная геометрия, быстрый уход и более строгий статусный вид мебели.',
  },
  {
    title: 'Рогожка, жаккард, шенилл',
    text: 'Классические ткани для надежной повседневной обивки с большим выбором фактур.',
  },
]

export const processSteps = [
  {
    title: 'Фото или квиз',
    text: 'Вы отправляете фото мебели или проходите расчет, чтобы мы быстро поняли объем работ.',
  },
  {
    title: 'Замер и образцы',
    text: 'Мастер приезжает с каталогами тканей, помогает подобрать материал и функционал.',
  },
  {
    title: 'Фиксация цены',
    text: 'После осмотра согласуем смету, сроки и фиксируем условия до начала ремонта.',
  },
  {
    title: 'Работа в мастерской',
    text: 'Забираем мебель и выполняем перетяжку на оборудованном рабочем месте.',
  },
  {
    title: 'Доставка и гарантия',
    text: 'Возвращаем готовую мебель, проверяем качество и даем гарантию на работы.',
  },
]

export const reasons = [
  {
    title: 'Гарантия',
    text: '12 месяцев на все виды выполненных работ вне зависимости от сложности и материала.',
  },
  {
    title: 'Оборудование',
    text: 'Работы выполняются в мастерской, где есть профессиональный инструмент и место для подгонки.',
  },
  {
    title: 'Сотни вариантов ткани',
    text: 'Ассортимент регулярно обновляется: можно выбрать цвет, фактуру и практичность под интерьер.',
  },
  {
    title: 'Контроль качества',
    text: 'Готовую мебель проверяют перед отправкой клиенту, чтобы результат выглядел аккуратно.',
  },
]

export const reviews = [
  '/images/bestobivka/reviews/review_1.jpg',
  '/images/bestobivka/reviews/review_2.jpg',
  '/images/bestobivka/reviews/review_3.jpg',
  '/images/bestobivka/reviews/review_4.jpg',
  '/images/bestobivka/reviews/review_5.jpg',
  '/images/bestobivka/reviews/review_6.jpg',
]

export const faqs = [
  {
    question: 'Какие виды работ вы выполняете?',
    answer:
      'Выполняем ремонт и перетяжку мягкой мебели любой сложности: диваны, кресла, стулья, кровати, замена наполнителя, ремонт каркаса и механизмов. Также работаем с натуральной кожей.',
  },
  {
    question: 'Как примерно оценить стоимость и сроки?',
    answer:
      'Для предварительной оценки можно отправить фото мебели или пройти онлайн-расчет. Для точной сметы мастер приезжает на замер и подбирает материалы.',
  },
  {
    question: 'Обязателен ли выезд мастера?',
    answer:
      'Да, для точного расчета нужно измерить мебель, определить метраж материала и дополнительные работы. Выезд мастера бесплатный.',
  },
  {
    question: 'Можно ли выбрать ткань дома?',
    answer:
      'Да. Мастер приезжает с большим набором образцов: ткани, эко-кожа, эко-замша и натуральная кожа. Он помогает подобрать вариант под интерьер и эксплуатацию.',
  },
  {
    question: 'Может ли цена вырасти в процессе?',
    answer:
      'После осмотра и согласования итоговая стоимость фиксируется. Она не меняется в процессе или после выполнения работ.',
  },
  {
    question: 'Где лучше делать перетяжку?',
    answer:
      'Качественный ремонт лучше выполнять в мастерской: там есть оборудование, рабочее место и условия для точной подгонки будущих чехлов.',
  },
]
