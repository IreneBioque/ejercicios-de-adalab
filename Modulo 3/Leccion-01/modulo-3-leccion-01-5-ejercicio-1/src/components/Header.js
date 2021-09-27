// Fichero src/components/Logo.js (nuevo código)
import logo from '../images/logo.png';
import Menu from "./Menu";
const Header = () => {
  return (
    <div>
      <header className="header">
        <div className="logo">
          <a href="https://adalab.es" target="_blanck" title="logo-de-adalab">
            <img src={logo} alt="logo-adalab" title="logo-de-adalab" />
          </a>
        </div>
        <nav className="menu">
          <Menu />
        </nav>
      </header>
    </div>
  );
};

export default Header;