import { useLocation, NavLink } from 'react-router-dom';
import logo from './logo.svg';

const Nav = () => {
  // assigning location variable
  const location = useLocation();
  // destructuring pathname from location
  const { pathname } = location;
  // JavaScript split method to get the name of the path in array
  const splitLocation = pathname.split('/');

  return (
    <nav className="wrapper">
      <ul>
        <li>
          <NavLink to="/">
            <img src={logo} alt="logo" />
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/calculator"
            className={`nav-calculator ${
              splitLocation[1] === 'calculator' ||
              splitLocation[1] === 'analysis'
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
