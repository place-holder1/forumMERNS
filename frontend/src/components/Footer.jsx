import style from "../styles/footer.module.css";

const Footer = () => {
    return (
        <footer className={style.footer}>
            <div className={style.footerContent}>
                <p className={style.footerText}>Music Downloader</p>
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