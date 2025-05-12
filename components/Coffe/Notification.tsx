import { notifications } from '@/mocks/notifications';
import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
export default function Notification() {
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Offer Notifications</Text>

      {notifications.map((item) => (
        <View key={item.id} style={styles.notificationCard}>
          {/* Coffee Image */}
          <Image source={item.image} style={styles.image} />

          <View style={styles.notificationDetails}>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.price}>${item.price}</Text>
            <Text style={styles.message}>{item.message}</Text>
          </View>

          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Claim Now</Text>
          </TouchableOpacity>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f4f4', // Soft gray background for the screen
    padding: 15,
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#fff',
    backgroundColor: '#6F4F37', // Brown background for header
    paddingVertical: 15,
    paddingHorizontal: 25,
    borderRadius: 10, // Rounded corners for header
    shadowColor: "#000", // Shadow for a more elegant look
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  notificationCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff', // White background for cards
    padding: 15,
    marginBottom: 20,
    borderRadius: 12, // Larger rounded corners for the cards
    borderWidth: 1,
    borderColor: '#ddd',
    elevation: 5, // Shadow for depth
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
  },
  image: {
    width: 60, // Larger image size for better visual impact
    height: 60,
    borderRadius: 10,
    marginRight: 15,
  },
  notificationDetails: {
    flex: 1,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333', // Dark gray for title for better contrast
  },
  price: {
    fontSize: 16,
    color: '#6F4F37', // Brown color for price
    marginVertical: 5,
  },
  message: {
    fontSize: 14,
    color: '#777', // Lighter gray for the message
  },
  button: {
    backgroundColor: '#6F4F37', // Brown background for button
    paddingVertical: 8,
    paddingHorizontal: 18,
    borderRadius: 8,
    marginLeft: 15,
    alignSelf: 'center',
  },
  buttonText: {
    color: '#fff', // White text on the button
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
