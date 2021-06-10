import React, { Component } from 'react'

import DoneTask from '../components/DoneTask.jsx'

export class Done extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             showDone: false
        }
        this.toggleShowDone = this.toggleShowDone.bind(this);
    }

    /**
     * toggle to the state of showDone which has for goal to 
     * show or hide the done tasks (using prevState)
     */
    toggleShowDone(){
        this.setState((prevState, props) => ({showDone: !prevState.showDone}));
    }
    

    render() {
        let taskList;
        let btnText;
        if(this.state.showDone){
            taskList = this.props.tasks
            .map(task => 
                    <DoneTask 
                        {...task}  
                        key={task.id} 
                        id={task.id}
                    />);
            btnText = " - ";
        } else {
            btnText = "+("+this.props.tasks.length+")";
        }
        return (
            <div className="tasklist">
                <h3>Taches Termines <button onClick={this.toggleShowDone}>{btnText}</button></h3>
                {taskList}
            </div>
        )
    }
}

export default Done
