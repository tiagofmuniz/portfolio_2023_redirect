import type { Metadata } from 'next';
import { Ubuntu } from 'next/font/google';
import '../styles_globals/globals.scss';
import { SectionProvider } from 'contexts_and_providers/useSectionContext';
import Header from 'components/UI/Header/Header';
import Footer from 'components/UI/Footer/Footer';

const ubuntu = Ubuntu({ subsets: ['latin'], weight: ['400', '700'] });

export const metadata: Metadata = {
  // title: 'Create Next App',
  // description: 'Generated by create next app',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <SectionProvider>
      <html lang='en'>
        <body className={ubuntu.className}>
          <Header />
          {children}
          <Footer />
        </body>
      </html>
    </SectionProvider>
  );
}
