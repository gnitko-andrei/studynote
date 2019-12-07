import React from 'react';
import './logo.svg';
import HomePage from "../home-page";
import "./App.css";
import LoginPage from "../login-page";
import RegistrationPage from "../registration-page";
import ProjectsPage from "../projects-page";
import UserProfilePage from "../user-profile-page";



class App extends React.Component {

    render() {
        return (
            <ProjectsPage/>
        );
    };


}

export default App;
