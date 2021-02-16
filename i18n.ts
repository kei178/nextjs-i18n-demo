import path from 'path';
import NextI18Next from 'next-i18next';
// const { localeSubpaths } = require('next/config').default().publicRuntimeConfig;

export const nextI18next = new NextI18Next({
  browserLanguageDetection: false,
  defaultNS: 'common',
  defaultLanguage: 'en',
  fallbackLng: 'en',
  otherLanguages: ['de'],
  // localeSubpaths,
  localePath: path.resolve('./public/static/locales'),
});

export const {
  i18n,
  appWithTranslation,
  Link,
  withTranslation,
  Router,
} = nextI18next;
