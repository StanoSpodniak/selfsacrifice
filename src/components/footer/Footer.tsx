import style from "./Footer.module.css";
import { useTranslation } from "react-i18next";
import { MdPlace } from "react-icons/md";
import { MdMail } from "react-icons/md";

//pridat loga na vhodne miesto

const Footer = () => {
    const { t } = useTranslation();

    return (
        <div className={style.footer}>
            <div className={style.footerOverlay}>
                <div className={style.footerContainer}>
                    <div className={style.footerSection}>
                        <h2>{t("footerTitle")}</h2>
                        <div className={style.footerSubsection}>
                            <MdPlace size={25} className={style.footerIcon} />
                            <div className={style.footerTextSection}>
                                <p>Tajovského 40</p>
                                <p>974 01 Banská Bystrica, Slovensko</p>
                            </div>
                        </div>
                        <div className={style.footerSubsection}>
                            <MdMail size={25} className={style.footerIcon} />
                            <div className={style.footerTextSection}>
                                <p>stanislav.spodniak@umb.sk</p>
                            </div>
                        </div>
                        <a href="/kontakt">
                            <button className={style.contactButton}>
                                {t("footerContactButton")}
                            </button>
                        </a>
                    </div>
                    <div className={style.footerSection}>
                        <h2>{t("footerNavigationTitle")}</h2>
                        <div className={style.footerSubsection}>
                            <a href="/o-projekte" className={style.linkText}>
                                <p>{t("aboutPageTitle")}</p>
                            </a>
                        </div>
                        <div className={style.footerSubsection}>
                            <a href="/riesitel" className={style.linkText}>
                                <p>{t("researcherPageTitle")}</p>
                            </a>
                        </div>
                        <div className={style.footerSubsection}>
                            <a href="/kontakt" className={style.linkText}>
                                <p>{t("contactPageTitle")}</p>
                            </a>
                        </div>
                    </div>
                    <div className={style.footerSection}>
                        <div className={style.footerSubsection}>
                            <img
                                src="./Flag_of_Ukraine.png"
                                alt="Flag of Ukraine"
                                className={style.flag}
                            />
                        </div>
                        <img
                            src="./EN_Funded by the EU NextGenEU_PANTONE.jpg"
                            alt="Logo EU"
                            className={style.logoEU}
                        />
                    </div>
                </div>
                <div className={style.footerBottom}>
                    <p>
                        Copyright © 2024 EASE Project. All rights reserved. Last
                        update: 30 November 2024
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Footer;
