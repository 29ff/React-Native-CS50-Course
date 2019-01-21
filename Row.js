import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const Row = props => (
  <View style={styles.contact}>
    <Text>{props.name}</Text>
    <Text>{props.phone}</Text>
  </View>
)

const styles = StyleSheet.create({
  contact: {
    marginBottom: 10
  }
})

export default Row
