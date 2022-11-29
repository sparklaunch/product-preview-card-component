import { Pressable, StyleSheet, Text, View } from "react-native";

const AddToCartButton = () => {
  return (
    <Pressable>
      <View style={styles.buttonContainer}>
        {/*<Image*/}
        {/*  style={styles.cartIcon}*/}
        {/*  source={require("../../assets/Cart.svg")}*/}
        {/*/>*/}
        <Text style={styles.buttonText}>Add to Cart</Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    backgroundColor: "rgb(55, 117, 94)",
    borderRadius: 10,
    padding: 16,
    flexDirection: "row",
    justifyContent: "center",
    shadowColor: "gray",
    shadowOffset: {
      width: 0,
      height: 3
    },
    shadowRadius: 10,
    shadowOpacity: 0.5,
    elevation: 5
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold"
  }
  // cartIcon: {
  //   width: 32,
  //   height: 32,
  //   color: "white"
  // }
});

export default AddToCartButton;
