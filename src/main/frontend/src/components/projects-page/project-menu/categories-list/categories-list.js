import React, {Component} from 'react';

import './categories-list.css';
import CategoriesListItem from "./categries-list-item";

export default class CategoriesList extends Component {
    render() {
        return (
            <div className="list-group">
                <div className="list-group-item list-group-item-action active">
                    Категории
                    <button type="button"
                            className="btn btn-success btn-sm float-right">
                        <i className="fa fa-plus"></i>
                    </button>
                </div>
                <CategoriesListItem categoryName='Книги'/>
                <CategoriesListItem categoryName='Туториалы'/>
                <CategoriesListItem categoryName='Видео'/>
                <CategoriesListItem categoryName='Ссылки'/>
            </div>
        )
    }
}