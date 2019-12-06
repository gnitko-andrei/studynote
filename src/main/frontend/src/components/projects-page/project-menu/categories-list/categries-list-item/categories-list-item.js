import React, {Component} from 'react';

import './categories-list-item.css'
import NotesList from "./notes-list";
import NoteInfo from "./note-info";

function EditCategory(props) {
    const {editCategoryHandler} = props;
    return (
        <form className="m-3 row">
            <div className="form-group-inline row col-lg-9 mx-2">
                <label className="col-lg-3 col-form-label" htmlFor="categoryName">Название</label>
                <input type="text" className="form-control col-lg-9" id="categoryName" value="Category1">
                </input>
            </div>
            <button type="submit" className="btn btn-primary col-lg-2 m-2" onClick={editCategoryHandler}>Сохранить
            </button>
        </form>
    );
}

function CategoryBody(props) {
    const {categoryName, editCategoryHandler} = props;
    return (
        <div className="row">
            <div className="col-lg-4">
                <div className="">
                    <NotesList categoryName={categoryName} editCategoryHandler={editCategoryHandler}/>
                </div>
            </div>
            <div className="col-lg-8">
                <NoteInfo/>
            </div>
        </div>
    );
}

export default class CategoriesListItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            editCategory: false,
        };
    }

    editCategoryHandler = (event) => {
        event.stopPropagation();
        this.setState(state => ({
            editCategory: !state.editCategory,
        }));
    };

    render() {
        const {categoryName} = this.props;
        const {editCategory} = this.state;
        return (
            <>
                <a href="#" className="list-group-item list-group-item-action" id={categoryName + '-heading'}
                   data-toggle="collapse" data-target={'#' + categoryName} aria-expanded="false"
                   aria-controls={categoryName}>
                    {categoryName}
                </a>
                <div id={categoryName} className="collapse" aria-labelledby={categoryName + '-heading'}
                     data-parent="#categories-accordion">
                    {editCategory ? <EditCategory editCategoryHandler={this.editCategoryHandler}/> :
                        <CategoryBody categoryName={categoryName} editCategoryHandler={this.editCategoryHandler}/>}
                </div>
            </>
        )
    }
}