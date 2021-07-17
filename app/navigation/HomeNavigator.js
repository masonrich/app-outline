import React from "react";
import { Text } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../screens/HomeScreen";

const Stack = createStackNavigator();

const HomeNavigator = () => (
  <Stack.Navigator mode="modal" screenOptions={{ headerShown: false }}>
    <Stack.Screen
      name="Home"
      component={HomeScreen}
      options={{
        headerTitle: <Text>Home</Text>,
        headerShown: true,
        headerStatusBarHeight: 40,
      }}
    />
    {/* more screens go here */}
  </Stack.Navigator>
);

export default HomeNavigator;
