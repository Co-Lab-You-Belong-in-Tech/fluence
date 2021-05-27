import { Link } from 'react-router-dom';
import headerImage from '../../assets/header-image.svg';
import resume from '../../assets/resume.svg';
import charts from '../../assets/charts.svg';
import dashboard from '../../assets/dashboard.svg';
import cuate from '../../assets/cuate.svg';
import pana from '../../assets/pana.svg';
import logo from '../../assets/logo.svg';

const Home = () => (
  <>
    <header className="wrapper">
      <div className="header-text">
        <h1>Discover your worth as an influencer or content creator</h1>
        <p>
          Get a tailored marketing analysis that provides you with the pricing
          knowledge you need when working with sponsorships and brands.
        </p>
        <Link to="/calculator">
          <button type="submit">Get Started</button>
        </Link>
      </div>
      <img src={headerImage} alt="" />
    </header>
    <section className="how-it-works">
      <h2>How it works</h2>
      <div className="how-it-works-section">
        <div className="how-it-works-container wrapper">
          <div className="how-it-works-details">
            <img src={resume} alt="" />
            <p>
              Start by entering some details on your social media profile and
              we’ll take care of the rest.
            </p>
          </div>
          <div className="how-it-works-details">
            <img src={charts} alt="" />
            <p>
              We’ll analyze your account using a variety of metrics based on
              what companies are looking for.
            </p>
          </div>
          <div className="how-it-works-details">
            <img src={dashboard} alt="" />
            <p>
              Receive your customized report that provides estimations of your
              pricing rates.
            </p>
          </div>
        </div>
      </div>
    </section>
    <section className="explainer">
      <div className="explainer-section explainer-section-first">
        <img src={cuate} alt="" />
        <div className="explainer-description">
          <h3>Save time and resources</h3>
          <p>
            Spend less time researching what you should be making and more time
            doing what you love - creating content.
          </p>
        </div>
      </div>
      <div className="explainer-section explainer-section-second">
        <div className="explainer-description">
          <h3>Use it as many times as you want (seriously)!</h3>
          <p>
            Our calculator is for you to use at no cost to you! Our aim is to
            help you get the necessary info you need to further your personal
            branding.
          </p>
        </div>
        <img src={pana} alt="" />
      </div>
    </section>
    <section className="cta-section wrapper">
      <p>Are you ready to take control of your personal brand?</p>
      <Link to="/calculator">
        <button type="submit">Get Started</button>
      </Link>
    </section>
    <footer className="wrapper">
      <img src={logo} alt="fluence logo" />
    </footer>
  </>
);

export default Home;
