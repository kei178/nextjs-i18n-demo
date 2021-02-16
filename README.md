This is a demo [Next.js](https://nextjs.org/) app with [next-i18next](https://github.com/isaachinman/next-i18next). 

## Setup

### 0. Before start

Create a Next.js app, and optionally install typesript.

### 1. Installation

```
yarn add next-i18next
```

### 2. Translation content

Add json files in `public/static/locales/[locale]` folders.

```
.
└── public
    └── static
        └── locales
            ├── en
            |   └── common.json
            └── de
                └── common.json
```

### 3. Project setup

#### `i18n.js`

```jsx
const NextI18Next = require('next-i18next').default;
const { localeSubpaths } = require('next/config').default().publicRuntimeConfig;
const path = require('path');

module.exports = new NextI18Next({
  otherLanguages: ['de'],
  localeSubpaths,
  localePath: path.resolve('./public/static/locales'),
});

```

#### `next.config.js`

```jsx
const { nextI18NextRewrites } = require('next-i18next/rewrites');

const localeSubpaths = {};

module.exports = {
  rewrites: async () => nextI18NextRewrites(localeSubpaths),
  publicRuntimeConfig: {
    localeSubpaths,
  },
};
```

#### `_app.tsx`

```jsx
import type { AppProps } from 'next/app';
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
```

* Use HOC `appWithTranslation`
* Update the current language by `i18n.changeLanguage(currentLanguage)`

#### `index.tsx`

```jsx
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
```
* Use HOC `withTranslation`
* Render translation contents by `t()`
* `t()` takes an Object of dynamic traslation values as the second argument