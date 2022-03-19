import style from './FooterTop.module.css'

const FooterTop = () => {
    return (
        <div className={style.footerTop}>
            <div>
                <h4>Time Tracking Software</h4>
                <ul className={style.ul}>
                    <li className={style.li}>Features </li>
                    <li className={style.li}>Pricing</li>
                    <li className={style.li}>Start free trial</li>
                    <li className={style.li}>Time tracking with screenshots</li>
                </ul>
            </div>
            <div>
                <h4>Integration</h4>
                <ul className={style.ul}>
                    <li className={style.li}>Asana</li>
                    <li className={style.li}>Jira</li>
                    <li className={style.li}>Bitbucket</li>
                    <li className={style.li}>See all</li>
                </ul>
            </div>
            <div>
                <h4>Powerful Yet Simple</h4>
                <ul className={style.ul}>
                    <li className={style.li}>Monitor Employees</li>
                    <li className={style.li}>Boost Productivity</li>
                    <li className={style.li}>How to save time</li>
                    <li className={style.li}>Download tracker</li>
                </ul>
            </div>
            <div>
                <h4>Resources</h4>
                <ul className={style.ul}>
                    <li className={style.li}>Sitemap</li>
                    <li className={style.li}>Privacy Policy</li>
                    <li className={style.li}>Terms of service</li>
                    <li className={style.li}>Contact Us</li>
                </ul>
            </div>
        </div>
    )
}

export default FooterTop