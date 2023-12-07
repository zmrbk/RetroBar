import { Link, useLocation } from "react-router-dom";

import { IAdmin } from "../../../../../../utils/types/admiMenu";
import classes from "../../../adminPage.module.scss";

const ContentAdminMenu = ({ title, image, route }: IAdmin) => {
  const location = useLocation();

  return (
    <Link to={route} className={location.pathname.includes(route) ? classes.activeLink : ""}>
      <img
        className={location.pathname.includes(route) ? classes.activeIcon : ""}
        src={image}
        alt=""
      />
      {title}
    </Link>
  );
};

export default ContentAdminMenu;
