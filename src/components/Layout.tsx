import type { ReactNode } from 'react';
import Header from './Header';
import Footer from './Footer';
import { GlobalSchema } from './SchemaMarkup';

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <GlobalSchema />
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}
