import { Link } from "react-router-dom";
import logo from "../assets/logo.jpg"

function Nav() {
  return (
    <nav className="nav">
      <div className="nav-div">
        <div className="logo"> <a href=""></a></div>
        <ul className="nav-ul">
          <li className="nav-li"><Link to="/">Home</Link></li>
          <li className="nav-li"><Link to="/GamePage">Play Game</Link></li>
          <li className="nav-li"><Link to="/Feed_back">Feed Back</Link></li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
