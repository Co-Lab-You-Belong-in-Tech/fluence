import { Link } from 'react-router-dom';
import hero from '../../assets/hero.svg';
import heroTablet from '../../assets/hero-tablet.svg';
import profile from '../../assets/profile.svg';
import profileTablet from '../../assets/profile-tablet.svg';
import charts from '../../assets/charts.svg';
import chartsTablet from '../../assets/charts-tablet.svg';
import dashboard from '../../assets/dashboard.svg';
import dashboardTablet from '../../assets/dashboard-tablet.svg';
import cuate from '../../assets/cuate.svg';
import cuateTablet from '../../assets/cuate-tablet.svg';
import pana from '../../assets/pana.svg';
import panaTablet from '../../assets/pana-tablet.svg';
import logo from '../../assets/logo.svg';
import logoMobile from '../../assets/logo-mobile.svg';
import './Home.css';

const Home = () => (
  <>
    <header className="wrapper">
      <div className="header-text">
        <h1>Discover your worth as an influencer or content creator</h1>
        <p>
          Get a tailored marketing analysis that provides you with the pricing
          knowledge you need when working with sponsorships and brands.
        </p>
        <Link to="/calculator" className="get-started">
          Get Started
        </Link>
      </div>
      <picture>
        <source srcSet={heroTablet} media="(max-width: 1260px)" />
        <img src={hero} alt="" />
      </picture>
    </header>

    <main>
      <section className="how-it-works">
        <h2>How it works</h2>
        <div className="how-it-works-section">
          <div className="how-it-works-container wrapper">
            <div className="how-it-works-details">
              <picture>
                <source srcSet={profileTablet} media="(max-width: 1260px)" />
                <img src={profile} alt="" />
              </picture>
              <p>
                Start by entering some details on your social media profile and
                we’ll take care of the rest.
              </p>
            </div>
            <div className="how-it-works-details">
              <picture>
                <source srcSet={chartsTablet} media="(max-width: 1260px)" />
                <img src={charts} alt="" />
              </picture>
              <p>
                We’ll analyze your account using a variety of metrics based on
                what companies are looking for.
              </p>
            </div>
            <div className="how-it-works-details">
              <picture>
                <source srcSet={dashboardTablet} media="(max-width: 1260px)" />
                <img src={dashboard} alt="" />
              </picture>
              <p>
                Receive your customized report that provides estimations of your
                pricing rates.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="features">
        <div className="features-section features-section-first">
          <img src={cuate} alt="" className="features-desktop" />
          <div className="features-description">
            <h3>Save time and resources</h3>
            <img src={cuateTablet} alt="" className="features-tablet" />
            <p>
              Spend less time researching what you should be making and more
              time doing what you love - creating content.
            </p>
          </div>
        </div>
        <div className="features-section features-section-second">
          <div className="features-description">
            <h3>Use it as many times as you want (seriously)!</h3>
            <img src={panaTablet} alt="" className="features-tablet" />
            <p>
              Our calculator is for you to use at no cost to you! Our aim is to
              help you get the necessary info you need to further your personal
              branding.
            </p>
          </div>
          <img src={pana} alt="" className="features-desktop" />
        </div>
      </section>

      <section className="cta-section wrapper">
        <p>Are you ready to take control of your personal brand?</p>
        <Link to="/calculator" className="get-started">
          Get Started
        </Link>
      </section>
    </main>

    <footer className="wrapper">
      <picture>
        <source srcSet={logoMobile} media="(max-width: 1260px)" />
        <img src={logo} alt="fluence logo" />
      </picture>
    </footer>
  </>
);

export default Home;
