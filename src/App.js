import React from 'react';

import './App.css';
import XBox from './components/XBox';
import Links from './components/Links';
import Carbon from './components/Carbon';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Showcase from './components/Showcase';
import Hamburger from './components/Hamburger';
import HomeCards from './components/HomeCards';
import { homeCards1, homeCards2, links } from './helper/constants';

function App() {
  return (
    <>
      <Hamburger />
      <div className="container">
        <Navbar />
        <Showcase />
        <HomeCards cardData={homeCards1} />
        <XBox />
        <HomeCards cardData={homeCards2} />
        <Carbon />
        <Links linkData={links} />
        <Footer />
      </div>
    </>
  );
}

export default App;
