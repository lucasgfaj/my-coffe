import AsyncStorage from "@react-native-async-storage/async-storage";
import { Product } from "../constants/Product";

const FAVORITES_KEY = "favorites";

export async function getFavorites(): Promise<Product[]> {
  try {
    const json = await AsyncStorage.getItem(FAVORITES_KEY);
    if (!json) return [];
    const data = JSON.parse(json);
    return Array.isArray(data) ? data : [];
  } catch (error) {
    console.error("Erro ao buscar favoritos:", error);
    return [];
  }
}

export async function isFavorite(id: string): Promise<boolean> {
  const favorites = await getFavorites();
  return favorites.some(item => item.id === id);
}

export async function addFavorite(product: Product) {
  const favorites = await getFavorites();
  const exists = favorites.find(p => p.id === product.id);
  if (!exists) {
    await AsyncStorage.setItem(FAVORITES_KEY, JSON.stringify([...favorites, product]));
  }
}

export async function removeFavorite(id: string) {
  const favorites = await getFavorites();
  const updated = favorites.filter(p => p.id !== id);
  await AsyncStorage.setItem(FAVORITES_KEY, JSON.stringify(updated));
}
