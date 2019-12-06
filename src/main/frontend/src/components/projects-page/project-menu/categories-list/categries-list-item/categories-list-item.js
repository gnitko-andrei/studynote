import React, {Component} from 'react';

import './categories-list-item.css'
import NotesList from "./notes-list";
import NoteInfo from "./note-info";


export default class CategoriesListItem extends Component {
    render() {
        const {categoryName} = this.props;

        return (
            <>
                <a href="#" className="list-group-item list-group-item-action" id={categoryName + '-heading'}
                   data-toggle="collapse" data-target={'#' + categoryName} aria-expanded="false"
                   aria-controls={categoryName}>
                    {categoryName}
                    <button type="button" className="btn btn-outline-danger btn-sm float-right mx-1">
                        <i className="fa fa-trash-o"></i>
                    </button>
                    <button type="button" className="btn btn-outline-info btn-sm float-right">
                        <i className="fa fa-edit"></i>
                    </button>
                </a>
                <div id={categoryName} className="collapse" aria-labelledby={categoryName + '-heading'}
                     data-parent="#categories-accordion">
                    <div className="row">
                        <div className="col-5">
                            <div className="list-group-item">
                                <NotesList categoryName={categoryName}/>
                            </div>
                        </div>
                        <div className="col-7">
                            <NoteInfo/>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}