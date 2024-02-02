import React, { useEffect, useState } from "react";
import axios from "axios";
import './Home.css'
import { useNavigate } from "react-router-dom";
import EditModule from "../EditModal/EditModule";
import DisplayData from "../DisplayData/DisplayData";
import CreateData from "../CreateData/CreateData";



const Home = () => {

  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [showdata, setShowData] = useState(false);
  const [showEdit, setShowEdit] = useState(false)
  const [showAdd, setShowAdd] = useState(false)

  const [singleItem, setSingleItem] = useState({});

  const [page, setPage] = useState(1);
  const [pageCount, setPageCount] = useState(0)
  const [limit, setLimit] = useState(5);

  useEffect(() => {
    const fetchData = async () => {

      const result = await axios.get(`http://localhost:8080/api/users?page=${page}&limit=${limit}`);
      setData(result.data.users);

      if (result) { setPageCount(Math.ceil(result.data.pagination.pageCount)) }
    };
    fetchData();

  }, [page, limit]);



  const handleClick = (item) => {
    setShowData(true)
    setSingleItem(item)
  }

  const handleAdd = () => {
    setShowAdd(true);
  }


  const showEditModal = (item) => {
    setShowEdit(true)
    setSingleItem(item)
  }

  const handleShowAdd = () => {
    setShowAdd(false)
  }
  const handleShowData = () => {
    setShowData(false)
  }
  const handleEdit = () => {
    setShowEdit(false)
  }

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:8080/api/users/${id}`)
      console.log(data)
      const newData=data.filter((item) => item._id !== id)
      setData(newData)
      console.log(newData)
    }
    catch (err) {
      console.log(err)
    }

  }


  function handlePrevious() {
    setPage((p) => {
      if (p === 1) return p
      else {
        return p - 1
      }

    })
  }

  function handleNext() {
    setPage((p) => {
      if (p === pageCount) return p
      else {
        return p + 1
      }

    })
  }

  return (
    <div className="home">

      <div className="home-container">

        <div className="home-header">
          <h4>Users</h4>
          <button className="add-btn" onClick={handleAdd}>ADD USER</button>
          {/* <input type="text" name="search" className="home-search" placeholder="Search users" /> */}


        </div>




        <table className='table'>

          <thead className="table-head">
            <tr className="table-row">
              <th>Name</th>
              <th>Email</th>
              <th>Location</th>
              <th >Edit</th>
              <th>Delete</th>
            </tr>
          </thead>

          <tbody className="table-body">
            {
              data?.map((item) => {
                return (
                  <tr className="table-row">
                    <td onClick={() => handleClick(item)}>{item.name}</td>
                    <td onClick={() => handleClick(item)}>{item.email}</td>
                    <td onClick={() => handleClick(item)}>{item.location}</td>
                    <td>
                      <button
                        onClick={() => showEditModal(item)}
                        className="edit-btn"
                      >
                        EDIT
                      </button>
                    </td>

                    <td><button className="delete-btn" onClick={() => handleDelete(item._id)}>DELETE</button></td>
                  </tr>
                )
              })
            }
          </tbody>
        </table>



        <footer className="home-footer">
          <div>
            <label htmlFor="show-result" >Showing: </label>
            <input type="Number" onChange={(e) => setLimit(e.target.value)} />

          </div>
          <div className='pagination'>


            <button disabled={page === 1} className="prev-btn" onClick={handlePrevious}>Prev</button>
            <span className="page-no">{page}</span>
            <button disabled={page === pageCount} className="next-btn" onClick={handleNext}>Next</button>
          </div>
        </footer>

        {showAdd && <CreateData hide={handleShowAdd} />}
        {showdata && <DisplayData hide={handleShowData} info={singleItem} />}
        {showEdit && <EditModule hide={handleEdit} info={singleItem} />}

      </div>


    </div>
  );
};

export default Home;