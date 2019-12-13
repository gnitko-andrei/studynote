import React, {Component} from 'react';
import {Redirect} from 'react-router-dom';

import './login-page.css';
import {Link} from "react-router-dom";
import requests from "../../../requests";

export default class LoginPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
        }
    }

    handleInputChange = (event) => {
        const value = event.target.value;
        const name = event.target.name;
        this.setState({
            [name]: value
        });
    };

    handleSubmit = (event) => {
        const {username, password} = this.state;
        const {loggedIn} = this.props;
        const authData = window.btoa(`${username}:${password}`);
        localStorage.setItem('authData', authData);
    };

    render() {
        const {loggedIn} = this.props;
        if (loggedIn) {
            return <Redirect to="/"/>
        }
        return (
            <div className="login-page form-group m-5">
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group row">
                        <label className="col-lg-1 col-form-label"> Логин :</label>
                        <div className="col-lg-6">
                            <input type="text" name="username"
                                   className="form-control" onChange={this.handleInputChange}
                                   value={this.state.username}/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label className="col-lg-1 col-form-label"> Пароль:</label>
                        <div className="col-lg-6">
                            <input type="password" name="password"
                                   className="form-control" onChange={this.handleInputChange}
                                   value={this.state.password}/>
                        </div>
                    </div>
                    <input className="btn btn-primary" type="submit" value="Войти"/>
                    <Link className="badge badge-light m-2" to="/registration">Зарегистрироваться</Link>
                </form>
            </div>
        );
    };
}