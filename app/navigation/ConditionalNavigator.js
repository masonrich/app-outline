import AppNavigator from "./AppNavigator";
import AuthNavigator from "./AuthNavigator";
import React from "react";
import { useAuth } from "../hooks/useAuth";

export default function ConditionalNavigator() {
  const auth = useAuth();
  return <>{auth.user ? <AppNavigator /> : <AuthNavigator />}</>;
}
