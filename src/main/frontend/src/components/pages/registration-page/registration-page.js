import React, {Component} from 'react';
import {Redirect} from 'react-router-dom';

import './registration-page.css';

import {Link} from 'react-router-dom';
import requests from "../../../requests/requests";

export default class RegistrationPage extends Component {
    constructor(props){
        super(props);
        this.state = {
            username: '',
            password: '',
            confirmPassword: '',
            email: '',
            firstName: '',
            lastName: ''
        }
    }

    newUser(user) {
        const {postAction} = requests;
        postAction("/registration", user)
    }

    handleInputChange = (event) => {
        const value = event.target.value;
        const name = event.target.name;
        this.setState({
            [name]: value
        });
    };

    handleSubmit = (event) => {
        const {username, password, confirmPassword, email,
            firstName, lastName} = this.state;
        if(username === '') {
            alert('Введите имя пользователя')
        } if(email === '') {
            alert('Введите адрес электронной почты')
        } else if(password === confirmPassword) {
            const user = {
                username: username,
                password: password,
                email: email,
                firstName: firstName,
                lastName: lastName
            };
            this.newUser(user);
        } else {
            alert('Пароли не совпадают')
        }
    };

    render() {
        const {loggedIn} = this.props;

        if(loggedIn) {
            return <Redirect to="/"/>
        }

        return (
            <div className="registration-page form-group m-5">
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group row">
                        <label className="col-lg-2 col-form-label"> Логин :</label>
                        <div className="col-lg-6">
                            <input type="text" name="username" className="form-control"
                                   onChange={this.handleInputChange} value={this.state.username}/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label className="col-lg-2 col-form-label">Пароль:</label>
                        <div className="col-lg-6">
                            <input type="password" name="password" className="form-control"
                                   onChange={this.handleInputChange} value={this.state.password}/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label className="col-lg-2 col-form-label">Подтверждение пароля:</label>
                        <div className="col-lg-6">
                            <input type="password" name="confirmPassword" className="form-control"
                                   aria-describedby="confirmPasswordHelp"
                                   onChange={this.handleInputChange} value={this.state.confirmPassword}/>
                            <small id="confirmPasswordHelp" className="form-text text-muted">
                                Введите пароль ещё раз чтобы проверить что вы не ошиблись
                            </small>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label className="col-lg-2 col-form-label">Адрес электронной почты:</label>
                        <div className="col-lg-6">
                            <input type="email" name="email" className="form-control"
                                   onChange={this.handleInputChange} value={this.state.email}/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label className="col-lg-2 col-form-label">Имя:</label>
                        <div className="col-lg-6">
                            <input type="text" name="firstName" className="form-control"
                                   onChange={this.handleInputChange} value={this.state.firstName}/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label className="col-lg-2 col-form-label">Фамилия:</label>
                        <div className="col-lg-6">
                            <input type="text" name="lastName" className="form-control"
                                   onChange={this.handleInputChange} value={this.state.lastName}/>
                        </div>
                    </div>
                    <button className="btn btn-primary" type="submit">Регистрация</button>
                    <Link className="badge badge-light m-2" to="/login">Уже зарегистрированы? Войти</Link>
                </form>
            </div>
        );
    };
}