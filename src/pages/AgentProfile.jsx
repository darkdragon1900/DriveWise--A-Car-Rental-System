
import '../styles/userProfile.css';
import { useLocation, useNavigate } from 'react-router-dom';

function AgentProfile() {
  const location = useLocation();
  const navigate = useNavigate();

  // Handle case where location.state is null or undefined
  const user = location.state?.user;

  // If user data is not available, redirect to the dashboard or show a message
  if (!user) {
    console.error('User data not available');
    navigate('/dashboard'); // or any other route you want to redirect to
    return null;
  }

  return (
    <div className="profile-container">
      <h1 className="profile-title">Agent Profile</h1>
      <div className="profile-info">
        <p><strong>First Name:</strong> {user.firstName}</p>
        <p><strong>Last Name:</strong> {user.lastName}</p>
        <p><strong>Email:</strong> {user.email}</p>
        <p><strong>Phone:</strong> {user.phoneNo}</p>
        <p><strong>Address:</strong> {user.address}</p>
        <p><strong>Role:</strong> {user.role}</p>
      </div>
      <div className="profile-actions">
        <button className="btn btn-primary" onClick={() => console.log('Edit Profile')}>
          Edit Profile
        </button>
        <button className="btn btn-danger" onClick={() => handleLogout()}>
          Logout
        </button>
      </div>
    </div>
  );

};

export default AgentProfile;