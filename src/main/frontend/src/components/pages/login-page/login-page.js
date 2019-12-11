import React, { Component } from 'react';

import './login-page.css';
import { Link } from "react-router-dom";
import asyncAPI from '../../../api';
import requests from "../../../requests";

export default class LoginPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            greeting: 'hell'
        }
    }

    componentDidMount() {
       this.updateItem();
        this.getUser();
    }

    updateItem() {
        const {getAction} = requests;
        const f = getAction("/notes/1").then((data) => {
            this.setState({json : data});
        }).then(() => {
            this.setState(state => {
                return{greeting: state.json.name}
            })
        });
    }

    getUser() {
        const {getAction} = requests;
        const f = getAction("/projects").then((data) => {
            this.setState({json1 : data});
        });
    }

    render() {
        return (
            <div className="login-page form-group m-5">
                {this.state.greeting}
                <form action="" method="">
                    <div className="form-group row">
                        <label className="col-lg-1 col-form-label"> Логин :</label>
                        <div className="col-lg-6">
                            <input type="text" name="username" className="form-control" placeholder="Логин" />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label className="col-lg-1 col-form-label"> Пароль:</label>
                        <div className="col-lg-6">
                            <input type="password" name="password" className="form-control" placeholder="Пароль" />
                        </div>
                    </div>
                    <button className="btn btn-primary" type="submit">Войти</button>
                    <Link className="badge badge-light m-2" to="/registration">Зарегистрироваться</Link>
                </form>
            </div>
        );
    };
}