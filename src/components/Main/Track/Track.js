import style from './Track.module.css'

const Track = () => {
    return (
        <div className={style.track}>
            <div className={style.contentContainer}>
                <section className={style.content}>
                    <h1 className={style.trackHeader} >Track Billable Hours with WebWork Time Tracker</h1>
                    <div className={style.inputs}>
                        <input className={style.input} type='email' placeholder='your e-mail adress' ></input>
                        <button className={style.button}>Start 7 Days Free Trial</button>
                    </div>
                    <p className={style.use}>Use now, pay in 30 days. No credit card required</p>
                </section>
            </div>
            <div className={style.cube}>
            </div>
        </div>
    )
}

export default Track;