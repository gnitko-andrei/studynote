import React, {Component} from 'react';

import './note-info.css'
import EditButton from "../../../../../../common/buttons/edit-button";
import DeleteButton from "../../../../../../common/buttons/delete-button";
import requests from "../../../../../../../requests/requests";

class EditNote extends Component {
    constructor(props) {
        super(props);
        this.state = {
            noteName: props.currentNote.name,
            noteLink: props.currentNote.link,
            noteStatus: props.currentNote.status,
            noteDescription: props.currentNote.description
        }
    }

    editNote(note) {
        const {currentNote} = this.props;
        const {putAction} = requests;
        putAction(`/notes/${currentNote.id}`, note)
    }

    handleInputChange = (event) => {
        const value = event.target.value;
        const name = event.target.name;
        this.setState({
            [name]: value
        });
    };

    handleSubmit = (event) => {
        const {noteName, noteStatus, noteLink, noteDescription} = this.state;
        const note = {
            name: noteName,
            link: noteLink,
            status: noteStatus,
            description: noteDescription
        };
        this.editNote(note)
    };


    render() {
        const {noteName, noteLink, noteStatus, noteDescription} = this.state;
        return (
            <>
                <form className="m-3" onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="noteName">Название</label>
                        <input type="text" className="form-control" id="noteName"
                               name="noteName" onChange={this.handleInputChange}
                               value={noteName} required>
                        </input>
                    </div>
                    <div className="form-group">
                        <label htmlFor="noteLink">Ссылка</label>
                        <input type="text" className="form-control" id="noteLink"
                               name="noteLink" onChange={this.handleInputChange}
                               value={noteLink} required>
                        </input>
                    </div>
                    <div className="form-group">
                        <label htmlFor="noteStatus">Статус</label>
                        <select className="form-control" id="noteStatus" name="noteStatus"
                                onChange={this.handleInputChange} value={noteStatus}>
                            <option>Посмотреть позже</option>
                            <option>Изучаю</option>
                            <option>Завершённые</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="noteDescription">Описание</label>
                        <textarea className="form-control" id="noteDescription" rows="5"
                                  name="noteDescription" onChange={this.handleInputChange}
                                  value={noteDescription}>
                        </textarea>
                    </div>
                    <button type="submit" className="btn btn-primary mx-1">Сохранить
                    </button>
                    <button type="button" className="btn btn-secondary mx-1" onClick={this.props.editNoteHandler}>Отмена</button>
                </form>
            </>
        )
    }
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