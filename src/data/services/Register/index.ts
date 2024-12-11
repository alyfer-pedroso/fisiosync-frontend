import { GetError } from "@/data/constants";
import { useApi, useMainContext } from "@/data/hooks";
import { RegisterModel } from "@/data/models";

export function Register() {
  const { api } = useApi();
  const { toast } = useMainContext();

  const SignUp = async ({ ...props }: RegisterModel.IForm) => {
    delete props.confirmPassword;
    try {
      const { data } = await api.post("/create-user", { ...props });
      if (data.error) {
        toast({ type: "error", text: data.data });
        return;
      }

      toast({ type: "success", text: "Usuário cadastrado com sucesso!" });
    } catch (error) {
      toast({ type: "error", text: GetError(error) });
    }
  };

  return { SignUp };
}
