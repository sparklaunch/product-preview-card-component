import { StyleSheet, View } from "react-native";
import ProductImage from "./ProductImage";

const Container = () => {
  return (
    <View style={styles.container}>
      <ProductImage />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 30,
    marginVertical: 80,
    flex: 1,
    backgroundColor: "white",
    borderRadius: 10,
    shadowRadius: 10,
    shadowColor: "gray",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.5,
    elevation: 10,
    overflow: "hidden"
  }
});

export default Container;
