import React, { Component } from 'react'

class ClassCount1 extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             count: 0
        }
    }

    componentDidMount() {
        document.title = `you have been clicked ${this.state.count} times`
    }

    componentDidUpdate() {
        document.title = `you clicked ${this.state.count} times`
    }
    
    render() {
        return (
            <div>
                <button onClick={()=>{this.setState({count:this.state.count + 1})}}>you clicked {this.state.count} times</button>
            </div>
        )
    }
}

export default ClassCount1
