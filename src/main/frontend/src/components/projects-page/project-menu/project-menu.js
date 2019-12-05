import React, {Component} from 'react';

import './project-menu.css';
import CategoriesList from "./categories-list";

export default class ProjectMenu extends Component {
    render() {
        return (
            <div className="project-menu col-lg-8">
                <h1>Project1</h1>
                <h4>Description</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                    labore et dolore magna aliqua. Adipiscing elit pellentesque habitant morbi tristique
                    senectus et netus et. Nec tincidunt praesent semper feugiat nibh. Et odio pellentesque diam
                    volutpat commodo sed. Lorem dolor sed viverra ipsum nunc aliquet bibendum enim facilisis.
                    Ultricies integer quis auctor elit sed. Lobortis elementum nibh tellus molestie nunc non.
                    Tristique senectus et netus et. Aenean et tortor at risus viverra adipiscing at. In tellus
                    integer feugiat scelerisque varius morbi enim nunc faucibus. Mauris cursus mattis molestie a
                    iaculis at erat pellentesque adipiscing.</p>
                <CategoriesList/>
            </div>
        )
    }

}