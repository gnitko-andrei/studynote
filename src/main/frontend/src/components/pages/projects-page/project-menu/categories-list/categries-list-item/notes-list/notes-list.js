import React, {Component} from 'react';

import './notes-list.css';
import NotesListItem from "./notes-list-item";
import AddButton from "../../../../../../common/buttons/add-button";
import EditButton from "../../../../../../common/buttons/edit-button";
import DeleteButton from "../../../../../../common/buttons/delete-button";
import ProjectsListItem from "../../../../projects-list/projects-list-item";


export default class NotesList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            notes: []
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
        if(prevProps.notes !== notes){
            this.setState({
                notes: notes
            });
        }
    }

    render() {
    const {notes} = this.state;
    const {setCurrentNote} = this.props;
        const {categoryName, editCategoryHandler} = this.props;
        if(!notes) {
            return (<></>)
        }
        return (
            <div className="notes-list">
                <h4 className="text-center my-2">
                    {categoryName}
                    <EditButton onClick={editCategoryHandler}/>
                    <DeleteButton/>
                </h4>

                <div className="btn-group-vertical btn-group-sm my-2" role="group">
                    <button type="button" className="btn btn-outline-info">Посмотреть позже</button>
                    <button type="button" className="btn btn-outline-primary">Изучаю</button>
                    <button type="button" className="btn btn-outline-secondary">Завершённые</button>
                </div>
                <div className="list-group">
                    <div className="list-group-item list-group-item-action active">
                        <AddButton modalId={'#' + categoryName + "NoteModal"}/>
                    </div>
                    {notes.map((note) =>
                        <NotesListItem key={note.id}
                                       note={note}
                                       setCurrentNote={setCurrentNote}/>
                    )}
                </div>

                <div className="modal fade" id={categoryName + "NoteModal"} tabIndex="-1" role="dialog"
                     aria-labelledby={categoryName + "NoteModalTitle"} aria-hidden="true">
                    <div className="modal-dialog modal-lg" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id={categoryName + "NoteModalTitle"}>Новая заметка</h5>
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