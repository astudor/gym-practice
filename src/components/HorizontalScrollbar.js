import React, { useContext } from "react";
import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";
import { Box, Typography } from "@mui/material";

import ExerciseCard from "./ExerciseCard";
import BodyPart from "./BodyPart";
import RightArrowIcon from "../assets/icons/right-arrow.png";
import LeftArrowIcon from "../assets/icons/left-arrow.png";

const LeftArrow = () => {
  const { isFirstItemVisible, scrollPrev } = useContext(VisibilityContext);
  return (
    <Typography disabled={isFirstItemVisible} onClick={() => scrollPrev()} className={`left-arrow ${isFirstItemVisible ? "disabled" : ""}`}>
      <img src={LeftArrowIcon} alt="left-arrow" />
    </Typography>
  );
};

const RightArrow = () => {
  const { isLastItemVisible, scrollNext } = useContext(VisibilityContext);

  return (
    <Typography disabled={isLastItemVisible} onClick={() => scrollNext()} className={`right-arrow ${isLastItemVisible ? "disabled" : ""}`}>
      <img src={RightArrowIcon} alt="right-arrow" />
    </Typography>
  );
};

const HorizontalScrollbar = ({ data, setBodyPart, bodyPart, isBodyPart }) => {
  return (
    <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
      {data.map(item => (
        <Box key={item.id || item} itemId={item.id || item} title={item.id || item} m="0 40px">
          {isBodyPart ? <BodyPart item={item} setBodyPart={setBodyPart} bodyPart={bodyPart} /> : <ExerciseCard exercise={item} />}
        </Box>
      ))}
    </ScrollMenu>
  );
};

export default HorizontalScrollbar;
