import { useRoute } from "@react-navigation/native";
import React from "react";
import { View, Text, ImageBackground } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import ChatMessage from "../components/ChatMessage";
import Chats from "../data/Chats";
import BG from "../assets/images/BG.png";
import InputBox from "../components/ChatInput";

const ChatRoomScreen = () => {
  const route = useRoute();

  return (
    <ImageBackground source={BG} style={{ width: "100%", height: "100%" }}>
      <FlatList
        style={{ width: "100%" }}
        data={Chats.messages}
        renderItem={(item) => <ChatMessage message={item?.item} />}
        keyExtractor={(item) => item?.id}
        inverted
      />

      <InputBox chatRoomID={route?.params?.id} />
    </ImageBackground>
  );
};

export default ChatRoomScreen;
