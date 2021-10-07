import React from "react";
import { View, StyleSheet, Modal } from "react-native";
import * as Progress from "react-native-progress";
import LottieView from "lottie-react-native";
// import routes from "../navigation/routes";

import colors from "../config/colors";

function LoadingScreen({ uploading, progress = 1 }) {
  return (
    <Modal visible={uploading} transparent={true}>
      <View
        style={styles.container}
        // backgroundColor={"rgba(255, 255, 255, 0.5)"}
      >
        {progress < 1 ? (
          <Progress.Bar
            color={colors.primary}
            progress={progress}
            width={200}
          />
        ) : (
          <LottieView
            autoPlay
            loop={true}
            // onAnimationFinish={() => navigation.navigate(routes.PROFILE)}
            source={require("../assets/animations/loading.json")}
            style={styles.animation}
          />
        )}
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  animation: {
    width: 300,
  },
  container: {
    alignItems: "center",
    flex: 1,
    justifyContent: "center",
    backgroundColor: colors.white,
  },
});

export default LoadingScreen;
