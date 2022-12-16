import React, { useState, useEffect } from "react";
import axios from "axios";
const UserDetatils = () => {
  const [userdata, setUserdata] = useState([]);
   useEffect(()=>{
    getdetails();
   },)
  const getdetails = async()=>{
    try{
     const details= await axios.get("https://fakerapi.it/api/v1/credit_cards?_quantity=1").then
      (res=>console.log(res.data))
     const detailsArray= details.json();
       Object.entries(detailsArray).forEach(([key, value]) =>{
        console.log(`${key}: ${value}`);
       })
    }catch(err){console.log(err);
      alert(err.message);
  }
 }
 return (
    <div>
      <center>
        <h1>user Detatils</h1>
       {}
      </center>
    </div>
  );
};

export default UserDetatils;