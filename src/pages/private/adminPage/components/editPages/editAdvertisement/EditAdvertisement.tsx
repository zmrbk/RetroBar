import AdminMenu from "../../UI/adminMenu/AdminMenu";
import EditMenu from "../../UI/EditMenu/EditMenu";
import classes from "../../../adminPage.module.scss";

const EditAdvertisement = () => {
  return (
    <div className={classes.containerParent}>
      <AdminMenu />
      <div className={classes.editContainer}>
        <h2>Изменить</h2>
        <EditMenu />
        <div>edit advertisement</div>
      </div>
    </div>
  );
};

export default EditAdvertisement;
