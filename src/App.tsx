import React from 'react';
import './App.css';



function App() {
  return (
    <div className='app-wrapper'>
      <header className='header'>
        <img src="logo.webp" width={'5%'} alt="" />       
      </header>
      <nav className='nav'>
        <div><a href="">Profile</a></div>
        <div><a href="">Messages</a></div>
        <div><a href="">News</a></div>
        <div><a href="">Music</a></div>
        <div><a href="">Settings</a></div>
      </nav>
      <div className='content'>
        <div><img width={'100%'} src="https://www.thoughtco.com/thmb/EXpjUAx2ZEgV64eKcsAsX7Ucl6w=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/GettyImages_482194715-56a1329e5f9b58b7d0bcf666.jpg" alt="" /></div>
        <div><img src="" alt="" /></div>
      </div>
    </div>
  );
}

export default App;
