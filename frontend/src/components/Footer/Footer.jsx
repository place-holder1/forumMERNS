import style from "./footer.module.css";

const Footer = () => {
    return (
        <footer className={style.footer}>
            <div className={style.footerContent}>
                <h1 className={style.footerText}>Valley Of Secrets</h1>
                <div className={style.links}>
                    <a href="/about" className={style.link}>About</a>
                    <a href="/privacy" className={style.link}>Privacy</a>
                    <a href="/terms" className={style.link}>Terms</a>
                    <a href="/contact" className={style.link}>Contact</a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;