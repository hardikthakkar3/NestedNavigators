import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { useSelector } from "react-redux";

const CounterView = () => {
  const countReducer = useSelector((state) => state.countReducer);
  console.log(countReducer);
  return (
    <View style={{ padding: 20, alignSelf: "center" }}>
      <Text style={{ fontSize: 30, color: "red" }}>
        Count {countReducer.count}
      </Text>
    </View>
  );
};

export default CounterView;

const styles = StyleSheet.create({});
