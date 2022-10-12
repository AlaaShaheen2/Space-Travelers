import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.scss';
import Navbar from './components/Navbar/Navbar';
import Rockets from './pages/Rockets';
import Missions from './pages/Missions';
import MyProfile from './pages/Profile';

function App() {
  return (
    <>
      <Navbar />
      <div className="main">
        <Routes>
          <Route element={<Rockets />} />
          <Route element={<Missions />} />
          <Route element={<MyProfile />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
