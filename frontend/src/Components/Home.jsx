
import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Home = () => {

    const [data , setData] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            const result = await axios.get('http://localhost:8080/api/users');
            setData(result.data);
            console.log(result)
          };
          fetchData();
  }, []);

   return (
    <div>
      <table style={{border: '1px solid black'}}>
        <tr >
            
            <th style={{border: '1px solid black'}}>Name</th>
            {
                    data?.map((item) => {
                        return <td style={{border: '1px solid black'}}>{item.name}</td>
                    })
                }
        </tr>
        
        <tr>
            
        <th style={{border: '1px solid black'}}> Sr. No.</th>
            
        </tr>
        
      </table>
      
    </div>
  )
}

export default Home
