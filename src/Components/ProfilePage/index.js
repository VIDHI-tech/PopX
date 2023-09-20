import { useNavigate } from "react-router-dom";
import "./style.css";

function ProfilePage() {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Redirect to the landing page on logout
    navigate("/");
  };

  const handleSignout = () => {
    // Clear all data from localStorage to sign out
    localStorage.clear();
    navigate("/");
  };

  // Retrieve user data from localStorage
  const storedUserData = JSON.parse(localStorage.getItem("userData"));

  //Profile picture===== Extract and format the initials from the user's name
  const initials = storedUserData.name
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase())
    .join("");

  return (
    <div className="main-div">
      <div className="top-head">
        <h2>Account Settings</h2>
        <div className="info-container">
          <div className="subcontainer">
            <div className="photo">{initials}</div>
            <div className="profileInfo">
              <p style={{ fontWeight: "bold" }}>{storedUserData.name}</p>
              <p>{storedUserData.email}</p>
            </div>
          </div>
          <p className="para">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis
            illum quas, voluptatum aperiam quibusdam dolorem fugit veniam
            perferendis. Doloribus, modi.
          </p>
          <button onClick={handleLogout}>Logout</button>
          <button onClick={handleSignout}>Signout</button>
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;
