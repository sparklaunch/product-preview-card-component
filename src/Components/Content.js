import { Image, StyleSheet, Text, View } from "react-native";
import AddToCartButton from "./AddToCartButton";

const Content = () => {
  return (
    <View style={styles.productContainer}>
      <Image
        style={styles.productImage}
        source={require("../../assets/Product.jpg")}
      />
      <View style={styles.contentContainer}>
        <View>
          <Text style={styles.productLabel}>PERFUME</Text>
          <Text style={styles.productTitle}>
            Gabrielle Essence Eau De Parfum
          </Text>
          <Text style={styles.productDetail}>
            A floral, solar and voluptuous interpretation composed by Olivier
            Polge, Perfumer-Creator for the House of CHANEL.
          </Text>
        </View>
        <View>
          <View style={styles.priceLabel}>
            <Text style={styles.discountedPrice}>$149.99</Text>
            <Text style={styles.normalPrice}>$169.99</Text>
          </View>
          <View>
            <AddToCartButton />
          </View>
        </View>
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
    flex: 2,
    justifyContent: "space-between"
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
  },
  priceLabel: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16
  },
  discountedPrice: {
    fontSize: 36,
    fontWeight: "bold",
    color: "rgb(55, 117, 94)",
    marginRight: 10
  },
  normalPrice: {
    fontSize: 14,
    textDecorationLine: "line-through",
    color: "rgb(115, 114, 119)"
  }
});

export default Content;
