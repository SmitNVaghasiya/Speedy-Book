import React, { useState } from "react";
import { Button, Grid } from "@mui/material";
import { Link } from "react-router-dom";
import "./style.css";
import Navbar from "../../Navbar/index";
import login from "../../../images/car1.jpg";

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
  marginTop: "10vh",
  position: "relative",
  marginBottom: "10vh",
};

export default function RegistrationForm() {
  const [user, setUser] = useState({
    name: "",
    mobileno: "",
    address: "",
    password: "",
    otp: "",
  });

  const userInputEvent = (e) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({
      ...prevUser,
      [name]: name === "mobileno" ? "+91" + value : value,
    }));
    console.log(user);
  };

  return (
    <Grid item style={backgroundImageStyle}>
      <Navbar />
      <Grid container justifyContent="center" sx={{ mt: 4 }}>
        <Grid style={loginFormContainerStyle}>
          <Grid className="login__form">
            <h1 className="login__title">Register</h1>

            <Grid className="login__inputs">
              <Grid className="login__box">
                <input
                  onChange={userInputEvent}
                  name="name"
                  placeholder="Name"
                  className="login__input"
                />
                <i className="ri-user-fill"></i>
              </Grid>

              <Grid className="login__box">
                <input
                  onChange={userInputEvent}
                  name="mobileno"
                  placeholder="Mobile No"
                  className="login__input"
                />
                <i className="ri-mail-fill"></i>
              </Grid>

              <Grid className="login__box">
                <input
                  onChange={userInputEvent}
                  name="otp"
                  placeholder="Otp"
                  className="login__input"
                />
                <i className="ri-lock-2-fill"></i>
              </Grid>

              <Grid className="login__box">
                <input
                  onChange={userInputEvent}
                  name="password"
                  placeholder="Password"
                  className="login__input"
                />
                <i className="ri-map-pin-user-line"></i>
              </Grid>

              <Grid className="login__box">
                <input
                  onChange={userInputEvent}
                  name="address"
                  placeholder="Address"
                  className="login__input"
                />
                <i className="ri-map-pin-user-line"></i>
              </Grid>
            </Grid>

            <Button type="submit" class="login__button">
              Register
            </Button>

            <Grid className="login__register">
              Already have an account?
              <Button component={Link} to="/Login" sx={{ ml: -0.6 }}>
                Login
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
