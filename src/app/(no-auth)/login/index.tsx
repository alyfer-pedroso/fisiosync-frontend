import { Page } from "@/components/template";
import { TopButton } from "@/components/auth";
import { View } from "react-native";

export default function Login() {
  return (
    <Page>
      <View className="w-[90%] flex-row justify-between mx-auto">
        <TopButton text="Entrar" href="/(no-auth)/login" selected={true} />
        <TopButton text="Registrar-se" href="/(no-auth)/register" />
      </View>
    </Page>
  );
}
