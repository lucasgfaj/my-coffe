import { favorites } from "@/mocks/favorites";
import { useActionSheet } from "@expo/react-native-action-sheet";
import { Ionicons } from "@expo/vector-icons"; // Ícone do Expo
import React from "react";
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function Favorite() {
  const { showActionSheetWithOptions } = useActionSheet();

    const onPress = () => {
    const options = ['Remove from Favorites', 'Go to Product', 'Cancel'];
    const destructiveButtonIndex = 0;
    const cancelButtonIndex = 2;

    showActionSheetWithOptions({
      options,
      cancelButtonIndex,
      destructiveButtonIndex
    }, (selectedIndex?: number) => {
      if (selectedIndex === undefined) return;

      switch (selectedIndex) {
        case 1:
          // Save
          break;

        case destructiveButtonIndex:
          // Delete
          break;

        case cancelButtonIndex:
          // Canceled
      }});
    }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Favorites</Text>
      </View>

      <FlatList 
        data={favorites}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Image source={item.image} style={styles.image} />
            <View style={styles.cardDetails}>
              <Text style={styles.title}>{item.title}</Text>
            </View>
            <TouchableOpacity style={styles.favorite} onPress={onPress}>
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
    backgroundColor: "#fff",
  },
  header: {
    backgroundColor: "#313131", 
    padding: 14,
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12,
    alignItems: "center",
  },
  headerText: {
    fontSize: 24,
    color: "#fff",
    fontWeight: "bold",
  },
  card: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 15,
    borderColor: "#fbf8f7",
    borderWidth: 1,
    marginVertical: 5,
    marginHorizontal: 10,
    backgroundColor: "#fcfcfc",
    borderRadius: 16,
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
    fontWeight: "bold",
  },
  favorite: {
    justifyContent: "center",
    alignItems: "center",
  },
});
