import React, { Component } from 'react'

import '../assets/style/doneButton.css'

export class DoneButton extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             
        }

        this.taskDone = this.taskDone.bind(this);
    }

    /**
     * propagate to the parent component and set the task to done
     */
    taskDone(){
        this.props.taskDone();
    }
    
    render() {
        return (
            <div className="doneButton" onClick={this.taskDone}>
                <button>✓</button>
            </div>
        )
    }
}

export default DoneButton
