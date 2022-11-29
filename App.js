import { StyleSheet, Text, View } from "react-native";

const App = () => {
  return (
    <View style={styles.backdrop}>
      <Text>Hello, World!!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  backdrop: {
    flex: 1,
    backgroundColor: "rgb(241, 231, 223)",
  },
});

export default App;
