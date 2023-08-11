import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import RootNavigatorFlow from "./src/routes/createRootNavigator";
import { Provider as AuthProvider } from "./src/context/AuthContext";

function App() {
  return (
    <NavigationContainer>
      <RootNavigatorFlow></RootNavigatorFlow>
    </NavigationContainer>
  );
}
export default () => {
  return (
    <AuthProvider>
      <App />
    </AuthProvider>
  );
};
