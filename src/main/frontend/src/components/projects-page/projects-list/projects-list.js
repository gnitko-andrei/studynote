import React, {Component} from 'react';

import './projects-list.css';
import ProjectsListItem from "./projects-list-item";

export default class ProjectsList extends Component{
    render() {
        return (
                <div className="project-list col-lg-3">
                    <div className="btn-group m-2" role="group">
                        <button type="button" className="btn btn-outline-primary">Текущие</button>
                        <button type="button" className="btn btn-outline-secondary">Завершённые</button>
                    </div>
                    <div className="list-group">
                        <div className="list-group-item list-group-item-action active">
                            Проекты
                            <button type="button"
                                    className="btn btn-success btn-sm float-right">
                                <i className="fa fa-plus"></i>
                            </button>
                        </div>
                        <ProjectsListItem projectName={'Project1'}/>
                        <ProjectsListItem projectName={'Project2'}/>
                        <ProjectsListItem projectName={'Project3'}/>
                        <ProjectsListItem projectName={'Project4'}/>
                        <ProjectsListItem projectName={'Project5'}/>
                        <ProjectsListItem projectName={'Project6'}/>
                    </div>
                </div>
        );
    }
}