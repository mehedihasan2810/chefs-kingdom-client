import GoogleButton from "react-google-button";
import { Link } from "react-router-dom";
import "./SignIn.css";
const SignIn = () => {
 



  return (
    <section>
      <div className="signin-container">
        <h2>Sign In</h2>
        <form className="signin">
          <div className="control">
            <label htmlFor="email">Email: </label>
            <input type="email" name="email" id="email" placeholder="Email" />
          </div>
          <div className="control">
            <label htmlFor="password">Password: </label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Password"
            />
          </div>
          <button className="btn-primary" type="submit">
            Sign In
          </button>
        </form>
        <p className="account">
          Don&#39;t have an account?{" "}
          <Link className="acc" to="/signup">
            SingUp
          </Link>
        </p>
        <div className="section-title">
          <div className="line"></div>
          <h4>OR</h4>
          <div className="line"></div>
        </div>
        <div className="google-github">
          <GoogleButton type="light" className="google-btn" />
          <button className="github">Sign in with Github</button>
        </div>
      </div>
    </section>
  );
};

export default SignIn;
