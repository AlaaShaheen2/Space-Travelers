import './Rockets.css';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { recRockets } from '../../redux/Rockets/rocketsSlice';
import Rocket from './Rocket';

const Rockets = () => {
  const dispatch = useDispatch();
  const rocketsData = useSelector((state) => state.rockets);
  useEffect(() => {
    if (!rocketsData.length) {
      dispatch(recRockets());
    }
  });
  return (
    <div className="rockets-container">
      {rocketsData.map((rocketData) => (
        <Rocket key={rocketData.id} rocket={rocketData} />
      ))}
    </div>
  );
};

export default Rockets;
