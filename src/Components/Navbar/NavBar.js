import "./NavBar.css";
import { Link } from "react-router-dom";
function NavBar() {
  return (
    <div className="navbar">
      <div className="mantra">
        Mantra<span className="labs">Labs</span>
      </div>
      <div>
        <div className="navbar-right">
          <ul className="ul">
            <li className="li">
              <Link to="/" className="link">
                Home
              </Link>
            </li>
            <li className="li">
              <Link to="/Solution" className="link">
                Solution
              </Link>
            </li>
            <li className="li">
              <Link to="/Vision" className="link">
                Vision
              </Link>
            </li>
            <li className="li">
              <Link to="/Blog" className="link">
                Blog
              </Link>
            </li>
          </ul>
          <div className="navbar-button">
            <button className="get">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
