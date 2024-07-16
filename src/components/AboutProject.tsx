import { useTranslation } from 'react-i18next';


const AboutProject = () => {
  const { t } = useTranslation();
  
  return (
    <>
      <p>{t('aboutProject')}</p>
    </>
  )
}

export default AboutProject