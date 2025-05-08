import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select';
import { useTranslation } from 'react-i18next';
import { supportedLanguages } from '@/i18n';
import { useEffect, useState } from 'react';
import { Globe } from 'lucide-react';
import { t } from 'i18next';

function LanguageSwitcher() {
  const { i18n } = useTranslation();
  const [currentLanguage, setCurrentLanguage] = useState(i18n.language);

  useEffect(() => {
    setCurrentLanguage(i18n.language);
  }, [i18n.language]);

  const handleLanguageChange = (language: string) => {
    i18n.changeLanguage(language);
    setCurrentLanguage(language);
  };

  return (
    <Select
      onValueChange={handleLanguageChange}
      defaultValue={currentLanguage}
      value={currentLanguage}
    >
      <SelectTrigger className='gap-2'>
        <Globe />
        <SelectValue placeholder={t('languageSwitcher.selectLanguage')} />
      </SelectTrigger>
      <SelectContent>
        {supportedLanguages.map(lang => (
          <SelectItem key={lang.code} value={lang.code}>
            {lang.shortName}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}

export { LanguageSwitcher };
