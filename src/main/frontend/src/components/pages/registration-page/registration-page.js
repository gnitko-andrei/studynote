import React, {Component} from 'react';
import {Redirect} from 'react-router-dom';

import './registration-page.css';

import {Link} from 'react-router-dom';

function Registration(props) {
    return (
        <div className="registration-page form-group m-5">
            <form action="" method="">
                <div className="form-group row">
                    <label className="col-lg-2 col-form-label"> Логин :</label>
                    <div className="col-lg-6">
                        <input type="text" name="username" className="form-control"/>
                    </div>
                </div>
                <div className="form-group row">
                    <label className="col-lg-2 col-form-label">Пароль:</label>

                    <div className="col-lg-6">
                        <input type="password" name="password" className="form-control"/>
                    </div>
                </div>
                <div className="form-group row">
                    <label className="col-lg-2 col-form-label">Подтверждение пароля:</label>
                    <div className="col-lg-6">
                        <input type="password" name="confirmPassword" className="form-control"
                               aria-describedby="confirmPasswordHelp"/>
                        <small id="confirmPasswordHelp" className="form-text text-muted">
                            Введите пароль ещё раз чтобы проверить что вы не ошиблись
                        </small>
                    </div>
                </div>
                <div className="form-group row">
                    <label className="col-lg-2 col-form-label">Адрес электронной почты:</label>
                    <div className="col-lg-6">
                        <input type="email" name="email" className="form-control"/>
                    </div>
                </div>
                <div className="form-group row">
                    <label className="col-lg-2 col-form-label">Имя:</label>
                    <div className="col-lg-6">
                        <input type="text" name="firstName" className="form-control"/>
                    </div>
                </div>
                <div className="form-group row">
                    <label className="col-lg-2 col-form-label">Фамилия:</label>
                    <div className="col-lg-6">
                        <input type="text" name="LastName" className="form-control"/>
                    </div>
                </div>
                <button className="btn btn-primary" type="submit">Регистрация</button>
                <Link className="badge badge-light m-2" to="/login">Уже зарегистрированы? Войти</Link>
            </form>
        </div>
    )
}

export default class RegistrationPage extends Component {
    render() {
        const {loggedIn} = this.props;

        return (
            <>
                {!loggedIn ? <Registration/> : <Redirect to="/"/>}
            </>
        );
    };
}