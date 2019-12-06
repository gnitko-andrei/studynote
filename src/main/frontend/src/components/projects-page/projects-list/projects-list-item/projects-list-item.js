import React, {Component} from 'react';

import './projects-list-item.css'
import DeleteButton from "../../../buttons/delete-button";


export  default class ProjectsListItem extends Component{
    render() {
        const {editProject} = this.props;
        return (
            <a href="#" className="list-group-item list-group-item-action">{this.props.projectName}
                <DeleteButton/>
                <button type="button"
                        className="btn btn-outline-info btn-sm float-right" onClick={editProject}>
                    <i className="fa fa-edit"></i>
                </button>
            </a>
        );
    }

}