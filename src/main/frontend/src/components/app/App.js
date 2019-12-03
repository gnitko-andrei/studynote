import React from 'react';
import './logo.svg';

import "./App.css";

class App extends React.Component {

    render() {
        return (
            <div>
                <header>
                    <nav className="navbar navbar-expand-lg navbar-light bg-light">
                        <a href="#" className="navbar-brand">
                            <img className="mx-1" src="https://image.flaticon.com/icons/svg/29/29302.svg" width="30" height="30" alt="logo" />
                            StudyNote</a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse"
                                data-target="#navbarSupportedContent"
                                aria-controls="navbarSupportedContent" aria-expanded="false"
                                aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"/>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav mr-auto">
                                <li className="nav-item"><a href="#" className="nav-link">Текущее</a></li>
                                <li className="nav-item"><a href="#" className="nav-link">Проекты</a></li>
                                <li className="nav-item"><a href="#" className="nav-link">Личный кабинет</a></li>
                                <li className="nav-item"><a href="#" className="nav-link">Панель администратора</a></li>
                            </ul>
                            <form className="login-form form-inline ">
                                <a href="#" className="btn btn-outline-primary btn-sm mx-1"
                                   role="button">Войти</a>
                                <a href="#" className="btn btn-outline-secondary btn-sm mx-1"
                                   role="button">Регистрация</a>
                            </form>
                        </div>

                    </nav>
                </header>
                <div className="main">
                    <div className="container-fluid jumbotron">
                        <h4 className="text-info text-center">Часто занимаешься самообразованием?
                            Закладки браузера и заметки беспорядочно забиты ссылками?</h4>
                        <h4 className="text-primary text-center">StudyNote поможет упорядочить все учебные материалы в
                            одном
                            месте</h4>
                        <div className="description-list container text-center my-3">
                            <p className="badge badge-dark text-wrap">Чтобы начать пройди регистрацию</p>
                            <p className="badge badge-dark text-wrap">Создавай новые проекты для каждой изучаемой
                                дисциплины, языка
                                программирования, технологии и чего угодно ещё</p>
                            <p className="badge badge-dark text-wrap">Упорядочи структуру проекта добавляя категории</p>
                            <p className="badge badge-dark text-wrap">Добавляй все учебные материалы в соответствующие
                                категории</p>
                            <p className="badge badge-dark text-wrap">Помечай статус материала (посмотреть
                                позже/изучаю/изучен)</p>
                            <p className="badge badge-dark text-wrap">Делай заметки к материалам</p>
                            <p className="badge badge-dark text-wrap">Используй готовые категории материалов для
                                максимального удобства
                            </p>
                            <p className="badge badge-dark text-wrap">Отслеживай изучаемые в данный момент материалы во
                                вкладке Текущее
                            </p>
                        </div>
                        <h5 className="text-center">Сохраняй всё в одном месте</h5>
                        <div className="content-types text-center row">


                            <div className="col"><img src="https://image.flaticon.com/icons/svg/1422/1422053.svg"/>
                                <h6>Книги</h6>
                            </div>
                            <div className="col"><img src="https://image.flaticon.com/icons/svg/975/975666.svg"/>
                                <h6>Видео</h6>
                            </div>
                            <div className="col"><img src="https://image.flaticon.com/icons/svg/2192/2192434.svg"/>
                                <h6>Туториалы</h6>
                            </div>
                            <div className="col"><img src="https://image.flaticon.com/icons/svg/1343/1343218.svg"/>
                                <h6>Статьи</h6>
                            </div>
                            <div className="col"><img src="https://image.flaticon.com/icons/svg/321/321834.svg"/>
                                <h6>Ссылки на всё<br/> остальное</h6>
                            </div>
                        </div>
                    </div>
                    <div className="contacts container">
                        <div className="row">
                            <p className="col-lg-2"><strong>Контактная информация</strong></p>
                            <p className="col-lg-3">
                                <strong>Автор</strong><span> Гнитько Андрей</span><br/>
                                <strong>Email</strong><span> gnitkoandrei17@gmail.com</span>
                            </p>
                            <div className="col">
                                <div className="social linkedin">
                                    <a href="https://www.linkedin.com/in/%D0%B0%D0%BD%D0%B4%D1%80%D0%B5%D0%B9-%D0%B3%D0%BD%D0%B8%D1%82%D1%8C%D0%BA%D0%BE-56925811b/"
                                       target="_blank"><i className="fab fa-linkedin fa-2x"/></a>
                                </div>
                                <div className="social telegram">
                                    <a href="https://t.me/GnitkoAndrei" target="_blank"><i
                                        className="fab fa-telegram fa-2x"/></a>
                                </div>
                                <div className="social skype">
                                    <a href="https://join.skype.com/invite/bj4vYbnHggkp" target="_blank"><i
                                        className="fab fa-skype fa-2x"/></a>
                                </div>
                                <div className="social github">
                                    <a href="https://github.com/gnitko-andrei" target="_blank"><i
                                        className="fab fa-github fa-2x"/></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <footer className="p-2 bg-light">
                    <div className="copyright container">
                        <p>© Все права защищены 2019</p>
                    </div>
                </footer>
            </div>
        );
    };


}

export default App;
