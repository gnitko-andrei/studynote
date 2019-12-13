import React, {Component} from 'react';
import errorImage from './errorImage.jpg';

export default class ErrorIndicator extends Component{
    render(){
        return(
            <div className="row m-3">
                <img className="mx-auto mb-2" width="200" height="200"
                     src={errorImage} alt="error image"/>
                <h6 className="col-lg-12 text-center">Что-то пошло не так. Мы уже работаем чтобы это исправить</h6>
            </div>
        )
    }
}