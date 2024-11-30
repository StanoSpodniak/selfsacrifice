import style from "./ContactPage.module.css";
import { useTranslation } from "react-i18next";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import { MdPlace } from "react-icons/md";
import { MdMail } from "react-icons/md";

const ContactPage = () => {
    const { t } = useTranslation();

    return (
        <>
            <Header />
            <div className={style.titleContainer}>
                <h2 className={style.title}>{t("contactPageTitle")}</h2>
            </div>
            <div className={style.contactPageContainer}>
                <div className={style.textSection}>
                    <h2>EASE Projekt</h2>
                    <div className={style.footerSubsection}>
                        <MdPlace
                            size={25}
                            color="#1e378a"
                            className={style.footerIcon}
                        />
                        <div className={style.footerTextSection}>
                            <p>Tajovského 40</p>
                            <p>974 01 Banská Bystrica, Slovensko</p>
                        </div>
                    </div>
                    <div className={style.footerSubsection}>
                        <MdMail
                            size={25}
                            color="#1e378a"
                            className={style.footerIcon}
                        />
                        <div className={style.footerTextSection}>
                            <p>stanislav.spodniak@umb.sk</p>
                        </div>
                    </div>
                    <div className={style.footerSubsection}>
                        <a
                            href="https://www.ff.umb.sk/sspodniak/"
                            target="_blank"
                        >
                            umb.sk/sspodniak
                        </a>
                    </div>
                </div>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d21049.06248924417!2d19.122944169311506!3d48.74115972768432!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47153d89edcf15a9%3A0xf9e5061d6af2065f!2sTajovsk%C3%A9ho%2040%2C%20974%2001%20Bansk%C3%A1%20Bystrica!5e0!3m2!1ssk!2ssk!4v1583748634161!5m2!1ssk!2ssk"
                    width="50%"
                    height="250"
                    style={{ border: 0 }}
                    allowFullScreen
                    aria-hidden="false"
                    tabIndex={0}
                    title="Google Map"
                ></iframe>
            </div>
            <Footer />
        </>
    );
};

export default ContactPage;
