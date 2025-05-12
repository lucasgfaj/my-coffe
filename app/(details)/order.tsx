import Order from '@/components/Details/Order'
import React from 'react'
import { StyleSheet, View } from 'react-native'


export default function order() {
  return (
    <View style={styles.container}>
      <Order/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})