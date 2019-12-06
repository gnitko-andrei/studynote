import React, {Component} from 'react';

import './projects-page.css'
import Header from "../header";
import Footer from "../footer";
import ProjectsList from "./projects-list";
import ProjectMenu from "./project-menu";

export default class ProjectsPage extends Component {
    render() {
        return (
            <>
                <Header/>
                <div className="projects-page row">
                    <ProjectsList/>
                    <ProjectMenu/>
                </div>
                <Footer/>
            </>
        );
    }
}