import { favorites } from '@/mocks/favorites';
import { Ionicons } from '@expo/vector-icons'; // Ícone do Expo
import React from 'react';
import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function Favorite() {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerText}>Favorites</Text>
      </View>

      {/* Lista de Produtos */}
      <FlatList
        data={favorites}
        renderItem={({ item }) => (
          <View style={styles.card}>
            {/* Exibindo a imagem */}
            <Image source={item.image} style={styles.image} />
            <View style={styles.cardDetails}>
              <Text style={styles.title}>{item.title}</Text>
            </View>
            <TouchableOpacity style={styles.favorite}>
              <Ionicons name="heart" size={24} color="red" />
            </TouchableOpacity>
          </View>
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    backgroundColor: '#6F4F37', // Cor marrom
    padding: 20,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    alignItems: 'center',
  },
  headerText: {
    fontSize: 24,
    color: '#fff',
    fontWeight: 'bold',
  },
  card: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 8,
    marginRight: 15,
  },
  cardDetails: {
    flex: 1,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  favorite: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
