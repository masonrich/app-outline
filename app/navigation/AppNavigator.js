import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { NativeBaseProvider } from "native-base";
import CalendarNavigator from "./CalendarNavigator";
import ProfileNavigator from "./ProfileNavigator";
import HomeNavigator from "./HomeNavigator";

const Tab = createBottomTabNavigator();

export default function AppNavigator() {
  return (
    <NativeBaseProvider>
      <NavigationContainer independent={true}>
        <Tab.Navigator
          tabBarOptions={{
            keyboardHidesTabBar: true,
          }}
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;

              if (route.name === "Home") {
                iconName = focused ? "home" : "home-outline";
              } else if (route.name === "Profile") {
                iconName = focused ? "account" : "account-outline";
              } else if (route.name === "Calendar") {
                iconName = focused ? "calendar" : "calendar-outline";
              }

              return (
                <MaterialCommunityIcons
                  name={iconName}
                  size={size}
                  color={color}
                />
              );
            },
          })}
          tabBarOptions={{
            activeTintColor: "tomato",
            inactiveTintColor: "gray",
          }}
        >
          <Tab.Screen name="Home" component={HomeNavigator} />
          <Tab.Screen name="Calendar" component={CalendarNavigator} />
          <Tab.Screen name="Profile" component={ProfileNavigator} />
        </Tab.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  );
}
