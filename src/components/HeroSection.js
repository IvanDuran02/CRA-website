import React from 'react';
import '../App.css';
import { Twitterbtn,Ytbtn } from './Button';
import './HeroSection.css';
import video from './videos/video-1.mp4';


function HeroSection() {
  return (
    <div className='hero-container'>
      <video controls autoPlay loop muted>
        <source src={video} type="video/mp4" />
        </video>
      <h1>ADVENTURE AWAITS</h1>
      <p>What are you waiting for?</p>
      <div className='hero-btns'>
        <Twitterbtn
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
          
        >
          My Twitter
        </Twitterbtn>
        <Ytbtn
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
        >
          Watch Guide <i className='far fa-play-circle' />
        </Ytbtn>
      </div>
    </div>
  );
}

export default HeroSection;
