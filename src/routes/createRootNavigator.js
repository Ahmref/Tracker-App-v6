import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Context as AuthContext } from "../context/AuthContext";
import AccountScreen from "../screens/AccountScreen";
import SignInScreen from "../screens/SignInScreen";
import SignUpScreen from "../screens/SignUpScreen";
import TrackCreateScreen from "../screens/TrackCreateScreen";
import TrackDetailScreen from "../screens/TrackDetailScreen";
import TrackListScreen from "../screens/TrackListScreen";

const loginFlowStack = createNativeStackNavigator();
const LoginFlow = () => (
  <loginFlowStack.Navigator>
    <loginFlowStack.Screen
      name="SignUp"
      component={SignUpScreen}
      options={{
        headerShown: false,
      }}
    />
    <loginFlowStack.Screen
      name="SignIn"
      component={SignInScreen}
      options={{ headerShown: false }}
    />
  </loginFlowStack.Navigator>
);
const trackListStack = createNativeStackNavigator();
function TrackListStackNavigator() {
  return (
    <trackListStack.Navigator>
      <trackListStack.Screen name="TrackList" component={TrackListScreen} />
      <trackListStack.Screen name="TrackDetail" component={TrackDetailScreen} />
    </trackListStack.Navigator>
  );
}
const mainFlowBottomTabNavigator = createBottomTabNavigator();
const MainFlowBottom = () => (
  <mainFlowBottomTabNavigator.Navigator>
    <mainFlowBottomTabNavigator.Screen
      name="trackListStackNavigator"
      component={TrackListStackNavigator}
      options={{ headerShown: false }}
    />
    <mainFlowBottomTabNavigator.Screen
      name="TrackCreate"
      component={TrackCreateScreen}
    />
    <mainFlowBottomTabNavigator.Screen
      name="Account"
      component={AccountScreen}
    />
  </mainFlowBottomTabNavigator.Navigator>
);

const RootNavigator = createNativeStackNavigator();
const RootNavigatorFlow = () => {
  const { state, dispatch } = React.useContext(AuthContext);
  React.useEffect(() => {
    const fetchToken = async () => {
      let token;
      try {
        token = await SecureStore.getItemAsync("token");
      } catch (err) {
        // Restoring token failed
        // console.log("Unable to fetch token.");
      }
      // After restoring token, we may need to validate it
      //  dispatch({ type: "RESTORE_TOKEN", token: token });
    };
    fetchToken();
  }, [dispatch]);
  //console.log(state.token);
  return (
    <RootNavigator.Navigator>
      {state.token == null ? (
        // No token found, user isn't logged in
        <RootNavigator.Screen
          name="loginFlowStack"
          component={LoginFlow}
          options={{
            headerShown: false,
          }}
        />
      ) : (
        // User is logged in
        <RootNavigator.Screen
          name="mainFlowBottomTabNavigator"
          component={MainFlowBottom}
          options={{
            headerShown: false,
          }}
        />
      )}
    </RootNavigator.Navigator>
  );
};
export default RootNavigatorFlow;
