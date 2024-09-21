import React, { useEffect, useState } from "react";
import axios from "axios";

const ClinicForm = () => {
  const [name_en, setName] = useState("");
  const [name_ar, setArName] = useState("");
  const [address_en, setAddress] = useState("");
  const [city_id, setCity] = useState("");
  const [requirements, setRequirements] = useState([1,2]);
  const [contactInfos, setContactInfos] = useState([""]);
  const [error, setError] = useState("");
  const [logo, setLogo] = useState("");

  useEffect(() => {
    console.log("File has been set.")
    console.log(logo);
  },[logo]);
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(logo);
    try {
      const response = await axios.post(
        "https://medical-clinic.serv00.net/api/clinic",
        { name_en,name_ar,address_en, city_id,contactInfos,logo,'requirements[0]':1 },
        {headers: {Authorization:`Bearer ${localStorage.getItem('authToken')}`,
          "Content-Type" : "multipart/form-data"
        }}
      );
    } catch (error) {
      setError(error.response.message || "unexpected Error !");
    }
  };
  const handleCityChange = (event) => {
    setCity(parseInt(event.target.value));
  };

  return (
    <div>
      <h2>Create Clinic</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Clinic Name :</label>
          <br />
          <input
            type="text"
            id="name"
            value={name_en}
            onChange={(e) => setName(e.target.value)}
          ></input>
          <br />
        </div>
        <div>
          <label>Name in Arabic :</label>
          <br />
          <input
            type="text"
            id="name"
            value={name_ar}
            onChange={(e) => setArName(e.target.value)}
          ></input>
          <br />
        </div>
        <div>
          <label>Clinic Address :</label>
          <br />
          <input
            type="text"
            id="address"
            value={address_en}
            onChange={(e) => setAddress(e.target.value)}
          ></input>
        </div>
        <div>
          <label>Clinic City :</label>
          <br />
          <select id="city" value={city_id} onChange={handleCityChange}>
            <option value="">Select City</option>
            <option value="1">Damascus</option>
            <option value="2">Aleppo</option>
          </select>
        </div>
        <div>
          <label>Clinic Number :</label>
          <br />
          <input
            type="text"
            id="number"
            value={contactInfos}
            onChange={(e) => setContactInfos(e.target.value)}
          ></input>
        </div>
        <div>
          <label>logo</label>
          <br />
          <input
            type="file"
            id="imgae"
            accept="image/*"
            value={""}
            onChange={(e) => setLogo(e.target.files[0])}
          ></input>
        </div>
        <button
          type="submit"
          style={{ marginTop: "10px" }}
          className="btn btn-primary"
        >
          Create Clinic
        </button>
        {error && <p>{error}</p>}
      </form>
    </div>
  );
};

export default ClinicForm;
