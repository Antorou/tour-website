import React from 'react';
import { useLanguage } from '../i18n/LanguageContext';

const LanguageSwitcher = () => {
  const { language, changeLanguage } = useLanguage();

  return (
    <div className="language-switcher">
      <button 
        className={`px-2 py-1 mx-1 rounded ${language === 'en' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
        onClick={() => changeLanguage('en')}
      >
        EN
      </button>
      <button 
        className={`px-2 py-1 mx-1 rounded ${language === 'fr' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
        onClick={() => changeLanguage('fr')}
      >
        FR
      </button>
    </div>
  );
};

export default LanguageSwitcher; 