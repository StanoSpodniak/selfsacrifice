import { useTranslation } from "react-i18next";
import style from "./AboutProject.module.css";
//Asi zrusit tento komponent alebo z toho urobit abstrakt komponent
//Pridat hore mensi baner ako v POSOHU
//Dalej pridat ciele projektu
//Doba trvania projektu
//Odkaz pre informacie o vyzve a financovani projektu
//Neskor pridat sekciu Vystupy, kde uvediem aj konferenciu v Olomouci

const AboutProject = () => {
    const { t } = useTranslation();

    return (
        <>
            <p className={style.text}>{t("aboutProject")}</p>
        </>
    );
};

export default AboutProject;
