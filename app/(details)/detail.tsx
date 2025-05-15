
import Detail from '@/components/Details/Detail'
import React from 'react'
import { StyleSheet, View } from 'react-native'
export default function detail() {
  return (
    <View style={styles.container}>
      <Detail/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})