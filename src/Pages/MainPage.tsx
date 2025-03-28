import React from 'react'
import Navbar from '../Components/Nav/Navbar';
import Cover from './Cover/Cover';
import Footer from '../Components/Footer/Footer';
import {HiveDental} from "../Model/HiveInfo"

interface MainPageProps {
    info: HiveDental;
}
const MainPage: React.FC<MainPageProps> = ({ info }) => {
    return (
      <>
        <Navbar />
        <Cover />
        <Footer info={info}/>
      </>
    );
  };
  
  export default MainPage;