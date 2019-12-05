import React, {Component} from 'react';

import './notes-list.css';
import ProjectsListItem from "../../../../projects-list/projects-list-item";
import NotesListItem from "./notes-list-item";

export default class NotesList extends Component {
    render() {
        return (
            <div className="notes-list">
                <div className="btn-group-vertical m-2 filter" role="group">
                    <button type="button" className="btn btn-outline-info">Посмотреть позже</button>
                    <button type="button" className="btn btn-outline-primary">Изучаю</button>
                    <button type="button" className="btn btn-outline-secondary">Завершённые</button>
                </div>
                <div className="list-group">
                    <div className="list-group-item list-group-item-action active">

                        <button type="button"
                                className="btn btn-success btn-sm float-right">
                            <i className="fa fa-plus"></i>
                        </button>
                    </div>
                    <NotesListItem noteName={'Note1'}/>
                    <NotesListItem noteName={'Note2'}/>
                    <NotesListItem noteName={'Note3'}/>
                    <NotesListItem noteName={'Note4'}/>
                    <NotesListItem noteName={'Note5'}/>
                    <NotesListItem noteName={'Note6'}/>
                </div>
            </div>
        )
    }
}