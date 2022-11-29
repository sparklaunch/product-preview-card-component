import { Image, StyleSheet, Text, View } from "react-native";

const ProductImage = () => {
  return (
    <View style={styles.productContainer}>
      <Image
        style={styles.productImage}
        source={require("../../assets/Product.jpg")}
      />
      <View style={styles.contentContainer}>
        <Text style={styles.productLabel}>PERFUME</Text>
        <Text style={styles.productTitle}>Gabrielle Essence Eau De Parfum</Text>
        <Text style={styles.productDetail}>
          A floral, solar and voluptuous interpretation composed by Olivier
          Polge, Perfumer-Creator for the House of CHANEL.
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  productContainer: {
    flex: 1
  },
  productImage: {
    width: "100%",
    flex: 1
  },
  contentContainer: {
    padding: 20,
    flex: 2
  },
  productLabel: {
    fontSize: 14,
    letterSpacing: 5,
    color: "rgb(107, 107, 114)",
    marginBottom: 10
  },
  productTitle: {
    fontSize: 32,
    fontWeight: "bold",
    color: "rgb(26, 30, 35)",
    lineHeight: 32,
    marginBottom: 10
  },
  productDetail: {
    fontSize: 16,
    color: "rgb(101, 102, 106)",
    lineHeight: 24
  }
});

export default ProductImage;
