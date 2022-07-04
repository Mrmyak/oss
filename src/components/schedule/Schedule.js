import React from 'react'

const Schedule = () => {

  
  return (
    <div>Schedule</div>
  )
}

export default Schedule

import React from 'react'
import { useState, useEffect } from 'react';
import config from '../../configfile/config.json';


const GetNetwork = () => {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);

    const url = config.instancemanagerbaseurl+'network';
    useEffect(() => {
        fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'token': window.localStorage.getItem('token')
            }
        })
            .then((res) => res.json())
            .then(
                (result) => {
                    setIsLoaded(true);
                    setItems(result);
                },
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            );
    }, []);

    if (error) {
        return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
        return <div>Loading Networks...</div>;
    } else {
        return (
            <div className='form-group'>
                <label htmlFor='network'>Network</label>
                <select className='form-control' id='network' required>
                    {items.map((item) => (
                        <option value={item.network_name}>{item.network_name}</option>
                    ))}
                    ;
                </select>
            </div>
        );
    }
};

export default GetNetwork;