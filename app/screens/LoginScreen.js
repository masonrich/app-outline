import React, { useState, useContext } from "react";
import { StyleSheet, Image, View } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { BlurView } from "expo-blur";
import Form from "../components/forms/Form";
import FormField from "../components/forms/FormField";
// import SubmitButton from "../components/forms/SubmitButton";
import { useAuth } from "../hooks/useAuth";
import Screen from "../components/reusable/Screen";
import Button from "../components/reusable/Button";
import Text from "../components/reusable/Text";
import routes from "../navigation/routes";
import colors from "../config/colors.js";
import ResetPasswordModal from "../components/modals/ResetPasswordModal";
import LoadingScreen from "./LoadingScreen";

function LoginScreen({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [modalVisible, setModalVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  const auth = useAuth();

  //navigate to register page
  const onFooterLinkPress = () => {
    navigation.navigate(routes.REGISTER);
  };

  return (
    <>
      <Screen style={styles.container}>
        <KeyboardAwareScrollView
          style={{ flex: 1, width: "100%" }}
          keyboardShouldPersistTaps="always"
        >
          <View style={styles.centerView}>
            <Image
              style={styles.logo}
              source={require("../assets/logo-red.png")}
            />
            <Form
            // initialValues={{ email: "", password: "" }}
            // validationSchema={validationSchema}
            >
              <FormField
                autoCapitalize="none"
                autoCorrect={false}
                icon="email"
                name="email"
                placeholder="Email"
                textContentType="emailAddress"
                onChangeText={(text) => setEmail(text)}
                keyboardType="email-address"
                // returnKeyType={"next"}
              />
              <FormField
                autoCapitalize="none"
                autoCorrect={false}
                icon="lock"
                name="password"
                placeholder="Password"
                secureTextEntry
                textContentType="password"
                onChangeText={(text) => setPassword(text)}
              />
              {/* <Button title="Login" onPress={loginUser} /> */}
              <View style={styles.loginButton}>
                <Button
                  title="Login"
                  onPress={() => {
                    auth.signIn(email, password, setLoading);
                  }}
                />
              </View>

              {/* <SubmitButton title="Login"/> */}
            </Form>

            <View style={styles.footerView}>
              <Text style={styles.footerText}>
                Forgot Password?{" "}
                <Text
                  style={styles.footerLink}
                  onPress={() => setModalVisible(true)}
                >
                  Send reset email
                </Text>
              </Text>
            </View>
            <View style={styles.footerView}>
              <Text style={styles.footerText}>
                Don't have an account?{" "}
                <Text onPress={onFooterLinkPress} style={styles.footerLink}>
                  Sign up
                </Text>
              </Text>
            </View>
            <ResetPasswordModal
              modalVisible={modalVisible}
              setModalVisible={setModalVisible}
            />
          </View>
        </KeyboardAwareScrollView>
      </Screen>
      {modalVisible && (
        <BlurView
          intensity={100}
          style={[StyleSheet.absoluteFill, styles.nonBlurredContent]}
          tint={"dark"}
        />
      )}
      <LoadingScreen uploading={loading} />
    </>
  );
}

const styles = StyleSheet.create({
  centerView: {
    justifyContent: "center",
    marginTop: 100,
  },
  container: {
    backgroundColor: colors.white,
    justifyContent: "center",
  },
  loginButton: {
    marginTop: 15,
  },
  logo: {
    width: 120,
    height: 120,
    alignSelf: "center",
    marginTop: 50,
    marginBottom: 20,
  },
  footerLink: {
    color: colors.primary,
    fontWeight: "bold",
    fontSize: 16,
  },
  footerText: {
    fontSize: 16,
    color: colors.dark,
  },
  footerView: {
    flex: 1,
    alignItems: "center",
    marginTop: 20,
  },
});

export default LoginScreen;
