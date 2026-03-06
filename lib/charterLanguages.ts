export type CharterLanguage = {
  code: string;
  flag: string;
  native: string;
  english: string;
  dir: 'ltr' | 'rtl';
};

export const CHARTER_LANGUAGES: CharterLanguage[] = [
  { code: 'ar', flag: '🇸🇦', native: 'العربية',  english: 'Arabic',     dir: 'rtl' },
  { code: 'bn', flag: '🇧🇩', native: 'বাংলা',    english: 'Bengali',    dir: 'ltr' },
  { code: 'zh', flag: '🇨🇳', native: '中文',      english: 'Chinese',    dir: 'ltr' },
  { code: 'en', flag: '🇬🇧', native: 'English',   english: 'English',    dir: 'ltr' },
  { code: 'fr', flag: '🇫🇷', native: 'Français',  english: 'French',     dir: 'ltr' },
  { code: 'de', flag: '🇩🇪', native: 'Deutsch',   english: 'German',     dir: 'ltr' },
  { code: 'hi', flag: '🇮🇳', native: 'हिन्दी',    english: 'Hindi',      dir: 'ltr' },
  { code: 'id', flag: '🇮🇩', native: 'Indonesia', english: 'Indonesian', dir: 'ltr' },
  { code: 'pt', flag: '🇧🇷', native: 'Português', english: 'Portuguese', dir: 'ltr' },
  { code: 'ru', flag: '🇷🇺', native: 'Русский',   english: 'Russian',    dir: 'ltr' },
  { code: 'es', flag: '🇪🇸', native: 'Español',   english: 'Spanish',    dir: 'ltr' },
];

export function getLanguage(code: string): CharterLanguage | undefined {
  return CHARTER_LANGUAGES.find((l) => l.code === code);
}
