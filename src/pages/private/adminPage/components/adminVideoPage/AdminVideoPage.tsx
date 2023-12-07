import AdminMenu from "../UI/adminMenu/AdminMenu";
import classes from "../../adminPage.module.scss";

import { Form } from "./components/form/Form";

function AdminVideoPage() {
  return (
    <div className={classes.containerParent}>
      <AdminMenu />
      <Form />
    </div>
  );
}

export default AdminVideoPage;
