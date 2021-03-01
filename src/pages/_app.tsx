import GlobalStyles from 'styles/global';

import AppProvider from 'context';

function MyApp({ Component, pageProps }) {
  return (
    <AppProvider>
      <Component {...pageProps} />
      <GlobalStyles />
    </AppProvider>
  )
}
  
export default MyApp;
