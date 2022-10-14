import Button from 'react-bootstrap/Button';
import PropTypes from 'prop-types';

const Rocket = (props) => {
  const { name, description } = props;
  return (
    <div className="rocket-card">
      <div>
        <img src="empty" alt="rocket" className="rocket-pic" />
      </div>

      <div className="rocket-info">
        <div className="rocket-name">
          <span>{name}</span>
        </div>
        <div className="rocket-desc">
          <span>{description}</span>
        </div>
        <Button type="button" variant="primary" className="booking-btn">Reserve Rocket</Button>
      </div>
    </div>
  );
};

Rocket.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default Rocket;
