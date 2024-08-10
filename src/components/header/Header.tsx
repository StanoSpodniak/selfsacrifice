import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import style from './Header.module.css';
import { IoIosMenu } from 'react-icons/io';

const Header = () => {
  const [language, setLanguage] = useState("sk");
  const [activeLink, setActiveLink] = useState("/");
  const { t, i18n } = useTranslation();

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    return () => {
      setLanguage(localStorage.getItem("i18nextLng") || "sk");
      setActiveLink(sessionStorage.getItem("activeLink") || "/");
      if (location.pathname === '/') {
        sessionStorage.setItem('activeLink', "/");
        setActiveLink("/")
      }
    };
  }, []);

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    sessionStorage.setItem('i18nextLng', lng);
    setLanguage(lng);
  };

  const changeActiveLink = (lnk: string) => {
    sessionStorage.setItem('activeLink', lnk);
  }

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
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
                <div className={style.hamMenu} onClick={toggleMenu}><IoIosMenu size={40} color='white' /></div>
                <ul className={`${style.mobileNavLinks} ${isMenuOpen ? style.active : ''}`}>
                  <li><a href={language === "en" ? "/about-project" : "/o-projekte"}>{t('navAboutProject')}</a></li>
                  <li><a href={language === "en" ? "/researcher" : "/riesitel"}>{t('navResearcher')}</a></li>
                  <li><a href={language === "en" ? "/contact" : "/kontakt"}>{t('navContact')}</a></li>
                </ul>
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