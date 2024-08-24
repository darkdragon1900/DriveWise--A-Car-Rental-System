import React from "react";
import { Routes, Route, Navigate, BrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import CarListing from "../pages/CarListing";
import CarDetails from "../pages/CarDetails";
import Blog from "../pages/Blog";
import BlogDetails from "../pages/BlogDetails";
import NotFound from "../pages/NotFound";
import Contact from "../pages/Contact";
import { Login } from "../pages/Login";
import { CustomerLogin } from "../pages/CustomerLogin";
import { AdminLogin } from "../pages/AdminLogin";
import { AgentLogin } from "../pages/AgentLogin";
import RegistrationForm from "../pages/RegistrationForm";
import UserProfile from "../pages/UserProfile";
import Agent from "../pages/Agent";
import AddNewCar from "../pages/Addnewcar";
import Protected from "../pages/Protected";
import Logout from "../pages/Logout";
import { CustomerDashboard } from "../pages/CustomerDashboard";
import VintageList from "../pages/VintageList";
import VintageCarDetails from "../pages/VintageCarDetails";
import PaymentMethod from "../components/UI/PaymentMethod";
import AgentProfile from "../pages/AgentProfile";





const Routers = () => {
  return (
   
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/cars" element={<CarListing />} />
        <Route path="/cars/:slug" element={<CarDetails />} />
        <Route path="/blogs" element={<Blog />} />
        <Route path="/blogs/:slug" element={<BlogDetails />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/customerLogin" element={<CustomerLogin />} />
        <Route path="/adminLogin" element={<AdminLogin />} />
        <Route path="/agentLogin" element={<AgentLogin />} />
        <Route path="/register" element={<RegistrationForm />} />
        <Route path="/userProfile" element={<UserProfile />} />
        <Route path="/agent" element={<Agent />}/>
        <Route path="/addnew" element={<AddNewCar/>}/>
        <Route path="*" element={<NotFound />} />
        <Route path="/protected" element={<Protected />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/payment"  element={<PaymentMethod />}/>
        <Route path="/vintagelist" element={<VintageList/>}/>
        <Route path="/vintagelist/:slug" element={<VintageCarDetails />} />
        <Route path="/CustomerDashboard" element={<CustomerDashboard />} />
        <Route path="/route" element={<Agent />} />
        <Route path="/agentProfile" element={<AgentProfile />} />
      </Routes>
   
  );
};

export default Routers;
