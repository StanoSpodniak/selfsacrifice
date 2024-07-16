import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import style from './Header.module.css';

const Header = () => {
  const [language, setLanguage] = useState("sk");
  const { t, i18n } = useTranslation();

  useEffect(() => {
    return () => {
      setLanguage(localStorage.getItem("i18nextLng") || "sk");
    };
  }, []);

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    localStorage.setItem('i18nextLng', lng);
    setLanguage(lng);
  };

  return (
    <>
        <header>
            <div className={style.logoContainer}>
              <a href="/"><img className={style.logo} src="logo-color.svg" alt="logo-ease" /></a>
              <a href="/"><h1 className={style.title}>{t('mainTitle')}</h1></a>
            </div>
            <div className={style.navContainer}>
              <div className={style.buttonContainer}>
                <button className={language === "sk" ? `${style.buttonOn}` : `${style.buttonOff}`} onClick={() => changeLanguage('sk')}>SK</button>
                <button className={language === "en" ? `${style.buttonOn}` : `${style.buttonOff}`} onClick={() => changeLanguage('en')}>EN</button>
              </div>
              <nav className={style.navigation}>
                <ul>
                    {/*Treba farebne oznacit nav element, ktory je aktualny*/}
                    <li className={style.navItem}><a href={language === "en" ? "/about-project" : "/o-projekte"}>{t('navAboutProject')}</a></li>
                    <li className={style.navItem}><a href={language === "en" ? "/researcher" : "/riesitel"}>{t('navResearcher')}</a></li>
                    <li className={style.navItem}><a href={language === "en" ? "/contact" : "/kontakt"}>{t('navContact')}</a></li>
                </ul>
              </nav>
            </div>
        </header>
        <hr></hr>
    </>
  )
}

export default Header