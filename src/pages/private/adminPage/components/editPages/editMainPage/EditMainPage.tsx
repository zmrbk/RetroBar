import { Link, useNavigate } from "react-router-dom";

import AdminMenu from "../../UI/adminMenu/AdminMenu";
import EditMenu from "../../UI/EditMenu/EditMenu";
import classes from "../../../adminPage.module.scss";
import {
  mainSliderFrame,
  photoMainOne,
  photoMainThree,
  photoMainTwo,
} from "../../../../../../assets/mainPage/headerSlider/headerSlider";
import { ChangeButton, DeleteButton } from "../../../constants";
import { PhotosGetAllApi } from "../../../../../../store/features/Photos/PhotosGetAll";
import { API } from "../../../../../../utils/api";

import styles from "./EditMainPage.module.scss";

interface IMainSlider {
  id: number;
  photo: string;
  title: string;
  location: string;
  date: string;
}

const EditMainPage = () => {
  const { data = [], isLoading } = PhotosGetAllApi.useFetchPhotosGetAllQuery("");
  const PhotosCards = data || [];
  const [deletePhotoApi] = PhotosGetAllApi.useDeletePhotoMutation();
  const navigateToEditPhotos = useNavigate();

  const handleDelete = (id: any) => {
    deletePhotoApi(id);
    navigateToEditPhotos("/admin-change/edit-photo");
  };

  if (isLoading)
    return (
      <div style={{ fontSize: 24, alignSelf: "center", justifySelf: "center", marginTop: "400px" }}>
        Loading...
      </div>
    );
  if (!PhotosCards) return <div>Missing photo publications!</div>;

  return (
    <div className={classes.containerParent}>
      <AdminMenu />
      <div className={classes.editContainer}>
        <h2>Изменить</h2>
        <EditMenu />
        <div className={styles.Cardscontainer}>
          <div className={styles.EditCards}>
            {PhotosCards?.map((item) => {
              return (
                <div className={styles.Card}>
                  <img width={400} src={mainSliderFrame} alt="polaroid" />
                  <img width={370} src={API + item.eventphotos[0]} alt="photo1" />
                  <div className={styles.cardsText}>
                    <div className={styles.cardsTextChild}>
                      <h3>{item.eventname}</h3>
                    </div>
                    <p>{item.date.slice(0, 10)}</p>
                  </div>
                  <div className={styles.buttons}>
                    <Link to={`/admin-photos-update/${item.id}`} key={item.id}>
                      <button className={styles.edButton}>{ChangeButton}</button>
                    </Link>
                    <button
                      className={styles.delButton}
                      onClick={() => {
                        handleDelete(item.id);
                      }}>
                      {DeleteButton}
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditMainPage;
