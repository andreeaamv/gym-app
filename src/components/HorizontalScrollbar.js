import React from "react";
import { ScrollMenu } from 'react-horizontal-scrolling-menu';


import BodyPart from "./BodyPart";
import ExerciseCard from './ExerciseCard';


const HorizontalScrollBar = ({data, setBodyPart , bodyPart, isBodyParts}) => {
    return ( 
      <ScrollMenu>
       {data.map(item => 
        <div className="flex justify-content-evenly align-items-center" key={item}>
          {isBodyParts ? <BodyPart item={item} setBodyPart={setBodyPart} bodyPart={bodyPart}/> : <ExerciseCard exercise={item}/> }
          </div>)}
      </ScrollMenu>
     );
}
 
export default HorizontalScrollBar;