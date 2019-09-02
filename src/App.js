import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Banner from './components/Banner/Banner';
import Body from './components/body/Body';
import Footer from './components/footer/Footer';
function App() {
  return (
    <div>
      <Navbar/>
      <Banner/>
      <Body />
      <Footer/>
    </div>
  );
}

export default App;
