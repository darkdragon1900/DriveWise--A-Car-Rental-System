import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import "../styles/userDashboard.css";
import 'bootstrap/dist/css/bootstrap.min.css';

export function CustomerDashboard() {
  const [username, setUsername] = useState('');
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const storedUsername = localStorage.getItem('username');
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
    <div className="dashboard">
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
                {/* Trigger handleProfileClick on click */}
                <button className="nav-link btn btn-link" onClick={handleProfileClick}>
                  Profile
                </button>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/cars">
                  View Cars
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
      <div className="container">
        <h1 className="welcome-message">Welcome, {username}!</h1> {/* Display the username */}
        <p className="description">
          You are now logged in. You can view cars or book a car now.
        </p>
        <button
          className="btn btn-primary view-cars-btn"
          onClick={() => navigate('/cars')}
        >
          View Booked Cars
        </button>
      </div>
    </div>
  );
}

export default CustomerDashboard;
