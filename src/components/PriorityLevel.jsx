import React, { Component } from 'react'

import '../assets/style/PriorityLevel.css'

export class PriorityLevel extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
        }
        this.handleClick = this.handleClick.bind(this);
    }   

    /**
     * handles the click event on the priority level component 
     * after setting the css to on from this priority level
     * and lower in the same priority scale
     */
    handleClick(){
        this.props.taskPriorityChange(this.props.level);
    }
    

    render() {
        const onClassName = this.props.on ? "on" : "off";
        return (
            <div className={"level" + " " + onClassName} onClick={this.handleClick}>
                
            </div>
        )
    }
}

export default PriorityLevel
