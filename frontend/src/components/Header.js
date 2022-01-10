import React from 'react';
import './Header.css';


class Menu extends React.Component{
    render() {
        let points = [
            'Home',
            'ToDo',
            'Archive',
            'About'
        ]
    return <div className="container-menu">
        <div className="container-menu-buttons">
            <ul className="menu-buttons-list">{points.map((value, index, array) => {
                    return <li className="menu-button"><a href="#">{value}</a></li>
                })}
            </ul>
        </div>
    </div>
    }
}


export default Menu


