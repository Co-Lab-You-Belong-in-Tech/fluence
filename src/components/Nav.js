import { useLocation, NavLink } from 'react-router-dom';
import logo from '../assets/logo.svg';
import './Nav.css';

const Nav = () => {
  // assigning location variable
  const path = useLocation();
  // destructuring pathname from location
  const { pathname } = path;
  // JavaScript split method to get the name of the path in array
  const location = pathname.split('/');

  return (
    <nav className="wrapper">
      <ul>
        <li>
          <NavLink to="/">
            <img src={logo} alt="fluence logo" />
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
