import React from "react";
import { Route, Routes } from "react-router-dom";

import {
  AdminAdvertisingPage,
  AdminChangePage,
  AdminContactsPage,
  AdminInstitutionPage,
  AdminPhotoPage,
  AdminVideoPage,
} from "../pages/private/adminPage";
import AdminPage from "../pages/private/adminPage/AdminPage";
import AdminEmployees from "../pages/private/adminPage/components/adminEmloyees/AdminEmployees";
import CreateForm from "../pages/private/adminPage/components/adminEmloyees/components/createForm/CreateForm";
import UpdateEmployeeForm from "../pages/private/adminPage/components/adminEmloyees/components/editForm/EditForm";
import Profile from "../pages/private/adminPage/components/adminEmloyees/components/Profile/Profile";
import EditAdvertisement from "../pages/private/adminPage/components/editPages/editAdvertisement/EditAdvertisement";
import EditCurrent from "../pages/private/adminPage/components/editPages/editCurrentPhotos/EditCurrentPhotos";
import EditEvents from "../pages/private/adminPage/components/editPages/editEvents/EditEvents";
import EditInstitution from "../pages/private/adminPage/components/editPages/editInstitution/EditInstitution";
import UpdateMainForm from "../pages/private/adminPage/components/editPages/editMainPage/editMainForm";
import EditMainPage from "../pages/private/adminPage/components/editPages/editMainPage/EditMainPage";
import EditNews from "../pages/private/adminPage/components/editPages/editNews/EditNews";
import EditTopInstitution from "../pages/private/adminPage/components/editPages/editTopInstitution/EditTopInstitution";
import EditVideo from "../pages/private/adminPage/components/editPages/editVideo/EditVideo";

import {
  CalendarPage,
  ContactsPage,
  CopyrightPage,
  EmployeesPage,
  ErrorPage,
  EventsPage,
  InstitutionBarPage,
  InstitutionPage,
  MainPage,
  NewsPage,
  PhotoPage,
  PhotosPage,
  VideoFullScreenPage,
  VideoPage,
} from "../pages/public";

import {
  ADMIN_ADVERTISING_PAGE,
  ADMIN_CHANGE_PAGE,
  ADMIN_CONTACTS_PAGE,
  ADMIN_EMPLOYEES,
  ADMIN_CREATE_EMPLOYEE,
  ADMIN_EMPLOYEES_PROFILE,
  ADMIN_PAGE,
  ADMIN_EDIT_ADVERTISING,
  ADMIN_EDIT_EVENTS,
  ADMIN_EDIT_INSTITUTION,
  ADMIN_EDIT_MAIN_PAGE,
  ADMIN_EDIT_NEWS,
  ADMIN_EDIT_PHOTO,
  ADMIN_EDIT_TOP_INSTITUTION,
  ADMIN_EDIT_VIDEO,
  ADMIN_INSTITUTION_PAGE,
  ADMIN_PHOTO_PAGE,
  ADMIN_VIDEO_PAGE,
  ADMIN_EMPLOYEES_UPDATE,
  CALENDAR_PAGE,
  CONTACTS_PAGE,
  COPYRIGHT_PAGE,
  EMPLOYEES_PAGE,
  ERROR_PAGE,
  EVENTS_PAGE,
  INSTITUTION_BAR_PAGE,
  INSTITUTION_PAGE,
  MAIN_PAGE,
  NEWS_PAGE,
  PHOTOS_PAGE,
  PHOTO_PAGE,
  VIDEOFULL_PAGE,
  VIDEO_PAGE,
  ADMIN_PHOTOS_UPDATE,
} from "../utils/path/path";

