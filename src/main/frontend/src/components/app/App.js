import React from 'react';
import './logo.svg';
import "./App.css";
import ProjectsPage from "../pages/projects-page";
import HomePage from "../pages/home-page";
import LoginPage from "../pages/login-page";
import RegistrationPage from "../pages/registration-page";
import UserProfilePage from "../pages/user-profile-page";

import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Header from "../common/header";
import Footer from "../common/footer";
import requests from "../../requests";


class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user: 'no auth',
            loggedIn: localStorage.getItem('loggedIn')
        }
    }

    getUser() {
        const {getAction} = requests;
        getAction("/user").then((data) => {
            if (data) {
                this.setState({
                    user: data,
                    username: data.username,
                    loggedIn: true
                });
                localStorage.setItem('loggedIn', this.state.loggedIn);
            } else {
                this.setState({
                    user: null,
                    username: null,
                    loggedIn: false
                });
                localStorage.removeItem('authData');
                localStorage.removeItem('loggedIn');
            }
        });
    }

    componentDidMount() {
        this.getUser();

    }

    render() {
        const {loggedIn, user, username} = this.state;
        return (
            <Router>
                <Header username={username}
                        loggedIn={loggedIn}/>
                <Switch>
                    <Route path="/" component={HomePage} exact/>
                    <Route path="/login" render={() => (
                        <LoginPage loggedIn={loggedIn}/>
                    )}/>
                    <Route path="/registration" render={() => (
                        <RegistrationPage loggedIn={loggedIn}/>
                    )}/>
                    <Route path="/user-profile" render={() => (
                        <UserProfilePage user={user}
                                         loggedIn={loggedIn}/>
                    )}/>
                    <Route path="/projects" render={() => (
                        <ProjectsPage loggedIn={loggedIn}/>
                    )}/>
                    <Route render={() => <h3 className="m-3">Страница не найдена</h3>}/>
                </Switch>
                <Footer/>
            </Router>
        );
    };

}

export default App;
