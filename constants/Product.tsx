import { ImageSourcePropType } from "react-native";
export interface Product {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  image: ImageSourcePropType; // tipo correto para require()
  rating: number;
  votes?: number; // votes opcional
  price: number | string; // se quiser aceitar string, pode ajustar aqui
}