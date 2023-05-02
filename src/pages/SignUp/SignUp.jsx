import GoogleButton from "react-google-button";

import "./SignUp.css";
const SignUp = () => {
  return (
    <section>
      <div className="signup-container">
        <h2>Sign Up</h2>
        <form className="signup">
          <div className="control">
            <label htmlFor="name">Name: </label>
            <input type="text" name="name" id="name" placeholder="Name" />
          </div>
          <div className="control">
            <label htmlFor="url">Photo Url: </label>
            <input type="text" name="url" id="url" placeholder="Photo Url" />
          </div>
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
            Sign Up
          </button>
        </form>
        <div className="section-title">
          <div className="line"></div>
          <h4>OR</h4>
          <div className="line"></div>
        </div>
        <div className="google-github">
          <GoogleButton type="light" className="google-btn" />
        <button className="github">Github</button>
        </div>
      </div>
    </section>
  );
};

export default SignUp;
