import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import MainPage from './Components/MainPage.tsx';
import {HiveDental} from "./Components/Model/HiveInfo.ts"

let data:HiveDental = {
  name: 'Judy Hair Studio',
  address: {
    streetNumber: '285 Desrochers Blvd SW',
    city: 'Edmonton',
    province: 'AB',
    zipCode: 'T6W 3H9'
  },
  phoneNumber: '780-935-0887',
  hours: [
    { day: 'Monday', time: '10:00 - 18:00' },
    { day: 'Tuesday', time: '10:00 - 18:00' },
    { day: 'Wednesday', time: '10:00 - 18:00' },
    { day: 'Thursday', time: '10:00 - 18:00' },
    { day: 'Friday', time: '10:00 - 18:00' },
    { day: 'Saturday', time: '10:00 - 18:00' },
    { day: 'Sunday', time: 'Closed' }
  ]
}

function App() {
  return (
    <Router>
        <Routes>
          <Route index element={<MainPage info={data}/>} />
          <Route path="/" element={<MainPage info={data}/>} />
          
        </Routes>
      </Router>
  );
}

export default App;
