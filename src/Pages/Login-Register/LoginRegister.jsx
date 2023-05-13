import "./loginRegister.css";

const LoginRegister = () => {
  return (
    <div className="wrapper">

   
    <div className="login-register-main">
      <input type="checkbox" id="login-register-chk" aria-hidden="true" />

      <div className="login-register-login">
        <form className="login-register-form">
          <label htmlFor="login-register-chk" className="label" aria-hidden="true">
            Log in
          </label>
          <input
            className="login-register-input"
            type="email"
            name="email"
            placeholder="Email"
            required=""
          />
          <input
            className="login-register-input"
            type="password"
            name="pswd"
            placeholder="Password"
            required=""
          />
          <button>Log in</button>
        </form>
      </div>

      <div className="login-register-register">
        <form className="login-register-form">
          <label htmlFor="login-register-chk"  className="label" aria-hidden="true">
            Register
          </label>
          <input
            className="login-register-input"
            type="text"
            name="txt"
            placeholder="Username"
            required=""
          />
          <input className="login-register-input" type="email" name="email" placeholder="email" />
          <input
            className="login-register-input"
            type="password"
            name="password"
            placeholder="Password"
          />
          <button>Register</button>
        </form>
      </div>
    </div>
    </div>
  );
};

export default LoginRegister;
