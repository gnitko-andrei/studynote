import React, {Component} from 'react';

import './delete-button.css';

export default class DeleteButton extends Component {
    render() {
        const {onSubmit, contentId} = this.props;
        return (
            <>

                <button type="submit" data-toggle="modal"
                        data-target={`#delete${contentId}Modal`}
                        className="btn btn-outline-danger btn-sm ml-1">
                    <i className="fa fa-trash-o"/>
                </button>

                <div className="modal fade" id={`delete${contentId}Modal`} tabIndex="-1" role="dialog"
                     aria-labelledby={`delete${contentId}ModalTitle`} aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id={`delete${contentId}ModalTitle`}>Подтвердить удаление</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <form onSubmit={onSubmit}>
                                <div className="modal-footer">
                                    <button type="submit" className="btn btn-primary">Удалить</button>
                                    <button type="button" className="btn btn-secondary" data-dismiss="modal">Закрыть
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </>



        )
    }
}