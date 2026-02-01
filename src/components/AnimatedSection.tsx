import { useEffect, useRef, type ReactNode } from 'react';

type AnimationType =
  | 'fade-in-up'
  | 'fade-in-left'
  | 'fade-in-right'
  | 'scale-in'
  | 'stagger';

interface AnimatedSectionProps {
  children: ReactNode;
  animation?: AnimationType;
  delay?: number;
  className?: string;
}

export default function AnimatedSection({
  children,
  animation = 'fade-in-up',
  delay = 0,
  className = '',
}: AnimatedSectionProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            el.classList.add('visible');
          }, delay);
          observer.unobserve(el);
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [delay]);

  const animClass =
    animation === 'stagger'
      ? 'stagger-children'
      : `animate-${animation}`;

  return (
    <div
      ref={ref}
      className={`${animClass} ${className}`}
    >
      {children}
    </div>
  );
}
