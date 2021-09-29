// Fichero src/components/Logo.js (nuevo código)
import logo from '../images/logo.png';
import Links from "./Links";
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
          <ul className="ul-menu">
            <Links
              title="Blog"
              className="link"
              href="https://adalab.blog/"
              openInNewTab={true}
            />
            <Links
              title="Contacto"
              className="link"
              href="https://adalab.contact/"
            />
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default Header;