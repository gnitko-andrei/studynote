import React, {Component} from 'react';

import './projects-list.css';
import ProjectsListItem from "./projects-list-item";
import AddButton from "../../../common/buttons/add-button";
import requests from "../../../../requests/requests";


export default class ProjectsList extends Component {
    constructor(props){
        super(props);
        this.state = {
            projectName: '',
            projectDescription: ''
        }
    }
    newProject(project) {
        const {postAction} = requests;
        postAction("/projects", project)
    }

    handleInputChange = (event) => {
        const value = event.target.value;
        const name = event.target.name;
        this.setState({
            [name]: value
        });
    };

    handleSubmit = (event) => {
        const {projectName, projectDescription} = this.state;
        const project = {
            name: projectName,
            description: projectDescription
        };
        this.newProject(project);
    };

    render() {
        const {projects, setCurrentProject} = this.props;
        return (
            <div className="project-list col-lg-3 ml-4">
                <div className="list-group">
                    <div className="list-group-item list-group-item-action active">
                        Проекты
                        <AddButton modalId="#newProjectModal"/>
                    </div>
                    {projects.map((project) =>
                        <ProjectsListItem key={project.id}
                                          project={project}
                                          setCurrentProject={setCurrentProject}/>
                    )}
                </div>

                <div className="modal fade" id="newProjectModal" tabIndex="-1" role="dialog"
                     aria-labelledby="newProjectModalTitle" aria-hidden="true">
                    <div className="modal-dialog modal-lg" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="newProjectModalTitle">Новый проект</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <form onSubmit={this.handleSubmit}>
                                <div className="modal-body">

                                    <div className="form-group">
                                        <label htmlFor="projectName">Название</label>
                                        <input type="text" className="form-control" id="projectName"
                                               name="projectName"
                                               onChange={this.handleInputChange} value={this.state.projectName}/>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="projectDescription">Описание</label>
                                        <textarea className="form-control" id="projectDescription"
                                                  name="projectDescription" rows="5"
                                                  onChange={this.handleInputChange} value={this.state.projectDescription}/>
                                    </div>
                                </div>
                                <div className="modal-footer">
                                    <button type="submit" className="btn btn-primary">Создать</button>
                                    <button type="button" className="btn btn-secondary" data-dismiss="modal">Закрыть
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}