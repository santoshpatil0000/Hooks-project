import React, {useState, useEffect, useRef} from 'react'

function FuncTimer() {

    const [timer, setTimer] = useState(0)
    const timerRef = useRef()

    useEffect(() => {
       timerRef.current = setInterval(() => {
            setTimer((prevTimer) => (prevTimer + 1))
        }, 1000)
        return () => {
            clearInterval(timerRef.current)
        }
    }, [])

    return (
        <div>
            Timer for Hook- {timer}
            <div>
                <button onClick={() =>clearInterval(timerRef.current)}>Clear Hook</button>
            </div>
        </div>
    )
}

export default FuncTimer
