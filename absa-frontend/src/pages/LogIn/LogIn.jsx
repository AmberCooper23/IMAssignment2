import React from "react";
import { GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";
import Profile from "../../pages/Profile/Profile"; // keep Profile
import "./LogIn.css";

function LoginPage({ user, setUser }) {
  const handleSuccess = (credentialResponse) => {
    const decoded = jwtDecode(credentialResponse.credential);
    const loggedInUser = {
      id: decoded.sub,
      name: decoded.name,
      email: decoded.email,
      // picture removed
    };
    setUser(loggedInUser); // update global state in App.jsx
  };

  return (
    <div className="loginPageWrapper">
      <div className="loginContent">
        {user ? (
          <Profile user={user} setUser={setUser} />
        ) : (
          <div className="loginCard">
            <h2>Login</h2>
            <p>Sign in with Google to begin your journey.</p>
            <GoogleLogin
              onSuccess={handleSuccess}
              onError={() => console.log("Login Failed")}
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default LoginPage;
