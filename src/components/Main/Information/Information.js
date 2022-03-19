import style from './Information.module.css'
import bluePhoto from '../../../Assets/img/blue-photo.png'

const Information = () => {
    return (
        <div className={style.information}>
            <div className={style.content}>
                <div className={style.infoLeft}>
                    <h1 style={{ color: 'white' }}>Permissions to Financial Information</h1>
                    <p style={{ color: 'white' }}>The owner is eligible to give visibility of the contract's rate to certain team members. You can set up the rate visibility from the member’s list.</p>
                    <p style={{ color: 'white' }}>Setting “Show hourly rate” will mean the member is able to see all financial information related to his/her contract and role permission.</p>
                    <p style={{ color: 'white' }}>If a member has no permission to financial information,  he/she cannot view any kind of financial information, as well as is not able to generate invoices.</p>
                </div>
                <img src={bluePhoto} alt='blue-photo' />
            </div>
        </div>
    )
}

export default Information