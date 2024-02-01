import React,{useState, useEffect} from 'react'
import axios from 'axios';
import '../App.css'

const EditModule = () => {
  
    const [data, setData] = useState([])
    const [id, setId] = useState("")
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [gender, setGender] = useState('');
    const [age, setAge] = useState(null);
    const [location, setLocation] = useState("");


    useEffect(() => {
        const fetchData = async () => {
          const result = await axios.get("http://localhost:8080/api/users");
          setData(result.data);
          console.log(result);
        };
        fetchData();
      }, []);

    // data?.map((item) => {
    //     setName(item.name);
    //     setEmail(item.email);
    //     setAge(item.age)
    //     setLocation(item.location);
    // })
    // console.log(data)

    // useEffect(() => {
    //     const fetchData = async () => {
    //         const result = await axios.put("http://localhost:8080/api/users", {name, email, age, gender, location});
    //         console.log(result);
    //       };
    // }, []);

    const handleSubmit = async (id) => {
            const result = await axios.put(`http://localhost:8080/api/users${id}`, {name, email, age, gender, location});
            console.log(result);
    }
    


    return (
    <div className='edit-modal'>
        {
            data?.map((item) => {
                
            })
        }
        <form  onSubmit={(e)=>e.preventDefault()}>
        <label htmlFor='name'>Name</label>
        <input 
        type="text" 
        name="name" 
        value={name}
        placeholder='Enter Name' 
        onChange={(e) => setName(e.target.value)}
        required/>
         <br /><br />
         <label htmlFor='email'>Email</label>
        <input 
        type="email" 
        name="email"
        value={email} 
        placeholder='Enter Email' 
        onChange={(e) => setEmail(e.target.value)}
         
        required/>
        <br /><br />
        <label htmlFor='age'>Age</label>
        <input 
        type="number" 
        name="age" 
        value={age}
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
            <option>F</option>
        </select>
        <br /><br />
        <label htmlFor='location'>Location</label>
        <input 
        type='text' 
        name='location'
        value={location} 
        placeholder='Enter location' 
        onChange={(e) => setLocation(e.target.value)}
        required />
        <br /><br />
        <button onClick={(item) => handleSubmit(item._id)}>Submit</button>
    </form>
        
    </div>
  )
}

export default EditModule
