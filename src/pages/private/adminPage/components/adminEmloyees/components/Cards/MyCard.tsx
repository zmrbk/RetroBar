import React from "react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
import "swiper/css/scrollbar";
import "swiper/css/mousewheel";
import "swiper/css/keyboard";
import "swiper/css/autoplay";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";

import { API } from "../../../../../../../utils/api";

import style from "./styles.module.scss";

interface IMainSlider {
  id: string;
  avatar: string;
  name: string;
  info: string;
  website: string;
  speciality: string;
  phone: string[];
}

function MyCard({ avatar, name, info, website, id, speciality, phone }: IMainSlider) {
  return (
    <Card className={style.Card} sx={{ maxWidth: 400 }}>
      <CardMedia component="img" height="200" image={API + avatar} alt="ph" />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {name}, {speciality}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {info}
        </Typography>
      </CardContent>
      <CardActions>
        <a href={website} target="_blank" rel="noreferrer">
          <Button size="small">Website</Button>
        </a>
        <Link to={`/admin-employees/${id}`} key={id}>
          <Button size="small">Подробнее</Button>
        </Link>
      </CardActions>
    </Card>
  );
}

export default MyCard;
