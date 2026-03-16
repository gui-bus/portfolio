import {getRequestConfig} from 'next-intl/server';
import {locales, defaultLocale} from './config';

export default getRequestConfig(async ({requestLocale}) => {
  let locale = await requestLocale;

  // Validate that the incoming `locale` is supported
  if (!locale || !locales.includes(locale as (typeof locales)[number])) {
    locale = defaultLocale;
  }

  return {
    locale,
    messages: (await import(`../../messages/${locale}.json`)).default
  };
});
