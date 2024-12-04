import { useContext } from "react";
import { MainContext } from "@/data/contexts";

export function useMainContext() {
  return useContext(MainContext);
}
