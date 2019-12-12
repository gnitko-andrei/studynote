import React, {Component} from 'react';

import './categories-list.css';
import CategoriesListItem from "./categries-list-item";
import AddButton from "../../../../common/buttons/add-button";


export default class CategoriesList extends Component {
    render() {
        const {currentProject} = this.props;
        if(!currentProject) {
            return (<></>)
        }
        return (
            <>
                <div className="accordion" id="categories-accordion">
                    <div className="list-group">
                        <div className="list-group-item list-group-item-action active">
                            Категории
                            <AddButton modalId="#newCategoryModal"/>
                        </div>
                        <CategoriesListItem categoryName='Книги'/>
                        <CategoriesListItem categoryName='Туториалы'/>
                        <CategoriesListItem categoryName='Видео'/>
                        <CategoriesListItem categoryName='Ссылки'/>
                    </div>
                </div>

                <div className="modal fade" id="newCategoryModal" tabIndex="-1" role="dialog"
                     aria-labelledby="newCategoryModalTitle" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="newCategoryModalTitle">Новая категория</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <form>
                                <div className="modal-body">

                                    <div className="form-group">
                                        <label htmlFor="projectName">Название</label>
                                        <input type="text" className="form-control" id="projectName"/>
                                    </div>
                                </div>
                                <div className="modal-footer">
                                    <button type="submit" className="btn btn-primary">Создать</button>
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