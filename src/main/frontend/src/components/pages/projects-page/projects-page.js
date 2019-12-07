import React, {Component} from 'react';

import './projects-page.css'
import ProjectsList from "./projects-list";
import ProjectMenu from "./project-menu";

export default class ProjectsPage extends Component {
    render() {
        return (
            <div className="projects-page row">
                <ProjectsList/>
                <ProjectMenu/>
            </div>
        );
    }
}