import { Link, useNavigate, useParams } from "react-router-dom";

import classes from "../../../../adminPage.module.scss";
import ProfileMenu from "../../../UI/ProfileMenu/ProfileMenu";
import AdminMenu from "../../../UI/adminMenu/AdminMenu";
import { EmployersApi } from "../../../../../../../store/features/Employers/EmployersApi";
import { API } from "../../../../../../../utils/api";
import Button from "../../../UI/myButton/MyButton";
import { ChangeButton, DeleteButton } from "../../../../constants";

import styles from "./Profile.module.scss";

const Profile = () => {
  const { id } = useParams();
  const { data: employee } = EmployersApi.useGetEmployerQuery(id);

  const navigateToEmployees = useNavigate();

  const handleDelete = () => {
    deleteEmployee(id);
    navigateToEmployees("/admin-employees");
  };

  const [deleteEmployee, {}] = EmployersApi.useDeleteEmployerMutation();
  return (
    <div className={classes.containerParent}>
      <AdminMenu />
      <div className={styles.container}>
        <h2>Профиль</h2>
        <ProfileMenu />
        <div className={styles.formContainer}>
          <form className={styles.form}>
            <div className={styles.formAddPhoto}>
              <div className={styles.formLeft}>
                <img
                  className={styles.addPhoto}
                  src={employee && API + employee.avatar[0]}
                  alt=""
                />
              </div>
              <div className={styles.formRight}>
                <div className={classes.inputName}>Имя</div>
                <h3>{employee?.name}</h3>
                <div className={classes.inputName}>Специальность</div>
                <h3>{employee?.speciality}</h3>
                <div className={classes.inputName}>Информация</div>
                <h3>{employee?.info}</h3>
                <div className={classes.inputName}>Телефон</div>
                <h3>{employee?.phone[0]}</h3>
                {employee?.phone[1] && <h3>{employee?.phone[0]}</h3>}
                <div className={classes.inputName}>Вебсайт</div>
                <h3>{employee?.website}</h3>
              </div>
            </div>
          </form>
          <Button props={DeleteButton} onClick={handleDelete} />
          <Link to={`/admin-employee-update/${id}`} key={id}>
            <Button props={ChangeButton} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Profile;
