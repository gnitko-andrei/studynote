import React, {Component} from 'react';

import './projects-page.css'
import Header from "../header";
import Footer from "../footer";
import ProjectsList from "./projects-list";
import ProjectMenu from "./project-menu";

export default class ProjectsPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            edit: true
        };
        this.editProject = this.editProject.bind(this);
    }

    editProject = () => {
        this.setState(state => ({
            edit: !state.edit
        }))
    };

    render() {
        return (
            <>
                <Header/>
                <div className="projects-page row">
                    <ProjectsList editProject={this.editProject}/>
                    <ProjectMenu editProject={this.editProject} editFlag={this.state.edit}/>
                </div>
                <Footer/>
            </>
        );
    }

}