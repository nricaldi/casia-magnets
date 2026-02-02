import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';

import Header from './ui/header/header';
import Footer from './ui/footer/footer';

import { CartProvider } from './providers/cart-provider';
import { UserProvider } from './providers/user-provider';

import { createClient } from '../lib/supabase/server';

import './globals.css';

const poppins = Poppins({
  display: 'swap',
  subsets: ['latin'],
  variable: '--font-poppins',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
});

export const metadata: Metadata = { title: 'Casia Magnets', description: '' };

export default async function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const supabase = await createClient();
  const {
    data: { user }
  } = await supabase.auth.getUser();

  return (
    <html lang="en">
      <body className={`${poppins.variable}`}>
        <UserProvider initialUser={user}>
          <CartProvider>
            <Header />
            {children}
          </CartProvider>
        </UserProvider>
        <Footer />
      </body>
    </html>
  );
}
