import { NextPage, NextPageContext } from 'next';

import { withTranslation } from '../i18n';
import { TFunction } from 'next-i18next';

interface HomeProps {
  readonly t: TFunction;
}

const Home: NextPage<HomeProps> = ({ t }) => {
  return (
    <div>
      <p>{t('hello')}</p>
    </div>
  );
};

export default withTranslation('common')(Home);
