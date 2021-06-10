import { useLocation } from 'react-router-dom';
import Images from './Images';
import content from './Content';
import thumbsUp from '../../assets/thumbs-up.svg';
import thumbsDown from '../../assets/thumbs-down.svg';
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
  let influencerLevel;

  switch (true) {
    case followers > 2000 && followers <= 5000:
      storyReachPercent = 42.1;
      break;
    case followers > 5000 && followers <= 10000:
      storyReachPercent = 35.7;
      break;
    case followers > 10000 && followers <= 20000:
      storyReachPercent = 31.0;
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

  switch (true) {
    case followers > 0 && followers <= 10000:
      influencerLevel = 'Nano-Influencer';
      break;
    case followers > 10000 && followers <= 200000:
      influencerLevel = 'Micro-Influencer';
      break;
    default:
      influencerLevel = '';
  }

  const engRate = ((likes + comments) / followers) * 100;
  const postPrice = (likes + comments) * cpe;
  const storyPrice = (followers * (storyReachPercent / 100) * cpm) / 50;
  const videoPrice = postPrice * 1.75;

  return (
    <section className="results wrapper">
      <div className="results-top">
        <div className="results-top-left">
          <Images influencerType={influenceType} />
          <div className="influencer-type">
            {influencerLevel ? (
              <h3>
                {influenceType} <span>{influencerLevel}</span>
              </h3>
            ) : (
              <h3>{influenceType}</h3>
            )}
          </div>
          <div className="results-metrics-container">
            <div className="results-metrics">
              <div>
                <p>{followers / 1000}k</p>
                <p>Followers</p>
              </div>
            </div>
            <div className="results-metrics">
              <div>
                <p>
                  {Number.isNaN(engRate) || !Number.isFinite(engRate)
                    ? 0
                    : engRate.toFixed(1)}
                  %
                </p>
                <p>Eng. Rate</p>
              </div>
            </div>
            <div className="results-metrics">
              <div>
                <p>${cpe.toString().replace(/^[0]+/, '')}</p>
                <p>CPE</p>
              </div>
            </div>
          </div>
        </div>

        <div className="results-top-right">
          <h2>@{handle === '' ? 'userhandle' : handle.replace(/^[@]+/, '')}</h2>
          <div className="results-pricing-container">
            <h3>Instagram Pricing Rate Estimate</h3>
            <div className="results-pricing">
              <div>
                <p>{`$${Math.round(postPrice * 0.8)} - $${Math.round(
                  postPrice * 1.2
                )}`}</p>
                <p>Post</p>
              </div>
              <div>
                <p>{`$${Math.round(videoPrice * 0.8)} - $${Math.round(
                  videoPrice * 1.2
                )}`}</p>
                <p>Video</p>
              </div>
              <div>
                <p>{`$${Math.round(storyPrice * 0.8)} - $${Math.round(
                  storyPrice * 1.2
                )}`}</p>
                <p>Story</p>
              </div>
            </div>
          </div>
          <div className="results-description">
            <h4>Pricing Rate Breakdown</h4>
            <p>
              The pricing rate is affected by various metrics such as industry,
              total likes and comments, average number of posts, number of
              followers, engagement rate and cost per engagement. The
              calculations are estimations you can use to provide pricing
              details to brands you want to work with but should be used with
              your own discretion.
            </p>
          </div>
        </div>
      </div>

      <div className="results-theory">
        <h2>Growing Your Influence</h2>
        <div className="results-theory-container">
          <div className="results-content">
            <img src={thumbsUp} alt="thumbs up" />
            <div className="thumbs-up">
              {content[influenceType] ? (
                <ul>
                  {content[influenceType].do.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              ) : null}
            </div>
          </div>
          <div className="results-content">
            <img src={thumbsDown} alt="thumbs down" />
            <div className="thumbs-down">
              {content[influenceType] ? (
                <ul>
                  {content[influenceType].dont.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              ) : null}
            </div>
          </div>
        </div>
      </div>

      <h2>Brands Working with Similar Creators</h2>
      <div className="brand-names">
        {content[influenceType] ? (
          <ul>
            {content[influenceType].brands.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        ) : null}
      </div>
    </section>
  );
};

export default Results;
