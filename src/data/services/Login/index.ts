import { GetError } from "@/data/constants";
import { useApi, useMainContext } from "@/data/hooks";
import { LoginModel } from "@/data/models";

export function Login() {
  const { api } = useApi();
  const { toast } = useMainContext();

  const SignIn = async ({ email, password }: LoginModel.IForm) => {
    try {
      const { data } = await api.post("/login-user", { email, password });
      if (data.error) {
        toast({ type: "error", text: data.data });
        return;
      }

      toast({ type: "success", text: data.message });
      return data.data;
    } catch (error) {
      toast({ type: "error", text: GetError(error) });
    }
  };

  return { SignIn };
}
