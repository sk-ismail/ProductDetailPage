import React from 'react';

import classes from './App.module.css';

import ProductPreview from './productpreview/PreviewProduct';

import ProductData from './ProductData'

import ContentProduct from './productcontent/ProductContent';

import Navbar from './navbar/Navbar'

class App extends React.Component{

 state={
   productData: ProductData,
   
   showheartfeature: false,
   currentPreviewImgpos: 0,

   
 }

 imgchange=(pos)=>{
  
   this.setState({currentPreviewImgpos: pos})
 }

 btnchange=(pos)=>{
   let updatedstate = false;
   if(pos==1){
     updatedstate = true;
   }
  this.setState({showheartfeature: updatedstate})
 }
  
// plus=ProductData.map((items)=>{
//  return(
//    <div>
//  <div>{items.title}</div>
//  <div>{items.description}</div>
//  </div>
//  );
//})

 
//const currhr= new Date().getHours()>9 ? new Date().getHours() : '0' + new Date().getHours();
//const currmin= new Date().getMinutes()>9 ? new Date().getMinutes() : '0' + new Date().getMinutes();
render(){
return (

    <div className="App">
      
     <Navbar/>
 <div className={classes.main}>
         <ProductPreview currentbtnpos={this.state.productData.featureList[this.state.currentbtnpos]} 
         currentPreviewImg={this.state.productData.colorOptions[this.state.currentPreviewImgpos].imageUrl}
         showheartfeature={this.state.showheartfeature}  />
          <ContentProduct 
        data={this.state.productData} showheartfeature={this.state.showheartfeature} btnchange={this.btnchange}  currentPreviewImgpos={this.state.currentPreviewImgpos} imgchange={this.imgchange}/>
 </div>

    </div>
    
  );
}
}

export default App;
