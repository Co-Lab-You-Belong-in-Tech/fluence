const Header = () => (
  <header>
    <h1>Empowering Your Creative Voice</h1>
    <p>
      Find out how much you can and could be making on the content you post on
      social media.
    </p>
    {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
    <label htmlFor="handle" className="sr-only">
      Enter your IG handle to start
    </label>
    <input type="text" name="handle" placeholder="@" />
    <button type="submit">Calculate</button>
    <p>Enter your IG handle to start</p>
  </header>
);

export default Header;
