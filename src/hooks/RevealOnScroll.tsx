import { useEffect, useRef } from 'react';

interface RevealOnScrollProps {
  children: React.ReactNode;
  className?: string;
}


export default function RevealOnScroll({ children, className = '' }: RevealOnScrollProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting && ref.current) {
            ref.current.classList.add('visible');
          }
        });
      },
      { threshold: 0.1,
        rootMargin: '0px 0px -250px 0px'
      }
    );

    const thisRef = ref.current;

    if (thisRef) {
      observer.observe(thisRef);
    }

    return () => {
      if (thisRef) {
        observer.unobserve(thisRef);
      }
    };
  }, []);

  // Her sørger vi for at 'section' altid er med:
  const combinedClassName = `section ${className}`.trim();

  return (
    <div ref={ref} className={combinedClassName}>
      {children}
    </div>
  );
}
