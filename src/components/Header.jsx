import logo from "../data/icon/logo.svg";
import { Link } from "react-router-dom";
import "../styles/layout/header.scss"

const Header = () => {
  return (
    <header className="App-header">
      <img className="logo" src={logo} alt="logo Kasa"></img>
      <nav className="nav">
      <ul>
        <Link to="/accueil"><li className="nav_li">Accueil</li></Link>
        <Link to="/propos"><li className="nav_li">A Propos</li></Link>
      </ul>
      </nav>
    </header>
  );
};
export default Header;
