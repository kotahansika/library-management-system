import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import "./signup.css";
import { useHistory } from 'react-router-dom';

const Signup = () => {
  const history = useHistory();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    const usernameRef = document.getElementById("username");
    const passwordRef = document.getElementById("password");
    const eyeL = document.querySelector(".eyeball-l");
    const eyeR = document.querySelector(".eyeball-r");
    const handL = document.querySelector(".hand-l");
    const handR = document.querySelector(".hand-r");

    const normalEyeStyle = () => {
      eyeL.style.cssText = "left: 0.6em; top: 0.6em;";
      eyeR.style.cssText = "right: 0.6em; top: 0.6em;";
    };
    const normalHandStyle = () => {
      handL.style.cssText =
        "height: 2.81em; top: 8.4em; left: 7.5em; transform: rotate(0deg);";
      handR.style.cssText =
        "height: 2.81em; top: 8.4em; right: 7.5em; transform: rotate(0deg);";
    };
    if (usernameRef && passwordRef) {
      usernameRef.addEventListener("focus", () => {
        eyeL.style.cssText = "left: 0.75em; top: 1.12em;";
        eyeR.style.cssText = "right: 0.75em; top: 1.12em;";
        normalHandStyle();
      });

      passwordRef.addEventListener("focus", () => {
        handL.style.cssText =
          "height: 6.56em; top: 3.87em; left: 11.75em; transform: rotate(-155deg);";
        handR.style.cssText =
          "height: 6.56em; top: 3.87em; right: 11.75em; transform: rotate(155deg);";
        normalEyeStyle();
      });

      document.addEventListener("click", (e) => {
        let clickedElem = e.target;
        if (clickedElem !== usernameRef && clickedElem !== passwordRef) {
          normalEyeStyle();
          normalHandStyle();
        }
      });
    }
  }, []);

  const handleLogin = () => {
    if (username !== "" && password !== "") {
      history.push('/registration_closed');
    }
    }
  return (
    <div className="signup-container">
      <form className="signup-form">
        <label className="signup-label" htmlFor="username">Enter your Username</label>
        <input
          className="signup-input"
          type="text" id="username"
          placeholder="Username" required
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <label className="signup-label" htmlFor="password">Enter your password</label>
        <input
          className="signup-input"
          type="password"
          id="password"
          placeholder="Password" required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="btn signup-btn-primary" onClick={handleLogin}>Sign up</button>
        <span className="signup-login_signup-text">Already have an account?<Link className="signup-signup-link" to="/login">Login</Link></span>
      </form>
        <div className="ear-l"></div>
        <div className="ear-r"></div>
        <div className="signup-face">
        <div className="blush-l"></div>
        <div className="blush-r"></div>
        <div className="eye-l">
          <div className="eyeball-l"></div>
        </div>
        <div className="eye-r">
          <div className="eyeball-r"></div>
        </div>
        <div className="nose"></div>
        <div className="mouth"></div>
      </div>
      <div className="hand-l"></div>
      <div className="hand-r"></div>
      <div className="paw-l"></div>
      <div className="paw-r"></div>
    </div>
  );
};

export default Signup;
