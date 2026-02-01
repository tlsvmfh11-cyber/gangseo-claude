import type { ReactNode } from 'react';
import Header from './Header';
import Footer from './Footer';
import { GlobalSchema } from './SchemaMarkup';
import SecurityGuard from './SecurityGuard';

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <GlobalSchema />
      <SecurityGuard />
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}
