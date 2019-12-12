import React, {Component} from 'react';
import {Redirect} from 'react-router-dom';

import './projects-page.css'
import ProjectsList from "./projects-list";
import ProjectMenu from "./project-menu";

export default class ProjectsPage extends Component {
    render() {
        const {loggedIn} = this.props;
        if(!loggedIn) {
            return <Redirect to="/login"/>
        }
        return (
            <div className="projects-page row">
                <ProjectsList/>
                <ProjectMenu/>
            </div>
        );
    }
}