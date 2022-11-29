import { Image, StyleSheet, View } from "react-native";

const ProductImage = () => {
  return (
    <View>
      <Image
        style={styles.productImage}
        source={require("../../assets/Product.jpg")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  productImage: {
    width: "100%",
    height: 300
  }
});

export default ProductImage;
