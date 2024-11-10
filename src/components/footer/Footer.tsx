import style from "./Footer.module.css";

//pridat loga na vhodne miesto

const Footer = () => {
    return (
        <div className={style.footer}>
            <div className={style.footerOverlay}>
                <p className={style.footerText}>Stanislav Spodniak</p>
                <p className={style.footerText}>Stanislav Spodniak</p>
                <div className={style.footerBottom}>
                    <p>Copyright © 2024 EASE. All rights reserved.</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;
