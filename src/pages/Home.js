import React, { useState } from "react";
import { Box } from "@mui/material";
import { HeroBanner, SearchExercises, Exercises } from "../components";

const Home = () => {
  let [bodyPart, setBodyPart] = useState("all");
  let [exercises, setExercises] = useState([]);

  return (
    <Box>
      <HeroBanner />
      <SearchExercises bodyPart={bodyPart} setBodyPart={setBodyPart} setExercises={setExercises} />
      <Exercises bodyPart={bodyPart} exercises={exercises} setExercises={setExercises} />
    </Box>
  );
};

export default Home;
