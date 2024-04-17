import React, { useEffect } from 'react';

import { exerciseOptions, fetchData } from "../utils/fetchData";
import ExerciseCard from "./ExerciseCard";

const Exercises = ({ exercises, setExercises, bodyPart }) => {
  
  useEffect(() =>{
    const fetchExercisesData = async () => {
      let exercisesData = [];
      if(bodyPart==='all') {
        exercisesData = await fetchData('https://exercisedb.p.rapidapi.com/exercises', exerciseOptions);
      } else {
        exercisesData = await fetchData(`https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`, exerciseOptions);
      }
      setExercises(exercisesData);
    }
    fetchExercisesData();
  }, [bodyPart]);


  return (
    <div id="exercises" className="justify-content-center mt-5 p-2">
      <h1 className="fw-bold mb-4 text-dark text-center">Showing results</h1>
      <section className="flex flex-wrap flex-column mt-5 justify-content-center align-items-center w-50 g-5">
        {exercises.map((exercise, index) => (
          <ExerciseCard key={index} exercise={exercise} />
        ))}
      </section>
    </div>
  );
};

export default Exercises;