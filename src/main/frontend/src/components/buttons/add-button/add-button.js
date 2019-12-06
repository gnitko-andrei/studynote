import React, {Component} from 'react';

import './add-button.css'

export default class AddButton extends Component {
    render() {
        const {modalId} = this.props;
        return (
            <button type="button"
                    className="btn btn-success btn-sm float-right" data-toggle="modal"
                    data-target={modalId}>
                <i className="fa fa-plus"></i>
            </button>
        )
    }
}