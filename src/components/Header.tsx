import { useState } from 'react';
import { useTranslation } from 'react-i18next';

const Header = () => {
  const [language, setLanguage] = useState("sk");
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    localStorage.setItem('i18nextLng', lng);
    setLanguage(lng);
  };

  return (
    <>
        <header className="App-header">
            <a href={language === "en" ? "/en/" : "/"}><h1>EASE {t('mainTitle')}</h1></a>
            <nav>
              <ul>
                  <li><a href={language === "en" ? "/en/about-project" : "/o-projekte"}>{t('navAboutProject')}</a></li>
                  <li><a href={language === "en" ? "/en/researcher" : "/riesitel"}>{t('navResearcher')}</a></li>
                  <li><a href={language === "en" ? "/en/contact" : "/kontakt"}>{t('navContact')}</a></li>
              </ul>
            </nav>
            <button onClick={() => changeLanguage('sk')}>SK</button>
            <button onClick={() => changeLanguage('en')}>EN</button>
        </header>
        <hr></hr>
    </>
  )
}

export default Header