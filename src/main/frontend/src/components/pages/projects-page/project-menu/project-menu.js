import React, {Component} from 'react';

import './project-menu.css';
import CategoriesList from "./categories-list";
import EditButton from "../../../common/buttons/edit-button";
import DeleteButton from "../../../common/buttons/delete-button";


function EditProject(props) {
    const {editProjectHandler, currentProject} = props;
    return (
        <form className="m-3">
            <div className="form-group">
                <label htmlFor="projectName">Название</label>
                <input type="text" className="form-control" id="projectName" defaultValue={currentProject.name}>
                </input>
            </div>
            <div className="form-group">
                <label htmlFor="projectDescription">Описание</label>
                <textarea className="form-control" id="projectDescription" rows="5"
                          defaultValue={currentProject.description}>
                </textarea>
            </div>
            <button type="submit" className="btn btn-primary mx-1" onClick={editProjectHandler}>Сохранить</button>
            <button type="button" className="btn btn-secondary mx-1" onClick={editProjectHandler}>Отмена</button>
        </form>
    );
}

function ProjectInfo(props) {
    const {editProjectHandler, currentProject} = props;
    return (
        <>
            <h2>
                {currentProject.name}
                <EditButton onClick={editProjectHandler}/>
                <DeleteButton/>
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

    editProjectHandler = () => {
        this.setState(state => ({
            editProject: !state.editProject
        }))
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
                    <ProjectInfo currentProject={currentProject} editProjectHandler={this.editProjectHandler}/>}
                <CategoriesList currentProject={currentProject}/>
            </div>
        )
    }

}