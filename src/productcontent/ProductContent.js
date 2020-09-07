import React from 'react'

import classes from './productcontent.module.css'


const productcontent = (props)=>{

const colorOptions= props.data.colorOptions.map((items,pos)=>{

  const arr=[classes.productimg]
 
  if(pos=== props.currentPreviewImgpos){
    arr.push(classes.selectedimg)
  }
  
  return(
    <img onClick={()=>props.imgchange(pos)} key={pos} className={arr.join(' ')} src={items.imageUrl} alt={items.styleName} ></img>
  );
})

const featureList= props.data.featureList.map((items,pos)=>{
  
  const arr=[classes.featureitem]

  if(pos===1 && props.showheartfeature)
  {
    arr.push(classes.selectedfeatureitem);
  }
  else if(pos===0 && !props.showheartfeature){
    arr.push(classes.selectedfeatureitem);
  }

  return(
  <button onClick={()=>props.btnchange(pos)}  key={pos} className={arr.join(' ')}>{items}</button>
  );
})
  
    return(
         <div className={classes.data} >
        <div className={classes.datahead}>
        <h1 className={classes.producttitle}>{props.data.title}</h1>
        <div className={classes.producttitle}>{props.data.description}</div>
        </div>
           <h3 className={classes.producttitle}>Select color</h3> 
           <div className={classes.databody}>
          {colorOptions}
         { /*<img className={[classes.productimg, classes.selectedimg].join(' ')} src="https://imgur.com/iOeUBV7.png" alt="black"></img>
          <img className={classes.productimg} src="https://imgur.com/PTgQlim.png" alt="red" ></img>
          <img className={classes.productimg} src="https://imgur.com/Mplj1YR.png" alt="blue"></img>
          <img className={classes.productimg} src="https://imgur.com/xSIK4M8.png" alt="purple"></img>
    */}         
          </div>
        <h3>Select Feature</h3>
        <div className={classes.buttons}>
          {featureList}
         {/* <button onClick={timebtn} className={classes.time}>Time</button>
          <button onClick={timebtn} className={classes.heart}>Heart Rate</button>
 */}         
          </div>
          <button className={classes.buy} >Buy Now</button>
          </div>
    );
}
export default productcontent