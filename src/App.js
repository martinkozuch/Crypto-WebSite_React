
import './App.css';
import React from 'react'
import './COMPONENTS/Navbar'
import Navbar from './COMPONENTS/Navbar';
import Hero from './COMPONENTS/Hero'
import Featured from './COMPONENTS/Featured';
import SignUp from './COMPONENTS/SignUp';
import Footer from './COMPONENTS/Footer';

function App() {
  return (
 <>
    <Navbar> </Navbar>
    <Hero></Hero>
    <Featured></Featured>
    <SignUp></SignUp>
    <Footer></Footer>
 </>
  );
}

export default App;
