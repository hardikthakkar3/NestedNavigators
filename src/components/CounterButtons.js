import { Button, StyleSheet, Text, View } from "react-native";
import React from "react";
import { useDispatch } from "react-redux";
import {
  decrementCount,
  incrementCount,
} from "../store/actions/CounterActions";

const CounterButtons = () => {
  const dispatch = useDispatch();
  return (
    <View
      style={{
        padding: 30,
        flexDirection: "row",
        justifyContent: "space-around",
      }}
    >
      <Button
        style={{ fontSize: 24 }}
        title="Decrement"
        onPress={() => dispatch(decrementCount())}
      />
      <Button
        style={{ fontSize: 24 }}
        title="Increment"
        onPress={() => dispatch(incrementCount())}
      />
    </View>
  );
};

export default CounterButtons;

const styles = StyleSheet.create({});
