export type TUserState = "view" | "config";

export interface IUserHook {
  userState: TUserState;
  changeState: (value?: TUserState) => void;
}
