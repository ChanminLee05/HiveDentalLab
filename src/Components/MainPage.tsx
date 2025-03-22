import React from 'react'
import Navbar from './Nav/Navbar.tsx';
import Cover from './Cover/Cover.tsx';
import Footer from './Footer/Footer.tsx';
import {HiveDental} from "./Model/HiveInfo.ts"

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