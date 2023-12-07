import { useState } from "react";
import Rating from "@mui/material/Rating";
import Box from "@mui/material/Box";

import classes from "../../../../adminPage.module.scss";
import {
  ratingDownIcon,
  ratingStarOff,
  ratingStarOn,
  ratingUpIcon,
} from "../../../../../../../assets/adminPage/adminPage";
import styles from "../form/form.module.scss";

const labels: { [index: string]: string } = {
  0.5: "1",
  1: "2",
  1.5: "3",
  2: "4",
  2.5: "5",
  3: "6",
  3.5: "7",
  4: "8",
  4.5: "9",
  5: "10",
};

const MyRating = ({ register, errors, setRatingValue }: any) => {
  const [value, setValue] = useState<number>(0);
  const [hover, setHover] = useState(0);

  return (
    <>
      <div className={styles.rating}>
        <div className={styles.ratingStarsBlock}>
          <div className={styles.ratingNameBlock}>
            <div className={styles.name}>Рейтинг</div>
            {value !== null && value > 2.5 ? (
              <img className={styles.ratingIcon} src={ratingUpIcon} alt="" />
            ) : (
              <img className={styles.ratingIcon} src={ratingDownIcon} alt="" />
            )}
          </div>

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
              name="rating"
              value={Number(value)}
              {...register}
              precision={0.5}
              onChange={(event, newValue) => {
                setRatingValue(Number(newValue) * 2);
                setValue(Number(newValue));
                console.log(Number(newValue) * 2);
              }}
              onChangeActive={(event, newHover) => {
                setHover(newHover);
              }}
              emptyIcon={<img src={ratingStarOff} alt="rating star of"></img>}
            />
            {value !== null && <Box sx={{ ml: 2 }}>{labels[hover !== -1 ? hover : value]}</Box>}
          </Box>
          <p className={classes.inputWrongNameLink}>{errors?.rating?.message}</p>
        </div>
        <div className={styles.name}>Рейтинг за май 2020 года</div>
      </div>
    </>
  );
};

export default MyRating;
