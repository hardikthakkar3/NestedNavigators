import { View, Text, StyleSheet } from "react-native";
import CounterView from "./src/components/CounterView";
import CounterButtons from "./src/components/CounterButtons";
import { Provider } from "react-redux";
import store from "./src/store/store";

export default function App() {
  return (
    <Provider store={store}>
      <View style={styles.container}>
        <CounterView />
        <CounterButtons />
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
});
