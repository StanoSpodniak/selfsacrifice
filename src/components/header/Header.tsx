import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import style from './Header.module.css';

const Header = () => {
  const [language, setLanguage] = useState("sk");
  const [activeLink, setActiveLink] = useState("/");
  const { t, i18n } = useTranslation();

  useEffect(() => {
    return () => {
      setLanguage(localStorage.getItem("i18nextLng") || "sk");
      setActiveLink(localStorage.getItem("activeLink") || "/");
      if (location.pathname === '/') {
        localStorage.setItem('activeLink', "/");
        setActiveLink("/")
      }
    };
  }, []);

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    localStorage.setItem('i18nextLng', lng);
    setLanguage(lng);
  };

  const changeActiveLink = (lnk: string) => {
    localStorage.setItem('activeLink', lnk);
  }

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
                    <li className={style.navItem}>
                      <a className={activeLink === 'about' ? `${style.navLinkActive}` : `${style.navLink}`} href={language === "en" ? "/about-project" : "/o-projekte"} onClick={() => changeActiveLink('about')}>
                        {t('navAboutProject')}
                      </a>
                    </li>
                    <li className={style.navItem}>
                      <a className={activeLink === 'researcher' ? `${style.navLinkActive}` : `${style.navLink}`} href={language === "en" ? "/researcher" : "/riesitel"} onClick={() => changeActiveLink('researcher')}>
                        {t('navResearcher')}
                      </a>
                    </li>
                    <li className={style.navItem}>
                      <a className={activeLink === 'contact' ? `${style.navLinkActive}` : `${style.navLink}`} href={language === "en" ? "/contact" : "/kontakt"} onClick={() => changeActiveLink('contact')}>
                        {t('navContact')}
                      </a>
                    </li>
                </ul>
              </nav>
            </div>
        </header>
    </>
  )
}

export default Header