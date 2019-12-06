import React, {Component} from 'react';

import './projects-list-item.css'

export default class ProjectsListItem extends Component {
    render() {
        const {projectName} = this.props;
        return (
            <a href="#" className="list-group-item list-group-item-action">
                {projectName}
            </a>
        );
    }

}