import React, { useEffect, useState } from "react";
import Pagination from "@mui/material/Pagination";
import { Box, Stack, Typography } from "@mui/material";

import { exerciseDbUrl, exerciseOptions, fetchData } from "../utils/fetchData";
import ExerciseCard from "./ExerciseCard";

const Exercises = ({ exercises, setExercises, bodyPart }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [exercisesPerPage] = useState(6);

  let indexOfLastExercise = currentPage * exercisesPerPage;
  let indexOfFirstExercise = indexOfLastExercise - exercisesPerPage;
  let currentExercises = exercises?.slice(indexOfFirstExercise, indexOfLastExercise);

  useEffect(() => {
    const fetchExercisesData = async () => {
      let exercisesData = [];
      if (bodyPart == "all") {
        exercisesData = await fetchData(`${exerciseDbUrl}?limit=1000`, exerciseOptions);
      } else {
        exercisesData = await fetchData(`${exerciseDbUrl}/bodyPart/${bodyPart}?limit=1000`, exerciseOptions);
      }

      setExercises(exercisesData);
    };
    fetchExercisesData();
  }, [bodyPart]);

  if (!exercises.length) return <p>Loading...</p>;

  const paginate = (e, value) => {
    setCurrentPage(value);
    window.scrollTo({ top: 1800, behavior: "smooth" });
  };

  return (
    <Box id="exercises" sx={{ mt: { lg: "110px" } }} mt="50px" p="20px">
      <Typography variant="h3" mb="46px">
        Showing Results
      </Typography>
      <Stack direction="row" sx={{ gap: { xs: "50px", lg: "110px" } }} flexWrap="wrap" justifyContent="center">
        {currentExercises.map((exercise, index) => (
          <ExerciseCard key={index} exercise={exercise} />
        ))}
      </Stack>

      <Stack mt="100px" alignItems="center">
        {exercises.length > 6 && <Pagination color="standard" shape="rounded" defaultPage={1} count={Math.ceil(exercises.length / 9)} page={currentPage} onChange={paginate} size="large" />}
      </Stack>
    </Box>
  );
};

export default Exercises;
