import React, { useEffect, useState } from "react";
import { Box, Button, TextField, Stack, Typography } from "@mui/material";
import { exerciseDbUrl, exerciseOptions, fetchData } from "../utils/fetchData";
import { HorizontalScrollbar } from "./";

const SearchExercises = ({ bodyPart, setBodyPart, setExercises }) => {
  const [search, setSearch] = useState("");
  const [bodyParts, setBodyParts] = useState([]);

  useEffect(() => {
    const fetchExercisesData = async () => {
      const bodyPartsData = await fetchData(`${exerciseDbUrl}/bodyPartList?limit=100`, exerciseOptions);

      setBodyParts(["all", ...bodyPartsData]);
    };

    fetchExercisesData();
  }, []);

  const handleSearch = async () => {
    if (search) {
      let exercisesData = await fetchData(`${exerciseDbUrl}?limit=1000`, exerciseOptions);

      let searchedExercises = exercisesData.filter(exercise => {
        return exercise.name.toLowerCase().includes(search) || exercise.target.toLowerCase().includes(search) || exercise.equipment.toLowerCase().includes(search) || exercise.bodyPart.toLowerCase().includes(search);
      });

      window.scrollTo({ top: 1800, left: 100, behavior: "smooth" });

      console.log("searchedExercises", searchedExercises);

      setSearch("");
      setExercises(searchedExercises);
    }
  };

  return (
    <Stack alignItems="center" mt="37px" justifyContent="center" p="20px">
      <Typography fontWeight={700} sx={{ fontSize: { xs: "40px", lg: "44px" }, mb: "50px", textAlign: "center" }}>
        Awesome Exercises You Should Know
      </Typography>

      <Box position="relative" mb="72px">
        <TextField
          sx={{
            input: {
              fontWeight: "700",
              border: "none",
              borderRadius: "4px"
            },
            width: { xs: "350px", lg: "800px" },
            backgroundColor: "#fff",
            borderRadius: "40px"
          }}
          height="76px"
          value={search}
          onChange={e => setSearch(e.target.value.toLowerCase())}
          placeholder="Search exercises.."
          type="text"
        />
        <Button
          className="search-btn"
          sx={{
            backgroundColor: "#ff2625",
            color: "#fff",
            textTransform: "none",
            width: { xs: "80px", lg: "175px" },
            fontSize: { xs: "14px", lg: "20px" },
            height: "56px",
            position: "absolute",
            right: "0"
          }}
          onClick={handleSearch}
        >
          Search
        </Button>
      </Box>

      <Box sx={{ position: "relative", p: "20px" }}>
        <HorizontalScrollbar data={bodyParts} bodyPart={bodyPart} setBodyPart={setBodyPart} />
      </Box>
    </Stack>
  );
};

export default SearchExercises;
