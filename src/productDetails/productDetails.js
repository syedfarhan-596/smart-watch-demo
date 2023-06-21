import React from 'react';
import classes from './productDetails.module.css';

const productDetails = (props) => {
  const colorOptions = props.data.colorOptions.map((item, pos) => {
    const classArr =[classes.productImg]
        if(pos === props.currentPreviewImagePos){
          classArr.push(classes.selectedProductImg)
        }
    return(
      <img className={classArr.join(' ')} key={pos} src={item.linkImg} alt={item.styleName} onClick={() =>props.onClickColorOptions(pos)}/>
    );
  })
const featuresList = props.data.featuresList.map((item, pos) => {
  const classArr = [classes.featuresBtn];

      if(pos === 1 && props.showHeartBeat){
        classArr.push(classes.selectedFeaturesBtn);
      }
      else if(pos === 0 && !props.showHeartBeat){
        classArr.push(classes.selectedFeaturesBtn);
      }
  return(
    <button onClick={ ()=> props.onFeaturesBtnClick(pos)} key={pos} className={classArr.join(' ')} >{item}</button>
  );
})

    return (
        <div className={classes.featuresOfWatch}>
            <h1 className={classes.title}>{props.data.title}</h1>
            <p className = {classes.titleDiscription}> {props.data.discription}</p>
            <h2>Select Color</h2>
          <div> {colorOptions}</div>
          <h2>Features</h2>
          <div> {featuresList} </div>
            <button className={classes.buyBtn}>Buy Now</button>
        </div>
    );
}

export default productDetails;