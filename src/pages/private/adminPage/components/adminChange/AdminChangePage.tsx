import AdminMenu from "../UI/adminMenu/AdminMenu";
import classes from "../../adminPage.module.scss";

import EditMenu from "../UI/EditMenu/EditMenu";

import styles from "./adminChangePage.module.scss";

function AdminChangePage() {
  return (
    <div className={classes.containerParent}>
      <AdminMenu />
      <div className={styles.container}>
        <h2>Изменить</h2>
        <EditMenu />
        <div>edit page</div>
      </div>
    </div>
  );
}

export default AdminChangePage;
