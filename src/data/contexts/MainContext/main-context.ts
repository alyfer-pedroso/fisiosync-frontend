import { createContext } from "react";
import { MainContextModel } from "../../models";

const initialState: MainContextModel.IMainContext = {
  loading: false,
  handleLoading: () => {},
  fontsLoaded: false,
  toast: () => {},
  onConfig: false,
  handleConfig: () => {},
  appState: "playlist", // TODO: colocar como 'search' depois
  handleAppState: () => {},
};

export const MainContext = createContext<MainContextModel.IMainContext>(initialState);
