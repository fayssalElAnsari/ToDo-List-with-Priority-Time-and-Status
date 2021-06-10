import React, { Component } from 'react'

import '../assets/style/tasklist.css'

import Task from './Task.jsx'

export class Todo extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            filterValue: ''
        }

        this.filterValueChanged = this.filterValueChanged.bind(this);
        this.taskPriorityChange = this.taskPriorityChange.bind(this);
        this.taskDone = this.taskDone.bind(this);
    }

    /**
     * when the addTask component is mounted fill it with tasks
     */
    componentDidMount(){
        this.props.initTasks();
    }

    /**
     * when the filter changes change the state of the filter accordingly
     * and update the showed tasks
     */
    filterValueChanged(event){
        this.setState({
            filterValue: event.target.value
        })
    }

    /**
     * propagate to parent component 
     * @param {*} taskId the id of the task to be completed
     */
    taskDone(taskId){
        this.props.taskDone(taskId);
    }

    /**
     * propagate to parent component 
     * @param {*} idTask id of task to be modified
     * @param {*} priorityValue the new priority value
     */
    taskPriorityChange(idTask, priorityValue){
        this.props.taskPriorityChange(idTask, priorityValue);
    }
    
    render() {
        const taskList = this.props.tasks
            .filter(task => task.description.toLowerCase().includes(this.state.filterValue.toLowerCase()))
            .map(task => 
                    <Task 
                        {...task}  
                        key={task.id} 
                        id={task.id}
                        taskDone={this.taskDone} 
                        taskPriorityChange={this.taskPriorityChange}
                    />);

        const nbTasks = taskList.reduce( (acc) => acc + 1, 0);
        const totalDuration = taskList.reduce( (acc, task) => acc + task.props.duration, 0);
        return (
            <div className="tasklist">
                <h3>Taches en cours</h3>
                <input ref="filterRef" placeholder="filtre" onChange={this.filterValueChanged}></input>
                <br/>
                il y a {nbTasks} taches. Pour une duree de {totalDuration}mn
                <div >
                    {taskList}
                </div>
                
            </div>
        )
    }
}

export default Todo
