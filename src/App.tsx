import './App.css';
import Header from './components/header/Header';
import AboutProject from './components/AboutProject';
import { useTranslation } from 'react-i18next';
import Footer from './components/Footer';

//Router tutorial: https://www.youtube.com/watch?v=oTIJunBa6MA

function App() {

  const { t } = useTranslation();

  return (
    <>
      <Header />
      <h2>{t('homePageTitle')}</h2>
      <AboutProject />
      <Footer />
    </>
  )
}

export default App
