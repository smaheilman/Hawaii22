import React, {useState, useEffect} from 'react';


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
                <article>
                    <h3>Days</h3>
                    <p>{days}</p>
                </article>
                <article>
                    <h3>hours</h3>
                    <p>{hours}</p>
                </article>
            </div>
            </section>)}
        </div>
   );
}

export default Countdown;
