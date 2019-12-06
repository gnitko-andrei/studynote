import React, {Component} from 'react';

import './projects-list-item.css'


export  default class ProjectsListItem extends Component{
    render() {
        const {editProject} = this.props;
        return (
            <a href="#" className="list-group-item list-group-item-action">{this.props.projectName}
                <button type="button"
                        className="btn btn-outline-danger btn-sm float-right mx-1">
                    <i className="fa fa-trash-o"></i>
                </button>
                <button type="button"
                        className="btn btn-outline-info btn-sm float-right" onClick={editProject}>
                    <i className="fa fa-edit"></i>
                </button>
            </a>
        );
    }

}