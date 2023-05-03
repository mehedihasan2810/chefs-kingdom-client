import GoogleButton from "react-google-button";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./SignIn.css";
import { useAuthContext } from "../../contexts/AuthProvider";
import { useState } from "react";
import { toast } from "react-toastify";
const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const location = useLocation();

  const { signIn, googleSignIn } = useAuthContext();

  const handleSignIn = (e) => {
    e.preventDefault();

    signIn(email, password)
      .then((userCredential) => {
        const loggedUser = userCredential.user;

        // *show toast
        toast.success("Succesfully Signed In", {
          position: toast.POSITION.TOP_CENTER,
          autoClose: 1500,
        });

        // * reset state
        setEmail("");
        setPassword("");

        const from = location.state?.from?.pathname || "/";
        navigate(from, { replace: true });
      })
      .catch((error) => {
        // *show toast
        toast.error(error.message, {
          position: toast.POSITION.TOP_CENTER,
          autoClose: 1500,
        });
      });
  };

  const handleGoogleSignIn = () => {
    googleSignIn()
      .then((userCredential) => {
        const loggedUser = userCredential.user;

        // *show toast
        toast.success("Succesfully Signed In", {
          position: toast.POSITION.TOP_CENTER,
          autoClose: 1500,
        });

        // *redirect user
        const from = location.state?.from?.pathname || "/";
        navigate(from, { replace: true });
      })
      .catch((error) => {
        // *show toast
        toast.error(error.message, {
          position: toast.POSITION.TOP_CENTER,
          autoClose: 1500,
        });
      });
  };

  const handleGitHubSignIn = () => {};

  return (
    <section>
      <div className="signin-container">
        <h2>Sign In</h2>
        <form onSubmit={handleSignIn} className="signin">
          <div className="control">
            <label htmlFor="email">Email: </label>
            <input
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              type="email"
              name="email"
              id="email"
              placeholder="Email"
            />
          </div>
          <div className="control">
            <label htmlFor="password">Password: </label>
            <input
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
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
          <GoogleButton
            onClick={handleGoogleSignIn}
            type="light"
            className="google-btn"
          />
          <button onClick={handleGitHubSignIn} className="github">
            Sign in with Github
          </button>
        </div>
      </div>
    </section>
  );
};

export default SignIn;