const MainRoutes = () => {
  const PUBLIC_ROUTES = [
    {
      id: 1,
      link: MAIN_PAGE,
      element: <MainPage />,
    },
    {
      id: 2,
      link: ERROR_PAGE,
      element: <ErrorPage />,
    },
    {
      id: 3,
      link: PHOTOS_PAGE,
      element: <PhotosPage />,
    },
    {
      id: 4,
      link: CALENDAR_PAGE,
      element: <CalendarPage />,
    },
    {
      id: 5,
      link: PHOTO_PAGE,
      element: <PhotoPage />,
    },
    {
      id: 6,
      link: VIDEO_PAGE,
      element: <VideoPage />,
    },
    {
      id: 7,
      link: VIDEOFULL_PAGE,
      element: <VideoFullScreenPage />,
    },
    {
      id: 8,
      link: INSTITUTION_PAGE,
      element: <InstitutionBarPage />,
    },
    {
      id: 9,
      link: INSTITUTION_BAR_PAGE,
      element: <InstitutionPage />,
    },
    {
      id: 10,
      link: EVENTS_PAGE,
      element: <EventsPage />,
    },
    {
      id: 11,
      link: NEWS_PAGE,
      element: <NewsPage />,
    },
    {
      id: 12,
      link: CONTACTS_PAGE,
      element: <ContactsPage />,
    },
    {
      id: 13,
      link: EMPLOYEES_PAGE,
      element: <EmployeesPage />,
    },
    {
      id: 14,
      link: COPYRIGHT_PAGE,
      element: <CopyrightPage />,
    },
  ];

  const PRIVATE_ROUTES = [
    {
      id: 1,
      link: ADMIN_PHOTO_PAGE,
      element: <AdminPhotoPage />,
    },
    {
      id: 2,
      link: ADMIN_VIDEO_PAGE,
      element: <AdminVideoPage />,
    },
    {
      id: 3,
      link: ADMIN_ADVERTISING_PAGE,
      element: <AdminAdvertisingPage />,
    },
    {
      id: 4,
      link: ADMIN_INSTITUTION_PAGE,
      element: <AdminInstitutionPage />,
    },
    {
      id: 5,
      link: ADMIN_CONTACTS_PAGE,
      element: <AdminContactsPage />,
    },
    {
      id: 6,
      link: ADMIN_CHANGE_PAGE,
      element: <AdminChangePage />,
    },
    {
      id: 7,
      link: ADMIN_EDIT_MAIN_PAGE,
      element: <EditMainPage />,
    },
    {
      id: 8,
      link: ADMIN_EDIT_PHOTO,
      element: <EditCurrent />,
    },
    {
      id: 9,
      link: ADMIN_EDIT_VIDEO,
      element: <EditVideo />,
    },
    {
      id: 10,
      link: ADMIN_EDIT_ADVERTISING,
      element: <EditAdvertisement />,
    },
    {
      id: 11,
      link: ADMIN_EDIT_EVENTS,
      element: <EditEvents />,
    },
    {
      id: 12,
      link: ADMIN_EDIT_INSTITUTION,
      element: <EditInstitution />,
    },
    {
      id: 13,
      link: ADMIN_EDIT_TOP_INSTITUTION,
      element: <EditTopInstitution />,
    },
    {
      id: 14,
      link: ADMIN_EDIT_NEWS,
      element: <EditNews />,
    },
    {
      id: 15,
      link: ADMIN_EMPLOYEES,
      element: <AdminEmployees />,
    },
    {
      id: 16,
      link: ADMIN_CREATE_EMPLOYEE,
      element: <CreateForm />,
    },
    {
      id: 17,
      link: ADMIN_EMPLOYEES_PROFILE,
      element: <Profile />,
    },
    {
      id: 18,
      link: ADMIN_PAGE,
      element: <AdminPage />,
    },
    {
      id: 19,
      link: ADMIN_EMPLOYEES_UPDATE,
      element: <UpdateEmployeeForm />,
    },
    {
      id: 20,
      link: ADMIN_PHOTOS_UPDATE,
      element: <UpdateMainForm />,
    },
  ];

  return (
    <React.Suspense fallback={<span>Loading...</span>}>
      <Routes>
        {PRIVATE_ROUTES.map(({ id, link, element }) => (
          <Route path={link} element={element} key={id} />
        ))}

        {PUBLIC_ROUTES.map(({ id, link, element }) => (
          <Route path={link} element={element} key={id} />
        ))}
      </Routes>
    </React.Suspense>
  );
};

export { MainRoutes };
