import React, {Component} from 'react';

import './projects-page.css'
import Header from "../header";
import Footer from "../footer";

export default class ProjectsPage extends Component {
    render() {
        return (
            <div>
                <Header/>
                <div className="projects-page row">
                    <div className="project-list col-lg-3">
                        <div className="btn-group m-2" role="group">
                            <button type="button" className="btn btn-outline-primary">Текущие</button>
                            <button type="button" className="btn btn-outline-secondary">Завершённые</button>
                        </div>
                        <div className="list-group">
                            <div className="list-group-item list-group-item-action active">
                                Проекты
                                <button type="button"
                                               className="btn btn-success btn-sm float-right">
                                <i className="fa fa-plus"></i>
                            </button>
                            </div>
                            <a href="#" className="list-group-item list-group-item-action">Project1
                                <button type="button"
                                        className="btn btn-outline-danger btn-sm float-right mx-1">
                                    <i className="fa fa-trash-o"></i>
                                </button>
                                <button type="button"
                                        className="btn btn-outline-info btn-sm float-right">
                                    <i className="fa fa-edit"></i>
                                </button>
                            </a>
                        </div>
                    </div>
                    <div className="project-info col-lg-8">
                        <h1>Project1</h1>
                        <h4>Description</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                            labore et dolore magna aliqua. Adipiscing elit pellentesque habitant morbi tristique
                            senectus et netus et. Nec tincidunt praesent semper feugiat nibh. Et odio pellentesque diam
                            volutpat commodo sed. Lorem dolor sed viverra ipsum nunc aliquet bibendum enim facilisis.
                            Ultricies integer quis auctor elit sed. Lobortis elementum nibh tellus molestie nunc non.
                            Tristique senectus et netus et. Aenean et tortor at risus viverra adipiscing at. In tellus
                            integer feugiat scelerisque varius morbi enim nunc faucibus. Mauris cursus mattis molestie a
                            iaculis at erat pellentesque adipiscing.</p>
                        <div className="list-group">
                            <div className="list-group-item list-group-item-action active">
                                Категории
                                <button type="button"
                                        className="btn btn-success btn-sm float-right">
                                    <i className="fa fa-plus"></i>
                                </button>
                            </div>
                            <a href="#" className="list-group-item list-group-item-action">Книги
                                <button type="button"
                                        className="btn btn-outline-danger btn-sm float-right mx-1">
                                    <i className="fa fa-trash-o"></i>
                                </button>
                                <button type="button"
                                        className="btn btn-outline-info btn-sm float-right">
                                    <i className="fa fa-edit"></i>
                                </button>
                            </a>
                            <a href="#" className="list-group-item list-group-item-action">Туториалы
                                <button type="button"
                                        className="btn btn-outline-danger btn-sm float-right mx-1">
                                    <i className="fa fa-trash-o"></i>
                                </button>
                                <button type="button"
                                        className="btn btn-outline-info btn-sm float-right">
                                    <i className="fa fa-edit"></i>
                                </button>
                            </a>
                            <a href="#" className="list-group-item list-group-item-action">Ссылки
                                <button type="button"
                                        className="btn btn-outline-danger btn-sm float-right mx-1">
                                    <i className="fa fa-trash-o"></i>
                                </button>
                                <button type="button"
                                        className="btn btn-outline-info btn-sm float-right">
                                    <i className="fa fa-edit"></i>
                                </button>
                            </a>
                            <a href="#" className="list-group-item list-group-item-action">Видео
                                <button type="button"
                                        className="btn btn-outline-danger btn-sm float-right mx-1">
                                    <i className="fa fa-trash-o"></i>
                                </button>
                                <button type="button"
                                        className="btn btn-outline-info btn-sm float-right">
                                    <i className="fa fa-edit"></i>
                                </button>
                            </a>
                        </div>
                    </div>
                </div>
                <Footer/>
            </div>
        );
    }

}