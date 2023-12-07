import { useState } from "react";
import * as reactHookForm from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { InferType } from "yup";
import { useNavigate, useParams } from "react-router-dom";

import classes from "../../../adminPage.module.scss";
import MyButton from "../../UI/myButton/MyButton";
import { changePhotoSchema } from "../../../../../../utils/validations/changePhoto";
import PhotoAdd from "../../UI/PhotoAdd/PhotoAdd";
import { addLinkName, eventName, Name, Photograph } from "../../../constants";
import { linkIcon } from "../../../../../../assets/adminPage/adminPage";
import { SpeedSlider } from "../../UI/slider/Slider";
import { PhotosGetAllApi } from "../../../../../../store/features/Photos/PhotosGetAll";
import styles from "../../adminPhotoPage/components/form/form.module.scss";

const UpdateMainForm = () => {
  const { id } = useParams();
  const [multiValue, setMultiValue] = useState(0);
  const { data: photoInfo } = PhotosGetAllApi.useGetPhotoByIdQuery(id);
  const [updatePhotoApi] = PhotosGetAllApi.useUpdatePhotoMutation();
  const navigateToEditPhotos = useNavigate();

  const handleUpdate = (id: any) => {
    updatePhotoApi(id);
    navigateToEditPhotos("/admin-change/edit-photo");
  };

  const [PhotosEventName, setPhotosEventName] = useState(photoInfo?.eventname);
  const [PhotosEventPhotos, setPhotosEventPhotos] = useState(photoInfo?.eventphotos);
  const [PhotosEventDate, setPhotosEventDate] = useState(photoInfo?.date);
  const [PhotosEventLink, setPhotosEventLink] = useState(photoInfo?.link);
  const [PhotosEventViews, setPhotosEventViews] = useState(photoInfo?.views);
  const [PhotosEventPubName, setPhotosEventPubName] = useState(photoInfo?.pubname);

  //   for useform-----------------------
  type schemaType = InferType<typeof changePhotoSchema>;

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = reactHookForm.useForm<schemaType>({
    mode: "onChange",
    resolver: yupResolver(changePhotoSchema),
  });

  const onSubmit = (data: { [key: string]: any }) => {
    data.multiplier = multiValue;
    console.log(data);
    const formData = new FormData();
    Object.keys(data).forEach((key) => {
      const value = data[key];
      if (value[0] && typeof value !== "string") {
        Array.from(value as File[]).forEach((val) => {
          formData.append(key, val);
        });
      } else {
        formData.append(key, value);
      }
    });
    reset();
  };
  let addPhotoRegister = register("eventphotos");

  return (
    <div className={styles.formContainer}>
      <h2>Фото</h2>
      <form name="formdata" id="formdata" className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.formAddPhoto}>
          <div className={styles.formLeft}>
            {/* -----------add photo------------------ */}
            <PhotoAdd register={addPhotoRegister} errors={errors} />
            <div className={classes.addLink}>
              <div>
                <div className={classes.addLinkName}>
                  <div className={classes.inputNameLink}>{addLinkName}</div>
                  <img className={classes.linkIcon} src={linkIcon} alt="" />
                </div>
                <input
                  placeholder={addLinkName}
                  className={errors?.link?.message ? classes.wrongUrl : classes.input}
                  type="text"
                  {...register("link")}
                  value={PhotosEventLink}
                />
                <p className={classes.inputWrongNameLink}>{errors?.link?.message}</p>
              </div>
            </div>
          </div>
          <div className={styles.formRight}>
            <div className={classes.inputName}>Название заведения</div>
            <div>
              <input
                placeholder={Name}
                type="text"
                {...register("pubname")}
                className={errors?.pubname?.message ? classes.wrongUrl : classes.input}
              />
              <p className={classes.inputWrongNameLink}>{errors?.pubname?.message}</p>
            </div>
            <div className={classes.inputName}>Название вечеринки</div>
            <div>
              <input
                placeholder={eventName}
                type="text"
                {...register("eventname")}
                className={errors?.eventname?.message ? classes.wrongUrl : classes.input}
              />
              <p className={classes.inputWrongNameLink}>{errors?.eventname?.message}</p>
            </div>
            <div className={classes.inputName}>Фотограф</div>
            <div>
              <input
                placeholder={Photograph}
                type="text"
                {...register("photographer")}
                className={errors?.photographer?.message ? classes.wrongUrl : classes.input}
              />
              <p className={classes.inputWrongNameLink}>{errors?.photographer?.message}</p>
            </div>
            <div className={classes.inputName}>Дата</div>
            <div>
              <input
                placeholder={"Введите дату в формате yyyy-mm-dd"}
                type="text"
                {...register("date")}
                className={errors?.date?.message ? classes.wrongUrl : classes.input}
              />
              <p className={classes.inputWrongNameLink}>{errors?.date?.message}</p>
            </div>
            <div className={classes.inputName}>Просмотры</div>
            <SpeedSlider setMultiValue={setMultiValue} />

            <MyButton
              type="submit"
              className={styles.MyButton}
              props="Изменить"
              onClick={() => {
                handleUpdate(id);
              }}
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default UpdateMainForm;
