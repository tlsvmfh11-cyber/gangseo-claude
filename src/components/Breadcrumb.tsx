import { Link } from 'react-router-dom';
import { BreadcrumbSchema } from './SchemaMarkup';

interface BreadcrumbItem {
  name: string;
  href: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

export default function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <>
      <BreadcrumbSchema items={items} />
      <nav className="breadcrumb" aria-label="breadcrumb">
        <div className="container">
          <ol className="breadcrumb__list">
            {items.map((item, index) => {
              const isLast = index === items.length - 1;
              return (
                <li key={item.href} className={isLast ? 'current' : ''}>
                  {!isLast ? (
                    <>
                      <Link to={item.href}>{item.name}</Link>
                      <span className="separator" aria-hidden="true">/</span>
                    </>
                  ) : (
                    <span aria-current="page">{item.name}</span>
                  )}
                </li>
              );
            })}
          </ol>
        </div>
      </nav>
    </>
  );
}
