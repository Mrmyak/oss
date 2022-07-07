import { useEffect, useState } from "react"
import Data from './Data'
import './notice.css'


const Notice = () => {
    const [data, setData] = useState([])
    const url = "https://soe-backend.herokuapp.com/v1/notices"

    const getData = async () => {
        const response = await fetch(url)
        const json = await response.json()
        setData(json.notices)
    }

    console.log(data)

    useEffect(() => {
        getData()
    }, [])

    return (
        <div className="">
          <div class="two alt-two">
  <h1>Notice Board
    <span>School of Engineering</span>
  </h1>
</div>
            {data.map(a => (
                <Data data={a}/>

            ))}
        </div>
    )
}

export default Notice