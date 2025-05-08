import { Link } from '@tanstack/react-router';
import { LanguageSwitcher } from './LanguageSwitcher';
import { useTranslation } from 'react-i18next';

function Header() {
  const { t } = useTranslation();
  return (
    <header className='pb-2 flex gap-2 justify-between'>
      <nav className='flex flex-row items-center justify-between w-full'>
        <div className='font-bold'>
          <Link to='/'>{t('common.home')}</Link>
        </div>
        <div>
          <LanguageSwitcher />
        </div>
      </nav>
    </header>
  );
}

export { Header };
