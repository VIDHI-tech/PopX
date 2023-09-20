import { Link } from "react-router-dom";
import "./style.css";

function LandingPage() {
  return (
    <div className="main-div">
      <div className="content">
        <h2>Welcome to PopX</h2>
        <p>Lorem ipsum dolor sit amet conr adipisicing elit. Dolorxsse elit.</p>

        <Link to="/signup">
          <button className="signup-btn">Create Account</button>
        </Link>

        <Link to="/login">
          <button className="login-btn">Already Registered? Login</button>
        </Link>
      </div>
    </div>
  );
}

export default LandingPage;
