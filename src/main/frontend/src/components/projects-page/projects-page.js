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
            editProject: false
        };
        this.editProjectHandler = this.editProjectHandler.bind(this);
    }

    editProjectHandler = () => {
        this.setState(state => ({
            editProject: !state.editProject
        }))
    };

    render() {
        return (
            <>
                <Header/>
                <div className="projects-page row">
                    <ProjectsList editProject={this.editProjectHandler}/>
                    <ProjectMenu editProject={this.editProjectHandler} editFlag={this.state.editProject}/>
                </div>
                <Footer/>
            </>
        );
    }

}