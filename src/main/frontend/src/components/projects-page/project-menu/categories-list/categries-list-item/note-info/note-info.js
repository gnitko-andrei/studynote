import React, {Component} from 'react';

import './note-info.css'

function EditNote(props) {
    return (
        <>
            <form className="m-3">
                <div className="form-group">
                    <label htmlFor="noteName">Название</label>
                    <input type="text" className="form-control" id="noteName" value="Note1">
                    </input>
                </div>
                <div className="form-group">
                    <label htmlFor="noteLink">Ссылка</label>
                    <input type="text" className="form-control" id="noteLink" value="www.somelink.xyz">
                    </input>
                </div>
                <div className="form-group">
                    <label htmlFor="noteStatus">Статус</label>
                    <div className="btn-group m-2" role="group" id="noteStatus">
                        <button type="button" className="btn btn-outline-info">Посмотреть позже</button>
                        <button type="button" className="btn btn-outline-primary">Изучаю</button>
                        <button type="button" className="btn btn-outline-secondary">Завершённые</button>
                    </div>
                </div>

                <div className="form-group">
                    <label htmlFor="projectDescription">Описание</label>
                    <textarea className="form-control" id="projectDescription" rows="5">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                labore et dolore magna aliqua. Adipiscing elit pellentesque habitant morbi tristique
                senectus et netus et. Nec tincidunt praesent semper feugiat nibh. Et odio pellentesque diam
                volutpat commodo sed. Lorem dolor sed viverra ipsum nunc aliquet bibendum enim facilisis.
                Ultricies integer quis auctor elit sed. Lobortis elementum nibh tellus molestie nunc non.
                Tristique senectus et netus et. Aenean et tortor at risus viverra adipiscing at. In tellus
                integer feugiat scelerisque varius morbi enim nunc faucibus. Mauris cursus mattis molestie a
                iaculis at erat pellentesque adipiscing.
                </textarea>
                </div>
                <button type="submit" className="btn btn-primary" onClick={props.editNoteHandler}>Сохранить</button>
            </form>
        </>
    )
}

function NoteBody(props) {
    return (
        <>
            <h1>Note1</h1>
            <h4>Статус</h4>
            <p>Изучаю</p>
            <h4>Ссылка</h4>
            <a href="#">www.somelink.xyz</a>
            <h4>Описание</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                labore et dolore magna aliqua. Adipiscing elit pellentesque habitant morbi tristique
                senectus et netus et. Nec tincidunt praesent semper feugiat nibh. Et odio pellentesque diam
                volutpat commodo sed. Lorem dolor sed viverra ipsum nunc aliquet bibendum enim facilisis.
                Ultricies integer quis auctor elit sed. Lobortis elementum nibh tellus molestie nunc non.
                Tristique senectus et netus et. Aenean et tortor at risus viverra adipiscing at. In tellus
                integer feugiat scelerisque varius morbi enim nunc faucibus. Mauris cursus mattis molestie a
                iaculis at erat pellentesque adipiscing.</p>
        </>
    )
}

export default class NoteInfo extends Component {
    render() {
        const {editNote} = this.props;
        return (
            <>
                {editNote ? <EditNote/> : <NoteBody/>}
            </>
        )
    }
}