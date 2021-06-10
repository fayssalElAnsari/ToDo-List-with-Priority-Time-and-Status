import React from 'react';
import PropTypes from 'prop-types';

import '../assets/style/taskApp.css';
import AddTask from './AddTask.jsx';
import Done from './Done.jsx';
import Todo from './Todo.jsx';

import taskData from '../data/tasksData.js';

/*
 define root component
*/
export default class TaskApp extends React.Component {
  constructor(props) {
    super(props)
  
    this.state = {
       todo: [],
       done: [] 
    }

    this.initTasks = this.initTasks.bind(this);
    this.addTodoTask = this.addTodoTask.bind(this);
    this.taskDone = this.taskDone.bind(this);
    this.taskPriorityChange = this.taskPriorityChange.bind(this);
  }

  /**
   * fill the tasks array with object in an async manner
   * using the data provided in the taskData.js file
   * add a key value pair of priority: 1 to every task read
   */
  initTasks(){
    const tasksList = taskData.map(task => ({...task, priority: 1}))
    setTimeout(() => this.setState({todo: tasksList}), 750);
  }

  /**
   * change the priority level of a certain todo task
   * determined by the id
   * @param {*} id the id of the task that will be modified
   * @param {*} priorityValue the new priority level
   */
   taskPriorityChange(id, priorityValue){
    const copyTodo = [...this.state.todo];
    const updatedTodo = copyTodo.find(task => task.id == id);
    updatedTodo.priority = priorityValue;
    copyTodo.sort(function(task1, task2) { return task2.priority - task1.priority})
    this.setState({todo: copyTodo});
  }

  /**
   * used to organize the tasks by order of descending priority in the taskList
   * @param {*} task1 the first task
   * @param {*} task2 the second task
   * @returns the difference in duration between the two tasks 
   */
  compareTaskPriority(task1, task2){
    if(task1.priority > task2.priority){
      return task1;
    } else {
      return task2;
    }
  }

  /**
   * add a task object to the tasks list
   * @param {*} task 
   */
  addTodoTask(task){
    const copyTodo = [...this.state.todo];
    copyTodo.push(task);
    this.setState({todo: copyTodo});
  }

  /**
   * copy task from todo state to done and delete it from todo
   */
  taskDone(taskId){
    const copyDone = [...this.state.done];
    const copyTodo = [...this.state.todo];
    const newDoneTask = copyTodo.find( todo => todo.id == taskId);
    copyDone.push(newDoneTask);
    const updatedTodo = copyTodo.filter( todo => todo.id != taskId);
    this.setState({
      todo: updatedTodo,
      done: copyDone
    })  
  }
  
  render() {
    return (
      <div className="taskApp">
        <AddTask addTodoTask={this.addTodoTask} 
                  todo={this.state.todo} 
                  done={this.state.done}
        />

        <Todo tasks={this.state.todo} 
              initTasks={ this.initTasks} 
              taskDone={this.taskDone} 
              taskPriorityChange={this.taskPriorityChange}
        />
        <Done tasks={this.state.done}/>
      </div>
    );
  }

}


