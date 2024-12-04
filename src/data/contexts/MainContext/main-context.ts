import { createContext } from "react";
import { MainContextModel } from "../../models";

const initialState: MainContextModel.IMainContext = {
  loading: false,
  handleLoading: () => {},
  fontsLoaded: false,
  toast: () => {},
  toastRef: null,
};

export const MainContext = createContext<MainContextModel.IMainContext>(initialState);
