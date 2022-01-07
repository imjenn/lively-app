import React from 'react';
import { Link } from 'react-router-dom';

import styles from './Navbar.module.css';

const Navbar = (props) => {

    return (
        <div className={styles.navbar}>
            <nav>
                <h1><Link className={styles.title} to='/'>LIVELY</Link></h1>
                <ul>
                    <li><Link className={styles.link} to='/'>Home</Link></li>
                    <li><Link className={styles.link} to='/search'>Search for a Location</Link></li>
                    <li><Link className={styles.link} to='/contact'>FAQs</Link></li>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar;