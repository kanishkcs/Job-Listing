import { useState } from "react";
import "./loginRegister.css";
import axios from "axios"
import { useNavigate } from "react-router-dom";
import toast, {Toaster}from "react-hot-toast"

const LoginRegister = () => {
  const navigate = useNavigate();
  const [loginData, setloginData] = useState({ email: "", password: "" });
  const [registerData, setregisterData] = useState({
    
    name: "",
    email: "",
    password: "",
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
   
    axios.post("http://localhost:3200/api/v1/register",registerData)
    .then(function (response){
    
    
    if(response.status===200){
      toast.success("Registered Sucessfully",{
        position:"bottom-right",
        icon: '😁',
      })
      setTimeout(()=>{
        navigate('/');
      },2000);
      
      
    }
    else if(response.status==202){
      toast.error("Email Already Exists",{
        position:"bottom-right",
      })
    }
    else if(response.status===201){
      toast.error("Password Must be 8 char Long",{
        position:"bottom-right",
      })
    }
    



    }).catch(function(error){
      console.error(error)
    })
    
  };

  const handleLogin = (event)=>{
    event.preventDefault();
    axios.post("http://localhost:3200/login",loginData).then(function (response){
      
    if(response.status===200){
      toast.success("Logged In",{
        position:"bottom-right",
        icon: '😁',
        style: {
          borderRadius: '10px',
          background: '#333',
          color: '#fff',
        },
      })
      setTimeout(()=>{
        navigate('/');
      },2000);
      
    }
    else{
      toast.error("User Name or Password wrong",{
        position:"bottom-right",
        icon:'😐'
      })
    }
    })
  }

 

  return (
    <>
    <div className="wrapper">
      <div className="login-register-main">
        <input type="checkbox" id="login-register-chk" aria-hidden="true" />

        <div className="login-register-login">
          <form className="login-register-form" >
            <label
            
              htmlFor="login-register-chk"
              className="label"
              aria-hidden="true"
            >
              Log in
            </label>
            <input
              className="login-register-input"
              type="email"
              name="email"
              placeholder="Email"
              required=""
              onChange={onChangeLogin}
            />
            <input
              className="login-register-input"
              type="password"
              name="password"
              placeholder="Password"
              required=""
              onChange={onChangeLogin}
            />
            <button onClick={handleLogin}>Log in</button>
          </form>
        </div>

        <div className="login-register-register">
          <form className="login-register-form">
            <label
              htmlFor="login-register-chk"
              className="label"
              aria-hidden="true"
            >
              Register
            </label>
            <input
              className="login-register-input"
              type="text"
              name="name"
              placeholder="Full Name"
              required=""
              onChange={onChangeRegister}
            />

            <input
              className="login-register-input"
              type="email"
              name="email"
              placeholder="email"
              onChange={onChangeRegister}
            />
            <input
              className="login-register-input"
              type="password"
              name="password"
              placeholder="Password"
              onChange={onChangeRegister}
            />
            <div>
              <label htmlFor="isRecruiter">Are You a Recrutier </label>
              <input
                type="checkbox"
                name="isRecruiter"
                value={registerData.isRecruiter}
                onChange={onChangeRegister}
              />
            </div>
            <button onClick={handleRegister}>Register</button>
          </form>
        </div>
      </div>
     
    </div>
    <Toaster/>
</>
  );
};

export default LoginRegister;
