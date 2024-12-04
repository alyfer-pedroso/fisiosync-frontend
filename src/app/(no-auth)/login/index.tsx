import { Button, Input, Page } from "@/components/template";
import { TopButton } from "@/components/auth";
import { View, Text } from "react-native";

export default function Login() {
  return (
    <Page>
      <View className="w-[90%] flex-row justify-between mx-auto">
        <TopButton text="Entrar" href="/(no-auth)/login" selected={true} />
        <TopButton text="Registrar-se" href="/(no-auth)/register" />
      </View>

    <View>
      <Text className="text-[1.5rem] text-center font-bold top-32">
        Bem-vindo ao FisioSync
      </Text>
    </View>

    <View className="flex-1 items-center justify-center gap-3">

    <Input placeholder="Email ou número de telefone" className="placeholder:text-gray-500 font-inter-regular"/>

<Input placeholder="Senha" className="placeholder:text-gray-500 font-inter-regular"/>

<Button text="Log in"/>

      <Text className="font-semibold text-center text-gray-500 text-lg m-1">
        OU
      </Text>

      <Button text="Continuar com Facebook" className="bg-[#385CC6]"/>

      <Button text="Continuar com Google" className="bg-[#507CFF]"/>

        <Text className="mt-5 text-gray-500">
          Esqueceu a senha?
        </Text>

        <View className="w-56 border-t border-gray-400"/>

    </View>

    </Page>
  );
}
