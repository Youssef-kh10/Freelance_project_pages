// SignupPage.jsx
import React, { useState } from "react";
import AuthForm from "./AuthForm";
import "./SignupPage.css";

const SignupPage = () => {
  const [authMode, setAuthMode] = useState("signin");

  const changeAuthMode = () => {
    setAuthMode(authMode === "signin" ? "signup" : "signin");
  };

  return (
    <>  
      <img
        src="https://www.freelance-informatique.fr/website/ressources/images/logo-fi.png?v=2"
        alt="logo"
        className="img-fluid logo-top-left mt-3 ml-5"
      />

      <div className="signup-page">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-5">
              <div className="image-container">
                <img
                  src="https://www.data-science.ie/wp-content/uploads/2019/01/signup.png"
                  alt="image"
                  className="img-fluid left-image" 
                />
                <p className="image-text">text text text</p>
              </div>
            </div>

            <div className="col-md-6">
              <div className="signup-form-section">
                <AuthForm authMode={authMode} changeAuthMode={changeAuthMode} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignupPage;
