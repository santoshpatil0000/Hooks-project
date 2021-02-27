import React, { Component } from 'react'

class ClassCount3 extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
           // firstName:'',
            //lastName:'',
            name : {},

        }
    }

    eventChangefirstName = (e) => {
        this.setState(() => ({
            lastName:e.target.value
        }))
    }

    eventChangelastName = (e) => {
      this.setState(() => ({
          firstName:e.target.value
      }))
    }

    convertObject = () => {
        const name = {}
        const isValid = true
        if (isValid.trim()) {
            name.firstName = this.state.firstName
            isValid=false
        }
        if (isValid.trim()) {
            name.lastName = this.state.lastName
            isValid=false
        }
        this.setState({name})
        return isValid
    }
    
    render() {
        const {firstName, lastName, name} = this.state
        return (
            <div>
                <form>
                <input type='text' value={name.firstName} onChange={this.eventChangefirstName} />
                <input type='text' value={name.lastName} onChange={this.eventChangelastName}/>
                <h3>Your first name: {name.firstName}</h3>
                <h3>Your last name: {name.lastName}</h3>
                <h2>{JSON.stringify(name)}</h2>
                </form>
            </div>
        )
    }
}

export default ClassCount3
