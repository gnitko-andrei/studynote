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
                                className="btn btn-success btn-sm float-right" data-toggle="modal"
                                data-target="#newNoteModal">
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

                <div className="modal fade" id="newNoteModal" tabIndex="-1" role="dialog"
                     aria-labelledby="newNoteModalTitle" aria-hidden="true">
                    <div className="modal-dialog modal-lg" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="newNoteModalTitle">Новая заметка</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <form>
                                <div className="modal-body">

                                    <div className="form-group">
                                        <label htmlFor="projectName">Название</label>
                                        <input type="text" className="form-control" id="projectName"/>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="projectName">Ссылка</label>
                                        <input type="text" className="form-control" id="projectName"/>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="projectDescription">Описание</label>
                                        <textarea className="form-control" id="projectDescription" rows="5"></textarea>
                                    </div>
                                </div>
                                <div className="modal-footer">
                                    <button type="submit" className="btn btn-primary">Создать</button>
                                    <button type="button" className="btn btn-secondary" data-dismiss="modal">Закрыть
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}