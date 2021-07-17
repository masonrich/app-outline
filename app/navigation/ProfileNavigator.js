import React from "react";
import { Text } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import ProfileScreen from "../screens/ProfileScreen";

const Stack = createStackNavigator();

const ProfileNavigator = () => (
  <Stack.Navigator mode="modal" screenOptions={{ headerShown: false }}>
    <Stack.Screen
      name="Profile"
      component={ProfileScreen}
      options={{
        headerTitle: <Text>Profile</Text>,
        headerShown: true,
        headerStatusBarHeight: 40,
      }}
    />
    {/* more screens go here */}
  </Stack.Navigator>
);

export default ProfileNavigator;
