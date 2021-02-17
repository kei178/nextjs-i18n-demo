import { NextPage } from 'next';

import { withTranslation } from '../i18n';
import { TFunction } from 'next-i18next';
import Link from 'next/link';

interface AnotherProps {
  readonly t: TFunction;
}

const Another: NextPage<AnotherProps> = ({ t }) => {
  return (
    <div>
      <h2>{t('title')}</h2>
      <Link href="/">
        <a>Home</a>
      </Link>
    </div>
  );
};

export default withTranslation('another')(Another);
