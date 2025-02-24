import React, { Component } from 'react';
import axios from "axios";

class CreateCourse extends Component {
    constructor(props){
        super();
        this.state = {
            coursename: ""
        }
        this.onChangeCoursename = this.onChangeCoursename.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChangeCoursename(e) {
        this.setState({ coursename: e.target.value})
    }

    onSubmit(e) {
        e.preventDefault();
        const course = {
            coursename: this.state.coursename,
        }

        console.log(course);

        axios.post('http://localhost:5000/courses/add', course)
            .then(res => console.log(res.data));
       
        this.setState({
            coursename: ''
        })
    }
    
    render() { 
        return ( 
            <div className="container">
                <h3>Create New Course</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Course: </label>
                        <input
                            type="text" required
                            className="form-control"
                            value={this.state.coursename}
                            onChange={this.onChangeCoursename}
                        />
                    </div>
                    <br/>
                    <div className="form-group">
                        <input type="submit" value="Create Course" className="btn btn-primary" />
                    </div>
                </form>
            </div>
         );
    }
}
 
export default CreateCourse;