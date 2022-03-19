import style from './Billable.module.css'
import list from '../../../Assets/img/list.png'
import billableHours from '../../../Assets/img/billable-hours.png'

const Billable = () => {
    return (
        <div className={style.billable}>
            <section className={style.billableTop}>
                <img src={billableHours} width={382} alt='billalbe-hours' />
                <h5 className={style.billableHead}>Set an hourly rate to your contracts to mark them as billable. Get amount reports and generate invoices to get paid.</h5>
                <button className={style.button}>Start 7 Days Free Trial</button>
                <p className={style.use}>Use now, pay in 30 days. No credit card required</p>
            </section>
            <div className={style.image}>
                <img className={style.list} src={list} alt='list' />
            </div>
        </div>
    )
}

export default Billable;