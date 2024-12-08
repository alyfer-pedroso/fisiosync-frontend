import { ToastModel } from ".";

export type TAppState = "search" | "playlist" | "player";

export interface IMainContext {
  loading: boolean;
  handleLoading: (value?: boolean) => void;
  fontsLoaded: boolean;
  toast: (toast: ToastModel.IToast) => void;
  onConfig: boolean;
  handleConfig: (value?: boolean) => void;
  appState: TAppState;
  handleAppState: (value: TAppState) => void;
}
