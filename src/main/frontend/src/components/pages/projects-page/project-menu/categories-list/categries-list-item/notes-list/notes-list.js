import React, {Component} from 'react';

import './notes-list.css';
import NotesListItem from "./notes-list-item";
import AddButton from "../../../../../../common/buttons/add-button";
import EditButton from "../../../../../../common/buttons/edit-button";
import DeleteButton from "../../../../../../common/buttons/delete-button";
import requests from "../../../../../../../requests/requests";

export default class NotesList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            notes: [],
            noteName: '',
            noteLink: '',
            noteDescription: ''
        };
    }

    componentDidMount() {
        const {notes} = this.props;
        this.setState({
            notes: notes
        });
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        const {notes} = this.props;
        if (prevProps.notes !== notes) {
            this.setState({
                notes: notes
            });
        }
    }

    deleteCategory() {
        const {deleteAction} = requests;
        const {category} = this.props;
        deleteAction(`/categories/${category.id}`)
    }

    deleteCategoryHandler = (event) => {
        this.deleteCategory()
    };

    newNote(note) {
        const {postAction} = requests;
        const {category} = this.props;
        console.log(note);
        postAction(`/${category.id}/notes`, note)
    }

    handleInputChange = (event) => {
        const value = event.target.value;
        const name = event.target.name;
        this.setState({
            [name]: value
        });
    };

    handleSubmit = (event) => {
        const {noteName, noteLink, noteDescription } = this.state;
        const note = {
            name: noteName,
            link: noteLink,
            description: noteDescription
        };
        this.newNote(note);
    };

    render() {
        const {notes} = this.state;
        const {setCurrentNote} = this.props;
        const {category, editCategoryHandler} = this.props;
        const categoryNameReplaced = category.name.replace(/\s+/g, '');
        if (!notes) {
            return (<></>)
        }
        return (
            <div className="notes-list">
                <h4>
                    {category.name}
                    <EditButton onClick={editCategoryHandler}/>
                    <DeleteButton onSubmit={this.deleteCategoryHandler} contentId={`Category${category.id}`}/>
                </h4>
                <div className="btn-group-vertical btn-group-sm my-2" role="group">
                    <button type="button" className="btn btn-outline-info">Посмотреть позже</button>
                    <button type="button" className="btn btn-outline-primary">Изучаю</button>
                    <button type="button" className="btn btn-outline-secondary">Завершённые</button>
                </div>
                <div className="list-group">
                    <div className="list-group-item list-group-item-action active">
                        <AddButton modalId={'#' + categoryNameReplaced + "NoteModal"}/>
                    </div>
                    {notes.map((note) =>
                        <NotesListItem key={note.id}
                                       note={note}
                                       setCurrentNote={setCurrentNote}/>
                    )}
                </div>

                <div className="modal fade" id={categoryNameReplaced + "NoteModal"} tabIndex="-1" role="dialog"
                     aria-labelledby={categoryNameReplaced + "NoteModalTitle"} aria-hidden="true">
                    <div className="modal-dialog modal-lg" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id={categoryNameReplaced + "NoteModalTitle"}>Новая заметка</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <form onSubmit={this.handleSubmit}>
                                <div className="modal-body">

                                    <div className="form-group">
                                        <label htmlFor="noteName">Название</label>
                                        <input type="text" className="form-control" id="noteName"
                                               name="noteName"
                                               onChange={this.handleInputChange} value={this.state.noteName}/>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="noteLink">Ссылка</label>
                                        <input type="text" className="form-control" id="noteLink"
                                               name="noteLink"
                                               onChange={this.handleInputChange} value={this.state.noteLink}/>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="noteDescription">Описание</label>
                                        <textarea className="form-control" id="noteDescription" rows="5"
                                                  name="noteDescription"
                                                  onChange={this.handleInputChange} value={this.state.noteDescription}/>
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