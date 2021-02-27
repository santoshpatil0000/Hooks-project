import React, {useState, useMemo} from 'react'

function FuncCounter() {

    const [countOne, setcountOne] = useState(0)
    const [countTwo, setcountTwo] = useState(0)

    const increamentOne = () => {
        setcountOne((prevCount) => prevCount + 1)
    }

    const increamentTwo = () => {
        
        setcountTwo((prevCount) => prevCount + 1)
    }

    const isEven = useMemo(() => {
        let i = 0
        while (i<2000000000) {
            i++
        }
        return countOne % 2 ==0
    }, [countOne])

     
    return (
        <div>
           <div> <button onClick={increamentOne}>Count One - {countOne}</button> </div>
           <span>{isEven ? 'Even' : 'Odd'} </span>
           <div>
               <button onClick={increamentTwo}>Count Two - {countTwo}</button>
           </div>
        </div>
    )
}

export default FuncCounter

