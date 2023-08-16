import React, { useContext } from "react";
import { View, StyleSheet, Text } from "react-native";
import { Button } from "@rneui/themed";
import Spacer from "../components/Spacer";
import { Context as AuthContext } from "../context/AuthContext";

const AccountScreen = () => {
  const { signout } = useContext(AuthContext);
  return (
    <>
      <Text style={{ fontSize: 48 }}> </Text>
      <Spacer>
        <Button
          title="Sign Out"
          onPress={signout}
          buttonStyle={styles.buttonstyle}
        />
      </Spacer>
    </>
  );
};
const styles = StyleSheet.create({
  buttonstyle: {
    backgroundColor: "black",
    borderWidth: 2,
    borderColor: "white",
    borderRadius: 30,
  },
});
export default AccountScreen;
