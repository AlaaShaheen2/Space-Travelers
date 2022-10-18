import './App.css';
import { Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Header/Navbar';
import Rockets from './components/Rockets/Rockets';
import Missions from './components/Missions/Missions';
import Profile from './components/Profile/Profile';

function App() {
  return (
    <div className="app">
      <Navbar />
      <div className="container-fluid">
        <Routes>
          <Route path="/" element={<Rockets />} />
          <Route path="/missions" element={<Missions />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
