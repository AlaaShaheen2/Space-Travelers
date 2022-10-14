import './Rockets.css';
import Rocket from './Rocket';

const Rockets = () => (
  <div className="rockets-container">
    <ul>
      <li className="rocket">
        <Rocket name="Falcon 1" description="sit amet consectetur adipisicing elit. Expedita officia impedit quidem! Officiis unde accusamus, iure suscipit vero sed distinctio, est veritatis dolor eum, tempore tenetur. Ratione esse iure voluptates." />
      </li>

      <li className="rocket">
        <Rocket name="Falcon 9" description="sit amet consectetur adipisicing elit. Expedita officia impedit quidem! Officiis unde accusamus, iure suscipit vero sed distinctio, est veritatis dolor eum, tempore tenetur. Ratione esse iure voluptates." />
      </li>

      <li className="rocket">
        <Rocket name="Falcon Heavy" description="sit amet consectetur adipisicing elit. Expedita officia impedit quidem! Officiis unde accusamus, iure suscipit vero sed distinctio, est veritatis dolor eum, tempore tenetur. Ratione esse iure voluptates." />
      </li>
    </ul>
  </div>
);

export default Rockets;
