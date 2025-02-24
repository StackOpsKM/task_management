import React, { Component } from 'react';
import axios from "axios";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

class EditTask extends Component {

    constructor(props){
        super();
        this.state = {
            coursename: "",
            description: "",
            duration: 0,
            date: new Date(),
            priority:0,
            courses: []
        }
        this.onChangeCourseName = this.onChangeCourseName.bind(this);
        this.onChangeDescription = this.onChangeDescription.bind(this);
        this.onChangeDuration = this.onChangeDuration.bind(this);
        this.onChangeDate = this.onChangeDate.bind(this);
        this.onChangePriority = this.onChangePriority.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    componentDidMount() {
        axios.get('http://localhost:5000/tasks/'+this.props.match.params.id)
            .then(res => {
                this.setState({
                    coursename: res.data.coursename,
                    description: res.data.description,
                    duration: res.data.duration,
                    date: new Date(res.data.date),
                    priority: res.data.priority
                })
            })
            .catch(function (error){
                console.log(error);
            })

        axios.get('http://localhost:5000/courses/')
            .then(response => {
                if(response.data.length > 0) {
                    this.setState({ 
                        courses: response.data.map(course => course.coursename)
                    });
                }
            })
    }

    onChangeCourseName(e) {
        this.setState({ coursename: e.target.value})
    }
    onChangeDescription(e) {
        this.setState({ description: e.target.value})
    }
    onChangeDuration(e) {
        this.setState({ duration: e.target.value})
    }
    onChangeDate(date) {
        this.setState({ date: date})
    }
    onChangePriority(e) {
        this.setState({ priority: e.target.value})
    }
    onSubmit(e) {
        e.preventDefault();
        const task = {
            coursename: this.state.coursename,
            description: this.state.description,
            duration: this.state.duration,
            date: this.state.date,
            priority: this.state.priority
        }

        console.log(task);

        axios.post('http://localhost:5000/tasks/update/'+this.props.match.params.id, task)
            .then(res => console.log(res.data));

        window.location = "/";
    }
    
    render() { 
        return ( 
            <div className="container">
                <h3>Edit  </h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Course: </label>
                        <select 
                            required
                            className="form-control"
                            value={this.state.coursename}
                            onChange={this.onChangeCourseName} >
                            {
                                this.state.courses.map(function(course) {
                                    return <option key={course} value={course}>{course}</option>;
                                })
                            }
                        </select>
                    </div>
                    <div className="form-group">
                        <label>Description: </label>
                        <input
                            type="text" required
                            className="form-control"
                            value={this.state.description}
                            onChange={this.onChangeDescription}
                        />
                    </div>
                    <div className="form-group">
                        <label>Duration(in minutes): </label>
                        <input
                            type="text"
                            className="form-control"
                            value={this.state.duration}
                            onChange={this.onChangeDuration}
                        />
                    </div>
                    <div className="form-group">
                        <label>Date: </label>
                        <div>
                            <DatePicker
                                selected={this.state.date}
                                onChange={this.onChangeDate}
                            />
                        </div>
                    </div>
                    <div className="form-group">
                        <label>Priority:</label>
                        <input
                            type="text"
                            className="form-control"
                            value={this.state.priority}
                            onChange={this.onChangePriority}
                        />
                    </div>
                    <br/>
                    <div className="form-group">
                        <input type="submit" value="Edit" className="btn btn-primary" />
                    </div>
                </form>
            </div>
         );
    }
}
 
export default EditTask;