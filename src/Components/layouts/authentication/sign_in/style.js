import React, { useState } from "react";
import { Button, Grid } from "@mui/material";
import { Link } from "react-router-dom";
import "./style.css";
import Navbar from "../../Navbar/index";
import login from "../../../images/login-bg.png";

const backgroundImageStyle = {
  backgroundImage: `url(${login})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  width: "98.5vw",
  height: "auto",
  overflow: "hidden",
  position: "relative",
};

const loginFormContainerStyle = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  height: "100vh",
  position: "relative",
};

export default function LoginForm() {
  var [user, setuserinfo] = useState({
    mobile_no: "",
    password: "",
  });

  const userInputEvent = (e) => {
    const { name, value } = e.target;
    setuserinfo((preValue) => {
      return {
        ...preValue,
        [name]: value,
      };
    });
    console.log(user);
  };

  return (
    <Grid item style={backgroundImageStyle}>
      <Navbar />
      <Grid container justifyContent="center" sx={{ mt: 4 }}>
        <Grid style={loginFormContainerStyle}>
          <Grid className="login__form">
            <h1 className="login__title">Login</h1>

            <Grid className="login__inputs">
              <Grid className="login__box">
                <input
                  onChange={userInputEvent}
                  name="mobile_no"
                  placeholder="Mobile No"
                  className="login__input"
                />
                <i className="ri-mail-fill"></i>
              </Grid>

              <Grid className="login__box">
                <input
                  onChange={userInputEvent}
                  name="password"
                  placeholder="Password"
                  className="login__input"
                />
                <i className="ri-lock-2-fill"></i>
              </Grid>
            </Grid>

            {/* <Grid className="login__check">
              <Grid className="login__check-box"></Grid>

              <Button className="login__forgot">Forgot Password?</Button>
            </Grid> */}

            <Button type="submit" class="login__button">
              Login
            </Button>

            <Grid className="login__register">
              Don't have an account?
              <Button component={Link} to="/Signup" sx={{ ml: -0.6 }}>
                Register
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
