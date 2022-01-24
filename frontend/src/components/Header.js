import React from 'react';
import './Header.css';
import {Link} from "react-router-dom";

class Menu extends React.Component{
    render() {
    return   <div className="container-menu">
                <div className="container-menu-buttons">
                    <ul className="menu-buttons-list">
                        <li className="menu-button">
                            <Link to='/users'>Users</Link>
                        </li>
                    </ul>
                    <ul className="menu-buttons-list">
                        <li className="menu-button">
                            <Link to='/projects'>Projects</Link>
                        </li>
                    </ul>
                    <ul className="menu-buttons-list">
                        <li className="menu-button">
                            <Link to='/notes'>ToDo's</Link>
                        </li>
                    </ul>
                    <ul className="menu-buttons-list">
                        <li className="menu-button">
                            <Link to='/users'>About</Link>
                        </li>
                    </ul>
                </div>
            </div>
    }
}

export default Menu


