import React, {Component} from 'react';

import './login-page.css';

export default class LoginPage extends Component {
    render() {
        return (

            <div className="login-page form-group m-5">
                <form action="" method="">
                    <div className="form-group row">
                        <label className="col-lg-1 col-form-label"> Логин :</label>
                        <div className="col-lg-6">
                            <input type="text" name="username" className="form-control" placeholder="Логин"/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label className="col-lg-1 col-form-label"> Пароль:</label>
                        <div className="col-lg-6">
                            <input type="password" name="password" className="form-control" placeholder="Пароль"/>
                        </div>
                    </div>
                    <button className="btn btn-primary" type="submit">Войти</button>
                </form>
            </div>
        );
    };
}