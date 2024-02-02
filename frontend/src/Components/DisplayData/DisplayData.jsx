import React, {useState} from 'react'
import './DisplayData.css'

const DisplayData = ({hide, info}) => {

    const name = info.name  ;
    const email= info.email;
    const gender= info.gender;
    const age = info.age;
    const location = info.location;

  return (
    <div className='display-modal'>
       <div className="modal-wrapper" onClick={() => hide()}></div>
       <div className="display-form">
        <form>
          <div>
            <label htmlFor="name">Name: </label>
            <input
            readOnly
              type="text"
              name="name"
              value={name}
         
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
                readOnly
               type="number"
              name="age"
              value={age}
              
            />
          </div>

          <div>
            <label htmlFor="gender">Gender: </label>
            <input readonly name='gender' value={gender} />
          </div>

          <div>
            <label htmlFor="location">Location: </label>
            <input
            readOnly
              type="text"
              name="location"
              value={location}
              
            />
          </div>
          </form>
          </div>
    </div>
  )
}

export default DisplayData
