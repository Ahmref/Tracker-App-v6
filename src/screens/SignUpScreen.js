import React, { useContext } from "react";
import { View, StyleSheet } from "react-native";
import { Context as AuthContext } from "../context/AuthContext";
import AuthForm from "../components/AuthForm";
import NavLink from "../components/NavLink";

const SignupScreen = ({ navigation }) => {
  const { state, signup, clearErrorMessage } = useContext(AuthContext);
  React.useEffect(() => {
    const clearMessage = navigation.addListener("focus", () => {
      clearErrorMessage();
    });

    return clearMessage;
  }, [navigation]);
  return (
    <View style={styles.container}>
      <AuthForm
        headerText="Sign Up for tracker"
        errorMessage={state.errorMessage}
        submitButtonText="Sign Up"
        onSubmit={signup}
      />
      <NavLink
        routeName="SignIn"
        text="Already have an account ? Sign in instead !"
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

export default SignupScreen;
