import React from 'react';
import './Cards.css';
import CardItem from './CardItem';
import grandmaster from './images/grandmaster.jpg';
import challenger from './images/challenger.jpg';
import master from './images/master.jpg';
import platinum from './images/platinum.jpg';
import diamond from './images/diamond.png';

function Cards() {
  return (
    <div className='cards'>
      <h1>What is your dream rank?!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src={challenger}
              text='Click here to see boosting prices for Challenger!'
              label='Challenger'
              path='/services'
            />
            <CardItem
              src={grandmaster}
              text='Click here to see boosting prices for GrandMaster!'
              label='GrandMaster'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src={diamond}
              text='Click here to see boosting prices for Diamond!'
              label='Diamond'
              path='/services'
            />
            <CardItem
              src={master}
              text='Click here to see boosting prices for Masters!'
              label='Masters'
              path='/coaching'
            />
            <CardItem
              src={platinum}
              text='Click here to see boosting prices for Platinum!'
              label='Platinum'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
