import React from 'react';
import { DimensionValue, StyleProp, StyleSheet, Text, TouchableOpacity, ViewStyle } from 'react-native';

interface ButtonProps {
  width?: DimensionValue;
  height?: DimensionValue;
  backgroundColor?: string;
  borderRadius?: number;
  text: string;
  textColor?: string;
  onPress?: () => void;
  style?: StyleProp<ViewStyle>; // se quiser passar estilo externo
}

export default function Button({
  width = 200,
  height = 50,
  backgroundColor = '#C67C4E',
  borderRadius = 8,
  text,
  textColor = '#fff',
  onPress,
  style,
}: ButtonProps) {
  return (
    <TouchableOpacity
      style={[
        styles.button,
        {
          width,
          height,
          backgroundColor,
          borderRadius,
        },
        style,
      ]}
      onPress={onPress}
    >
      <Text style={[styles.text, { color: textColor }]}>{text}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});
