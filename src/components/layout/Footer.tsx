import { Link } from '@tanstack/react-router';
import { Separator } from '@/components/ui/separator';
import { useTranslation } from 'react-i18next';

function Footer() {
  const { t } = useTranslation();

  return (
    <footer className='mt-auto'>
      <Separator className='my-4' />
      <div>
        <ul>
          <li>
            <Link to='/login'>{t('common.login')}</Link>
          </li>
          <li>
            <Link to='/signup'>{t('common.register')}</Link>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export { Footer };
