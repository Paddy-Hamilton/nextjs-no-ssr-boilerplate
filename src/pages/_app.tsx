import '../styles/globals.css';

import { Provider } from 'react-redux';
import type { AppProps } from 'next/app';
import { PersistGate } from 'redux-persist/integration/react';

import SafeHydrate from '@components/shared/SafeHydrate';

import { persistor } from '@utils/store';

import store from '@utils/store';

function App({ Component, pageProps }: AppProps) {
  return (
    <SafeHydrate>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Component {...pageProps} />
        </PersistGate>
      </Provider>
    </SafeHydrate>
  );
}

export default App;
