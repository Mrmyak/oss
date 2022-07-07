import React from 'react'
import "./notice.css"
const Data = ({data}) =>{
    const hostURL  ='https://soe-backend.herokuapp.com'
    const imageLink= hostURL+data.media_links
    

   
  return (
    <div className="notice_container">
           
            <h3>{data.title}</h3>
            <p class="publish_date" >Published on: {data.publish_date}</p>
            <p class="content">{data.content}</p>
            <a class="link" href={imageLink} target='blank'>Link:</a>
            
            <img 
                src={imageLink}
            ></img>

        </div>
  )
}

export default Data