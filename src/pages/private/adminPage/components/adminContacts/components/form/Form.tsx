import { useState } from "react";
import * as reactHookForm from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { InferType } from "yup";

import {
  addLinkName,
  instagramLink,
  phoneNumber,
  telegramLink,
  youtubeLink,
} from "../../../../constants";
import classes from "../../../../adminPage.module.scss";
import MyButton from "../../../UI/myButton/MyButton";
import { PublishButton } from "../../../../constants";
import {
  instagramIcon,
  linkIcon,
  plusIcon,
  telegramIcon,
  youtubeIcon,
} from "../../../../../../../assets/adminPage/adminPage";
import Description from "../../../UI/description/Description";
import { contactsSchema } from "../../../../../../../utils/validations/contacts";
import PhotoAdd from "../../../UI/PhotoAdd/PhotoAdd";
import { ContactsApi } from "../../../../../../../store/features/Contacts/ContactsApi";

import styles from "./form.module.scss";

export const Form = () => {
  const limit = 100;
  const width = 400;
  const [isSecPhoneVisible, setIsSecPhoneVisible] = useState(false);

  const [createContacts, {}] = ContactsApi.useCreateContactsMutation();

  type schemaType = InferType<typeof contactsSchema>;

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = reactHookForm.useForm<schemaType>({
    mode: "onChange",
    resolver: yupResolver(contactsSchema),
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
    console.log(data);
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
    createContacts(formData);
    reset();
  };

  let ContactsDescRegister = register("info");
  let ContactsPhotoRegister = register("photo");

  const handlePhoneClick = () => {
    setIsSecPhoneVisible(true);
  };

  return (
    <div className={styles.formContainer}>
      <h2>Контакты</h2>
      <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.contactInfo}>
          <div className={styles.formLeft}>
            <PhotoAdd register={ContactsPhotoRegister} errors={errors} />
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
          </div>
          <div className={styles.formRight}>
            <div className={classes.inputName}>О нас</div>
            <Description
              width={width}
              limit={limit}
              register={ContactsDescRegister}
              errors={errors}
            />
            <div>
              <div className={classes.NameBlock}>
                <div className={classes.name}>Номер</div>
                <img
                  className={classes.ratingIcon}
                  src={plusIcon}
                  alt=""
                  onClick={handlePhoneClick}
                />
              </div>
              <div>
                <input
                  placeholder={phoneNumber}
                  type="text"
                  {...register("phone1")}
                  className={errors?.phone1?.message ? classes.wrongUrl : classes.input}
                />
                <p className={classes.inputWrongNameLink}>{errors?.phone1?.message}</p>
              </div>
              {isSecPhoneVisible ? (
                <>
                  <div className={classes.NameBlock}>
                    <div className={classes.name}>Номер</div>
                    <img className={classes.ratingIcon} src={plusIcon} alt="" />
                  </div>
                  <div>
                    <input
                      placeholder={phoneNumber}
                      type="text"
                      {...register("phone2")}
                      className={errors?.phone2?.message ? classes.wrongUrl : classes.input}
                    />
                    <p className={classes.inputWrongNameLink}>{errors?.phone2?.message}</p>
                  </div>
                </>
              ) : (
                <></>
              )}

              <div className={styles.addLink}>
                <div className={classes.addLinkName}>
                  <div className={classes.inputNameLink}>Электронная почта</div>
                  <img className={classes.linkIcon} src={linkIcon} alt="" />
                </div>
                <input
                  placeholder={addLinkName}
                  className={errors?.email?.message ? classes.wrongUrl : classes.input}
                  type="text"
                  {...register("email")}
                />
                <p className={classes.inputWrongNameLink}>{errors?.email?.message}</p>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.descForm}>
          <h2 className={styles.bigName}>Социальные сети</h2>
          <div className={styles.twoForms}>
            <div className={styles.formLeft}>
              <div className={classes.addLink}>
                <div className={classes.addLinkName}>
                  <div className={classes.inputNameLink}>{telegramLink}</div>
                  <img className={classes.linkIcon} src={telegramIcon} alt="" />
                </div>
                <input
                  placeholder={addLinkName}
                  className={errors?.telegram?.message ? classes.wrongUrl : classes.input}
                  type="text"
                  {...register("telegram")}
                />
                <p className={classes.inputWrongNameLink}>{errors?.telegram?.message}</p>
              </div>
              <div></div>
              <div className={classes.addLink}>
                <div className={classes.addLinkName}>
                  <div className={classes.inputNameLink}>{instagramLink}</div>
                  <img className={classes.linkIcon} src={instagramIcon} alt="" />
                </div>
                <input
                  placeholder={addLinkName}
                  className={errors?.instagram?.message ? classes.wrongUrl : classes.input}
                  type="text"
                  {...register("instagram")}
                />
                <p className={classes.inputWrongNameLink}>{errors?.instagram?.message}</p>
              </div>
            </div>
            <div className={styles.formRight}>
              <div className={classes.addLink}>
                <div className={classes.addLinkName}>
                  <div className={classes.inputNameLink}>{youtubeLink}</div>
                  <img className={classes.linkIcon} src={youtubeIcon} alt="" />
                </div>
                <input
                  placeholder={addLinkName}
                  className={errors?.youtube?.message ? classes.wrongUrl : classes.input}
                  type="text"
                  {...register("youtube")}
                />
                <p className={classes.inputWrongNameLink}>{errors?.youtube?.message}</p>
              </div>
            </div>
          </div>
        </div>
        <MyButton className={styles.MyButton} props={PublishButton} />
      </form>
    </div>
  );
};
