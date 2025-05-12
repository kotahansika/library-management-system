import React, { useEffect,useState } from 'react';
import { Link } from 'react-router-dom';
import "./login.css";
import { useHistory } from 'react-router-dom';
const Login = () => {
  const history=useHistory();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
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
  const handlelogin=() => {
    if(username ==="hansika" && password ==="honey@1605"){
    history.push('/students');
    }
    else if(username!=="hansika" && password ==="honey@1605"){
      setErrorMessage('Invalid Username');
      setUsername('');
      setPassword('');
    }
    else if(username==="hansika" && password !=="honey@1605"){
      setErrorMessage('Invalid Password');
      setUsername('');
      setPassword('');
    }
    else if(username!=="hansika" && password !=="honey@1605 " && username!== "" && password !==""){
      setErrorMessage('Invalid Credentials');
      setUsername('');
      setPassword('');
      history.push('/login');
    }
    };
  return (
    <div className="login-container">
      <form className='login-form'>
      {errorMessage && (
        <div className="login-error-message">
          {errorMessage}
        </div>
      )}
        <label className='login-label' htmlFor="username">Enter your Username</label>
        <input 
          className='login-input' 
          type="text" id="username" 
          placeholder="Username" required
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          />
        <label className='login-label' htmlFor="password">Enter your password</label>
        <input 
          className='login-input' 
          type="password"
          id="password" 
          placeholder="Password" required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          />
        <button className='btn login-btn-primary' onClick={handlelogin}>Login</button>
        <span className='login-login_signup-text'>Don't have an account?<Link className="login-signup-link" to="/signup">Sign Up</Link></span>
      </form>
      <div className="ear-l"></div>
      <div className="ear-r"></div>
      <div className="login-face">
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

export default Login;
