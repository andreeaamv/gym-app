import React, { useEffect, useState } from 'react';

import { exerciseOptions, fetchData } from "../utils/fetchData";

import HomeHorizontalScrollbar from './HomeHorizontalScrollbar';


const SearchExercises = ({setExercises, bodyPart, setBodyPart}) => {
  const [search, setSearch] = useState("");
  const [bodyParts, setBodyParts] = useState([]);

  useEffect(() => {
    const fetchExerciseData = async () => {
      const bodyPartsData = await fetchData(
        "https://exercisedb.p.rapidapi.com/exercises/bodyPartList",
        exerciseOptions
      );

      setBodyParts(["all", ...bodyPartsData]);
    };

    fetchExerciseData();
  }, []);

  const handleSearch = async () => {
    if (search) {
      const exercisesData = await fetchData("https://exercisedb.p.rapidapi.com/exercises", exerciseOptions);

      const searchedExercises = exercisesData.data.filter( exercise =>
          exercise.name.toLowerCase().includes(search) ||
          exercise.target.toLowerCase().includes(search) ||
          exercise.equipment.toLowerCase().includes(search) ||
          exercise.bodyPart.toLowerCase().includes(search)
      );

      setSearch("");
      setExercises(searchedExercises);
    }
  };
  return (
    <>
      <section className="d-flex flex-column align-items-center gy-5 p-5 w-100">
        <h1 className="mb-5 text-center fw-bolder text-dark"> Awesome Exercises You <br /> Should Know</h1>
        <div className="d-flex align-items-center gy-2">
          <input value={search} onChange={(e) => setSearch(e.target.value.toLocaleLowerCase())} type="text" placeholder="Search Exercises..." /> 
          <button onClick={handleSearch} className="bg-danger text-white top-50 py-1 px-1 rounded-1">Search</button>
        </div>
      </section>
      <HomeHorizontalScrollbar
        data={bodyParts}
        bodyPart={bodyPart}
        isBodyParts
        setBodyPart={setBodyPart}/>
    </>
  );
}

export default SearchExercises