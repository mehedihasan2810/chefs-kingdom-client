import { Link } from "react-router-dom";
import "./Navbar.css";
const Navbar = () => {
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
              <Link>Home</Link>
            </li>
            <li>
              <Link>Blog</Link>
            </li>
            <li>
              <Link>Profile</Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
