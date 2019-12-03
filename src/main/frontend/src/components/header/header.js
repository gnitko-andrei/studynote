import React, {Component} from 'react';

import './header.css'

export default class Header extends Component {
    render() {
        return (
            <header>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <a href="#" className="navbar-brand">
                        <img className="mx-1" src="https://image.flaticon.com/icons/svg/29/29302.svg" width="30" height="30" alt="logo" />
                        StudyNote</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse"
                            data-target="#navbarSupportedContent"
                            aria-controls="navbarSupportedContent" aria-expanded="false"
                            aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"/>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item"><a href="#" className="nav-link">Текущее</a></li>
                            <li className="nav-item"><a href="#" className="nav-link">Проекты</a></li>
                            <li className="nav-item"><a href="#" className="nav-link">Личный кабинет</a></li>
                            <li className="nav-item"><a href="#" className="nav-link">Панель администратора</a></li>
                        </ul>
                        <form className="login-form form-inline ">
                            <a href="#" className="btn btn-outline-primary btn-sm mx-1"
                               role="button">Войти</a>
                            <a href="#" className="btn btn-outline-secondary btn-sm mx-1"
                               role="button">Регистрация</a>
                        </form>
                    </div>

                </nav>
            </header>
        );
    }

}