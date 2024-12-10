import { AxiosError } from "axios";

type TBackendResponse = { data: string };

export function GetError(error: unknown) {
  if (error instanceof AxiosError) {
    return error.response?.data.data ?? error.message ?? error;
  }
  return error;
}
