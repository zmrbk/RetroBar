import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";

import styles from "./slider.module.scss";

export const SpeedSlider = ({ setMultiValue }: any) => {
  const marks = [
    {
      value: 33,
      label: "1x",
    },
    {
      value: 66,
      label: "2x",
    },
    {
      value: 100,
      label: "3x",
    },
  ];

  function valuetext(value: number) {
    setMultiValue(Math.floor(value / 33));
    return `${value}x`;
  }

  function valueLabelFormat(value: number) {
    return marks.findIndex((mark) => mark.value === value) + 1;
  }

  return (
    <Box className={styles.box} sx={{ width: 400 }}>
      <Slider
        className={styles.boxSlider}
        aria-label=" Restricted values"
        defaultValue={33}
        getAriaValueText={valuetext}
        valueLabelFormat={valueLabelFormat}
        step={null}
        marks={marks}
        valueLabelDisplay="auto"
      />
    </Box>
  );
};
