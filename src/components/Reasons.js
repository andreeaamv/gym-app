import React from 'react';

import Dumbbell from '../assets/icons/dumbbell.png';
import img1 from '../assets/images/fit-woman1.jpg';
import img2 from '../assets/images/fit-woman2.jpg';

const Reasons = () => {
  return (
    <section id='reasons' className="gy-11 justify-content-between px-5 pb-20">
      <div className='justify-content-center'>
        <h3 className='text-danger fw-bold align-items-center justify-content-center'>Some Reasons</h3>
        <h1 className='my-4 text-capitalize text-white-50 '>Why choose us?</h1>
        <h4 className="mb-4 text-danger-emphasis">
          <img src={Dumbbell} alt='dumbbell' width= "28px" height= "28px" /> 
          One free program for new member
        </h4>
        <h4 className="mb-4 text-danger-emphasis">
          <img src={Dumbbell} alt='dumbbell' width= "28px" height= "28px" />      
          Reliable partners
        </h4>
        <h4 className="mb-4 text-danger-emphasis">
          <img src={Dumbbell} alt='dumbbell' width= "28px" height= "28px" />   
          Train smarter and faster than before
        </h4>        
      </div>    
      <div className='d-flex my-5 justify-content-center'>
        <img className="rounded-5 shadow object-fit-cover w-25 h-25" src={img1} alt='woman1' /> 
        <img className="rounded-5 shadow object-fit-cover w-35 h-35" src={img2} alt='woman2' />
      </div> 
    </section>
  );
}

export default Reasons;
