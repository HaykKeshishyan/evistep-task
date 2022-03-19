import style from './Faqs.module.css'
import arrow from '../../../Assets/img/arrow.png'

const Faqs = () => {
    return (
        <div className={style.faqs}>
            <section style={{ margin: 'auto' }}>
                <h1 className={style.faqHeader}>FAQs</h1>
                <div className={style.faqline}>
                    <div>
                        <p className={style.lineHeader}>Can I choose the currency for the generated amount?</p>
                        <p>Yes, if you are the Owner of the workspace you can choose your preferred currency from the drop-down list of profile settings.</p>
                    </div>
                    <img className={style.arrow} src={arrow} width={16} alt='arrow' />
                </div>
                <div className={style.faqline}>
                    <div>
                        <p className={style.lineHeader}>Where can I view the amount reports?</p>
                        <p>You can find the amount reports on the timesheet reports page. You can view them both on hours and amounts.</p>
                    </div>
                    <img className={style.arrow} src={arrow} width={16} alt='arrow' />
                </div>
                <div className={style.faqline}>
                    <div>
                        <p className={style.lineHeader}>How can I set an hourly rate?</p>
                        <p>You can go to members page from your dashboard, select your preferred contract and put an hourly rate for a certain team member.</p>
                    </div>
                    <img className={style.arrow} src={arrow} width={16} alt='arrow' />
                </div>
                <div className={style.faqline}>
                    <div>
                        <p className={style.lineHeader}>Who can set an hourly rate?</p>
                        <p>The owner and also the executive manager if the owner gives permission to him/her.</p>
                    </div>
                    <img className={style.arrow} src={arrow} width={16} alt='arrow' />
                </div>
            </section>
        </div>
    )
}

export default Faqs;