import { useEffect, useState } from "react";
import axios from "axios";

import { useStorage } from "../useStorage";

export function useApi() {
  const { getData } = useStorage();
  const [token, setToken] = useState("");

  useEffect(() => {
    (async () => {
      const token = await getData("token");
      setToken(token ?? "");
    })();
  }, []);

  const api = axios.create({
    baseURL: process.env.EXPO_PUBLIC_API_URL,
    headers: token ? { Authorization: `Bearer ${token}` } : {},
  });

  return { api, URL: process.env.EXPO_PUBLIC_API_URL };
}
