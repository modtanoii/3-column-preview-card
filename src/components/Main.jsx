import React from 'react';
import './Main.css';
import Card from './Card';
import LuxuryCarImg from '../assets/icon-luxury.svg';
import SedansCarImg from '../assets/icon-sedans.svg';
import SuvCarImg from '../assets/icon-suvs.svg';

function Main() {
  return (
    <Card>
        <div className="main">
            <div className="left">
                <img src={SedansCarImg} alt="" />
                <h1 className='title'>Sedans</h1>
                <div className="content">
                <p className='text'>Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city 
                or on your next road trip.</p></div>
                <div className="left-btn"><p>Learn More</p></div>
            </div>
            <div className="center">
                <img src={SuvCarImg} alt="" />
                <h1 className='title'>SUVs</h1>
                <div className="content">
                <p className='text'>Take an SUV for its spacious interior, power, and versatility. Perfect for your next family vacation 
                and off-road adventures.</p></div>
                <div className="center-btn"><p>Learn More</p></div>
            </div>
            <div className="right">
                <img src={LuxuryCarImg} alt="" />
                <h1 className='title'>Luxury</h1>
                <div className="content">
                <p className='text'>Cruise in the best car brands without the bloated prices. Enjoy the enhanced comfort of a luxury 
                rental and arrive in style.</p></div>
                <div className="right-btn"><p>Learn More</p></div>
            </div>
        </div>
    </Card>
  )
}

export default Main