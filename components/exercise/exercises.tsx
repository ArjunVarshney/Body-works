"use client";

import axios from "axios";
import { useEffect, useState } from "react";
import ExerciseCard from "./exercise-card";

const Exercises = () => {
   const [exercises, setExercises] = useState<any[]>([]);

   const fetchExercises = async () => {
      const ex = (await axios.get("/api/exercises")).data.data;
      setExercises(ex);
   };

   useEffect(() => {
      fetchExercises();
   }, []);

   return (
      <div className="container">
         {exercises.map((ex) => {
            return <ExerciseCard key={ex.id} />;
         })}
      </div>
   );
};

export default Exercises;
