import React, {Component} from 'react';

import './edit-button.css';

export default class EditButton extends Component {
    render() {
        const {onClick} = this.props;
        return (
            <button type="button"
                    className="btn btn-outline-info btn-sm ml-1" onClick={onClick}>
                <i className="fa fa-edit"/>
            </button>
        )
    }
}