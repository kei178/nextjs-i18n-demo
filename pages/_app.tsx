import type { AppProps /*, AppContext */ } from 'next/app';

import { appWithTranslation } from '../i18n';

const MyApp = ({ Component, pageProps }: AppProps) => {
  return <Component {...pageProps} />;
};

export default appWithTranslation(MyApp);
