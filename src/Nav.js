import logo from './logo.svg';

const Nav = () => (
  <nav>
    <img src={logo} alt="logo" />
    <ul>
      <li>
        <a href="/">Calculator</a>
      </li>
      <li>
        <a href="/">Compare</a>
      </li>
      <li>
        <a href="/">Contact</a>
      </li>
    </ul>
  </nav>
);

export default Nav;
