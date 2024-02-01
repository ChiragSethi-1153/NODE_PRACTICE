import React, { useEffect, useState } from "react";
import axios from "axios";
import "../App.css";
import { useNavigate } from "react-router-dom";
import Pagination from "./Pagination";
import EditModule from "./EditModule";



const Home = () => {
  
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const [currentPage, setCurrentPage] = useState(1);
  const [recordsPerPage] = useState(5)

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get("http://localhost:8080/api/users" );
      setData(result.data);
      setLoading(false)
      console.log(result);
    };
    fetchData();
  }, []);

  const indexOfFirstRecord = currentPage * recordsPerPage; 
  const indexOfLastRecord = indexOfFirstRecord - recordsPerPage;
  const currentRecords = data.slice(indexOfFirstRecord, indexOfLastRecord)
  const nPages = Math.ceil(data.length / recordsPerPage)


  const handleClick = () => {
    navigate('/userDetail')
  }

  const handleAdd = () => {
    navigate('/add')
  }



const handleDelete = async (id) => {
  // console.log("object")
  const result = await axios.delete(`http://localhost:8080/api/users/${id}`);
  console.log("deleted" + result)
}
  return (
    <div className="home">
      
      <button onClick={handleAdd}> + Add</button>

      <table className='table' style={{ border: '1px solid black' }}>
       
       <thead>
       <tr >
          <th style={{ border: '1px solid black' }}> Sr. No.</th>
          <th style={{ border: '1px solid black' }}>Name</th>
        </tr>
       </thead>

        <tbody>
        {
          data?.map((item) => {
            return (
              <tr>
                <td style={{ border: '1px solid black' }} ></td>
                <td style={{ border: '1px solid black', cursor: 'pointer' }} onClick={handleClick}>{item.name}</td>
                <td><button 
                onClick={() => {
                //  <EditModule item_name={item.name} item_email={item.email} item_age={item.age} item_gender={item.gender} item_location={item.location} />
                  navigate('/edit')}}>edit</button></td>
                <td><button onClick={() => handleDelete(item._id)}>delete</button></td>
              </tr>
            )
          })
        }
        </tbody>
      </table>

      <Pagination nPages={nPages}
                currentPage={currentPage}
                setCurrentPage={setCurrentPage} />
    </div>
  );
};

export default Home;
