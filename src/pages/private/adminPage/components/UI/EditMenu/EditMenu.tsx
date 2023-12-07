import {
  ADMIN_EDIT_ADVERTISING,
  ADMIN_EDIT_EVENTS,
  ADMIN_EDIT_INSTITUTION,
  ADMIN_EDIT_MAIN_PAGE,
  ADMIN_EDIT_NEWS,
  ADMIN_EDIT_PHOTO,
  ADMIN_EDIT_TOP_INSTITUTION,
  ADMIN_EDIT_VIDEO,
} from "../../../../../../utils/path/path";
import {
  Advertising,
  CurrentPhotoReports,
  Events,
  Institution,
  MainPage,
  News,
  TopInstitutions,
  Video,
} from "../../../constants";
import classes from "../../../adminPage.module.scss";

import ContentEditMenu from "./ContentEditMenu";

const EditMenu = () => {
  const info = [
    {
      id: 1,
      title: MainPage,
      route: ADMIN_EDIT_MAIN_PAGE,
      width: "277px",
    },
    {
      id: 2,
      title: CurrentPhotoReports,
      route: ADMIN_EDIT_PHOTO,
      width: "389px",
    },
    {
      id: 3,
      title: Video,
      route: ADMIN_EDIT_VIDEO,
      width: "122px",
    },
    {
      id: 4,
      title: TopInstitutions,
      route: ADMIN_EDIT_TOP_INSTITUTION,
      width: "225px",
    },

    {
      id: 5,
      title: Institution,
      route: ADMIN_EDIT_INSTITUTION,
      width: "177px",
    },
    {
      id: 6,
      title: Events,
      route: ADMIN_EDIT_EVENTS,
      width: "163px",
    },
    {
      id: 7,
      title: News,
      route: ADMIN_EDIT_NEWS,
      width: "158px",
    },
    {
      id: 8,
      title: Advertising,
      route: ADMIN_EDIT_ADVERTISING,
      width: "158px",
    },
  ];

  return (
    <div className={classes.editMenu}>
      <div className={classes.editRoutes}>
        {info.map((item, index) => (
          <ContentEditMenu key={index} title={item.title} route={item.route} width={item.width} />
        ))}
      </div>
    </div>
  );
};

export default EditMenu;
