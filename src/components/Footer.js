import React from 'react';

import Logo from "../assets/images/Logo.png";

const Footer = () => {
  return (
    <footer id="contact" className="d-flex align-items-center p-3 text-center justify-content-center gy-4 flex-column mt-5 text-bg-secondary">
      <h1 className="text-capitalize mb-6 text-black fw-bold"> Join now to get in shape</h1>
      <form className="d-flex flex-column gy-4 mt-3">
        <input className="text-capitalize" type="text" placeholder="name" />
        <input className="text-capitalize" type="email" placeholder="e-mail"/>
        <textarea className="text-capitalize" placeholder="message" cols="30" rows="4"></textarea>
        <input type="button" value="submit" className="bg-danger cursor-pointer text-capitalize text-white top-12 py-2 px-5 rounded-md"/>
      </form>
      <img src={Logo} alt="logo" width="100px" height="40px" className='mt-5' />
      <h5 className="pb-4 mt-2"> Made by Andreea as part of a learning project</h5>
      Copyright © 2024 Gym. All rights reserved.
    </footer>
  );
}

export default Footer;
