import type { ReactNode, CSSProperties } from 'react';

interface SectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
  style?: CSSProperties;
  width?: string;
}

export function Section({ children, className = '', id, style, width = 'max-w-7xl' }: SectionProps) {
  return (
    <section id={id} className={`py-16 md:py-24 ${className}`} style={style}>
      <div className={`${width} mx-auto px-4 sm:px-6 lg:px-8`}>
        {children}
      </div>
    </section>
  );
}
