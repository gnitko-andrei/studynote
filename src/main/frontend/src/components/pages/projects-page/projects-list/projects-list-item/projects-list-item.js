import React, {Component} from 'react';

import './projects-list-item.css'

export default class ProjectsListItem extends Component {
    handleClick = () => {
        const {project, setCurrentProject} = this.props;
        setCurrentProject(project);
    };

    render() {
        const {project} = this.props;
        return (
            <button onClick={this.handleClick} className="list-group-item list-group-item-action">
                {project.name}
            </button>
        );
    }

}