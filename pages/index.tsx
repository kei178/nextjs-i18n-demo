import { NextPage } from 'next';

import { withTranslation } from '../i18n';
import { TFunction } from 'next-i18next';
import Link from 'next/link';

interface HomeProps {
  readonly t: TFunction;
}

const Home: NextPage<HomeProps> = ({ t }) => {
  return (
    <div>
      <h2>{t('hello')}</h2>
      <p>{t('nested.greeting', { name: 'Kei' })}</p>
      <Link href="/another">
        <a>Another Page</a>
      </Link>
    </div>
  );
};

export default withTranslation('common')(Home);
