import { combineReducers, configureStore } from "@reduxjs/toolkit";

import { ContactsApi } from "./features/Contacts/ContactsApi";
import { EmployersApi } from "./features/Employers/EmployersApi";
import { InstitutionGetBarApi } from "./features/institutionBarPage/InstitutionBarPage";
import { InstitutionGetAllApi } from "./features/Institutions/InstitutionsGetAll";
import { PhotosGetAllApi } from "./features/Photos/PhotosGetAll";
import { VideosGetAllApi } from "./features/Videos/VideosGetAll";

const rootReducer = combineReducers({
  [InstitutionGetAllApi.reducerPath]: InstitutionGetAllApi.reducer,
  [PhotosGetAllApi.reducerPath]: PhotosGetAllApi.reducer,
  [EmployersApi.reducerPath]: EmployersApi.reducer,
  [InstitutionGetBarApi.reducerPath]: InstitutionGetBarApi.reducer,
  [VideosGetAllApi.reducerPath]: VideosGetAllApi.reducer,
  [ContactsApi.reducerPath]: ContactsApi.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      InstitutionGetAllApi.middleware,
      PhotosGetAllApi.middleware,
      EmployersApi.middleware,
      InstitutionGetBarApi.middleware,
      VideosGetAllApi.middleware,
      ContactsApi.middleware,
    ),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
