import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { persistStore } from 'redux-persist';
import { PersistGate } from "redux-persist/integration/react";
import Layout from '@layout/index';
import { store } from '@store/index';
import Loader from './components/Loader';

const persistor = persistStore(store);

const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate
        loading={<Loader />}
        persistor={persistor}
      >
        <Layout />
      </PersistGate>
    </Provider>
  </React.StrictMode>,
);
