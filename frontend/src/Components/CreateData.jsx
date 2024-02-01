import React,{useState, useEffect} from 'react'
import axios from 'axios';


const CreateData = () => {

    const [data, setData] = useState([]);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [age, setAge] = useState(null);
    const [gender, setGender] =useState("");
    const [location, setLocation] = useState("");

    // useEffect(() => {
    //     const fetchData = async () => {
    //       const result = await axios.post("http://localhost:8080/api/users", {name, email, age, gender, location});
    //       setData(result.data);

    //       console.log(result);
    //     };
    //     fetchData();
    //   }, []);

      const handleSubmit = async () => {
    console.log({name, email, age, gender, location})
 
        const fetchData = async () => {
          const result = await axios.post("http://localhost:8080/api/users", {name, email, age, gender, location});
          setData(result.data);
          console.log(result);
        };
        fetchData();

      }

  return (
    <div>
        
    <form  onSubmit={(e)=>e.preventDefault()}>
        <input 
        type="text" 
        name="name" 
        placeholder='Enter Name' 
        onChange={(e) => setName(e.target.value)}
        required/>
         <br /><br />
        <input 
        type="email" 
        name="email" 
        placeholder='Enter Email' 
        onChange={(e) => setEmail(e.target.value)}
        
        required/>
        <br /><br />
        <input 
        type="number" 
        name="age" 
        onChange={(e) => setAge(e.target.value)}
        placeholder='Enter age' 
        required/>
        <br /><br />
        <label htmlFor='gender'>Select Gender</label>
        <br />
        <select 
        name="gender" 
        onClick={(e) => setGender(e.target.value)}
        required>
            <option>M</option>
            <option>F</option></select>
        <br /><br />
        <input 
        type='text' 
        name='location' 
        placeholder='Enter location' 
        onChange={(e) => setLocation(e.target.value)}
        required />
        <br /><br />
        <button onClick={handleSubmit}>Submit</button>
    </form>
    </div>
  )
}

export default CreateData
