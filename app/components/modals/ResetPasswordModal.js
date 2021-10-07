import React, { useState } from "react";
import {
  Alert,
  Modal,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} from "react-native";

import Button from "../reusable/Button";
import colors from "../../config/colors";
import Form from "../forms/Form";
import FormField from "../forms/FormField";
import { useAuth } from "../../hooks/useAuth";

export default function ResetPasswordModal({ modalVisible, setModalVisible }) {
  const auth = useAuth();
  const [email, setEmail] = useState("");

  const emailUser = () => {
    if (!email) {
      alert("No email was provided");
      return;
    }
    auth.sendPasswordResetEmail(email);
    setModalVisible(!modalVisible);
  };

  return (
    <View style={styles.container}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(false);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.forgotPasswordText}>Reset Password</Text>
            <Text style={styles.instructionsText}>
              We will send you an email with instructions on how to reset your
              password.
            </Text>
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
            </Form>

            <Button title="Email Me" onPress={emailUser} />
            <Text
              style={styles.cancelText}
              onPress={() => setModalVisible(false)}
            >
              Cancel
            </Text>
          </View>
        </View>
      </Modal>

      {/* Forgot password text goes here */}
    </View>
  );
}

const styles = StyleSheet.create({
  cancelText: {
    fontSize: 18,
    marginTop: 15,
    padding: 10,
    color: colors.secondary,
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  container: {
    alignItems: "center",
    justifyContent: "center",
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
  },
  instructionsText: {
    fontSize: 15,
    color: colors.dark,
    marginBottom: 15,
  },
  modalView: {
    backgroundColor: "white",
    borderRadius: 25,
    marginTop: 5,
    marginBottom: 20,
    marginLeft: 20,
    marginRight: 20,
    paddingTop: 5,
    paddingBottom: 20,
    paddingLeft: 20,
    paddingRight: 20,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: colors.dark,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 5,
    height: 400,
    width: "95%",
  },
  forgotPasswordText: {
    marginBottom: 25,
    textAlign: "center",
    fontSize: 25,
    color: colors.dark,
  },
});
