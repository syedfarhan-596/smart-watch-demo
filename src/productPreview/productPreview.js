import React from "react";
import classes from './productPreview.module.css';

const productPreview = (props) => {
    
const currentHour = new Date().getHours() > 9 ? new Date().getHours() : '0'+ new Date().getHours();
const currentMinute = new Date().getMinutes() > 9 ? new Date().getMinutes() : '0'+ new Date().getMinutes();
    return(
        
        <div className = {classes.watchDisplay}>
            <img src={props.currentPreviewImage} alt='Pink Strap Watch' />
            {
                props.showHeartBeat ?
                <div className={classes.watchHeart}>
                    <i className="fa-solid fa-heart-pulse"></i>
                    <p>78</p>
                </div>
                :
                <div className={classes.watchTime}>
                <p>{`${currentHour}:${currentMinute}`}</p>
                </div>
            }
        </div>
    );
}

export default productPreview;