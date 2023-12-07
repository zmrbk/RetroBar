import * as reactHookForm from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { InferType } from "yup";
import { useState } from "react";

import classes from "../../../../adminPage.module.scss";
import { linkIcon, plusIcon } from "../../../../../../../assets/adminPage/adminPage";
import MyButton from "../../../UI/myButton/MyButton";

import {
  averageCheck,
  Cuisine,
  Name,
  Service,
  Location,
  addLinkName,
  PublishButton,
  phoneNumber,
} from "../../../../constants";
import { instSchema } from "../../../../../../../utils/validations/institutions";
import MyRating from "../MyRating/MyRating";
import { InstitutionGetAllApi } from "../../../../../../../store/features/Institutions/InstitutionsGetAll";
import PhotoAdd from "../../../UI/PhotoAdd/PhotoAdd";
import LogoAdd from "../../../UI/LogoAdd/LogoAdd";
import Description from "../../../UI/description/Description";
import LineChart from "../Chart/Chart";

import styles from "./form.module.scss";

export const Form = () => {
  const limit = 100;
  const width = 960;
  const [isSecPhoneVisible, setIsSecPhoneVisible] = useState(false);
  const [isSecLocationVisible, setIsSecLocationVisible] = useState(false);
  const [ratingValue, setRatingValue] = useState(0);

  const [createInstitution, {}] = InstitutionGetAllApi.useCreateInstitutionMutation();

  type schemaType = InferType<typeof instSchema>;

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = reactHookForm.useForm<schemaType>({
    mode: "onChange",
    resolver: yupResolver(instSchema),
  });

  const onSubmit = (data: { [key: string]: any }) => {
    const formData = new FormData();
    if (data.phone2) {
      data["phone"] = JSON.stringify(Array(data.phone1, data.phone2));
      delete data.phone1;
      delete data.phone2;
    } else {
      data["phone"] = JSON.stringify(Array(data.phone1));
      delete data.phone1;
    }
    if (data.location2) {
      data["phone"] = JSON.stringify(Array(data.location1, data.location2));
      delete data.location1;
      delete data.location2;
    } else {
      data["phone"] = JSON.stringify(Array(data.location1));
      delete data.location1;
    }
    // delete data.rating;
    // data["rating"] = ratingValue;
    data.rating = ratingValue;
    console.log("data", data);

    Object.keys(data).forEach((key) => {
      const value = data[key];
      if (value[0] && typeof value !== "string" && typeof value[0] !== "string") {
        Array.from(value as File[]).forEach((val) => {
          formData.append(key, val);
        });
      } else {
        formData.append(key, value);
      }
    });
    createInstitution(formData);
    reset();
  };
  let InstPhotoRegister = register("pubphotos");
  let InstLogoRegister = register("publogo");
  let InstDescRegister = register("info");
  let InstRatingRegister = register("rating");

  const handlePhoneClick = () => {
    setIsSecPhoneVisible(true);
  };
  const handleLocationClick = () => {
    setIsSecLocationVisible(true);
  };

  return (
    <div className={styles.formContainer}>
      <h2>Заведение</h2>
      <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.formAddPhoto}>
          <div className={styles.formLeft}>
            <PhotoAdd register={InstPhotoRegister} errors={errors} />
          </div>
          <div className={styles.formRight}>
            <LogoAdd
              className={styles.addPhotoCircle}
              register={InstLogoRegister}
              errors={errors}
            />
            <div>
              <div className={styles.addLinkOne}>
                <div className={classes.addLinkName}>
                  <div className={classes.inputNameLink}>{addLinkName}</div>
                  <img className={classes.linkIcon} src={linkIcon} alt="" />
                </div>
                <input
                  placeholder={addLinkName}
                  className={errors?.website?.message ? classes.wrongUrl : classes.input}
                  type="text"
                  {...register("website")}
                />
                <p className={classes.inputWrongNameLink}>{errors?.website?.message}</p>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.nameDescription}>
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
          <div className={classes.inputName}>О заведении</div>
          <Description register={InstDescRegister} errors={errors} limit={limit} width={width} />
        </div>
        <div className={styles.ratingScale}>
          <MyRating register={InstRatingRegister} errors={errors} setRatingValue={setRatingValue} />
        </div>

        <div className={styles.scale}>
          <LineChart />
        </div>

        <div className={styles.descForm}>
          <h2 className={styles.bigName}>Описание</h2>
          <div className={styles.twoForms}>
            <div className={styles.formLeft}>
              <div className={styles.name}>Средний Чек</div>
              <div>
                <input
                  placeholder={averageCheck}
                  type="text"
                  {...register("averagecheck")}
                  className={errors?.averagecheck?.message ? classes.wrongUrl : classes.input}
                />
                <p className={classes.inputWrongNameLink}>{errors?.averagecheck?.message}</p>
              </div>
              <div className={styles.name}>Время работы</div>
              <div>
                <input
                  placeholder={"Введите время работы"}
                  type="text"
                  {...register("workinghours")}
                  className={errors?.workinghours?.message ? classes.wrongUrl : classes.input}
                />
                <p className={classes.inputWrongNameLink}>{errors?.workinghours?.message}</p>
              </div>
            </div>
            <div className={styles.formRight}>
              <div className={styles.name}>Вид кухни</div>
              <div>
                <input
                  placeholder={Cuisine}
                  type="text"
                  {...register("kitchen")}
                  className={errors?.kitchen?.message ? classes.wrongUrl : classes.input}
                />
                <p className={classes.inputWrongNameLink}>{errors?.kitchen?.message}</p>
              </div>
              <div className={styles.name}>Услуги</div>
              <div>
                <input
                  placeholder={Service}
                  type="text"
                  {...register("service")}
                  className={errors?.service?.message ? classes.wrongUrl : classes.input}
                />
                <p className={classes.inputWrongNameLink}>{errors?.service?.message}</p>
              </div>
            </div>
          </div>
        </div>
        <br></br>
        <div className={styles.descForm}>
          <h2 className={styles.bigName}>Описание</h2>
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
          <div className={styles.NameBlock}>
            <div className={styles.name}>Геопозиция</div>
            <img
              className={styles.ratingIcon}
              src={plusIcon}
              alt=""
              onClick={handleLocationClick}
            />
          </div>
          <div>
            <input
              placeholder={Location}
              type="text"
              {...register("location1")}
              className={errors?.location1?.message ? classes.wrongUrl : classes.input}
            />
            <p className={classes.inputWrongNameLink}>{errors?.location1?.message}</p>
          </div>
          {isSecLocationVisible ? (
            <>
              <div className={styles.NameBlock}>
                <div className={styles.name}>Геопозиция</div>
                <img className={styles.ratingIcon} src={plusIcon} alt="" />
              </div>
              <div>
                <input
                  placeholder={Location}
                  type="text"
                  {...register("location2")}
                  className={errors?.location2?.message ? classes.wrongUrl : classes.input}
                />
                <p className={classes.inputWrongNameLink}>{errors?.location2?.message}</p>
              </div>
            </>
          ) : (
            <div />
          )}
          <div className={classes.NameBlock}>
            <div className={classes.name}>Номер</div>
            <img className={classes.ratingIcon} src={plusIcon} alt="" onClick={handlePhoneClick} />
          </div>
          <div>
            <input
              {...register("phone1")}
              placeholder={phoneNumber}
              type="text"
              className={errors?.phone1?.message ? classes.wrongUrl : classes.input}
            />
            <p className={classes.inputWrongNameLink}>{errors?.phone1?.message}</p>
          </div>

          {isSecPhoneVisible ? (
            <div>
              <div className={classes.NameBlock}>
                <div className={classes.name}>Номер</div>
                <img className={classes.ratingIcon} src={plusIcon} alt="" />
              </div>
              <div>
                <input
                  {...register("phone2")}
                  placeholder={phoneNumber}
                  type="text"
                  className={errors?.phone2?.message ? classes.wrongUrl : classes.input}
                />
                <p className={classes.inputWrongNameLink}>{errors?.phone2?.message}</p>
              </div>
            </div>
          ) : (
            <div />
          )}
        </div>
        <MyButton type="submit" props={PublishButton} />
      </form>
    </div>
  );
};
