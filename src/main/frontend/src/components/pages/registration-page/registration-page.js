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
            lastName: '',
            registrationStatus: null
        };
    }

    componentDidMount() {
        if(localStorage.getItem('registrationStatus') !== "undefined") {
            this.setState({
                registrationStatus: localStorage.getItem('registrationStatus')
            })
        }

    }

    newUser(user) {
        const {postAction} = requests;
        postAction("/registration", user)
            .then((data) => {
                if(data !== 'ok') {
                    localStorage.setItem('registrationStatus', data)
                } else {
                     localStorage.removeItem('registrationStatus')
                }

            })
    }

    handleInputChange = (event) => {
        const value = event.target.value;
        const name = event.target.name;
        this.setState({
            [name]: value
        });
        this.validatePassword();
    };

    handleSubmit = (event) => {
        const {username, password, email,
            firstName, lastName} = this.state;
        const user = {
            username: username,
            password: password,
            email: email,
            firstName: firstName,
            lastName: lastName
        };
        this.newUser(user);
    };

    validatePassword = () => {
        const input = document.getElementById("password");
        const password = document.getElementById("password").value;
        const confirmPassword = document.getElementById("confirmPassword").value;
        if(password !== confirmPassword) {
            input.setCustomValidity('Пароли не совпадают')
        } else {
            input.setCustomValidity('')
        }

    };

    render() {
        const {loggedIn} = this.props;
        const {registrationStatus} = this.state;

        if(loggedIn) {
            return <Redirect to="/"/>
        }

        return (
            <div className="registration-page form-group m-5">
                <form onSubmit={this.handleSubmit}>
                    <p id="registrationStatus">{registrationStatus !== undefined ? registrationStatus : null}</p>
                    <div className="form-group row">
                        <label className="col-lg-2 col-form-label"> Логин :</label>
                        <div className="col-lg-6">
                            <input type="text" name="username" className="form-control"
                                   onChange={this.handleInputChange} value={this.state.username} required/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label className="col-lg-2 col-form-label">Пароль:</label>
                        <div className="col-lg-6">
                            <input type="password" name="password" className="form-control" id="password"
                                   onChange={this.handleInputChange} value={this.state.password} required/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label className="col-lg-2 col-form-label">Подтверждение пароля:</label>
                        <div className="col-lg-6">
                            <input type="password" name="confirmPassword" className="form-control"
                                   aria-describedby="confirmPasswordHelp" id="confirmPassword"
                                   onChange={this.handleInputChange} value={this.state.confirmPassword} required/>
                            <small id="confirmPasswordHelp" className="form-text text-muted">
                                Введите пароль ещё раз чтобы проверить что вы не ошиблись
                            </small>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label className="col-lg-2 col-form-label">Адрес электронной почты:</label>
                        <div className="col-lg-6">
                            <input type="email" name="email" className="form-control"
                                   onChange={this.handleInputChange} value={this.state.email} required/>
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