import createMiddleware from 'next-intl/middleware';
import {locales, defaultLocale} from './i18n/config';

export default createMiddleware({
  locales,
  defaultLocale,
  localePrefix: 'never'
});

export const config = {
  // Match all pathnames except for
  // - API routes
  // - Static files (_next, images, favicon.ico, etc.)
  matcher: ['/((?!api|_next|_vercel|.*\\..*).*)']
};
