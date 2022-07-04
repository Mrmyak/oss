import React from 'react'
import Axios from 'axios'
import { useState } from 'react'

import URLS from "../urls.json"

const Courses = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);


  Axios({
      method:'get',
      url:  URLS.hostUrl+'/v1/programs',
      headers:{
        'Content-type':'application/json',

        
      }
    }).then((res)=>{
      console.log(res.data);
      console.log(res.data.programs);
    })
    //  .then((res) => res.json())
    //  .then((result) => {
    //       setIsLoaded(true);
    //       setItems(result);
    //   }

    Axios({
      method:'get',
      url: URLS.hostUrl+'/v1/semesters',
      headers:{
        'Content-type':'application/json',

        
      }
    }).then((res)=>{
      console.log(res.data);
    })

    Axios({
      method:'get',
      url: URLS.hostUrl+'/v1/levels',
      headers:{
        'Content-type':'application/json',

        
      }
    }).then((res)=>{
      console.log(res.data);
    })

    Axios({
      method:'get',
      url: URLS.hostUrl+'/v1/faculties',
      headers:{
        'Content-type':'application/json',

        
      }
    }).then((res)=>{
      console.log(res.data);
    })

    Axios({
      method:'get',
      url: URLS.hostUrl+'/v1/courses',
      headers:{
        'Content-type':'application/json',

        
      }
    }).then((res)=>{
      console.log(res.data);
    })


  return (
    <div className='form-group'>
                <label htmlFor=''>Faculty Level Program Semester</label>
                <select className='' id='' required>
                    {items.map((item) => (
                        <option value={item.programs}>{item.programs}</option>
                    ))}
                    ;
                </select>
            </div>
  )
}

export default Courses