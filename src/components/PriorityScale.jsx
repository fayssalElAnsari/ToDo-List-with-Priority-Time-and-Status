import React, { Component } from 'react'

import '../assets/style/PriorityScale.css'

import PriorityLevel from './PriorityLevel.jsx'

export class PriorityScale extends Component {

    constructor(props) {
        super(props)

        this.state = {
            
        }
        this.taskPriorityChange = this.taskPriorityChange.bind(this)
    }

    /**
     * propagate to the parent after setting the state of the priority to 
     * the one that was passed in the child
     * @param {*} lvl 
     */
    taskPriorityChange(lvl){
        this.setState({level: lvl}, this.props.taskPriorityChange(lvl));
    }

    render() {
        let priorities = [];
        let i;
        let on = true;
        for( i = 1; i < this.props.nbLevels; i++){
            if(i > this.props.priority){
                on = false;
            }
            priorities.push(<PriorityLevel key={i} 
                level={i} 
                taskPriorityChange={this.taskPriorityChange}
                on={on}
            />);
        } 
                    
        return (
            <div className="scale">
                {priorities}({this.props.priority})
            </div>
        )
    }

    
}

export default PriorityScale
