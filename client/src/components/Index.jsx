import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from './Index.module.css';
import './Index.module.css';
import img from './images/main-1.png';
import mobile from './images/mobile.png';
import 'font-awesome/css/font-awesome.min.css';

const Index = (props) => {

    return (
        <div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                <path fill="#e1c5ed" fill-opacity="0.6" d="M0,224L34.3,229.3C68.6,235,137,245,206,218.7C274.3,192,343,128,411,117.3C480,107,549,149,617,160C685.7,171,754,149,823,149.3C891.4,149,960,171,1029,192C1097.1,213,1166,235,1234,224C1302.9,213,1371,171,1406,149.3L1440,128L1440,0L1405.7,0C1371.4,0,1303,0,1234,0C1165.7,0,1097,0,1029,0C960,0,891,0,823,0C754.3,0,686,0,617,0C548.6,0,480,0,411,0C342.9,0,274,0,206,0C137.1,0,69,0,34,0L0,0Z"></path>
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                <path fill="#8424bd" fill-opacity="0.2" d="M0,192L34.3,197.3C68.6,203,137,213,206,192C274.3,171,343,117,411,122.7C480,128,549,192,617,192C685.7,192,754,128,823,117.3C891.4,107,960,149,1029,186.7C1097.1,224,1166,256,1234,250.7C1302.9,245,1371,203,1406,181.3L1440,160L1440,0L1405.7,0C1371.4,0,1303,0,1234,0C1165.7,0,1097,0,1029,0C960,0,891,0,823,0C754.3,0,686,0,617,0C548.6,0,480,0,411,0C342.9,0,274,0,206,0C137.1,0,69,0,34,0L0,0Z"></path>
            </svg>
            <svg className={styles.svg_purple} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                <path fill="#8424bd" fill-opacity="0.85" d="M0,0L40,42.7C80,85,160,171,240,176C320,181,400,107,480,96C560,85,640,139,720,149.3C800,160,880,128,960,128C1040,128,1120,160,1200,149.3C1280,139,1360,85,1400,58.7L1440,32L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z"></path>
            </svg>
            <nav>
                <h1>LIVELY</h1>
                <ul>
                    <li><Link className={styles.link} to='/'>Home</Link></li>
                    <li><Link className={styles.link} to='/search'>Search for a Location</Link></li>
                    <li><Link className={styles.link} to='/contact'>FAQs</Link></li>
                </ul>
            </nav>
            <div className={styles.main}>
                <div className={styles.first_section}>
                    <p className={styles.first_section_header}>
                        Busyness tracking with a simple click
                    </p>
                    <div className={styles.first_section_btns}>
                        <a className={styles.search_link} href="/search">Search Now</a>
                        <a href="#second">Learn More <i className="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                    </div>
                </div>
                <a href='https://www.freepik.com/vectors/people'><img className={styles.background} src={img} alt="People vector from Freepik" title="Designed by Freepik" /></a>
            </div>
            <div className={styles.second_section}>
                <a href='https://www.freepik.com/vectors/infographic'><img className={styles.index_image_mobile} src={mobile} alt="Mobile picture from Freepik" title="Designed by Freepik"/></a>
                <p className={styles.second_section_header}>
                    Search the location for your favorite restaurant, grocery store, or any public location
                </p>
            </div>
        </div>
    )
}

export default Index;