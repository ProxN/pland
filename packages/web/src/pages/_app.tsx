import { useState } from 'react';
import { AppProps } from 'next/app';
import { QueryClientProvider, QueryClient } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { Preflight, ThemeProvider } from '@xstyled/styled-components';
import { Theme } from '@lib/theme';
import { GlobalStyles } from '@lib/styles';
import { Toaster } from '@components/elements/Toaster';

const App = (props: AppProps) => {
  const { Component, pageProps } = props;
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            refetchOnWindowFocus: false,
          },
        },
      })
  );

  return (
    <ThemeProvider theme={{ ...Theme, colorMode: 'light' }}>
      <Preflight />
      <GlobalStyles />
      <QueryClientProvider client={queryClient}>
        <main>
          <Component {...pageProps} />
        </main>
        <ReactQueryDevtools />
      </QueryClientProvider>

      <Toaster />
    </ThemeProvider>
  );
};

export default App;
