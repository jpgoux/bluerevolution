import type { Metadata, Viewport } from 'next';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
import CustomCursor from '@/components/CustomCursor';
import '@/styles/globals.css';

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover', // Safe area insets (iPhone notch / home indicator)
};

export const metadata: Metadata = {
  title: 'Révolution Bleue',
  description: "La métamorphose de l'humanité vers Homo biospheris.",
  openGraph: {
    title: 'Révolution Bleue',
    description: "La métamorphose de l'humanité vers Homo biospheris.",
    siteName: 'Révolution Bleue',
  },
};

type Props = {
  children: React.ReactNode;
  params: { locale: string };
};

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = params;

  if (!routing.locales.includes(locale as 'fr' | 'en')) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider messages={messages}>
          <CustomCursor />
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}
