import React, {Component} from 'react';

import './categories-list-item.css'
import NotesList from "./notes-list";


export default class CategoriesListItem extends Component {
    render() {
        return (
            <>
                <a href="#" className="list-group-item list-group-item-action"
                data-toggle="collapse" href={'#' + this.props.categoryName} role="button"
                   aria-expanded="false" aria-controls={this.props.categoryName}>
                    {this.props.categoryName}
                    <button type="button"
                            className="btn btn-outline-danger btn-sm float-right mx-1">
                        <i className="fa fa-trash-o"></i>
                    </button>
                    <button type="button"
                            className="btn btn-outline-info btn-sm float-right">
                        <i className="fa fa-edit"></i>
                    </button>
                </a>
                <div className="collapse" id={this.props.categoryName}>
                    <div className="card card-body">
                        <NotesList/>
                    </div>
                </div>
            </>
        )
    }
}