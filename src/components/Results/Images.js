/* eslint-disable react/prop-types */
import beauty from '../../assets/beauty.svg';
import blogger from '../../assets/blogger.svg';
import fashion from '../../assets/fashion.svg';
import gamer from '../../assets/gamer.svg';
import parenting from '../../assets/parenting.svg';
import photographer from '../../assets/photographer.svg';
import sports from '../../assets/sports.svg';
import tech from '../../assets/tech.svg';
import travel from '../../assets/travel.svg';
import other from '../../assets/other.svg';

const Images = ({ influencerType }) => {
  let image;

  switch (true) {
    case influencerType === 'Beauty':
      image = beauty;
      break;
    case influencerType === 'Blogger':
      image = blogger;
      break;
    case influencerType === 'Fashion':
      image = fashion;
      break;
    case influencerType === 'Gamer':
      image = gamer;
      break;
    case influencerType === 'Parenting':
      image = parenting;
      break;
    case influencerType === 'Photographer':
      image = photographer;
      break;
    case influencerType === 'Sports':
      image = sports;
      break;
    case influencerType === 'Tech':
      image = tech;
      break;
    case influencerType === 'Travel':
      image = travel;
      break;
    default:
      image = other;
  }

  return <img src={image} alt="" />;
};

export default Images;
