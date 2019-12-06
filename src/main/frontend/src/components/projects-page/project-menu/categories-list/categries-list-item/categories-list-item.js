import React, {Component} from 'react';

import './categories-list-item.css'
import NotesList from "./notes-list";
import NoteInfo from "./note-info";

function EditCategory(props) {
    return (
        <form className="m-3 row">
            <div className="form-group-inline row col 10 mx-2">
                <label className="col-2 col-form-label" htmlFor="categoryName">Название</label>
                <input type="text" className="form-control col-10" id="categoryName" value="Project1">
                </input>
            </div>
            <button type="submit" className="btn btn-primary col-2 mx-2" onClick={props.onclick}>Сохранить</button>
        </form>
    );
}

function CategoryBody(props) {
    const {categoryName, editNoteHandler, editNote} = props;
    return (
        <div className="row">
            <div className="col-5">
                <div className="list-group-item">
                    <NotesList categoryName={categoryName} editNoteHandler={editNoteHandler}/>
                </div>
            </div>
            <div className="col-7">
                <NoteInfo editNote={editNote} editNoteHandler={editNoteHandler}/>
            </div>
        </div>
    );
}

export default class CategoriesListItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            editCategory: false,
            editNote: false,
            show: ""
        };
        this.editCategoryHandler = this.editCategoryHandler.bind(this);
    }

    editCategoryHandler = (event) => {
        event.stopPropagation();
        this.setState(state => ({
            editCategory: !state.editCategory,
            show: state.editCategory ? " show" : ""
        }));
    };

    editNoteHandler = () => {
        this.setState(state => ({
            editNote: !state.editNote
        }));
    };

    render() {
        const {categoryName} = this.props;
        const {editCategory, editNote, show} = this.state;
        return (
            <>
                <a href="#" className="list-group-item list-group-item-action" id={categoryName + '-heading'}
                   data-toggle="collapse" data-target={'#' + categoryName} aria-expanded="false"
                   aria-controls={categoryName}>
                    {categoryName}
                    <button type="button" className="btn btn-outline-danger btn-sm float-right mx-1">
                        <i className="fa fa-trash-o"></i>
                    </button>
                    <button type="button" className="btn btn-outline-info btn-sm float-right"
                            onClick={this.editCategoryHandler}>
                        <i className="fa fa-edit"></i>
                    </button>
                </a>
                <div id={categoryName} className={"collapse" + show} aria-labelledby={categoryName + '-heading'}
                     data-parent="#categories-accordion">
                    {editCategory ? <EditCategory onclick={this.editCategoryHandler}/> :
                        <CategoryBody categoryName={categoryName} editNoteHandler={this.editNoteHandler} editNote={editNote}/>}
                </div>
            </>
        )
    }
}