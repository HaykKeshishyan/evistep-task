import style from './Permissions.module.css'
import workspace from '../../../Assets/img/workspace-img.png'
import profile1 from '../../../Assets/img/profile1.png'
import profile2 from '../../../Assets/img/profile2.png'
import profile3 from '../../../Assets/img/profile3.png'
import profile4 from '../../../Assets/img/profile4.png'
import profile5 from '../../../Assets/img/profile5.png'

const Permissions = () => {
    return (
        <div className={style.permissions}>
            <p className={style.yellowHeader}>Workspace Permissions</p>
            <p className={style.header}>Financial Permissions for Member Types</p>
            <div className={style.content}>
                <div className={style.choose}>
                    <div style={{ borderLeft: '3px solid #8276FF' }} className={style.chooseCard}>
                        <div className={style.cardHead}>
                            <img width={32.38} src={profile1} alt='profile' />
                            <span className={style.name}>Owner</span>
                        </div>
                        <p style={{ width: '350px' }}>Owner is eligible to set up the access of financial information on a workspace level.</p>
                    </div>
                    <div style={{ borderLeft: '3px solid #FFB546' }} className={style.chooseCard}>
                        <div className={style.cardHead}>
                            <img width={32.38} src={profile2} alt='profile' />
                            <span className={style.name}>Executive Manager</span>
                        </div>
                    </div>
                    <div style={{ borderLeft: '3px solid #6385FD' }} className={style.chooseCard}>
                        <div className={style.cardHead}>
                            <img width={32.38} src={profile3} alt='profile' />
                            <span className={style.name}>Project Manager</span>
                        </div>
                    </div>
                    <div style={{ borderLeft: '3px solid #33DBA8' }} className={style.chooseCard}>
                        <div className={style.cardHead}>
                            <img width={32.38} src={profile4} alt='profile' />
                            <span className={style.name}>Employee</span>
                        </div>
                    </div>
                    <div style={{ borderLeft: '3px solid #FD779F' }} className={style.chooseCard}>
                        <div className={style.cardHead}>
                            <img width={32.38} src={profile5} alt='profile' />
                            <span className={style.name}>Client</span>
                        </div>
                    </div>
                </div>
                <img src={workspace} width={736.5} />
            </div>
        </div>
    )
}

export default Permissions;