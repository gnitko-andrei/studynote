import React, {Component} from 'react';

import './notes-list-item.css';

export default class NotesListItem extends Component {

    render() {
        const {noteName} = this.props;
        return (
            <a href="#" className="list-group-item list-group-item-action">
                {noteName}
            </a>
        )
    }
}