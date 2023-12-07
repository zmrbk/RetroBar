import { EmployersApi } from "../../../../../store/features/Employers/EmployersApi";
import classes from "../../adminPage.module.scss";
import AdminMenu from "../UI/adminMenu/AdminMenu";
import ProfileMenu from "../UI/ProfileMenu/ProfileMenu";

import MyCard from "./components/Cards/MyCard";
import styles from "./AdminEmployees.module.scss";

const AdminEmployees = () => {
  const { data = [], isLoading } = EmployersApi.useFetchEmployersGetAllQuery("");

  const employers = data || [];

  if (isLoading)
    return (
      <div style={{ fontSize: 24, alignSelf: "center", justifySelf: "center", marginTop: "400px" }}>
        Loading...
      </div>
    );
  if (!employers) return <div>Missing employers!</div>;

  return (
    <div className={classes.containerParent}>
      <AdminMenu />
      <div className={styles.container}>
        <h2>Изменить</h2>
        <ProfileMenu />
        <div className={styles.Cards}>
          {employers?.map((item) => {
            return (
              <MyCard
                avatar={item.avatar[0]}
                name={item.name}
                info={item.info}
                website={item.website}
                id={item.id.toString()}
                speciality={item.speciality}
                phone={item.phone}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default AdminEmployees;
