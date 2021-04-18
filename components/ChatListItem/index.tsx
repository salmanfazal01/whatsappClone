import { useNavigation } from "@react-navigation/native";
import moment from "moment";
// import moment from "moment";
import React from "react";
import { Image, Text, TouchableWithoutFeedback, View } from "react-native";
import { ChatRoom } from "../../types";
import styles from "./style";

export type ChatListItemProps = {
  chatRoom: ChatRoom;
};

const ChatListItem = (props: ChatListItemProps) => {
  const { chatRoom } = props;
  //const [user, setUser] = useState(chatRoom?.users?.[1]);

  const user = chatRoom?.users?.[1] || {};

  const navigation = useNavigation();

  const onClick = () => {
    navigation.navigate("ChatRoom", {
      id: chatRoom.id,
      name: user.name,
    });
  };

  if (!user) {
    return null;
  }

  return (
    <TouchableWithoutFeedback onPress={onClick}>
      <View
        style={chatRoom.id == "0" ? styles.containerFirst : styles.container}>
        <View style={styles.row}>
          <Image source={{ uri: user?.imageUri }} style={styles.avatar} />
        </View>

        <View style={styles.midContainer}>
          <View style={styles.row}>
            <Text style={styles.username}>{user?.name}</Text>
            <Text style={styles.time}>
              {chatRoom.lastMessage &&
                moment(chatRoom?.lastMessage?.createdAt)
                  .startOf("day")
                  .fromNow()}
            </Text>
          </View>
          <Text numberOfLines={1} style={styles.lastMessage}>
            {chatRoom.lastMessage ? `${chatRoom?.lastMessage?.content}` : ""}
          </Text>

          <View style={styles.divider} />
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default ChatListItem;
