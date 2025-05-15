import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

interface NavigationProps {
  iconRight?: keyof typeof Ionicons.glyphMap; // Ícone do lado direito
  text: string; // Texto central (ex: "Detail")
  onBackPress: () => void; // Função de voltar
  onRightPress?: () => void; // Clique no ícone da direita
}

export default function Navigation({
  iconRight,
  text,
  onBackPress,
  onRightPress,
}: NavigationProps) {
  return (
    <View style={styles.container}>
      {/* Ícone de Voltar */}
      <TouchableOpacity onPress={onBackPress}>
        <Ionicons name="chevron-back" size={24} color="black" />
      </TouchableOpacity>

      {/* Texto Centralizado */}
      <Text style={styles.title}>{text}</Text>

      {/* Ícone da Direita (opcional) */}
      {iconRight ? (
        <TouchableOpacity onPress={onRightPress}>
          <Ionicons name={iconRight} size={24} color="black" />
        </TouchableOpacity>
      ) : (
        <View style={{ width: 24 }} /> // Espaço para manter alinhamento
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingVertical: 12,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    position: "absolute",
    left: 0,
    right: 0,
    textAlign: "center",
  },
});
