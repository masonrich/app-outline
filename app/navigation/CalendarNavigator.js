import React from "react";
import { Text } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import CalendarScreen from "../screens/CalendarScreen";

const Stack = createStackNavigator();

const CalendarNavigator = () => (
  <Stack.Navigator mode="modal" screenOptions={{ headerShown: false }}>
    <Stack.Screen
      name="cal"
      component={CalendarScreen}
      options={{
        headerTitle: <Text>Calendar</Text>,
        headerShown: true,
        headerStatusBarHeight: 40,
      }}
    />
    {/* more screens go here */}
  </Stack.Navigator>
);

export default CalendarNavigator;
