import instagram from '../../assets/instagram.svg';
import kenna from '../../assets/kenna.svg';

const Results = () => (
  <section className="results wrapper">
    <div className="results-left">
      <div className="results-image">
        {/* update alt text dynamically */}
        <img src={kenna} alt="kenna" />
        <p>@userhandle</p>
      </div>
      <div className="results-metrics">
        <div className="results-metrics-container">
          <p>12k</p>
          <p># of Followers</p>
        </div>
        <div className="results-metrics-container">
          <p>3.7%</p>
          <p>Eng. Rate</p>
        </div>
        <div className="results-metrics-container">
          <p>$.43</p>
          <p>CPE</p>
        </div>
      </div>
    </div>
    <div className="results-right">
      <div className="results-heading">
        <img src={instagram} alt="instagram logo" />
        <h3>Pricing Rate Estimate</h3>
      </div>
      <div className="results-pricing">
        <div>
          <p>$100 - $150</p>
          <p>Post</p>
        </div>
        <div>
          <p>$200 - $250</p>
          <p>Video</p>
        </div>
        <div>
          <p>$100 - $150</p>
          <p>Story</p>
        </div>
      </div>
      <div className="results-description">
        <h4>The Breakdown</h4>
        <p>
          The pricing provided is affected by various algorithms based on
          metrics such as total likes and comments, average number of posts,
          number of followers, engagement rate and cost per engagement. The
          calculations are estimations you can use to provide pricing details to
          brands you want to work with but should be used with your own
          discretion.
        </p>
      </div>
    </div>
  </section>
);

export default Results;
