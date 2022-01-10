import React from 'react';
import './Footer.css';


class Footer extends React.Component{
    render() {
        let points = [
            'Privacy',
            'Archive',
            'About',
            'Contact Us'
        ]
    return <div className="container-footer">
        <div className="container-footer-buttons">
            <ul className="footer-buttons-list">{points.map((value, index, array) => {
                    return <li className="footer-button"><a href="#">{value}</a></li>
                })}
            </ul>
        </div>
    </div>
    }
}


export default Footer




