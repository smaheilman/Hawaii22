import React, {useState, useEffect} from 'react';
import dateimg from "../../assets/images/summer-vacation.png"


const Countdown = () => {
    const [days, setDays] = useState(10)
    const [hours, setHours] = useState(10)
    const [isLoading, setIsLoading] = useState(true)

    useEffect (() => {
    const countdown = () => {
        const endDate = new Date("September 2, 2022 00:10:00").getTime()
        const today = new Date().getTime()

        const timeDiff = endDate - today

        const seconds = 1000
        const minutes = seconds * 60
        const hours = minutes * 60
        const days = hours * 24

        let timeDays = Math.floor((timeDiff / days))
        let timeHours = Math.floor((timeDiff % days) / hours)
        
        timeHours = timeHours < 10 ? "0" + timeHours : timeHours

        setDays(timeDays)
        setHours(timeHours)
        setIsLoading(false)

    } 
    countdown();
    }, [])


    return (
        <div>
            {isLoading ? (<h1>Loading...</h1>) : (
            <section className='container'>
            <div className='countdown'>
                <h2 className='cdHead'>
                    <img src={dateimg} alt="calendar" className="dateImg"/>
                    Countdown
                </h2>
                <article className='days'>
                    <h3 className='cdText'>Days</h3>
                    <p className='cdText'>{days}</p>
                </article>
                <article className='hours'>
                    <h3 className='cdText'>Hours</h3>
                    <p className='cdText'>{hours}</p>
                </article>
            </div>
            </section>)}
        </div>
   );
}

export default Countdown;
