import { useTranslation } from 'react-i18next';
//Asi zrusit tento komponent alebo z toho urobit abstrakt komponent

const AboutProject = () => {
  const { t } = useTranslation();
  
  return (
    <>
      <p>{t('aboutProject')}</p>
    </>
  )
}

export default AboutProject