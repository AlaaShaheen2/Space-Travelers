import PropTypes from 'prop-types';

const Rocket = (props) => {
  const { rocket } = props;
  return (
    <div className="rocket-card">
      <div>
        <img src={rocket.flickr_images[0]} alt={rocket.rocket_name} className="rocket-pic" />
      </div>

      <div className="rocket-info">
        <div className="rocket-name">
          <span>{rocket.rocket_name}</span>
        </div>
        <div className="rocket-desc">
          <span>{rocket.description}</span>
        </div>
      </div>
    </div>
  );
};

Rocket.propTypes = {
  rocket: PropTypes.shape({
    rocket_name: PropTypes.string,
    description: PropTypes.string,
    flickr_images: PropTypes.arrayOf(PropTypes.string),
  }).isRequired,
};

export default Rocket;
