import logo from "../data/logo.svg";
import "../styles/header.scss"
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="App-header">
      <img src={logo} alt="logo Kasa"></img>
      <nav className="nav">
      <ul>
        <Link to="/"><li>Accueil</li></Link>
        <Link to="/a-propos"><li>A Propos</li></Link>
      </ul>
      </nav>
    </header>
  );
};
export default Header;
