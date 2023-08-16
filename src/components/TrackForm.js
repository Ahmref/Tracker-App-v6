import React, { useContext } from "react";
import { Text, Input, Button } from "@rneui/themed";
import { StyleSheet } from "react-native";
import Spacer from "./Spacer";
import { Context as LocationContext } from "../context/LocationContext";
import useSaveTrack from "../hooks/useSaveTrack";
const TrackForm = () => {
  const {
    state: { name, recording, locations },
    startRecording,
    stopRecording,
    changeName,
  } = useContext(LocationContext);
  const [saveTrack] = useSaveTrack();

  return (
    <>
      <Spacer>
        <Input
          value={name}
          onChangeText={changeName}
          placeholder="Enter name"
        />
      </Spacer>
      <Spacer>
        {recording ? (
          <Button
            title="Stop"
            onPress={stopRecording}
            buttonStyle={styles.buttonstyle}
          />
        ) : (
          <Button
            title="Start Recording"
            onPress={startRecording}
            buttonStyle={styles.buttonstyle}
          />
        )}
      </Spacer>
      <Spacer>
        {!recording && locations.length ? (
          <Button
            title="Save Recording"
            onPress={saveTrack}
            buttonStyle={styles.buttonstyle}
          />
        ) : null}
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
export default TrackForm;
