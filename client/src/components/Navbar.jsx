import React, { Component } from "react";
import { Link } from "react-router-dom";
import logo from '../to-do-list.png'

class Navbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
                <img src={logo} width="50" height="50" style= {{marginRight:'30px',marginLeft:'30px'}} alt="ToDoIcon" />
                <Link to="/" className="navbar-brand">TODO Tasks</Link>
                <div className="collapse navbar-collapse">
                    <ul className="navbar-nav">
                        <li className="navbar-item">
                            <Link to="/" className="nav-link">Tasks</Link>
                        </li>
                        <li className="navbar-item">
                            <Link to="/create" className="nav-link">Create Task</Link>
                        </li>
                        <li className="navbar-item">
                            <Link to="/course" className="nav-link">Create Course</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
}

export default Navbar;