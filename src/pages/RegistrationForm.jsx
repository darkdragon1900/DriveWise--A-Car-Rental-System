import React, { useState } from 'react';
import "../styles/register.css";
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';

const RegistrationForm = () => {
  const [fname, setFirstName] = useState("");
  const [lname, setLastName] = useState("");
  const [address, setAddress] = useState("");
  const [mobilenumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("Medium");

  const navigate = useNavigate();

  const onOptionChange = e => {
    setRole(e.target.value);
  };

  const validate = () => {
    const errors = {};

    if (!fname.trim()) {
      errors.fname = "First Name is required";
      toast.error("First Name is required");
    }

    if (!lname.trim()) {
      errors.lname = "Last Name is required";
      toast.error("Last Name is required");
    }

    if (!address.trim()) {
      errors.address = "Address is required";
      toast.error("Address is required");
    }

    const phonePattern = /^[0-9]{10}$/;
    if (!phonePattern.test(mobilenumber)) {
      errors.mobilenumber = "Phone Number must be 10 digits";
      toast.error("Phone Number must be 10 digits");
    }

    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(email)) {
      errors.email = "Invalid Email Address";
      toast.error("Invalid Email Address");
    }

    if (!username.trim()) {
      errors.username = "Username is required";
      toast.error("Username is required");
    }

    if (password.length < 6) {
      errors.password = "Password must be at least 6 characters long";
      toast.error("Password must be at least 6 characters long");
    }

    return errors;
  };

  async function SignUp(e) {
    e.preventDefault();
    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      return;
    }

    let item = { fname, lname, address, mobilenumber, email, username, password, role };
    console.warn(item);

    try {
      const res = await axios.post("http://localhost:7350/user/add", {
        firstName: fname,
        lastName: lname,
        phoneNo: mobilenumber,
        email: email,
        address: address,
        userName: username,
        password: password,
        role: role,
      });
      console.log(res.data);
      toast.success("Registration successful!");
      setTimeout(() => {
        navigate('/login');
      }, 1500);
    } catch (err) {
      console.log(err);
      toast.error("Registration failed!");
    }
  }

  return (
    <div className="main">
      <div className="register">
        <h2>Register Here</h2>
        <form id="register" onSubmit={SignUp}>
          <label>First Name:</label>
          <br />
          <input
            type="text"
            name="fname"
            id="fname"
            value={fname}
            onChange={(e) => setFirstName(e.target.value)}
            placeholder="Enter First Name"
          />
          <br /><br />
          <label>Last Name:</label>
          <br />
          <input
            type="text"
            name="lname"
            id="lname"
            value={lname}
            onChange={(e) => setLastName(e.target.value)}
            placeholder="Enter Last Name"
          />
          <br /><br />
          <label>Address:</label>
          <br />
          <input
            type="text"
            name="address"
            id="address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            placeholder="Enter Address"
          />
          <br /><br />
          <label>Phone Number:</label>
          <br />
          <input
            type="tel"
            id="mobilenumber"
            name="mobilenumber"
            pattern="[0-9]{10}"
            value={mobilenumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            placeholder="1234567890"
            required
          />
          <br /><br />
          <label>Email:</label>
          <br />
          <input
            type="email"
            name="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter Email"
          />
          <br /><br />
          <label>UserName:</label>
          <br />
          <input
            type="text"
            name="username"
            id="username"
            value={username}
            onChange={(e) => setUserName(e.target.value)}
            placeholder="Enter UserName"
          />
          <br /><br />
          <label>Password:</label>
          <br />
          <input
            type="password"
            name="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter Password"
          />
          <br /><br />
          <input
            type="radio"
            name="role"
            value="Customer"
            id="customer"
            checked={role === "Customer"}
            onChange={onOptionChange}
          />
          <label htmlFor="regular">Customer</label>

          <input
            type="radio"
            name="role"
            value="Agent"
            id="agent"
            checked={role === "Agent"}
            onChange={onOptionChange}
          />
          <label htmlFor="medium">Agent</label>

          <input
            type="radio"
            name="role"
            value="Admin"
            id="admin"
            checked={role === "Admin"}
            onChange={onOptionChange}
          />
          <label htmlFor="large">Admin</label>

          <button type="submit" value="Submit" name="submit" id="submit">Submit</button>
        </form>
        <ToastContainer position="bottom-center" />
      </div>
    </div>
  );
};

export default RegistrationForm;
