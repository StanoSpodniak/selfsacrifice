import { useTranslation } from 'react-i18next';

const Header = () => {
    const { t, i18n } = useTranslation();

    const changeLanguage = (lng: string) => {
      i18n.changeLanguage(lng);
    };

    return (
    <>
        <header className="App-header">
            <h1>EASE {t('mainTitle')}</h1>
            <nav>
              <ul>
                  <li><a href="">{t('navAboutProject')}</a></li>
                  <li><a href="#">{t('navResearcher')}</a></li>
                  <li><a href="#">{t('navContact')}</a></li>
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