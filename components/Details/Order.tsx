// Order.tsx
import { products } from '@/mocks/products';
import { useLocalSearchParams, useRouter } from 'expo-router';
import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import Button from '../ui/Button';

export default function Order() {
  const { id } = useLocalSearchParams();
  const router = useRouter();

  // Verifique se o id foi encontrado e é uma string
  if (!id || typeof id !== 'string') {
    return (
      <View style={styles.container}>
        <Text style={styles.notFoundText}>ID do produto inválido</Text>
      </View>
    );
  }

  // Agora procuramos o produto com base no id, que é uma string
  const product = products.find((item) => item.id === id);

  if (!product) {
    return (
      <View style={styles.container}>
        <Text style={styles.notFoundText}>Produto não encontrado</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Resumo do Pedido</Text>
      <Image source={product.image} style={styles.image} />
      <Text style={styles.title}>{product.title}</Text>
      <Text style={styles.price}>Preço: ${product.price}</Text>

      <Button
        text="Continuar para Entrega"
        icon="arrow-forward"
        onPress={() => router.push(`/delivery?id=${product.id}`)} // Garantindo que o id seja passado corretamente
        style={{ marginTop: 24 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 24,
    flex: 1,
    backgroundColor: '#fff',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    color: '#333',
  },
  image: {
    width: '100%',
    height: 200,
    resizeMode: 'contain',
    marginBottom: 16,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#555',
  },
  price: {
    fontSize: 18,
    color: '#C67C4E',
    fontWeight: '600',
  },
  notFoundText: {
    fontSize: 16,
    color: 'red',
    textAlign: 'center',
  },
});
