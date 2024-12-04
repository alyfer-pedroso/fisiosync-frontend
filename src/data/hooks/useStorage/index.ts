import AsyncStorage from "@react-native-async-storage/async-storage";
import { useMainContext } from "../useMainContext";

export function useStorage() {
  const { getItem, setItem, removeItem } = AsyncStorage;
  const { toast } = useMainContext();

  const getData = async (name: string) => {
    try {
      const data = await getItem(name);
      return data;
    } catch (error) {
      toast({ type: "error", text: `${error}` });
    }
  };

  const setData = async (name: string, value: string) => {
    try {
      await setItem(name, value);
    } catch (error) {
      toast({ type: "error", text: `${error}` });
    }
  };

  const clearData = async (name: string) => {
    try {
      await removeItem(name);
    } catch (error) {
      toast({ type: "error", text: `${error}` });
    }
  };

  return { getData, setData, clearData };
}
