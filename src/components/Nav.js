import { useLocation, NavLink } from 'react-router-dom';
import { useMediaPredicate } from 'react-media-hook';
import logo from '../assets/logo.svg';
import mobileLogo from '../assets/mobile-logo.svg';
import './Nav.css';

const Nav = () => {
  // assigning path variable
  const path = useLocation();
  // destructuring pathname from path
  const { pathname } = path;
  // JavaScript split method to get the name of the path in array
  const location = pathname.split('/');

  const responsiveWidth = useMediaPredicate('(max-width: 1260px)');

  return (
    <nav className="wrapper">
      <ul>
        <li>
          <NavLink to="/">
            <img src={responsiveWidth ? mobileLogo : logo} alt="fluence logo" />
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
