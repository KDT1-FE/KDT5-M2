import React from "react";
import '../scss/components/loading.scss'
import spin from '../image/spin.gif'

function Loading() {
  return(
    <div className="LoadingContainer">
      <div className="LoadingContainer-box">
        <img src={spin}/>
      </div>
    </div>
  )
}
export default Loading