import { useTranslation } from 'react-i18next';
import Header from './components/Header';
import Footer from './components/Footer';

const ResearcherPage = () => {
    const { t } = useTranslation();

    return (
        <>
            <Header />
            <h2>{t('researcherPageTitle')}</h2>
            <Footer />
        </>
    )
}

export default ResearcherPage