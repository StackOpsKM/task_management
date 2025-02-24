import React, { Component } from 'react';
import { Link } from "react-router-dom";
import axios from "axios";

const Task = props => (
    <tr>
        <td>{props.task.coursename}</td>
        <td>{props.task.description}</td>
        <td>{props.task.duration}</td>
        <td>{props.task.date.substring(0,10)}</td>
        <td>{props.task.priority}</td>
        <td>
            <button className="btn btn-secondary"><Link to={"/edit/"+props.task._id} style={{color:"white"}}>Edit</Link></button> | <button className="btn btn-danger" onClick={() => {props.deleteTask(props.task._id) }}>Delete</button>
        </td>
    </tr>
)

class TasksList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tasks: []
        }

        this.deleteTask = this.deleteTask.bind(this);
    }

    componentDidMount() {
        axios.get('http://localhost:5000/tasks/')
            .then(res => {
                this.setState({ tasks: res.data })
            })
            .catch(error => console.log(error));
    }

    deleteTask(id) {
        axios.delete('http://localhost:5000/tasks/' +id)
            .then(res => console.log(res.data));

        this.setState({ tasks: this.state.tasks.filter(el => el._id !== id)})
    }

    taskList() {
        return this.state.tasks.map(currentTask=> {
            return <Task task={currentTask} deleteTask={this.deleteTask} key={currentTask._id} />
        })
    }

    render() { 
        return ( 
            <div className="container">
                <h3>Tasks </h3>
                <table className="table">
                    <thead className="thead-light">
                        <tr>
                            <th>CourseName</th>
                            <th>Description</th>
                            <th>Duration(in minutes)</th>
                            <th>Date</th>
                            <th>Priority</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.taskList()}
                    </tbody>
                </table>
            </div>
         );
    }
}
 
export default TasksList;