import { View, Text } from "react-native";
import Checkbox from "expo-checkbox";
import { Input, Page, Button } from "@/components/template";
import { TopButton } from "@/components/auth";

export default function Register() {
  return (
    <Page>
      <View className="w-[90%] flex-row justify-between mx-auto">
        <TopButton text="Entrar" href="/(no-auth)/login" />
        <TopButton text="Registrar-se" href="/(no-auth)/register" selected={true} />
      </View>

      <View className="pt-[5rem]">
        <Text className="text-[66px] font-bold text-center font-inter-regular">
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

      <View className="flex-row items-center pt-[2.5rem]">
        <Checkbox className="ml-[82px]"/>
        <Text className="pl-3 w-[225] font-inter-regular text-[13px] text-gray-400">
          Li e estou de acordo com o{" "} 
          <Text className="text-[#1F4BFC]">Termos de Uso e Política de Privacidade</Text> 
        </Text>
      </View>

      <View className="flex-row items-center pt-[30px]">
        <Checkbox className="ml-[82px]"/>
        <Text className="pl-3 w-[235] font-inter-regular text-[13px] text-gray-400">
          Aceito receber Emails e SMS de novidades do{" "} 
          <Text className="text-[#1F4BFC]">Fisioterapia</Text>
        </Text>
      </View>

      <View className="flex-row pl-[18px] pt-[150px] gap-[100px]">
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

