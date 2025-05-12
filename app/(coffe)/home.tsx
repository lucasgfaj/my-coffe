import Location from "@/components/Coffe/Location";
import SearchBar from "@/components/Coffe/SearchBar";
import StoreList from "@/components/Coffe/StoreList";
import CardImg from "@/components/ui/CardImg";
import Slider from "@/components/ui/Slider";
import { categorys } from "@/mocks/categorys";
import React from "react";
import { ScrollView, StyleSheet, View } from "react-native";

export default function Home() {
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <View style={styles.topSection}>
        <Location />
        <SearchBar />
        <CardImg
          image={require("../../assets/images/art/coffe.png")}
          width={350}
          height={145}
          borderRadius={16}
        />
      </View>

      <View style={styles.bottomSection}>
        <Slider
          style={styles.slider}
          data={categorys}
          width={90}
          height={30}
          backgroundColor="#C67C4E"
          textColor="white"
          borderRadius={8}
          onPressItem={(item) => console.log("Selecionado:", item.name)}
        />
        <View style={styles.storeListContainer}>
          <StoreList />
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  topSection: {
    height: 260,
    backgroundColor: "#313131",
    paddingHorizontal: 20,
    paddingTop: 60,
  },
  bottomSection: {
    paddingBottom: 32,
  },
  slider: {
    marginTop: 100,
    marginLeft: 8,
  },
  storeListContainer: {
    marginLeft: 15,
  },
});
