import React, {Component} from 'react';

import './projects-list.css';
import ProjectsListItem from "./projects-list-item";
import AddButton from "../../buttons/add-button";

export default class ProjectsList extends Component {
    render() {
        return (
            <div className="project-list col-lg-3 ml-4">
                <div className="btn-group m-2" role="group">
                    <button type="button" className="btn btn-outline-primary">Текущие</button>
                    <button type="button" className="btn btn-outline-secondary">Завершённые</button>
                </div>
                <div className="list-group">
                    <div className="list-group-item list-group-item-action active">
                        Проекты
                        <AddButton modalId="#newProjectModal"/>
                    </div>
                    <ProjectsListItem projectName={'Project1'}/>
                    <ProjectsListItem projectName={'Project2'}/>
                    <ProjectsListItem projectName={'Project3'}/>
                    <ProjectsListItem projectName={'Project4'}/>
                    <ProjectsListItem projectName={'Project5'}/>
                    <ProjectsListItem projectName={'Project6'}/>
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
                            <form>
                                <div className="modal-body">

                                    <div className="form-group">
                                        <label htmlFor="projectName">Название</label>
                                        <input type="text" className="form-control" id="projectName"/>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="projectDescription">Описание</label>
                                        <textarea className="form-control" id="projectDescription" rows="5"></textarea>
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