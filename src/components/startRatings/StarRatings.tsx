import { useState } from "react";

import { Box, Rating } from "@mui/material";

import { ratingStarOff, ratingStarOn } from "../../assets/adminPage/adminPage";

import styles from "./starRating.module.scss";

function StarRatings() {
  const [value, setValue] = useState<number | null>(0);
  const [hover, setHover] = useState(0);
  const labels: { [index: string]: string } = {
    0.5: "0.5",
    1: "1",
    1.5: "1.5",
    2: "2",
    2.5: "2.5",
    3: "3",
    3.5: "3.5",
    4: "4",
    4.5: "4.5",
    5: "5",
  };
  return (
    <Box
      className={styles.starIconsBlock}
      sx={{
        width: 200,
        display: "flex",
        alignItems: "center",
      }}>
      <Rating
        defaultValue={0}
        icon={
          value !== null && value > 2.5 ? (
            <img src={ratingStarOn} alt="rating star on" />
          ) : (
            <img src={ratingStarOn} alt="rating star on" className={styles.redStarIcons} />
          )
        }
        name="hover-feedback"
        value={value}
        precision={0.5}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        onChangeActive={(event, newHover) => {
          setHover(newHover);
        }}
        emptyIcon={<img src={ratingStarOff} alt="rating star of"></img>}
      />
      {value !== null && <Box sx={{ ml: 2 }}>{labels[hover !== -1 ? hover : value]}</Box>}
    </Box>
  );
}

export default StarRatings;
