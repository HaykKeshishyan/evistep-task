import logo from '../../Assets/img/Logo.png'
import style from './Header.module.css'

const Header = () => {
    return (
        <div className={style.header}>
            <div className={style.headerLeft}>
                <img className={style.logo} src={logo} width={166} alt='logo' />
            </div>
            <div className={style.headerRighteft}>
                <div>
                    <a className={style.headerNavTag}>Home</a>
                    <a className={style.headerNavTag}>Features</a>
                    <a className={style.headerNavTag}>Time Tracking</a>
                    <a className={style.headerNavTag}>Price</a>
                    <a className={style.headerNavTag}>Download</a>
                    <a className={style.headerNavTag}>Log In</a>
                    <button className={style.getStartedBtn}>
                        Get Started
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Header;