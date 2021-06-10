import React, { Component } from 'react'

import '../assets/style/task.css'

export class DoneTask extends Component {
    render() {
        return (
            <div className="task">              
                {this.props.description}({this.props.duration}mn) (priority: {this.props.priority})
            </div>
        )
    }
}

export default DoneTask
