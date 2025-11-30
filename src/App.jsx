import React from 'react';
import SoundBoard from './components/SoundBoard';
import pic from './images/boco_icon.jpg';
import pic_yt from './images/youtube_social_icon_red.png';
import pic_x from './images/logo-white.png';

function App() {
  return (
    <div className="app-container">
      <h1>BOCO BUTTON</h1>
      <img src={pic} alt="BOCO Icon" width="300" height="300" className="boco-icon" />
      <h3><a href="https://www.youtube.com/@bbb_boco_"><img src={pic_yt} alt="YouTube Icon" width="64" height="45" /></a></h3>
      <h3><a href="https://x.com/bbb_boco_st"><img src={pic_x} alt="X Icon" width="45" height="45" /></a></h3>
      <SoundBoard />
      <footer className="footer">
        <p>Developer @nanoroku:
          <a href="https://x.com/nanoroku" target="_blanka" rel="noopener noreferrer">X</a> |
          <a href="https://youtube.com/@nanoroku_ch" target="_blanka" rel="noopener noreferrer">YouTube</a>
        </p>
      </footer>
    </div>
  );
}

export default App;
