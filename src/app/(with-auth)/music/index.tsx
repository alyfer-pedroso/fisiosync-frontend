import { useMainContext } from "@/data/hooks";
import { MainContextModel } from "@/data/models";

import { Search, Playlist, Player } from "./components";

export default function Music() {
  const { appState } = useMainContext();

  const returnComponent: Record<MainContextModel.TAppState, JSX.Element> = {
    search: <Search />,
    playlist: <Playlist />,
    player: <Player />,
  };

  return returnComponent[appState];
}
