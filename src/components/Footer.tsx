import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="footer" role="contentinfo">
      <div className="container">
        <div className="footer__grid">
          <div className="footer__brand">
            <h3>강서 노래방</h3>
            <p>
              강서구에서 운영되는 프리미엄 룸 노래방입니다.
              투명한 가격과 검증된 시스템으로 처음 방문하시는 분들도
              편안하게 이용하실 수 있도록 안내해 드립니다.
              궁금하신 사항은 언제든 연락 주시면 친절하게 상담해 드리겠습니다.
            </p>
            <a
              href="tel:01023033778"
              className="cta-btn cta-glow"
              style={{ marginTop: '1rem', display: 'inline-flex' }}
              aria-label="강서 노래방 전화 상담"
            >
              전화 상담: 010-2303-3778
            </a>
          </div>

          <nav className="footer__links" aria-label="푸터 페이지 링크">
            <h4>페이지</h4>
            <ul>
              <li><Link to="/">강서 노래방 메인</Link></li>
              <li><Link to="/price">강서 노래방 가격 안내</Link></li>
              <li><Link to="/system">강서 노래방 이용 시스템</Link></li>
              <li><Link to="/review">강서 노래방 이용 후기</Link></li>
            </ul>
          </nav>

          <div className="footer__links">
            <h4>매장 안내</h4>
            <ul>
              <li>
                <span style={{ color: '#b8b5ad', fontSize: '0.9rem' }}>
                  위치: 서울특별시 강서구
                </span>
              </li>
              <li>
                <a href="tel:01023033778" style={{ color: '#c9a84c', fontSize: '0.9rem' }}>
                  전화: 010-2303-3778
                </a>
              </li>
              <li>
                <span style={{ color: '#b8b5ad', fontSize: '0.9rem' }}>
                  영업: 매일 18:00 ~ 05:00
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer__bottom">
          <p>&copy; {new Date().getFullYear()} 강서 노래방. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
