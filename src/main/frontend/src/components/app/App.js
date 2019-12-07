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


class App extends React.Component {

    render() {
        return (
            <Router>
                <Header/>
                <Switch>
                    <Route path="/" component={HomePage} exact/>
                    <Route path="/login" component={LoginPage}/>
                    <Route path="/registration" component={RegistrationPage}/>
                    <Route path="/user-profile" component={UserProfilePage}/>
                    <Route path="/projects" component={ProjectsPage}/>
                    <Route render={() => <h3 className="m-3">Страница не найдена</h3>}/>
                </Switch>
                <Footer/>
            </Router>
        );
    };

}

export default App;
