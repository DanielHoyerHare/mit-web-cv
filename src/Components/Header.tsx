import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage, getTranslation } from '../Language/LanguageContext'; // Importer useLanguage og getTranslation
import { Language } from '../Language/Translations';
import './Header.css';

export default function Header() {
  const [bgColor, setBgColor] = useState<string>('transparent');  // Initial værdi er gennemsigtig
  const { language, setLanguage } = useLanguage(); // Brug sprog fra contexten

  // Denne funktion opdaterer baggrundsfarven, når vi scroller
  const handleScroll = () => {
    if (window.scrollY > 0) {
      setBgColor('rgba(23, 48, 29, 1)');
    } else {
      setBgColor('rgba(23, 48, 29, 0.5)');
    }
  };

  // Brug useEffect til at lytte på scroll-events
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    // Rens op ved unmounting
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return <HeaderHTML bgColor={bgColor} language={language} setLanguage={setLanguage} />;
}

interface HeaderHTMLProps {
  bgColor: string;
  language: Language; // Brug den korrekte Language type her
  setLanguage: React.Dispatch<React.SetStateAction<Language>>; // Brug den korrekte type for setLanguage
}

function HeaderHTML({ bgColor, language, setLanguage }: HeaderHTMLProps) {
  const handleChangeLanguage = (newLanguage: Language) => {
    setLanguage(newLanguage);
  };
  return (
    <header className="header sticky box-shadow" style={{ backgroundColor: bgColor }}>
      <div className="header-container">
        <Link className="header-text hover-underline hover-background" to="/">Daniel Høyer Hare</Link>
        <nav>
          <ul>
            <li><Link className="header-text hover-underline hover-background" to="/">{getTranslation('home', language)}</Link></li>
            <li><Link className="header-text hover-underline hover-background" to="/contact">{getTranslation('contact', language)}</Link></li>
            <li>
              <div className="language hover-underline hover-background">
                <img
                  className="language-flag"
                  src={`/img/flags/${language}.png`} // Vis flag baseret på sprog
                  alt={language}
                  onClick={() => handleChangeLanguage(language === 'en' ? 'da' : 'en')} // Skift mellem engelsk og dansk
                />
              </div>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
