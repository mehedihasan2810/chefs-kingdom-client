import GoogleButton from "react-google-button";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import "./SignUp.css";
import { useAuthContext } from "../../contexts/AuthProvider";
import { toast } from "react-toastify";

const SignUp = () => {
  const [name, setName] = useState("");
  const [photoUrl, setPhotoUrl] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const location = useLocation();

  const { signUp, googleSignIn } = useAuthContext();

  const handleSignUp = (e) => {
    e.preventDefault();

    signUp(email, password)
      .then((userCredential) => {
        const createdUser = userCredential.user;
        console.log(createdUser);

        // *show toast
        toast.success("Succesfully Signed Up", {
          position: toast.POSITION.TOP_CENTER,
          autoClose: 1500,
        });

        // * reset state
        setEmail("");
        setPassword("");

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
      <div className="signup-container">
        <h2>Sign Up</h2>
        <form onSubmit={handleSignUp} className="signup">
          <div className="control">
            <label htmlFor="name">Name: </label>
            <input
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
              type="text"
              name="name"
              id="name"
              placeholder="Name"
              required
            />
          </div>
          <div className="control">
            <label htmlFor="url">Photo Url: </label>
            <input
              value={photoUrl}
              onChange={(e) => {
                setPhotoUrl(e.target.value);
              }}
              type="text"
              name="url"
              id="url"
              placeholder="Photo Url"
            />
          </div>
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
              required
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
              required
            />
          </div>
          <button className="btn-primary" type="submit">
            Sign Up
          </button>
        </form>
        <p className="account">
          Already have an account?{" "}
          <Link className="acc" to="/signin">
            SingIn
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

export default SignUp;
