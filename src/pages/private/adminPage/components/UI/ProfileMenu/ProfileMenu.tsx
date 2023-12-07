import { ADMIN_CREATE_EMPLOYEE, ADMIN_EMPLOYEES } from "../../../../../../utils/path/path";
import { createEmployeeName, Employees } from "../../../constants";
import classes from "../../../adminPage.module.scss";

import ContentProfileMenu from "./ContentProfileMenu";

const ProfileMenu = () => {
  const info = [
    {
      id: 1,
      title: Employees,
      route: ADMIN_EMPLOYEES,
      width: "277px",
    },
    {
      id: 2,
      title: createEmployeeName,
      route: ADMIN_CREATE_EMPLOYEE,
      width: "277px",
    },
  ];

  return (
    <div className={classes.editMenu}>
      <div className={classes.editRoutes}>
        {info.map((item, index) => (
          <ContentProfileMenu
            key={index}
            title={item.title}
            route={item.route}
            width={item.width}
          />
        ))}
      </div>
    </div>
  );
};

export default ProfileMenu;
