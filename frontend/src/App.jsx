import './App.css';
import Navbar from './components/Navbar/Navbar';
import { gapi } from 'gapi-script'
import { useEffect } from 'react';
import Home_BL from './components/Home_BL/Home_BL';
import { Route, Routes } from 'react-router-dom';
import Index from "./components/Home_AL/Index.jsx"
import { CreatePin } from './components/Home_AL/Components/CreatePin';
import IndiPage from './components/Home_AL/Components/IndiPage';
import { TodayPins } from './components/Home_AL/Components/TodayPins';
import ProfilePage from './components/Home_AL/Components/ProfilePage';
import { Private } from './components/Private';

const clientId = "779029402943-c8c6rrt9rkfpf60it2qqv31agcgq8i55.apps.googleusercontent.com"

function App() {
  useEffect(() => {
    function start() {
      gapi.client.init({
        clientId: clientId,
        scope: ""
      })
    };
    gapi.load('client:auth2', start)
  }, [])
  return (

    <Routes>
      <Route path="/home" element={<Home_BL />}></Route>
      <Route path="/index" element={<Private><Index /></Private>}></Route>
      <Route path='/pin/create' element={<Private><CreatePin /></Private>}></Route>
      <Route path='/pin/:id' element={<Private><IndiPage /></Private>}></Route>
      <Route path='/pin/todaypins' element={<Private><TodayPins /></Private>}></Route>
      <Route path='/profile' element={<Private><ProfilePage /></Private>}></Route>
    </Routes>
  );
}

export default App;
