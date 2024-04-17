import React from "react";
import { ScrollMenu } from 'react-horizontal-scrolling-menu';

import BodyPart from "./BodyPart";

import All from "../assets/icons/All.png";
import Arms from "../assets/icons/arms.png";
import Back from "../assets/icons/back.png";
import Chest from "../assets/icons/chest.png";
import LowerLegs from "../assets/icons/LowerLegs.png";
import UpperLegs from "../assets/icons/upperLegs.png";
import Neck from "../assets/icons/neck.png";
import Shoulder from "../assets/icons/shoulder.png";
import Waist from "../assets/icons/waist.png";
import Cardio from "../assets/icons/cardio.png";

const HomeHorizontalScrollbar = ({ data, bodyPart, setBodyPart }) => {
  const BodyPartImage = [
    {
      text: "1",
      img: All,
    },
    {
      text: "2",
      img: Back,
    },
    {
      text: "3",
      img: Cardio,
    },
    {
      text: "4",
      img: Chest,
    },
    {
      text: "5",
      img: Arms,
    },
    {
      text: "6",
      img: LowerLegs,
    },
    {
      text: "7",
      img: Neck,
    },
    {
      text: "8",
      img: Shoulder,
    },
    {
      text: "9",
      img: Arms,
    },
    {
      text: "10",
      img: UpperLegs,
    },
    {
      text: "11",
      img: Waist,
    },
  ];

  for (let i = 0; i < 11; i++) {
    BodyPartImage[i].text = data[i];
  }


  return (
    <div className="d-flex">
      <ScrollMenu>
        {BodyPartImage.map((item) => (
          <div className="d-flex align-items-center"
            key={item.id || item.text}
            itemId={item.id || item.text}
            title={item.id || item.text}
          >
            <BodyPart
              item={item.text}
              img={item.img}
              setBodyPart={setBodyPart}
              bodyPart={bodyPart}
            />
          </div>
        ))}
      </ScrollMenu>
    </div>
  );
};


export default HomeHorizontalScrollbar;