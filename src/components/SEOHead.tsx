import { Helmet } from 'react-helmet-async';

interface SEOHeadProps {
  title: string;
  description: string;
  canonical: string;
  keywords?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  ogType?: string;
  robots?: string;
}

export default function SEOHead({
  title,
  description,
  canonical,
  keywords,
  ogTitle,
  ogDescription,
  ogImage = 'https://gangseojanghon.com/images/hero.jpg',
  ogType = 'website',
  robots = 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
}: SEOHeadProps) {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonical} />
      {keywords && <meta name="keywords" content={keywords} />}

      {/* hreflang - 페이지별 동적 관리 */}
      <link rel="alternate" hrefLang="ko" href={canonical} />
      <link rel="alternate" hrefLang="x-default" href={canonical} />

      {/* Robots */}
      <meta name="robots" content={robots} />

      {/* Open Graph */}
      <meta property="og:title" content={ogTitle || title} />
      <meta property="og:description" content={ogDescription || description} />
      <meta property="og:url" content={canonical} />
      <meta property="og:type" content={ogType} />
      <meta property="og:locale" content="ko_KR" />
      <meta property="og:site_name" content="강서 노래방" />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content={ogTitle || title} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={ogTitle || title} />
      <meta name="twitter:description" content={ogDescription || description} />
      <meta name="twitter:image" content={ogImage} />

      {/* 추가 SEO */}
      <meta name="author" content="강서 노래방" />
      <meta name="geo.region" content="KR-11" />
      <meta name="geo.placename" content="서울특별시 강서구" />
    </Helmet>
  );
}
