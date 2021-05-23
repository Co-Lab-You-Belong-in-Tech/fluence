import instagram from './instagram.svg';
import kenna from './kenna.svg';

const Analysis = () => (
  <div className="analysis wrapper">
    <h2>Analysis</h2>
    <div className="analysis-results">
      <div className="analysis-results-container">
        <div className="analysis-results-container-image">
          {/* update alt text dynamically */}
          <img src={kenna} alt="kenna" />
          <h3>@Handle</h3>
        </div>
        <div className="analysis-results-container-metrics">
          <div className="analysis-results-container-metrics-heading">
            <img src={instagram} alt="instagram logo" />
            <h4>Pricing Rate Estimate</h4>
          </div>
          <div className="analysis-results-container-metrics-amount">
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
        </div>
      </div>
      <h4 className="analysis-results-breakdown">The Breakdown</h4>
      <div className="analysis-results-description">
        <p>
          The pricing provided is affected by various algorithms based on
          metrics such as total likes and comments, average number of posts,
          number of followers, engagement rate and cost per engagement. The
          calculations are estimations you can use to provide pricing details to
          brands you want to work with but should be used with your own
          discretion.
        </p>
      </div>
      <div className="analysis-results-engagement">
        <div className="analysis-results-engagement-container">
          <p>12k</p>
          <p># of Followers</p>
        </div>
        <div className="analysis-results-engagement-container">
          <p>3.7%</p>
          <p>Eng. Rate</p>
        </div>
        <div className="analysis-results-engagement-container">
          <p>$.43</p>
          <p>CPE</p>
        </div>
      </div>
    </div>
  </div>
);

export default Analysis;
