import { useLocation, NavLink } from 'react-router-dom';
import logo from '../assets/logo.svg';
import logoMobile from '../assets/logo-mobile.svg';
import './Nav.css';

const Nav = () => {
  const path = useLocation();
  const { pathname } = path;
  const location = pathname.split('/');

  return (
    <nav className="wrapper">
      <ul>
        <li>
          <NavLink to="/">
            <picture>
              <source srcSet={logoMobile} media="(max-width: 1260px)" />
              <img src={logo} alt="fluence logo" />
            </picture>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/calculator"
            className={`nav-calculator ${
              location[1] === 'calculator' || location[1] === 'results'
                ? 'nav-border'
                : ''
            }`}
          >
            Calculator
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
