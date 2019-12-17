import React, {Component} from 'react';

import './note-info.css'
import EditButton from "../../../../../../common/buttons/edit-button";
import DeleteButton from "../../../../../../common/buttons/delete-button";
import requests from "../../../../../../../requests/requests";

function EditNote(props) {
    const {currentNote} = props;
    return (
        <>
            <form className="m-3">
                <div className="form-group">
                    <label htmlFor="noteName">Название</label>
                    <input type="text" className="form-control" id="noteName"
                           defaultValue={currentNote.name} required>
                    </input>
                </div>
                <div className="form-group">
                    <label htmlFor="noteLink">Ссылка</label>
                    <input type="text" className="form-control" id="noteLink"
                           defaultValue={currentNote.link} required>
                    </input>
                </div>
                <div className="form-group">
                    <label htmlFor="noteStatus">Статус</label>
                    <div className="btn-group-vertical m-2" role="group" id="noteStatus">
                        <button type="button" className="btn btn-outline-info">Посмотреть позже</button>
                        <button type="button" className="btn btn-outline-primary">Изучаю</button>
                        <button type="button" className="btn btn-outline-secondary">Завершённые</button>
                    </div>
                </div>

                <div className="form-group">
                    <label htmlFor="projectDescription">Описание</label>
                    <textarea className="form-control" id="projectDescription" rows="5"
                              defaultValue={currentNote.description}>
                </textarea>
                </div>
                <button type="submit" className="btn btn-primary mx-1">Сохранить
                </button>
                <button type="button" className="btn btn-secondary mx-1" onClick={props.editNoteHandler}>Отмена</button>
            </form>
        </>
    )
}

function NoteBody(props) {
    const {currentNote, editNoteHandler, deleteNoteHandler} = props;
    return (
        <>
            <h3 className="my-3">
                {currentNote.name}
                <EditButton onClick={editNoteHandler}/>
                <DeleteButton onSubmit={deleteNoteHandler} contentId={`Note${currentNote.id}`}/>
            </h3>
            <h4>Статус</h4>
            <p>{currentNote.status}</p>
            <h4>Ссылка</h4>
            <a href={currentNote.link}>{currentNote.link}</a>
            <h4>Описание</h4>
            <p>{currentNote.description}</p>
        </>
    )
}

export default class NoteInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            editNote: false
        }
    }

    editNoteHandler = () => {
        this.setState(state => ({
            editNote: !state.editNote
        }));
    };

    deleteNote() {
        const {deleteAction} = requests;
        const {currentNote} = this.props;
        deleteAction(`/notes/${currentNote.id}`)
    }

    deleteNoteHandler = (event) => {
        this.deleteNote()
    };

    render() {
        const {editNote} = this.state;
        const {currentNote} = this.props;
        if (!currentNote) {
            return (<h5>Выберите заметку из списка</h5>)
        }
        return (
            <>
                {editNote ? <EditNote currentNote={currentNote} editNoteHandler={this.editNoteHandler}/> :
                    <NoteBody currentNote={currentNote} deleteNoteHandler={this.deleteNoteHandler} editNoteHandler={this.editNoteHandler}/>}
            </>
        )
    }
}