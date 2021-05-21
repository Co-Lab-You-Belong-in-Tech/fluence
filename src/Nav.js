import { NavLink } from 'react-router-dom';
import logo from './logo.svg';

const Nav = () => (
  <nav>
    <NavLink to="/">
      <img src={logo} alt="logo" />
    </NavLink>
    <ul>
      <li>
        <NavLink to="/calculator" activeStyle={{ textDecoration: 'underline' }}>
          Calculator
        </NavLink>
      </li>
      <li>
        <NavLink to="/compare">Compare</NavLink>
      </li>
      <li>
        <NavLink to="/contact">Contact</NavLink>
      </li>
    </ul>
  </nav>
);

export default Nav;
