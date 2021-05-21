import button from './button.svg';

const HowItWorks = () => (
  <section className="how-it-works">
    <div className="how-it-works-text">
      <h2>How it Works</h2>
      <p>
        We use a formula that determines the pricing range for different types
        of posts - single, video, story, etc. based on a variety of metrics that
        brands measure to provide you with a report that you can download for
        your reference. Add the report to your own media kit when connecting
        with brands!
      </p>
      <p>
        Get Started
        <span>
          <a href="/">
            <img src={button} alt="Get Started button" />
          </a>
        </span>
      </p>
    </div>
  </section>
);

export default HowItWorks;
