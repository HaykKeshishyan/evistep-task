import amount from '../../../Assets/img/amount.png';
import style from './Amount.module.css'

const Amount = () => {
    return (
        <div className={style.amount}>
            <img width={659.5} src={amount} alt='amount' />
            <section className={style.amountRight}>
                <h1>Amount Reports</h1>
                <p>If you’re working on an hourly rate, it will be a good idea to make your contracts billable  by adding an hourly rate in the contract's settings.</p>
                <p>By doing so your tracked time will be converted into an amount and you will be able to see the reports both in hours and amounts. Amount reports show the billed amount of each member by day, week or month.</p>
            </section>
        </div>
    )
}

export default Amount;