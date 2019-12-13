import React, {Component} from 'react';

import './home-page.css'

export default class HomePage extends Component {
    render() {
        return (
            <div className="home-page">
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
                                <a href="https://www.linkedin.com/in/gnitko-andrei/"
                                   target="_blank"><i className="fa fa-linkedin fa-2x"/></a>
                            </div>
                            <div className="social telegram">
                                <a href="https://t.me/GnitkoAndrei" target="_blank"><i
                                    className="fa fa-telegram fa-2x"/></a>
                            </div>
                            <div className="social skype">
                                <a href="https://join.skype.com/invite/bj4vYbnHggkp" target="_blank"><i
                                    className="fa fa-skype fa-2x"/></a>
                            </div>
                            <div className="social github">
                                <a href="https://github.com/gnitko-andrei" target="_blank"><i
                                    className="fa fa-github fa-2x"/></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    };

}