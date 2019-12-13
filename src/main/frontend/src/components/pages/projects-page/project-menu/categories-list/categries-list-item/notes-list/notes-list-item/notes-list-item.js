import React, {Component} from 'react';

import './notes-list-item.css';

export default class NotesListItem extends Component {
    handleClick = () => {
        const {note, setCurrentNote} = this.props;
        setCurrentNote(note);
    };
    render() {
        const {note} = this.props;
        return (
            <a onClick={this.handleClick} className="list-group-item list-group-item-action">
                {note.name}
            </a>
        )
    }
}