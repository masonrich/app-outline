import * as React from "react";
import ConditionalNavigator from "./app/navigation/ConditionalNavigator";
import { NavigationContainer } from "@react-navigation/native";
import { ProvideAuth } from "./app/hooks/useAuth";
import navigationTheme from "./app/navigation/navigationTheme";

export default function App() {
  return (
    <ProvideAuth>
      <NavigationContainer theme={navigationTheme} independent={true}>
        <ConditionalNavigator />
      </NavigationContainer>
    </ProvideAuth>
  );
}
