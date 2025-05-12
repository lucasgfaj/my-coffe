// Detail.tsx
import { products } from "@/mocks/products";
import { useLocalSearchParams, useRouter } from "expo-router"; // Hook correto para pegar os parâmetros
import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import Button from "../ui/Button";
export default function Detail() {
  const { id } = useLocalSearchParams(); // id é do tipo string | undefined
  const router = useRouter();
  const product = products.find((item) => item.id === id);

  if (!product) {
    return (
      <View style={styles.container}>
        <Text>Produto não encontrado</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Image source={product.image} style={styles.image} />
      <Text style={styles.title}>{product.title}</Text>
      <Text>{product.description}</Text>
      <Text style={styles.price}>${product.price}</Text>
      <Text>Rating: {product.rating}</Text>

      <Button
        text="Comprar"
        icon="cart"
        backgroundColor="#C67C4E"
        onPress={() => router.push(`/order?id=${product.id}`)} // navegando para /order com o ID
        style={{ marginTop: 20 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  image: {
    width: "100%",
    height: 250,
    resizeMode: "contain",
    marginBottom: 16,
  },
  title: {
    fontWeight: "bold",
    fontSize: 24,
  },
  price: {
    color: "#C67C4E",
    fontWeight: "bold",
    fontSize: 20,
  },
});
