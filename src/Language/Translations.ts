export type Language = 'en' | 'da'; // Angiver de mulige sprog

export const translations: Record<Language, Record<string, string>> = {
  en: {
    welcome: "Welcome",
    about: "About",
    contact: "Contact",
    home: "Home",
  },
  da: {
    welcome: "Velkommen",
    about: "Om",
    contact: "Kontakt",
    home: "Hjem",
  }
};
