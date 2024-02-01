
import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Home = () => {
    const [data , setData] = useState("")

    useEffect(() => {
        const fetchData = async () => {
            const result = await axios.get('http://localhost:8080/api/users');
            setData(result.data);
          };
          fetchData();
  }, []);
   return (
    <div>
      <table >
        <tr style={{gap: '0'}} >
            <th style={{border: '1px solid black'}}> Sr. No.</th>
            <th style={{border: '1px solid black'}}>Name</th>
        </tr>

        {data && <div>{JSON.stringify(data)}</div>}
        

      </table>
    </div>
  )
}

export default Home
