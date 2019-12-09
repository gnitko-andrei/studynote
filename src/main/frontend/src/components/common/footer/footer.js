import React, {Component} from 'react';

import './footer.css'

export default class Footer extends Component {
    render() {
        return (
            <footer className="p-2 bg-light">
                <div className="copyright container">
                    <p>© Все права защищены 2019</p>
                </div>
            </footer>
        );
    }

}