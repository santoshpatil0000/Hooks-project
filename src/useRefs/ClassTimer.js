import React, { Component } from 'react'

class ClassTimer extends Component {
    Interval
    constructor(props) {
        super(props)
    
        this.state = {
             Timer: 0
        }
    }

    componentDidMount() {
       this.Interval = setInterval(() => {
           this.setState((prevCount) => ({
               Timer : prevCount.Timer + 1
           })) 
        }, 1000);
    }

    componentWillUnmount() {
        clearInterval(this.Interval)
    }
    
    render() {
        return (
            <div>
                Timer for Class - {this.state.Timer}
                <div>
                    <button onClick={() =>{clearInterval(this.Interval)}} >Clear Class</button>
                </div>
            </div>
        )
    }
}

export default ClassTimer
