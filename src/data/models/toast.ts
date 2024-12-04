export type TToastTypes = "success" | "error";

export interface IToast {
  type: TToastTypes;
  text: string;
  duration?: number;
}

export interface IToastRef {
  show: (toast: IToast) => void;
}
