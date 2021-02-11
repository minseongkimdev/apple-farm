import React from "react";



export default function Header() {

  const videoSource = "https://vimeo.com/360302080";


  return(
    <div style={{display:'inline-block', width:'100%'}}>
      <video autoPlay="autoplay" loop="loop" muted>
        <source src={videoSource} type="video/mp4"/>
      </video>
    </div>
  )
};


