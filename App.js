import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import RootNavigatorFlow from "./src/routes/createRootNavigator";
import { Provider as AuthProvider } from "./src/context/AuthContext";
import { Provider as LocationProvider } from "./src/context/LocationContext";
import { Provider as TrackProvider } from "./src/context/TrackContext";
function App() {
  return (
    <NavigationContainer>
      <RootNavigatorFlow></RootNavigatorFlow>
    </NavigationContainer>
  );
}
export default () => {
  return (
    <TrackProvider>
      <LocationProvider>
        <AuthProvider>
          <App />
        </AuthProvider>
      </LocationProvider>
    </TrackProvider>
  );
};
