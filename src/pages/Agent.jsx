import React, { useState } from 'react';
import axios from 'axios';
import { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Ensure Bootstrap CSS is imported
import { FaCheckCircle } from 'react-icons/fa'; // Import Font Awesome checkmark icon
import { Link, useLoaderData, useNavigate } from 'react-router-dom';

export default function Agent() {
  const [username, setUsername] = useState('');
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const storedUsername = localStorage.getItem('Agentusername');
    setUsername(storedUsername);

    const fetchUserProfile = async () => {
      try {
        //  API call to fetch the user profile
        const response = await axios.get(`http://localhost:7350/user/getbyName/${storedUsername}`);
        console.log('User profile data:', response.data);
        setUser(response.data); // Store the fetched user data in state
      } catch (error) {
        console.error('Error fetching user profile:', error);
      }
    };

    fetchUserProfile();
  }, []);

  const handleProfileClick = () => {
    // Navigate to the UserProfile page and pass the user data via state
    if (user) {
      console.log("navigated")
      navigate('/userProfile', { state: { user } });
    } else {
      console.error('User data is not available.');
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('username');
    navigate('/login');
  };
  return (
    <div>
     <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            {/* Optionally add some other content or leave it empty */}
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                 <button className="nav-link btn btn-link" onClick={handleProfileClick}>
                  Profile
                </button>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="#">
                  Booking History
                </Link>
              </li>
              <li className="nav-item">
                <button className="nav-link btn btn-link" onClick={handleLogout}>
                  Logout
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      
      <div className="text-center my-4">
        <h4 className="text-success d-flex align-items-center justify-content-center">
          <FaCheckCircle className="me-2" /> {/* Checkmark icon */}
          Logged in successfully
        </h4>
      </div>
      <div>
      <h1 className="welcome-message">Welcome, {username}!</h1> {/* Display the username */}
        <p className="description">
          You are now logged in. You can view cars or book a car now.
        </p>
        </div>
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
        <Link to="/addnew">
          <button type="button" className="btn btn-warning h2">Add New Car</button>
        </Link>
      </div>
    </div>
  );
}