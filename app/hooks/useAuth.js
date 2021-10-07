import React, { useState, useEffect, useContext, createContext } from "react";
import { firebase } from "../firebase/config";
import _ from "lodash";
// import authStorage from "../auth/storage";
// import jwtDecode from "jwt-decode";

// RN >= 0.63
// import { LogBox } from "react-native";
// LogBox.ignoreLogs(["Warning: ..."]);
// LogBox.ignoreLogs(["Setting a timer for"]);
// LogBox.ignoreLogs(["Calling getNode"]);

const authContext = createContext();

// Provider component that wraps your app and makes auth object ...
// ... available to any child component that calls useAuth().
export function ProvideAuth({ children }) {
  const auth = useProvideAuth();
  return <authContext.Provider value={auth}>{children}</authContext.Provider>;
}

// Hook for child components to get the auth object ...
// ... and re-render when it changes.
export const useAuth = () => {
  return useContext(authContext);
};

// Provider hook that creates auth object and handles state
export function useProvideAuth() {
  const [user, setUser] = useState(null);
  // const [isLoading, setIsLoading] = useState(false);
  // var user = firebase.auth().currentUser;

  // Wrap any Firebase methods we want to use making sure ...
  // ... to save the user to state.
  const signIn = async (email, password, setLoading) => {
    setLoading(true);
    return firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((response) => {
        const uid = response.user.uid;
        const usersRef = firebase.firestore().collection("users");
        usersRef
          .doc(uid)
          .get()
          .then((firestoreDocument) => {
            if (!firestoreDocument.exists) {
              alert("User does not exist anymore.");
              return;
            }
            const user = firestoreDocument.data();
            setUser(user);
            setLoading(false);
          })
          .catch((error) => {
            alert(error);
          });
      })
      .catch((error) => {
        alert(error);
        setLoading(false);
      });
  };

  //method for user to register
  const register = async (firstName, lastName, email, password, setLoading) => {
    setLoading(true);
    return firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((response) => {
        if (!response.user) {
          setLoading(false);
          return;
        }
        const uid = response.user.uid;
        const data = {
          id: uid,
          email,
          firstName,
          lastName,
          profilePic: "",
          bio: "",
          isPrivate: false,
          followers: [],
          following: [],
        };
        //adding to a "users" table on top of basic auth table
        const usersRef = firebase.firestore().collection("users");
        usersRef
          .doc(uid)
          .set(data)
          .then(() => {
            setUser(data);
          })
          .catch((error) => {
            alert(error);
          });
        setLoading(false);
        return response.user;
      })
      .catch((error) => {
        alert(error);
        setLoading(false);
      });
  };

  const signOut = () => {
    return firebase
      .auth()
      .signOut()
      .then(() => {
        setUser(null);
      });
  };

  const sendPasswordResetEmail = (email) => {
    return firebase
      .auth()
      .sendPasswordResetEmail(email)
      .then(() => {
        return true;
      })
      .catch((error) => {
        alert(error);
      });
  };

  const confirmPasswordReset = (code, password) => {
    return firebase
      .auth()
      .confirmPasswordReset(code, password)
      .then(() => {
        return true;
      })
      .catch((error) => {
        alert(error);
      });
  };

  //persist the user
  useEffect(() => {
    // setIsLoaded(false);
    const usersRef = firebase.firestore().collection("users");
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        usersRef
          .doc(user.uid)
          .get()
          .then((document) => {
            const userData = document.data();
            setUser(userData);
          })
          .catch((error) => {});
        // setIsLoaded(true);
      } else {
      }
    });
  }, []);

  const resetAuthContextUser = (user) => {
    const uid = user.id;
    console.log("UID: " + uid);
    const usersRef = firebase.firestore().collection("users");
    usersRef
      .doc(uid)
      .get()
      .then((firestoreDocument) => {
        if (!firestoreDocument.exists) {
          alert("Could not find user.");
          return;
        }
        const user = firestoreDocument.data();
        setUser(user);
        console.log(user);
      })
      .catch((error) => {
        alert(error);
      });
  };

  // Return the user object and auth methods
  return {
    user,
    signIn,
    register,
    signOut,
    sendPasswordResetEmail,
    confirmPasswordReset,
    resetAuthContextUser,
  };
}
