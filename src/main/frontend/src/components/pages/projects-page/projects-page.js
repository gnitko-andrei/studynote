import React, {Component} from 'react';
import {Redirect} from 'react-router-dom';

import './projects-page.css'
import ProjectsList from "./projects-list";
import ProjectMenu from "./project-menu";
import requests from "../../../requests/requests";
import ErrorIndicator from "../../common/error-indicator";

export default class ProjectsPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            projects: [],
            currentProject: null,
            error: false
        }
    }

    getProjects() {
        const {getAction} = requests;
        getAction("/projects").then((data) => {
            if (data) {
                this.setState({
                    loading: false,
                    projects: data
                });
            } else {
                this.setState({
                    projects: null,
                    error: true
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
    };

    render() {
        const {loading, projects, currentProject, error} = this.state;
        const {loggedIn} = this.props;
        if(error) {
            return <ErrorIndicator/>
        }
        if (!loggedIn) {
            return <Redirect to="/login"/>
        }
        if (loading) {
            return (
                <div className="d-flex justify-content-center">
                    <div className="spinner-border text-info" role="status">
                        <span className="sr-only">Loading...</span>
                    </div>
                </div>
            )
        }
        return (
            <div className="projects-page row">
                <ProjectsList projects={projects} setCurrentProject={this.setCurrentProject}/>
                <ProjectMenu currentProject={currentProject}/>
            </div>
        );
    }
}