import { StyleSheet, View } from "react-native";
import Container from "./src/Components/Container";

const App = () => {
  return (
    <View style={styles.backdrop}>
      <Container />
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
