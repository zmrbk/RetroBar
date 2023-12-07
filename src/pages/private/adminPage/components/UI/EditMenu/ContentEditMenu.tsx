import { Link, useLocation } from "react-router-dom";

import { IEdit } from "../../../../../../utils/types/admiMenu";
import classes from "../../../adminPage.module.scss";

const ContentEditMenu = ({ title, route, width }: IEdit) => {
  const location = useLocation();
  return (
    <Link to={route}>
      <button
        style={{ width: width }}
        className={
          location.pathname.includes(route) ? classes.activeEditButton : classes.editButton
        }>
        {title}
      </button>
    </Link>
  );
};

export default ContentEditMenu;
