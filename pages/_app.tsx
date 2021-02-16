import type { AppProps /*, AppContext */ } from 'next/app';
import { useEffect, useState } from 'react';

import { appWithTranslation, useTranslation } from '../i18n';

const MyApp = ({ Component, pageProps }: AppProps) => {
  const { i18n } = useTranslation();
  const [currentLanguage, setCurrentLanguage] = useState(i18n.language || 'en');

  useEffect(() => {
    i18n.changeLanguage(currentLanguage);
  }, [currentLanguage]);

  return (
    <>
      <button
        onClick={() => {
          setCurrentLanguage('en');
        }}
      >
        EN
      </button>{' '}
      <button
        onClick={() => {
          setCurrentLanguage('de');
        }}
      >
        DE
      </button>
      <Component {...pageProps} />
    </>
  );
};

export default appWithTranslation(MyApp);
