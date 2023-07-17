import "./Login.css";
import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { userContext } from "../Context/Context";
function Login() {
    const {user, userAuth} = useContext(userContext)
  const navigate = useNavigate();
  const handlesubmit = (e) => {
    e.preventDefault();
    if(login === 'Ifoda@Admin' && password === 'Ifoda12345') {
        userAuth()
        navigate("/Admin");
    } else{
        alert('Error')
    }
  };
//   Ifoda@Admin
//   Ifoda12345
  const [login, logchange] = useState("");
  const [password, paschange] = useState("");
 console.log(user);
  return (
    <div className="container">
    <div className="login_wrapper">
      <div className="form-box login" onSubmit={handlesubmit}>
        <form action="#">
          <h2 className="login_h2">Login</h2>
          <div className="input-box">
            <div className="box_title">
              <input
                type="email"
                autoComplete="off"
                onChange={(e) => {
                  logchange(e.target.value);
                }}
                required
              ></input>
              <label>Email</label>
              <span className="icon">
                <ion-icon name="mail"></ion-icon>
              </span>
            </div>

            <div className="box_title">
              <input
                type="password"
                autoComplete="off"
                onChange={(e) => {
                  paschange(e.target.value);
                }}
                required
              ></input>
              <label>Password</label>
              <span className="icon">
                <ion-icon name="lock-closed"></ion-icon>
              </span>
            </div>
          </div>
          <button className="log-button" type="submit">
            Login
          </button>
        </form>
      </div>
    </div>
    </div>
  );
}

export default Login;
