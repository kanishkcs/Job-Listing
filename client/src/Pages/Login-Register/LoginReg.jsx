import React, { useState } from "react";
import "./LoginReg.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";

function LoginReg() {
  const [isActive, setIsActive] = useState(false);
  const navigate = useNavigate();
  const [loginData, setloginData] = useState({ email: "", password: "" });
  const [registerData, setregisterData] = useState({
    name: "",
    email: "",
    password: "",
    cpassword:"",
    isRecruiter: false,
  });
  const onChangeLogin = (event) => {
    const { name, value } = event.target;
    setloginData({
      ...loginData,
      [name]: value,
    });
  };

  const onChangeRegister = (event) => {
    const { name, value, type, checked } = event.target;
    setregisterData({
      ...registerData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleRegister = (event) => {
    event.preventDefault();
    if(registerData.password!==registerData.cpassword){
      toast.error("Password Does not match", {
        position: "bottom-right",
        icon: "🫤",
      });
      return;
    }
    axios
      .post("http://localhost:3200/api/v1/register", registerData)
      .then(function (response) {
        if (response.status === 200) {
          toast.success("Registered Sucessfully", {
            position: "bottom-right",
            icon: "😁",
          });
          setTimeout(() => {
            navigate("/");
          }, 2000);
        } else if (response.status == 202) {
          toast.error("Email Already Exists", {
            position: "bottom-right",
          });
        } else if (response.status === 422) {
          toast.error("Password Must be 8 char Long", {
            position: "bottom-right",
          });
        }
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  const handleLogin = (event) => {
    event.preventDefault();
    axios
      .post("http://localhost:3200/login", loginData)
      .then(function (response) {
        if (response.status === 200) {
          toast.success("Logged In", {
            position: "bottom-right",
            icon: "😁",
            style: {
              borderRadius: "10px",
              background: "#333",
              color: "#fff",
            },
          });
          setTimeout(() => {
            navigate("/");
          }, 2000);
        } else {
          toast.error("User Name or Password wrong", {
            position: "bottom-right",
            icon: "😐",
          });
        }
      });
  };
  const toggleForm = () => {
    setIsActive((prevState) => !prevState);
  };

  return (
    <>
      <section className="sectionLR">
        <div className={`containerLR  ${isActive ? "active" : ""}`}>
          <div class="user signinBx">
            <div class="imgBx">
              <h1
                style={{ "font-weight": "bold", "font-size": "2.5rem" }}
                className="montserrat"
              >
                Hello, Friend!
              </h1>
              <p className="montserrat" style={{ "text-align": "center" }}>
                Enter your personal details and start journey with us
              </p>
              <input
                className="formInput submitBtn montserrat switchBtn"
                type="submit"
                name=""
                value="SIGN UP"
                onClick={toggleForm}
              />
            </div>
            <div class="formBx">
              <form action="" onsubmit="return false;">
                <h2>Sign In</h2>
                <input
                  className="formInput"
                  type="email"
                  name="email"
                  placeholder="Email"
                  onChange={onChangeLogin}
                />
                <input
                  className="formInput"
                  type="password"
                  name="password"
                  placeholder="Password"
                  onChange={onChangeLogin}
                />
                <input
                  className="formInput submitBtn"
                  type="submit"
                  name=""
                  value="Login"
                  onClick={handleLogin}
                />
                <p class="signup">
                  Don't have an account ?
                  <a href="#" onClick={toggleForm}>
                    Sign Up.
                  </a>
                </p>
              </form>
            </div>
          </div>
          <div class="user signupBx">
            <div class="formBx">
              <form action="" onsubmit="return false;">
                <h2>Create an account</h2>
                <input
                  className="formInput"
                  type="text"
                  name="name"
                  placeholder="Full Name"
                  onChange={onChangeRegister}
                />
                <input
                  className="formInput"
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  onChange={onChangeRegister}
                />
                <input
                  className="formInput"
                  type="password"
                  name="password"
                  placeholder="Create Password"
                  onChange={onChangeRegister}
                />
                <input
                  className="formInput"
                  type="password"
                  name="cpassword"
                  placeholder="Confirm Password"
                  onChange={onChangeRegister}
                />
                <label for="recruiter">Are You Recruiter?</label>
                <input
                  type="checkbox"
                  id="recruiter"
                  name="isRecruiter"
                  onChange={onChangeRegister}
                  value={registerData.isRecruiter}
                />{" "}
                <br />
                <input
                  className="formInput submitBtn"
                  style={{ marginTop: "20px" }}
                  type="submit"
                  name=""
                  value="Sign Up"
                  onClick={handleRegister}
                />
                <p class="signup">
                  Already have an account ?
                  <a href="#" onClick={toggleForm}>
                    Sign in.
                  </a>
                </p>
              </form>
            </div>
            <div class="imgBx">
              <h1
                style={{ "font-weight": "bold", "font-size": "2.3rem" }}
                className="montserrat"
              >
                Welcome Back!
              </h1>
              <p className="montserrat" style={{ "text-align": "center" }}>
                To keep connected with us please login with your personal info
              </p>
              <input
                className="formInput submitBtn montserrat switchBtn"
                type="submit"
                name=""
                value="SIGN IN"
                onClick={toggleForm}
              />
            </div>
          </div>
        </div>
      </section>
      <Toaster/>
    </>
  );
}

export default LoginReg;
