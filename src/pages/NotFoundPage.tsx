import { Link } from 'react-router-dom';
import SEOHead from '../components/SEOHead';

export default function NotFoundPage() {
  return (
    <>
      <SEOHead
        title="페이지를 찾을 수 없습니다 | 강서 노래방"
        description="요청하신 페이지를 찾을 수 없습니다. 강서 노래방 메인 페이지로 이동하여 가격, 시스템, 후기 정보를 확인하세요."
        canonical="https://gangseojanghon.com/"
        robots="noindex, follow"
      />
      <section className="section" style={{ paddingTop: 'calc(var(--header-height) + 4rem)', minHeight: '60vh', display: 'flex', alignItems: 'center' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <h1 style={{ fontSize: '4rem', color: 'var(--color-gold)', marginBottom: '1rem' }}>404</h1>
          <h2>페이지를 찾을 수 없습니다</h2>
          <p style={{ maxWidth: '500px', margin: '1rem auto 2rem' }}>
            요청하신 페이지가 존재하지 않거나 이동되었습니다.
            아래 링크를 통해 원하시는 정보를 찾아보세요.
          </p>
          <nav aria-label="404 페이지 네비게이션">
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link to="/" className="cta-btn cta-glow">강서 노래방 메인</Link>
              <Link to="/price" className="cta-btn cta-btn--outline">가격 안내</Link>
              <Link to="/system" className="cta-btn cta-btn--outline">이용 시스템</Link>
              <Link to="/review" className="cta-btn cta-btn--outline">이용 후기</Link>
            </div>
          </nav>
        </div>
      </section>
    </>
  );
}
