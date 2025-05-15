import Delivery from '@/components/Details/Delivery'
import React from 'react'
import { StyleSheet, View } from 'react-native'


export default function delivery() {
  return (
    <View style={styles.container}>  
      <Delivery/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})