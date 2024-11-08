import React from 'react';
import { Link } from 'react-router-dom';
import style from './menu.module.css'
const Menu = () => {
    return (
        <div>
            <ul className={style.menu}>
                <li>
                    <Link to='/'>Home</Link>
                </li>
                <li>
                    <Link to='/users' className={style.menu}>Users</Link>
                </li>
                <li>
                    <Link to='/posts' className={style.menu}>Posts</Link>
                </li>
                <li>
                    <Link to='/comments' className={style.menu}>Comments</Link>
                </li>
                <li>
                    <Link to='/all' className={style.menu}>Comments+Posts</Link>
                </li>
            </ul>
            <hr/>

        </div>
    );
};

export default Menu;