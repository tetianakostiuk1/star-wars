import React from 'react';
import { AppProps } from 'next/app';
import '@/app/styles/global.scss';

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
