import i18next from 'i18next';
import i18nextBackend from 'i18next-http-backend';
import React from 'react';
import ReactDOM from 'react-dom';
import { initReactI18next } from 'react-i18next';

import App from './App';

i18next
  .use(i18nextBackend)
  .use(initReactI18next)
  .init({
    fallbackLng: false,
    lng: window.i18n.lang || 'ja',
    backend: {
      loadPath: '/locale/{lng}/translation.json',
    },
    interpolation: {
      escapeValue: false,
      prefix: '{',
      suffix: '}',
    },
    react: {
      useSuspense: false,
      transEmptyNodeValue: '',
    },
  })
  .then(() => {
    ReactDOM.render(
      <React.StrictMode>
        <App />
      </React.StrictMode>,
      document.getElementById('root')
    );
  });
