import React from 'react';
import { useTranslation } from 'react-i18next';

const Index = () => {
  const { t, i18n } = useTranslation();

  const onToggle = async (locale) => {
    await i18n.changeLanguage(locale);
  };

  return (
    <>
      <h1>{t('page.index.title')}</h1>
      <button type="button" onClick={() => onToggle('ja')}>
        日本語
      </button>
      <button type="button" onClick={() => onToggle('en')}>
        English
      </button>
    </>
  );
};

export default Index;
