import React, {Component} from 'react';

import './notes-list-item.css';

export default class NotesListItem extends Component {

    render() {
        const {editNoteHandler} = this.props;
        return (
            <a href="#" className="list-group-item list-group-item-action">{this.props.noteName}
                <button type="button"
                        className="btn btn-outline-danger btn-sm float-right mx-1">
                    <i className="fa fa-trash-o"></i>
                </button>
                <button type="button"
                        className="btn btn-outline-info btn-sm float-right" onClick={editNoteHandler}>
                    <i className="fa fa-edit"></i>
                </button>
            </a>
        )
    }
}