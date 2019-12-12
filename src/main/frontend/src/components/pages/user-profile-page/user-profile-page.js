import React, {Component} from 'react';
import {Redirect} from 'react-router-dom';

import './user-profile-page.css';
import EditButton from "../../common/buttons/edit-button";
import DeleteButton from "../../common/buttons/delete-button";


function UserInfo(props) {
    const {editUserHandler} = props;
    const {username, firstName, lastName, email } = props.user
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
            <DeleteButton/>
        </>
    )
}

function EditUser(props) {
    const {editUserHandler} = props;
    const {username, firstName, lastName, email } = props.user
    return (
        <>
            <form className="m-3">
                <div className="form-group row">
                    <label className="col-lg-2 col-form-label"> Логин :</label>
                    <div className="col-lg-6">
                        <input type="text" name="username" className="form-control" defaultValue={username}/>
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
                        <input type="email" name="email" className="form-control" defaultValue={email}/>
                    </div>
                </div>
                <div className="form-group row">
                    <label className="col-lg-2 col-form-label">Имя:</label>
                    <div className="col-lg-6">
                        <input type="text" name="firstName" className="form-control" defaultValue={firstName}/>
                    </div>
                </div>
                <div className="form-group row">
                    <label className="col-lg-2 col-form-label">Фамилия:</label>
                    <div className="col-lg-6">
                        <input type="text" name="LastName" className="form-control" defaultValue={lastName}/>
                    </div>
                </div>
                <button type="submit" className="btn btn-primary mx-1">Сохранить</button>
                <button type="button" className="btn btn-secondary mx-1" onClick={editUserHandler}>Отмена</button>
            </form>
        </>
    )
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

    render() {
        const {editUser} = this.state;
        const {loggedIn, user} = this.props;
        if(!loggedIn) {
            return <Redirect to="/login"/>
        }
        return (
            <div className="user-profile-page container m-5">
                {editUser ? <EditUser user={user} editUserHandler={this.editUserHandler}/> :
                    <UserInfo user={user} editUserHandler={this.editUserHandler}/>}
            </div>
        )
    }
}