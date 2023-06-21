import React ,{Component} from 'react';
import logo from './logo.svg';
import Header from './ProductHeader/header';
import WatchDisplay from './productPreview/productPreview';
import FeaturesOfWatch from './productDetails/productDetails';
import classes from './App.module.css';
import productData from './utlis/productData';

class App extends Component {
  state= {
    productData:productData,
    currentPreviewImagePos:0,
    showHeartBeat: false,
  }
  onClickColorOptions = (pos) => {
    this.setState({currentPreviewImagePos:pos})
  }
  onFeaturesBtnClick = (pos) => {
    let updatedBtnState = false;
    if(pos === 1){
      updatedBtnState = true;
    }
    this.setState({showHeartBeat: updatedBtnState})
  }
  render() {
    return (
      <div className="App"> 
          <Header />
        <section className={classes.mainWrapper}>
             <div className={classes.watchDisplay}>
                <WatchDisplay 
                currentPreviewImage={this.state.productData.colorOptions[this.state.currentPreviewImagePos].linkImg} 
                showHeartBeat={this.state.showHeartBeat} currentPreviewImagePos={this.state.currentPreviewImagePos} />
            </div>
            <div className={classes.featuresOfWatch}>
                <FeaturesOfWatch data={this.state.productData} onClickColorOptions={this.onClickColorOptions} 
                currentPreviewImagePos={this.state.currentPreviewImagePos} onFeaturesBtnClick={this.onFeaturesBtnClick} 
                showHeartBeat={this.state.showHeartBeat} />
            </div>
        </section>
      </div>
    );

  }
}

export default App;
