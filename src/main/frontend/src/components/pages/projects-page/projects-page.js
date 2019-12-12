import React, {Component} from 'react';
import {Redirect} from 'react-router-dom';

import './projects-page.css'
import ProjectsList from "./projects-list";
import ProjectMenu from "./project-menu";
import requests from "../../../requests/requests";

export default class ProjectsPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            projects: [],
            currentProject: null
        }
    }
    getProjects() {
        const {getAction} = requests;
        const f = getAction("/projects").then((data) => {
            if(data) {
                this.setState({
                    projects: data
                });
            } else {
                this.setState({
                    projects: null
                });
            }
        });
    }

    componentDidMount() {
        this.getProjects();
    }

    setCurrentProject = (project) => {
        this.setState({
            currentProject: project
        })
    }

    render() {
        const {projects, currentProject} = this.state;
        const {loggedIn} = this.props;
        if(!loggedIn) {
            return <Redirect to="/login"/>
        }
        return (
            <div className="projects-page row">
                <ProjectsList projects={projects} setCurrentProject={this.setCurrentProject}/>
                <ProjectMenu currentProject={currentProject}/>
            </div>
        );
    }
}