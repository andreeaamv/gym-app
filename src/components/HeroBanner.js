import React from 'react';

import HeroBannerImage from "../assets/images/banner.png"; 

const HeroBanner = () => {
  return (
    <section className="flex flex-column w-100 justify-content-between pt-5 pb-5">
      <div className="overlay">
        <div className="container">
          <div className="content">
            <div className="flex align-items-center justify-content-center flex-column gy-5">
              <h1 className="text-dark fw-bold text-start">Complete daily workout {" "}Exercises</h1>
              <h2 className="mb-lg-4 mt-md-5 fw-bolder text-start ">Sweat, Work,  <br /> and Repeat</h2>
              <p className="mb-4 text-start text-dark">Checkout the most effective exercises to get started.</p>
              <a href="#exercises" className="bg-danger text-white mt-5 py-2 px-4 rounded-3 cursor-pointer fw-bold">Explore Exercises</a>       
            </div>
            <div className="justify-content-end">
              <img src={HeroBannerImage} alt="banner" className="hero-banner-img"  />
            </div>
          </div>
        </div>
      </div>      
    </section>
  );
};

export default HeroBanner;