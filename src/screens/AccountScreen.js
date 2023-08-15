import React, { useContext } from "react";
import { View, StyleSheet, Text } from "react-native";
import { Button } from "@rneui/themed";
import Spacer from "../components/Spacer";
import { Context as AuthContext } from "../context/AuthContext";

const AccountScreen = () => {
  const { signout } = useContext(AuthContext);
  return (
    <>
      <Text style={{ fontSize: 48 }}>AccountScreen </Text>
      <Spacer>
        <Button title="Sign Out" onPress={signout} />
      </Spacer>
    </>
  );
};
const styles = StyleSheet.create({});
export default AccountScreen;
