import React,{useState} from 'react';
import './App.css';
import Footer from './components/footer/footer';
import Header from './components/header';
import Main from './components/Main'


function App() {
  return (
    <div className='App'>
      <Header/>
      <Main/>
      <Footer/>
    </div>
  );
}

export default App;
