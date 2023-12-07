export interface IAdmin {
  title: string;
  image: any;
  route: string;
}

export interface IDescription {
  limit: number;
  width: number;
}

export interface IInputName {
  name: string;
  placeholder: string;
  onChange: (e: any) => void;
  blurHandler: (e: any) => void;
  value: string;
}

export interface ILink {
  linkName: string;
  linkLogo: string;
}

export interface IEdit {
  title: string;
  route: string;
  width: string;
}

export interface ICreateProfile {
  title: string;
  route: string;
  width: string;
}
