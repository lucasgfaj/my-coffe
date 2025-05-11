import Ionicons from '@expo/vector-icons/Ionicons';
import React from 'react';
import {
  DimensionValue,
  StyleProp,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';

interface ButtonProps {
  width?: DimensionValue;
  height?: DimensionValue;
  backgroundColor?: string;
  borderRadius?: number;
  text?: string;
  icon?: keyof typeof Ionicons.glyphMap; // Tipagem segura para ícones
  textColor?: string;
  onPress?: () => void;
  style?: StyleProp<ViewStyle>;
  iconColor?: string;
  iconSize?: number;
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
  icon,
  iconColor = '#fff',
  iconSize = 20,
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
      <View style={styles.content}>
        {icon && <Ionicons name={icon} size={iconSize} color={iconColor} />}
        {text && <Text style={[styles.text, { color: textColor, marginLeft: icon ? 8 : 0 }]}>{text}</Text>}
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});
