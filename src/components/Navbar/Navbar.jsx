import { Link, useNavigate } from "react-router-dom";
import { useAuthContext } from "../../contexts/AuthProvider";
import { toast } from "react-toastify";
import "./Navbar.css";
const Navbar = () => {
  const { currentUser, logOut } = useAuthContext();
  const navigate = useNavigate();

  const handleSignOut = () => {
    logOut()
      .then(() => {
        // *show toast
        if (currentUser) {
          toast.success("Succesfully Signed Out", {
            position: toast.POSITION.TOP_CENTER,
            autoClose: 2000,
          });

          navigate("/");
        }
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
    <div className="center-container">
      <div className="nav-container">
        <h2>
          <span>Chef&#39;s </span>
          Kingdom
        </h2>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/blog">Blog</Link>
            </li>
            {currentUser ? (
              <>
                <li>
                  <Link to="/">Profile</Link>
                </li>
                <li>
                  <button className="btn-primary" onClick={handleSignOut}>
                    Sign Out
                  </button>
                </li>
              </>
            ) : (
              <li>
                <Link to="/signin">
                  <button className="btn-primary">Sign In</button>
                </Link>
              </li>
            )}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
