import { useNavigation } from "@react-navigation/native";
import moment from "moment";
// import moment from "moment";
import React, { useState } from "react";
import { Image, Text, TouchableWithoutFeedback, View } from "react-native";
import { User } from "../../types";
import styles from "./style";

export type ContactListItemProps = {
  User: User;
};

const ContactListItem = (props: ContactListItemProps) => {
  const { user } = props;

  const navigation = useNavigation();

  const onClick = () => {
    //navigate to chatroom
  };

  return (
    <TouchableWithoutFeedback onPress={onClick}>
      <View style={user.id == "0" ? styles.containerFirst : styles.container}>
        <View style={styles.row}>
          <Image source={{ uri: user?.imageUri }} style={styles.avatar} />
        </View>

        <View style={styles.midContainer}>
          <View>
            <Text style={styles.username}>{user?.name}</Text>
            <Text numberOfLines={1} style={styles.status}>{user?.status}</Text>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default ContactListItem;
