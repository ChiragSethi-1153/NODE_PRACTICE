import React, { useState, useEffect } from "react";
import axios from "axios";
import "./EditModal.css";

const EditModule = ({ hide ,info}) => {
  // const [data, setData] = useState([]);
  const [uid, setUId] = useState(info._id);
  const [name, setName] = useState(info.name);
  const [email, setEmail] = useState(info.email);
  const [gender, setGender] = useState(info.gender);
  const [age, setAge] = useState(info.age);
  const [location, setLocation] = useState(info.location);

  console.log(info);
  console.log(uid)

  const handleSubmit = async () => {
    const result = await axios.put(`http://localhost:8080/api/users/${uid}`, {
      name,
      email,
      age,
      gender,
      location,
    });
    console.log(result);
  };

  return (
    <div className="edit-modal">
      <div className="modal-wrapper" onClick={() => hide()}></div>
      <div className="edit-form">
        <form onSubmit={(e) => e.preventDefault()}>
          <div>
            <label htmlFor="name">Name: </label>
            <input
              type="text"
              name="name"
              value={name}
              placeholder="Enter Name"
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          <div>
            <label htmlFor="email">Email: </label>
            <input
            readOnly
              type="email"
              name="email"
              value={email}
            />
          </div>

          <div>
            <label htmlFor="age">Age: </label>
            <input
              type="number"
              name="age"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              placeholder="Enter age"
              required
            />
          </div>

          <div>
            <label htmlFor="gender">Select Gender: </label>
            <select
              name="gender"
              style={{width: '4vw', height: '3vh'}}
              onClick={(e) => setGender(e.target.value)}
              required
            >
              <option>Male</option>
              <option>Female</option>
            </select>
          </div>

          <div>
            <label htmlFor="location">Location: </label>
            <input
              type="text"
              name="location"
              value={location}
              placeholder="Enter location"
              onChange={(e) => setLocation(e.target.value)}
              required
            />
          </div>

          <div>
            <button
              className="edit-save-btn"
              onClick={() => {
                hide();
                handleSubmit(uid);
                
              }}
            >
              SAVE
            </button>
            <button className="edit-cancel-btn" onClick={() => hide()}>CANCEL</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditModule;
