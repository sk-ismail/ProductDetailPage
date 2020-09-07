import React from 'react';

import classes from './preview.module.css'

const preview = (props)=>{

    return(
        <div className={classes.preview}>
      
      <img  src={props.currentPreviewImg} alt="watch"></img>
          
            <div className={classes.timedisplay}> 

    {
        props.showheartfeature ?   <p>69</p> :<p>12:26</p>
    }

            
            
           </div>
        </div>
    );
}

export default preview