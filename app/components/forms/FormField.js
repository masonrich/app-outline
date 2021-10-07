import React from "react";
import { StyleSheet, View } from "react-native";
import { useFormikContext } from "formik";

import TextInput from "../reusable/TextInput";
import ErrorMessage from "./ErrorMessage";
import colors from "../../config/colors";

function AppFormField({ name, width, textHeight, ...otherProps }) {
  const { setFieldTouched, handleChange, errors, touched } = useFormikContext();

  return (
    <>
      <TextInput
        style={styles.input}
        onBlur={() => setFieldTouched(name)}
        onChangeText={handleChange(name)}
        width={width}
        textHeight={textHeight}
        {...otherProps}
      />
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
}

const styles = StyleSheet.create({
  input: {
    width: "90%",
  },
});

export default AppFormField;
