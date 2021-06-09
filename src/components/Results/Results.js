import { useLocation } from 'react-router-dom';
// import instagram from '../../assets/instagram.svg';
import fashion from '../../assets/fashion.svg';
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
      <div className="results-top">
        {/* className */}
        <div className="results-top-left">
          <img src={fashion} alt="" />
          <div className="influencer-type">
            <h3>Fashion Nano-Influencer</h3>
          </div>
          <div className="results-metrics-container">
            <div className="results-metrics">
              <div>
                <p>12k</p>
                <p>Followers</p>
              </div>
            </div>
            <div className="results-metrics">
              <div>
                <p>13.7%</p>
                <p>Eng. Rate</p>
              </div>
            </div>
            <div className="results-metrics">
              <div>
                <p>$.43</p>
                <p>CPE</p>
              </div>
            </div>
          </div>
        </div>

        <div className="results-top-right">
          <h2>@userhandle</h2>
          <div className="results-pricing-container">
            <h3>Instagram Pricing Rate Estimate</h3>
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
              <h5>Theme & Quality Posts</h5>
              <ul>
                <li>Stick to one design theme for your feed.</li>
                <li>Invest in a high quality camera to remove blurriness.</li>
              </ul>
              <h5>Understanding Your Demographic Following</h5>
              <ul>
                <li>
                  Keep your followers in mind - age group, gender, interests -
                  this is important for brands to know that their products will
                  reach the right audience.
                </li>
              </ul>
              <h5>Instagram Features</h5>
              <ul>
                <li>
                  Brands want to see up-to-date, innovative influencers,
                  especially in the micro space. Make sure to use Instagram's
                  latest features!
                </li>
              </ul>
            </div>
          </div>
          <div className="results-content">
            <img src={thumbsDown} alt="thumbs down" />
            <div className="thumbs-down">
              <h5>Sponsored Post Overload</h5>
              <ul>
                <li>Brands want to see organic content.</li>
                <li>
                  Consider deleting sponsored posts based on the cooldown period
                  on your influencer contract.
                </li>
              </ul>
              <h5>Overgeneralized Posts</h5>
              <ul>
                <li>
                  Posts that aren't targeting your specific audience may lower
                  your engagement rate.
                </li>
              </ul>
              <h5>Buying Followers</h5>
              <ul>
                <li>
                  Brands that are able to tell real vs fake followers (plus it
                  hurts your engagement rate!) and can hurt your credibility.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <h2>Brands Working with Similar Creators</h2>
      <div className="brand-names">
        {/* double words */}
        <p>Banana Republic</p>
        <p>Daniel Wellington</p>
        <p>Vitabird C12</p>
        <p>IGK Hair</p>
        <p>Rael</p>
      </div>
    </section>
  );
};

export default Results;
