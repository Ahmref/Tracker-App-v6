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
import { Icon } from "@rneui/themed";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
const loginFlowStack = createNativeStackNavigator();
const LoginFlow = () => (
  <loginFlowStack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: "black",
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

const trackListStack = createNativeStackNavigator();

function TrackListStackNavigator() {
  return (
    <trackListStack.Navigator>
      <trackListStack.Screen
        name="TrackList"
        component={TrackListScreen}
        options={{
          title: "Tracks",
          headerShown: false,
        }}
      />
      <trackListStack.Screen
        name="TrackDetail"
        component={TrackDetailScreen}
        options={{
          title: "Track Detail",
          headerShown: false,
        }}
      />
    </trackListStack.Navigator>
  );
}
const mainFlowBottomTabNavigator = createBottomTabNavigator();
const MainFlowBottom = () => (
  <mainFlowBottomTabNavigator.Navigator
    screenOptions={{
      tabBarActiveTintColor: "white",
      tabBarInactiveTintColor: "gray",
      tabBarStyle: { backgroundColor: "black" },
      headerStyle: {
        backgroundColor: "black",
      },
      headerTintColor: "#fff",
    }}
  >
    <mainFlowBottomTabNavigator.Screen
      name="trackListStackNavigator"
      component={TrackListStackNavigator}
      options={{
        title: "Tracks",
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons
            name="map-marker-distance"
            color={color}
            size={30}
          />
        ),
      }}
    />
    <mainFlowBottomTabNavigator.Screen
      name="TrackCreate"
      component={TrackCreateScreen}
      options={{
        title: "Add Tracks",
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="plus" color={color} size={30} />
        ),
      }}
    />
    <mainFlowBottomTabNavigator.Screen
      name="Account"
      component={AccountScreen}
      options={{
        title: "Account",
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="account" color={color} size={size} />
        ),
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
