import logo from '../../../Assets/img/Logo.png'
import facebook from '../../../Assets/img/facebook.png'
import youtube from '../../../Assets/img/youtube.png'
import vimeo from '../../../Assets/img/vimeo.png'
import linkedin from '../../../Assets/img/linkedin.png'
import twitter from '../../../Assets/img/twitter.png'
import c from '../../../Assets/img/c.png'

import style from './FooterBottom.module.css'

const FooterBottom = () => {
    return (
        <div className={style.footerBottom}>
            <div className={style.footerLeft}>
                <img className={style.logo} src={logo} width={166} alt='logo' />
                <div className={style.copywrite}>
                    <img src={c} width={18.3} />
                    <span className={style.footerYear}>2021</span>
                </div>
            </div>
            <div className={style.footerRight}>
                <img className={style.footerIcons} src={youtube} alt='icon' />
                <img className={style.footerIcons} src={vimeo} alt='icon' />
                <img className={style.footerIcons} src={facebook} alt='icon' />
                <img className={style.footerIcons} src={twitter} alt='icon' />
                <img className={style.footerIcons} src={linkedin} alt='icon' />
            </div>
        </div>
    )
}

export default FooterBottom;