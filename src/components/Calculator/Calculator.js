import { Link } from 'react-router-dom';

const Calculator = () => (
  <div className="calculator">
    {/* <h2>Calculator</h2> */}
    <Link to="/results">
      <button type="submit">Analyze</button>
    </Link>
  </div>
);

export default Calculator;
