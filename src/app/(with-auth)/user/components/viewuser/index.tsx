import { Text, View, ScrollView, ActivityIndicator } from "react-native";
import { Page, Input, Button } from "@/components/template";

import * as Models from "../../model";

export function ViewUser({ ...props }: Models.IUserHook) {
  const { changeState, userData, logOut, categories } = props;

  return (
    <Page className="w-full flex-1">
      <View className="flex-row items-center space-x-4">
        <View className="bg-[#EDEDED] h-[8rem] w-[8rem] rounded-full ml-5"></View>
        <View>
          <Text className="text-[30px] font-inter-bold w-60 items-center ml-3 text-wrap">{userData.name}</Text>
        </View>
      </View>

      <View className="w-[90%] mx-auto flex-row justfy-around gap-4 p-2.5">
        <View className="w-[50%] gap-3">
          <View>
            <Text className="text-[18px] font-black font-inter-Black">Nome</Text>
            <Input className="text-gray-500 h-12 font-inter-regular" value={userData.name} />
          </View>

          <View>
            <Text className="text-[18px] font-black font-inter-Black">Email</Text>
            <Input className=" text-gray-500 h-12 font-inter-regular" value={userData.email} />
          </View>
        </View>

        <View className="w-[50%] gap-3 justify-end">
          <View>
            <Text className="text-[18px] font-black font-inter-Black">Escala Hoehn e Yahr</Text>
            <Input className=" text-gray-500 h-12 font-inter-regular" value={String(userData.scaleId)} />
          </View>
        </View>
      </View>

      <View className="flex items-center justify-center pt-8">
        <Text className="text center font-inter-bold text-[25px]">Gêneros Musicais</Text>
      </View>
      <View className="w-[90%] mx-auto mt-6">
        <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{ paddingHorizontal: 8, gap: 8 }}>
          {categories?.length == 0 ? (
            <View className="w-full items-center">
              <ActivityIndicator size={"large"} />
            </View>
          ) : (
            categories.map((item, index) => (
              <View key={index} className={`w-[80px] h-[50px] rounded-lg flex items-center justify-center bg-[#EDEDED]`}>
                <Text className="font-inter-bold ">{item.name}</Text>
              </View>
            ))
          )}
        </ScrollView>
      </View>

      <View className="border-b w-[90%] mx-auto p-7" style={{ opacity: 0.2 }}></View>

      <View className="w-[90%] flex-row justfy-around items-center mt-5 gap-2 mx-auto">
        <View className="w-full gap-5 p-2.5 items-center">
          <Button text="Alterar dados" className=" h-[50px] flex items-center justify-center text-center" onPress={() => changeState("view")} />
          <Button text="Sair" className=" h-[50px] flex items-center justify-center text-center bg-[#0D006F]" onPress={logOut} />
        </View>
        {/* <View className="w-[50%] h-[120px] bg-[#EDEDED] rounded-lg flex items-center justify-center">
          <Text className="text-[40px] font-inter-regular text-center">90 bpm</Text>
        </View> */}
      </View>
    </Page>
  );
}
