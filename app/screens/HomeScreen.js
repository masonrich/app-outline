import React from "react";
import { View, Text } from "react-native";

function HomeScreen({ navigation }) {
  return (
    <>
      <View>
        <Text style={{ alignSelf: "center", padding: 50 }}>
          Workouts from the people you follow will show up here :)
        </Text>
      </View>
    </>
  );
}

export default HomeScreen;
