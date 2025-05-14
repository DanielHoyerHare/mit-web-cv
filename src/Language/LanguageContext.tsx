import React, { createContext, useContext, useState, ReactNode } from 'react';
import { translations, Language } from './Translations'; // Importer Language type og translations

// Definerer typen for contexten
interface LanguageContextType {
  language: Language; // Brug Language type
  setLanguage: React.Dispatch<React.SetStateAction<Language>>; // setLanguage opdaterer Language type
}

// Definerer typen for LanguageProvider props
interface LanguageProviderProps {
  children: ReactNode; // Definerer children som ReactNode
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Hook til at bruge LanguageContext
export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

// LanguageProvider komponent
export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('da'); // Default sprog er dansk, og vi bruger Language typen

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

// Funktion til at få oversættelser
export const getTranslation = (key: string, language: Language) => {
  return translations[language][key] || key; // Returner oversættelsen eller nøgle hvis ikke fundet
};
