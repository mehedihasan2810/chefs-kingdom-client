import { Link, NavLink, useNavigate } from "react-router-dom";
import { useAuthContext } from "../../contexts/AuthProvider";
import { toast } from "react-toastify";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import "./Navbar.css";
import { Button } from "@chakra-ui/react";
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
    <div className="nav-container">
      <div className="topbar">
        <div className="container">
          <address className="topbar-item">
            <div className="icon">
              <ion-icon name="location-outline" aria-hidden="true"></ion-icon>
            </div>

            <span className="span">
              St, Delicious City, London 9578, UK
            </span>
          </address>

          <div className="separator"></div>

          <div className="topbar-item item-2">
            <div className="icon">
              <ion-icon name="time-outline" aria-hidden="true"></ion-icon>
            </div>

            <span className="span">Daily : 8.00 am to 10.00 pm</span>
          </div>

          <a href="tel:+11234567890" className="topbar-item link">
            <div className="icon">
              <ion-icon name="call-outline" aria-hidden="true"></ion-icon>
            </div>

            <span className="span">+1 123 456 7890</span>
          </a>

          <div className="separator"></div>

          <a href="mailto:booking@restaurant.com" className="topbar-item link">
            <div className="icon">
              <ion-icon name="mail-outline" aria-hidden="true"></ion-icon>
            </div>

            <span className="span">buyrecipe@gmail.com</span>
          </a>
        </div>
      </div>
      <div className="nav-header">
        <h2>Chef&#39;s Kingdom</h2>
        <nav>
          <ul>
            <li>
              <NavLink
                to="/"
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "active" : ""
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/blog"
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "active" : ""
                }
              >
                Contact Us
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/blog"
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "active" : ""
                }
              >
                Our Menu
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/blog"
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "active" : ""
                }
              >
                Our Shop
              </NavLink>
            </li>
            {currentUser ? (
              <>
                <li>
                  {currentUser?.photoURL ? (
                    <img
                      title={currentUser?.displayName}
                      className="profile-img"
                      src={currentUser?.photoURL}
                      alt="user"
                    />
                  ) : (
                    <div title="No Name">
                      <AccountCircleIcon style={{ width: 40, height: 40 }} />
                    </div>
                  )}
                </li>
                <li>
                  <Button colorScheme="green" onClick={handleSignOut}>
                    Sign Out
                  </Button>
                </li>
              </>
            ) : (
              <li>
                <Link to="/signin">
                  <Button colorScheme="green">Sign In</Button>
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
