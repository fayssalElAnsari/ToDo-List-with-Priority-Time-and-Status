import React, { Component } from 'react'

import '../assets/style/AddTask.css'

export class AddTask extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            description: ''
        }

        this.descRef = React.createRef();
        this.timeRef = React.createRef();

        this.addBtnClickHandle = this.addBtnClickHandle.bind(this);
    }

    /**
     * handles the "addBtn" click event
     * it will create a new task object and then pass it to the 
     * function passed into addTask props which is addTask(task)
     * the value of priority is 1 by default
     */
    addBtnClickHandle(){
        const index = this.props.todo.length + this.props.done.length + 1;
        const newTask = {
            id: "T"+index,
            description: this.descRef.current.value,
            duration: Number.parseFloat(this.timeRef.current.value),
            priority: 1
        };
        this.props.addTodoTask(newTask);
    }

    render() {
        return (
            <div className="addTask">
                <input placeholder="description" ref={this.descRef}></input>
                <input type="number" min="1" max="120" defaultValue="10" ref={this.timeRef}></input>
                mn  
                <button onClick={this.addBtnClickHandle}>Add</button>
            </div>
        )
    }
}

export default AddTask
