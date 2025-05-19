// Delivery.tsx
import { products } from '@/mocks/products';
import { useLocalSearchParams } from 'expo-router';
import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

export default function Delivery() {
  const { id } = useLocalSearchParams();
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

      <Text style={styles.title}>Entrega do produto:</Text>
      <Image source={product.image} style={styles.image} />
      <Text style={styles.subtitle}>{product.title}</Text>
      <Text style={styles.price}>Preço: ${product.price}</Text>
      <Text>Entrega estimada em 30 minutos</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    alignItems: 'center',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 12,
  },
  image: {
    width: '100%',
    height: 200,
    resizeMode: 'contain',
    marginBottom: 16,
  },
  subtitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 4,
  },
  price: {
    fontSize: 18,
    color: '#C67C4E',
    marginBottom: 10,
  },
});
