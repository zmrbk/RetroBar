import { Link, useLocation } from "react-router-dom";

import { ICreateProfile } from "../../../../../../utils/types/admiMenu";
import classes from "../../../adminPage.module.scss";

const ContentProfileMenu = ({ title, route, width }: ICreateProfile) => {
  const location = useLocation();
  return (
    <Link to={route}>
      <button
        style={{ width: width }}
        className={location.pathname === route ? classes.activeEditButton : classes.editButton}>
        {title}
      </button>
    </Link>
  );
};

export default ContentProfileMenu;
