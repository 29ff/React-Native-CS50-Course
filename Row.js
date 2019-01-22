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
    marginBottom: 10,
    marginLeft: 20
  }
})

export default Row
