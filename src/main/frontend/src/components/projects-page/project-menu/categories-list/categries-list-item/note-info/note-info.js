import React, {Component} from 'react';

import './note-info.css'

export default class NoteInfo extends Component {
    render() {
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
}