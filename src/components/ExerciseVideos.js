import React from "react";
import { Box, Typography, Stack } from "@mui/material";

const ExerciseVideos = ({ exerciseVideos, name }) => {
  if (!exerciseVideos?.length) return <p>Loading..</p>;

  return (
    <Box sx={{ marginTop: { xs: "20px", lg: "200px" } }} p="20px">
      <Typography variant="h3" mb="33px">
        Watch <span style={{ color: "#ff2625" }}>{name}</span> exercise videos
      </Typography>
      <Stack
        justifyContent="flex-start"
        flexWrap="wrap"
        alignItems="center"
        sx={{
          flexDirection: { lg: "row" },
          gap: { xs: "0", lg: "110px" }
        }}
      >
        {exerciseVideos?.slice(0, 3).map((item, idx) => (
          <a key={idx} className="exercise-video" href={`https://www.youtube.com/watch?v=${item.video.videoId}`} target="_blank" rel="noopener noreferrer">
            <img src={item.video.thumbnails[0].url} alt={item.video.title} />
            <Box>
              <Typography variant="h5" color="#000">
                {item.video.title}
              </Typography>
              <Typography variant="h6" color="#000">
                {item.video.channeName}
              </Typography>
            </Box>
          </a>
        ))}
      </Stack>
    </Box>
  );
};

export default ExerciseVideos;
