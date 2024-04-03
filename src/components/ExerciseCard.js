import React from "react";
import { Link } from "react-router-dom";

const ExerciseCard = ({ exercise }) => {
  let str;
  const length = exercise.name.length;
  if (length > 29) {
    str = exercise.name.slice(0, 29);
    str = str.concat(`...`);
  } else {
    str = exercise.name;
  }

  return (
    <section className="shadow p-5 rounded-3 my-3">
      <Link className="exercise_card" to={`/exercise/${exercise.id}`} >             
        <img src={exercise.gifUrl} alt={exercise.name} loading="lazy" className="rounded-4" />
        <div className="flex gx-3 mt-4">
          <button className="text-white text-capitalize rounded-3 bg-danger p-2">{exercise.bodyPart}</button>
          <button className="text-danger text-capitalize rounded-3 bg-light p-2">Target:{ exercise.target}</button>   
        </div>
        <p className="mt-3 text-danger text-center text-capitalize">{str}</p>              
      </Link>
    </section>   
  );
};

export default ExerciseCard;