import { NextPage } from 'next';

import { withTranslation } from '../i18n';
import { TFunction } from 'next-i18next';

interface HomeProps {
  readonly t: TFunction;
}

const Home: NextPage<HomeProps> = ({ t }) => {
  return (
    <div>
      <h2>{t('hello')}</h2>
      <p>{t('nested.greeting', { name: 'Kei' })}</p>
    </div>
  );
};

export default withTranslation('common')(Home);
