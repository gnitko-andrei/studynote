import React, {Component} from 'react';

import './header.css'
import {Link} from 'react-router-dom';

function Login(props) {
    return (
        <div className="login-form form-inline">
            <Link to="/login" className="btn btn-outline-primary btn-sm mx-1"
                  role="button">Войти</Link>
            <Link to="/registration" className="btn btn-outline-secondary btn-sm mx-1"
                  role="button">Регистрация</Link>
        </div>
    )

}

function Logout(props) {
    const {user, handleSubmit} = props;
    return (
        <form onSubmit={handleSubmit}>
            <span className="mx-1">{user}</span>
            <button className="btn btn-outline-secondary btn-sm mx-1"
                    role="submit">Выйти</button>
        </form>
    )

}

export default class Header extends Component {
    handleSubmit = () => {
        localStorage.setItem('authData', '');
    };
    render() {
        const {loggedIn, user} = this.props;
        return (
            <header>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <Link to="/" className="navbar-brand">
                        <img className="mx-1" src="https://image.flaticon.com/icons/svg/29/29302.svg" width="30"
                             height="30" alt="logo"/>
                        StudyNote</Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse"
                            data-target="#navbarSupportedContent"
                            aria-controls="navbarSupportedContent" aria-expanded="false"
                            aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"/>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item" ><Link to="/projects" className="nav-link" hidden={!loggedIn}>Проекты</Link></li>
                            <li className="nav-item" ><Link to="/user-profile" className="nav-link" hidden={!loggedIn}>Личный кабинет</Link></li>
                        </ul>
                    </div>
                    {!loggedIn ? <Login/> : <Logout user={user} handleSubmit={this.handleSubmit}/>}
                </nav>
            </header>
        );
    }

}