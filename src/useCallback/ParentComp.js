import React,{useState, useCallback} from 'react'
import Button from './Button'
import Count from './Count'
import Title from './Title'

function ParentComp() {

    const [age, setAge] = useState(25)
    const [salary, setSalary] = useState(50000)

    const increamentAge = useCallback(() => {
        setAge((prevCount) =>prevCount + 1)
    }, [age]) 

    const increamentSalary = useCallback(() => {
        setSalary((prevCount2) =>prevCount2 + 1000)
    }, [salary])

    return (
        <div>
            <Title/>
            <Count count = {age} text = 'Age'/>
            <Button handleClick = {increamentAge} >Increament Age</Button>
            <Count count = {salary} text = 'Salary'/>
            <Button handleClick = {increamentSalary} >Increament Salary</Button>
        </div>
    )
}

export default ParentComp
