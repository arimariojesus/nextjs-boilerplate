import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';

import GlobalStyles from '@/styles/global';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Next.js - Boilerplate</title>

        <link rel="icon" href="/favicon.ico" />

        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="A simple project starter to work with TypeScript, React, NextJS and Styled-Components"
        />
      </Head>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  );
}
