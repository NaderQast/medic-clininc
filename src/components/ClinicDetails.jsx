import React,{useState,useEffect} from 'react';
import {useParams} from 'react-router-dom' ; 
import  axios  from 'axios';

const ClinicDetails = () => {
  const {clinicId} = useParams();
  const[clinic , setClinic] = useState('');
  const[error,setError] = useState(null);

  useEffect(() => { 
    const fetchedClinic = async() =>{
      try{
        const response = await axios.get(`https://medical-clinic.serv00.net/api/clinic/${clinicId}`);
      }
      catch(error){
        setError(error.message);
      }

    }
    fetchedClinic();
  },[clinicId])
  
  
  
  
  
  
  return (
    <div>
      
    <h2>Clinic Details</h2>{error ? (<p>{error}</p>) : clinic ? (<div>
      <p>Name: {clinic.name_en}</p>  
      <p>Address: {clinic.address_en}</p>  
      <p>Contact Number: {clinic.contactInfos[1]}</p>  
    </div>) : (<p>Loading</p>)} 

    </div>
  );
}

export default ClinicDetails