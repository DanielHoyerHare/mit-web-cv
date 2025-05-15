export type Language = 'en' | 'da'; // Angiver de mulige sprog

export const translations: Record<Language, Record<string, string>> = {
  en: {
    contact: "Contact",
    home: "Home",
    introduction: "Introduction - a little about me"
  },
  da: {
    contact: "Kontakt",
    home: "Hjem",
    introduction: "Introduktion - lidt om mig"
  }
};
