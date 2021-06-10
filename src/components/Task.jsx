import React, { Component } from 'react';

import '../assets/style/task.css';
import PriorityScale from './PriorityScale.jsx';
import DoneButton from './DoneButton.jsx';

export class Task extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            priority: 1,
        }

        this.taskDone = this.taskDone.bind(this);
        this.taskPriorityChange = this.taskPriorityChange.bind(this)
    }

    /**
     * after the task is mounted will set the state of priority to that passed from props
     */
    componentDidMount(){
        this.setState({priority: this.props.priority})
    }

    /**
     * propagate to parent component 
     * @param {*} taskId the id of the task to be completed
     */
    taskDone(){
        this.props.taskDone(this.props.id);
    }

    /**
     * propagate to parent and set the level of priority to that of chosen from the child
     * @param {*} lvl the new priority level to be set and passed to the parent
     */
    taskPriorityChange(lvl){
        this.setState({priority: lvl},
        this.props.taskPriorityChange(this.props.id, lvl));
    }

    render() {
        return (
            <div className="task">
                <div className="info">
                    {this.props.description}({this.props.duration}mn) 
                </div>
                <PriorityScale nbLevels={6} 
                                priority={this.state.priority}
                                taskPriorityChange={this.taskPriorityChange}
                />
                <DoneButton taskDone={this.taskDone}/>
            </div>
        )
    }
}

export default Task
