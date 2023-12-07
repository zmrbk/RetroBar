import { Link } from "react-router-dom";

import {
  advertisingIcon,
  contactIcon,
  editIcon,
  institutionIcon,
  photoIcon,
  videoIcon,
} from "../../../../../../assets/adminPage/adminPage";
import { logo } from "../../../../../../assets/header/header";
import {
  ADMIN_ADVERTISING_PAGE,
  ADMIN_CHANGE_PAGE,
  ADMIN_CONTACTS_PAGE,
  ADMIN_EMPLOYEES,
  ADMIN_INSTITUTION_PAGE,
  ADMIN_PHOTO_PAGE,
  ADMIN_VIDEO_PAGE,
} from "../../../../../../utils/path/path";
import classes from "../../../adminPage.module.scss";
import {
  Advertising,
  Change,
  Contacts,
  Employees,
  Institution,
  Photo,
  Video,
} from "../../../constants";

import ContentAdminMenu from "./ContentAdminMenu";

function AdminMenu() {
  const info = [
    {
      title: Photo,
      image: photoIcon,
      route: ADMIN_PHOTO_PAGE,
    },
    {
      title: Video,
      image: videoIcon,
      route: ADMIN_VIDEO_PAGE,
    },
    {
      title: Advertising,
      image: advertisingIcon,
      route: ADMIN_ADVERTISING_PAGE,
    },
    {
      title: Institution,
      image: institutionIcon,
      route: ADMIN_INSTITUTION_PAGE,
    },
    {
      title: Contacts,
      image: contactIcon,
      route: ADMIN_CONTACTS_PAGE,
    },
    {
      title: Change,
      image: editIcon,
      route: ADMIN_CHANGE_PAGE,
    },
    {
      title: Employees,
      image: editIcon,
      route: ADMIN_EMPLOYEES,
    },
  ];

  return (
    <div className={classes.logoAndMenuBlock}>
      <Link to={"/"}>
        <div className={classes.logoBlock}>
          <div className={classes.logoName}>Retro</div>
          <img className={classes.logoIcon} src={logo} alt="logo" />
        </div>
      </Link>
      <div className={classes.menu}>
        <div className={classes.logoRoutes}>
          {info.map((item, index) => (
            <ContentAdminMenu
              key={index}
              title={item.title}
              image={item.image}
              route={item.route}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default AdminMenu;
