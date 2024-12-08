import { createContext } from "react";
import { MainContextModel } from "../../models";

const initialState: MainContextModel.IMainContext = {
  loading: false,
  handleLoading: () => {},
  fontsLoaded: false,
  toast: () => {},
  onConfig: false,
  handleConfig: () => {},
};

export const MainContext = createContext<MainContextModel.IMainContext>(initialState);
