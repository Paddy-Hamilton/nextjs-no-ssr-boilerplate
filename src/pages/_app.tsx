import '../styles/globals.css';

import { Provider } from 'react-redux';
import type { AppProps } from 'next/app';

import SafeHydrate from '@component/shared/SafeHydrate';

import store from '@app/store';

function App({ Component, pageProps }: AppProps) {
  return (
    <SafeHydrate>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </SafeHydrate>
  );
}

export default App;
