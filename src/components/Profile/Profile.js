import './Profile.css';
import { useSelector } from 'react-redux';
import Table from 'react-bootstrap/Table';
import { Col, Row } from 'react-bootstrap';

const Profile = () => {
  const rocketsData = useSelector((state) => state.rockets);
  const reservedRockets = rocketsData.filter((rocket) => rocket.reserved);

  return (
    <Row className="row">
      <Col>
        <h4 className="title">Missions</h4>
      </Col>
      <Col>
        <h4 className="title">Rockets</h4>
        <Table striped bordered variant="primary">
          <tbody>
            {reservedRockets.map((rocket) => (
              <tr key={rocket.rocket_id}>
                <td className="reserved">
                  {rocket.rocket_name}
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Col>
    </Row>
  );
};
export default Profile;
