import logo from "../data/logo.svg";
import "../styles/header.scss"

const Header = () => {
  return (
    <header className="App-header">
      <img src={logo} alt="logo Kasa"></img>
      <nav className="nav">
      <ul>
        <li className="accueil">Accueil</li>
        <li className="apropos">A Propos</li>
      </ul>
      </nav>
    </header>
  );
};
export default Header;
