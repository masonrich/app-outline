import React, { useState, useContext } from "react";
import { StyleSheet, View, Image } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { useAuth } from "../hooks/useAuth";
import Form from "../components/forms/Form";
import FormField from "../components/forms/FormField";
// import SubmitButton from "../components/forms/SubmitButton";
import LoadingScreen from "./LoadingScreen";
import Button from "../components/reusable/Button";
import Screen from "../components/reusable/Screen";
import Text from "../components/reusable/Text";
import routes from "../navigation/routes";
import colors from "../config/colors";

// const validationSchema = Yup.object().shape({
//   firstName: Yup.string().required().label("Name"),
//   lastName: Yup.string().required().label("Name"),
//   email: Yup.string().required().email().label("Email"),
//   password: Yup.string().required().min(4).label("Password"),
//   confirmPassword: Yup.string().required().min(4).label("Confirm Password"),
// });

function RegisterScreen({ navigation }) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const auth = useAuth();

  //navigate to login page
  const onFooterLinkPress = () => {
    navigation.navigate(routes.LOGIN);
  };

  return (
    <Screen style={styles.container}>
      <KeyboardAwareScrollView
        style={{ flex: 1, width: "100%" }}
        keyboardShouldPersistTaps="always"
      >
        <Image style={styles.logo} source={require("../assets/logo-red.png")} />
        <View style={styles.signUpContainer}>
          <Text style={styles.signUp}>Sign Up</Text>
        </View>
        <View style={styles.formContainer}>
          <Form
            initialValues={{
              firstName: firstName,
              lastName: lastName,
              email: email,
              password: password,
              confirmPassword: confirmPassword,
            }}
            onSubmit={(values) => console.log(values)}
            // validationSchema={validationSchema}
          >
            {/* <View style={styles.nameRow}> */}
            <FormField
              autoCorrect={false}
              icon="account"
              name="firstName"
              value={firstName}
              placeholder="First Name"
              onChangeText={(text) => setFirstName(text)}
              // width={"46%"}
            />
            <FormField
              autoCorrect={false}
              icon="account"
              name="lastName"
              value={lastName}
              placeholder="Last Name"
              onChangeText={(text) => setLastName(text)}
              // width={"46%"}
            />
            {/* </View> */}
            <FormField
              autoCapitalize="none"
              autoCorrect={false}
              icon="email"
              keyboardType="email-address"
              name="email"
              value={email}
              placeholder="Email"
              textContentType="emailAddress"
              onChangeText={(text) => setEmail(text)}
            />
            <FormField
              autoCapitalize="none"
              autoCorrect={false}
              icon="lock"
              name="password"
              value={password}
              placeholder="Password"
              secureTextEntry
              textContentType="password"
              onChangeText={(text) => setPassword(text)}
            />
            <FormField
              autoCapitalize="none"
              autoCorrect={false}
              icon="lock"
              name="confirmPassword"
              value={confirmPassword}
              placeholder="Confirm Password"
              secureTextEntry
              textContentType="password"
              onChangeText={(text) => setConfirmPassword(text)}
            />

            {/* <SubmitButton title="Register" /> */}
            <View style={styles.registerButton}>
              <Button
                title="Register"
                onPress={() =>
                  auth.register(
                    firstName,
                    lastName,
                    email,
                    password,
                    setLoading
                  )
                }
              />
            </View>
          </Form>
          <View style={styles.footerView}>
            <Text style={styles.footerText}>
              Already have an account?{" "}
              <Text onPress={onFooterLinkPress} style={styles.footerLink}>
                Sign in
              </Text>
            </Text>
          </View>
        </View>
      </KeyboardAwareScrollView>
      <LoadingScreen uploading={loading} />
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
  },
  footerLink: {
    color: "#80ccc7",
    fontWeight: "bold",
    fontSize: 16,
  },
  footerText: {
    fontSize: 16,
    color: "#2e2e2d",
  },
  footerView: {
    flex: 1,
    alignItems: "center",
    marginTop: 20,
  },
  logo: {
    width: 120,
    height: 120,
    alignSelf: "center",
    marginTop: 50,
    marginBottom: 20,
  },
  logoContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
  nameRow: {
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  registerButton: {
    marginTop: 15,
  },
  signUpContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
  signUp: {
    fontSize: 30,
    padding: 20,
  },
});

export default RegisterScreen;
