import React, { useContext } from "react";
import { View, StyleSheet, Text } from "react-native";
import { Context as TrackContext } from "../context/TrackContext";
import MapView, { Polyline } from "react-native-maps";
const TrackDetailScreen = ({ route }) => {
  const { state } = useContext(TrackContext);
  const _id = route.params._id;
  const track = state.find((t) => t._id === _id);
  const initialCoords = track.locations[0].coords;
  return (
    <>
      <Text style={{ fontSize: 48 }}>{track.name} </Text>
      <MapView
        style={styles.map}
        initialRegion={{
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
          ...initialCoords,
        }}
      >
        <Polyline coordinates={track.locations.map((loc) => loc.coords)} />
      </MapView>
    </>
  );
};
const styles = StyleSheet.create({
  map: {
    height: 300,
  },
});
export default TrackDetailScreen;
