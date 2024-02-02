import React, { useState, useEffect } from 'react'
import './CreateData.css'
import axios from 'axios';


const CreateData = ({ hide }) => {

  const [data, setData] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState(null);
  const [gender, setGender] = useState("");
  const [location, setLocation] = useState("");


  const handleSubmit = async () => {
    console.log({ name, email, age, gender, location })

    const fetchData = async () => {
      const result = await axios.post("http://localhost:8080/api/users", { name, email, age, gender, location });
      setData(result.data);
      console.log(result);
    };
    fetchData();

    setName("")
    setEmail("")
    setAge("")
    setGender("")
    setLocation("")
    hide()
  }

  return (
    <div className='add-modal'>
      <div className="modal-wrapper" onClick={() => hide()}></div>

      <div className='add-form'>
        <form onSubmit={(e) => e.preventDefault()}>
          <input
            type="text"
            name="name"
            placeholder='Enter Name'
            onChange={(e) => setName(e.target.value)}
            required />

          <input
            type="email"
            name="email"
            placeholder='Enter Email'
            onChange={(e) => setEmail(e.target.value)}

            required />

          <input
            type="number"
            name="age"
            onChange={(e) => setAge(e.target.value)}
            placeholder='Enter age'
            required />


          <div>
            <label htmlFor='gender'>Select Gender: </label>

            <select
              name="gender"
              onClick={(e) => setGender(e.target.value)}
              style={{width: '80px'}}
              required>
              <option>Male</option>
              <option>Female</option></select>
          </div>

          <input
            type='text'
            name='location'
            placeholder='Enter location'
            onChange={(e) => setLocation(e.target.value)}
            required />

          <div>
            <button onClick={handleSubmit} className='save-btn'>SUBMIT</button>
            <button onClick={() => hide()} className='cancel-btn'>CANCEL</button>
          </div>

        </form>
      </div>

    </div>
  )
}

export default CreateData
