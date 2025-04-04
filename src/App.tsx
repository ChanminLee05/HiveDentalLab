import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import MainPage from './Pages/MainPage';
import {HiveDental} from "./Model/HiveInfo"
import Services from './Pages/Service/Services';
import Gallery from './Pages/Gallery/Gallery';
import About from './Pages/About/About';
import Digital from './Pages/Digital/Digital';
import Contact from './Pages/Contact/Contact';

let data:HiveDental = {
  name: 'Hive Dental Laboratory',
  address: {
    streetNumber: '7125 109 St NW #201',
    city: 'Edmonton',
    province: 'AB',
    zipCode: 'T6G 1B9'
  },
  phoneNumber: '780-433-0770',
  email: "hivedental@gmail.com",
  hours: [
    { day: 'Monday', time: '8:00 - 17:00' },
    { day: 'Tuesday', time: '8:00 - 17:00' },
    { day: 'Wednesday', time: '8:00 - 17:00' },
    { day: 'Thursday', time: '8:00 - 17:00' },
    { day: 'Friday', time: '8:00 - 17:00' },
    { day: 'Saturday', time: 'Closed' },
    { day: 'Sunday', time: 'Closed' }
  ]
}

function App() {
  return (
    <Router>
        <Routes>
          <Route index element={<MainPage info={data}/>} />
          <Route path="/" element={<MainPage info={data}/>} />
          <Route path="/about" element={<About info={data}/>} /> 
          <Route path="/services" element={<Services info={data}/>} /> 
          <Route path="/digital" element={<Digital info={data}/>} /> 
          <Route path="/gallery" element={<Gallery info={data}/>} /> 
          <Route path="/contact" element={<Contact info={data}/>} /> 
        </Routes>
      </Router>
  );
}

export default App;
