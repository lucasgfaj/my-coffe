import React, { useState } from 'react';
import {
  FlatList,
  Modal,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

const LOCATIONS = ['Bilzen, Tanjungbalai', 'Jakarta', 'São Paulo', 'Bali', 'Curitiba'];

export default function Location() {
  const [selected, setSelected] = useState(LOCATIONS[0]);
  const [modalVisible, setModalVisible] = useState(false);

  const handleSelect = (location: string) => {
    setSelected(location);
    setModalVisible(false);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Location</Text>

      <TouchableOpacity
        style={styles.dropdownButton}
        onPress={() => setModalVisible(true)}
      >
        <Text style={styles.dropdownText}>{selected}</Text>
        <Text style={styles.arrow}>˅</Text>
      </TouchableOpacity>

      <Modal visible={modalVisible} transparent animationType="slide">
        <TouchableOpacity style={styles.modalOverlay} onPress={() => setModalVisible(false)}>
          <View style={styles.modalContent}>
            <FlatList
              data={LOCATIONS}
              keyExtractor={(item) => item}
              renderItem={({ item }) => (
                <TouchableOpacity style={styles.item} onPress={() => handleSelect(item)}>
                  <Text style={styles.itemText}>{item}</Text>
                </TouchableOpacity>
              )}
            />
          </View>
        </TouchableOpacity>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { paddingTop: 80, paddingHorizontal: 20 },
  label: { fontSize: 14, color: '#aaa', marginBottom: 6 },
  dropdownButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#222',
    padding: 12,
    borderRadius: 8,
    justifyContent: 'space-between',
  },
  dropdownText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  arrow: {
    color: '#fff',
    fontSize: 18,
    marginLeft: 10,
  },
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#00000066',
  },
  modalContent: {
    backgroundColor: '#333',
    marginHorizontal: 40,
    borderRadius: 10,
    paddingVertical: 20,
    paddingHorizontal: 10,
  },
  item: {
    paddingVertical: 12,
    paddingHorizontal: 10,
  },
  itemText: {
    color: '#fff',
    fontSize: 16,
  },
});
