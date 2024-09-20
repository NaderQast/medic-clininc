import React,{useState,useEffect} from 'react';
import axios from 'axios' ; 



const GrantPermission = ({role_id}) => {
    const[permissions,setPermissions] = useState([])
    const[error,setError] = useState('');


    const handlePermissionChange = (e) =>{
        setPermissions(Array.from(e.target.selectedOptions).map((option) => parseInt(option.value)));
    };

    const handleSubmit = async(e) => {
        e.preventDefault();
        try{
            const response = await axios.post(`https://medical-clinic.serv00.net/api/actor_permissions/${permissions}`)
        }
        catch(error){
            setError(error.message || 'error granting permissions')
        }
    }


  return (
    <div>
        <h2>Grant Permissions for admins</h2>
        <form onSubmit={handleSubmit}>
            <div>
                <label>Permissions</label>
                <select multiple id="permissions" value={permissions} onChange={handlePermissionChange}>
                    <option value="6">Enable Admin to Update Clinic</option>
                    <option value="8">Enable Admin to Show Clinic</option>
                </select>
            </div>
            <button type='submit'>Grant Permissions</button>
        </form>
    </div>
  )
}

export default GrantPermission