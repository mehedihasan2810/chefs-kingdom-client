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
  const [isSignUpLoading, setIsSignUpLoading] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  const { signUp, googleSignIn, gitHubSignIn, updateUserProfile } =
    useAuthContext();

  const handleSignUp = (e) => {
    e.preventDefault();
    setIsSignUpLoading(true);
    signUp(email, password)
      .then((userCredential) => {
        const createdUser = userCredential.user;
        console.log(createdUser);

        // * update user profile
        updateUserProfile(createdUser, name, photoUrl)
          .then(() => {
            console.log("profile updated");
          })
          .catch((error) => {
            // *show toast
            toast.error(error.message, {
              position: toast.POSITION.TOP_CENTER,
              autoClose: 2000,
            });

            setIsSignUpLoading(false);
          });

        // *show toast
        toast.success("Succesfully Signed Up", {
          position: toast.POSITION.TOP_CENTER,
          autoClose: 2000,
        });

        // * reset state
        setEmail("");
        setPassword("");
        setIsSignUpLoading(false);

        // *redirect user
        const from = location.state?.from?.pathname || "/";
        navigate(from, { replace: true });
      })
      .catch((error) => {
        // *show toast
        toast.error(error.message, {
          position: toast.POSITION.TOP_CENTER,
          autoClose: 2000,
        });

        setIsSignUpLoading(false);
      });
  };

  const handleGoogleSignIn = () => {
    googleSignIn()
      .then((userCredential) => {
        const loggedUser = userCredential.user;

        // *show toast
        toast.success("Succesfully Signed In", {
          position: toast.POSITION.TOP_CENTER,
          autoClose: 2000,
        });

        // *redirect user
        const from = location.state?.from?.pathname || "/";
        navigate(from, { replace: true });
      })
      .catch((error) => {
        // *show toast
        toast.error(error.message, {
          position: toast.POSITION.TOP_CENTER,
          autoClose: 2000,
        });
      });
  };

  const handleGitHubSignIn = () => {
    gitHubSignIn()
      .then((userCredential) => {
        // *show toast
        toast.success("Succesfully Signed In", {
          position: toast.POSITION.TOP_CENTER,
          autoClose: 2000,
        });

        // *redirect user
        const from = location.state?.from?.pathname || "/";
        navigate(from, { replace: true });
      })
      .catch((error) => {
        // *show toast
        toast.error(error.message, {
          position: toast.POSITION.TOP_CENTER,
          autoClose: 2000,
        });
      });
  };

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
              required
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
            {
              isSignUpLoading ? (
                <div className="loader"></div>
              ): (
                "Sign Up"
              )
            }
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
