import { ToastModel } from ".";

export interface IMainContext {
  loading: boolean;
  handleLoading: (value?: boolean) => void;
  fontsLoaded: boolean;
  toast: (toast: ToastModel.IToast) => void;
  onConfig: boolean;
  handleConfig: (value?: boolean) => void;
}
