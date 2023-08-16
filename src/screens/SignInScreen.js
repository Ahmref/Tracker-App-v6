import React, { useContext } from "react";
import { View, StyleSheet } from "react-native";
import { Context as AuthContext } from "../context/AuthContext";
import AuthForm from "../components/AuthForm";
import NavLink from "../components/NavLink";
const SigninScreen = ({ navigation }) => {
  const { state, signin, clearErrorMessage } = useContext(AuthContext);
  React.useEffect(() => {
    const clearMessage = navigation.addListener("focus", () => {
      clearErrorMessage();
    });

    return clearMessage;
  }, [navigation]);
  return (
    <View style={styles.container}>
      <AuthForm
        headerText=""
        errorMessage={state.errorMessage}
        submitButtonText="Sign In"
        onSubmit={signin}
      />
      <NavLink
        routeName="SignUp"
        text="don't have an account ? Sign up instead !"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    marginBottom: 250,
  },

  link: {
    color: "blue",
  },
});

export default SigninScreen;
