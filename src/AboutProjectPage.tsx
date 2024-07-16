import Footer from "./components/Footer";
import Header from "./components/Header"
import { useTranslation } from 'react-i18next';

const AboutProjectPage = () => {
    const { t } = useTranslation();

    return (
        <>
            <Header />
            <h2>{t('aboutPageTitle')}</h2>
            <Footer />
        </>
    )
}

export default AboutProjectPage