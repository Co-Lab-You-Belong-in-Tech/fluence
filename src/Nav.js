import { NavLink } from 'react-router-dom';
import logo from './logo.svg';

const Nav = () => (
  <nav>
    <ul className="wrapper">
      <li>
        <NavLink to="/">
          <img src={logo} alt="logo" />
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/calculator"
          activeStyle={{ textDecoration: 'underline' }}
          className="nav-calculator"
        >
          Calculator
        </NavLink>
      </li>
    </ul>
  </nav>
);

export default Nav;
