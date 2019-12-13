import React, {Component} from 'react';

import './categories-list-item.css'
import NotesList from "./notes-list";
import NoteInfo from "./note-info";
import requests from "../../../../../../requests/requests";

function EditCategory(props) {
    const {editCategoryHandler, categoryName} = props;
    return (
        <form className="m-3 row">
            <div className="form-group-inline row col-lg-7 mx-2">
                <label className="col-lg-3 col-form-label" htmlFor="categoryName">Название</label>
                <input type="text" className="form-control col-lg-9" id="categoryName" defaultValue={categoryName}>
                </input>
            </div>
            <button type="submit" className="btn btn-primary col-lg-2 mx-1" onClick={editCategoryHandler}>Сохранить
            </button>
            <button type="button" className="btn btn-secondary col-lg-2 mx-1" onClick={editCategoryHandler}>Отмена
            </button>
        </form>
    );
}

function CategoryBody(props) {
    const {categoryName, editCategoryHandler, notes, setCurrentNote, currentNote} = props
    return (
        <div className="row">
            <div className="col-lg-4">
                <div className="">
                    <NotesList notes={notes} categoryName={categoryName}
                               editCategoryHandler={editCategoryHandler}
                               setCurrentNote={setCurrentNote}/>
                </div>
            </div>
            <div className="col-lg-8">
                <NoteInfo currentNote={currentNote}/>
            </div>
        </div>
    );
}

export default class CategoriesListItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            editCategory: false,
            categoryId: props.categoryId,
            currentNote: null
        };
    }

    getNotes() {
        const {getAction} = requests;
        const {categoryId} = this.state;

        const f = getAction(`/${categoryId}/notes`).then((data) => {
            if(data) {
                this.setState({
                    notes: data
                });
            } else {
                this.setState({
                    notes: null
                });
            }
        });
    }

    componentDidMount() {
        this.getNotes();
    }

    editCategoryHandler = (event) => {
        event.stopPropagation();
        this.setState(state => ({
            editCategory: !state.editCategory,
        }));
    };

    setCurrentNote = (note) => {
        this.setState({
            currentNote: note
        })
    }

    render() {
        const {categoryName} = this.props;
        const {editCategory, notes, currentNote} = this.state;
        return (
            <>
                <a href="#" className="list-group-item list-group-item-action" id={categoryName + '-heading'}
                   data-toggle="collapse" data-target={'#' + categoryName} aria-expanded="false"
                   aria-controls={categoryName}>
                    {categoryName}
                </a>
                <div id={categoryName} className="collapse" aria-labelledby={categoryName + '-heading'}
                     data-parent="#categories-accordion">
                    {editCategory ? <EditCategory categoryName={categoryName} editCategoryHandler={this.editCategoryHandler}/> :
                        <CategoryBody notes={notes} categoryName={categoryName}
                                      setCurrentNote={this.setCurrentNote}
                                      currentNote={currentNote}
                                      editCategoryHandler={this.editCategoryHandler}/>}
                </div>
            </>
        )
    }
}