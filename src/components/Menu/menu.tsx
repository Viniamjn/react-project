import React from 'react';
import {Link} from "react-router-dom";
import styles from '../Menu/menu';
const Menu = () => {
    return (
        <div>
            <ul className={'menu'}>
                <li>
                    <Link to='/'>Home</Link>
                </li>
                <li>
                    <Link to='/users'>Users</Link>
                </li>
                <li>
                    <Link to='/posts'>Posts</Link>
                </li>
                <li>
                    <Link to='/comments'>Comments</Link>
                </li>
            </ul>
            <hr/>

        </div>
    );
};

export default Menu;