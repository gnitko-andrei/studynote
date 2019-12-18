import React, {Component} from 'react';

import './project-menu.css';
import CategoriesList from "./categories-list";
import EditButton from "../../../common/buttons/edit-button";
import DeleteButton from "../../../common/buttons/delete-button";
import requests from "../../../../requests/requests";


class EditProject extends Component {
    constructor(props) {
        super(props);
        this.state = {
            projectName: props.currentProject.name,
            projectDescription: props.currentProject.description
        }
    }

    editProject(project) {
        const {currentProject} = this.props;
        const {putAction} = requests;
        putAction(`/projects/${currentProject.id}`, project)
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
        this.editProject(project)
    };


    render() {
        const {projectName, projectDescription} = this.state;
        const {editProjectHandler} = this.props;
        return (
            <form className="m-3" onSubmit={this.handleSubmit}>
                <div className="form-group">
                    <label htmlFor="projectName">Название</label>
                    <input type="text" className="form-control" id="projectName" name="projectName"
                           onChange={this.handleInputChange} value={projectName} required>
                    </input>
                </div>
                <div className="form-group">
                    <label htmlFor="projectDescription">Описание</label>
                    <textarea className="form-control" id="projectDescription" name="projectDescription" rows="5"
                              onChange={this.handleInputChange} value={projectDescription}>
                </textarea>
                </div>
                <button type="submit" className="btn btn-primary mx-1">Сохранить</button>
                <button type="button" className="btn btn-secondary mx-1" onClick={editProjectHandler}>Отмена</button>
            </form>
        )
    }

}

function ProjectInfo(props) {
    const {editProjectHandler, deleteProjectHandler, currentProject} = props;
    return (
        <>
            <h2>
                {currentProject.name}
                <EditButton onClick={editProjectHandler}/>
                <DeleteButton onSubmit={deleteProjectHandler} contentId={`Project${currentProject.id}`}/>
            </h2>

            <h4>Описание</h4>
            <p>{currentProject.description}</p>
        </>
    )
}


export default class ProjectMenu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            editProject: false
        };
        this.editProjectHandler = this.editProjectHandler.bind(this);
    }

    deleteProject() {
        const {deleteAction} = requests;
        const {currentProject} = this.props;
        deleteAction(`/projects/${currentProject.id}`)
    }

    editProjectHandler = () => {
        this.setState(state => ({
            editProject: !state.editProject
        }))
    };

    deleteProjectHandler = (event) => {
        this.deleteProject()
    };

    render() {
        const {editProject} = this.state;
        const {currentProject} = this.props;
        if (!currentProject) {
            return (<h5>Выберите проект из списка</h5>)
        }
        return (
            <div className="project-menu col-lg-8 ml-4">
                {editProject ?
                    <EditProject currentProject={currentProject} editProjectHandler={this.editProjectHandler}/> :
                    <ProjectInfo currentProject={currentProject} editProjectHandler={this.editProjectHandler}
                                 deleteProjectHandler={this.deleteProjectHandler}/>}
                <CategoriesList currentProject={currentProject}/>
            </div>
        )
    }

}