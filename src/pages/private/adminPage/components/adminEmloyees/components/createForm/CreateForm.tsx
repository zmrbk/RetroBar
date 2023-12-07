import { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as reactHookForm from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { InferType } from "yup";

import classes from "../../../../adminPage.module.scss";
import ProfileMenu from "../../../UI/ProfileMenu/ProfileMenu";
import AdminMenu from "../../../UI/adminMenu/AdminMenu";
import { linkIcon, plusIcon } from "../../../../../../../assets/adminPage/adminPage";
import {
  addLinkName,
  createEmployeeName,
  EmployeeName,
  EmployeeSpeciality,
  phoneNumber,
} from "../../../../constants";
import MyButton from "../../../UI/myButton/MyButton";
import Description from "../../../UI/description/Description";
import { employersSchema } from "../../../../../../../utils/validations/employers";
import PhotoAdd from "../../../UI/PhotoAdd/PhotoAdd";
import { EmployersApi } from "../../../../../../../store/features/Employers/EmployersApi";

import styles from "./CreateForm.module.scss";

const CreateForm = () => {
  const width = 400;
  const limit = 100;
  const [isSecPhoneVisible, setIsSecPhoneVisible] = useState(false);

  const [createEmployee, {}] = EmployersApi.useCreateEmployerMutation();

  // ------------ for useform ------------------------------
  type schemaType = InferType<typeof employersSchema>;
  const {
    register,
    handleSubmit,
    formState: { errors },
    //   reset
  } = reactHookForm.useForm<schemaType>({
    mode: "onChange",
    resolver: yupResolver(employersSchema),
  });

  const navigateToEmployees = useNavigate();

  const onSubmit = (data: { [key: string]: any }) => {
    const formData = new FormData();
    if (data.phone2) {
      data["phone"] = JSON.stringify([data.phone1, data.phone2]);
      delete data.phone1;
      delete data.phone2;
    } else {
      data["phone"] = JSON.stringify(Array(data.phone1));
      delete data.phone1;
    }
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
    createEmployee(formData);
    navigateToEmployees("/admin-employees");
    // reset();
  };

  let EmployeeDescRegister = register("info");
  let EmployeePhotoRegister = register("avatar");

  const handlePhoneClick = () => {
    setIsSecPhoneVisible(true);
  };

  return (
    <div className={classes.containerParent}>
      <AdminMenu />
      <div className={styles.container}>
        <h2>Изменить</h2>
        <ProfileMenu />
        <div className={styles.formContainer}>
          <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
            <div className={styles.formAddPhoto}>
              <div className={styles.formLeft}>
                <PhotoAdd register={EmployeePhotoRegister} errors={errors} />

                <div className={classes.addLink}>
                  <div>
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
              <div className={styles.formRight}>
                <div className={classes.inputName}>Имя</div>
                <div>
                  <input
                    placeholder={EmployeeName}
                    type="text"
                    {...register("name")}
                    className={errors?.name?.message ? classes.wrongUrl : classes.input}
                  />
                  <p className={classes.inputWrongNameLink}>{errors?.name?.message}</p>
                </div>
                <div className={classes.inputName}>Специальность</div>
                <div>
                  <input
                    placeholder={EmployeeSpeciality}
                    type="text"
                    {...register("speciality")}
                    className={errors?.speciality?.message ? classes.wrongUrl : classes.input}
                  />
                  <p className={classes.inputWrongNameLink}>{errors?.speciality?.message}</p>
                </div>
                <div className={classes.inputName}>Информация</div>
                <Description
                  register={EmployeeDescRegister}
                  errors={errors}
                  limit={limit}
                  width={width}
                />

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
                <MyButton type="submit" className={styles.MyButton} props={createEmployeeName} />
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateForm;
