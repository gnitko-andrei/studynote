import React, {Component} from 'react';

import './delete-button.css';

export default class DeleteButton extends Component {
    render() {
        return (
            <button type="button"
                    className="btn btn-outline-danger btn-sm mx-1">
                <i className="fa fa-trash-o"></i>
            </button>
        )
    }
}