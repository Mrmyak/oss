import React from 'react'
import Axios from 'axios';
const Notice = () => {
    
    const url = "https://soe-backend.herokuapp.com/v1/notices";
    Axios({
      method:'get',
      url: url,
      headers:{
        'Content-type':'application/json'
        
      }
    }).then((res)=>{
      console.log(res.data.notices);
    })

  return (
    <div>
    <h1>Notice</h1>
    </div>
  )
}

export default Notice
