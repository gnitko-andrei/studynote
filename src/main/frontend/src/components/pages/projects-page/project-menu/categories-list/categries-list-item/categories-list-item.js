import React, {Component} from 'react';

import './categories-list-item.css'
import NotesList from "./notes-list";
import NoteInfo from "./note-info";
import requests from "../../../../../../requests/requests";
import ErrorIndicator from "../../../../../common/error-indicator";

class EditCategory extends Component {
    constructor(props) {
        super(props);
        this.state = {
            categoryName: props.category.name,
        }
    }

    editCategory(editCategory) {
        const {category} = this.props;
        const {putAction} = requests;
        putAction(`/categories/${category.id}`, editCategory)
    }

    handleInputChange = (event) => {
        const value = event.target.value;
        const name = event.target.name;
        this.setState({
            [name]: value
        });
    };

    handleSubmit = (event) => {
        const {categoryName} = this.state;
        const category = {
            name: categoryName,
        };
        this.editCategory(category)
    };

    render() {
        const {editCategoryHandler, category} = this.props;
        const {categoryName} = this.state;
        return (
            <form className="m-3 row" onSubmit={this.handleSubmit}>
                <div className="form-group-inline row col-lg-7 mx-2">
                    <label className="col-lg-3 col-form-label" htmlFor="categoryName">Название</label>
                    <input type="text" className="form-control col-lg-9" id="categoryName" name="categoryName"
                           onChange={this.handleInputChange} value={categoryName} required>
                    </input>
                </div>
                <button type="submit" className="btn btn-primary col-lg-2 mx-1">Сохранить
                </button>
                <button type="button" className="btn btn-secondary col-lg-2 mx-1" onClick={editCategoryHandler}>Отмена
                </button>
            </form>
        );
    }

}

function CategoryBody(props) {
    const {loading, category, editCategoryHandler, notes, setCurrentNote, currentNote} = props;
    if (loading) {
        return (
            <div className="d-flex justify-content-center">
                <div className="spinner-border text-info" role="status">
                    <span className="sr-only">Loading...</span>
                </div>
            </div>
        )
    }
    return (
        <div className="row">
            <div className="col-lg-4">
                <div className="">
                    <NotesList notes={notes} category={category}
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
            loading: true,
            editCategory: false,
            category: props.category,
            currentNote: null,
            error: false
        };
    }

    getNotes() {
        const {getAction} = requests;
        const {category} = this.state;

        getAction(`/${category.id}/notes`).then((data) => {
            if (data) {
                this.setState({
                    loading: false,
                    notes: data
                });
            } else {
                this.setState({
                    notes: null,
                    error: true
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
    };

    render() {
        const {loading, editCategory, notes, currentNote, error, category} = this.state;
        if(error) {
            return <ErrorIndicator/>
        }
        const categoryNameReplaced = category.name.replace(/\s+/g, '');
        return (
            <>
                <button className="list-group-item list-group-item-action" id={categoryNameReplaced + '-heading'}
                   data-toggle="collapse" data-target={'#' + categoryNameReplaced} aria-expanded="false"
                   aria-controls={'#' + categoryNameReplaced}>
                    {category.name}
                </button>
                <div id={categoryNameReplaced} className="collapse" aria-labelledby={categoryNameReplaced + '-heading'}
                     data-parent="#categories-accordion">
                    {editCategory ?
                        <EditCategory category={category} editCategoryHandler={this.editCategoryHandler}/> :
                        <CategoryBody loading={loading} notes={notes} category={category}
                                      setCurrentNote={this.setCurrentNote}
                                      currentNote={currentNote}
                                      editCategoryHandler={this.editCategoryHandler}/>}
                </div>
            </>
        )
    }
}