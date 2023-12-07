import * as reactHookForm from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { InferType } from "yup";

import classes from "../../../../adminPage.module.scss";
import MyButton from "../../../UI/myButton/MyButton";
import { Name, PublishButton } from "../../../../constants";
import Description from "../../../UI/description/Description";
import { adSchema } from "../../../../../../../utils/validations/adForm";
import PhotoAdd from "../../../UI/PhotoAdd/PhotoAdd";
import { useCreateAdMutation } from "../../../../../../../store/features/Ads/AdApi";
import styles from "../form/form.module.scss";

export const AdvertisementForm = () => {
  const limit = 40;
  const width = 400;
  const [createAd, {}] = useCreateAdMutation();

  type schemaType = InferType<typeof adSchema>;

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = reactHookForm.useForm<schemaType>({
    mode: "onChange",
    resolver: yupResolver(adSchema),
  });

  let adPhotoRegister = register("adphoto");
  let adDescRegister = register("info");

  const onSubmitAd = (data: { [key: string]: any }) => {
    console.log(data);
    const formData = new FormData();
    data.phone = Number(data.phone);
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
    createAd(formData);
    reset();
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmitAd)}>
      <div className={styles.formLeft}>
        <div>
          <PhotoAdd register={adPhotoRegister} errors={errors} />
        </div>
      </div>
      <div className={styles.formRight}>
        <div className={classes.inputName}>Название</div>
        <div>
          <input
            placeholder={Name}
            type="text"
            {...register("name")}
            className={errors?.name?.message ? classes.wrongUrl : classes.input}
          />
          <p className={classes.inputWrongNameLink}>{errors?.name?.message}</p>
        </div>
        <div className={classes.inputName}>Описание</div>
        <Description register={adDescRegister} errors={errors} limit={limit} width={width} />
        <div className={classes.inputName}>Привязать номер</div>
        <div>
          <input
            placeholder={Name}
            type="text"
            {...register("phone")}
            className={errors?.phone?.message ? classes.wrongUrl : classes.input}
          />
          <p className={classes.inputWrongNameLink}>{errors?.phone?.message}</p>
        </div>
        <MyButton className={styles.MyButton} props={PublishButton} />
      </div>
    </form>
  );
};
