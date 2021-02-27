import React, { Component } from 'react'

class ClassCount5 extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             count: 0,
             name: ''
        }
    }

    componentDidMount() {
        document.title = `conditionally changed ${this.state.count} times`
    }

    componentDidUpdate(prevProps, prevState) {
        //useEffect conditionally changes for only count button and not for setName
        if(prevState.count !== this.state.count) {
        console.log('document title changed (ClassCount5.js')
        }
        document.title = `Again changed ${this.state.count}`
    }
    
    render() {
        return (
            <div>
                <input type='text' value={this.state.name} onChange={(e) =>{
                    this.setState(() => ({
                        name: e.target.value
                    }))
                }} />
                <button onClick={() => {
                    this.setState(() =>({
                        count: this.state.count + 1
                    }))
                }}>clicke {this.state.count} times</button>
            </div>
        )
    }
}

export default ClassCount5
