import { createContext } from "react";
import { MainContextModel } from "../../models";

const initialState: MainContextModel.IMainContext = {
  loading: false,
  handleLoading: () => {},
  fontsLoaded: false,
  toast: () => {},
  onConfig: false,
  handleConfig: () => {},
  appState: "search",
  handleAppState: () => {},
  currentMusic: { title: "", link_youtube: "", thumbnail: "", bpm: 0 },
  selectMusic: () => {},
};

export const MainContext = createContext<MainContextModel.IMainContext>(initialState);
