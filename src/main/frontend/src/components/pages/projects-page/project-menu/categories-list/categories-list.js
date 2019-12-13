import React, {Component} from 'react';

import './categories-list.css';
import CategoriesListItem from "./categries-list-item";
import AddButton from "../../../../common/buttons/add-button";
import requests from "../../../../../requests/requests";


export default class CategoriesList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            categories: [],
            projectId: null
        };
    }

    getCategories() {
        const {getAction} = requests;
        const {projectId} = this.state;

        getAction(`/${projectId}/categories`).then((data) => {
            if (data) {
                this.setState({
                    loading: false,
                    categories: data
                });
            } else {
                this.setState({
                    categories: null
                });
            }
        });
    }

    componentDidMount() {
        const {currentProject} = this.props;
        this.setState({
            projectId: currentProject.id
        });

    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        const {currentProject} = this.props;
        if (prevState.projectId !== this.state.projectId) {
            this.getCategories();
        }
        if (prevProps.currentProject !== currentProject) {
            this.setState({
                projectId: currentProject.id
            });
        }
    }

    render() {
        const {loading, categories} = this.state;
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
            <>
                <div className="accordion" id="categories-accordion">
                    <div className="list-group">
                        <div className="list-group-item list-group-item-action active">
                            Категории
                            <AddButton modalId="#newCategoryModal"/>
                        </div>
                        {
                            categories.map((category) =>
                                <CategoriesListItem key={category.id}
                                                    categoryName={category.name}
                                                    categoryId={category.id}/>
                            )}
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