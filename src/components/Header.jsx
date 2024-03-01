import logo from "../data/icon/logo.svg";
import { Link } from "react-router-dom";
import "../styles/layout/header.scss";

//composant header: logo + navigation 
const Header = () => {
  return (
    <div className="container_header">
      <header className="header">
        <img className="logo" src={logo} alt="logo Kasa"></img>
        <nav className="nav">
          <ul>
            <Link to="/">
              <li className="nav_li">Accueil</li>
            </Link>
            <Link to="/propos">
              <li className="nav_li">A Propos</li>
            </Link>
          </ul>
        </nav>
      </header>
    </div>
  );
};
export default Header;
