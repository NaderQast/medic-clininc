import React,{useState} from 'react';
import axios from 'axios';
import * as bootstrap from 'bootstrap'



const AdminFrom = () => {
  const [name_en,setName] = useState('');
  const [name_ar,setArName] = useState('');
  const [username,setUsername] = useState('');
  const [password,setPassword] = useState('');
  const [phone_number,setPhonenumber] = useState('');
  const [city_id,setCity] = useState('');
  const [gender, setGender] = useState(null);
  const [error,setError] = useState('');
  const [date, setDate] = useState('');
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://medical-clinic.serv00.net/api/actor',{name_en,username,phone_number});
      console.log('admin created successfully',response.data)
    }
    catch(error){
      setError(error.message || 'failed to create admin ')
    }
  }

  const handleGenderChange = (event) => {
    setGender(parseInt(event.target.value)) 
  };



  return (
    <div>
      <h2>Create Admin</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label><br/>
          <input type="text" id="name" value={name_en} onChange={(e) => setName(e.target.value)} />
        </div>
        <div>
          <label htmlFor="name">Name In Arabic:</label><br/>
          <input type="text" id="ar-name" value={name_ar} onChange={(e) => setArName(e.target.value)} />
        </div>
        <div>
          <label htmlFor="username">User Name:</label><br/>
          <input type="text" id="username" value={username} onChange={(e) => setUsername(e.target.value)} />
        </div>
        <div>
      <label htmlFor="gender">Gender:</label>
      <select id="gender" value={gender} onChange={handleGenderChange}>
        <option value="">Select Gender</option>
        <option value="1">Male</option>   

        <option value="2">Female</option>
      </select>
    </div>
        <div>
          <label htmlFor="city">City:</label><p>wrirte down 1 for Damascus and 2 For Aleppo</p><br/>
          <input type="number" id="city-id" value={city_id} onChange={(e) => setCity(e.target.value)} />
        </div>
        <div>
      <label htmlFor="date">Date of Birth :</label><br/>
      <input type="date" id="date" value={date} onChange={handleDateChange} />
    </div>
        <div>
          <label htmlFor="number">Phone Number:</label><br/>
          <input type="number" id="phone_number" value={phone_number} onChange={(e) => setPhonenumber(e.target.value)} />
        </div>
        <div>
          <label htmlFor="password">Password:</label><br/>
          <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <button type="submit" style={{marginTop:'10px'}} className='btn btn-primary'>Create</button>
        {error && <p>{error}</p>}
      </form>

    </div>
  )
}

export default AdminFrom ;