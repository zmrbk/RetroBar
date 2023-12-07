import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import * as reactHookForm from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { InferType } from "yup";

import classes from "../../../../adminPage.module.scss";
import ProfileMenu from "../../../UI/ProfileMenu/ProfileMenu";
import AdminMenu from "../../../UI/adminMenu/AdminMenu";
import { linkIcon, plusIcon } from "../../../../../../../assets/adminPage/adminPage";
import { addLinkName, EmployeeName, EmployeeSpeciality, phoneNumber } from "../../../../constants";
import MyButton from "../../../UI/myButton/MyButton";
import Description from "../../../UI/description/Description";
import PhotoAdd from "../../../UI/PhotoAdd/PhotoAdd";
import { EmployersApi } from "../../../../../../../store/features/Employers/EmployersApi";
import { changeEmployeeSchema } from "../../../../../../../utils/validations/changeEmployee";
import styles from "../createForm/CreateForm.module.scss";

const UpdateEmployeeForm = () => {
  const width = 400;
  const limit = 100;
  const [isSecPhoneVisible, setIsSecPhoneVisible] = useState(false);
  const { id } = useParams();

  const { data: employee } = EmployersApi.useGetEmployerQuery(id);

  const [employeeName, setEmployeeName] = useState<any>(employee?.name);
  const [employeeInfo, setEmployeeInfo] = useState<any>(employee?.info);
  const [employeeSpeciality, setEmployeeSpeciality] = useState<any>(employee?.speciality);
  const [employeePhone1, setEmployeePhone1] = useState<any>(employee?.phone[0]);
  const [employeePhone2, setEmployeePhone2] = useState<any>(employee?.phone[1] || undefined);
  const [employeeWebsite, setEmployeeWebsite] = useState<any>(employee?.website);
  const [employeeAvatar, setEmployeeAvatar] = useState<any>(employee?.avatar);
  const [newPhoto, setNewPhoto] = useState<any>("");

  const [updateEmployee, {}] = EmployersApi.useUpdateEmployerMutation();

  // ------------ for useform ------------------------------
  type schemaType = InferType<typeof changeEmployeeSchema>;
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = reactHookForm.useForm<schemaType>({
    mode: "onChange",
    resolver: yupResolver(changeEmployeeSchema),
  });

  const navigateToEmployees = useNavigate();

  const onSubmit = (data: { [key: string]: any }) => {
    const formData = new FormData();
    // console.log("new photo", newPhoto);
    data.avatar = newPhoto;
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
          console.log("as file photo", value);
          formData.append(key, val);
        });
      } else {
        formData.append(key, value);
      }
    });

    updateEmployee({ formData, id });
    navigateToEmployees("/admin-employees");
    reset();
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
                <PhotoAdd
                  register={EmployeePhotoRegister}
                  errors={errors}
                  photos={employeeAvatar}
                  setChange={setEmployeeAvatar}
                  setNewPhoto={setNewPhoto}
                />

                <div className={classes.addLink}>
                  <div>
                    <div className={classes.addLinkName}>
                      <div className={classes.inputNameLink}>{addLinkName}</div>
                      <img className={classes.linkIcon} src={linkIcon} alt="" />
                    </div>
                    <input
                      value={employeeWebsite}
                      placeholder={addLinkName}
                      className={errors?.website?.message ? classes.wrongUrl : classes.input}
                      type="text"
                      {...register("website")}
                      onChange={(e) => {
                        setEmployeeWebsite(e.target.value);
                      }}
                    />
                    <p className={classes.inputWrongNameLink}>{errors?.website?.message}</p>
                  </div>
                </div>
              </div>
              <div className={styles.formRight}>
                <div className={classes.inputName}>Имя</div>
                <div>
                  <input
                    value={employeeName}
                    placeholder={EmployeeName}
                    type="text"
                    {...register("name")}
                    onChange={(e) => {
                      setEmployeeName(e.target.value);
                    }}
                    className={errors?.name?.message ? classes.wrongUrl : classes.input}
                  />
                  <p className={classes.inputWrongNameLink}>{errors?.name?.message}</p>
                </div>
                <div className={classes.inputName}>Специальность</div>
                <div>
                  <input
                    value={employeeSpeciality}
                    placeholder={EmployeeSpeciality}
                    type="text"
                    {...register("speciality")}
                    onChange={(e) => {
                      setEmployeeSpeciality(e.target.value);
                    }}
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
                  description={employeeInfo}
                  setChange={setEmployeeInfo}
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
                    value={employeePhone1}
                    placeholder={phoneNumber}
                    type="text"
                    {...register("phone1")}
                    className={errors?.phone1?.message ? classes.wrongUrl : classes.input}
                    onChange={(e) => {
                      setEmployeePhone1(e.target.value);
                    }}
                  />
                  <p className={classes.inputWrongNameLink}>{errors?.phone1?.message}</p>
                </div>
                {employee?.phone[1] ? (
                  <>
                    <div className={classes.NameBlock}>
                      <div className={classes.name}>Номер</div>
                      <img className={classes.ratingIcon} src={plusIcon} alt="" />
                    </div>
                    <div>
                      <input
                        value={employeePhone2 && employeePhone2}
                        placeholder={phoneNumber}
                        type="text"
                        {...register("phone2")}
                        onChange={(e) => {
                          setEmployeePhone2(e.target.value);
                        }}
                        className={errors?.phone2?.message ? classes.wrongUrl : classes.input}
                      />
                      <p className={classes.inputWrongNameLink}>{errors?.phone2?.message}</p>
                    </div>
                  </>
                ) : (
                  <></>
                )}
                <MyButton type="submit" className={styles.MyButton} props={"Изменить сотрудника"} />
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateEmployeeForm;
