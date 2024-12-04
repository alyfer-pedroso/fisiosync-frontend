import { View, Text } from "react-native";

import { Input, Page, Button } from "@/components/template";
import { TopButton } from "@/components/auth";

export default function Register() {
  return (
    <Page>
      <View className="w-[90%] flex-row justify-between mx-auto">
        <TopButton text="Entrar" href="/(no-auth)/login" />
        <TopButton text="Registrar-se" href="/(no-auth)/register" selected={true} />
      </View>

      <View>
        <Text className="text-[66px] font-bold text-center pt-[7rem] font-inter-regular">
          Bem-Vindo!
        </Text>
        <Text className="text-[20px] font-bold text-center pr-[65px] pl-[65px] font-inter-regular">
          Lorem Ipsum is simply dummy text of the 
          printing and typesetting industry. 
        </Text>
      </View>

      <View className="items-center pt-[50px] gap-3">
      <Input placeholder="Nome" className="placeholder:text-gray-500 font-inter-regular"/>
      <Input placeholder="Email*" className="placeholder:text-gray-500 font-inter-regular"/>
      <Input placeholder="Senha*" className="placeholder:text-gray-500 font-inter-regular"/>
      <Input placeholder="Confirmar Senha*" className="placeholder:text-gray-500 font-inter-regular"/>
      </View>

      <View className="pt-[30px] items-center">
      <Button text="Criar Conta" className="font-inter-regular"/>
      </View>

      <View className="gap-5 pt-10">
        <Text className="pl-[120px] w-[330] font-inter-regular">
          Li e estou de acordo com o Termo de Uso e Política de Privacidade
        </Text>
        <Text className="pl-[120px] w-[330] font-inter-regular">
          Aceito receber Emails e SMS de novidades do Fisioterapia
        </Text>
      </View>

      <View className="flex flex-row pl-[18px] pt-[130px] gap-[100px] m-[0px]">
        <Text className="text-[#1F4BFC] font-inter-regular" style={{opacity: 0.3}}>
          Dúvidas? Fale Conosco
        </Text>
        <Text className="text-[#1F4BFC] font-inter-regular" style={{opacity: 0.3}}>
          Todos os direitos reservados
        </Text>
      </View>

    </Page>
  );
}

