// StoreList.tsx
import { products } from '@/mocks/products';
import { useRouter } from 'expo-router'; // Importando o hook useRouter
import React from 'react';
import { Dimensions, FlatList, StyleSheet, View } from 'react-native';
import StoreCard from './StoreCard';

const { width } = Dimensions.get('window');
const CARD_GAP = 16;
const CARD_WIDTH = (width - CARD_GAP * 3) / 2; // 2 cards por linha

export default function StoreList() {
  const router = useRouter(); // Usando o router

  const handlePress = (productId: string) => {
    // Navega para a tela de detalhes passando o ID do produto como parâmetro
    router.push(`/(details)/detail?id=${productId}`);
  };

  return (
    <FlatList
      data={products}
      keyExtractor={(item) => item.id}
      numColumns={2} // Configura 2 cards por linha
      showsVerticalScrollIndicator={false} // Remove a barra de rolagem vertical
      scrollEnabled={false} // Desabilita a rolagem
      contentContainerStyle={styles.listContent}
      renderItem={({ item }) => (
        <View style={[styles.cardContainer, { width: CARD_WIDTH }]}>
          <StoreCard
            image={item.image}
            title={item.title}
            description={item.description}
            price={item.price}
            rating={item.rating}
            onPressAdd={() => console.log('Adicionado:', item.title)}
            onPress={() => handlePress(item.id)} // Passa o ID para a navegação
          />
        </View>
      )}
    />
  );
}

const styles = StyleSheet.create({
  listContent: {
    paddingHorizontal: 16,
    paddingBottom: 20,
  },
  cardContainer: {
    marginBottom: 16,
  },
});
