// ScrollToTop.tsx
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0); // <-- Resetter scroll
  }, [pathname]); // <-- Kaldes når pathname ændres

  return null; // Komponent skal ikke vise noget
}
