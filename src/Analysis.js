import instagram from './instagram.svg';
import plus from './plus.svg';

const Analysis = () => (
  <div className="analysis">
    <h2>Analysis</h2>
    <div className="analysis-results">
      <div className="analysis-results-container">
        <div className="analysis-results-image">
          <div className="analysis-results-image-placeholder" />
          <h3>@Handle</h3>
        </div>
        <div className="analysis-results-metrics">
          <div className="analysis-results-metrics-heading">
            <img src={instagram} alt="instagram logo" />
            <h4>Cost per Engagement</h4>
          </div>
          <div className="analysis-results-metrics-container">
            <div>
              <p>$ - $$</p>
              <p>Post</p>
            </div>
            <div>
              <p>$ - $$</p>
              <p>Video</p>
            </div>
            <div>
              <p>$ - $$</p>
              <p>Story</p>
            </div>
          </div>
        </div>
      </div>
      <h4 className="analysis-results-breakdown">The Breakdown</h4>
      <div className="analysis-results-description">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem
          ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <p>
          The calculations above are estimations and should be used to your own
          discretion. Companies
        </p>
      </div>
      <div className="analysis-results-engagement">
        <div className="analysis-results-engagement-container">
          <p>###</p>
          <p># of Followers</p>
        </div>
        <div className="analysis-results-engagement-container">
          <p>%</p>
          <p>Eng. Rate</p>
        </div>
        <div className="analysis-results-engagement-container">
          {/* <p>+</p> */}
          <img src={plus} alt="plus sign" />
          <p>Compare</p>
        </div>
      </div>
    </div>
  </div>
);

export default Analysis;
