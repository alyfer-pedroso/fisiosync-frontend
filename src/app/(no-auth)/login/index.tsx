import { View, Text } from "react-native";
import { Link } from "expo-router";

import { Button, Input, Page } from "@/components/template";
import { TopButton } from "@/components/auth";

import { useLogin } from "./hooks";

export default function Login() {
  const { form, setValue, submitForm } = useLogin();

  return (
    <Page header={false}>
      <View className="w-[90%] flex-row justify-between mx-auto">
        <TopButton text="Entrar" href="/(no-auth)/login" selected={true} />
        <TopButton text="Registrar-se" href="/(no-auth)/register" />
      </View>

      <View className="flex-1 items-center justify-center gap-3">
        <View>
          <Text className="text-[1.5rem] text-center font-bold mb-6">Bem-vindo ao FisioSync</Text>
        </View>

        <Input
          placeholder="Email"
          className="placeholder:text-gray-500 font-inter-regular"
          onChange={(e) => setValue(e, "email")}
          value={form.email}
        />

        <Input
          placeholder="Senha"
          className="placeholder:text-gray-500 font-inter-regular"
          onChange={(e) => setValue(e, "password")}
          value={form.password}
          secureTextEntry
        />

        <Button text="Log in" onPress={submitForm} />

        <Text className="font-semibold text-center text-gray-500 text-lg m-1">OU</Text>

        <Button text="Continuar com Facebook" className="bg-[#385CC6]" />

        <Button text="Continuar com Google" className="bg-[#507CFF]" />

        <Link href={"/(no-auth)/forget"} className="mt-7 text-gray-500">
          Esqueceu a senha?
        </Link>

        <View className="w-56 border-t border-gray-400" />
      </View>
    </Page>
  );
}
