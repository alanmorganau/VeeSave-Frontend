import React, { ReactNode } from 'react';
import { TamaguiProvider } from 'tamagui';
import config from '../tamagui.config';
import Header from './Header';
import Footer from './Footer';

export function TamaguiRoot({ children }: { children: ReactNode }) {
  return (
    <TamaguiProvider config={config}>
      <Header />
      {children}
      <Footer />
    </TamaguiProvider>
  );
}
