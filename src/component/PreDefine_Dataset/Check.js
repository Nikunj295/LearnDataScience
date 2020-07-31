import React from 'react'
import Visulization from "./Visulization";
import VR from "./VR";

function Check() {
    let type = sessionStorage.getItem('type')
    return (
        <div>
          {
              type === 'classification'?
              <Visulization/>
              :
              <VR/>
          }  
        </div>
    )
}

export default Check
