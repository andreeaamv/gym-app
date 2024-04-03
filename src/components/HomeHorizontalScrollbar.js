import React from "react";
import styled from "styled-components";
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
    <Div>
      <ScrollMenuDiv>
        {BodyPartImage.map((item) => (
          <Scroll
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
          </Scroll>
        ))}
      </ScrollMenuDiv>
    </Div>
  );
};

const Div = styled.div`
  display: flex;
  gap: 2.5rem;
  @media screen and (min-width: 280px) and (max-width: 500px) {
    gap: 1rem;
  }
`;
const ScrollMenuDiv = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-wrap: nowrap;
  overflow-x: auto;
  overflow-y: hidden;
  scroll-behavior: smooth;
  -webkit-overflow-scrolling: touch;
  ::-webkit-scrollbar {
    display: none;
  }
`;

const Scroll = styled.div`
  display: flex;
  padding: 1rem 1rem;
  align-items: center;
`;

export default HomeHorizontalScrollbar;