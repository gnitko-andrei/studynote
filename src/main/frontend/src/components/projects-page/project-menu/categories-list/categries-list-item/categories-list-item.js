import React, {Component} from 'react';

import './categories-list-item.css'

export default class CategoriesListItem extends Component {
    render() {
        return (
            <>
                <a href="#" className="list-group-item list-group-item-action">{this.props.categoryName}
                    <button type="button"
                            className="btn btn-outline-danger btn-sm float-right mx-1">
                        <i className="fa fa-trash-o"></i>
                    </button>
                    <button type="button"
                            className="btn btn-outline-info btn-sm float-right">
                        <i className="fa fa-edit"></i>
                    </button>
                </a>
            </>
        )
    }
}