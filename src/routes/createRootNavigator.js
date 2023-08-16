import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { Context as AuthContext } from "../context/AuthContext";
import AccountScreen from "../screens/AccountScreen";
import SignInScreen from "../screens/SignInScreen";
import SignUpScreen from "../screens/SignUpScreen";
import TrackCreateScreen from "../screens/TrackCreateScreen";
import TrackDetailScreen from "../screens/TrackDetailScreen";
import TrackListScreen from "../screens/TrackListScreen";
import { Icon } from "@rneui/themed";

const loginFlowStack = createNativeStackNavigator();
const LoginFlow = () => (
  <loginFlowStack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: "#f4511e",
      },
      headerTintColor: "#fff",
      headerTitleStyle: {
        fontWeight: "bold",
      },
    }}
  >
    <loginFlowStack.Screen
      name="SignUp"
      component={SignUpScreen}
      options={{
        title: "SignUp",
      }}
      //options={{headerShown: false }}
    />
    <loginFlowStack.Screen
      name="SignIn"
      component={SignInScreen}
      options={{
        title: "SignIn",
      }}
    />
  </loginFlowStack.Navigator>
);
const AccountStack = createNativeStackNavigator();
function AccountStackNavigator() {
  return (
    <AccountStack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: "#f4511e",
        },
        headerTintColor: "#fff",
        headerTitleStyle: {
          fontWeight: "bold",
        },
      }}
    >
      <AccountStack.Screen
        name="Accountscreen"
        component={AccountScreen}
        options={{
          title: "Account",
        }}
      />
    </AccountStack.Navigator>
  );
}

const trackListStack = createNativeStackNavigator();

function TrackListStackNavigator() {
  return (
    <trackListStack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: "#f4511e",
        },
        headerTintColor: "#fff",
        headerTitleStyle: {
          fontWeight: "bold",
        },
      }}
    >
      <trackListStack.Screen
        name="TrackList"
        component={TrackListScreen}
        options={{
          title: "Tracks",
        }}
      />
      <trackListStack.Screen
        name="TrackDetail"
        component={TrackDetailScreen}
        options={{
          title: "Track Detail",
        }}
      />
    </trackListStack.Navigator>
  );
}
const mainFlowBottomTabNavigator = createMaterialBottomTabNavigator();
const MainFlowBottom = () => (
  <mainFlowBottomTabNavigator.Navigator
    activeColor="#f0edf6"
    inactiveColor="#3e2465"
    barStyle={{ backgroundColor: "#f4511e" }}
  >
    <mainFlowBottomTabNavigator.Screen
      name="trackListStackNavigator"
      component={TrackListStackNavigator}
      options={{
        title: "Tracks",
        tabBarIcon: () => <Icon name="map-pin" type="font-awesome-5" />,
      }}
    />
    <mainFlowBottomTabNavigator.Screen
      name="TrackCreate"
      component={TrackCreateScreen}
      options={{
        title: "Add Tracks",
        tabBarIcon: () => <Icon name="plus" type="font-awesome" />,
      }}
    />
    <mainFlowBottomTabNavigator.Screen
      name="AccountStackNavigator"
      component={AccountStackNavigator}
      options={{
        title: "Account",
        tabBarIcon: () => <Icon name="user" type="font-awesome" />,
      }}
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
        //console.log("Unable to fetch token.");
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
