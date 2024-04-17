import React from "react";

import HorizontalScrollbar from "./HorizontalScrollbar";


const SimilarExercises = ({ targetMuscleExercises, equipmentExercises }) => {
  return (
    <>
      <h3 className="mb-5 text-dark fw-bold">
        Similar{" "}
        <span className="text-capitalize">
          Target Muscle
        </span>{" "}
        exercises
      </h3>
      <div className="p-2 position-relative flex-row">
        <HorizontalScrollbar data={targetMuscleExercises} />       
      </div>

      <h3 className="mb-5 text-dark fw-bold">
        Similar{" "}
        <span className="text-capitalize">
          Equipment
        </span>{" "}
        exercises
      </h3>
      <div className="p-2 position-relative flex-row">
        <HorizontalScrollbar data={equipmentExercises} />
      </div>
    </>
  );
};

export default SimilarExercises;