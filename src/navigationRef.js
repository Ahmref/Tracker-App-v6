import { CommonActions } from "@react-navigation/native";
let navigator;
export const setNavigator = (nav) => {
  navigator = nav;
};
export const navigate = (routeName, params) => {
  navigation.dispatch(
    CommonActions.navigate({
      routeName,
      params,
    })
  );
};
