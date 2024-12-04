import { View } from "react-native";

import { Page } from "@/components/template";
import { TopButton } from "@/components/auth";

export default function Register() {
  return (
    <Page>
      <View className="w-[90%] flex-row justify-between mx-auto">
        <TopButton text="Entrar" href="/(no-auth)/login" />
        <TopButton text="Registrar-se" href="/(no-auth)/register" selected={true} />
      </View>
    </Page>
  );
}
