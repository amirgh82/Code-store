import React, { useState, useEffect } from 'react'

export default function LandingCounter({ count }) {

    const [courseCounter, setCourseCounter] = useState(0)

    useEffect(() => {
        let interval = setInterval(() => {
            setCourseCounter(prevCounter => prevCounter + 1)
        }, 5)

        if (courseCounter === count) {
            clearInterval(interval)
        }

        return () => clearInterval(interval)
    }, [courseCounter]);



    return <span className="landing-status__count">{courseCounter}</span>
}
