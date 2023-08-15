import "../_mockLocation";
import React, { useContext, useCallback } from "react";
import { StyleSheet, SafeAreaView, ScrollView } from "react-native";
import { Text } from "@rneui/themed";
import Map from "../components/Map";
import useLocation from "../hooks/useLocation";
import { Context as LocationContext } from "../context/LocationContext";
import { useIsFocused } from "@react-navigation/native";
import TrackForm from "../components/TrackForm";
const TrackCreateScreen = () => {
  const isFocused = useIsFocused();
  //console.log(isFocused);
  const {
    state: { recording },
    addLocation,
  } = useContext(LocationContext);
  const callback = useCallback(
    (location) => {
      addLocation(location, recording);
    },
    [recording]
  );
  const [err] = useLocation(isFocused || recording, callback);
  return (
    <SafeAreaView forceInset={{ top: "always" }} style={{ flex: 1 }}>
      <ScrollView>
        <Text h2 style={{ flex: 1 }}>
          Create a Track
        </Text>
        <Map style={{ flex: 2 }} />
        {err ? <Text>Please enable location services</Text> : null}
        <TrackForm style={{ flex: 3 }} />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default TrackCreateScreen;
