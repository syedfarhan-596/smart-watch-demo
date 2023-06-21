import React from 'react';
import amazon from '../assets/amazonLogo.jpg';
import classes from './header.module.css';

const headerSection = () => {
    return (
        <div >
            <div className={classes.topBar}>
                <img className={classes.amazonLogo} src={amazon} alt='amazon logo'/>
            </div>
        </div>
    );
}

export default headerSection;