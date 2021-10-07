import React from "react";
import { View, TextInput, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import colors from "../../config/colors";
import defaultStyles from "../../config/styles";
import Text from "./Text";

function AppTextInput({
  icon,
  width = "85%",
  textHeight = 55,
  height = 55,
  ...otherProps
}) {
  return (
    <View style={[styles.container, { width }]}>
      {icon && (
        <MaterialCommunityIcons
          name={icon}
          size={20}
          color={defaultStyles.colors.medium}
          style={styles.icon}
        />
      )}
      <TextInput
        placeholderTextColor={defaultStyles.colors.medium}
        style={[defaultStyles.text, styles.textInput]}
        {...otherProps}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignSelf: "center",
    // backgroundColor: defaultStyles.colors.white,
    flexDirection: "row",
    paddingBottom: 10,
    paddingTop: 15,
    paddingRight: 15,
    paddingLeft: 15,
    marginVertical: 10,
    borderBottomWidth: 2,
    borderBottomColor: colors.grey,
  },
  icon: {
    marginRight: 15,
    paddingTop: 3,
  },
  textInput: {
    paddingBottom: 5,
  },
});

export default AppTextInput;
