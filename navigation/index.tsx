import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import * as React from "react";
import { ColorSchemeName } from "react-native";
import { View } from "../components/Themed";
import Colors from "../constants/Colors";
import {
  Octicons,
  MaterialCommunityIcons,
  Entypo,
  Foundation,
  Zocial,
} from "@expo/vector-icons";

import ChatsScreen from "../screens/ChatsScreen";
import ChatsRoomScreen from "../screens/ChatRoomScreen";
import { RootStackParamList } from "../types";
import MainTabNavigator from "./MainTabNavigator";
import LinkingConfiguration from "./LinkingConfiguration";
import ContactsScreen from "../screens/ContactsScreen";

export default function Navigation({
  colorScheme,
}: {
  colorScheme: ColorSchemeName;
}) {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
      <RootNavigator />
    </NavigationContainer>
  );
}

const Stack = createStackNavigator<RootStackParamList>();

function RootNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: Colors.light.tint,
          shadowOpacity: 0, //ios
          elevation: 0, //android
        },
        headerTintColor: Colors.light.background,
        headerTitleAlign: "left",
        headerTitleStyle: {
          // fontWeight: "bold",
        },
      }}>
      <Stack.Screen
        name="Root"
        component={MainTabNavigator}
        options={{
          title: "WhatsApp",
          headerRight: () => (
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                width: 60,
                backgroundColor: Colors.light.tint,
                marginRight: 10,
              }}>
              <Octicons
                name="search"
                size={20}
                color={Colors.light.background}
              />
              <Entypo
                name="dots-three-vertical"
                size={20}
                color={Colors.light.background}
              />
            </View>
          ),
        }}
      />
      <Stack.Screen
        name="ChatRoom"
        component={ChatsRoomScreen}
        options={({ route }) => ({
          title: route.params.name,
          headerRight: () => (
            <View
              style={{
                flexDirection: "row",
                alignContent: "center",
                justifyContent: "space-between",
                width: 100,
                backgroundColor: Colors.light.tint,
                marginRight: 10,
              }}>
              <Foundation
                name="video"
                size={26}
                color={Colors.light.background}
                style={{ alignSelf: "center", textAlign: "center" }}
              />
              <Zocial
                name="call"
                size={24}
                color={Colors.light.background}
                style={{ alignSelf: "center", textAlign: "center" }}
              />
              <Entypo
                name="dots-three-vertical"
                size={20}
                color={Colors.light.background}
                style={{ alignSelf: "center", textAlign: "center" }}
              />
            </View>
          ),
        })}
      />

      {/* Default */}
      <Stack.Screen
        name="ChatsScreen"
        component={ChatsScreen}
        options={{ title: "Chat Screen" }}
      />
      <Stack.Screen
        name="Contacts"
        component={ContactsScreen}
        options={{ title: "Contacts" }}
      />
    </Stack.Navigator>
  );
}
