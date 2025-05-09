import React from "react";
import { StyleSheet, TextInput, View } from "react-native";
import Button from "./ui/Button";
export default function SearchBar() {
  return (
    <View>
      <TextInput style={styles.input} placeholder="Search coffee" />
      <Button
        width={20}
        height={40}
        backgroundColor="#C67C4E"
        borderRadius={12}
        text="=?"
        textColor="#fff"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});
