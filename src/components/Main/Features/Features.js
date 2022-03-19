import style from './Features.module.css'

import firstIcon from '../../../Assets/img/card-icon-1.svg'
import secondIcon from '../../../Assets/img/card-icon-2.svg'
import thiredIcon from '../../../Assets/img/card-icon-3.svg'

const Features = () => {
    return (
        <div className={style.features}>
            <section className={style.conteiner}>
                <h1 className={style.featuresHeader}>Features</h1>
                <p style={{ fontSize: '16px' }}>Get The Most Out of Your Work</p>
                <div className={style.cardContainer}>
                    <div className={style.card}>
                        <div className={style.cardContent}>
                            <img className={style.cardImg} src={firstIcon} alt='icon' />
                            <h2>Invoice Generating</h2>
                            <p>Track billable time and instantly generate the amount to be paid in a form of invoice to send to your clients.</p>
                        </div>
                    </div>
                    <div className={style.card}>
                        <div className={style.cardContent}>
                            <img className={style.cardImg} src={thiredIcon} alt='icon' />
                            <h2>Real-time reports</h2>
                            <p>Have a full understanding of where your team is heading by analyzing their performance in real-time reports.</p>
                        </div>
                    </div>
                    <div className={style.card}>
                        <div className={style.cardContent}>
                            <img className={style.cardImg} src={secondIcon} alt='icon' />
                            <h2>Time Tracking with Screenshots</h2>
                            <p>See how your employees are spending their working time with the help of 4 different screenshot modes.</p>
                        </div>
                    </div>
                </div>
                <a className={style.more}>More Features</a>
            </section>
        </div>
    )
}

export default Features;