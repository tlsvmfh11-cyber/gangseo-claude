import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const NAV_ITEMS = [
  { label: '메인', href: '/' },
  { label: '가격 안내', href: '/price' },
  { label: '이용 시스템', href: '/system' },
  { label: '후기', href: '/review' },
];

export default function Header() {
  const { pathname } = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      <header className="header">
        <div className="header__inner">
          <Link to="/" className="header__logo">
            강서<span>노래방</span>
          </Link>

          <nav className="header__nav" aria-label="메인 네비게이션">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className={pathname === item.href ? 'active' : ''}
              >
                {item.label}
              </Link>
            ))}
            <a href="tel:01023033778" className="cta-btn cta-btn--sm" aria-label="강서 노래방 전화 문의">
              전화 문의
            </a>
          </nav>

          <button
            className={`header__menu-btn ${mobileOpen ? 'open' : ''}`}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="메뉴 열기"
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </header>

      {/* Mobile Navigation Overlay */}
      <nav className={`mobile-nav-overlay ${mobileOpen ? 'open' : ''}`} aria-label="모바일 네비게이션">
        {NAV_ITEMS.map((item) => (
          <Link
            key={item.href}
            to={item.href}
            onClick={() => setMobileOpen(false)}
          >
            {item.label}
          </Link>
        ))}
        <a
          href="tel:01023033778"
          className="cta-btn"
          onClick={() => setMobileOpen(false)}
          aria-label="강서 노래방 전화 문의"
        >
          전화 문의: 010-2303-3778
        </a>
      </nav>
    </>
  );
}
