import React,{useState, useCallback} from 'react';

import PropTypes from 'prop-types';
import {PlusOutlined} from '@ant-design/icons'

export default function PostImages ({images}){

  const [showImagesZoom,setShowImagesZoom ] = useState(false);

  const onZoom = useCallback(() => {
    setShowImagesZoom(true);
  },[]);
  
    if(images.length === 1){
      return (
          <>
              <img role="presentation" src={images[0].src} alt={images[0].src} onClick={onZoom}/>
          </>
      )
    }

    if(images.length === 2){
      return (
          <>
              <img role="presentation" style ={{width:"50%", display:"inline-block"}} src={images[0].src} alt={images[0].src} onClick={onZoom}/>
              <img role="presentation" style ={{width:"50%",  display:"inline-block"}} src={images[1].src} alt={images[1].src} onClick={onZoom}/>

          </>
      )
    }

    return (
      <>
      <div>
      <img role="presentation" style ={{width:"75%"}} src={images[0].src} alt={images[0].src} onClick={onZoom}/>
      <div>
          
        <PlusOutlined/>
        <br/>

      </div>
      </div>
      </>

    );
  

};
