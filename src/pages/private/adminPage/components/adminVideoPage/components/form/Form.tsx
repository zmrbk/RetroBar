import { useState } from "react";
import * as reactHookForm from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { InferType } from "yup";

import classes from "../../../../adminPage.module.scss";
import { linkIcon } from "../../../../../../../assets/adminPage/adminPage";
import MyButton from "../../../UI/myButton/MyButton";
import {
  addLinkName,
  Date,
  eventName,
  Name,
  PublishButton,
  Videograph,
} from "../../../../constants";
import { SpeedSlider } from "../../../UI/slider/Slider";
import { videoSchema } from "../../../../../../../utils/validations/addVideo";
import VideoAdd from "../../../UI/VideoAdd/VideoAdd";
import { useCreateVideoMutation } from "../../../../../../../store/features/Videos/VideosGetAll";

import styles from "./form.module.scss";

export const Form = () => {
  const [setMultiValue] = useState(0);
  const [createVideo] = useCreateVideoMutation();
  type schemaType = InferType<typeof videoSchema>;

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = reactHookForm.useForm<schemaType>({
    mode: "onChange",
    resolver: yupResolver(videoSchema),
  });

  const onSubmitVideo = (data: { [key: string]: any }) => {
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
    createVideo(formData);
    reset();
  };

  return (
    <div className={styles.formContainer}>
      <h2>Видео</h2>
      <form className={styles.form} onSubmit={handleSubmit(onSubmitVideo)}>
        <div className={styles.formLeft}>
          <VideoAdd register={register} errors={errors} />
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
          <div className={classes.inputName}>Видеограф</div>
          <div>
            <input
              placeholder={Videograph}
              type="text"
              {...register("photographer")}
              className={errors?.photographer?.message ? classes.wrongUrl : classes.input}
            />
            <p className={classes.inputWrongNameLink}>{errors?.photographer?.message}</p>
          </div>
          <div className={classes.inputName}>Дата</div>
          <div>
            <input
              placeholder={Date}
              type="text"
              {...register("date")}
              className={errors?.date?.message ? classes.wrongUrl : classes.input}
            />
            <p className={classes.inputWrongNameLink}>{errors?.date?.message}</p>
          </div>
          <div className={classes.inputName}>Просмотры</div>
          <SpeedSlider setMultiValue={setMultiValue} />
          <MyButton type="submit" props={PublishButton} />
        </div>
      </form>
    </div>
  );
};
