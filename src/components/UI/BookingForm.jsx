import React, { useState } from "react";
import "../../styles/booking-form.css";
import { ToastContainer, toast } from 'react-toastify';

import axios from "axios";
import { Link } from "react-router-dom";

const BookingForm = () => {

  const [startDate, setStartDate] = useState("")
  const [endDate, setEndDate] = useState("")
  const [city, setCity] = useState("")
 // const [licenseImage, setLicenseImage] = useState("")
  const [number, setNumber] = useState("")
  

  


  async function SignUp(e) {
    e.preventDefault();
    let item = { startDate, endDate, city,number }
   console.warn(item)

    // let result = await fetch("http://localhost:7350/user/add", {
    //   method: "POST",
    //   body: JSON.stringify(item),
    //   headers: {
    //     "content-type": "application/json",
    //     "Accept": "application/json"
    //   }
    // })

    axios.post("http://localhost:7350/booking/add",{
      startDate: startDate, 
      endDate: endDate,
      city:city,
      licenseNo:number,
      
      //email:licenseImage,
     
    
    }).then((res)=>{
      console.log(res.data);
      toast.success('Car Reserved..Please Do Payment', {
        className: 'custom-toast-success',
      });
      
    }).catch((err)=>{
      console.log(err);
      toast.error('Booking failed!', {
        className: 'custom-toast-success',
      });
      
    })
  };
  return (
    <div className="main">
    <div className="register">
      <h2>Booking information</h2>
      <form id="register" onSubmit={SignUp}>
      
    
      <label htmlFor="startDate">Starting Date:</label>
      <br />
      <input
        type="date"
        name="startDate"
        id="startDate"
        value={startDate} onChange={(e) => setStartDate(e.target.value)}  className="startDate"
        placeholder="Select Starting Date"
      />
      <br /><br />

      <label htmlFor="endDate">Ending Date:</label>
      <br />
      <input
        type="date"
        name="endDate"
        id="endDate"
        value={endDate} onChange={(e) => setEndDate(e.target.value)}
        className="endDate"
        placeholder="Select Ending Date"
      />
      <br /><br />
        <ToastContainer position="bottom-center" />
        <label>City:</label>
        <br />
        <input type="text" name="city" id="city" value={city} onChange={(e) => setCity(e.target.value)} className="city"  placeholder="Enter Address" />
        <br /><br />

        
        

        <label>Licence Number:</label>
        <br />
        <input type="text" name="number" id="number"  value={number} onChange={(e) => setNumber(e.target.value)}className="number"  placeholder="Enter Number" />
        <br /><br />
        <div className="payment text-end mt-5">
        <button type="submit"><Link to="/payment" >Reserve Now</Link></button>


      </div>
        </form></div></div>
  );
};

export default BookingForm;
