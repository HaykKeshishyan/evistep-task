import style from './Footer.module.css'
import FooterBottom from './FooterBottom/FooterBottom';
import FooterTop from './FooterTop/FooterTop'

const Footer = () => {
    return (
        <div className={style.footer}>
            <FooterTop />
            <FooterBottom />
        </div>
    )
}

export default Footer;