import { useState } from "react";
import * as reactHookForm from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { InferType } from "yup";

import classes from "../../../../adminPage.module.scss";
import { linkIcon } from "../../../../../../../assets/adminPage/adminPage";
import MyButton from "../../../UI/myButton/MyButton";
import { addLinkName, eventName, Name, Photograph, PublishButton } from "../../../../constants";
import { SpeedSlider } from "../../../UI/slider/Slider";
import { photoSchema } from "../../../../../../../utils/validations/addPhoto";
import { useCreatePhotoMutation } from "../../../../../../../store/features/Photos/PhotosGetAll";
import PhotoAdd from "../../../UI/PhotoAdd/PhotoAdd";

import styles from "./form.module.scss";

export const Form = () => {
  const [createPhoto, {}] = useCreatePhotoMutation();
  const [multiValue, setMultiValue] = useState(0);

  type schemaType = InferType<typeof photoSchema>;

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = reactHookForm.useForm<schemaType>({
    mode: "onChange",
    resolver: yupResolver(photoSchema),
  });

  const onSubmit = (data: { [key: string]: any }) => {
    data.multiplier = multiValue;
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
    createPhoto(formData);
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
            <MyButton type="submit" className={styles.MyButton} props={PublishButton} />
          </div>
        </div>
      </form>
    </div>
  );
};
