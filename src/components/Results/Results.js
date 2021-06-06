import { useLocation } from 'react-router-dom';
import instagram from '../../assets/instagram.svg';
import kenna from '../../assets/kenna.svg';
import './Results.css';

const Results = () => {
  const location = useLocation();
  const likes = parseFloat(location.state.totalLikeOnPost);
  const comments = parseFloat(location.state.totalCommentOnPost);
  const followers = parseFloat(location.state.totalFollowerCount);
  const { handle, influenceType } = location.state;
  const cpe = 0.28;
  const cpm = 0.223;
  let storyReachPercent;

  switch (true) {
    case followers > 2000 && followers <= 5000:
      storyReachPercent = 42.1;
      break;
    case followers > 5000 && followers <= 10000:
      storyReachPercent = 35.7;
      break;
    case followers > 10000 && followers <= 20000:
      storyReachPercent = 31;
      break;
    case followers > 20000 && followers <= 40000:
      storyReachPercent = 26.9;
      break;
    case followers > 40000 && followers <= 75000:
      storyReachPercent = 23.5;
      break;
    case followers > 75000 && followers <= 100000:
      storyReachPercent = 21.3;
      break;
    case followers > 100000:
      storyReachPercent = 19.9;
      break;
    default:
      storyReachPercent = 0;
  }

  const engRate = ((likes + comments) / followers) * 100;
  const postPrice = (likes + comments) * cpe;
  const storyPrice = (followers * (storyReachPercent / 100) * cpm) / 50;
  const videoPrice = postPrice * 1.75;

  return (
    <section className="results wrapper">
      <div className="results-left">
        <div className="results-image">
          {/* update alt text dynamically */}
          <img src={kenna} alt="kenna" />
          <p>@{handle === '' ? 'userhandle' : handle.replace(/^[@]+/, '')}</p>
        </div>
        <div className="results-metrics">
          <div className="results-metrics-container">
            <p>{followers / 1000}k</p>
            <p># of Followers</p>
          </div>
          <div className="results-metrics-container">
            <p>{Number.isNaN(engRate) ? 0 : engRate.toFixed(1)}%</p>
            <p>Eng. Rate</p>
          </div>
          <div className="results-metrics-container">
            <p>${cpe.toString().replace(/^[0]+/, '')}</p>
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
            <p>${postPrice.toFixed(2)}</p>
            <p>Post</p>
          </div>
          <div>
            <p>${videoPrice.toFixed(2)}</p>
            <p>Video</p>
          </div>
          <div>
            <p>${storyPrice.toFixed(2)}</p>
            <p>Story</p>
          </div>
        </div>
        <div className="results-industry">
          <h4>Industry</h4>
          <p>{influenceType || 'none'}</p>
        </div>
        <div className="results-description">
          <h4>The Breakdown</h4>
          <p>
            The pricing provided is affected by various algorithms based on
            metrics such as total likes and comments, average number of posts,
            number of followers, engagement rate and cost per engagement. The
            calculations are estimations you can use to provide pricing details
            to brands you want to work with but should be used with your own
            discretion.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Results;
