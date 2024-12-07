import { View, Text } from "react-native";
import Checkbox from "expo-checkbox";
import { Input, Page, Button } from "@/components/template";
import { TopButton } from "@/components/auth";

export default function Register() {
  return (
    <Page header={false}>
      <View className="w-[90%] flex-row justify-between mx-auto">
        <TopButton text="Entrar" href="/(no-auth)/login" />
        <TopButton text="Registrar-se" href="/(no-auth)/register" selected={true} />
      </View>

      <View className="w-full gap-10">
        <View className="pt-[15%] items-center">
          <Text className="text-[60px] font-black text-center font-inter-Black">Bem-Vindo!</Text>
          <Text className="text-[20px] font-bold text-center w-[80%] font-inter-regular">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          </Text>
        </View>

        <View className="gap-2 items-center">
          <Input placeholder="Nome" className="placeholder:text-gray-500 font-inter-regular" />
          <Input placeholder="Email*" className="placeholder:text-gray-500 font-inter-regular" />
          <Input placeholder="Senha*" className="placeholder:text-gray-500 font-inter-regular" />
          <Input placeholder="Confirmar Senha*" className="placeholder:text-gray-500 font-inter-regular" />
          <Button text="Criar Conta" className="font-inter-regular mt-4" />
        </View>
      </View>

      <View className="w-full flex-1 justify-between pt-[2.5rem]">
        <View className="w-full items-center gap-8">
          <View className="flex-row items-center">
            <Checkbox />
            <Text className="pl-3 w-full max-w-[225px] font-inter-Bold text-[13px] text-gray-400">
              Li e estou de acordo com o <Text className="text-[#1F4BFC]">Termos de Uso e Política de Privacidade</Text>
            </Text>
          </View>
          <View className="flex-row items-center">
            <Checkbox />
            <Text className="pl-3 w-full max-w-[225px] font-inter-Bold text-[13px] text-gray-400">
              Aceito receber Emails e SMS de novidades do <Text className="text-[#1F4BFC]">FisioSync</Text>
            </Text>
          </View>
        </View>
        <View className="flex-row justify-around py-4">
          <Text className="text-[#1F4BFC] font-inter-regular" style={{ opacity: 0.3 }}>
            Dúvidas? Fale Conosco
          </Text>
          <Text className="text-[#1F4BFC] font-inter-regular" style={{ opacity: 0.3 }}>
            Todos os direitos reservados
          </Text>
        </View>
      </View>
    </Page>
  );
}
