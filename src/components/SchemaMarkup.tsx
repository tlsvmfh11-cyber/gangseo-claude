import { Helmet } from 'react-helmet-async';

const SITE_URL = 'https://gangseo-noraebang.com';
const BUSINESS_NAME = '강서 노래방';

/* ────────────────────────────────
   WebSite + Organization + LocalBusiness (전역)
   ──────────────────────────────── */
export function GlobalSchema() {
  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${SITE_URL}/#website`,
    name: BUSINESS_NAME,
    url: SITE_URL,
    description:
      '강서구 프리미엄 노래방 안내 - 가격, 시스템, 후기 정보를 투명하게 제공합니다.',
    inLanguage: 'ko-KR',
    publisher: {
      '@id': `${SITE_URL}/#organization`,
    },
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${SITE_URL}/search?q={search_term_string}`,
      },
      'query-input': 'required name=search_term_string',
    },
  };

  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${SITE_URL}/#organization`,
    name: BUSINESS_NAME,
    url: SITE_URL,
    logo: {
      '@type': 'ImageObject',
      url: `${SITE_URL}/favicon.svg`,
      width: 100,
      height: 100,
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+82-10-2303-3778',
      contactType: 'customer service',
      areaServed: 'KR',
      availableLanguage: 'Korean',
      contactOption: 'TollFree',
    },
    address: {
      '@type': 'PostalAddress',
      streetAddress: '강서구',
      addressLocality: '서울특별시',
      addressRegion: '서울',
      postalCode: '07500',
      addressCountry: 'KR',
    },
    sameAs: [],
  };

  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'EntertainmentBusiness',
    '@id': `${SITE_URL}/#localbusiness`,
    name: BUSINESS_NAME,
    description:
      '강서구에 위치한 프리미엄 룸 노래방. 투명한 가격, 체계적인 초이스 시스템, 쾌적한 룸 환경을 갖추고 있습니다. 비즈니스 접대, 회식, 개인 모임에 적합합니다.',
    url: SITE_URL,
    telephone: '+82-10-2303-3778',
    image: `${SITE_URL}/images/hero.jpg`,
    priceRange: '₩₩₩',
    currenciesAccepted: 'KRW',
    paymentAccepted: '현금, 신용카드, 체크카드, 법인카드',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '강서구',
      addressLocality: '서울특별시',
      addressRegion: '서울',
      postalCode: '07500',
      addressCountry: 'KR',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 37.5509,
      longitude: 126.8495,
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: [
          'Monday', 'Tuesday', 'Wednesday', 'Thursday',
          'Friday', 'Saturday', 'Sunday',
        ],
        opens: '18:00',
        closes: '05:00',
      },
    ],
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.65',
      bestRating: '5',
      worstRating: '1',
      ratingCount: '128',
      reviewCount: '96',
    },
    hasMap: 'https://map.naver.com/',
    areaServed: {
      '@type': 'City',
      name: '서울특별시 강서구',
    },
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(websiteSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(organizationSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(localBusinessSchema)}
      </script>
    </Helmet>
  );
}

/* ────────────────────────────────
   BreadcrumbList
   ──────────────────────────────── */
interface BreadcrumbItem {
  name: string;
  href: string;
}

export function BreadcrumbSchema({ items }: { items: BreadcrumbItem[] }) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `${SITE_URL}${item.href}`,
    })),
  };

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Helmet>
  );
}

/* ────────────────────────────────
   FAQPage
   ──────────────────────────────── */
interface FAQItem {
  question: string;
  answer: string;
}

export function FAQSchema({ faqs }: { faqs: FAQItem[] }) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Helmet>
  );
}

/* ────────────────────────────────
   Service Schema (가격 페이지용)
   ──────────────────────────────── */
export function ServiceSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${SITE_URL}/price#service`,
    name: '강서 노래방 프리미엄 룸 서비스',
    description:
      '강서구 프리미엄 룸 노래방 서비스. 스탠다드, 디럭스, VIP, 프레지덴셜 룸 이용과 매니저 서비스, 주류 서비스를 포함합니다.',
    provider: {
      '@id': `${SITE_URL}/#localbusiness`,
    },
    serviceType: '프리미엄 룸 노래방',
    areaServed: {
      '@type': 'City',
      name: '서울특별시 강서구',
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: '강서 노래방 룸 타입',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: '스탠다드 룸 (2~4인)',
            description: '소규모 모임에 적합한 룸. 기본 음향 시스템과 쾌적한 환경 제공.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: '디럭스 룸 (4~6인)',
            description: '비즈니스 접대에 가장 인기 있는 룸. 고급 인테리어와 프리미엄 음향.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'VIP 룸 (6~10인)',
            description: '단체 모임을 위한 넓은 공간. 독립 화장실과 최고급 시설 완비.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: '프레지덴셜 룸 (10~20인)',
            description: '대규모 회식과 특별 행사를 위한 최대 규모 프리미엄 룸.',
          },
        },
      ],
    },
  };

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Helmet>
  );
}

/* ────────────────────────────────
   Review Schema (후기 페이지용)
   ──────────────────────────────── */
interface ReviewData {
  author: string;
  rating: number;
  body: string;
  date: string;
}

export function ReviewSchema({ reviews }: { reviews: ReviewData[] }) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'EntertainmentBusiness',
    '@id': `${SITE_URL}/#localbusiness`,
    name: BUSINESS_NAME,
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.65',
      bestRating: '5',
      worstRating: '1',
      ratingCount: '128',
      reviewCount: '96',
    },
    review: reviews.map((r) => ({
      '@type': 'Review',
      author: {
        '@type': 'Person',
        name: r.author,
      },
      datePublished: r.date,
      reviewRating: {
        '@type': 'Rating',
        ratingValue: String(r.rating),
        bestRating: '5',
        worstRating: '1',
      },
      reviewBody: r.body,
    })),
  };

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Helmet>
  );
}

/* ────────────────────────────────
   WebPage Schema (각 페이지용)
   ──────────────────────────────── */
interface WebPageSchemaProps {
  name: string;
  description: string;
  url: string;
}

export function WebPageSchema({ name, description, url }: WebPageSchemaProps) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': `${SITE_URL}${url}#webpage`,
    name,
    description,
    url: `${SITE_URL}${url}`,
    isPartOf: {
      '@id': `${SITE_URL}/#website`,
    },
    about: {
      '@id': `${SITE_URL}/#localbusiness`,
    },
    inLanguage: 'ko-KR',
  };

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Helmet>
  );
}
