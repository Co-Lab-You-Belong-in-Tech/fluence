/* eslint-disable */
// import { Link } from 'react-router-dom';
import social from '../../assets/social.svg';
import "./Calculator.css"

const Calculator = () => (
  // <div className="calculator">
  //   <Link to="/results">
  //     <button type="submit">Analyze</button>
  //   </Link>
  // </div>
  <section className="calc-wrapper">
    <div className="calc-left-wrapper">
      <img src={social} alt="social" />
      <h2>Why Fluence</h2>
      <p>
        Spend less time researching what you should be making when collaborating with brands and more time doing what you love - creating content.
      </p>
    </div>
    <div className="calc-right-wrapper">
      <h1>Creator's Calculator</h1>
      <p>Enter your social media information below to get a report that  estimates your pricing rates when monetizing your content.</p>
      <div className="calc-wrapper">
        <div className="calc-form-wrapper">
          <input type="text" />
        </div>
      </div>
    </div>
  </section>
);

export default Calculator;
