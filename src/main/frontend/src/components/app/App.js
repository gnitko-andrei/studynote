import React from 'react';
import './logo.svg';
import "./App.css";
import ProjectsPage from "../pages/projects-page";
import HomePage from "../pages/home-page";
import LoginPage from "../pages/login-page";
import RegistrationPage from "../pages/registration-page";
import UserProfilePage from "../pages/user-profile-page";



class App extends React.Component {

    render() {
        return (
            <ProjectsPage/>
        );
    };


}

export default App;
