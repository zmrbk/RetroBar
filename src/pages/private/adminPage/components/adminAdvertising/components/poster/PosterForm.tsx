import * as reactHookForm from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { InferType } from "yup";

import MyButton from "../../../UI/myButton/MyButton";
import { linkIcon } from "../../../../../../../assets/adminPage/adminPage";
import { addLinkName, PublishButton } from "../../../../constants";
import classes from "../../../../adminPage.module.scss";
import { posterSchema } from "../../../../../../../utils/validations/posterForm";
import { useCreatePosterMutation } from "../../../../../../../store/features/Ads/PosterApi";
import PosterAdd from "../../../UI/PosterAdd/PosterAdd";
import styles from "../form/form.module.scss";

export const PosterForm = () => {
  const [createPoster, {}] = useCreatePosterMutation();

  type schemaType = InferType<typeof posterSchema>;

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = reactHookForm.useForm<schemaType>({
    mode: "onChange",
    resolver: yupResolver(posterSchema),
  });

  let PosterPhotoRegister = register("posterphoto");

  const onSubmitPoster = (data: { [key: string]: any }) => {
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
    createPoster(formData);
    reset();
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmitPoster)}>
      <div className={styles.poster}>
        <PosterAdd register={PosterPhotoRegister} errors={errors} />
        <div className={styles.addLink}>
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
        <MyButton className={styles.MyButton} props={PublishButton} />
      </div>
    </form>
  );
};
