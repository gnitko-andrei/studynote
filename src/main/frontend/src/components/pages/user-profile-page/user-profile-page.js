import React, {Component} from 'react';
import {Redirect} from 'react-router-dom';

import './user-profile-page.css';
import EditButton from "../../common/buttons/edit-button";
import DeleteButton from "../../common/buttons/delete-button";
import requests from "../../../requests/requests";


function UserInfo(props) {
    const {editUserHandler, user, deleteUserHandler} = props;
    const {username, firstName, lastName, email} = user;
    return (
        <>
            <dl className='row my-2'>
                <dt className="col-lg-2">Логин</dt>
                <dd className="col-lg-10">{username}</dd>
                <dt className="col-lg-2">Имя</dt>
                <dd className="col-lg-10">{firstName}</dd>
                <dt className="col-lg-2">Фамилия</dt>
                <dd className="col-lg-10">{lastName}</dd>
                <dt className="col-lg-2">Электроная почта</dt>
                <dd className="col-lg-10">{email}</dd>
            </dl>
            <EditButton onClick={editUserHandler}/>
            <DeleteButton onSubmit={deleteUserHandler} contentId={`User${user.id}`}/>
        </>
    )
}

class EditUser extends Component{
    constructor(props) {
        super(props);
        this.state = {
            password: '',
            confirmPassword: '',
            email: props.user.email,
            firstName: props.user.firstName,
            lastName: props.user.lastName
        }
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
        const {password, email,
            firstName, lastName} = this.state;
        const user = {
            username: '',
            password: password,
            email: email,
            firstName: firstName,
            lastName: lastName
        };

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
        const {editUserHandler} = this.props;
        return (
            <>
                <form className="m-3" onSubmit={this.handleSubmit}>
                    <div className="form-group row">
                        <label className="col-lg-2 col-form-label">Пароль:</label>

                        <div className="col-lg-6">
                            <input type="password" name="password" className="form-control" required
                                   id="password"  onChange={this.handleInputChange} value={this.state.password}/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label className="col-lg-2 col-form-label">Подтверждение пароля:</label>
                        <div className="col-lg-6">
                            <input type="password" name="confirmPassword" className="form-control"
                                   aria-describedby="confirmPasswordHelp" id="confirmPassword" required
                                   onChange={this.handleInputChange} value={this.state.confirmPassword}/>
                            <small id="confirmPasswordHelp" className="form-text text-muted">
                                Введите пароль ещё раз чтобы проверить что вы не ошиблись
                            </small>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label className="col-lg-2 col-form-label">Адрес электронной почты:</label>
                        <div className="col-lg-6">
                            <input type="email" name="email" className="form-control" required
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
                    <button type="submit" className="btn btn-primary mx-1">Сохранить</button>
                    <button type="button" className="btn btn-secondary mx-1" onClick={editUserHandler}>Отмена</button>
                </form>
            </>
        )
    }
}

export default class UserProfilePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            editUser: false
        }
    }

    editUserHandler = () => {
        this.setState(state => ({
            editUser: !state.editUser
        }))
    };

    deleteUser() {
        const {deleteAction} = requests;
        deleteAction(`/user/delete`)
            .then(localStorage.removeItem('authData'));
    }

    deleteUserHandler = (event) => {
        this.deleteUser()
    };

    render() {
        const {editUser} = this.state;
        const {loggedIn, user} = this.props;
        if (!loggedIn) {
            return <Redirect to="/login"/>
        }
        return (
            <div className="user-profile-page container m-5">
                {editUser ? <EditUser user={user} editUserHandler={this.editUserHandler}/> :
                    <UserInfo user={user} editUserHandler={this.editUserHandler} deleteUserHandler={this.deleteUserHandler}/>}
            </div>
        )
    }
}