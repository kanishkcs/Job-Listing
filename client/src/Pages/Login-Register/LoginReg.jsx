import React, { useState } from "react";
import "./LoginReg.css";
function LoginReg() {
  const [isActive, setIsActive] = useState(false);

  const toggleForm = () => {
    setIsActive((prevState) => !prevState);
  };
  
  return (
    <>
      <section className="sectionLR">
        <div className={`containerLR  ${isActive ? "active" : ""}`}>
          <div class="user signinBx">
            <div class="imgBx">

            <h1 style={{"font-weight":"bold","font-size":"2.5rem"}} className="montserrat">Hello, Friend!</h1>
            <p className="montserrat" style={{"text-align":"center"}}>Enter your personal details and start journey with us</p>
            <input className="formInput submitBtn montserrat switchBtn" type="submit" name="" value="SIGN UP" onClick={toggleForm}/>

            </div>
            <div class="formBx">
              <form action="" onsubmit="return false;">
                <h2>Sign In</h2>
                <input className="formInput" type="text" name="" placeholder="Username" />
                <input className="formInput" type="password" name="" placeholder="Password" />
                <input className="formInput submitBtn" type="submit" name="" value="Login" />
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
                <input className="formInput" type="text" name="" placeholder="Full Name" />
                <input className="formInput" type="email" name="" placeholder="Email Address" />
                <input className="formInput" type="password" name="" placeholder="Create Password" />
                <input className="formInput" type="password" name="" placeholder="Confirm Password" />
                <label for="recruiter">Are You Recruiter?</label>
                <input type="checkbox" id="recruiter"/>  <br/>
                <input className="formInput submitBtn" style={{marginTop:"20px"}} type="submit" name="" value="Sign Up" />
                <p class="signup">
                  Already have an account ?
                  <a href="#" onClick={toggleForm}>
                    Sign in.
                  </a>
                </p>
              </form>
            </div>
            <div class="imgBx">

            <h1 style={{"font-weight":"bold","font-size":"2.3rem"}} className="montserrat">Welcome Back!</h1>
            <p className="montserrat" style={{"text-align":"center"}}>To keep connected with us please login with your personal info</p>
            <input className="formInput submitBtn montserrat switchBtn" type="submit" name="" value="SIGN IN" onClick={toggleForm}/>


            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default LoginReg;
