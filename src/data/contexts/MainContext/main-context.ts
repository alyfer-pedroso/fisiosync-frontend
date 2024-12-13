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
  playerData: { current: { link_mp3: "", current_time: 0, max_time: 0, paused: true, title: "" } },
  playing: false,
  setPlaying: () => {},
  withBpm: false,
  setWithBpm: () => {},
};

export const MainContext = createContext<MainContextModel.IMainContext>(initialState);
