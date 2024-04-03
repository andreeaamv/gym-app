import React from "react";

import BodyPartImage from "../assets/icons/body-part.png";
import TargetImage from "../assets/icons/target.png";
import EquipmentImage from "../assets/icons/equipment.png";

const Detail = ({ exerciseDetail }) => {

  const { bodyPart, gifUrl, name, target, equipment } = exerciseDetail;

  const extraDetail = [
    {
      icon: BodyPartImage,
      name: bodyPart,
    },
    {
      icon: TargetImage,
      name: target,
    },
    {
      icon: EquipmentImage,
      name: equipment,
    },
  ]
  return (
    <section className='flex flex-column p-5 align-content-center text-center justify-content-center'>
      <div className='flex align-items-center justify-content-center text-danger fw-bold text-center'>
          <img src={gifUrl} loading='lazy' alt={name} />
      </div>
      
      <div className='flex flex-column align-items-center gy-6 text-center pt-11'>
        <h1 className='fw-bold text-capitalize mb-5 text-danger'>{name}</h1>
        <p className='text-center text-white'>
            Exercises keep you healthy. <span className='text-danger'>{name}</span>{' '} is a great exercise to target your <span className='text-danger'>{target}</span>.<br/>
            It will help you build up your <span className='text-danger'>{bodyPart}</span> muscles.
        </p>
        {extraDetail.map(item => (
            <span key={item.icon} className='flex flex-column gy-5 w-40 pt-5 text-white'>
              <div className='flex align-items-center gx-3'>
                <div className='w-10 h-10'>
                  <img src={item.icon} alt={item.name} className="object-fit-cover" />
                </div>
                <h2 className='text-capitalize text-white'>{item.name}</h2>
              </div>
            </span>
        ))}
      </div>
    </section>
  );
}

export default Detail;