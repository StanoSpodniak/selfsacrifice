import style from "./Footer.module.css";
import { MdPlace } from "react-icons/md";
import { MdMail } from "react-icons/md";

//pridat loga na vhodne miesto

const Footer = () => {
    return (
        <div className={style.footer}>
            <div className={style.footerOverlay}>
                <div className={style.footerContainer}>
                    <div className={style.footerSection}>
                        <h2>Nazov stranky</h2>
                        <div className={style.footerSubsection}>
                            <MdPlace size={30} />
                            <div className={style.footerTextSection}>
                                <p>Tajovského 40</p>
                                <p>974 01 Banská Bystrica, Slovensko</p>
                            </div>
                        </div>
                        <div className={style.footerSubsection}>
                            <MdMail size={30} />
                            <div className={style.footerTextSection}>
                                <p>stanislav.spodniak@umb.sk</p>
                            </div>
                        </div>
                        <a href="/kontakt">
                            <button className={style.contactButton}>
                                Kontakt
                            </button>
                        </a>
                    </div>
                    <div className={style.footerSection}>
                        <h2>Navigácia</h2>
                        <div className={style.footerSubsection}>
                            <a href="/o-projekte" className={style.linkText}>
                                <p>O projekte</p>
                            </a>
                        </div>
                        <div className={style.footerSubsection}>
                            <a href="/riesitel" className={style.linkText}>
                                <p>Riešiteľ</p>
                            </a>
                        </div>
                        <div className={style.footerSubsection}>
                            <a href="/kontakt" className={style.linkText}>
                                <p>Kontakt</p>
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
                    <p>Copyright © 2024 EASE. All rights reserved.</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;
