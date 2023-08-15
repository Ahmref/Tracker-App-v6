import React, { useContext } from "react";
import { Text, Input, Button } from "@rneui/themed";
import Spacer from "./Spacer";
import { Context as LocationContext } from "../context/LocationContext";
const TrackForm = () => {
  const {
    state: { name, recording, locations },
    startRecording,
    stopRecording,
    changeName,
  } = useContext(LocationContext);
  // console.log(locations.length);
  return (
    <>
      <Spacer>
        <Input onChangeText={changeName} placeholder="Enter name" />
      </Spacer>
      <Spacer>
        {recording ? (
          <Button title="Stop" onPress={stopRecording} />
        ) : (
          <Button title="Start Recording" onPress={startRecording} />
        )}
      </Spacer>
      <Spacer>
        {!recording && locations.length ? (
          <Button title="save recording" />
        ) : null}
      </Spacer>
    </>
  );
};

export default TrackForm;
