import React, {Component} from 'react';

import './notes-list-item.css';
import DeleteButton from "../../../../../../buttons/delete-button";

export default class NotesListItem extends Component {

    render() {
        const {editNoteHandler} = this.props;
        return (
            <a href="#" className="list-group-item list-group-item-action">{this.props.noteName}
                <DeleteButton/>
                <button type="button"
                        className="btn btn-outline-info btn-sm float-right" onClick={editNoteHandler}>
                    <i className="fa fa-edit"></i>
                </button>
            </a>
        )
    }
}