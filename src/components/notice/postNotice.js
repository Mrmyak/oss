import React from 'react'
import  Form  from './noticeForm'
import hostURL from '../urls.json'
import Axios from 'axios'


const PostNotice = () => {
     const onSubmitPostNotice =  (event) => {
         event.preventDefault(event);
         const data = new FormData();
         data.append('content', event.target.content.value);
         data.append('title', event.target.title.value);
         console.log("data")
         
         Axios({
             method: 'post',
             url: hostURL+'/v1/notices',
             data: data,
             headers: {
                //  'Content-Type': 'multipart/form-data',
                'Authorization': window.localStorage.getItem('Authorization')
             }
         })
             .then((success) => {
                console.log(success)
                
             })
             .catch((error) => {
                 console.log(error);
                
             });
     };
    
    

   
  return (
    <div>
    <Form onsubmit={onSubmitPostNotice}/>
</div>
  );
  
};
export default PostNotice;

